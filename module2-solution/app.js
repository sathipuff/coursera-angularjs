(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('BuyListController', BuyListController)
.controller('BoughtListController', BoughtListController)
.service('ShoppingListService', ShoppingListService);

BuyListController.$inject = ['ShoppingListService'];
function BuyListController(ShoppingListService) {
  var buyListCtrl = this;
  buyListCtrl.items = ShoppingListService.getBuyItemList();

  buyListCtrl.buyItem = function (name,quantity) {
    ShoppingListService.buyItem(name, quantity);
    buyListCtrl.items = ShoppingListService.getBuyItemList();
  };

}

BoughtListController.$inject = ['ShoppingListService'];
function BoughtListController(ShoppingListService) {
  var boughtListCtrl = this;

  boughtListCtrl.items = ShoppingListService.getBoughtItemList();

}


function ShoppingListService() {
  var service = this;
  console.log("STart");
  var buyList = [
    {
      name: "Ben & Jerry Ice Cream",
      quantity: 10
    },
    {
      name: "Magnum Ice Cream",
      quantity: 10
    },
    {
      name: "Haagen-Dazs Ice Cream",
      quantity: 10
    },
        {
      name: "Baskin-Robbins Ice Cream",
      quantity: 10
    },
        {
      name: "Dairy Queen Ice Cream",
      quantity: 10
    }

  ];

  var boughtList = [];

  service.buyItem = function (itemName, quantity) {

    var item = {
      name: itemName,
      quantity: quantity
    };

    boughtList.push(item);
    buyList = removeItem(itemName,buyList);
  };

  service.getBuyItemList = function () {
    return buyList;
  };

  service.getBoughtItemList = function () {
    return boughtList;
  };

}

function removeItem(itemName, listArr){
  var resultArr =[];
  for (var i =0; i<listArr.length;i++){
    if(listArr[i].name !== itemName){
      resultArr.push(listArr[i]);
    }
  }

  return resultArr;
}

})();
