

const curr1 = document.querySelector("#curr1");
const curr2 = document.querySelector("#curr2");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const rateDiv = document.querySelector("#rate");
const change = document.querySelector("#change");

curr1.addEventListener('change', exchangeRate);
input1.addEventListener('input', exchangeRate);
curr2.addEventListener('change', exchangeRate);
input2.addEventListener('input', exchangeRate);

change.addEventListener('click', function() {
  const temp = curr1.value;
  curr1.value = curr2.value;
  curr2.value = temp;
  exchangeRate();
});

 async function exchangeRate() {
       const api = "https://v6.exchangerate-api.com/v6/6e57dc6d69ab011e1fbdaaa6/latest/EUR";
       const response = await fetch(api);
       const data = await response.json();
  
        console.log(data.conversion_rates);
        
        const conversionRate = data.conversion_rates;
        const currency1 = curr1.value;
        const currency2 = curr2.value;

        const rateNum = conversionRate[currency2] / conversionRate[currency1];
        rateDiv.innerText = "1 " + currency1 + "= " + rateNum.toFixed(5) + " " + currency2;
        input2.value = (input1.value * rateNum).toFixed(2);
    };

exchangeRate();

