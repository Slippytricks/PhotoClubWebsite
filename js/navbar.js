function navbar(pg){
	document.write("<h1><a href='index.html' id='logo'>Photo Circulator</a></h1>");
	document.write("<nav id='nav'>");
	document.write("<ul>");
	if(pg == 1)
		document.write("<li class='current_page_item'>");
	else
		document.write("<li>");
	document.write("<a href='index.html'>Home</a></li>");
	if(pg == 2)
		document.write("<li class='current_page_item'>");
	else
		document.write("<li>");
	document.write("<a href='rules.html'>Rules</a></li>");
	if(pg == 3)
		document.write("<li class='current_page_item'>");
	else
		document.write("<li>");
	document.write("<a href='psubform.html'>Submit a Photo</a></li>");
	if(pg == 4)
		document.write("<li class='current_page_item'>");
	else
		document.write("<li>");
	document.write("<a href='cats.html'>Categories</a></li>");
	if(pg == 5)
		document.write("<li class='current_page_item'>");
	else
		document.write("<li>");
	document.write("<a href='vote.html'>Vote</a></li>");
	if(pg == 6)
		document.write("<li class='current_page_item'>");
	else
		document.write("<li>");
	document.write("<a href='psubsgal.html'>Galleries</a>");
	document.write("<ul>");
	document.write("<li><a href='psubsgal.html'>Photo Submissions</a></li>");
	document.write("<li><a href='wingal.html'>Winning Submissions</a></li>");
	document.write("</ul>");
	if(pg == 7)
		document.write("<li class='current_page_item'>");
	else
		document.write("<li>");
	document.write("<a href='chat.html'>Chat</a></li>");
	document.write("</nav>");
}
