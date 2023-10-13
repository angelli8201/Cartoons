drop database if exists cartoons_test;
create database cartoons_test;
use cartoons_test;

create table `user` (
    user_id int primary key auto_increment,
    user_name varchar(50) not null unique,
    pass_word varchar(2048) not null,
    enabled bit not null default(1)
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


create table app_role (
    app_role_id int primary key auto_increment,
    `name` varchar(50) not null unique
);

create table app_user_role (
    user_id int not null,
    app_role_id int not null,
    constraint pk_app_user_role
        primary key (user_id, app_role_id),
    constraint fk_app_user_role_user_id
        foreign key (user_id)
        references `user`(user_id),
    constraint fk_app_user_role_role_id
        foreign key (app_role_id)
        references app_role(app_role_id)
);

delimiter //
create procedure set_known_good_state()
begin
	delete from app_user_role;
    delete from app_role;
    alter table app_role auto_increment = 1;
    delete from `user`;
    alter table `user` auto_increment = 1;
	delete from post;
    alter table post auto_increment = 1;
    delete from `user`;
    alter table `user` auto_increment = 1;

        
    insert into `user`(user_id, user_name, pass_word) values
	(1, 'Lily', '1234'),
	(2, 'Angel', '4321'),
	(3, 'Patrick', '5678');
	
	insert into post (post_id, title, caption, `reference`, user_id)
	values
	(1, 'Hello World!', 'So Funny!', 'Spongebob Squarepants',  1),
	(2, 'I am super cool!', 'Bet!', 'Gravity Falls', 2);
    
	insert into app_role (`name`) values
		('TEST_ROLE_1'),
		('TEST_ROLE_2');

	-- passwords are set to "P@ssw0rd!"
	insert into `user` (user_name, pass_word, enabled)
		values
		('appuser1@app.com', 'password_hash_1', 1),
		('appuser2@app.com', 'password_hash_2', 1);

	insert into app_user_role
		values
		(1, 1),
		(2, 2);
        

end //
delimiter ;