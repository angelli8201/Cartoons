drop database if exists cartoons;
create database cartoons;
use cartoons;

-- create tables and relationships
create table `user` (
    user_id int primary key auto_increment,
    user_name varchar(25) not null unique,
    pass_word varchar(25) not null
);

create table post (
    post_id int primary key auto_increment,
	title varchar(50) not null,
    caption varchar(250) not null,
    `reference` varchar(50) null,
    user_id int not null,
    constraint fk_user_user_id
        foreign key (user_id)
        references `user`(user_id)
);

-- data

insert into `user`(user_id, user_name, pass_word) values
	(1, 'Lily', '1234'),
	(2, 'Angel', '4321'),
	(3, 'Patrick', '5678');
	
insert into post (post_id, title, caption, `reference`, user_id)
	values
(1, 'Hello World!', 'So Funny!', 'Spongebob Squarepants',  1),
(2, 'I am super cool!', 'Bet!', 'Gravity Falls', 2);

