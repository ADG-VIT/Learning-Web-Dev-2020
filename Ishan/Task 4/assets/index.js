document.getElementById("SearchBox").addEventListener('click', getSeries);
document.getElementById('in').addEventListener('keyup',function(event){
    if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("SearchBox").click();
  }
  });

function getSeries() {
    prreventDefault();
    console.log(9);
    fetch('https://task4-api.herokuapp.com/')
    .then((res)=> res.json())
    .then((data)=> {
        console.log('inside 2nd fetch')
        var search = document.getElementById('SearchBox').nodeValue.toLowerCase;
        Series= data.data.tv_shows
        Series.forEach(element => {
            if(search.localeCompare(element.name.toLowerCase())) {
                output+= `

                <div class='Poster'>
                    <img src= ${element.image_thumbnail_path}">
                </div>

                <div class='info'>
                    <ul>
                        <li>Name: ${element.name}</li>  
                        <li>Date : ${p.start_date} - ${p.end_date}</li>
                        <li>Status: ${p.status}</li>
                        <li>Country: ${p.country}</li>
                        <li>Network: ${p.network}</li>
                        </ul>
                </div>
    
                `
            } else {
                output= `<h3 style="text-align= center;">Sorry, we don't have ${document.getElementById('SearchBox').value} in our database :(</h3>`
            }
        })

        document.getElementById('SearchResult').innerHTML=output;

        });
        
}