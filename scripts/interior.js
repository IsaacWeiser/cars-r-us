import { getInterior,setInterior } from "./database.js";

//create drop down list for interior options
export const interiorSelect = () => {
    //set up variable to hold the begining of the string
    let content = `
    <select id="interiorChoice">
        <option value="0">Please Select An Option</option>
    `;

    // iterate through the data to set up the html
    for (const interior of getInterior())
    {
        content += `<option value="${interior.id}">${interior.name}</option>`;
    }
    content += "</select>";
    return content;
}

//event listener provides an alert about which option was selected
document.addEventListener("change", event => {
    //specify a wheel choice
    if (event.target.id === "interiorChoice" )
    {
        //set the value as the interior id
        setInterior(parseInt(event.target.value));
        
        // match the value to the name
        //window.alert(`You have chosen ${getInterior()[event.target.value].name}. This option costs $${getInterior()[event.target.value].price}`)
    }  
})