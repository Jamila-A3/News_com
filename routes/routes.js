var express = require('express')
var router =express.Router()

var books = [
    {
        name

    }

]

router.get('/check', function(req, res) {

})

router.get('/books', function(req, res){
    res.json({books: books})
})

module .exports = router