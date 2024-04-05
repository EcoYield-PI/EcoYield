CREATE DATABASE EcoYield;
USE EcoYield;

CREATE TABLE Monitoramento (
    id_monitoramento INT AUTO_INCREMENT PRIMARY KEY,
    msala varchar (100),
    temperatura DECIMAL(5, 2),
    umidade DECIMAL(5, 2),
    data_hora DATETIME
);

CREATE TABLE Cadastro (
    id_cadastro INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo varchar (75),
    nome_empresa VARCHAR(100),
    telefone varchar(11),
    email varchar(255)
);

INSERT INTO Monitoramento ( msala, temperatura, umidade, data_hora) 
VALUES 
('Escritorio 24', 25.5, 60.2, '2024-03-17 08:00:00'),
('Sala de Reunião', 24.8, 58.7, '2024-03-17 09:15:00'),
('Escritorio 12', 26.3, 62.1, '2024-03-17 09:30:00'),
('Escritorio 7', 25.9, 59.5, '2024-03-17 10:20:00'),
('Escritorio 2', 24.2, 57.8, '2024-03-17 11:00:00');

insert into Cadastro (nome_completo, nome_empresa, telefone, email)
values ('Ana Carolina da Silva', 'Itau', '992937-9282', 'ana@gmail.com'),
('Pedro Henrique Oliveira Santos', 'Rappi', '893298-9328', 'pedro@gmail.com'),
('Maria Fernanda Pereira Costa', 'Bradesco', '980108-9392', 'maria@gmail.com'),
('Lucas Gabriel Souza Lima', 'Ifood', '903903-8238', 'lucas@gmail.com'),
('Juliana Oliveira Rodrigues', 'Google', '903930-8391', 'juliana@gmail.com');


select*from Monitoramento;
select*from Cadastro;

drop database EcoYield;