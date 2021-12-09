import { getPaint, setPaint } from "./database.js";

// create drop down list for paint colors

export const paintSelect = () => {
    //set up variable to hold the begining of the string
    let content = `
    <select id="paintChoice">
        <option value="0">Please Select An Option</option>
    `;

    // iterate through the data to set up the html
    for (const paint of getPaint())
    {
        content += `<option value="${paint.id}">${paint.color}</option>`;
    }
    content += "</select>";
    return content;
}

//event listener provides an alert about which option was selected
document.addEventListener("change", event => {
    //specify a wheel choice
    if (event.target.id === "paintChoice")
    {
      //set the target value as the paint id
      setPaint(parseInt(event.target.value));  
      
      // match the value to the name
        //window.alert(`You have chosen ${getPaint()[event.target.value].name}. This option costs $${getPaint()[event.target.value].price}`)
    }
})