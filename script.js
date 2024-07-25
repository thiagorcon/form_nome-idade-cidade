const arrayListaNomes = [];

const enviarDados= (event) =>{
     event.preventDefault();
     const pegaNome = document.querySelector('#inputNome').value ;   
     const pegaIdade = document.querySelector('#inputIdade').value ; 
     const pegaSexo = document.querySelector('select').value ; 

     
     arrayListaNomes.push({ nome: pegaNome, idade: pegaIdade, sexo: pegaSexo });


     localStorage.setItem('nome', pegaNome);
     localStorage.setItem('idade', pegaIdade);
     localStorage.setItem('sexo', pegaSexo);

   limparDados();
     
     console.log(pegaNome);
     console.log(pegaIdade);
     console.log(pegaSexo);
}

function limparDados() {

     document.querySelector('#inputNome').value = '';   
     document.querySelector('#inputIdade'). value = ''; 
     document.querySelector('select').value = '' ;     
     
}

// const dadosTela= () =>{

//     const pegarnome = (localStorage.getItem('nome'));
//      const pegarIdade = JSON.parse.apply(localStorage.getItem('idade'));
//      //const pegarSexo = JSON.parse.apply(localStorage.getItem('sexo'));   
//      const listItem = document.createElement('li');
//      listItem.innerHTML = `nome : ${pegarnome}`;
//      document.querySelector('ul').appendChild(listItem); 

// }

function dadosTela() {
     const listaNomes = document.querySelector('#listaNomes');
     listaNomes.innerHTML = ''; // Limpa a lista antes de adicionar novos itens
 
     arrayListaNomes.forEach(item => {
         const listItem = document.createElement('li');
         listItem.innerHTML = `Nome: ${item.nome}, Idade: ${item.idade}, Sexo: ${item.sexo}`;
         listaNomes.appendChild(listItem);
     });
 }






