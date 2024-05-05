DROP TABLE Producer CASCADE;
DROP TABLE Plays CASCADE;
DROP TABLE Perform CASCADE;
DROP TABLE Appears CASCADE;
DROP TABLE Home CASCADE;
DROP TABLE Lives CASCADE;
DROP TABLE Musicians CASCADE;
DROP TABLE Album CASCADE;
DROP TABLE Instrument CASCADE;
DROP TABLE Songs CASCADE;
DROP TABLE Place CASCADE;
DROP TABLE Telephone CASCADE;

CREATE TABLE Musicians  (
    ssn CHAR(11) NOT NULL,
    name CHAR(32) NOT NULL,
    PRIMARY KEY(ssn)
);

CREATE TABLE Album      (
    albumID INTEGER,
    copyrightDate CHAR(8) NOT NULL,
    speed INTEGER,
    title CHAR(32) NOT NULL,
    ssn CHAR(11) NOT NULL,
    PRIMARY KEY(albumID),
    FOREIGN KEY(ssn) REFERENCES Musicians(ssn) ON DELETE NO ACTION
);

CREATE TABLE Instrument (
    instrID INTEGER,
    dname CHAR(32) NOT NULL,
    key CHAR(32) NOT NULL,
    PRIMARY KEY(instrID)
);

CREATE TABLE Songs      (
    songID INTEGER,
    title CHAR(32) NOT NULL,
    author CHAR(32) NOT NULL,
    albumID INTEGER,
    PRIMARY KEY(songID),
    FOREIGN KEY(albumID) REFERENCES Album(albumID)
 );

CREATE TABLE Place      (
    address CHAR(32) NOT NULL,
    PRIMARY KEY(address)
);
CREATE TABLE Telephone (
    phone_num CHAR(14) NOT NULL,
    address CHAR(32) NOT NULL,
    PRIMARY KEY(phone_num),
    FOREIGN KEY(address) REFERENCES Place(address) );

CREATE TABLE Producer   (
    ssn CHAR(11) NOT NULL,
    albumID INTEGER,
    PRIMARY KEY(ssn, albumID),
    FOREIGN KEY(ssn) REFERENCES Musicians(ssn),
    FOREIGN KEY(albumID) REFERENCES Album(albumID)
);

CREATE TABLE Plays      (
    ssn CHAR(11) NOT NULL,
    instrID INTEGER,
    PRIMARY KEY(ssn, instrID),
    FOREIGN KEY(ssn) REFERENCES Musicians(ssn),
    FOREIGN KEY(instrID) REFERENCES Instrument(instrID)
 );

CREATE TABLE Perform    (
    ssn CHAR(11) NOT NULL,
    songID INTEGER,
    PRIMARY KEY(ssn, songID),
    FOREIGN KEY(ssn) REFERENCES Musicians(ssn),
    FOREIGN KEY(songID) REFERENCES Songs(songID)
);

CREATE TABLE Appears    (
    albumID INTEGER,
    songID INTEGER,
    PRIMARY KEY(albumID, songID),
    FOREIGN KEY(albumID) REFERENCES Album(albumID),
    FOREIGN KEY(songID) REFERENCES Songs(songID)
);

CREATE TABLE Home       (
    address CHAR(32) NOT NULL,
    phone_num CHAR(14) NOT NULL,
    ssn CHAR(11) NOT NULL,
    PRIMARY KEY(address, phone_num),
    FOREIGN KEY(address) REFERENCES Place(address),
    FOREIGN KEY(phone_num) REFERENCES Telephone(phone_num),
    FOREIGN KEY(ssn) REFERENCES Musicians(ssn) ON DELETE NO ACTION
);

CREATE TABLE Lives      (
    ssn CHAR(11) NOT NULL,
        address CHAR(32) NOT NULL,
        phone_num CHAR(14) NOT NULL,
        PRIMARY KEY(ssn, address, phone_num),
        FOREIGN KEY(ssn) REFERENCES Musicians(ssn),
        FOREIGN KEY(address) REFERENCES Place(address),
        FOREIGN KEY(phone_num) REFERENCES Telephone(phone_num)
 );
