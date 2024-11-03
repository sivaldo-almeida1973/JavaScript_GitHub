// Exercício 2: Você está desenvolvendo uma aplicação para filtrar produtos em estoque com base na disponibilidade. Alguns produtos podem não ter um valor definido para a quantidade em estoque. Use o operador de coalescência nula e o método filter para obter uma lista de produtos com quantidade em estoque maior que 0.


 const produtos = [
   { nome: 'Camiseta', quantidade: 10 }, 
   { nome:'Calça', quantidade: null }, 
   { nome: 'Tênis', quantidade: 5 }, 
   { nome: 'Jaqueta', quantidade: 0 } 
  
  ];

  