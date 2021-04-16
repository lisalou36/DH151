var map = L.map('map').setView([38.16691,-111.4823], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let data = [
	{
		title: 'Petrified Forest National Park, AZ',
		description: 'After an exhausting night and day of driving in sweltering heat, we sought refuge in the hills of this park. After camping overnight in 85 degree weather, we awoke refreshed and ready for another day of exploration',
		lat: 35.0517,
		lon: -109.4823,
		url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0X4DazKK798hnJOi8WCUbgHaEK%26pid%3DApi&f=1',
	},
	{
		title:'Priest Lake, Telluride, CO',
		description: 'We stumbled upon this small campsite during a desperate evening search for cooler temps. A lengthy rocky mountain road at night held us in suspense. When we arrived, we sleepily assembled our tent and slept soundly. After waking up to the image of golden wildflowers and a shimmering lake, we decided to relax and explore the area for the rest of the afternoon',
		lat: 37.83511682684515,
		lon:  -107.87965110535872,
		url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F91%2F55%2F82%2F915582882ecf6f85a082fb1867ee6061.jpg&f=1&nofb=1',
	},
	{
		title:'Canyonlands National Park, UT',
		description: 'The temperature dropped from 100 degrees and sunny to 50 degrees and rainy over night. Our tent was collapsing around us, and so we slept in the car, wrapped in layers. The next morning we sleepily drove through the park and were awed by the intense landscape of the layers and depth of these maze-like canyons',
		lat: 38.16691,
		lon: -109.75966,
		url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdiscovermoab.com%2Fwp-content%2Fuploads%2F2017%2F06%2Fcanyonlands_main_image.jpg&f=1&nofb=1',
	},
	{
		title:'Bonneville Salt Flats, UT',
		description: 'Drove 3 hours north to escape the rain, only to be met with biting 80mph winds! The salts mirage of cooly glimmering snow glittered as the sun set, and the Milky Way galaxy arced its way across the horizon for the best night sky I have ever witnessed',
		lat: 40.799722,
		lon: -113.800,
		url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.RtvJfj2EEa1kNZ9Dsalv6QHaE8%26pid%3DApi&f=1',
	},
	{
		title:'Zion National Park, UT',
		description: 'The weather finally steadied to a cool 75 degrees for a perfect backpacking expedition. We traversed over 21 miles in less than 48 hours, and the isolated island-in-the-sky view at the end of the trail was worth it',
		lat: 37.18,
		lon: -113.00,
		url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.outdoorproject.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fodp_header_adaptive%2Fpublic%2Ffeatures%2Fview_looking_west_from_top_of_cable_mountain.jpg%3Fitok%3DOzqPUbuP&f=1&nofb=1',
	},
	{
		title:'Valley of Fire State Park, NV',
		description: 'On our last day of our trip, we swung by this hidden gem outside of Vegas. At 105 degrees, there was no better park to visualize the sweltering flames of Nevada heat than the Valley of Fire!',
		lat: 36.2722,
		lon: -114.3159,
		url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.yourhikeguide.com%2Fwp-content%2Fuploads%2FDSC1197edit.jpg&f=1&nofb=1',
	}
]

// before looping the data, create an empty FeatureGroup container
let myMarkers = L.featureGroup();

// loop through data
data.forEach(function(item,index){
	// create marker
	let marker = L.marker([item.lat,item.lon])
		.bindPopup(`<div><h2>${item.title}</h2></div><br>${item.description}</br><img src="${item.url}" width=80%>`)

	// add marker to featuregroup
	myMarkers.addLayer(marker)

	// add data to sidebar with onclick event
	$(".sidebar").append(`<div class="sidebar-item" 
	onclick="flyToIndex(${index})">${item.title}</div>`)

});

//Create a circle
var circle = L.circle([36.2722,-114.3159], {
	color: 'red',
	fillColor: '#f03',
	radius: 500
}).addTo(map);

//Create Southern Paiute polygon
var polygon = L.polygon([
	[33.637087393829965, -116.10417532654368],
	[33.640988651866174, -114.64936984143931],
	[34.290692819463786, -114.14134025226927],
	[34.84434115071751, -114.68334575402802],
	[36.01678248371066, -114.82726166513764],
	[35.81279989287857, -113.5237563652440],
	[35.89562387744357, -113.3529938829258],
	[36.040934635417365, -113.36548199520378],
	[36.350602428280745, -112.63111170861703],
	[36.016845454554044, -111.8555999414096],
	[36.22461242317146, -111.81687422663539],
	[35.8755996826344, -111.35833912881169],
	[37.009901380966646, -110.10399927599003],
	[37.18018729322263, -110.32280843923789],
	[38.35904370531612, -110.20781973022962],
	[39.8478012818184, -111.27998497495848],
	[37.879698101221024, -115.09603789487852],
	[36.698320804015275, -116.80976621711297],
	[35.64474944340277, -116.991133695033]
	]).addTo(map);

polygon.bindPopup("Nuwuvi Southern Paiute Lands");
polygon.setStyle({fillColor: '#0000FF'});

//Create Pueblos polygon
var polygon = L.polygon([
	[37.79283612669323, -109.39597514774218],
	[37.133782783778926, -113.97525306401363],
	[36.56894664748375, -113.51961555068848],
	[35.59810148079499, -112.20721270626842],
	[33.98053366213576, -111.96068781152104],
	[33.582080504685244, -106.0052817674065],
	[35.189670434631275, -105.5568863656182],
	[37.02575184870219, -104.54229580269869]
	]).addTo(map);

polygon.bindPopup("Pueblo Lands");
polygon.setStyle({fillColor: '#ff1f1f'});

//Create Goshute polygon
var polygon = L.polygon([
	[41.72549565609825, -113.75055818577421],
	[41.01681558776163, -114.54394648763801],
	[38.10834298498779, -114.96395299377926],
	[38.17006686582158, -112.14239248631804],
	[40.87636446002296, -110.73014851250934]
	]).addTo(map);

polygon.bindPopup("Goshute Lands");
polygon.setStyle({fillColor: '#ffb01f'});

//Create Ute polygon
var polygon = L.polygon([
	[40.760137273238215, -111.46583288226628],
	[38.63644980131417, -112.43751960683204],
	[35.72989817950143, -111.23739988743795],
	[36.23471513254453, -104.77956909241148],
	[38.23860971000406, -103.36989111690026],
	[40.65280539639901, -104.07188492293405]
	]).addTo(map);

polygon.bindPopup("Núu-agha-tʉvʉ-pʉ̱  (Ute) Lands");
polygon.setStyle({fillColor: '#ffff1f'});

//Create Diné Bikéyah polygon
var polygon = L.polygon([
	[37.7914632698522, -110.42566476126558],
	[36.313420041185175, -111.94650203513643],
	[35.31987689748562, -111.48608901848381],
	[34.7, -108.30697267029761],
	[34.21651653163493, -107.27022298298293],
	[34.57227958980637, -107.36477532204877],
	[34.79471141898811, -108.10038026803741],
	[35.22194001299578, -109.03946915913725],
	[35.56963264738241, -108.71249463353473],
	[35.28942511880331, -108.16712416572841],
	[35.321078166316774, -107.69642958012241],
	[35.4189801485121, -107.28086399369009],
	[35.323470613688876, -106.84261768319503],
	[36.924632031581936, -106.87305517334414]
	]).addTo(map);

polygon.bindPopup("Diné Bikéyah Lands");
polygon.setStyle({fillColor: '#009e00'});




myMarkers.addTo(map)

//define layers
let layers = {
	"My favorite sites": myMarkers
}

//add layer control box
L.control.layers(null,layers).addTo(map)

map.fitBound(myMarkers.getBounds())

function flyToIndex(index){
	map.flyTo([data[index].lat,data[index].lon],15)
	//open the popup
	myMarkers.getLayers()[index].openPopup()
}

