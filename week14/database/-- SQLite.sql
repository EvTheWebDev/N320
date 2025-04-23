-- SQLite
create table games (
gameId integer primary key autoincrement,
name text not null
);

insert into games (name)
values ('Portal'),
       ('Half-Life 2'),
       ('Counter-Strike: Global Offensive'),
       ('Dota 2'),
       ('Team Fortress 2');

select * from games;

delete from games where name = 'Portal';

create table users (
userId integer primary key,
email text not null
);

insert into users (email) values ('ev@evtheweb.dev');
insert into users (email) values ('evanjschmitt@gmail.com');
select * from users;

create table userSavedGames (
savedGameId integer primary key,
userId integer,
gameId integer
);

select * from userSavedGames;
insert into userSavedGames (userId, gameId)
values (1, 11),
       (2, 12),
       (1, 13),
       (2, 14),
       (1, 15);

select * from users
left join userSavedGames usg on users.userId = usg.userId
left join games on usg.gameId = games.gameId;