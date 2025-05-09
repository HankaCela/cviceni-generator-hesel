import { render } from '@czechitas/render';
import './global.css';
import './style.css';
 
 
//const sumPassword = Number(prompt("Zadej počet znaků které chceš vygenerovat"))
//const url = 'https://www.psswrd.net/api/v1/password/?length='+sumPassword
 
const url = 'http://localhost:4000/api/workshops/0'
const response = await fetch(url)
const workshop = await response.json()
 
console.log(workshop)
 
document.querySelector('#root').innerHTML = render(
  <div className="container">
    <h1>{workshop.data.title}</h1>
    <p>{workshop.data.description}</p>
    <br />
    <strong>Kurz vede: {workshop.data.instructor.name}</strong>
  </div>
);