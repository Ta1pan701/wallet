import { Card } from "../../components/Card.js";
import { render } from "../../libs/render.js";
import { cardBox } from "../wallets/script.js";
let add = document.querySelector(".add")
const closeModal = document.getElementById("closeModal");
const overlay = document.getElementById("overlay");
const saveBtn = document.getElementById("save");
let form = document.forms.add_wallet
fetch("http://localhost:3000/cards")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        render(data, cardBox, Card)
    })
    add.onclick = () => {
        overlay.classList.add("active")
        console.log(1);
    }
    closeModal.onclick = () => {
        overlay.classList.remove("active")
    }
    
    form.onsubmit = (e) => {
        e.preventDefault()
        let card ={}
        let fn = new FormData(form)
        fn.forEach((value, key) =>{
            card[key] = value
        })
        console.log(card);
        
        fetch("http://localhost:3000/cards", {
            method: "POST",
            body: JSON.stringify(card),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(res => console.log(res.status))
        .then(data=>{

            render(data, cardBox, Card)
        })
    }