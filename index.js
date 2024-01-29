"use strict";
// This is the fronend js, it will be revealed on the brower.

let symName = ["AAPL", "MSFT", "TSLA"];
const options = {
  method: "GET",
  url: `http://127.0.0.1:8000/APIkey`,
};

axios
  .request(options)
  .then((res) => {
    getdata(res);
  })
  .catch((err) => {
    return err;
  });

const getdata = (res) => {
  console.log(res);
  let symDataArr = [res.data.AAPL, res.data.MSFT, res.data.TSLA];
  let symParaArr = ["symbol", "price", "currency", "change"];

  for (let i = 0; i < symDataArr.length; i++) {
    document.getElementById(`symbol${i + 1}_` + `${symParaArr[0]}`).innerHTML =
      symDataArr[i].symbol;
    document.getElementById(`symbol${i + 1}` + `_${symParaArr[1]}`).innerHTML =
      Number(symDataArr[i].previous_close).toFixed(2);
    document.getElementById(`symbol${i + 1}` + `_${symParaArr[2]}`).innerHTML =
      symDataArr[i].currency;
    document.getElementById(`symbol${i + 1}` + `_${symParaArr[3]}`).innerHTML =
      (symDataArr[i].percent_change * 100).toFixed(2) + " %";

    let change = Number(symDataArr[i].percent_change) * 100;
    if (change < 0) {
      document.getElementById(
        `symbol${i + 1}` + `_${symParaArr[3]}`
      ).style.color = "#FF3333";
    } else {
      document.getElementById(
        `symbol${i + 1}` + `_${symParaArr[3]}`
      ).style.color = "#66FF66";
    }
  }
};

// show search body and header - need to declare the function in window scope
const searchWindow = () => {
  document.querySelector(".bodywrappersearch").style.visibility = "visible";
  document.querySelector(".headersearch").style.visibility = "visible";
};
window.searchWindow = searchWindow;

// hiding search body and header by clicking cancel button and the background area - using DOM way

// hiding by clicking the background area
const body = document.querySelector(".bodywrappersearch");
const cancelBtn = document.querySelector(".searchclose");
body.addEventListener("click", function (e) {
  if (e.target == body) {
    document.querySelector(".bodywrappersearch").style.visibility = "hidden";
    document.querySelector(".headersearch").style.visibility = "hidden";
  }
});
cancelBtn.addEventListener("click", function (e) {
  document.querySelector(".bodywrappersearch").style.visibility = "hidden";
  document.querySelector(".headersearch").style.visibility = "hidden";
});

// prevent form element to submit info to the server.
const form = document.querySelector(".formcontainer");
form.addEventListener("submit", (data) => {
  data.preventDefault();
});
