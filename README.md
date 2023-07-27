# RAILWAY-RESERVATION-SYSTEM

**NOTE: PREFER VSCODE FOR THIS PROJECT**


**FIRST INSTALL THE FOLOWING LIBRARIES (Just Run Following Commands In Terminal ) :**

pip install flask

pip install psycopg2

pip install sqlalchemy

pip install flask_sqlalchemy





**Then Make a SQL database in PostgreSQL(pgAdmin) with following details:**
  
  DATABASE : RAILWAY RESERVATION

 **In this Database make 2 tables (Passengers and Trains):**

 **NOTE: I HAVE GIVEN THE QUERRIES FOR THE PASSENGERS AND TRAINS TABLE IN TEXT FILES.**
  
  Table details:
     
     Passengers(note: all columns have notnull constraint):
      | name VARCHAR | number NUMERIC | fromstation VARCHAR | tostation VARCHAR | id INT (PRIMARY KEY) | dt DATE | tm TIME WITHOUT TIMEZONE | seats BIGINT | train_name VARCHAR |

     Trains:
      | train_no VARCHAR | train_name VARCHAR | origin VARCHAR | dept_time VARCHAR | destination VARCHAR | arr_time VARCHAR | route_no VARCHAR | schedule VARCHAR | avail_seats INT |  


