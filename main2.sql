DROP TABLE Musicians CASCADE
DROP TABLE Albums CASCADE
DROP TABLE Songs CASCADE
DROP TABLE Instruments CASCADE
DROP TABLE Place CASCADE
DROP TABLE Telephone CASCADE
DROP TABLE Producer CASCADE
DROP TABLE Lives CASCADE
DROP TABLE Home CASCADE
DROP TABLE Plays CASCADE
DROP TABLE Performs CASCADE
DROP TABLE Appears CASCADE

CREATE TABLE Musicians (
    ssn CHAR(11) NOT NULL,
    name CHAR(30) NOT NULL,
    PRIMARY KEY(ssn)
);

CREATE TABLE Albums (
    albumID INTEGER PRIMARY KEY,
    ssn CHAR(11) NOT NULL,
    copyright CHAR(8),
    speed INTEGER,
    title CHAR(32),
    FOREIGN KEY(ssn) REFERENCES Musicians(ssn) ON DELETE NO ACTION
);

CREATE TABLE Songs (
    songID INTEGER PRIMARY KEY,
    title CHAR(20),
    author CHAR(30),
    albumID INTEGER,
    FOREIGN KEY(albumID) REFERENCES Albums(albumID)
);

CREATE TABLE Instruments (
    instrID INTEGER PRIMARY KEY,
    dname CHAR(32) NOT NULL,
    key CHAR(10) NOT NULL
);

CREATE TABLE Place (
    address CHAR(30) NOT NULL,
    PRIMARY KEY(address)
);

CREATE TABLE Telephone (
    phone_num CHAR(10) NOT NULL,
    address CHAR(30) NOT NULL,
    PRIMARY KEY(phone_num),
    FOREIGN KEY(address) REFERENCES Place(address)
);

CREATE TABLE Producer (
    ssn CHAR(11) NOT NULL,
    albumID INTEGER,
    PRIMARY KEY(ssn, albumID),
    FOREIGN KEY(ssn) REFERENCES Musicians(ssn),
    FOREIGN KEY(albumID) REFERENCES Albums(albumID)
);

CREATE TABLE Lives (
    ssn CHAR(11) NOT NULL,
    address CHAR(30) NOT NULL,
    phone_num CHAR(14) NOT NULL,
    PRIMARY KEY(ssn, address, phone_num),
    FOREIGN KEY(ssn) REFERENCES Musicians(ssn),
    FOREIGN KEY(address) REFERENCES Place(address),
    FOREIGN KEY(phone_num) REFERENCES Telephone(phone_num)
);

CREATE TABLE Home (
    address CHAR(30) NOT NULL,
    phone_num CHAR(14) NOT NULL,
    ssn CHAR(11) NOT NULL,
    PRIMARY KEY(address, phone_num),
    FOREIGN KEY(address) REFERENCES Place(address),
    FOREIGN KEY(phone_num) REFERENCES Telephone(phone_num),
    FOREIGN KEY(ssn) REFERENCES Musicians(ssn) ON DELETE NO ACTION
);

CREATE TABLE Plays (
    ssn CHAR(11) NOT NULL,
    instrID INTEGER,
    PRIMARY KEY(ssn, instrID),
    FOREIGN KEY(ssn) REFERENCES Musicians(ssn),
    FOREIGN KEY(instrID) REFERENCES Instruments(instrID)
);

CREATE TABLE Performs (
    ssn CHAR(11) NOT NULL,
    songID INTEGER,
    PRIMARY KEY(ssn, songID),
    FOREIGN KEY(ssn) REFERENCES Musicians(ssn),
    FOREIGN KEY(songID) REFERENCES Songs(songID)
);

CREATE TABLE Appears (
    albumID INTEGER,
    songID INTEGER,
    PRIMARY KEY(albumID, songID),
    FOREIGN KEY(albumID) REFERENCES Albums(albumID),
    FOREIGN KEY(songID) REFERENCES Songs(songID)
);
