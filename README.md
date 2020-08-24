# EXAMEN BE- MERCADO LIBRE - MUTANTES - MELI NOELI

## Descripción del ejercicio
Magneto quiere reclutar la mayor cantidad de mutantes para poder luchar contra los X-Men. 
Desarrollar un proyecto que detecte si un humano es mutante basándose en su secuencia de ADN.

                                          boolean isMutant(String[] dna)

Se recibe como parámetro un array de Strings que representan cada fila de una tabla de (NxN) con la secuencia del ADN. Las letras de los Strings solo pueden ser: (A,T,C,G), las cuales representa cada base nitrogenada del ADN.

Se detecta si es un humano o mutante, si se encuentra más de una secuencia de cuatro letras iguales, de forma oblicua, horizontal o vertical. 
Ejemplo (Caso mutante): 
String[] dna = {"ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"};
En este caso el llamado a la función isMutant(dna) devuelve “true”. 

___
### Requerimientos

•	Crear un programa para implementar el algoritmo de búsqueda y encontrar los mutantes que requiere Magneto.

•	Crear una API REST y hostear esa API en un cloud computing libre (Google App Engine, Amazon AWS, etc).

•	Crear el servicio “/mutant/” en donde se pueda detectar si un humano es mutante enviando la secuencia de ADN mediante un HTTP POST con un Json el cual tenga el siguiente formato: 

              POST → /mutant/
              {
              “dna”: ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"] 
              } 

En caso de verificar un mutante, debería devolver un HTTP 200-OK, en caso contrario un 403-Forbidden.

•	Anexar una base de datos, la cual guarde los ADN’s verificados con la API. Solo 1 registro por ADN (Humano o Mutante).

•	Exponer un servicio extra “/stats” que devuelva un Json con las estadísticas de las verificaciones de ADN:
 
              {“count_mutant_dna”:40, “count_human_dna”:100: “ratio”:0.4}
            
Tener en cuenta que la API puede recibir fluctuaciones agresivas de tráfico (Entre 100 y 1 millón de peticiones por segundo).

•	Test-Automáticos. Code coverage > 80%

___
### Lenguajes y tecnologías utilizadas

•	Node JS (V.12)

•	Express 

•	MongoDB 

•	Mongoose

•	MongoAtlas

•	Heroku

•	Heroku CLI

•	Visual Studio Code

•	POSTMAN

•	Mocha

•	Chai

•	Supertest

___
### Detalles de implementación de requerimientos

1)	Se crea un programa en node js donde se implementa un algoritmo de búsqueda sencillo.

    Se realizan todas las validaciones correspondientes sobre el JSON recibido, tras la petición hacia el servidor antes de realizar la búsqueda pertinente evitando así errores     de lectura. Por ejemplo:
    
    •	Que del JSON recibido solo contenga las letras válidas del ADN (A, T, C Y G)

    •	Que el string que se recibe tenga un mínimo de 4 secuencias de ADN de 4 letras para que la matriz sea de NxN.

2)	Se crea la API REST en node js  con express, para recibir las peticiones de POST(JSON) a través de la herramienta POSTMAN y la misma se hostea en Heroku.

3)	Se crear el servicio “/mutant/” donde se realizan todas las validaciones (detallada en el punto 1 y dentro del código) y búsqueda del ADN mutante devolviendo los mensajes       solicitados.

4)	Se crea una base de datos mutantes, implementada con MongoDB. La misma esta hosteada en Mongo Atlas, donde se guardan todos los ADN’s verificados con la API. Solo uno por       ADN (Humano o Mutante). 

5)	Se realiza un servicio extra “/stats” que devuelve un Json con las estadísticas de las verificaciones de ADN, cantidad de humanos, mutantes y el ratio.

6)	Se realizan los Test-Automáticos con mocha y chai. Los  mismos se corrieron pero arrojaron errores de compilación. Se anexan de igual manera. Faltó cobertura de código.

### Instrucciones para la ejecución de la API REST – MUTANTES

1)	Clonar en su máquina local el repositorio https://github.com/noelimeli31/mutantes/

2)	Para compilar el mismo necesita tener instalado: 

    •	Node js

    •	Mongo db

    •	Mongoose

    •	Express

3)	Tener instalado una instancia de MongoDB localmente para poder acceder a la base de datos o si se quiere utilizar una instancia en la nube, reemplazar la cadena de conexión     que nos brinde el servicio.

4)	Iniciar la aplicación desde la clase principal del proyecto o ejecutar el siguiente comando en la consola:

    •	npm  run dev

    Una vez iniciado utilizar las siguientes URL para probar la API de manera local:

    •	POST:   **http//:localhost:3000/mutant**

    •	GET:    **http//:localhost:3000/stats**

5)	Ejecución de los servicios **/mutants** y **/stats** hosteados:

    **Servicio Mutant:**

    Request:

    **POST:**  https://mutantes-melinoeli31.herokuapp.com/mutant

    Request body (secuencia ADN mutante):

               {"adn":["TTTTGA", "ATGTGC", "AGTTGG", "AGATGG", "CCCCTA", "TCGCTG"]}
  
    Response:

                200 OK
  
    Request body (secuencia ADN humano):
  
               {"adn":["AAAAAA", "TCCTTC", "GTCTGG", "TGTTTG", "ACAGTA", "ACTCAG"]}
  
    Response:

               403 Forbidden
   
    Request body (secuencia ADN erronea):

              {"adn":["ABGCGA", "CAGTGC", "TTATGG", "AGAAGG", "CCCCTA", "TCGCTG"]}
  
    Response:

              400 Bad RequestForbidden

    **Servicio stats:**

    Request:

    **GET**: https://mutantes-melinoeli31.herokuapp.com/stats


    Response: 200 (application/json)

              {
                  count_mutant_dna: 3,
                  count_human_dna: 2,
                  ratio: 1.5
              }
              
              
    •	La base de datos hosteada se encuentra en la siguiente dirección de MongoDB Atlas: https://cloud.mongodb.com/v2/5f42e75979374520db8b3129#clusters              

6)	Test automáticos:
    Se realizaron los test con Mocha y Chai, utilizando el método describe, pero los mismos no compilaron. Se anexa de igual manera los componentes. 
    Se anexa en la carpeta test, pruebas de cargas masivas que se realizaron con la herramienta Runner de POSTMAN.

