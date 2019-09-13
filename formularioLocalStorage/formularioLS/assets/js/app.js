// Variables
const listaTweets = document.getElementById('lista-tweets');

// Event listeners
eventListeners();
function eventListeners() {
    // Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    // Borrar tweets
    document.querySelector('#lista-tweets').addEventListener('click', borrarTweet);

    // Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);

}

// Funciones
// Agregar tweet
function agregarTweet(e) {
    e.preventDefault();
    // Leer el tweet
    const tweet = document.querySelector('#tweet').value;
    // Crear boton para eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';    

    // Crear elemento y agregarlo a la lista
    const list = document.createElement('li');
    list.innerText = tweet;
    // Agrega el boton de borrar al tweet
    list.appendChild(botonBorrar);
    listaTweets.appendChild(list);
    agregarTweetLocalStorage(tweet);
}

// Eliminar el tweet del DOM
function borrarTweet(e) {
    e.preventDefault();
    if(e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.textContent);
    } 
   
}

// Eliminar tweet de Local Storage
function borrarTweetLocalStorage(tweet) {
    let tweets, tweetBorrar;

    // Eliminamos la X que se envia concatenada al tweet
    tweetBorrar = tweet.substring(0, tweet.length - 1);
    tweets = obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet, index){
        if(tweetBorrar === tweet){
            tweets.splice(index, 1);
        }
    });
    
    localStorage.setItem('tweets', JSON.stringify(tweets));

}


// Agregar tweet a local storage
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    // Agregar el nuevo tweet
    tweets.push(tweet);
    // Convertir de String a arreglo
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function obtenerTweetsLocalStorage() {
    let tweets;
    // Revisamos valores de LS
    if(localStorage.getItem('tweets') === null){
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

// Mostrar datos de LS en la lista
function localStorageListo() {
    let tweets;

    tweets = obtenerTweetsLocalStorage();
    // console.log(tweets);

    tweets.forEach(function(tweet) {
        // Crear boton para eliminar
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';    
    
        // Crear elemento y agregarlo a la lista
        const list = document.createElement('li');
        list.innerText = tweet;
        // Agrega el boton de borrar al tweet
        list.appendChild(botonBorrar);
        listaTweets.appendChild(list);
    });

}





