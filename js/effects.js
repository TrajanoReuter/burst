$(document).ready(function() {
    $('li.menu').on('click', function(){
        $('.menu-drop').toggleClass('active');
        $('.menu-drop .x').toggleClass('active');
    });
    $('#lupa-btn').on('click', function(){
        $('nav.mobile input').toggleClass('active');
    });
    $('#mobile-btn').on('click', function(){
        $('#menu-mobile').toggleClass('active');
    });

    $('.pagos').on('click', function(){
        $('.posbar').removeClass('dois');
        $('.rfbox .table-body .abertos-body').removeClass('active');
        $('.rfbox .table-body .pagos-body').addClass('active');
    });
    $('.abertos').on('click', function(){
        $('.posbar').addClass('dois');
        $('.rfbox .table-body .pagos-body').removeClass('active');
        $('.rfbox .table-body .abertos-body').addClass('active');
    });

    $('.reunioes').on('click', function(){
        $('.posbar2').removeClass('dois');
        $('.prbox .body .historico-body').removeClass('active');
        $('.prbox .body .reunioes-body').addClass('active');
    });
    $('.historico').on('click', function(){
        $('.posbar2').addClass('dois');
        $('.prbox .body .reunioes-body').removeClass('active');
        $('.prbox .body .historico-body').addClass('active');
    });

    $('.rcbox form .action-body .item button').on('click', function(){
        $(this).toggleClass('active');
    });


    /*input 1*/
    var valAfinidade = $('#afinidadeinput').val();
    if(valAfinidade== "frio"){
        $('img.triang').removeClass('quente');
        $('img.triang').removeClass('morno');
        $('img.triang').addClass('frio');
        $('button.afinidade.frio').addClass('active');
        $('button.afinidade.morno').removeClass('active');
        $('button.afinidade.quente').removeClass('active');
    }
    else if(valAfinidade== "morno"){
        $('img.triang').removeClass('quente');
        $('img.triang').removeClass('frio');
        $('img.triang').addClass('morno');
        $('button.afinidade.morno').addClass('active');
        $('button.afinidade.frio').removeClass('active');
        $('button.afinidade.quente').removeClass('active');
    }
    else if(valAfinidade== "quente"){
        $('img.triang').removeClass('frio');
        $('img.triang').removeClass('morno');
        $('img.triang').addClass('quente');
        $('button.afinidade.quente').addClass('active');
        $('button.afinidade.morno').removeClass('active');
        $('button.afinidade.frio').removeClass('active');
    }

    $('button.afinidade.frio').on('click', function(){
        $('img.triang').removeClass('quente');
        $('img.triang').removeClass('morno');
        $('img.triang').addClass('frio');
        $(this).addClass('active');
        $('button.afinidade.morno').removeClass('active');
        $('button.afinidade.quente').removeClass('active');
        $('#afinidadeinput').attr('value', 'frio');
    })

    $('button.afinidade.morno').on('click', function(){
        $('img.triang').removeClass('quente');
        $('img.triang').removeClass('frio');
        $('img.triang').addClass('morno');
        $(this).addClass('active');
        $('button.afinidade.frio').removeClass('active');
        $('button.afinidade.quente').removeClass('active');
        $('#afinidadeinput').attr('value', 'morno');
    })

    $('button.afinidade.quente').on('click', function(){
        $('img.triang').removeClass('frio');
        $('img.triang').removeClass('morno');
        $('img.triang').addClass('quente');
        $(this).addClass('active');
        $('button.afinidade.morno').removeClass('active');
        $('button.afinidade.frio').removeClass('active');
        $('#afinidadeinput').attr('value', 'quente');
    })

    /*input 2*/
    var valEmpreendedorismo = $('#empreendedorismoinput').val();
    if(valEmpreendedorismo == "1"){
        $('img.triang2').removeClass('dois');
        $('img.triang2').removeClass('tres');
        $('img.triang2').removeClass('quatro');
        $('img.triang2').removeClass('cinco');
        $('img.triang2').addClass('um');
        $('button.empreendedorismo.um').addClass('active');
        $('button.empreendedorismo.dois').removeClass('active');
        $('button.empreendedorismo.tres').removeClass('active');
        $('button.empreendedorismo.quatro').removeClass('active');
        $('button.empreendedorismo.cinco').removeClass('active');
    }
    else if(valEmpreendedorismo == "2"){
        $('img.triang2').removeClass('um');
        $('img.triang2').removeClass('tres');
        $('img.triang2').removeClass('quatro');
        $('img.triang2').removeClass('cinco');
        $('img.triang2').addClass('dois');
        $('button.empreendedorismo.um').removeClass('active');
        $('button.empreendedorismo.dois').addClass('active');
        $('button.empreendedorismo.tres').removeClass('active');
        $('button.empreendedorismo.quatro').removeClass('active');
        $('button.empreendedorismo.cinco').removeClass('active');
    }
    else if(valEmpreendedorismo == "3"){
        $('img.triang2').removeClass('um');
        $('img.triang2').removeClass('dois');
        $('img.triang2').removeClass('quatro');
        $('img.triang2').removeClass('cinco');
        $('img.triang2').addClass('tres');
        $('button.empreendedorismo.um').removeClass('active');
        $('button.empreendedorismo.tres').addClass('active');
        $('button.empreendedorismo.dois').removeClass('active');
        $('button.empreendedorismo.quatro').removeClass('active');
        $('button.empreendedorismo.cinco').removeClass('active');
    }
    else if(valEmpreendedorismo == "4"){
        $('img.triang2').removeClass('um');
        $('img.triang2').removeClass('tres');
        $('img.triang2').removeClass('tres');
        $('img.triang2').removeClass('cinco');
        $('img.triang2').addClass('quatro');
        $('button.empreendedorismo.um').removeClass('active');
        $('button.empreendedorismo.quatro').addClass('active');
        $('button.empreendedorismo.tres').removeClass('active');
        $('button.empreendedorismo.dois').removeClass('active');
        $('button.empreendedorismo.cinco').removeClass('active');
    }
    else if(valEmpreendedorismo == "5"){
        $('img.triang2').removeClass('um');
        $('img.triang2').removeClass('tres');
        $('img.triang2').removeClass('quatro');
        $('img.triang2').removeClass('dois');
        $('img.triang2').addClass('cinco');
        $('button.empreendedorismo.um').removeClass('active');
        $('button.empreendedorismo.cinco').addClass('active');
        $('button.empreendedorismo.tres').removeClass('active');
        $('button.empreendedorismo.quatro').removeClass('active');
        $('button.empreendedorismo.dois').removeClass('active');
    }

    $('button.empreendedorismo.um').on('click', function(){
        $('img.triang2').removeClass('dois');
        $('img.triang2').removeClass('tres');
        $('img.triang2').removeClass('quatro');
        $('img.triang2').removeClass('cinco');
        $('img.triang2').addClass('um');
        $('button.empreendedorismo.um').addClass('active');
        $('button.empreendedorismo.dois').removeClass('active');
        $('button.empreendedorismo.tres').removeClass('active');
        $('button.empreendedorismo.quatro').removeClass('active');
        $('button.empreendedorismo.cinco').removeClass('active');
        $('#empreendedorismoinput').attr('value', '1');
    })

    $('button.empreendedorismo.dois').on('click', function(){
        $('img.triang2').removeClass('um');
        $('img.triang2').removeClass('tres');
        $('img.triang2').removeClass('quatro');
        $('img.triang2').removeClass('cinco');
        $('img.triang2').addClass('dois');
        $('button.empreendedorismo.um').removeClass('active');
        $('button.empreendedorismo.dois').addClass('active');
        $('button.empreendedorismo.tres').removeClass('active');
        $('button.empreendedorismo.quatro').removeClass('active');
        $('button.empreendedorismo.cinco').removeClass('active');
        $('#empreendedorismoinput').attr('value', '2');
    })

    $('button.empreendedorismo.tres').on('click', function(){
        $('img.triang2').removeClass('um');
        $('img.triang2').removeClass('dois');
        $('img.triang2').removeClass('quatro');
        $('img.triang2').removeClass('cinco');
        $('img.triang2').addClass('tres');
        $('button.empreendedorismo.um').removeClass('active');
        $('button.empreendedorismo.tres').addClass('active');
        $('button.empreendedorismo.dois').removeClass('active');
        $('button.empreendedorismo.quatro').removeClass('active');
        $('button.empreendedorismo.cinco').removeClass('active');
        $('#empreendedorismoinput').attr('value', '3');
    })

    $('button.empreendedorismo.quatro').on('click', function(){
        $('img.triang2').removeClass('um');
        $('img.triang2').removeClass('tres');
        $('img.triang2').removeClass('tres');
        $('img.triang2').removeClass('cinco');
        $('img.triang2').addClass('quatro');
        $('button.empreendedorismo.um').removeClass('active');
        $('button.empreendedorismo.quatro').addClass('active');
        $('button.empreendedorismo.tres').removeClass('active');
        $('button.empreendedorismo.dois').removeClass('active');
        $('button.empreendedorismo.cinco').removeClass('active');
        $('#empreendedorismoinput').attr('value', '4');
    })

    $('button.empreendedorismo.cinco').on('click', function(){
        $('img.triang2').removeClass('um');
        $('img.triang2').removeClass('tres');
        $('img.triang2').removeClass('quatro');
        $('img.triang2').removeClass('dois');
        $('img.triang2').addClass('cinco');
        $('button.empreendedorismo.um').removeClass('active');
        $('button.empreendedorismo.cinco').addClass('active');
        $('button.empreendedorismo.tres').removeClass('active');
        $('button.empreendedorismo.quatro').removeClass('active');
        $('button.empreendedorismo.dois').removeClass('active');
        $('#empreendedorismoinput').attr('value', '5');
    })

    $('button.acpt').on('click', function(){
        var btnElemento = $(this);
        btnElemento.addClass('active');
        var itemElemento = btnElemento.closest('.part3');
        itemElemento.removeClass('dnd');
        itemElemento.addClass('acpt');
        itemElemento.find('button.dnd').removeClass('active');
    });

    $('button.dnd').on('click', function(){
        var btnElemento = $(this);
        btnElemento.addClass('active');
        var itemElemento =btnElemento.closest('.part3');
        itemElemento.removeClass('acpt');
        itemElemento.addClass('dnd');
        itemElemento.find('button.acpt').removeClass('active');
    });


    var $doc = $('html, body');
            $('.scrollslow').click(function() {
                $doc.animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 750);
            return false;
    });
});