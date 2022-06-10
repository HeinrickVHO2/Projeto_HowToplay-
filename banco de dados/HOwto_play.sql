create database Howto_play;
use Howto_play;
create table usuario( 
idusuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
instrumento varchar(45),
experiencia varchar(15),
constraint chk_tipo check( experiencia = 'básico' and experiencia = 'intermediário' and experiencia = 'avançado'),
senha varchar(100)
);
select*from usuario;

create table Compra(
idCompra int primary key auto_increment,
produto varchar(45),
preço double, 
quantidade int,
fkusuario int,

foreign key (fkusuario) references usuario(idusuario));
