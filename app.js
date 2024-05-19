const Base_URL ="https://v6.exchangerate-api.com/v6/9bbcc2bf9f5388c6360fa2d9/latest";

const dropdown= document.querySelectorAll(".dropdown select");
const flags1= document.querySelector(".selectFrom");
const flags2= document.querySelector(".selectTo")  
const image1 = document.querySelector(".flagsFrom");
const image2 = document.querySelector(".flagsTo");
const btn = document.querySelector("form button");

for (select of dropdown){
    for(country in countryList){
        let newOpt = document.createElement("option");
        newOpt.innerText=country;
        newOpt.value=countryList[country];
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
    console.log(flags1.value);
    image1.src=`https://flagsapi.com/${flags1.value}/shiny/64.png`;
})
flags2.addEventListener("click",()=>{
    console.log(flags2.value);
    image2.src=`https://flagsapi.com/${flags2.value}/shiny/64.png`;
})

btn.addEventListener("click",(evt)=>{
    evt.preventDefault(); // to prevent the default behaviour of the the form that is the refreshing of the page when submitted
    let amount = document.querySelector("input");
    console.log(amount.value);
    if(amount.value =="" || amount.value<1){
        amount.value=1;
    }
})

const URL=`${Base_URL}/${flags1.value}`
console.log(URL);