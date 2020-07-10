let btn = document.getElementById('btn')
let movieName = document.getElementById('movie-name')
btn.addEventListener('click',fetchMovie)

function fetchMovie(){
    let row = document.getElementById('details')
    
    while(row.firstChild){
        row.removeChild(row.firstChild)
    }

    axios.get('//www.omdbapi.com/?apikey=b186daa5&s='+ movieName.value)
    .then((res)=>{
        console.log(res.data.Search)

        let list = res.data.Search

        for(let i = 0; i<list.length; i++){
           let x =  document.createElement('div')
           let y =  document.createElement('div')
           let poster = document.createElement('img')

           //p tags for movie info
           let title = document.createElement('p')
           let type = document.createElement('p')
           let year = document.createElement('p')
           let imdb = document.createElement('p')

           poster.src = list[i].Poster
           poster.setAttribute('alt','OOPS! IMAGE NOT FOUND!')

           title.innerHTML = "TITLE: " + list[i].Title
           type.innerHTML = "TYPE: " +  list[i].Type
           year.innerHTML = "YEAR: " + list[i].Year
           imdb.innerHTML = "FIND MORE AT: " + "https://www.imdb.com/title/"+list[i].imdbID


           x.setAttribute('class','col-lg-4 col-12')
           x.setAttribute('style',"border: none; border-radius:5%; background-color: #e4e3e3; color: black; ")
           y.setAttribute('class','col-lg-4 col-12')
           y.setAttribute('style',"margin: 5%;")

           let details = document.getElementById('details')
           let image = document.getElementById('poster-image')

          
           if(list == undefined)
            alert('ENTER A VALID MOVIE NAME!')

           y.appendChild(poster)
           x.appendChild(y)
           x.appendChild(title)
           x.appendChild(type)
           x.appendChild(year)
           x.appendChild(imdb)
           details.appendChild(x)

        }
    })
}
