import { appendFileSync, writeFileSync, readFileSync } from 'node:fs'

export default class fileOps {
  fileName = "toDoList.csv"
  constructor() {
    writeFileSync(this.fileName, "")
  }

  appendFile(item) {
    appendFileSync(this.fileName,item)
  }

  readFile() {
    return readFileSync(this.fileName, "utf-8")
  }

  writeFile(data, fileName) {
    writeFileSync(fileName, data)
  }
}