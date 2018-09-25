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

        createPage(result);
      })




const createPage = (result) => {
  // CREATING ELEMENTS ON THE FLY

  const grid = document.getElementById('grid')

  //Change 15 to whatever is appropriate and use a variable, also make sure that the CSS grid contains proper amount of rows!!
  for (i = 0; i < 20; i++) {
    // console.log(i)
    const newArticle = document.createElement('div')    //Creates new article div
    newArticle.className = "gridArticle small"          //Adds classes to article div

    const newTitleBox = document.createElement('div')   //Creates new title container
    newTitleBox.className = "articleTitle"              //Adds classes to title div
    newArticle.appendChild(newTitleBox)                 //Adds title container to article div

    const newAuthorHeader = document.createElement('h2') //Creates new author header
    if (result.articles[i].author){
      newAuthorHeader.innerHTML = `${result.articles[i].author}` //Places REAL GOOGLE ARTICLE TITLE inside title header
    } else {
      newAuthorHeader.innerHTML = `Anon` //Places REAL GOOGLE ARTICLE TITLE inside title header
    }
    newTitleBox.appendChild(newAuthorHeader)             //Adds title header to title container//Places REAL GOOGLE ARTICLE TITLE inside title header

    const newTitleHeader = document.createElement('h1') //Creates new title header
    newTitleHeader.innerHTML = `${result.articles[i].title}` //Places REAL GOOGLE ARTICLE TITLE inside title header
    newTitleBox.appendChild(newTitleHeader)             //Adds title header to title container

    const newImageBox = document.createElement('div')   //Creates new image container that hides overflow on zoom
    newImageBox.className = "articleImageBox"              //Adds classes image div
    newArticle.appendChild(newImageBox)

    const newImage = document.createElement('div')   //Creates new image container with image as background image
    newImage.className = "articleImage"              //Adds classes image div
    if (result.articles[i].urlToImage){
      newImage.style.backgroundImage = `url('${result.articles[i].urlToImage}')`; //Places REAL GOOGLE ARTICLE IMAGE inside image container
    }
    newImageBox.appendChild(newImage)                 //Adds image container to article div

    const newInfoBox = document.createElement('div')    //Creates new info container to be shown in expanded articles
    newInfoBox.className = "infoContainer hidden"       //Adds classes info div
    newArticle.appendChild(newInfoBox)                  //Adds info container to article div

    // PLACEHOLDER
    newInfoBox.innerHTML = `Info yay!` //Places REAL GOOGLE ARTICLE TITLE inside title header
    // ADDS PROPER INFO


    newArticle.addEventListener('click', expand) //Adds event listener on the new article that's continously looking for click and if so toggles expand.

    // document.getElementsByClassName('gridArticle')[i].onclick = expand
    grid.appendChild(newArticle)                        //APPENDS ENTIRE NEW ARTCILE TO ACTUAL GRID/PAGE – SO IT SHOWS!
    //CREATE EVENT LISTENERS        // newArticle.addEventLister

}}

// OUR TOOGLE EXPANDER
function expand(number) {
  this.classList.toggle('expanded')
}


// LOOPING THROUGH OUR ARTICELS CHECKING FOR CLICKS
// for (i = 0; i < 15; i++) {

// }

// EXPERIMENT FUTURE CREATING DIVS
// const box = document.createElement('div')
