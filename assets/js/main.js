 $(document).ready(function() {
    console.log( "ready!" );

$(".circle").mouseenter(function(){
    $('span').toggle().hide();
        $('.altSpan').toggle().show();
//$('.misc').append(`<li>"AJAX"</li> <li>Bootstrap</li> <li>Git&GitHub</li> <li>MongoDB</li> <li>Node</li> <li>React</li>`)
});

$(".circle").mouseleave(function(){
    $('span').toggle().show();
        $('.altSpan').toggle().hide();
});

// $('#clickContact').on('click', function() {
//   if( $('.modal-background').css('display', 'none')){
//       $('.modal-background').css('display', 'block').fadeIn();
//     	$('.modal-content').css('display', 'block').fadeIn();
// } else if( $('.modal-background').css('display', 'block')) {
//   $('.modal-background').css('display', 'none').fadeOut();
//   $('.modal-content').css('display', 'none').fadeOut();
// }
// });




 }); //docReady Close
