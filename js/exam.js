(function($,undefined){
	$(document).ready(function(){
		var q;
		$("#start").click(function(){
			$.getJSON('php/exam.php',function(d){
				q=d;
				d.forEach(function(p,i){
					$('#exam').append('<div class="ques">題目:'+p.ques+'<p class="ques"></p>答案:<input class="ans"/></div>');
				});
			});	
		});
		var total = $('.ans').length;
		$('#submit').click(function(){
			var correct = 0;
			total = $('.ans').length;
			$('.ans').each(function(i){
				if(q[i].ans== $(this).val())++correct;
				if(i==total-1){
					score = 100*correct/total;
					$('#result').text('對 '+correct+' 題, 總分 '+score+' 分');
				}
			});
		});
		
	});
})(jQuery);
