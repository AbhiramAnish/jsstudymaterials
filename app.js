const Base_URL ="https://v6.exchangerate-api.com/v6/9bbcc2bf9f5388c6360fa2d9/latest";

const dropdown= document.querySelectorAll(".dropdown select");
const flags1= document.querySelector(".selectFrom");
const flags2= document.querySelector(".selectTo")  
const image1 = document.querySelector(".flagsFrom");
const image2 = document.querySelector(".flagsTo");
const btn = document.querySelector("form button");
const resultMsg = document.querySelector(".msg");

for (select of dropdown){
    for(country in countryList){
        let newOpt = document.createElement("option");
        newOpt.innerText=country;
        newOpt.value=country;
        select.append(newOpt);
        if(select.name =="from" && country == "USD"){
            newOpt.selected="selected";
        }
        else if(select.name =="To" && country == "INR"){
            newOpt.selected="selected";
        }
    }
}


flags1.addEventListener("click",()=>{
    // console.log(flags1.value);
    let str = flags1.value;
    str=str.slice(0,-1);
    image1.src=`https://flagsapi.com/${str}/shiny/64.png`;
})
flags2.addEventListener("click",()=>{
    // console.log(flags2.value);
    let str = flags2.value;
    str=str.slice(0,-1);
    image2.src=`https://flagsapi.com/${str}/shiny/64.png`;
})

btn.addEventListener("click", async (evt)=>{
    evt.preventDefault(); // to prevent the default behaviour of the the form that is the refreshing of the page when submitted
    let amount = document.querySelector("input");
    console.log(amount.value);
    if(amount.value =="" || amount.value<1){
        amount.value=1;
    }
    const URL=`${Base_URL}/${flags1.value}`
    let response= await fetch(URL);
    let data= await response.json();
    console.log(response);
    console.log(data);
    let rate = data.conversion_rates[flags2.value];
    console.log(rate);
    let result = amount.value*rate;
    resultMsg.innerText=`${amount.value} ${flags1.value} = ${result} ${flags2.value}`;
})

