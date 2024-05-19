const Base_URL ="https://v6.exchangerate-api.com/v6/9bbcc2bf9f5388c6360fa2d9/latest";

const dropdown= document.querySelectorAll(".dropdown select");
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
select.addEventListener("change",(evt)=>{
    updateFlag(evt);
})

const updateFlag = (element) => {
    let countryCode = countryList[element.value];
    let img = element.parentElement.querySelector("img");
    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
  };


btn.addEventListener("click",(evt)=>{
    evt.preventDefault(); // to prevent the default behaviour of the the form that is the refreshing of the page when submitted
    let amount = document.querySelector("input");
    console.log(amount.value);
    if(amount.value =="" || amount.value<1){
        amount.value=1;
    }
})

