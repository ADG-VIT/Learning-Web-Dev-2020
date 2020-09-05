document.getElementById("SearchBox").addEventListener('click', getSeries);
document.getElementById('in').addEventListener('keyup',function(event){
    if (event.keyCode === 13) {
   document.getElementById("SearchBox").click();
  }
  });
var output;
var unfound= 'yes';
function getSeries() {
    event.preventDefault();
    fetch('https://task4-api.herokuapp.com/')
    .then((res)=> res.json())
    .then((data)=> {
        Series= data.data.tv_shows
        var Search = document.getElementById('Search').value.toLowerCase().split(" ").join("");
        Series.forEach(element => {
            var s2=element.name.toLowerCase().split(" ").join("");;
            if(Search.localeCompare(s2)===0) {
             output= `

                <div class='Poster'>
                    <img src= ${element.image_thumbnail_path}">
                </div>

                <div class='info'>
                    <ul>
                        <li><span style="font-size:larger;">Name:</span><span style="font-size:large; color: rgb(152, 203, 253)"> ${element.name}</span></li>  
                        <li><span style="font-size:larger;">Date:</span><span style="font-size:large; color: rgb(152, 203, 253);"> ${element.start_date} - ${element.end_date}</span></li>
                        <li><span style="font-size:larger;">Status:</span><span style="font-size:large; color: rgb(152, 203, 253);"> ${element.status}</span></li>
                        <li><span style="font-size:larger;">Country:</span><span style="font-size:large; color: rgb(152, 203, 253);"> ${element.country}</span></li>
                        <li><span style="font-size:larger;">Network:</span><span style="font-size:large; color: rgb(152, 203, 253);"> ${element.network}</span></li>
                        </ul>
                </div>
    
                `;

                unfound= 'no';
                document.getElementById('SearchResult').innerHTML=output;

            } else {
                output= `<h3 style="margin-top: -10% !important;">Sorry, we don't have <span style="color: dodgerblue;">"${document.getElementById('Search').value}"</span> in our database <span style="color: dodgerblue;">:(</span></h3>`
                if(unfound==='no') {
                    document.getElementById('Unfound').innerHTML="";
                }
                if(unfound==='yes') {
                    document.getElementById('SearchResult').innerHTML="";
                    document.getElementById('Unfound').innerHTML=output;
                }
                
            }
        })

        

        });
        
}