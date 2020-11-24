const express = require('express')
const router = express.Router()
const urllib = require('urllib')

router.get('/sanity', function (request, response) {
    console.log("Ok!")
    response.send('Ok!')
})

router.get('/recipes/:ingredient', function (request, response) {
    const ing = request.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ing}`, function (err, data, res) {
        if (err) {
            console.log(err)
            throw err; // you need to handle error
        }
        // data is Buffer instance
        let results = JSON.parse(data).results
        response.send(results)
    });
})

module.exports = router