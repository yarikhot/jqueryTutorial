//$('#btn_start').click(function(){
//$("#message")
//.html("Message")
//.css("background-color","green")
//.parent()
//.css("background-color","fff4dd")
//.width(300)
//.hight(200)
//});

//$('#btn_reset').click(function(){
//location.reload();
//});


//$("article > *").css("color","red")


// $(".content a.button");
// $(".content h3.title");

// var$content=$(."content");
// $content.find("a.button");
// $content.find("h3.title");

// $(".content div input:disabled"


// $(".box").css({'color':'green',
// 	'font-size':'12px'
// 	'margin-left':'10px'})


// $("#content").css('height',function(i,value){
// 	return parseFloat(value)*1.2;
// });


//$("#content").addClass('name')


// $("#content").removeClass('box')


// $("#content").toggle()


// attr(attrName)
// attr(attrName,attr value)
// removeattr(attrName)


// var altText = $('img').attr('alt')
// $('img').attr('src','img/defauld.jpg')

// $('a.my')attr({
// 	'href':'https://www.youtube.com/watch?v=eFrtW9O7Rtk&t=0s'
// 	'ttitle':'yarikHot'

// })

// hide()
// show()


// $(".anim").click(function(){
// 	$(this).hide("slow");
// });


// $(".anim").hide('slow',function(){
// 	alert("Hello");
// });


// slideDown()
// slideUp()
// slideToggle()


// $('#stick').click(function(){
// 	$("#hide").slideDown('slow')
// })


// function changeClass(){
// 	$(this).prev().toggleClass('active')
// }
// 	$(function(){
// 		$('article h2').click(function(){
// 			$(this).next().slideToggle();
// 			$(this).toggleClass('active');
// 		})
// 	})


// $(".anim").click(function(){
// 	$(this).fadeTo("slow",0.4);

// })


// $(".anim").animate({
// 	'opacity':'-=0.3',
// 	'height':'+=50px',
// 	'width':'-=25px'
// })


// jQuery.fx.off=true;


// $(".anim").click(function(){
// 	$(this).fadeOut("slow");
// })


// var $myDiv = $('<div id="my" class="pages">Hello</div>');


// var $myDiv = $('<div>Hello</div>',{'id':'my', 'class':'pages'}).appendTo("body");


// var $myDiv = $('<div>Hello</div>').attr({'id':'my', 'class':'pages'}).appendTo("body");


// var myDiv=document.createElement('div');
// myDiv.id="my";
// myDiv.className="pages";


// $("p").after("<hr/>")
// $("<hr/>").insertAfter("p")


// var p = $(".first");
// var offset= p.offset();
// p.html("left:" + offset.left + ".top:" + offset.top);


// $(".third").offset({top:10,left:50});


// var p = $(".first");
// var position= p.position();
// p.html("left:" + position.left + ".top:" + position.top);


// function showHeight(element,height) {
// 	$("div").text("Height of the " + element + " is " height);
// }
// $("#getp").click(function(){
// 	showHeight("paragraph",$("p").height());

// });

// $("#getd").click(function(){
// 	showHeight("document",$(document).height());

// });

// $("#getw").click(function(){
// 	showHeight("window",$(window).height());

// });

// var p = $("p:first");
// $("p:last").text("innerGeight: " + p.innrtHeight());


(function ($) {
    (function () {
        $('.icon').on('click', function () {
            $(this).closest('.menu').toggleClass('menu-open');
        });
    });
});
(jQuery);