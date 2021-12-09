import { getWheels, getInterior, getPaint, getTechnology, orderBuilder, render } from "./database.js"
import { wheelSelect } from "./wheels.js";
import { techsSelect } from "./technology.js";
import { interiorSelect } from "./interior.js";
import { paintSelect } from "./paint.js";
//import {render} from "./orders.js";

//set up the text on the html
const wordsOnThePage = () => {
const contentEl = document.querySelector("#body");
contentEl.innerHTML=`
<h1>Wheels</h1>
${wheelSelect()}

<h1>Paints</h1>
${paintSelect()}

<h1>Interior</h1>
${interiorSelect()}

<h1>Technology<h1>
${techsSelect()}

<button id="submit">Submit</button>

<h1 id="orders">Orders</h1>
<ul id="order">
</ul>

`; }

//show words when page loads
wordsOnThePage();

document.addEventListener("click", (event)=> {
    if (event.target.id === "submit") {
        wordsOnThePage();
        orderBuilder();
        document.querySelector("#orders").innerHTML=render();
    }
})

document.addEventListener("stateChanged", ()=> {
    console.log("permanent state changed");
})