//jQuery(function($){

$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    //$('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>');

    $('.featured-item h4').mouseenter(function(){
        
        $(this).append('<span class="badge bg-secondary">Novo</span>');
        $(this).css({
            'color': 'black',
            'background': '#F08080'
        })
    })
       

})

