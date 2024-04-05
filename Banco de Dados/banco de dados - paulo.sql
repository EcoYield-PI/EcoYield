/* 1. No MySQL Workbench, utilizando o banco de dados ‘Eco Yuld’: */
create database EcoYield;

-- colocar o database em uso
use EcoYield;

/* criar tabela chamada EcoYuld para conter os comandos: idEmpresa(int e chave primária da 
tabela), nome(varchar tamanho 50), representante(varchar tamnho 40), cep(tamanho 9) exemplo: '01515-999', 
email(varchar tamnho 40), dtContrato(date)data de inicio do contrato)*/
create table EcoYield (
	idEmpresa int primary key,
    nome varchar(50),
    representante varchar(40),
    email varchar(40),
    cep char(9),
    dtContrato date
);

-- Inserir dados na tabela
insert into EcoYield values
	(1,'Rappi','João','joao@rappi.com',06020-010,'2023-08-14'),
    (2,'SPTECH','Frizza','frizza@sptech.com',01414-905,'2023-03-08'),
    (3,'Banco Safra','Cristiano','cristiano@safra.com',09890-007,'2024-01-05'),
	(4,'Tivit','leonardo','leonardo@tivit.com',070250-398,'2024-02-10');
    
-- Exibir todos os dados da tabela.
select * from EcoYield;

create table sensores(
	idSensores int primary key auto_increment,
    temperatura decimal(5,2),
    umidade decimal(5,2)
);

insert into sensores values
	()




