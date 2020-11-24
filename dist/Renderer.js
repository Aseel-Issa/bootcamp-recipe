
class Renderer{

    constructor(){
        this.source = $('#recepie-template').html();
        this.template = Handlebars.compile(this.source);
        this.results = $('#recepies')
    }
    
    renderRecpie(recpie){
        const newHTML = this.template(recpie);
        this.results.append(newHTML);
    }

    renderAllRecpies(recpies){
        this.results.empty()
        for (const recpie of recpies) {
            this.renderRecpie(recpie)
        }
    }

}