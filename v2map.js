//  Author: Kwintyn Porter
//  Class: Web and Distributed Programming
//  Project: Map Mania v2
//  Session: su18-cpsc-24700-lt1
//  Description: Second version of Map Mania Proj. [PA4]
function load_greeting () {
    alert("There's a simple way to win this game. \n" +
          "What happens here, stays here. \n" + "Try not to lose everything.");
  }
var gMap; 

var futureDestinations = [ 
    {content: 'Chicago Heights, Illinois', coordinates:{lat: 41.5061,lng:-87.6356}, iconImagePath:"flag.png"},
    {content: 'Harvey, Illinois', coordinates:{lat: 41.61,lng: -87.6467}, iconImagePath:"flag.png"},
    {content: 'Country Club Hills, Illinois', coordinates:{lat: 41.5681,lng: -87.7203}, iconImagePath:"flag.png"}, 
    {content: 'Humboldt, Tennessee', coordinates:{lat:35.8198,lng: -88.9159}, iconImagePath:"flag.png"},
    {content: 'Nashville, Tennessee', coordinates:{lat:36.1627,lng: -86.7816}, iconImagePath:"flag.png"},
    {content: 'Monee, Illinois', coordinates:{lat:41.4200, lng:-87.7417}, iconImagePath:"flag.png"},
    {content: 'University Park, Illinois', coordinates:{lat:41.44,lng: -87.6834}, iconImagePath:"flag.png"},
    {content: 'Las Vegas, Nevada', coordinates:{lat:36.1699,lng:-115.1398}, iconImagePath:"flag.png"},
    {content: 'Mount Sunflower, Kansas', coordinates:{lat:39.0198,lng:-102.0357}, iconImagePath:"flag.png"},
    {content: 'Seattle, Washington', coordinates:{lat:47.6062,lng:122.3321}, iconImagePath:"flag.png"},
    {content: 'New York, New York', coordinates:{lat:40.7128,lng:74.0060}, iconImagePath:"flag.png"},
    {content: 'Ft. Lauderdale, Florida', coordinates:{lat:26.1224,lng:80.1373}, iconImagePath:"flag.png"},
    {content: 'Tokyo, Japan', coordinates:{lat:35.6895,lng: 139.6917}, iconImagePath:"flag.png"},
    {content: 'Beijing, China', coordinates:{lat:39.9042,lng:116.4074}, iconImagePath:"flag.png"}
]; 
var currentPlaceIndex = 9; 
var currentPlace = futureDestinations[currentPlaceIndex]; 
var score = 10; 

function initApplication() { 
        console.log('Map Mania Lite V1 KMP- Starting!'); 
}

function initMap() { 
    gMap = new google.maps.Map(document.getElementById('myMapID'), { 
        center: {lat: 41.6475, lng: -88.0895}, zoom: 6}) 

        
    for (i=0; i<futureDestinations.length; i++) { 
        addMarker(currentPlace);
        nextPlace();

    var marker = new google.maps.Marker({position:{lat: 41.6475, lng: -88.0895}, map:gMap})/* Romeoville, IL */
    var marker = new google.maps.Marker({position:{lat:40.7128,lng:-74.0060}, map:gMap})/* New York, NY*/
    var marker = new google.maps.Marker({position:{lat:41.4200, lng:-87.7417}, map:gMap})/* Monee, IL*/
    var marker = new google.maps.Marker({position:{lat:35.6895,lng: 139.6917}, map:gMap})/* Tokyo, Japan */ 
    var marker = new google.maps.Marker({position:{lat:41.44,lng: -87.6834}, map:gMap})/* University Park, IL*/ 
    var marker = new google.maps.Marker({position:{lat: 41.5681,lng: -87.7203}, map:gMap})/* Country Club Hills, IL*/ 
    var marker = new google.maps.Marker({position:{lat:39.0198,lng:-102.0357}, map:gMap})/* Mount Sunflower, KN */ 
    var marker = new google.maps.Marker({position:{lat:47.6062,lng: -122.3321}, map:gMap}) /*Seattle, WS */
    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });
    }
    SetHint("Hint 1"); 
    SetScore(score);

function updatePlaces() { 
    console.log('function updatePlaces() google-map-step-03!');
   var zoomLevel = gMap.getZoom()
   var inBounds =  false; 
}
function SetHint(hint) { 
    document.getElementById("hint-identifier").value = hint; 
}
function SetScore() { 
    document.getElementById("score-identifier").value = score; 
}

function nextPlace() {
    currentPlaceIndex--;
    currentPlace = futureDestinations[currentPlaceIndex];
}

function addMarker(markerContent) {
    var marker = new google.maps.Marker({position:markerContent.coordinates, map:gMap});
    if (markerContent.iconImagePath) {
        marker.setIcon(markerContent.iconImagePath);
    }

    if (markerContent.content) {
        var infoWindow = new google.maps.InfoWindow({"content":markerContent.content});
        marker.addListener("click", function() { infoWindow.open(gMap, marker) });
    }
} 
function updateGame() {
    console.log('function UpdateGame()');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    if (gMap.getBounds().contains({lat:36.1699,lng:-115.1398})) {
        inBounds = true;
    
    if ((zoomLevel > 5) && (inBounds)) {
    console.log("You found it, America's trash can. You win.");
    addMarker(currentPlace);
    nextPlace();
    }
}
    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}
}