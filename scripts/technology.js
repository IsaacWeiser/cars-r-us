import { getTechnology,setTechnology } from "./database.js";

//set up technologies drop down
export const techsSelect = () => {
    //set up variable to hold the begining of the string
    let content = `
    <select id="techChoice">
        <option value="0">Please Select An Option</option>
    `;

    // iterate through the data to set up the html
    for (const tech of getTechnology())
    {
        content += `<option value="${tech.id}">${tech.name}</option>`;
    }
    content += "</select>";
    return content;
}


//event listener provides an alert about which option was selected
document.addEventListener("change", event => {
    //specify a wheel choice
    if (event.target.id === "techChoice")
    {
        //set the value as the techid
        setTechnology(parseInt(event.target.value));
        
        // match the value to the name
       // window.alert(`You have chosen ${getTechnology()[event.target.value].name}. This option costs $${getTechnology()[event.target.value].price}`)
    }
})