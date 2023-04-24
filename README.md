# RAILWAY-RESERVATION-SYSTEM

FIRST INSTALL THE FOLOWING LIBRARIES:

pip install flask

pip install psycopg2

pip install sqlalchemy

pip install flask_sqlalchemy





Then Make a SQL database in PostgreSQL(pgAdmin) with following details:
  
  DATABASE : RAILWAY RESERVATION

  In this Database make 2 tables (Passengers and Trains):
  
  Table details:
     
     Passengers(note: all columns have notnull constraint):
      | name VARCHAR | number NUMERIC | fromstation VARCHAR | tostation VARCHAR | id INT (PRIMARY KEY) | dt DATE | tm TIME WITHOUT TIMEZONE | seats BIGINT | train_name VARCHAR |

     Trains:
      | train_no VARCHAR | train_name VARCHAR | origin VARCHAR | dept_time VARCHAR | destination VARCHAR | arr_time VARCHAR | route_no VARCHAR | schedule VARCHAR | avail_seats INT |  


