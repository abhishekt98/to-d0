const fs = require('fs')

const add_item = (item) => {
    const list = load_item()
    list.push(item)
    const data = {
        list
    }
    const result = JSON.stringify(data)
    fs.writeFileSync('list.json', result)


}

const load_item = () => {
    try {
        const databuffer = fs.readFileSync('list.json')
        const stringfied = databuffer.toString()
        const data = JSON.parse(stringfied)
        return data.list
    } catch { return [] }
}

const remove_item = (array) => {
    const list = load_item()
    for (var i = 0; i < array.length; i++) {
        list.splice(array[i] - i, 1)
    }
    const data = {
        list
    }
    const result = JSON.stringify(data)
    fs.writeFileSync('list.json', result)

}


module.exports = {
    add_item,
    load_item,
    remove_item
}