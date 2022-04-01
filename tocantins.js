const cidadesTo = ['Gurupi - TO','Paraiso do Tocantins - TO','Barrolandia - TO','Miranorte - TO','Guarai - TO','Colinas do Tocantins- TO','Araguaina - TO',
'Estreito - TO', 'Porto Franco - TO', 'Campestre - TO', 'Imperatriz - TO','Pau DArco - TO','Itacaja - TO','Anapolis - GO','Porangatu - TO'];

const cidadesTo1 = cidadesTo.sort();

t = '';

for(i in cidadesTo){
    t += '<li>'+cidadesTo[i]+'</li>';
}

listaTo.innerHTML = t;

pesquisaTo.onkeyup = function(e){
    t = this.value;
    r = new RegExp(t,'g');

    for(i in cidadesTo){
        if(cidadesTo[i].match(r)){
            listaTo.children[i].removeAttribute("style")
        }else{
            listaTo.children[i].style.display='none'
        }
    }
}
