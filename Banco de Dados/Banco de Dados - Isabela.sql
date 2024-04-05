create database sprint1;
use sprint1;

create table cadastroEmpresa (
    idEmpresa INT auto_increment,
    nomeEmpresa VARCHAR(50) NOT NULL,
    CNPJ CHAR(14) NOT NULL,
    CEP CHAR(8) NOT NULL,
    numero char(4),
    nomeUsuario VARCHAR(50) NOT NULL,
    emailUsuario VARCHAR(45)NOT NULL,
    senha VARCHAR(20) NOT NULL,
    PRIMARY KEY (idEmpresa)
);

create table loginEmpresa (
    nomeUsuario VARCHAR(50) NOT NULL,
    emailUsuario VARCHAR(45)NOT NULL,
    senha VARCHAR(20) NOT NULL
);

create table ambienteEmpresa (
    idAmbiente int PRIMARY KEY auto_increment,
    departamento VARCHAR(45),
    qntDHT11 int,
    qntLM35 int
);  


create table dadosSensor (
    idDados int PRIMARY KEY auto_increment,
    valorTemperaturaDht float,
    valorTemperaturaLm float,
    valorUmidadeDht float,
    dataHora datetime
);
