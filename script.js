// This is the js file

// GOOGLE STUFF

var url = 'https://newsapi.org/v2/everything?' +
          'q=space&' +
          'apiKey=3934b18b3b584fcdbdfbae1b25021f3a';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        return response.json();
    }).then(function(result){
        console.log(result.articles[0]);
    // }).catch(error => {
    //     console.log(error)

      for(i = 0; i < 15; i++) {
        console.log(i);
        document.getElementsByClassName('articleTitle')[i].innerHTML = result.articles[i].title;
        document.getElementsByClassName('articleImage')[i].style.backgroundImage = "url('" + result.articles[i].urlToImage + "')";

      }


      // Creating element on the fly

      // const grid = document.getElementsByClassName('gridContainer')
      // grid.style.background = "black"
      // let newDiv = document.createElement('div')
      // newDiv.style.background = "yellow"
      // grid.appendChild(newDiv)



    })



// OUR TOOGLE EXPANDER
function expand() {
  this.classList.toggle('expanded')
  console.log(this.classList)
}


// LOOPING THROUGH OUR ARTICELS CHECKING FOR CLICKS
for (i = 0; i < 15; i++) {
  document.getElementsByClassName('gridArticle')[i].onclick = expand
}

// EXPERIMENT FUTURE CREATING DIVS
const box = document.createElement('div')
