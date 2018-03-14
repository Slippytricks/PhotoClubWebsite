function subsDisplay(num){
	if(num%3 != 0)
		document.write("ERROR: Pictures must be displayed in rows of 3");
	else{
		var rows = num/3;
		var picNum = num;
		for(i = 0; i < rows; i++){
			document.write("<div class='row'>");
			for(j = 0; j < 3; j++){
				document.write("<div class='4u 12u(mobile)'>");
				document.write("<section>");
				document.write("<img src='images/subs/"+ picNum +".jpg' title='Photo Submission "+ picNum +"' alt='Photo Submission "+ picNum +"' height='250' width='400' class='image left br10' />");
				document.write("</header>");
				document.write("</section>");
				document.write("</div>");
				picNum--;
			}
			document.write("</div>");
		}
	}
}

function winsDisplay(wins){
	var rows = Math.ceil(wins/3);
	var picNum = wins;
	for(i = 0; i < rows; i++){
		document.write("<div class='row'>");
		for(j = 0; j < 3; j++){
			if(picNum != 0){
				document.write("<div class='4u 12u(mobile)'>");
				document.write("<section>");
				document.write("<img src='images/wins/"+ picNum +".jpg' title='Photo Submission "+ picNum +"' alt='Photo Submission "+ picNum +"' height='250' width='400' class='image left br10' />");
				document.write("</header>");
				document.write("</section>");
				document.write("</div>");
				picNum--;
			}
		}
		document.write("</div>");
		}
}