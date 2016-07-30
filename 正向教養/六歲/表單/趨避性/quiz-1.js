$(document).ready(function() {    
	$("#results").click(function() {                

		if (!$("input[name='q1']:checked").val() ||            
			!$("input[name='q2']:checked").val() ||            
			!$("input[name='q3']:checked").val() ||            
			!$("input[name='q4']:checked").val() ||            
			!$("input[name='q5']:checked").val() ||            
			!$("input[name='q6']:checked").val() ||            
			!$("input[name='q7']:checked").val() ||            
			!$("input[name='q8']:checked").val()           
		) {            
			alert("你還沒完成測驗喔");        
		} else {			
			var values = parseInt(0);
			for(i = 1; i <= 8; i++) {
				values = values + parseInt($("input[name='q" + i + "']:checked").val());
			}
			
			/*
			var cat1name = "1";            
			var cat2name = "2";            
			var cat3name = "3";            
			var cat4name = "4";            
			var cat5name = "5";            
			var cat6name = "6";            
			var cat7name = "7";            
			var cat8name = "8";            
			var cat9name = "9";            
			var cat10name = "10";            
			var cat11name = "None";            
            

			var cat1 = ($("input[name='q1']:checked").val() != "1"); 
			
			var cat2 = ($("input[name='q2']:checked").val() != "2");  

			var cat3 = ($("input[name='q3']:checked").val() != "3");  

			var cat4 = ($("input[name='q4']:checked").val() != "4");  

			var cat5 = ($("input[name='q5']:checked").val() != "1"); 

			var cat6 = ($("input[name='q6']:checked").val() != "2");  

			var cat7 = ($("input[name='q7']:checked").val() != "3"); 

			var cat8 = ($("input[name='q8']:checked").val() != "4");  

			var cat9 = ($("input[name='q9']:checked").val() != "1"); 

			var cat10 = ($("input[name='q10']:checked").val() != "2");  

			var cat11 = (!cat1 && !cat2 && !cat3 && !cat4 && !cat5 && !cat6 && !cat7 && !cat8 && !cat9 && !cat10);
			
			var categories = [];                        

			if (cat1) { categories.push(cat1name) };            
			if (cat2) { categories.push(cat2name) };            
			if (cat3) { categories.push(cat3name) };            
			if (cat4) { categories.push(cat4name) };            
			if (cat5) { categories.push(cat5name) };            
			if (cat6) { categories.push(cat6name) };            
			if (cat7) { categories.push(cat7name) };            
			if (cat8) { categories.push(cat8name) };            
			if (cat9) { categories.push(cat9name) };            
			if (cat10) { categories.push(cat10name) };            
			if (cat11) { categories.push(cat11name) };                        

			var catStr = 'You answered the following questions incorrectly: ' + categories.join(', ') + '';
			
			console.log(catStr);
			$("#answersincorrect").html("<b>" + catStr + "</b>");

			if (cat1) { $("#category1").show("fuck"); };            
			if (cat2) { $("#category2").show("fuck"); };            
			if (cat3) { $("#category3").show("fuck"); };            
			if (cat4) { $("#category4").show("fuck"); };            
			if (cat5) { $("#category5").show("fuck"); };            
			if (cat6) { $("#category6").show("fuck"); };            
			if (cat7) { $("#category7").show("fuck"); };            
			if (cat8) { $("#category8").show("fuck"); };            
			if (cat9) { $("#category9").show("fuck"); };            
			if (cat10) { $("#category10").show("fuck"); };*/
			
			var resultmsg = "您的測驗結果為" + values + "點";
			console.log(resultmsg);
			
			if(values >= 8 && values <= 29) {
				alert(resultmsg);
				window.location.href = "../結果/趨避性偏避.html";
			} else if (values > 29 && values <= 42) {
				alert(resultmsg);
				window.location.href = "../結果/趨避性中庸.html";
			} else if (values > 42 && values <= 56) {
				alert(resultmsg);
				window.location.href = "../結果/%E8%B6%A8%E9%81%BF%E6%80%A7%E5%81%8F%E8%B6%A8.html";
			}
		}
    });
});