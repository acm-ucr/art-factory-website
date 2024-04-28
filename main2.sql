CREATE TABLE Musicians (
    ssn CHAR(11) NOT NULL, 
    name CHAR(30) NOT NULL
    PRIMARY KEY(ssn)
);

CREATE TABLE Albums (
    albulmID INTEGER, 
    copyright CHAR(8),
    speed INTEGER, 
    title CHAR(20),

);

CREATE TABLE Songs (
    songID INTEGER, 
    title CHAR(20), 
    author CHAR(30)
);

CREATE TABLE Instruments (

);