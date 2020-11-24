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
            throw err; 
        }
        let results = JSON.parse(data).results
        results = results.map(result => ({ title: result.title, video: result.href, image: result.thumbnail, ingredients: result.ingredients }))
        response.send(results)
    });
})

module.exports = router