(function($,undefined){
	$(document).ready(function(){
		$("#start").click(function(){
			$.getJSON('php/exam.php',function(d){
				d.forEach(function(p,i){
					$('#exam').append('<div class="ques">題目:'+p.ques+'<p class="ques"></p>答案:<input class="ans"/></div>');
				});
			});	
		});
	});
})(jQuery);
