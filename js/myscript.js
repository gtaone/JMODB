function listPostszhs(data) {
	var output='<ul data-role="listview" data-filter="true">';
	$.each(data.posts,function(key,val) {
	
		var tempDiv = document.createElement("tempDiv");
		tempDiv.innerHTML = val.excerpt;
		$("a",tempDiv).remove();
		var excerpt = tempDiv.innerHTML;	
	
		output += '<li>';
		output += '<a href="#blogpostzhs" onclick="showPostzhs(' + val.id + ')">';
		output += '<h3>' + val.title + '</h3>';
		output += '<p>' + excerpt + '</p>';
		output += '</a>';
		output += '</li>';
	}); // go through each post
	output+='</ul>';
	$('#postlistzhs').html(output);
} // lists all the posts


function showPostzhs(id) {
	$.getJSON('http://zhs.devkp.goldfinch.rbcintl.org/?json=get_post&post_id=' + id + '&callback=?', function(data) {
		var output='';
		output += '<h3>' + data.post.title + '</h3>';
		output += data.post.content;
		$('#mypostzhs').html(output);
	}); //get JSON Data for Stories
} //showPost


function listPostszht(data) {
	var output='<ul data-role="listview" data-filter="true">';
	$.each(data.posts,function(key,val) {
	
		var tempDiv = document.createElement("tempDiv");
		tempDiv.innerHTML = val.excerpt;
		$("a",tempDiv).remove();
		var excerpt = tempDiv.innerHTML;	
	
		output += '<li>';
		output += '<a href="#blogpostzht" onclick="showPostzht(' + val.id + ')">';
		output += '<h3>' + val.title + '</h3>';
		output += '<p>' + excerpt + '</p>';
		output += '</a>';
		output += '</li>';
	}); // go through each post
	output+='</ul>';
	$('#postlistzht').html(output);
} // lists all the posts


function showPostzht(id) {
	$.getJSON('http://zht.devkp.goldfinch.rbcintl.org/?json=get_post&post_id=' + id + '&callback=?', function(data) {
		var output='';
		output += '<h3>' + data.post.title + '</h3>';
		output += data.post.content;
		$('#mypostzht').html(output);
	}); //get JSON Data for Stories
} //showPost
