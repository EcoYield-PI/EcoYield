var database = require("../database/config");

function mostrarQtdDeptoEmAlerta(idEmpresa) {

    var instrucaoSql = `select 
        count(distinct cs.fkDepartamento) totalDeptoAlerta
        from conjuntoSensor cs
        inner join empresa emp on cs.fkempresa = emp.id
        inner join leitura lt on lt.fkconjuntoSensor = cs.id
        where emp.id = ${idEmpresa} and (temperatura <= 18 or temperatura >= 25)
        AND dtHora = (
            SELECT MAX(dtHora)
            FROM leitura 
            WHERE leitura.id = lt.id
        ); `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarTotalDeptoEmpresa(idEmpresa) {

    var instrucaoSql = `select 
        count(distinct fkdepartamento) qtdTotalDepartamento 
        from conjuntoSensor 
        where fkempresa = ${idEmpresa}; `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarTotalConjSensores(idEmpresa) {

    var instrucaoSql = `select 
        count(cs.id) totalConj
        from conjuntoSensor cs
        inner join empresa emp on cs.fkempresa = emp.id
        where emp.id = ${idEmpresa}; `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarTotalConjSensoresAlerta(idEmpresa) {

    var instrucaoSql = `SELECT count(DISTINCT cs.id) AS totalConjAlerta
        FROM conjuntoSensor cs
        INNER JOIN empresa emp ON cs.fkempresa = emp.id
        INNER JOIN leitura lt ON lt.fkconjuntoSensor = cs.id
        WHERE cs.fkempresa = ${idEmpresa}
        AND (lt.temperatura <= 18 OR lt.temperatura >= 25)
        AND lt.dtHora = (
            SELECT MAX(dtHora)
            FROM leitura sub_lt
            WHERE sub_lt.fkconjuntoSensor = lt.fkconjuntoSensor
        );`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    mostrarQtdDeptoEmAlerta,
    mostrarTotalDeptoEmpresa,
    mostrarTotalConjSensores,
    mostrarTotalConjSensoresAlerta
}
