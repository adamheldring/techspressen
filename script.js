// This is the js file

// GOOGLE STUFF

var url = 'https://newsapi.org/v2/everything?' +
          'q=photography&' +
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
        // document.getElementsByClassName('articleTitle')[i].innerHTML = result.articles[i].title;
        // document.getElementsByClassName('articleImage')[i].style.backgroundImage = "url('" + result.articles[i].urlToImage + "')";

      }


      // CREATING ELEMENTS ON THE FLY

      const grid = document.getElementById('grid')

      //Change 15 to whatever is appropriate and use a variable, also make sure that the CSS grid contains proper amount of rows!!
      for (i = 0; i < 20; i++) {
        const newArticle = document.createElement('div')    //Creates new article div
        newArticle.className = "gridArticle small"          //Adds classes to article div

        const newTitleBox = document.createElement('div')   //Creates new title container
        newTitleBox.className = "articleTitle"              //Adds classes to title div
        newArticle.appendChild(newTitleBox)                 //Adds title container to article div

        const newAuthorHeader = document.createElement('h2') //Creates new author header
        newAuthorHeader.innerHTML = `${result.articles[i].author}` //Places REAL GOOGLE ARTICLE TITLE inside title header
        newTitleBox.appendChild(newAuthorHeader)             //Adds title header to title container//Places REAL GOOGLE ARTICLE TITLE inside title header

        const newTitleHeader = document.createElement('h1') //Creates new title header
        newTitleHeader.innerHTML = `${result.articles[i].title}` //Places REAL GOOGLE ARTICLE TITLE inside title header
        newTitleBox.appendChild(newTitleHeader)             //Adds title header to title container

        const newImageBox = document.createElement('div')   //Creates new image container
        newImageBox.className = "articleImage"              //Adds classes image div
        newImageBox.style.backgroundImage = `url('${result.articles[i].urlToImage}')`; //Places REAL GOOGLE ARTICLE IMAGE inside image container
        newArticle.appendChild(newImageBox)                 //Adds image container to article div

        const newInfoBox = document.createElement('div')    //Creates new info container to be shown in expanded articles
        newInfoBox.className = "infoContainer hidden"       //Adds classes info div
        newArticle.appendChild(newInfoBox)                  //Adds info container to article div

        // PLACEHOLDER
        newInfoBox.innerHTML = `Info yay!` //Places REAL GOOGLE ARTICLE TITLE inside title header
        // ADDS PROPER INFO


        grid.appendChild(newArticle)                        //APPENDS ENTIRE NEW ARTCILE TO ACTUAL GRID/PAGE – SO IT SHOWS!
      }


    })



// OUR TOOGLE EXPANDER
function expand() {
  this.classList.toggle('expanded')
  console.log(this.classList)
}


// LOOPING THROUGH OUR ARTICELS CHECKING FOR CLICKS
// for (i = 0; i < 15; i++) {
//   document.getElementsByClassName('gridArticle')[i].onclick = expand
// }

// EXPERIMENT FUTURE CREATING DIVS
const box = document.createElement('div')
