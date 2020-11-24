const findRecepies = function () {
    const ingredient = $('.find').val()
    let results = []

    $.get(`/recipes/${ingredient}`, (data) => {
        results = data;
        console.log(results)
     })

    setTimeout(function () {
        const renderer = new Renderer()
        renderer.renderAllRecpies(results)
    }, 3000)
}

const alertIngredient = function(){
    const ing = $(this).closest('.recepie').find('.ingredient')
    alert(ing[0].outerText)
}

$('body').on('click', '.recepie-image', alertIngredient)