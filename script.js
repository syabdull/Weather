let button = document.querySelector("button");
let inputTag = document.querySelector("input");
let dtemp = document.querySelector(".temp p");
let dlocation = document.querySelector(".location_time_date h3");
let dtimendate = document.querySelector(".location_time_date p");
let dimg = document.querySelector(".condition img");
let dcondition = document.querySelector(".condition p");

button.addEventListener("click", () => {
  let value = inputTag.value;
  if (value.length == 0) {
    return;
  }
  myFun(value);
});
async function myFun(val) {
  try {
    let url = `http://api.weatherapi.com/v1/current.json?key=eecf4b7884d04dbd9df41655232611&q=${val}&aqi=no`;
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);
    dtemp.innerText = json.current.temp_c;
    dlocation.innerText = json.location.name;
    dtimendate.innerText = json.location.localtime;
    let iconlink = json.current.condition.icon;
    dimg.setAttribute("src", iconlink);
    dcondition.innerText = json.current.condition.text;
  } catch (err) {
    console.log(err);
  }
}
