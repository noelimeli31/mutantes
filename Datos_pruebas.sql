 /************************************************DATOS DE PRUEBAS****************************************************/
 
 /****Mutantes****/
 
 { "adn": ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"], "result": true } 
 
 { "adn": ["TTTTGA", "ATGTGC", "AGTTGG", "AGATGG", "CCCCTA", "TCGCTG"], "result": true }

 { "adn": ["TTTTGA", "TTTTGC", "TGTTGG", "TGATGG", "CCCCTA", "TCGCTG"], "result": true } 
 
 
/***Humanos***/

 { "adn": ["AATGGA", "AATTGC", "TTGTGG", "CGGTAG", "CAAGTA", "TTTTTG"], "result": false} 
   
 { "adn": ["TTGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCTCTA", "TCACTG"], "result": false}
 
  
 /** Para probar matriz **/
 "T T G C G A"
 "C A G T G C"
 "T T A T G T"
 "A G A A G G"
 "C C T C T A"
 "T C A C T G"
 
 "A T G C G A" 
 "C A G T G C" 
 "T T A T G T" 
 "A G A A G G"
 "C C C C T A"
 "T C A C T G"
 
 
/**Pruebas-Validaciones**/

Matriz no cuadrada(error):

 "adn":["TGCGAA","CAGTGC"] -> OK

Secuencia invalida(con numeros(error)):

 "adn": ["1234","ATCCGA","12CAGAGC","TAATGT"] -> OK
 
Secuencia invalida(con letras invalidas(error)):

 "adn": ["AJAAA","ATCCGH","CAYAGC","TMATGT"] -> OK

Secuencia a analizar repetida(error):

 {"adn": ["TTGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCTCTA", "TCACTG"]} -> OK 
 