const URL = "https://cat-fact.herokuapp.com/facts";
const info = document.querySelector("#catfact");
const btn = document.querySelector("#button");
//status 200 means sucessfull result

btn.addEventListener("click",getFacts)

async function getFacts(){
    console.log("Fetching data ---");
    let promise = await fetch(URL);
    console.log(promise); // JSON format
    let data = await promise.json(); // to make it readable json() converts json data to js object
    info.innerText = data[1].text;
}


