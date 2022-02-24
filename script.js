
var map = L.map('map').setView([34.0536, -118.084], 13)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYS1rYXBzIiwiYSI6ImNsMDB2bndqMjAwNTIzY21rbHAxaTEzYmkifQ.c7JHC8J5OWpyExJ3kInVxQ'
}).addTo(map);

let searchButton = document.getElementsByClassName('search-button')[0]
let input = document.getElementsByClassName('search-input')[0]

searchButton.addEventListener('click', () => {
    let ip = input.value
    let link = `http://ip-api.com/json/${ip}`
    fetch(link)
        .then(response => response.json())
        .then(data => {
            let location = data.city + ", " + data.region + ", " + data.zip
            let timezone = data.timezone
            let isp = data.isp
            console.log(location + " " + timezone + " " + isp)

            let ipInfo = document.getElementsByClassName('ip-info')[0]
            let locationInfo = document.getElementsByClassName('location-info')[0]
            let timezoneInfo = document.getElementsByClassName('timezone-info')[0]
            let ispInfo = document.getElementsByClassName('isp-info')[0]

            ipInfo.textContent = ip
            locationInfo.textContent = location
            timezoneInfo.textContent = timezone
            ispInfo.textContent = isp

            let lat = parseInt(data.lat)
            let long = parseInt(data.long)

            var map = L.map('map').setView([34.0536, -118.084], 13)
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'pk.eyJ1IjoiYS1rYXBzIiwiYSI6ImNsMDB2bndqMjAwNTIzY21rbHAxaTEzYmkifQ.c7JHC8J5OWpyExJ3kInVxQ'
            }).addTo(map);
        })

        .catch(error => {
            console.log("Info not found")
        })
})
