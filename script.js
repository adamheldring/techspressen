// This is the js file
var url = 'https://newsapi.org/v2/everything?' +
          'q=space&' +
          'apiKey=3934b18b3b584fcdbdfbae1b25021f3a';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        return response.json();
    }).then(function(result){
        console.log(result.articles[0].title);
    })

    function expand() {
      this.classList.toggle('expanded')
      console.log(this.classList)
    }

for (i = 0; i < 15; i++) {
  document.getElementsByClassName('gridArticle')[i].onclick = expand
}

const box = document.createElement('div')
