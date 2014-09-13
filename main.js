var main = function(){

//initial
	$('span').each(function(){
		$(this).html(Math.floor(Math.random()*4));
	});

//The moving method from A to B
		var moveIt = function(cellA,cellB){
//debug
			console.log($(cellA).html()+","+$(cellB).html());
			console.log(typeof $('.passed').filter(cellA).val());
			console.log($('.passed').find(cellA));


//pan4duan4
			if($('span.passed').filter(cellA).val()!== undefined){console.log("STOPPED!"+$('span.passed').filter(cellA).val())}
			else if(($(cellA).html()=== $(cellB).html())&&(parseInt($(cellA).html())>=3)){
				console.log('a');
				$(cellB).addClass('passed');
				$(cellA).html(parseInt($(cellA).html())+parseInt($(cellB).html()));}
			else if(parseInt($(cellA).html())===0){
				console.log('b');
				$(cellA).html(parseInt($(cellB).html()));
				$(cellB).addClass('passed');}
			else if((parseInt($(cellA).html())+parseInt($(cellB).html()))===3){
				console.log('c');
				$(cellA).text("3");
				$(cellB).addClass('passed');}			
		}
//Key Pressing Monitor
	$(document).keydown(function(key){
//Remove status
		$('span').removeClass('passed');
//Define the next number
		var $next = Math.floor(Math.random()*3+1);
		if($next===3){for(var i=0;i<0.3;i=Math.random()){$next=$next*2}};
		$('#next').text($next);
//
		console.log(key.which);
		switch(key.which){
//move left
			case 37:
			moveIt('.r1.c1' , '.r1.c2');
			moveIt('.r1.c2' , '.r1.c3');
			moveIt('.r1.c3' , '.r1.c4');
			if($('.r1.c4').html()==="0"){$('.r1.c4').text($next)};
			break;
//move right
			case 39:
			moveIt('.r1.c4' , '.r1.c3');
			moveIt('.r1.c3' , '.r1.c2');
			moveIt('.r1.c2' , '.r1.c1');
			if($('.r1.c1').html()==="0"){$('.r1.c1').text($next)}
				else if($('.r1.c2.passed')){$('.r1.c1').text("0")};
			break;
		}
	});
};
$(document).ready(main);
