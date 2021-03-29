
async function swag() {
    const diningHalls = await fetch("/dining/:hall_id")
    console.log(diningHalls)
}
window.onload = swag;