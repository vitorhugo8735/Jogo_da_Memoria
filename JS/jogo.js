const fotos = [
    "matheus", "vitor", "barbara", "gabriela", "professora", "gabriel",
    "matheus", "vitor", "barbara", "gabriela", "professora", "gabriel"
]


const embaralhada = fotos.sort(() => Math.random() - 0.5);



let segundos = 0o0;

function iniciar() {
    this.arroz= setInterval(() => {
    segundos++;
    document.getElementById("segundos").innerHTML = `<strong>Tímer: ${segundos}</strong>`;
  }, 1000);
}
 iniciar();    
 
let pontos = 0;

function contadorpontos () {
    pontos = pontos + 10;
    document.getElementById("pontos").innerHTML =`<strong>Pontos: ${pontos}</strong>`;
}

   




let carta1 = "";
let carta2 = "";

const fimdojogo = () => {
    const desativada = document.querySelectorAll('.revelar')

    if(desativada.length === 12){
        setTimeout( () => {
            window.location.href = "final.html";
            clearInterval(this.arroz);
        }, 500 );
        
        
    }
}

const verificarcartas = () => {
const primeiracarta = carta1.getAttribute('data-fotos');
const segundacarta = carta2.getAttribute('data-fotos');

    if(primeiracarta === segundacarta){
       

        carta1.firstChild.classList.add('foi');
        carta2.firstChild.classList.add('foi');
    
         carta1 = "";
         carta2 = "";
         contadorpontos();
         
    
        fimdojogo();

    }else{

        setTimeout(() => {
            carta1.classList.remove('revelar');
         carta2.classList.remove('revelar');

         carta1 = "";
         carta2 = "";

        }, 1000);
    
};



}

 const revelar = ({target}) => {

    if(target.parentNode.className.includes('revelar')){
        return
    }

    if( carta1 ===''){
        target.parentNode.classList.add('revelar')
        carta1 = target.parentNode;
    }else if(carta2 === ''){
        target.parentNode.classList.add('revelar')
        carta2 = target.parentNode;

        verificarcartas();
    }



    
}


const grid = document.querySelector(".grid")
//criando as cartas
function cartas(foto){
    const cartas = document.createElement("div");
    const frente = document.createElement("div");
    const atras = document.createElement("div");
    cartas.className = "cartas"
    frente.className = "a frente"
    atras.className = "a atras"
    frente.style.backgroundImage = `url(fotos/${foto}.jpg)`
    
    cartas.addEventListener("click", revelar)
   
   
    cartas.appendChild(frente);
    cartas.appendChild(atras);  
    cartas.setAttribute('data-fotos',foto);
     
    
    return cartas;
}

function load(){
    embaralhada.forEach(function(foto)
    {const card = cartas(foto) 
    grid.appendChild(card)
});

    const player = localStorage.getItem('player');
    document.querySelector('.ab.nome').textContent = ("Jogador: "+player);

}
load()