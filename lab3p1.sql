DROP TABLE Professor CASCADE;
DROP TABLE Department CASCADE;
DROP TABLE Project CASCADE;
DROP TABLE Graduate CASCADE;
DROP TABLE WorkDept CASCADE;
DROP TABLE runs CASCADE;
DROP TABLE workIN CASCADE;
DROP TABLE manage CASCADE;
DROP TABLE major CASCADE;
DROP TABLE workProject CASCADE;
DROP TABLE advise CASCADE;
DROP TABLE supervise CASCADE;


CREATE TABLE Professor (
    ssn CHAR(11) NOT NULL,
    name CHAR(30) NOT NULL,
    age INTEGER,
    rank INTEGER,
    specialty CHAR(30) NOT NULL,
    dno INTEGER,
    PRIMARY KEY(ssn)
);

CREATE TABLE Department (
   dno INTEGER,
   ssn CHAR(11) NOT NULL,
   dname CHAR(30),
   office CHAR(30),
   PRIMARY KEY(dno),
   FOREIGN KEY(ssn) REFERENCES Professor(ssn) ON DELETE NO ACTION
);

CREATE TABLE Project (
    pno INTEGER,
    sponsor CHAR(8) NOT NULL,
    startDate INTEGER,
    endDate CHAR(8) NOT NULL,
    budget INTEGER,
    ssn CHAR(11) NOT NULL,
    PRIMARY KEY(pno),
    FOREIGN KEY(ssn) REFERENCES Professor(ssn) ON DELETE NO ACTION
);

CREATE TABLE Graduate (
    ssn CHAR(11) NOT NULL,
    name CHAR(30),
    age INTEGER,
    degreeProgram CHAR(30),
    dno INTEGER,
    PRIMARY KEY(ssn),
    FOREIGN KEY(dno) REFERENCES Department(dno)
);
CREATE TABLE WorkDept (
    ssn CHAR(11),
    dno INTEGER,
    timePC INTEGER,
    PRIMARY KEY(ssn , dno),
    FOREIGN KEY(ssn) REFERENCES Professor(ssn),
    FOREIGN KEY(dno) REFERENCES Department(dno)
);

CREATE TABLE runs (
    ssn CHAR(11) NOT NULL,
    dno INTEGER,
    PRIMARY KEY(ssn, dno),
    FOREIGN KEY(ssn) REFERENCES Professor(ssn),
    FOREIGN KEY(dno) REFERENCES Department(dno)
);

CREATE TABLE workIN (
    ssn CHAR(11) NOT NULL,
    dno INTEGER,
    PRIMARY KEY(ssn, dno),
    FOREIGN KEY(ssn) REFERENCES Professor(ssn),
    FOREIGN KEY(dno) REFERENCES Department(dno)
);

CREATE TABLE manage (
    ssn CHAR(11),
    pno INTEGER,
    PRIMARY KEY(ssn, pno),
    FOREIGN KEY(ssn) REFERENCES Professor(ssn),
    FOREIGN KEY(pno) REFERENCES Project(pno)
);

CREATE TABLE major (
    dno INTEGER,
    ssn CHAR(11),
    PRIMARY KEY(dno, ssn),
    FOREIGN KEY(dno) REFERENCES Department(dno),
    FOREIGN KEY(ssn) REFERENCES Graduate(ssn)
);

CREATE TABLE workProject (
    pno INTEGER,
    since CHAR(8) NOT NULL,
    ssn CHAR(11) NOT NULL,
    ssn1 CHAR(11) NOT NULL,
    PRIMARY KEY(pno, ssn),
    FOREIGN KEY(pno) REFERENCES Project(pno),
    FOREIGN KEY(ssn) REFERENCES Graduate(ssn),
    FOREIGN KEY(ssn1) REFERENCES Professor(ssn) ON DELETE NO ACTION
);

CREATE TABLE advise (
    ssn CHAR(11) NOT NULL,
    ssn1 CHAR(11) NOT NULL,
    PRIMARY KEY(ssn, ssn1),
    FOREIGN KEY(ssn) REFERENCES Graduate(ssn),
    FOREIGN KEY(ssn1) REFERENCES Graduate(ssn)
);

CREATE TABLE supervise (
    ssn CHAR(11),
    pno INTEGER,
    ssn1 CHAR(11) NOT NULL,
    PRIMARY KEY(ssn, pno, ssn1),
    FOREIGN KEY(ssn) REFERENCES Professor(ssn),
    FOREIGN KEY(pno) REFERENCES Project(pno),
    FOREIGN KEY(ssn1) REFERENCES Graduate(ssn)
);
