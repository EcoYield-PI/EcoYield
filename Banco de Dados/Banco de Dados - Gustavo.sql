-- Criação do database da empresa
create database ecoyield;

-- Use Database
use ecoyield;

-- Criação da tabela Empresa para registrar as empresas cadastradas
create table Empresa (
idEmpresa int auto_increment,
nomeEmpresa varchar(45),
CNPJ char(18),
segmentoEmpresa varchar(45),
endereco varchar(200),
primary key (idEmpresa)
) auto_increment = 100;

-- Criação da tabela Usuario para registros dos usuários cadastrados
create table Usuario (
idUsuario int auto_increment,
nomeUsuario varchar(60),
senhaUsuario varchar(20),
emailUsuario varchar(60),
primary key (idUsuario)
);

-- Criação da tabela ambienteEscritorio para registro de alertas da temperatura e umidade do escritorio monitorado
create table ambienteEscritorio (
idAmbiente int auto_increment,
departamento varchar(40),
primary key (idAmbiente)
);

-- Criação da tabela Sensor para registro da descrição dos sensores
create table Sensor (
idSensor int primary key auto_increment,
sensoresUtilizados varchar(45),
quantidadeSensores int,
alertaVerde varchar(40),
alertaAmarelo varchar(40),
alertaVermelho varchar(40),
constraint ckSensores check (sensoresUtilizados in ('Temperatura', 'Umidade', 'Temperatura e Umidade'))
);

-- Criação de tabela dadosSensor para registro dos dados
create table dadosSensor (
idDados int auto_increment,
valorTemperatura float,
valorUmidade float,
dataHora datetime,
primary key (idDados)
);

-- Inserção de valores na tabela Empresa
insert into Empresa values
(null, 'C6 Bank', '31.872.495/0001-72', 'Financeiro', 'Av. Nove de Julho, 3186 - Jardim Paulista'),
(null, 'Jazz Tech', '35.496.855/0001-30', 'Financeiro', 'Av. Rebouças, 1368 - Pinheiros'),
(null, 'Itaú', '60.701.190/0001-04', 'Financeiro', 'R. Guaratuba, 306 - Vila Guarani'),
(null, 'Accenture', '96.534.094/0001-58', 'Consultoria', 'Rua Alexandre Dumas, 2051 - Chácara Santo Antônio (Zona Sul)'),
(null, 'Safra', '58.160.789/0001-28', 'Financeiro', 'Av. Paulista, 2100 - Bela Vista');

-- Inserção de valores na tabela ambienteEscritorio
insert into ambienteEscritorio (departamento) values
('Sala do Gerente'),
('Escritório TI'),
('Escritório da Administração'),
('Escritório dos LapTops'),
('Escritório do RH');

-- Inserção de valores na tabela Sensor
insert into Sensor (sensoresUtilizados, quantidadeSensores) values
('Temperatura', 2),
('Umidade', 1),
('Temperatura e Umidade', 3),
('Temperatura', 1),
('Temperatura e Umidade', 2),
('Umidade', 2);

-- Exibir os dados da tabela empresa
select * from Empresa;

-- Exibir os dados da tabela ambienteEscritorio
select * from ambienteEscritorio;

-- Inserir dados na tabela Usuario
insert into Usuario (nomeUsuario, emailUsuario, senhaUsuario) values
('Joao', 'joao123@sptech.school', 'joao123'),
('Gustavo', 'gustavo321@sptech.school', 'gustavo321'),
('Paulo', 'paulo132@sptech.school', 'paulo132');

-- Exibir os dados da tabela Usuario
select * from Usuario;

-- Inserir dados na tabela dadosSensor
insert into dadosSensor(valorTemperatura, valorUmidade, dataHora) values
(26, 20, '2024-03-17 14:37:01'),
(28, 22, '2024-03-17 14:42:02');

-- Exibir os dados da tabela dadosSensor
select * from dadosSensor;

-- Drop Database
drop database ecoyield;