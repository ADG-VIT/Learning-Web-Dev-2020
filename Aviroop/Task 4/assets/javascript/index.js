let flag = 0;

function putData() {
    let movieName = document.getElementById('movieName').value;
    let output = '';
    document.getElementById('output').innerHTML = output;
    document.getElementById('movieImage').style.boxSizing = '';
    document.getElementById('movieImage').style.border = '';
    document.getElementById('movieImage').src = '';
    fetch('https://task4-api.herokuapp.com/')
        .then((res) => res.json())
        .then((data) => {
            const jsonData = data;
            console.log(jsonData.data.tv_shows[0].name);
            for(let i = 0; i < 100; i++) {
                flag = 0;
                if(!(movieName.localeCompare(jsonData.data.tv_shows[i].name, 'en', {sensitivity: 'base'}))) {
                    output += `
                        <ul class="list-group">
                            <li class="list-group-item" id="bg">Name: ${jsonData.data.tv_shows[i].name}</li>
                            <li class="list-group-item" id="bg">Movie ID: ${jsonData.data.tv_shows[i].id}</li>
                            <li class="list-group-item" id="bg">Start Date: ${jsonData.data.tv_shows[i].start_date}</li>
                            <li class="list-group-item" id="bg">Network: ${jsonData.data.tv_shows[i].network}</li>
                            <li class="list-group-item" id="bg">Country: ${jsonData.data.tv_shows[i].country}</li>
                            <li class="list-group-item" id="bg">Status: ${jsonData.data.tv_shows[i].status}</li>
                        </ul>
                    `;
                    let img = jsonData.data.tv_shows[i].image_thumbnail_path;
                    document.getElementById('movieImage').style.boxSizing = 'border-box';
                    document.getElementById('movieImage').style.border = '5px solid #ffffff';
                    document.getElementById('movieImage').src = img;
                    flag = 1;
                    break;
                }
            }
            if(flag == 1)
                document.getElementById('output').innerHTML = output;
            else {
                alert('The show that you searched for is not available. Press OK to continue.');
            }
        })
}
