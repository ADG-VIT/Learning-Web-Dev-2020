function startTimer() {
  setInterval(displayNextImage, 5000);
  }
  function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
    }

    var images = [], x = -1;
    images[0] = "lucifer.jpg";
    images[1] = "sexed.jpg";
    images[2] = "you.jpg";
    images[3] = "riverdale.jpg";
    images[4] = "b99.jpg";
    images[5] = "dark.jpg";
    images[6] = "orange.jpg";
    images[7] = "narcos.jpg";
    images[8] = "st.jpg";


document.getElementById('button').addEventListener('click', loadUsers);

    function loadUsers(){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://task4-api.herokuapp.com/', true);

      xhr.onload = function(){
        if(this.status == 200){
          var users = JSON.parse(this.responseText);
          var dis = users.data.tv_shows;
          var x = document.getElementById("myText").value;
          var output = '';
          var flag=0;
          for(var i in dis){
            
             if(dis[i].name == x) {
                 flag=1;
            output +=
              '<div class="user">' +
              '<img id="icon" src="'+dis[i].image_thumbnail_path+'" width="150" height="150">' +
              '<ul>' +
              '<li>ID: &thinsp;'+dis[i].id+'</li>' +
              '<li>Name: &thinsp;'+dis[i].name+'</li>' +
              '<li>Startdate: &thinsp;'+dis[i].start_date+'</li>' +
              '<li>Enddate: &thinsp;'+dis[i].end_date+'</li>' +
              '<li>Country: &thinsp;'+dis[i].country+'</li>' +
              '<li>Network: &thinsp;'+dis[i].network+'</li>' +
              '<li>Status: &thinsp;'+dis[i].status+'</li>' +
              '</ul>' +
              '</div>';
              break;
              }            
          }
          if(flag==0){
            output +=
          '<div class="users">' +
          '<p>Not found!</p>'+
          '</div>';
          }
          document.getElementById('users').innerHTML = output;
        }
      }

      xhr.send();
    }

    



