const express = require('express')
const path = require('path')
const edit_item = require('./utils/edit_item')
var bodyParser = require("body-parser")

const app = express()
const index_path = path.join(__dirname, '../public')
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs')
app.use(express.static(index_path))

app.get('/', (req, res) => {

    const item = edit_item.load_item()
    res.render("index", { list: item })

})

app.post('/additem', (req, res) => {

    edit_item.add_item(req.body.item)
    res.redirect('/')
})
app.post('/remove', (req, res) => {

    edit_item.remove_item(req.body.item)

    res.redirect('/')
})
app.listen(3000, () => {
    console.log('server listening at port 3000')
})