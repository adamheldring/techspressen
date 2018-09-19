// This is the js file
var url = 'https://newsapi.org/v2/everything?' +
          'q=space&' +
          'apiKey=3934b18b3b584fcdbdfbae1b25021f3a';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

    function expand() {
      this.classList.toggle('expanded')
      console.log(this.classList)
    }

document.getElementsByClassName('gridArticle')[0].onclick = expand
document.getElementsByClassName('gridArticle')[1].onclick = expand
document.getElementsByClassName('gridArticle')[2].onclick = expand
document.getElementsByClassName('gridArticle')[3].onclick = expand
document.getElementsByClassName('gridArticle')[4].onclick = expand
document.getElementsByClassName('gridArticle')[5].onclick = expand
document.getElementsByClassName('gridArticle')[6].onclick = expand
document.getElementsByClassName('gridArticle')[7].onclick = expand
document.getElementsByClassName('gridArticle')[8].onclick = expand
document.getElementsByClassName('gridArticle')[9].onclick = expand
document.getElementsByClassName('gridArticle')[10].onclick = expand
document.getElementsByClassName('gridArticle')[11].onclick = expand
document.getElementsByClassName('gridArticle')[12].onclick = expand
document.getElementsByClassName('gridArticle')[13].onclick = expand
document.getElementsByClassName('gridArticle')[14].onclick = expand
