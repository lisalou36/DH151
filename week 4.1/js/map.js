// Global variables
let map;
let lat = 34;
let lon = -120;
let zl = 5.2;
// path to csv data
let path = "data/Contaminants_and_Toxicity_Figure_2&3&4.csv";
let markers = L.featureGroup();


// initialize
$( document ).ready(function() {
	createMap(lat,lon,zl);
	readCSV(path);
});

// create the map
function createMap(lat,lon,zl){
	map = L.map('map').setView([lat,lon], zl);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	//Highly Toxic Circles
	let hiTox = []
	var circle = L.circle([36.77218, -121.7866], {
		color: 'red',
		fillColor: 'red',
		fillOpacity: 0.25,
		radius: 40000
		}).addTo(map);

	var circle = L.circle([34.42782,-118.54022], {
		color: 'red',
		fillColor: 'red',
		fillOpacity: 0.25,
		radius: 40000
		}).addTo(map);

	var circle = L.circle([33.986,-118.417], {
		color: 'red',
		fillColor: 'red',
		fillOpacity: 0.25,
		radius: 40000
		}).addTo(map);

	var circle = L.circle([37.99107,-121.69626], {
		color: 'red',
		fillColor: 'red',
		fillOpacity: 0.25,
		radius: 40000
		}).addTo(map);

	var circle = L.circle([37.52139,-121.14861], {
		color: 'red',
		fillColor: 'red',
		fillOpacity: 0.25,
		radius: 40000
		}).addTo(map);

	var circle = L.circle([32.55142,-117.08394], {
		color: 'red',
		fillColor: 'red',
		fillOpacity: 0.25,
		radius: 40000
		}).addTo(map);
}



// function to read csv data
function readCSV(path){
Papa.parse(path, {
	header: true,
	download: true,
	complete: function(data) {
		console.log(data);
		
		// map the data
		mapCSV(data);

	}
});
}

function mapCSV(data){
	
	// circle options
	
	let circleOptions = {
        radius: 5,
        weight: 1,
        color: 'red',
        fillColor: 'orange',
        fillOpacity: 1
    }

	// loop through each entry
	data.data.forEach(function(item,index){
		// create marker
		let marker = L.circleMarker([item.Latitude,item.Longitude],circleOptions)
		.on('mouseover',function(){
			this.bindPopup(`<b>${item.StationName}</b>
			<br>${item.Year}
			<br>${item.ToxCategory}
			<br>${item.LandUse}
			<br>${item.Urban5k+"%"}`).openPopup()
		})

		// add marker to featuregroup		
		markers.addLayer(marker)

		// add entry to sidebar: I've spent several hours trying to get these items to be clickable and nothing has worked. Ask Yoh in office hours to help figure out.
        $('.sidebar').append(`<div class="sidebar-item" onmouseover="panToImage(${index})">${item.StationName}</div>`)

	})

	// add featuregroup to map
	markers.addTo(map)

	// fit markers to map
	map.fitBounds(markers.getBounds())

}