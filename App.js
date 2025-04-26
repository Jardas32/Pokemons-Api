
document.addEventListener('DOMContentLoaded', () => {

fetch('https://pokeapi.co/api/v2/pokemon?limit=56') 
    .then(response => {
       return response.json();
    })
    .then(data => {

           const setcard = document.querySelector('.box');
           
           for (const pokemon of data.results) {
              fetch(pokemon.url)
               .then(response => response.json())
               .then(detaile => {

               let card = document.createElement('div');
               card.setAttribute('class', 'cards');
      
               let imgs = document.createElement('img');
               imgs.setAttribute('class', 'imgPokemon');
               imgs.src = detaile.sprites.front_default;
      
               let name = document.createElement('p');
               name.setAttribute('class', 'namePokemon');
               name.textContent = detaile.name;
      
               setcard.append(card);
               card.append(imgs);
               card.append(name);
               
               })
    
           }

           document.addEventListener('click', (e) => {
            if(e.target.closest('.cards')) {
                let cart = e.target.closest('.cards');
      
                let img = cart.querySelector('.imgPokemon').src;
                let title = cart.querySelector('.namePokemon').textContent;
      
                const imgPopup = document.querySelector('.imgPopup');
                const titlePopup = document.querySelector('.titlePopup');
      
                imgPopup.src = img;
                titlePopup.textContent = title;
      
                document.querySelector('.bgpopup').classList.add('bgpopupclass');
                document.querySelector('html').classList.add('noScroll');
      
            }
      
            document.querySelector('.closedPopup').addEventListener('click', () => {
              document.querySelector('.bgpopup').classList.remove('bgpopupclass');
              document.querySelector('html').classList.remove('noScroll');
            })
         })
      
  }

)

});


const playSong = document.querySelector('.playSong');

document.addEventListener('click', () => {
  playSong.play();
});

