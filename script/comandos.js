//HTML Home
   
function irparalogin(){
    alert('Sucesso');
    location.href = "login.html"
}

function irparacheckout(){
    location.href = "checkout.html"
}

// Função voltar pra home

function irparahome(){
    location.href = "home.html"
}


// HTML Login

function logar(){
    var login = document.getElementById('Login').value;
    var senha = document.getElementById('Senha').value;

    if(login == "Isabela" && senha == "Breno"){
        alert('Sucesso');
        location.href = "produtos.html";
    }
    else{
        alert('Usuario ou senha incorrretos');
    }
}

//HTML Checkout
   
function irparaprodutos(){
    alert('Pedido Recebido');
    location.href = "produtos.html"
}

// Comanda

$(document).ready(function () {
    let total = 0;

    const valorDeftones = 150.00; //deftones
    const valorTheSmiths = 180.00; //thesmiths
    const valorOasis = 200.00; //oasis
    const valorGunsRoses = 300.00; //guns
    const valorTaylorSwift = 200.00; //taylor
    const valorSabrinaCarpenter = 150.00; //sabrina
    const valorCyndiLauper = 200.00; //cyndi
    const valorLouis = 280.00; //louis
    const valorRitaLee = 300.00; //ritalee
    const valorTimMaia = 300.00; //timmaia
    const valorDjavan = 200.00; //djavan
    const valorTribalistas = 180.00; //tribalistas

    let qtdDeftones = 0;
    let qtdTheSmiths = 0;
    let qtdOasis = 0;
    let qtdGunsRoses = 0;
    let qtdTaylorSwift = 0;
    let qtdSabrinaCarpenter = 0;
    let qtdCyndiLauper = 0;
    let qtdLouis = 0;
    let qtdRitaLee = 0;
    let qtdTimMaia = 0;
    let qtdDjavan = 0;
    let qtdTribalistas = 0;

    function atualizarTotal() {
        $('#total').text(total.toFixed(2));
    }

    function atualizarInput(input, quantidade) {
        $(input).val(quantidade);
    }


    function atualizarComanda() {
        $('#itens-pedido').empty(); 
        if (qtdDeftones > 0) {
            $('#itens-pedido').append("<li>Deftones: " + qtdDeftones + " x R$ " + valorDeftones.toFixed(2) + " = R$ " + (qtdDeftones * valorDeftones).toFixed(2) + "</li>");
        }
        if (qtdTheSmiths > 0) {
            $('#itens-pedido').append("<li>The Smiths: " + qtdTheSmiths + " x R$ " + valorTheSmiths.toFixed(2) + " = R$ " + (qtdTheSmiths * valorTheSmiths).toFixed(2) + "</li>");
        }
        if (qtdOasis > 0) {
            $('#itens-pedido').append("<li>Oasis: " + qtdOasis + " x R$ " + valorOasis.toFixed(2) + " = R$ " + (qtdOasis * valorOasis).toFixed(2) + "</li>");
        }
        if (qtdGunsRoses > 0){
            $('#itens-pedido').append("<li>Guns N' Roses: " + qtdGunsRoses + " x R$ " + valorGunsRoses.toFixed(2) + " = R$ " + (qtdGunsRoses * valorGunsRoses).toFixed(2) + "</li>")
        }
        if (qtdTaylorSwift > 0){
            $('#itens-pedido').append("<li>Taylor Swift: " + qtdTaylorSwift + " x R$ " + valorTaylorSwift.toFixed(2) + " = R$ " + (qtdTaylorSwift * valorTaylorSwift).toFixed(2) + "</li>")
        }
        if (qtdSabrinaCarpenter > 0){
            $('#itens-pedido').append("<li>Sabrina Carpenter: " + qtdSabrinaCarpenter + " x R$ " + valorSabrinaCarpenter.toFixed(2) + " = R$ " + (qtdSabrinaCarpenter * valorSabrinaCarpenter).toFixed(2) + "</li>")
        }
        if (qtdCyndiLauper > 0){
            $('#itens-pedido').append("<li>Cyndi Lauper: " + qtdCyndiLauper + " x R$ " + valorCyndiLauper.toFixed(2) + " = R$ " + (qtdCyndiLauper * valorCyndiLauper).toFixed(2) + "</li>")
        }
        if (qtdLouis > 0){
            $('#itens-pedido').append("<li>Louis Tomlinson: " + qtdLouis + " x R$ " + valorLouis.toFixed(2) + " = R$ " + (qtdLouis * valorLouis).toFixed(2) + "</li>")
        }
        if (qtdRitaLee > 0){
            $('#itens-pedido').append("<li>Rita Lee: " + qtdRitaLee + " x R$ " + valorRitaLee.toFixed(2) + " = R$ " + (qtdRitaLee * valorRitaLee).toFixed(2) + "</li>")
        }
        if (qtdTimMaia > 0){
            $('#itens-pedido').append("<li>Tim Maia: " + qtdTimMaia + " x R$ " + valorTimMaia.toFixed(2) + " = R$ " + (qtdTimMaia * valorTimMaia).toFixed(2) + "</li>")
        }
        if (qtdDjavan > 0){
            $('#itens-pedido').append("<li>Djavan: " + qtdDjavan + " x R$ " + valorDjavan.toFixed(2) + " = R$ " + (qtdDjavan * valorDjavan).toFixed(2) + "</li>")
        }
        if (qtdTribalistas > 0){
            $('#itens-pedido').append("<li>Tribalistas: " + qtdTribalistas + " x R$ " + valorTribalistas.toFixed(2) + " = R$ " + (qtdTribalistas * valorTribalistas).toFixed(2) + "</li>")
        }
        atualizarTotal();
    }

    
    $('#adicionarDeftones').click(function () {
        qtdDeftones++;
        total += valorDeftones;
        atualizarInput($(this).siblings('input'), qtdDeftones);
        atualizarComanda();
    });

    
    $('#adicionarTheSmiths').click(function () {
        qtdTheSmiths++;
        total += valorTheSmiths;
        atualizarInput($(this).siblings('input'), qtdTheSmiths);
        atualizarComanda();
    });

    
    $('#adicionarOasis').click(function () {
        qtdOasis++;
        total += valorOasis;
        atualizarInput($(this).siblings('input'), qtdOasis);
        atualizarComanda();
    });

    
    $('#adicionarGunsRoses').click(function () {
        qtdGunsRoses++;
        total += valorGunsRoses;
        atualizarInput($(this).siblings('input'), qtdGunsRoses);
        atualizarComanda();
    });

    
    $('#adiconarTaylorSwift').click(function () {
        qtdTaylorSwift++;
        total += valorTaylorSwift;
        atualizarInput($(this).siblings('input'), qtdTaylorSwift);
        atualizarComanda();
    });

    
    $('#adicionarSabrinaCarpenter').click(function () {
        qtdSabrinaCarpenter++;
        total += valorSabrinaCarpenter;
        atualizarInput($(this).siblings('input'), qtdSabrinaCarpenter);
        atualizarComanda();
    });

    $('#adicionarCyndiLauper').click(function () {
        qtdCyndiLauper++;
        total += valorCyndiLauper;
        atualizarInput($(this).siblings('input'), qtdCyndiLauper);
        atualizarComanda();
    });

    $('#adicionarLouis').click(function () {
        qtdLouis++;
        total += valorLouis;
        atualizarInput($(this).siblings('input'), qtdLouis);
        atualizarComanda();
    });

    $('#adicionarRitaLee').click(function () {
        qtdRitaLee++;
        total += valorRitaLee;
        atualizarInput($(this).siblings('input'), qtdRitaLee);
        atualizarComanda();
    });

    $('#adicionarTimMaia').click(function () {
        qtdTimMaia++;
        total += valorTimMaia;
        atualizarInput($(this).siblings('input'), qtdTimMaia);
        atualizarComanda();
    });

    $('#adicionarDjavan').click(function () {
        qtdDjavan++;
        total += valorDjavan;
        atualizarInput($(this).siblings('input'), qtdDjavan);
        atualizarComanda();
    });

    $('#adicionarTribalistas').click(function () {
        qtdTribalistas++;
        total += valorTribalistas;
        atualizarInput($(this).siblings('input'), qtdTribalistas);
        atualizarComanda();
    });

    
    $('#removerDeftones').click(function () {
        if (qtdDeftones > 0) {
            qtdDeftones--;
            total -= valorDeftones;
            atualizarInput($(this).siblings('input'), qtdDeftones);
            atualizarComanda();
        }
    });

    
    $('#removerTheSmiths').click(function () {
        if (qtdTheSmiths > 0) {
            qtdTheSmiths--;
            total -= valorTheSmiths;
            atualizarInput($(this).siblings('input'), qtdTheSmiths);
            atualizarComanda();
        }
    });

    
    $('#removerOasis').click(function () {
        if (qtdOasis > 0) {
            qtdOasis--;
            total -= valorOasis;
            atualizarInput($(this).siblings('input'), qtdOasis);
            atualizarComanda();
        }
    });

    $('#removerGunsRoses').click(function () {
        if (qtdGunsRoses > 0) {
            qtdGunsRoses--;
            total -= valorGunsRoses;
            atualizarInput($(this).siblings('input'), qtdGunsRoses);
            atualizarComanda();
        }
    });

    $('#removerTaylorSwift').click(function () {
        if (qtdTaylorSwift > 0) {
            qtdTaylorSwift--;
            total -= valorTaylorSwift;
            atualizarInput($(this).siblings('input'), qtdTaylorSwift);
            atualizarComanda();
        }
    });

    $('#removerSabrinaCarpenter').click(function () {
        if (qtdSabrinaCarpenter > 0) {
            qtdSabrinaCarpenter--;
            total -= valorSabrinaCarpenter;
            atualizarInput($(this).siblings('input'), qtdSabrinaCarpenter);
            atualizarComanda();
        }
    });

    $('#removerCyndiLauper').click(function () {
        if (qtdCyndiLauper > 0) {
            qtdCyndiLauper--;
            total -= valorCyndiLauper;
            atualizarInput($(this).siblings('input'), qtdCyndiLauper);
            atualizarComanda();
        }
    });

    
    $('#removerLouis').click(function () {
        if (qtdLouis > 0) {
            qtdLouis--;
            total -= valorLouis;
            atualizarInput($(this).siblings('input'), qtdLouis);
            atualizarComanda();
        }
    });

    $('#removerRitaLee').click(function () {
        if (qtdRitaLee > 0) {
            qtdRitaLee--;
            total -= valorRitaLee;
            atualizarInput($(this).siblings('input'), qtdRitaLee);
            atualizarComanda();
        }
    });

    $('#removerTimMaia').click(function () {
        if (qtdTimMaia > 0) {
            qtdTimMaia--;
            total -= valorTimMaia;
            atualizarInput($(this).siblings('input'), qtdTimMaia);
            atualizarComanda();
        }
    });

    $('#removerDjavan').click(function () {
        if (qtdDjavan > 0) {
            qtdDjavan--;
            total -= valorDjavan;
            atualizarInput($(this).siblings('input'), qtdDjavan);
            atualizarComanda();
        }
    });

    $('#removerTribalistas').click(function () {
        if (qtdTribalistas > 0) {
            qtdTribalistas--;
            total -= valorTribalistas;
            atualizarInput($(this).siblings('input'), qtdTribalistas);
            atualizarComanda();
        }
    });

   
    $('#btnCancelar').click(function () {
        $('#itens-pedido').empty();
        total = 0;
        qtdDeftones = 0;
        qtdTheSmiths = 0;
        qtdOasis = 0;
        qtdGunsRoses = 0;
        qtdTaylorSwift = 0;
        qtdSabrinaCarpenter = 0;
        qtdCyndiLauper = 0;
        qtdLouis = 0;
        qtdRitaLee = 0;
        qtdTimMaia = 0;
        qtdDjavan = 0;
        qtdTribalistas = 0;
         $('input').each(function() {
        $(this).val('0');
    });
        atualizarTotal();
    });
});
