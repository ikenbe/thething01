var main = function(){
	$('span').each(function(){
		$(this).html(Math.floor(Math.random()*4));
	});

		var $r1c1 = $('.r1.c1'), $r1c2 = $('.r1.c2'), $r1c3 = $('.r1.c3'), $r1c4 = $('.r1.c4');
		var $r2c1 = $('.r2.c1'), $r2c2 = $('.r2.c2'), $r2c3 = $('.r2.c3'), $r2c4 = $('.r2.c4');
		var $r3c1 = $('.r3.c1'), $r3c2 = $('.r3.c2'), $r3c3 = $('.r3.c3'), $r3c4 = $('.r3.c4');
		var $r4c1 = $('.r4.c1'), $r4c2 = $('.r4.c2'), $r1c3 = $('.r4.c3'), $r1c4 = $('.r4.c4');
		var moveIt = function(cellA,cellB){

			console.log($(cellA).html()+","+$(cellB).html());
			console.log($('cellA.passed').text());
			if($('cellA.passed')=== true){console.log("STOPPED!")}
			else if(($(cellA).html()=== $(cellB).html())&&(parseInt($(cellA).html())>=3)){
				console.log('a');
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

	$(document).keydown(function(key){
		$('.passed').removeClass('passed');
		var $next = Math.floor(Math.random()*3+1);
		if($next===3){for(var i=0;i<0.3;i=Math.random()){$next=$next*2}};
		$('#next').text($next);
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
