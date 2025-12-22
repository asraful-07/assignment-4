--TODO create database rental
create table users (
  user_id serial primary key,
  name varchar(100) not null,
  email varchar(100) unique not null,
  phone varchar(20),
  role varchar(20) not null check (role in ('admin', 'customer')),
)