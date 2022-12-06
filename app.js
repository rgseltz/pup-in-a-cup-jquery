console.log("Let's go to party with jQuery!"
);
$('article img').addClass('image-center');

$('article p').last('p').remove();
$('#title').css('font-size', `${Math.floor(Math.random() * 101)}px`);
$('<li>That is all I know about lists.</li>').appendTo('ol');
$('aside').empty().append('Sorry for wasting your time!');

//change background color using inputs
$('.row.mb-5').on('keyup', function() {
    let red = $('.form-control').eq(0).val();
    let blue = $('.form-control').eq(1).val();
    let green = $('.form-control').eq(2).val();
    $('body').css('background-color', `rgb(${red},${green},${blue})`);
})