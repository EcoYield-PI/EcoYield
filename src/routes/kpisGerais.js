var express = require("express");
var router = express.Router();

var kpiGeralController = require("../controllers/kpiGeralController.js");

router.get("/deptoAlerta/:idEmpresa", function (req, res) {
    kpiGeralController.mostrarQtdDeptoEmAlerta(req, res);
});

router.get("/deptoTotal/:idEmpresa", function (req, res) {
    kpiGeralController.mostrarTotalDeptoEmpresa(req, res);
});

router.get("/conjTotal/:idEmpresa", function (req, res) {
    kpiGeralController.mostrarTotalConjSensores(req, res);
});

router.get("/conjAlerta/:idEmpresa", function (req, res) {
    kpiGeralController.mostrarTotalConjSensoresAlerta(req, res);
});

router.get("/qtdAlerta2h/:idEmpresa", function (req, res) {
    kpiGeralController.mostrarTotalAlertaUltimas2h(req, res);
});

router.get("/ultimoAlertaDepto/:idEmpresa", function (req, res) {
    kpiGeralController.mostrarDeptoUltimoAlerta(req, res);
});

router.get("/tempMaisAltaEDthora/:idEmpresa", function (req, res) {
    kpiGeralController.mostrarTempMaisAltaEDtHora(req, res);
});

router.get("/tempMenorEDthora/:idEmpresa", function (req, res) {
    kpiGeralController.mostrarTempMenorEDtHora(req, res);
});


module.exports = router;