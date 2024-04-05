create database Projeto;
use Projeto;

create table Empresa (
idEmpresa int primary key auto_increment,
Nome varchar(50),
Lucro_Mensal int,
qntFuncionarios int,
Taxa_Absenteismo int,
Pretesão_deLucro int);

insert into Empresa (Nome, Lucro_Mensal, qntFuncionarios, Taxa_Absenteismo, Pretesão_deLucro)
values ('Banco Safra', 1000000, 10000, 35, 2000000),
('Itau', 3000000, 15000, 20, 7500000),
('Bradesco', 2000000, 12000, 30, 3000000);
   
   create table Ambiente (
   idAmbiente int primary key auto_increment,
   Nome_Ambiente varchar(50),
   Sensores_Utilizados varchar (50) 
   constraint ckSensores check (Sensores_Utilizados in ('Temperatura', 'Umidade', 'Temperatura e Umidade')));
   
insert into Ambiente (Nome_Ambiente, Sensores_Utilizados)
values ('Escritório', 'Temperatura e Umidade'),
('Escritório', 'Temperatura'),
('Sala de Reunião', 'Temperatura e Umidade');

create table DadosSensores (
idSensor int primary key auto_increment,
Temperatura decimal(5, 2),
Umidade decimal(5, 2),
data_horario date);

insert into DadosSensores (Temperatura, Umidade, data_horario)
values (23.5, 20.2, '2024-10-13'),
(30.6, 26.5, '2024-03-10'),
(23.5, 22.7, '2024-03-13');  


   