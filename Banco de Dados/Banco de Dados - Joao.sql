create database ecoYield;
use ecoYield;

create table cadastro (
idCadastro int auto_increment,
email varchar(100),
senha varchar(16),
nomeUsuario varchar(45),
dtCadastro date,
endereco varchar(100),
primary key (idCadastro),
unique ux_email(email),
key ix_email(email),
key ix_usuario(nomeUsuario)
);

insert into cadastro 
values (default, 'c6bank@emp.com', '1234', 'C6Bank', '2000-04-03', 'Rua Faria Lima, 15'),
       (default, 'rappi@emp.com', '2345', 'Rappi', '2005-05-03', 'Rua Faria Lima, 244'),
       (default, 'google@emp.com', '3456', 'Google', '2015-07-03', 'Rua Faria Lima, 266'),
       (default, 'json@emp.com', '4567', 'Json', '2011-09-03', 'Rua Faria Lima, 277'),
       (default, 'java@emp.com', '5678', 'Java', '2006-10-03', 'Rua Faria Lima, 213');
       
select * from cadastro;

select nomeUsuario as Usuário, email as Email,endereco as Logradouro
from cadastro;

create table empresa (
idEmpresa int auto_increment,
nomeEmpresa varchar(50),
segmento varchar(40),
representante varchar(50),
fkCadastro int,
primary key (idEmpresa), 
constraint cns_fkCadastro foreign key (fkCadastro) references cadastro(idCadastro),
key ix_empresa(nomeEmpresa),
key ix_rep(representante),
key ix_seg(segmento)
)auto_increment=100;

insert into empresa
values (default, 'C6Bank', 'Banco', 'Berta', '1'),
	   (default, 'Rappi', 'Delivery', 'Joao', '2'),
       (default, 'Google', 'Pesquisa', 'Soul', '3'),
       (default, 'Json', 'Código', 'Marcio', '4'),
       (default, 'Java', 'Código', 'Leila', '5');

select * from empresa;

select nomeEmpresa as Empresa, 
representante as Rep, 
nomeUsuario as Usuário, 
email as Email,
endereco as Logradouro
from empresa as emp inner join cadastro as cad 
on emp.fkCadastro = cad.idCadastro;

create table escritorio (
idEscritorio int auto_increment,
departamento varchar(50),
andar int,
fkEmpresa int,
primary key (idEscritorio),
foreign key (fkEmpresa) references empresa(idEmpresa),
key ix_depart(departamento)
);  

insert into escritorio

create table ambiente (
idAmbiente int,
nomeSensor varchar(5),
temperatura float,
temperaturaDHT11 float,
umidade float,
dataMedicao dateTime,
fkEscritorio int,
fkEmpresa int,
primary key (idAmbiente),
foreign key (fkEscritorio) references escritorio(idEscritorio),
foreign key (fkEmpresa) references empresa(idEmpresa),
key ix_temp(temperatura),
key ix_umid(umidade)
);

create table suporte (
idTicket int,
mensagem varchar(255),
fkEmpresa int,
fkCadastro int,
primary key (idTicket),
foreign key (fkEmpresa) references empresa(idEmpresa),
foreign key (fkCadastro) references cadastro(idCadastro),
key ix_empresaTicket(fkEmpresa)
);




