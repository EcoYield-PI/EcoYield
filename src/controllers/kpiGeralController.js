var kpiGeralModel = require("../models/kpiGeralModel.js");

function mostrarQtdDeptoEmAlerta(req, res) {

    var idEmpresa = req.params.idEmpresa;

    kpiGeralModel.mostrarQtdDeptoEmAlerta(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function mostrarTotalDeptoEmpresa(req, res) {

    var idEmpresa = req.params.idEmpresa;

    kpiGeralModel.mostrarTotalDeptoEmpresa(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function mostrarTotalConjSensores(req, res) {

    var idEmpresa = req.params.idEmpresa;

    kpiGeralModel.mostrarTotalConjSensores(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function mostrarTotalConjSensoresAlerta(req, res) {

    var idEmpresa = req.params.idEmpresa;

    kpiGeralModel.mostrarTotalConjSensoresAlerta(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function mostrarTotalAlertaUltimas2h(req, res) {

    var idEmpresa = req.params.idEmpresa;

    kpiGeralModel.mostrarTotalAlertaUltimas2h(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function mostrarDeptoUltimoAlerta(req, res) {

    var idEmpresa = req.params.idEmpresa;

    kpiGeralModel.mostrarDeptoUltimoAlerta(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function mostrarTempMaisAltaEDtHora(req, res) {

    var idEmpresa = req.params.idEmpresa;

    kpiGeralModel.mostrarTempMaisAltaEDtHora(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function mostrarTempMenorEDtHora(req, res) {

    var idEmpresa = req.params.idEmpresa;

    kpiGeralModel.mostrarTempMenorEDtHora(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
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