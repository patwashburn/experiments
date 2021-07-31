var request = new XMLHttpRequest();

	
request.open('GET',"https://api.giphy.com/v1/gifs/random?api_key=AJoQYY1R0EvIHp4i8Pe0GDhOHXcd8Xhq&tag=kitten&rating=g");
	
	request.onload = function() {
		var response = request.response;
		var parseData = JSON.parse(response);
		var origURL = parseData.data.images.original.url;
	
		var kitten = document.createElement('img');
		kitten.setAttribute('src',origURL);
		document.body.appendChild(kitten);
	}

request.send();