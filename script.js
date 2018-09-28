// This is the js file

//Global variables
let totalNrArticles = 0
let totalNrCategory = 0
let generateNr = 0
let categoryNr = 0
const maxNrCatArticles = 15

// GOOGLE STUFF

const requestNewCategory = (categoryUrl, catName) => {
  console.log('Hello from request new category')
  // var url = 'https://newsapi.org/v2/everything?' +
  //           'q=photography&' +
  //           'apiKey=3934b18b3b584fcdbdfbae1b25021f3a';
  var req = new Request(categoryUrl);
  return fetch(req)
      .then(function(response) {
          return response.json();
      }).then(function(result){
          console.log(result.articles);
          try {
            createPage(result, catName);

          } catch (createPageError) {
            console.log("Error when creating page", createPageError);
          }
      }).catch((error) => {
          console.log(error)
        })
}


const createPage = (result, catName) => {
  // CREATING ELEMENTS ON THE FLY
  categoryNr++ //Moves on to next catogory
  const grid = document.getElementById('grid' + categoryNr)

  //Change 15 to whatever is appropriate and use a variable, also make sure that the CSS grid contains proper amount of rows!!

  // Generates as many articles as returned from google but a max of 15
  if (result.articles.length > maxNrCatArticles ) {
      generateNr = maxNrCatArticles
  } else {
    generateNr = result.articles.length
  }
  totalNrCategory = generateNr  //Sets number of articles in this category
  totalNrArticles += totalNrCategory  //Adds number of articles in this catogory to total nr of articles

  console.log(totalNrCategory)
  console.log(totalNrArticles)
  document.getElementById('headerCat' + categoryNr).innerHTML = `${catName}<br>(${totalNrCategory} articles)`
  document.getElementById('totalArticles').innerHTML =  `(Total number of articles: ${totalNrArticles})`


  for (i = 0; i < generateNr; i++) {
    // console.log(i)
    const newArticle = document.createElement('div')    //Creates new article div
    if (i == 0 || i == 6 || i == 12) {
      newArticle.className = "gridArticle big"
    } else {
      newArticle.className = "gridArticle small"          //Adds classes to article div
    }

    const newImageBox = document.createElement('div')   //Creates new image container that hides overflow on zoom
    newImageBox.className = "articleImageBox"              //Adds classes image div
    newArticle.appendChild(newImageBox)

    const newImage = document.createElement('div')   //Creates new image container with image as background image
    newImage.className = "articleImage"              //Adds classes image div
    if (result.articles[i].urlToImage){
      newImage.style.backgroundImage = `url('${result.articles[i].urlToImage}')`; //Places REAL GOOGLE ARTICLE IMAGE inside image container
    }
    newImageBox.appendChild(newImage)                 //Adds image container to article div



    const newTitleBox = document.createElement('div')   //Creates new title container
    newTitleBox.className = "articleTitle"              //Adds classes to title div
    newArticle.appendChild(newTitleBox)                 //Adds title container to article div

    const newAuthorHeader = document.createElement('h2') //Creates new author header
    if (result.articles[i].author){
      newAuthorHeader.innerHTML = `${result.articles[i].author}` //Places REAL GOOGLE ARTICLE TITLE inside title header
    } else {
      newAuthorHeader.innerHTML = `Anonymous` //Places REAL GOOGLE ARTICLE TITLE inside title header
    }
    newTitleBox.appendChild(newAuthorHeader)             //Adds title header to title container//Places REAL GOOGLE ARTICLE TITLE inside title header

    const newTitleHeader = document.createElement('h1') //Creates new title header
    newTitleHeader.innerHTML = `${result.articles[i].title}` //Places REAL GOOGLE ARTICLE TITLE inside title header
    newTitleBox.appendChild(newTitleHeader)             //Adds title header to title container

    const newInfoBox = document.createElement('div')    //Creates new info container to be shown in expanded articles
    newInfoBox.className = "articleInfo"              //Adds classes info div
    newTitleBox.appendChild(newInfoBox)                  //Adds info container to article div

    const newPubDate = document.createElement('p')
    newPubDate.className = "datePublished"
    const hoursToday = new Date().getHours()
    if (result.articles[i].publishedAt) {
      const timeDiff = Math.round((new Date() - Date.parse(result.articles[i].publishedAt)) / (1000*60*60)) // Calculates number of hours between today and publication date
        if (timeDiff <= hoursToday) {          // If number of hours is less than hours so far in today, then print 'today'
          newPubDate.innerHTML = "Today"
        } else if (timeDiff > hoursToday && timeDiff <= hoursToday + 24) {          // If number of hours is more than hours so far in today, but less than hours in today + 24, then print 'today'
          newPubDate.innerHTML = "Yesterday"
        } else {
      newPubDate.innerHTML = Math.round(timeDiff/24) + " days ago"
    }
      newInfoBox.appendChild(newPubDate)
    }


    const newDescPara = document.createElement('p')
    if (result.articles[i].description){
      newDescPara.innerHTML = `${result.articles[i].description}` //Places REAL GOOGLE ARTICLE TITLE inside title header
    } else if (result.articles[i].content){
      newDescPara.innerHTML = `${result.articles[i].content}`
    } else {
      newDescPara.innerHTML = ``
    }
    newInfoBox.appendChild(newDescPara)

    const newButtonLink = document.createElement('a')
    newButtonLink.className = "button"
    if (result.articles[i].url) {
      newButtonLink.href = `${result.articles[i].url}`
      newButtonLink.target = '_blank'
      newButtonLink.innerHTML = "<p>VIEW</p>"
      newInfoBox.appendChild(newButtonLink)
    } else {
      newButtonLink.href = "#"
      newInfoBox.appendChild(newButtonLink)
    }

    newArticle.addEventListener('click', expand) //Adds event listener on the new article that's continously looking for click and if so toggles expand.

    // document.getElementsByClassName('gridArticle')[i].onclick = expand
    grid.appendChild(newArticle)                        //APPENDS ENTIRE NEW ARTCILE TO ACTUAL GRID/PAGE – SO IT SHOWS!
    //CREATE EVENT LISTENERS        // newArticle.addEventLister

}}

// OUR TOOGLE EXPANDER
function expand(e) {
  // const info = e.target.getElementsByClassName('infoContainer hidden')[0]
  this.classList.toggle('expanded')
}

//IMPORTANT!
//Call for new category


const catName1 = "FUTURE TECHNOLOGY"
const photographyUrl = 'https://newsapi.org/v2/everything?' +
            'q=future+tech&' +
            'apiKey=3934b18b3b584fcdbdfbae1b25021f3a';

const catName2 = "SPACE EXPLORATION"
const spaceUrl = 'https://newsapi.org/v2/everything?' +
            'q=space+exploration&' +
            'apiKey=3934b18b3b584fcdbdfbae1b25021f3a';

const catName3 = "AUGMENTED REALITY"
const homebrewUrl = 'https://newsapi.org/v2/everything?' +
            'q=augmented+reality&' +
            'apiKey=3934b18b3b584fcdbdfbae1b25021f3a';


requestNewCategory(photographyUrl, catName1).then(() => {
  return requestNewCategory(spaceUrl, catName2)
}).then(() => {
  requestNewCategory(homebrewUrl, catName3)
})
