const cidadesRe = ['Palmas - TO','Porto Nacional - TO'];

const cidadesRe1 = cidadesRe.sort();

t = '';

for(i in cidadesRe){
    t += '<li>'+cidadesRe[i]+'</li>';
}

listaRe.innerHTML = t;

pesquisaRe.onkeyup = function(e){
    t = this.value;
    r = new RegExp(t,'g');

    for(i in cidadesRe){
        if(cidadesRe[i].match(r)){
            listaRe.children[i].removeAttribute("style")
        }else{
            listaRe.children[i].style.display='none'
        }
    }
}
