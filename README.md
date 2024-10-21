# BANKING API MYSQL

eclipse with springboot initializer

java project, maven

dependencies:
Spring web  
Spring Data Jpa
PostgreSQL Driver
Lombok


source: https://www.youtube.com/watch?v=vpf4LB54rVw

## application.properties

https://stackoverflow.com/questions/71518442/cannot-load-driver-class-jdbcmysql-localhost3306-mydatabase

//connect to db  

spring.datasource.url = jdbc:mysql://127.0.0.1:3306/banking  
spring.datasource.driver-class-name = com.mysql.cj.jdbc.Driver  
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL8Dialect  
spring.datasource.username = root  
spring.datasource.password =
 
 

//auto create tables  

spring.jpa.hibernate.ddl-auto=update  



