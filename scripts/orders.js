import { getInterior, getPaint, getTechnology, getWheels } from "./database.js";

//function to display orders
/*export const render = () => {
    //find length of array
    const len = (database.permOrders.length)-1;
    
    //find prices 
    let paintPrice = database.paints.find((paintColor)=> paintColor.id === database.permOrders[len].paintId);
    let interiorPrice = database.interiors.find((intChoice) => intChoice.id === database.permOrders[len].interiorId);
    let techPrice = database.technologies.find(technoChoice => technoChoice.id === database.permOrders[len].technologyId);
    let wheelPrice = database.wheels.find(tire=> tire.id === database.permOrders[len].wheelId);
    
    let totalPrice = paintPrice.price + interiorPrice.price + wheelPrice.price + techPrice.price;
    //format as currency
    totalPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    //console.log("pp " + paintPrice.price)

    //assign formatting
    let html = "";

    //rewrite array into the format you want
    html += database.permOrders.map(ord => `<li>Order #${ord.id} costs ${totalPrice} and was placed on ${ord.timestamp}</li>`)

    //html += "</ul>"
    return html;
}*/