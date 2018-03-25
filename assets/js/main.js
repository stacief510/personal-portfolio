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






 }); //docReady Close