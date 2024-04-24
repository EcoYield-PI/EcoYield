create database ecoyield;

use ecoyield;

create table empresa(
idEmpresa int primary key auto_increment,
nome varchar(50),
cnpj varchar(18),
chaveAcesso char(10),
cep char(9)
);

create table funcionario(
idFuncionario int primary key auto_increment, 
nome varchar(30),
sobrenome varchar(30),
rg char(12),
cpf char(14),
email varchar(60),
senha varchar(20),
fkEmpresa int,
constraint fk_empresa_funcionario foreign key(fkEmpresa) references empresa(idEmpresa)
);

create table ambienteEmpresa( 
idAmbiente int primary key auto_increment,
descricao varchar(50),
fkEmpresa int,
fkfuncionario int,
constraint fk_empresa_ambiente foreign key (fkEmpresa) references empresa(idEmpresa),
constraint fk_funcionario foreign key (fkfuncionario) references funcionario(idfuncionario)
);

create table sensor(
idSensor int primary key auto_increment,
tipo varchar(11),
fkAmbienteEmpresa int,
 constraint fk_ambiente_sensor foreign key (fkAmbienteEmpresa) references ambienteEmpresa(idAmbiente)
);

create table leitura(
idLeitura int auto_increment,
temperatura decimal(3,1),
dtHora datetime,
fkSensor int,
constraint fk_sensor foreign key (fkSensor) references sensor(idSensor),
primary key (idLeitura, fkSensor)
);

insert into empresa (nome, cnpj, chaveAcesso, cep) 
values ('ByteWorks Tech', '81.036.863/0001-10', 'K4hT9fR7pE', '04673-040'),
	('CodeGenius Solutions', '65.915.538/0001-71', 'x2G5sP3qA7', '09435-130'),
	('TechVision Innovations', '73.213.903/0001-24', 'M8jN6wT0zY', '02851-010'),
	('NexusSoft Labs', '12.084.714/0001-04', 'R3fX9uS1vQ', '16070-201'),
	('DigitalEdge Technologies', '63.848.741/0001-47', 'Y5dK1mH8oL', '02243-020');
    
insert into funcionario (nome, sobrenome, rg, cpf, email, senha, fkempresa)
values ('Lorena', 'Garcia', '9876543-2', '987.654.321-00', 'lorena.garcia@email.com', 'passL0r3n@', 3),
	('Lucas', 'Ribeiro', '1122334-5', '112.233.445-56', 'lucas.ribeiro@email.com', 'lRiB#4321', 1),
	('Isabela', 'Martins', '7788990-1', '778.899.011-22', 'isabela.martins@email.com', 'Martins@123', 4),
	('Diego', 'Nogueira', '3344556-7', '334.455.667-78', 'diego.nogueira@email.com', 'N0gueir@D1eg0', 2),	
	('Juliana', 'Pereira', '5566778-9', '556.677.889-90', 'juliana.pereira@email.com', 'Juli@123', 5),
	('Ricardo', 'Almeida', '9900112-3', '990.011.223-34', 'ricardo.almeida@email.com', 'Alm#1122', 1);
    
insert into ambienteEmpresa (descricao, fkempresa, fkfuncionario)
values ('Área de Desenvolvimento 1', 1, 2),
	('Área de Desenvolvimento 2', 1, 6),
	('Área de Desenvolvimento 1', 3, 1),
	('Área de Desenvolvimento 3', 4, 3),
	('Área de Desenvolvimento 2', 5, 5),
	('Área de Desenvolvimento 1', 2, 4);
    
insert into sensor (tipo, fkambienteEmpresa)
values ('Umidade', 1),
	('Temperatura', 1),
	('Umidade', 2),
	('Temperatura', 2),
	('Umidade', 3),
	('Temperatura', 3),
	('Umidade', 4),
	('Temperatura', 4),
	('Umidade', 5),
	('Temperatura', 5),
	('Umidade', 6),
	('Temperatura', 6);

insert into leitura (temperatura, dtHora, fksensor)
values (25.5, 60.2, '2024-04-11 08:00:00', 1),
	(24.8, 59.7, '2024-04-11 08:15:00', 2),
	(26.3, 61.5, '2024-04-11 08:30:00', 3),
	(24.2, 58.9, '2024-04-11 08:45:00', 1),
	(27.1, 62.0, '2024-04-11 09:00:00', 2),
	(25.9, 61.3, '2024-04-11 09:15:00', 3),
	(26.8, 60.8, '2024-04-11 09:30:00', 1),
	(25.1, 59.4, '2024-04-11 09:45:00', 2),
	(27.3, 62.5, '2024-04-11 10:00:00', 3),
	(24.6, 58.2, '2024-04-11 10:15:00', 1);
    
    select * from empresa;
    select * from funcionario;
    select * from ambienteEmpresa;
    select * from sensor;
    select * from leitura;	
    select * from leituraArduino;	
    
create table leiturinha(
idLeitura int primary key auto_increment,
temperatura decimal(4,2),
dtHora datetime
);

create table leituraArduino(
id int primary key auto_increment,
temperatura decimal(4,2),
dtHora timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()
);

select * from leituraArduino;

truncate table leituraArduino;