
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
            id:1,
            color:"Silver",
            price:100
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
        {

        }
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