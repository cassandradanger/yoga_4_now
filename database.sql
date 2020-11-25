
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "flows" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR (1000)
);

CREATE TABLE "pose" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR (1000) ,
"flow_id" INT REFERENCES "flows",
"imageUrl" VARCHAR (1000) 
);

INSERT INTO "flows" ("name") VALUES ('Headache'), ('Cramps'), ('Calming'), ('Energizing'), ('Backache'), ('Stretchy'), ('Digestion'), ('Stress');

INSERT INTO "pose" ("name", "flow_id", "imageUrl")
VALUES ('Downward Dog', 1, 'https://www.yogajournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1720/MTQ3MTU2NzMwOTA2NjgyODMw/2hp_290_1721_bjk.webp'), ('Happy Baby', 1, 'https://i.ndtvimg.com/i/2016-04/yoga-pose-625_625x350_81459707841.jpg'), ('Mountain Pose', 1, 'https://www.yogajournal.com/.image/t_share/MTQ3MTUyNzM1MjQ1MzEzNDg2/mountainhp2_292_37362_cmyk.jpg');
SELECT * from "pose" WHERE "flow_id" = 1;