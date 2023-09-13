create database auxipb;

use auxipb;

create table subject(
    id serial primary key,
    name varchar(250) not null,
    description varchar(250) not null,
    credits int not null,
    professor varchar(250) not null,
);