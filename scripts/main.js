// var fs = require('fs');

import listOps from "./listOps.js";


let todoList = []
let mainlist = new listOps(todoList);

mainlist.addToList("apple")
mainlist.addToList("paron")
mainlist.addToList("banana")
mainlist.addToList("donut")
mainlist.addToList("tomato")
mainlist.addToList("onion")
mainlist.addToList("grapes")
mainlist.addToList("strawberry")


mainlist.addToTopOfList("apotek")
mainlist.removeFromBottomOfList()
mainlist.removeFromTopOfList()
mainlist.removeFromListByIndex(2)
mainlist.removeFromListByName("donut")
mainlist.moveToTop("grapes")
mainlist.moveToBottom("apple")
mainlist.moveDown("tomato")
mainlist.moveDown("grapes")
mainlist.moveDown("apple")
mainlist.moveUp("paron")
mainlist.moveUp("apple")
mainlist.removeFromListAndAddToDone("apple")
mainlist.removeFromListAndAddToDone("onion")