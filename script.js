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
        // document.getElementsByClassName('articleTitle')[i].innerHTML = result.articles[i].title;
        // document.getElementsByClassName('articleImage')[i].style.backgroundImage = "url('" + result.articles[i].urlToImage + "')";

      }


      // CREATING ELEMENTS ON THE FLY

      const grid = document.getElementById('grid')

      //Change 15 to whatever is appropriate and use a variable, also make sure that the CSS grid contains proper amount of rows!!
      for (i = 0; i < 20; i++) {
        const newArticle = document.createElement('div')    //Creates new article div
        newArticle.className = "gridArticle small"          //Adds classes to article div
        newArticle.style.background = "grey"                //TEST makes background grey for JS on the fly made article divs

        const newTitleBox = document.createElement('div')   //Created new title container
        newTitleBox.className = "articleTitle"              //Adds classes to title div


        //Probably best to make title some sort of header instead
        const newTitle = document.createTextNode(result.articles[i].title)  //TEST writes text in div
        newTitleBox.appendChild(newTitle)                     //TEST appends text to new div

        newArticle.appendChild(newTitleBox)                 //Adds title container to article div

        const newImageBox = document.createElement('div')   //Creates new image container
        newImageBox.className = "articleImage"              //Adds classes image div
        newImageBox.style.backgroundImage = `url('${result.articles[i].urlToImage}')`;
        newArticle.appendChild(newImageBox)                 //Adds image container to article div


        grid.appendChild(newArticle)                        //Appends new article to grid
      }


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
