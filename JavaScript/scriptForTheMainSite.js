var counter = 0
var counterOfGoods = 1;
var arrayOfGoods = 
[
  ["Atlas Copco 4220-0982-15 15 meter Cable", 2000],
  ["Atlas Copco 4220-1007-10 10 meter Extension Cable", 2100],
  ["Atlas Copco 4200-1010-15 10 meter Extension Cable", 2100],
  ["Atlas Copco Nutrunner 1", 3400],
  ["Atlas Copco Nutrunner 2", 3240],
  ["Atlas Copco Nutrunner 3", 5000]
]
var arrayOfCounters = [];
function addCounterToPopUp(){
  if (counter != 0) {
    counter++;
    let popUp = document.getElementById("bubblePopUp");
    popUp.innerHTML = counter;
  }else{
    counter++;
    let popUp = document.getElementById("bubblePopUp");
    if (counter == 1) {
      popUp.classList.remove("hide");
      popUp.classList.add("show");
    }
    popUp.innerHTML = counter;
  }
}

function goodsInCart(id) {
  let mainContainer = document.getElementById("goodsTable");
  let arrayOfItems = document.getElementsByClassName("itemLineUp");

  if (arrayOfCounters[id] == undefined) {
  arrayOfCounters[id] = 0;
  arrayOfCounters[id]++;  
  }else{
  arrayOfCounters[id]++;     
  }
  
  if(arrayOfCounters[id] == 1){
    let newcommodity = document.createElement("tr");
    newcommodity.classList.add("itemLineUp");
    let localArray = []
    for (let i = 0; i < 3; i++) {
      localArray.push(document.createElement("td"))
    }
    localArray[0].innerText = arrayOfGoods[id-1][0];
    localArray[0].classList.add("firstCell");
    localArray[1].innerText = 1;
    localArray[2].innerText = arrayOfGoods[id-1][1];
    for (let i = 0; i < localArray.length; i++) {
      newcommodity.appendChild(localArray[i]);      
    }
    mainContainer.appendChild(newcommodity);
  }else{
    for (let i = 0; i < arrayOfItems.length; i++) {
      if (arrayOfItems[i].childNodes[0].childNodes[0].nodeValue == arrayOfGoods[id-1][0]){
        arrayOfItems[i].childNodes[1].childNodes[0].nodeValue = arrayOfCounters[id];
      }
    }
  }
    
}

function revealCart() {
  document.getElementById("goodsCart").classList.remove("hide");
  document.getElementById("shadow").classList.remove("hideBlackBox");
  document.getElementById("goodsCart").classList.add("showCart");
  document.getElementById("shadow").classList.add("showBlackBox");
}
function hideCart() {
  document.getElementById("goodsCart").classList.remove("showCart");
  document.getElementById("shadow").classList.remove("showBlackBox");
  document.getElementById("goodsCart").classList.add("hide");
  document.getElementById("shadow").classList.add("hideBlackBox");
}

function removeAllItems() {
  let goodsList = document.getElementById("goodsTable");
  let items = document.getElementsByClassName("itemLineUp")
  while (items.length != 0) {
    goodsList.removeChild(items[0]);
  }
  let popUp = document.getElementById("bubblePopUp");
  counter = 0;
  arrayOfCounters.length = 0;
  popUp.innerHTML = counter;
  popUp.classList.remove("show");
  popUp.classList.add("hide");
}
