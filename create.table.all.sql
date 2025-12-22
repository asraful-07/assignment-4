--TODO create database rental
--* create table users
create table users (
  user_id serial primary key,
  name varchar(100) not null,
  email varchar(100) unique not null,
  phone varchar(20),
  role varchar(20) not null check (role in ('admin', 'customer'))
);

--* create table vehicles
create table vehicles ( 
    vehicles_id serial primary key, 
    name varchar(200) not null, 
    type varchar(20) not null check (type in ('car', 'bike', 'truk', 'van')), 
    model int, 
    registration_number varchar(100) unique not null, 
    rental_price int, 
    status varchar(20) not null default 'available' 
);

--* create table booking
create table bookings (
  booking_id serial primary key,
  user_id int not null references users(user_id),
  vehicle_id int not null references vehicles(vehicle_id),
  start_date date not null,
  end_date date not null,
  status varchar(20) not null check (status in ('pending', 'confirmed', 'completed')),
  total_cost int not null
);
