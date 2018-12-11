import React from 'react';//Crear componentes
import {render} from 'react-dom'//Renderizar los componentes
import Home from '../pages/containers/home';
// import Playlist from '../playlist/components/playlist' //Importamos nuestros archivo media 
// import Categories from '../playlist/components/categories'
import data from '../api.json';
// console.log("Hola mundo")

const app = document.getElementById('home-container');
// ReactDOM.render(Que voy a renderizar, Donde lo voy a renderizar);
// const holaMundo = <h1>hola guapooo!!</h1>;
render(<Home data={data}/>, app);