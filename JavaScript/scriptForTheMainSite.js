class CounterObject{

  constructor(){
    this.subtraction = `<button onclick="CounterObject.action(this,'sub')">-</button>`;
    this.input = `<input class="input-counter" value = 1 disabled>`;
    this.addition = `<button onclick="CounterObject.action(this,'add')">+</button>`;
    this.test = () => {console.log("succ");}
  }
  static action(ele, action){

    let parent = ele.parentElement;
    let superiorParent = parent.parentElement;
    let price = 0;
    let valuesOfMap =Array.from(itemsInCartMap.values()) ;
    for (let i = 0; i < valuesOfMap.length; i++) {
      for (let j = 0; j < valuesOfMap[i].length; j++) {
        if (valuesOfMap[i][j] == superiorParent.children[0].innerText){
          price = arrayOfGoods[i][1];
        }
  
      }
    }
  
    if(action == "sub"){
      if(parseInt(parent.children[1].value) - 1 >= 0){
        parent.children[1].value = parseInt(parent.children[1].value) - 1;
      }
    }else if (action == "add"){
      parent.children[1].value = parseInt(parent.children[1].value) + 1;
    }
    superiorParent.children[2].innerText = parseInt(parent.children[1].value) * price;
    console.log(parent.children[1].value)
  
    for (let i = 0; i < valuesOfMap.length; i++) {
      for (let j = 0; j < valuesOfMap[i].length; j++) {
        console.log(superiorParent.children[0].innerText)
        if (valuesOfMap[i][j] == superiorParent.children[0].innerText){
          itemsInCartMap.set(i,[arrayOfGoods[i][0], parseInt(parent.children[1].value), parseInt(parent.children[1].value) * price])
          return;
        }
      }
    }
  }
}
let newCounterElement = new CounterObject();

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
const addCounterToPopUp = () => {
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

const addNewItemInMap = (id) => {
  itemsInCartMap.set(id, [arrayOfGoods[id][0], 1, arrayOfGoods[id][1]]);
}

const modifyExistingItemInMap = (id) => {
  itemsInCartMap.set(id, [arrayOfGoods[id][0], arrayOfCounters[id], arrayOfGoods[id][1] * arrayOfCounters[id]])
}

const goodsInCart = (id) => {
  let mainContainer = document.getElementById("goodsTable");
  let arrayOfItems = document.getElementsByClassName("item-line-up");
  console.log(newCounterElement);
  newCounterElement.test();
  if (arrayOfCounters[id] == undefined) {
  arrayOfCounters[id] = 0;
  arrayOfCounters[id]++;  
  }else{
  arrayOfCounters[id]++;     
  }

  let keyExists = itemsInCartMap.has(id);

  if(keyExists == false){
    let newcommodity =
    `<tr class = "item-line-up">
      <td class = "first-cell">${arrayOfGoods[id][0]}</td>
      <td class = "amount-of-items">${newCounterElement.subtraction}${newCounterElement.input}${newCounterElement.addition}</td>
      <td class = "other-cells">${arrayOfGoods[id][1]}</td>      
      </tr>`;
    mainContainer.insertAdjacentHTML("beforeend",newcommodity);
    addNewItemInMap(id);

  }else{

    modifyExistingItemInMap(id);
    let pickedItems = itemsInCartMap.get(id)
    for (let i = 0; i < arrayOfItems.length; i++) {
      if (arrayOfItems[i].children[0].innerText == pickedItems[0]){
        arrayOfItems[i].children[1].children[1].value = pickedItems[1];
        arrayOfItems[i].children[2].innerText = pickedItems[2];
      }
    }
  }
  // console.log(itemsInCartMap);
}


const revealCart = () => {
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

const hideCart = () => {
  document.getElementById("goodsCart").classList.remove("showCart");
  document.getElementById("shadow").classList.remove("showBlackBox");
  document.getElementById("goodsCart").classList.add("hide");
  document.getElementById("shadow").classList.add("hideBlackBox");
}

const removeAllItems = () => {
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
  itemsInCartMap.clear();
}
