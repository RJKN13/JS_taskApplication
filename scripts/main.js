import fileOps from "./fileOps.js";
import listOps from "./listOps.js"; 
import promptSync from "prompt-sync"
const prompt = promptSync()

let todoList = []
let mainlist = new listOps(todoList);

let choice = ""
while (choice != 'Z') {  
  console.log("--------------------------------------------")
  console.log("1. Add \n" + "2. Move \n" + "3. Remove \n" + "Z. To exit the application")
  console.log("--------------------------------------------")
  choice = prompt("Enter the number (1-3 or Z): ")
  switch (choice) {
    case '1':
      add(1);
      break;
    case '2':
      move(2);
      break;
    case '3':
      remove(3);
      break;
    case 'Z':
      console.log("List Completed!");
      break;
    default:
      console.log('You entered wrong choice');
  }
}  

function add(option) {
  while (option != "X") {
    console.log("--------------------------------------------")
    console.log("A. addToList \n" + "B. addToTopOfList \n" + "X. Back to main list")
    console.log("--------------------------------------------")
    option = prompt("Enter your option A/B/X: ")
    switch (option) {
      case 'A':
        addToList()
        break
      case 'B':
        addToTopOfList()
        break
      case 'X':
        console.log("Taking you back to main list")
        break
      default:
        console.log("Incorrect choice!")
    }
  }
 }

function addToList() {
  let item = prompt("Enter Item to add: ")
  mainlist.addToList(item)
}

function addToTopOfList() {
  let item = prompt("Enter Item to add at top of the list: ")
  mainlist.addToTopOfList(item)
}


function move(option) {  
  while (option != "X") {
    console.log("--------------------------------------------")
    console.log("A. moveToTop \n" + "B. moveToBottom \n" + "C. moveDown \n"
      + "D. moveUp \n" + "X. Back to main list")
    console.log("--------------------------------------------")
    option = prompt("Enter your option A/B/C/D/X: ")
    switch (option) {
      case 'A':
        moveToTop()
        break
      case 'B':
        moveToBottom()
        break
      case 'C':
        moveDown()
        break
      case 'D':
        moveUp()
        break
      case 'X':
        console.log("Taking you back to main list")
        break
      default:
        console.log("Incorrect choice!")
    }
}
}

function moveToTop() {
  let item = prompt("Enter item to move to top: ")
  mainlist.moveToTop(item)
}

function moveToBottom() {
  let item = prompt("Enter item to move to bottom: ")
  mainlist.moveToBottom(item)
}

function moveDown() {
  let item = prompt("Enter item to move down to one place: ")
  mainlist.moveDown(item)
}

function moveUp() {
  let item = prompt("Enter item to move up to one place: ")
  mainlist.moveUp(item)
}

function remove(option) {
  while (option != "X") {
    console.log("--------------------------------------------")
    console.log("A. removeFromBottomOfList \n" + "B. removeFromTopOfList \n"
      + "C. removeFromListByIndex \n" + "D. removeFromListByName \n" + "E. removeFromListAndAddToDone \n")
    console.log("--------------------------------------------")
    option = prompt("Enter your option A/B/C/D/E/X: ")
    switch (option) {
      case 'A':
        removeFromBottomOfList()
        break
      case 'B':
        removeFromTopOfList()
        break
      case 'C':
        removeFromListByIndex()
        break
      case 'D':
        removeFromListByName()
        break
      case 'E':
        removeFromListAndAddToDone()
        break
      case 'X':
        console.log("Taking you back to main list")
        break
      default:
        console.log("Incorrect choice!")
    }
}
}

function removeFromBottomOfList() {
  mainlist.removeFromBottomOfList()
}

function removeFromTopOfList() {
  mainlist.removeFromTopOfList()
}

function removeFromListByIndex() {
  let index = parseInt(prompt("Enter the index of item to be removed: "))
  mainlist.removeFromListByIndex(index)
}

function removeFromListByName() {
  let item = prompt("Enter item name: ")
  mainlist.removeFromListByName(item)
}

function removeFromListAndAddToDone() {
  let item = prompt("Enter item name to move to have-done list: ")
  mainlist.removeFromListAndAddToDone(item)
}