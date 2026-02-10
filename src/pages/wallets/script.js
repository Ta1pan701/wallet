import { Card } from "../../components/Card.js";
import { render } from "../../libs/render.js";
export let cardBox = document.querySelector(".card-box")
let goToPage = document.querySelector(".all-wallets")
fetch("http://localhost:3000/cards")
.then(res =>res.json())
.then(data=>{
    console.log(data);
    render(data.slice(0, 4), cardBox, Card)
})
