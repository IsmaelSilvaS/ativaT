const cidadesCa = ['Arapiraca - AL(ce)', 'Maceio - AL(ce)', 'Sao Miguel dos Campos', 'Barreiras - BA(ce)',
'Capim Grosso - BA', 'Cocos - BA(ce-dd)','Correntina - BA(ce-dd)','Coribe - BA(rd)','Sao Felix - BA(rd)',
'Feira de Santana - BA(ce)','Formosa do Rio Preto - BA(dd)','Jaborandi - BA(dd)','Jacobina - BA','Juazeiro - BA(ce)','Luiz Eduardo Magalhaes - BA(ce)',
'Tabocas do Brejo Velho - BA(ce-dd)','Piritiba - BA(ce)','Riachao das Neves - BA','Salvador - BA(ce)','Santa Maria da Vitoria - BA','Senhor do Bonfim - BA',
'Utinga - BA','Vitoria da Conquista - BA(ce)','Aracati - CE','Brejo Santo - CE','Fortaleza - CE(ce)',
'Juazeiro do Norte - CE(ce)','Brasilia - DF()','Aguas Claras - DF(rd)','Aguas Lindas - DF(rd)','Boa Vista - DF(rd)',
'Brazlandia - DF(rd)','Candangolandia - DF(rd)','Ceilandia - DF(rd)','Ceu Azul - DF(rd)','Cidade Jardim - DF(rd)',
'Cidade Ocidental - DF(rd)','Gama - DF(rd)','Guara - DF(rd)','Novo Gama - DF(rd)','Nucleo Bandeirantes - DF(rd)',
'Paranoa - DF(rd)','Planaltina - DF(rd)','Recanto das Emas - DF(rd)','Riacho Fundo - DF(rd)','Santa Maria - DF(rd)',
'Sao Sebastiao - DF(rd)','Sobradinho - DF(rd)','Vicente Pires - DF(rd)','Taguatinga - DF(rd)','Anapolis - GO(ce)',
'Caldas Novas - GO(ce)','Catalao - GO(ce)','Cristalina - GO','Goiania - GO(ce)','Araguari - MG(ce)','Januaria - MG(ce)',
'Montes Claros - MG(ce)','Paracatu - MG','Patos de Minas - MG','Pirapora - MG','Salinas - MG(ce)','Uberaba - MG(ce)',
'Uberlandia - MG(ce)','Cajazeiras - PB','Joao Pessoa - PB(ce)','Caruaru - PE(ce)','Petrolina - PE(ce)','Recife - PE(ce)',
'Santa Cruz do Capibaribe - PE(ce)','Bom Jesus - PI','Corrente - PI(dd)','Cristino Castro - PI','Floriano - PI',
'Regeneracao - PI','Teresina - PI(ce)','Apodi - RN()','Itau - RN(ce)','Tabuleiro Grande - RN(rd)','Riacho da Cruz - RN(rd)',
'Rodolfo Fernandes - RN(rd)','Severiano Melo - RN(rd)','Umarizal - RN(rd)','Mossoro - RN','Natal - RN(ce)','Pau dos Ferros - RN',
'Americana - SP()','Campinas - SP(ce)','Franca - SP(ce)','Jundiai - SP()','Ribeirao Preto - SP(ce)','Santos - SP(ce)',
'Sao Jose dos Campos - SP(ce)','Santos - SP','Sao Paulo - SP(ce)','Barueri - SP(rd)','Cotia - SP(rd)','Diadema - SP(rd)','Embu das Artes - SP(rd)',
'Ferraz de Vasconcelos - SP(rd)','Guarulhos - SP(rd)','Jacarei - SP(rd)','Maua - SP(rd)','Pindamonhangaba - SP(rd)',
'Poa - SP(rd)','Santo Amaro - SP(rd)','Santo Andre - SP(rd)','Sao Bernardo do Campo- SP(rd)','Sao Vicente - SP(rd)',
'Suzano - SP(rd)','Sao Caetano do Sul - SP(rd)','Sumare - SP(rd)','Taboao da Serra - SP(rd)','Taubate - SP(rd)',
'Valinhos - SP(rd)','Varzea Paulista - SP(rd)','Vinhedo - SP(rd)','Aracaju - SE(ce)','Gurupi - TO(ce)','Palmas - TO(ce)',
'Paraiso do Tocantins - TO','Porto Nacional - TO(ce-dd)',];

const cidadesCa1 = cidadesCa.sort();

t = '';

for(i in cidadesCa){
    t += '<li>'+cidadesCa[i]+'</li>';
}

listaCa.innerHTML = t;

pesquisaCa.onkeyup = function(e){
    t = this.value;
    r = new RegExp(t,'g');

    for(i in cidadesCa){
        if(cidadesCa[i].match(r)){
            listaCa.children[i].removeAttribute("style")
        }else{
            listaCa.children[i].style.display='none'
        }
    }
}
