document.getElementById("search").addEventListener("click", getresult);
document.getElementById("myInput").addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("search").click();
	}
});
function getresult() {
	fetch(" https://task4-api.herokuapp.com/")
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			output = "";
			flag = 0;
			var search = document.getElementById("myInput").value.toLowerCase();
			data.data.tv_shows.forEach((p) => {
				if (search.localeCompare(p.name.toLowerCase()) == 0) {
					output += `
                          <img src="${p.image_thumbnail_path}">
                          <ul>
                          <li>Name: ${p.name}</li>  
                          <li>Start Date : ${p.start_date}</li>
                          <li>End Date: ${p.end_date}</li>
                          <li>Status: ${p.status}</li>
                          <li>Country: ${p.country}</li>
                          <li>Network: ${p.network}</li>
                          </ul>          
                    `;
					flag = 1;
				}
			});
			if (flag == 0) {
				output = `<h1>Couldn't find ${
					document.getElementById("myInput").value
				} in the list!!<h1>`;
			}
			document.getElementById("output").innerHTML = output;
		});
}

function autocomplete(inp, arr) {
	var currentFocus;

	inp.addEventListener("input", function (e) {
		var a,
			b,
			i,
			val = this.value;
		/*close any already open lists of autocompleted values*/
		closeAllLists();
		if (!val) {
			return false;
		}
		currentFocus = -1;
		/*create a DIV element that will contain the items (values):*/
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		/*append the DIV element as a child of the autocomplete container:*/
		this.parentNode.appendChild(a);
		/*for each item in the array...*/
		for (i = 0; i < arr.length; i++) {
			/*check if the item starts with the same letters as the text field value:*/
			if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
				/*create a DIV element for each matching element:*/
				b = document.createElement("DIV");
				/*make the matching letters bold:*/
				b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
				b.innerHTML += arr[i].substr(val.length);
				/*insert a input field that will hold the current array item's value:*/
				b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
				/*execute a function when someone clicks on the item value (DIV element):*/
				b.addEventListener("click", function (e) {
					/*insert the value for the autocomplete text field:*/
					inp.value = this.getElementsByTagName("input")[0].value;
					/*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
					closeAllLists();
				});
				a.appendChild(b);
			}
		}
	});
	/*execute a function presses a key on the keyboard:*/
	inp.addEventListener("keydown", function (e) {
		var x = document.getElementById(this.id + "autocomplete-list");
		if (x) x = x.getElementsByTagName("div");
		if (e.keyCode == 40) {
			/*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
			currentFocus++;
			/*and and make the current item more visible:*/
			addActive(x);
		} else if (e.keyCode == 38) {
			//up
			/*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
			currentFocus--;
			/*and and make the current item more visible:*/
			addActive(x);
		} else if (e.keyCode == 13) {
			/*If the ENTER key is pressed, prevent the form from being submitted,*/
			e.preventDefault();
			if (currentFocus > -1) {
				/*and simulate a click on the "active" item:*/
				if (x) x[currentFocus].click();
			}
		}
	});
	function addActive(x) {
		/*a function to classify an item as "active":*/
		if (!x) return false;
		/*start by removing the "active" class on all items:*/
		removeActive(x);
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = x.length - 1;
		/*add class "autocomplete-active":*/
		x[currentFocus].classList.add("autocomplete-active");
	}
	function removeActive(x) {
		/*a function to remove the "active" class from all autocomplete items:*/
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("autocomplete-active");
		}
	}
	function closeAllLists(elmnt) {
		/*close all autocomplete lists in the document,
    except the one passed as an argument:*/
		var x = document.getElementsByClassName("autocomplete-items");
		for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != inp) {
				x[i].parentNode.removeChild(x[i]);
			}
		}
	}
	/*execute a function when someone clicks in the document:*/
	document.addEventListener("click", function (e) {
		closeAllLists(e.target);
	});
}

/*An array containing all elements:*/
var shows = [
	"The Flash",
	"Game of Thrones",
	"Arrow",
	"Lucifer",
	"Supergirl",
	"DC's Legends of Tomorrow",
	"The Walking Dead",
	"Dragon Ball Super",
	"Stranger Things",
	"The 100",
	"Supernatural",
	"Sherlock",
	"The Big Bang Theory",
	"Marvel's Agents of S.H.I.E.L.D.",
	"Boku no Hero Academia",
	"Marvel's Daredevil",
	"Gotham",
	"Vikings",
	"Westworld",
	"Miraculous LadyBug",
	"Mr. Robot",
	"Rick and Morty",
	"Blindspot",
	"Riverdale",
	"Suits",
	"One-Punch Man",
	"Boruto: Naruto Next Generations",
	"The Blacklist",
	"The Originals",
	"Steven Universe",
	"Teen Wolf",
	"Marvel's Jessica Jones",
	"Brooklyn Nine-Nine",
	"Marvel's Iron Fist",
	"Marvel's Luke Cage",
	"Marvel's The Defenders",
	"iZombie",
	"Black Clover",
	"Prison Break",
	"13 Reasons Why",
	"Shadowhunters: The Mortal Instruments",
	"The Good Doctor",
	"Fear the Walking Dead",
	"Once Upon a Time",
	"Quantico",
	"Naruto: Shippuuden",
	"Orange Is the New Black",
	"Better Call Saul",
	"The Magicians",
	"Grey's Anatomy",
	"Doctor Who",
	"Young Sheldon",
	"Limitless",
	"The Seven Deadly Sins",
	"How to Get Away with Murder",
	"Narcos",
	"Titans",
	"Legion",
	"Modern Family",
	"Black Lightning",
	"The Gifted",
	"Scorpion",
	"Breaking Bad",
	"The Shannara Chronicles",
	"The Witcher",
	"Peaky Blinders",
	"Legacies",
	"House of Cards",
	"American Horror Story",
	"Grimm",
	"Shameless",
	"Marvel's The Punisher",
	"Constantine: City of Demons",
	"South Park",
	"American Gods",
	"Black Mirror",
	"Sense8",
	"Elementary",
	"Homeland",
	"Pretty Little Liars",
	"Shokugeki no Souma",
	"Preacher",
	"Marvel's Runaways",
	"Empire",
	"Family Guy",
	"Star Trek: Discovery",
	"Batwoman",
	"La Casa de Papel",
	"The Mandalorian",
	"Silicon Valley",
	"Marvel's Inhumans",
	"Marvel's Cloak & Dagger",
	"Into the Badlands",
	"Van Helsing",
	"Krypton",
	"Marvel's Agent Carter",
	"The Good Place",
	"Timeless",
	"NCIS",
	"The Last Ship",
];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), shows);
console.log(shows[13]);
