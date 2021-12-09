
//create data base for all of the information
const database = {
    wheels: [
        {
            id: 1,
            name: "Pair Radial",
            price: 34,
            size: 17
        },
        {
            id:2,
            name:"Pair Radial Black",
            price: 42,
            size:17
        },
        {
            id:3,
            name:"Pair Spoke Silver",
            price:18,
            size:18
        },
        {
            id:4,
            name:"Pair Spoke Black",
            price:55,
            size:18
        }
    ],
    technologies: [
        {
            id:1,
            name:"Basic Package",
            price:100,
            description: "basic sound system"
        },
        {
            id:2,
            name: "Navigation Package",
            price:145,
            description:"includes integrated navigation controls"
        },
        {
            id:3,
            name: "Visibility Package",
            price:185,
            description: "includes side and rear cameras"
        },
        {
            id:4,
            name: "Ultra Package",
            price:215,
            description: "includes navigation and visibility packages"
        }
    ],
    interiors: [
        {
            id:1,
            name: "Beige Fabric",
            price:69.99
        },
        {
            id:2,
            name: "Charcoal Fabric",
            price:11.49
        },
        {
            id:3,
            name: "White Leather",
            price:49.50
        },
        {
            id:4,
            name: "Black Leather",
            price:110.01 
        }
    ],
    paints: [
        {
            id: 1,
            color: "Silver",
            price: 100
        },
        {
            id:2,
            color: "Midnight Blue",
            price:190
        },
        {
            id:3,
            color: "Firebrick Red",
            price:115
        },
        {
            id:4,
            color: "Spring Green",
            price:11
        }
    ],
    orders: [
       
    ],
    permOrders: [
       
    ]
}


export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}));
}

export const getTechnology = () => {
    return database.technologies.map(tech => ({...tech}));
}

export const getInterior = () => {
    return database.interiors.map(interior => ({...interior}));
}

export const getPaint = () => {
    return database.paints.map(paint => ({...paint}));
}



// saves the wheel selected
export const setWheels = (id) => {
    database.orders.wheelId = id;
}

// saves the technology selected
export const setTechnology = (id) => {
    database.orders.technologyId = id;
}

//save the interior to order 
export const setInterior = (id) => {
    database.orders.interiorId = id;
}

//save the paint option to db
export const setPaint = (id) => {
    database.orders.paintId =id;
}


//set the new order
export const orderBuilder = () =>{
    //determine object id
    
       const arrayLen = database.permOrders.length;
       

    const instanceId = arrayLen+1;
    //database.orders.id = instanceId;


    //assign all the transient variables into an object
    const objData = {...database.orders};
    // give it an id
    objData.id =instanceId;

    //get time of order
    objData.timestamp = Date.now();

    //add new order to db
    database.permOrders.push(objData);

    //clear state
    database.orders = {};

console.log(database.permOrders[arrayLen].id);
    
//notify that the permanent state has changed
document.dispatchEvent(new CustomEvent("stateChanged"));

}



//function to display orders
export const render = () => {
    //find length of array
    const len = (database.permOrders.length)-1;
    
    //find prices 
const findPrice = (arrOfObjs) => {
    const paintPrice = getPaint().find(paint => paint.id === arrOfObjs.paintId).price;
    const interiorPrice = getInterior().find(interior => interior.id === arrOfObjs.interiorId).price;
    const techPrice = getTechnology().find(tech => tech.id === arrOfObjs.technologyId).price;
    const wheelPrice = getWheels().find(wheel => wheel.id === arrOfObjs.wheelId).price;

    return paintPrice + interiorPrice + techPrice + wheelPrice;
}



    //assign formatting
    let html = "";

    //rewrite array into the format you want
    html += database.permOrders.map(ord => `<li>Order #${ord.id} costs ${findPrice(ord).toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })} and was placed on ${ord.timestamp}</li>`).join(" ")

    console.log(html);

    //html += "</ul>"
    return html;
}


