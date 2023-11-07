import fileOps from "./fileOps.js";

export default class addList {
  
  todoList = []
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
    this.fs.writeFile(topItem + "," + oldList)
  }

  removeFromBottomOfList() {
    this.todoList.pop()
    this.fs.writeFile(this.listToString(this.todoList))
  }

  removeFromTopOfList() {
    this.todoList.shift();
    this.fs.writeFile(this.listToString(this.todoList))
  }

  removeFromListByIndex(index) {
    if (index >= 0 && index < this.todoList.length) {
      this.todoList.splice(index, 1)
    }
    this.fs.writeFile(this.listToString(this.todoList))
  }

  removeFromListByName(pickedUpItemName) {
    let pickedUpItemIndex = this.todoList.indexOf(pickedUpItemName)
    return this.removeFromListByIndex(pickedUpItemIndex)
  }
}