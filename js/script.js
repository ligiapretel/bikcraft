//Verificando se existe o objeto SimpleSlide na página, para não dar erro nas páginas que não usam esse objeto.
if(window.SimpleSlide){

    //Criando o objeto SimpleSlide e suas configurações 
    new SimpleSlide({
        slide: "depoimento", // nome do atributo data-slide="depoimento"
        time: 5000 // tempo de transição dos slides, equivale a 5 segundos
    });

    new SimpleSlide({
        slide: "portfolio",
        time: 5000,
        nav: true //adiciona navegação aos slides 
    });

}