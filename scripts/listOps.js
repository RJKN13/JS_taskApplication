import { Console } from "console";
import fileOps from "./fileOps.js";
const toDoFile = "toDoList.csv"
const haveDoneFile = "haveDoneList.csv"

export default class listOps {
  
  todoList = []
  haveDoneList = [] 

  fs = new fileOps();

  constructor(todoList) {
    this.todoList = todoList
  }
  
  listToString(list) {
    let data = ""
    list.forEach(element => {
      data += element + ","
    });
    return data
  }
  
  addToList(todoItem) {
    this.todoList.push(todoItem)
    this.fs.appendFile(todoItem + ",")
  }
  
  addToTopOfList(topItem) {
    let newList = this.todoList.unshift(topItem);
    let oldList = this.fs.readFile()
    this.fs.writeFile(topItem + "," + oldList, toDoFile)
  }

  removeFromBottomOfList() {
    this.todoList.pop()
    this.fs.writeFile(this.listToString(this.todoList), toDoFile)
  }

  removeFromTopOfList() {
    this.todoList.shift();
    this.fs.writeFile(this.listToString(this.todoList), toDoFile)
  }

  removeFromListByIndex(index) {
    if (index >= 0 && index < this.todoList.length) {
      this.todoList.splice(index, 1)
    }
    this.fs.writeFile(this.listToString(this.todoList), toDoFile)
  }

  removeFromListByName(pickedUpItemName) {
    let pickedUpItemIndex = this.todoList.indexOf(pickedUpItemName)
    this.removeFromListByIndex(pickedUpItemIndex)
    return pickedUpItemName
  }

  moveToTop(itemName) {
    let item = this.removeFromListByName(itemName)
    this.addToTopOfList(item)
  }

  moveToBottom(itemName) {
    let item = this.removeFromListByName(itemName)
    this.addToList(item)
  }

  moveDown(item) {
    let currentIndex = this.todoList.indexOf(item)
    if (currentIndex != this.todoList.length - 1) {
      let nextIndex = currentIndex + 1
      let temp = this.todoList[nextIndex]
      this.todoList[nextIndex] = this.todoList[currentIndex]
      this.todoList[currentIndex] = temp 
      this.fs.writeFile(this.listToString(this.todoList), toDoFile)  
      }    
  }

  moveUp(item) {
    let currentIndex = this.todoList.indexOf(item)
    if (currentIndex != 0) {
      let previousIndex = currentIndex - 1
      let temp = this.todoList[previousIndex]
      this.todoList[previousIndex] = this.todoList[currentIndex]
      this.todoList[currentIndex] = temp    
    }    
    this.fs.writeFile(this.listToString(this.todoList), toDoFile)  
  }

  removeFromListAndAddToDone(pickedUpItemName) {
    this.haveDoneList.push(this.removeFromListByName(pickedUpItemName))
    this.fs.writeFile(this.listToString(this.haveDoneList), haveDoneFile)
}
}
