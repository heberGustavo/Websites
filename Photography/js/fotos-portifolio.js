$(function () {
    var selectedClass = "";
    var removidos = [];
    var todos = [];
    //Ai iniciar a tela armazena todas as fotos no array
    todos = $(".tile");
    $(".fil-cat").click(function () {

        //A cada vez que clica no botão, inserir todos itens na lista
        $("#portfolio").append(todos);
        
        selectedClass = $(this).attr("data-rel");
        $("#portfolio").fadeTo(100, 0.1);
        $("#portfolio div").not("." + selectedClass).fadeOut().remove();
        var exclusaoTemporaria = $("#portfolio div").not("." + selectedClass);
        removidos.push(exclusaoTemporaria);
        console.log(removidos);
        
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('scale-anm');
            $("#portfolio").fadeTo(300, 1);
        }, 300);

    });
});