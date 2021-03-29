

async function swag() {
    const diningHalls = await fetch("/api/dining");
    const assman = await diningHalls.json();
    const resTable = document.querySelector(".tableBody");
    console.log(resTable)
    console.log(assman);
    
    assman.data.forEach((item) => {
        console.log(item)
        const appendItem = document.createElement('tr');
        appendItem.innerHTML = `<td>${item.hall_id}</td><td>${item.hall_name}</td><td>${item.hall_address}</td>`
        resTable.append(appendItem)
    });
}
window.onload = swag;