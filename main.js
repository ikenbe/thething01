var main = function(){
	var $next = 0;
	var $current = 0;
//initial
	$('span:not(.top)').each(function(){
		$(this).html(Math.floor(Math.random()*Math.random()*4));
	});
	$('span:contains("0"):not(#next)').css({"background-color":"#d0d9ff","color":"#d0d9ff","box-shadow":"0px 0px 0px #000000"});
	$('span:contains("1")').css({"background-color":"#5677fc","color":"white"});
	$('span:contains("2")').css({"background-color":"#f36c60","color":"white"});
//Key Pressing Monitor
	$(document).keydown(function(key){
//Define the next number
		$current = $next;
		if($('.moved').size() > 0){
			$next = Math.floor(Math.random()*3+1);
			var has1 = $('span:contains("1"):not(#next)').size();
			var has2 = $('span:contains("2"):not(#next)').size();
			if( has1 - has2 >=4	){$next = 2}
			else if( has1 - has2 <=-4 ){$next = 1}
			else if($next===3){for(var i=0;i<0.18;i=Math.random()){$next=$next*2}};
			$('#next').text($next);
//		$('#next').prepend('<p>'+$current+'</p>');
		}
//Remove status
		$('.moved').removeClass('moved');
		$('span').removeClass('stuck');

//
//		console.log(key.which);
		switch(key.which){
			case 37:
			moveLeft();
			break;
			case 39:
			moveRight();
			break;
			case 38:
			moveUp();
			break;
			case 40:
			moveDown();
			break;
		};
//hide 0s
		$('span').css({"color":"black","background-color":"white","box-shadow":"5px 5px 2px #738ffe"});
		$('span:contains("0")').css({"color":"#d0d9ff","background-color":"#d0d9ff","box-shadow":"0px 0px 0px #738ffe"});
		$('span:contains("1")').css({"background-color":"#5677fc","color":"white"});
		$('span:contains("2")').css({"background-color":"#f36c60","color":"white"});
		$('span:contains("12"),span:contains("24"),span:contains("48"),span:contains("96"),span:contains("192")').css({"color":"black","background-color":"white"});
//		$('#next').css({'background-color':'white','color':'#424242',"box-shadow":"5px 5px 2px #afbfff"});
/*
		if($('span:contains("0")').size()===0){
			var losingTest = $('div.container').html();
			moveLeft();moveRight();moveUp();moveDown();
			if ( losingTest === $('div.container').html() ){
			$('#next').text("你好像已经输了，自己刷新重来吧")};
			$('div.container').html(losingTest);
		};
*/
	});

//
		function moveLeft(){
		var moveCell = function($moveA,$moveB){
			var $A = $moveA; var $B = $moveB;
			var $AA = parseInt($A.html()); var $BB = parseInt($B.html());
			if ($A.hasClass('moved')){$A.html($BB);$B.addClass('moved')}
				else if(( $AA >= 3 )&&( $AA === $BB)) { $A.text( $AA + $BB );$B.addClass('moved')}
				else if (($AA + $BB)===3){$A.text("3");$B.addClass('moved')}
				else if ($AA===0) {$A.html($BB);$B.addClass('moved')}
				else {$B.addClass('stuck')};
		};
		$('span').removeClass('moved','stuck');

		moveCell($('span.r1.c1'),$('span.r1.c2'));
		moveCell($('span.r1.c2'),$('span.r1.c3'));
		moveCell($('span.r1.c3'),$('span.r1.c4'));
		moveCell($('span.r2.c1'),$('span.r2.c2'));
		moveCell($('span.r2.c2'),$('span.r2.c3'));
		moveCell($('span.r2.c3'),$('span.r2.c4'));
		moveCell($('span.r3.c1'),$('span.r3.c2'));
		moveCell($('span.r3.c2'),$('span.r3.c3'));
		moveCell($('span.r3.c3'),$('span.r3.c4'));
		moveCell($('span.r4.c1'),$('span.r4.c2'));
		moveCell($('span.r4.c2'),$('span.r4.c3'));
		moveCell($('span.r4.c3'),$('span.r4.c4'));

		$('.c4.moved').text("0");
			if($('.moved').size()>0){
				$('.c4:contains("0")').eq(Math.floor(Math.random()*$('.c4:contains("0")').size())).text($current);
			}
		};

		function moveRight(){
		var moveCell = function($moveA,$moveB){
			var $A = $moveA; var $B = $moveB;
			//console.log($A.text()+"|||"+$B.html());
			var $AA = parseInt($A.html()); var $BB = parseInt($B.html());
//			console.log($AA+"//"+$BB);
			if ($A.hasClass('moved')){$A.html($BB);$B.addClass('moved')}
				else if(( $AA >= 3 )&&( $AA === $BB)) { $A.text( $AA + $BB );$B.addClass('moved')}
				else if (($AA + $BB)===3){$A.text("3");$B.addClass('moved')}
				else if ($AA===0) {$A.html($BB);$B.addClass('moved')}
				else {$B.addClass('stuck')};
		};
		$('span').removeClass('moved','stuck');

		moveCell($('span.r1.c4'),$('span.r1.c3'));
		moveCell($('span.r1.c3'),$('span.r1.c2'));
		moveCell($('span.r1.c2'),$('span.r1.c1'));
		moveCell($('span.r2.c4'),$('span.r2.c3'));
		moveCell($('span.r2.c3'),$('span.r2.c2'));
		moveCell($('span.r2.c2'),$('span.r2.c1'));
		moveCell($('span.r3.c4'),$('span.r3.c3'));
		moveCell($('span.r3.c3'),$('span.r3.c2'));
		moveCell($('span.r3.c2'),$('span.r3.c1'));
		moveCell($('span.r4.c4'),$('span.r4.c3'));
		moveCell($('span.r4.c3'),$('span.r4.c2'));
		moveCell($('span.r4.c2'),$('span.r4.c1'));

		$('.c1.moved').text("0");
			if($('.moved').size()>0){
				$('.c1:contains("0")').eq(Math.floor(Math.random()*$('.c1:contains("0")').size())).text($current);
			};
		};

		function moveUp(){
		var moveCell = function($moveA,$moveB){
			var $A = $moveA; var $B = $moveB;
			//console.log($A.text()+"|||"+$B.html());
			var $AA = parseInt($A.html()); var $BB = parseInt($B.html());
//			console.log($AA+"//"+$BB);
			if ($A.hasClass('moved')){$A.html($BB);$B.addClass('moved')}
				else if(( $AA >= 3 )&&( $AA === $BB)) { $A.text( $AA + $BB );$B.addClass('moved')}
				else if (($AA + $BB)===3){$A.text("3");$B.addClass('moved')}
				else if ($AA===0) {$A.html($BB);$B.addClass('moved')}
				else {$B.addClass('stuck')};
		};
		$('span').removeClass('moved','stuck');

		moveCell($('span.r1.c1'),$('span.r2.c1'));
		moveCell($('span.r2.c1'),$('span.r3.c1'));
		moveCell($('span.r3.c1'),$('span.r4.c1'));
		moveCell($('span.r1.c2'),$('span.r2.c2'));
		moveCell($('span.r2.c2'),$('span.r3.c2'));
		moveCell($('span.r3.c2'),$('span.r4.c2'));
		moveCell($('span.r1.c3'),$('span.r2.c3'));
		moveCell($('span.r2.c3'),$('span.r3.c3'));
		moveCell($('span.r3.c3'),$('span.r4.c3'));
		moveCell($('span.r1.c4'),$('span.r2.c4'));
		moveCell($('span.r2.c4'),$('span.r3.c4'));
		moveCell($('span.r3.c4'),$('span.r4.c4'));

		$('.r4.moved').text("0");
			if($('.moved').size()>0){
				$('.r4:contains("0")').eq(Math.floor(Math.random()*$('.r4:contains("0")').size())).text($current);
			}
		};

		function moveDown(){
		var moveCell = function($moveA,$moveB){
			var $A = $moveA; var $B = $moveB;
			//console.log($A.text()+"|||"+$B.html());
			var $AA = parseInt($A.html()); var $BB = parseInt($B.html());
//			console.log($AA+"//"+$BB);
			if ($A.hasClass('moved')){$A.html($BB);$B.addClass('moved')}
				else if(( $AA >= 3 )&&( $AA === $BB)) { $A.text( $AA + $BB );$B.addClass('moved')}
				else if (($AA + $BB)===3){$A.text("3");$B.addClass('moved')}
				else if ($AA===0) {$A.html($BB);$B.addClass('moved')}
				else {$B.addClass('stuck')};
		};
		$('span').removeClass('moved','stuck');

		moveCell($('span.r4.c1'),$('span.r3.c1'));
		moveCell($('span.r3.c1'),$('span.r2.c1'));
		moveCell($('span.r2.c1'),$('span.r1.c1'));
		moveCell($('span.r4.c2'),$('span.r3.c2'));
		moveCell($('span.r3.c2'),$('span.r2.c2'));
		moveCell($('span.r2.c2'),$('span.r1.c2'));
		moveCell($('span.r4.c3'),$('span.r3.c3'));
		moveCell($('span.r3.c3'),$('span.r2.c3'));
		moveCell($('span.r2.c3'),$('span.r1.c3'));
		moveCell($('span.r4.c4'),$('span.r3.c4'));
		moveCell($('span.r3.c4'),$('span.r2.c4'));
		moveCell($('span.r2.c4'),$('span.r1.c4'));

		$('.r1.moved').text("0");
			if($('.moved').size()>0){
				$('.r1:contains("0")').eq(Math.floor(Math.random()*$('.r1:contains("0")').size())).text($current);
			};
		};
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
};
$(document).ready(main);
$(document).ready(function(){
		$('.top-left').click(function(){
		location.reload();
	})
})