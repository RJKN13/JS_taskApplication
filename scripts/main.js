// var fs = require('fs');

import listOps from "./listOps.js";


let todoList = []
let mainlist = new listOps(todoList);

mainlist.addToList("apple")
mainlist.addToList("paron")
mainlist.addToList("banana")

mainlist.addToTopOfList("apotek")
