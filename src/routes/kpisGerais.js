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


module.exports = router;