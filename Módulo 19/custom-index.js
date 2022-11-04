$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    const duracao = 1000;

    $('#form-submit').on('click', function(e){
        
        e.preventDefault()

        if ($('#email').val() != '' ) {
            
            $('#email').animate({
                opacity: "toggle"
            }, duracao, function(){
                console.log($(this).val())
            })

        }

    })

})