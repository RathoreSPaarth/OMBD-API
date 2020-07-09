// const axios = require('axios')
let btn = document.getElementById('btn')
let movieName = document.getElementById('movie-name')
// let movie = movieName.value
btn.addEventListener('click',fetchMovie)

function fetchMovie(){
    let row = document.getElementById('details')
    let post = document.getElementById('poster-image')
    while(row.firstChild){
        row.removeChild(row.firstChild)
    }
    while(post.firstChild){
        post.removeChild(post.firstChild)
    }
    axios.get('http://www.omdbapi.com/?apikey=b186daa5&s='+ movieName.value)
    .then((res)=>{
        console.log(res.data.Search)

        let list = res.data.Search

        for(let i = 0; i<list.length; i++){
           let x =  document.createElement('div')
           let y =  document.createElement('div')
           let poster = document.createElement('img')

           poster.src = list[i].Poster

           x.setAttribute('class','col-lg-4')
           y.setAttribute('class','col-lg-4')
           x.setAttribute('style','border:solid 1px black;')

           x.innerHTML = "This movie is "+list[i].Title

           let details = document.getElementById('details')
           let image = document.getElementById('poster-image')

           y.appendChild(poster)
           image.appendChild(y)
           details.appendChild(x)

        }
    })
}
