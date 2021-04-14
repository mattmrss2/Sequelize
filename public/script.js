function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

async function mealsMacros() {
    const meals = await fetch("/api/meals");

    const mealJson = await meals.json();
    

    const macros = await fetch("/api/macros")
    console.log(macros, mealJson)

    const macrosJson = await macros.json()
    console.log(macrosJson)

    let takenNum = [];
    let mealList = [];
    let carbList= [];
    let fatList = [];
    let protList = [];
    let numdeb = [];

    
    for(i=0;i < 10; i++) {
        mealDict = {}
        randInt = getRandomInt(mealJson.length)
        numdeb.push(randInt)
        
        if (mealList.indexOf(mealJson[randInt]) !== -1) {
            i--
            continue
        }
        else {
            
            takenNum.push(randInt);
            mealList.push(mealJson[randInt]);
            carbList.push({label: mealJson[randInt].meal_name, y: macrosJson[randInt].carbs})
            fatList.push({label: mealJson[randInt].meal_name, y: macrosJson[randInt].fat})
            protList.push({label: mealJson[randInt].meal_name, y: macrosJson[randInt].protein})
        
        }
        
    }; 
    console.log(carbList,fatList,protList,mealList,macrosJson)
    var mealChart = new CanvasJS.Chart("chartContainer", {
        theme:"light1",
        animationEnabled: true,
        title: {
            text: "Meals Chart"
        },
        data: [{
            type: "stackedBar",
            name: "carbs",
            showInLegend: "true",
            dataPoints: carbList
            },{
            type:"stackedBar",
            name:"fats",
            showInLegend: "true",
            dataPoints: fatList
            },{
                type:"stackedBar",
                name: "protein",
                showInLegend: "true",
                dataPoints: protList
            }

        ]
    })
mealChart.render()
}

async function diningTable() {
    const diningHalls = await fetch("/api/dining");
    const dHjson = await diningHalls.json();
    const resTable = document.querySelector(".tableBody");
    console.log(resTable)
    console.log(dHjson);
    
    dHjson.data.forEach((item) => {
        console.log(item)
        const appendItem = document.createElement('tr');
        appendItem.innerHTML = `<td>${item.hall_id}</td><td>${item.hall_name}</td><td>${item.hall_address}</td>`
        resTable.append(appendItem)
    });
}
window.onload = mealsMacros;