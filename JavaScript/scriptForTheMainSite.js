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
function addCounterToPopUp(){
  if (counter != 0) {
    counter++;
    let popUp = document.getElementById("bubblePopUp");
    popUp.innerHTML = counter;
  }else{
    counter++;
    let popUp = document.getElementById("bubblePopUp");
    popUp.classList.remove("hide");
    popUp.classList.add("show");
    popUp.innerHTML = counter;
  }
}

function goodsInCart(id) {
  let mainContainer = document.getElementById("goodsTable");
  let localCounter = 0
  for (let i = 0; i < mainContainer.childNodes.length; i++) {
    console.log(mainContainer.childNodes[1]);
    if (mainContainer.childNodes[i].innerText == arrayOfGoods[id-1][0]){
      localCounter++;
    }
  }
  console.log(localCounter);
  if(localCounter == 0){
    let newcommodity = document.createElement("tr");
    newcommodity.classList.add("itemLineUp");
    let localArray = []
    for (let i = 0; i < 3; i++) {
      localArray.push(document.createElement("td"))
    }
    localArray[0].innerText = arrayOfGoods[id-1][0];
    localArray[1].innerText = 1;
    localArray[2].innerText = arrayOfGoods[id-1][1];
    for (let i = 0; i < localArray.length; i++) {
      newcommodity.appendChild(localArray[i]);      
    }
    mainContainer.appendChild(newcommodity);
    }
  else{
    console.log(1);
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