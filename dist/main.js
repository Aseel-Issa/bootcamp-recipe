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