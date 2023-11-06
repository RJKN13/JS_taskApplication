import fileOps from "./fileOps.js";

export default class addList  { 
  
  todoList = []
  fs = new fileOps();
  constructor(todoList) {
    this.todoList = todoList  
  }

  addToList(todoItem){
    this.todoList.push(todoItem);
    this.fs.appendFile(todoItem + ",")   
}
  
  addToTopOfList(topItem) {
    let newList = this.todoList.unshift(topItem);
    let oldList = this.fs.readFile()
    this.fs.writeFile(topItem + "," + oldList)
}

}