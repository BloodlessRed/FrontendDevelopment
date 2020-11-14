let counter = 0
let counterOfGoods = 1;
let arrayOfGoods = 
[
  ["Atlas Copco 4220-0982-15 15 meter Cable", 2000],
  ["Atlas Copco 4220-1007-10 10 meter Extension Cable", 2100],
  ["Atlas Copco 4200-1010-15 10 meter Extension Cable", 2100],
  ["Atlas Copco Nutrunner 1", 3400],
  ["Atlas Copco Nutrunner 2", 3240],
  ["Atlas Copco Nutrunner 3", 5000]
]
let itemsInCartMap = new Map();
let arrayOfCounters = [];
let addCounterToPopUp = () => {
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

let goodsInCart = (id) => {
  let mainContainer = document.getElementById("goodsTable");
  let arrayOfItems = document.getElementsByClassName("item-line-up");

  if (arrayOfCounters[id] == undefined) {
  arrayOfCounters[id] = 0;
  arrayOfCounters[id]++;  
  }else{
  arrayOfCounters[id]++;     
  }
  let mapKeys = itemsInCartMap.keys();
  let keyExists = false;
  for (let keys of mapKeys){
    if (keys == id){
      keyExists = true;
    }
  }
  if(keyExists == false){
    let newcommodity =
    `<tr class = "item-line-up">
      <td class = "first-cell">${arrayOfGoods[id-1][0]}</td>
      <td class = "other-cells">1</td>
      <td class = "other-cells">${arrayOfGoods[id-1][1]}</td>      
      </tr>`;
    mainContainer.insertAdjacentHTML("beforeend",newcommodity);
    itemsInCartMap.set(`${id}`, [arrayOfGoods[id-1][0], 1, arrayOfGoods[id-1][1]])
  }else{
    itemsInCartMap.set(`${id}`, [arrayOfGoods[id-1][0], arrayOfCounters[id], arrayOfGoods[id-1][1] * arrayOfCounters[id]])
    let pickedItems = itemsInCartMap.get(`${id}`)
    for (let i = 0; i < arrayOfItems.length; i++) {
      if (arrayOfItems[i].children[0].innerText == pickedItems[0]){
        arrayOfItems[i].children[1].innerText = pickedItems[1];
        arrayOfItems[i].children[2].innerText = pickedItems[2];
      }
    }
  }
  console.log(itemsInCartMap);
}

let revealCart = () => {
  let loader = document.getElementById("loader");
  let blackBox = document.getElementById("shadow");
  loader.classList.toggle("hide");
  blackBox.classList.remove("hideBlackBox");
  blackBox.classList.add("showBlackBox"); 
  setTimeout(() => {
  loader.classList.toggle('hide');
  document.getElementById("goodsCart").classList.remove("hide");
  document.getElementById("goodsCart").classList.add("showCart");
  }, 2000);
}

let hideCart = () => {
  document.getElementById("goodsCart").classList.remove("showCart");
  document.getElementById("shadow").classList.remove("showBlackBox");
  document.getElementById("goodsCart").classList.add("hide");
  document.getElementById("shadow").classList.add("hideBlackBox");
}

let removeAllItems = () => {
  let goodsList = document.getElementById("goodsTable");
  let items = document.getElementsByClassName("item-line-up")
  while (items.length != 0) {
    goodsList.removeChild(items[0]);
  }
  let popUp = document.getElementById("bubblePopUp");
  counter = 0;
  arrayOfCounters.length = 0;
  popUp.innerHTML = counter;
  popUp.classList.remove("show");
  popUp.classList.add("hide");
  itemsInCartMap = new Map();
}
