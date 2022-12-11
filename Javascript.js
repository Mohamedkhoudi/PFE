const btnPlus= document.getElementsByClassName("plus");
// console.log(btnPlus)
var checkbox= document.getElementsByClassName("check");
// console.log('checkelm', checkbox)
const btnMinus= document.getElementsByClassName("minus")
// console.log(btnMinus)
for (var i=0 ; i < btnPlus.length; i++){
    btnPlus[i].addEventListener('click',f);
    checkbox[i].addEventListener('click', m);
    btnMinus[i].addEventListener('click', N);
}

function f(event) {
const btn = event.target;
const divbtn = btn.parentElement;
// console.log(divbtn)
var elmtag = divbtn.querySelector('p');
var valelmtag = Number(elmtag.innerHTML);
valelmtag++;
elmtag.innerHTML = valelmtag;
// console.log(valelmtag);
const unitprice =divbtn.parentElement.parentElement
const valup = Number(unitprice.querySelector(".unitPrice").innerHTML)
var priceTag = unitprice.querySelector(".price")
var price = Number(priceTag.innerHTML)
price = valelmtag * valup
priceTag.innerHTML = price
}
function N(event) {
  const btn = event.target;
  const divbtn = btn.parentElement;
  // console.log(divbtn)
  var elmtag = divbtn.querySelector('p');
  var valelmtag = Number(elmtag.innerHTML);
  if (valelmtag>0) 
  valelmtag--;

  elmtag.innerHTML = valelmtag;
  // console.log(valelmtag);
  const unitprice =divbtn.parentElement.parentElement
  const valup = Number(unitprice.querySelector(".unitPrice").innerHTML)
  var priceTag = unitprice.querySelector(".price")
  var price = Number(priceTag.innerHTML)
  price = valelmtag * valup
  priceTag.innerHTML = price
  }
  function m(event) {
    const checkbox = event.target;
    // console.log(checkbox)
    const trcheckbox = checkbox.parentElement.parentElement;
    const price = Number(trcheckbox.querySelector(".price").innerHTML);
    // console.log(price)
    const container = trcheckbox.parentElement;
    var totaltag = document.getElementById("total");
    // console.log(totaltag)
    var total = Number(totaltag.innerHTML);
    const btnPlus = trcheckbox.querySelector(".plus")
    // console.log(btnPlus)
    if (checkbox.checked === true) {
        total +=  price
        totaltag.innerHTML = total
        btnPlus.setAttribute("disabled",true)
    }
    else{
      total -= price
      totaltag.innerHTML = total
      btnPlus.removeAttribute("disabled")
    }
}