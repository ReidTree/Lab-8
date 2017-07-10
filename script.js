
//Object constructor for groceryList array
function item(itemNum, name, pricePer, qty, tax, totalPrice) {
  this.itemNum = itemNum;
  this.name = name;
  this.pricePer = pricePer;
  this.qty = qty;
  tax = (pricePer * qty * 0.06);
  this.tax = tax;
  this.totalPrice = ((pricePer * qty) + tax);
};
//Shopping Cart array
var groceryList = [];

// footer row with values pulled from forLoop()
function totalList(ft1,ft2,ft3,ft4,ft5) {

  document.getElementById('tot#').innerHTML = ft1;
  document.getElementById('totPrice').innerHTML = '$'+ft2;
  document.getElementById('preTaxTot').innerHTML = '$'+ft3;
  document.getElementById('taxTot').innerHTML = '$'+ft4;
  document.getElementById('gTot').innerHTML = '$'+ft5;
}

//forLoop function that adds up totals for footer
function forLoop() {
  var totItems = 0;
  var totPrice = 0;
  var preTaxTot = 0;
  var taxTot = 0;
  var gTot = 0;

  for (var i = 0; i < groceryList.length; i++) {
    var obj = groceryList[i];
    totItems += (1);
    totPrice += obj.pricePer;
    preTaxTot += (obj.pricePer*obj.qty);
    taxTot += obj.tax;
    gTot += obj.totalPrice;
  }
  totalList(totItems,totPrice.toFixed(2),preTaxTot.toFixed(2),taxTot.toFixed(2),gTot.toFixed(2));

}

// addItem function onclick
function clickAdd(){
  // debugger;
var enterI = document.getElementById('enterItem').value;
var enterQ = parseFloat(document.getElementById('enterQty').value);
var enterP = parseFloat(document.getElementById('enterPrice').value);

// function that pulls inputs --> runs with onclick='clickAdd()' also pushes
// also this function pushes new item to groceryList array
function addItem(itemCount, newItem, newPrice, newQty){
  var addedItem = 'item' + ((groceryList.length + 1).toString());
  addedItem = new item(itemCount, newItem, newPrice, newQty);
  groceryList.push(addedItem);

//Table rows added per add item click
  var new_row = document.createElement('tr');
  new_row.insertCell(0).innerText = "";
  new_row.insertCell(1).innerText = "";
  new_row.insertCell(2).innerText = newItem;
  new_row.insertCell(3).innerText = '$' + newPrice.toFixed(2);
  new_row.insertCell(4).innerText = newQty.toFixed(2);
  new_row.insertCell(5).innerText = '$' + (newQty*newPrice).toFixed(2);
  new_row.insertCell(6).innerText = '$' + (newQty*newPrice*.06).toFixed(2);
  new_row.insertCell(7).innerText = '$' + ((newQty*newPrice*.06)+(newQty*newPrice)).toFixed(2);
  new_row.insertCell(8).innerHTML = "<button onclick='deleteRow(this)' class='deleteBtn' type='button' name='button'>Delete Item</button>";
  insertAfter(document.getElementById("insert"), new_row);
  function insertAfter(target, el) {
      target.parentNode.appendChild( el );
  }
}

addItem((groceryList.length + 1), enterI, enterP, enterQ);
window['forLoop']();
};

function deleteRow(row){
  var d = row.parentNode.parentNode.rowIndex;
  document.getElementById('groceryTable').deleteRow(d);
  groceryList.splice((d-1),1);
  window['forLoop']();
};
