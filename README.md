# JS_taskApplication

# To-do List

## Run
To run the application start with `node main.js` in your terminal. Follow the options to do activities with the lists and check the list with `toDoList.csv`, `haveDoneList.csv` in your folder.

## Classes

1. Created fileOps.js class to support file handling methods.
2. Created listOps.js class to support list operations.

### Functions in fileOps class

### File operations

1. appendFile(string): Appends data to toDoList.csv
2. readFile(): Reads data from toDoList.csv
3. writeFile(string data, string file name): Write data into toDolist.csv/haveDoneList.csv

### Functions in listOps class

### Add to-list

1. addToList(String): Adds item to the list at the bottom and appends toDoList.csv file.
2. addToTopOfList(String): Adds item to the top of the list and writes toDoList.csv file.

### Remove from-list

1. removeFromBottomOfList(): Removes item from the bottom of the list and writes toDoList.csv file.
2. removeFromTopOfList(): Removes item from the top of the list and writes toDoList.csv file.
3. removeFromListByIndex(index): Removes item from the list based on index and writes toDoList.csv file.
4. removeFromListByName(String): Removes item from the list based on item name and writes toDoList.csv file.

### Move items in-list

1. moveToTop(String): Move item to the top of the list and writes toDoList.csv file.
2. moveToBottom(String): Move item to the bottom of the list and writes toDoList.csv file.
3. moveDown(String): Move/swap an item down to one position in the list and writes toDoList.csv file.
4. moveUp(String): Move/swap an item up to one position in the list and writes toDoList.csv file.

### Create Have-done list

1. removeFromListAndAddToDone(String): Remove item from toDoList.csv file and update it to haveDoneList.csv file.
