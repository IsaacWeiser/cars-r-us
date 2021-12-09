import { getWheels, setWheels } from "./database.js";



//inject the drop down list into the html
export const wheelSelect = () => {
   //set up variable to hold the begining of the string
   let content = `
   <select id="wheelChoice">
       <option value="0">Please Select An Option</option>
   `;

   // iterate through the data to set up the html
   for (const wheel of getWheels())
   {
       content += `<option value="${wheel.id}">${wheel.name}</option>`;
   }
   content += "</select>";
   return content;
}


//event listener provides an alert about which option was selected
document.addEventListener("change", event => {
    //specify a wheel choice
    if (event.target.id === "wheelChoice")
    {
        //set the choices value to a db array
        setWheels(parseInt(event.target.value));
       
       // window.alert(`You have chosen ${getWheels()[event.target.value].name}. This option costs $${getWheels()[event.target.value].price}`)
    }
})