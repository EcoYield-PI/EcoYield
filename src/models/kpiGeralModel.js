var database = require("../database/config");

function mostrarQtdDeptoEmAlerta(idEmpresa) {

    var instrucaoSql = `select 
        count(distinct cs.fkDepartamento) totalDeptoAlerta
        from conjuntoSensor cs
        inner join empresa emp on cs.fkempresa = emp.id
        inner join leitura lt on lt.fkconjuntoSensor = cs.id
        where emp.id = ${idEmpresa} and (temperatura < 18 or temperatura > 25)
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
        AND (lt.temperatura < 18 OR lt.temperatura > 25)
        AND lt.dtHora = (
            SELECT MAX(dtHora)
            FROM leitura sub_lt
            WHERE sub_lt.fkconjuntoSensor = lt.fkconjuntoSensor
        );`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarTotalAlertaUltimas2h(idEmpresa) {

    var instrucaoSql = `SELECT 
        count(lt.id) qtdAlertas2h
        FROM leitura lt
        inner join conjuntoSensor cs on lt.fkconjuntoSensor = cs.id
        inner join empresa emp on cs.fkempresa = emp.id
        WHERE emp.id = ${idEmpresa}
        and lt.dtHora >= DATE_SUB(NOW(), INTERVAL 2 HOUR) 
        and (lt.temperatura > 25.00 or lt.temperatura < 18.00);`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarDeptoUltimoAlerta(idEmpresa) {

    var instrucaoSql = `select
        depto.nome depto,
        date_format(lt.dtHora, '%d/%m/%y as %H:%i') momento
        from departamento depto
        inner join conjuntoSensor cs on cs.fkdepartamento = depto.id
        inner join empresa emp on cs.fkempresa = emp.id
        inner join leitura lt on lt.fkconjuntoSensor = cs.id
        where emp.id = ${idEmpresa}
        and (lt.temperatura < 18 or lt.temperatura > 25)
        order by lt.id desc
        limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarTempMaisAltaEDtHora(idEmpresa) {

    var instrucaoSql = `select
        depto.nome depto,
        date_format(lt.dtHora, '%H:%i') momento,
        lt.dtHora,
        max(round(lt.temperatura, 1)) tempAlta
        from leitura lt
        inner join conjuntosensor cs on lt.fkconjuntoSensor = cs.id
        inner join empresa emp on cs.fkempresa = emp.id
        inner join departamento depto on cs.fkdepartamento = depto.id
        where emp.id = ${idEmpresa} and lt.dtHora >= DATE_SUB(NOW(), INTERVAL 2 HOUR)
        group by depto, dtHora
        order by tempAlta desc
        limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarTempMenorEDtHora(idEmpresa) {

    var instrucaoSql = `select
        depto.nome depto,
        date_format(lt.dtHora, '%H:%i') momento,
        lt.dtHora,
        min(round(lt.temperatura, 1)) tempBaixa
        from leitura lt
        inner join conjuntosensor cs on lt.fkconjuntoSensor = cs.id
        inner join empresa emp on cs.fkempresa = emp.id
        inner join departamento depto on cs.fkdepartamento = depto.id
        where emp.id = ${idEmpresa} and lt.dtHora >= DATE_SUB(NOW(), INTERVAL 2 HOUR)
        group by depto, dtHora
        order by tempBaixa
        limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    mostrarQtdDeptoEmAlerta,
    mostrarTotalDeptoEmpresa,
    mostrarTotalConjSensores,
    mostrarTotalConjSensoresAlerta,
    mostrarTotalAlertaUltimas2h,
    mostrarDeptoUltimoAlerta,
    mostrarTempMaisAltaEDtHora,
    mostrarTempMenorEDtHora
}
