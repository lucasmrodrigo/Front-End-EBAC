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

    $('nav-modal-open').on('click', function(e){

        e.preventDefault();

        let elem = $(this).attr('rel')

        $('.modal-body').html($('#'+elem).html())

        $('.modal-header h5.modal-title').html($(this).text())

        let myModal = new bootstrap.Modal($('#modelId'))

        myModal.show();

    })

})