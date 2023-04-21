// ubg235 Server
const REDIRECT_GUIDE= {
    "3d-car-simulator": "https://racingpcgame.com/3d-car-simulator.html",
    "3d-moto-simulator-2": "https://racingpcgame.com/3d-moto-simulator-2.html",
    "adventure-drivers": "https://racingpcgame.com/adventure-drivers.html",
    "bike-trials-winter-2": "https://racingpcgame.com/bike-trials-winter-2.html",
    "burnin-rubber-5-xs": "https://racingpcgame.com/burnin-rubber-5-xs.html",
    "burnin-rubber": "https://racingpcgame.com/burnin-rubber.html",
    "burnout-drift-hilltop": "https://racingpcgame.com/burnout-drift-hilltop.html",
    "bus-parking-3d": "https://racingpcgame.com/bus-parking-3d.html",
    "car-drift-racers-2": "https://racingpcgame.com/car-drift-racers-2.html",
    "car-rush": "https://racingpcgame.com/car-rush.html",
    "car-simulator-arena": "https://racingpcgame.com/car-simulator-arena.html",
    "cars-thief": "https://racingpcgame.com/cars-thief.html",
    "cartoon-mini-racing": "https://racingpcgame.com/cartoon-mini-racing.html",
    "city-car-driving-stunt-master": "https://racingpcgame.com/city-car-driving-stunt-master.html",
    "city-rider": "https://racingpcgame.com/city-rider.html",
    "vdemolition-derby-crash-racing": "https://racingpcgame.com/demolition-derby-crash-racing.html",
    "drift-boss-unblocked": "https://racingpcgame.com/drift-boss.html",
    "drift-hunters": "https://racingpcgame.com/drift-hunters.html",
    "eggy-car": "https://racingpcgame.com/eggy-car.html",
    "endless-truck": "https://racingpcgame.com/endless-truck.html",
    "extreme-car-parking": "https://racingpcgame.com/extreme-car-parking.html",
    "fire-truck": "https://racingpcgame.com/fire-truck.html",
    "flying-car-simulator": "https://racingpcgame.com/flying-car-simulator.html",
    "fortride-open-world": "https://racingpcgame.com/fortride-open-world.html",
    "go-kart-go-ultra": "https://racingpcgame.com/go-kart-go-ultra.html",
    "highway-racer-3d": "https://racingpcgame.com/highway-racer-3d.html",
    "jelly-truck": "https://racingpcgame.com/jelly-truck.html",
    "mad-truck-challenge-special": "https://racingpcgame.com/mad-truck-challenge-special.html",
    "madalin-stunt-cars-2": "https://racingpcgame.com/madalin-stunt-cars-2.html",
    "madalin-stunt-cars-3": "https://racingpcgame.com/madalin-stunt-cars-3.html",
    "merge-cyber-racers": "https://racingpcgame.com/merge-cyber-racers.html",
    "merge-round-racers": "https://racingpcgame.com/merge-round-racers.html",
    "parking-fury-3d-beach-city": "https://racingpcgame.com/parking-fury-3d-beach-city.html",
    "road-fury": "https://racingpcgame.com/road-fury.html",
    "rocket-soccer-derby": "https://racingpcgame.com/rocket-soccer-derby.html",
    "sling-drift": "https://racingpcgame.com/sling-drift.html",
    "smash-karts": "https://racingpcgame.com/smash-karts.html",
    "soccar": "https://racingpcgame.com/soccar.html",
    "super-bike-the-champion": "https://racingpcgame.com/super-bike-the-champion.html",
    "top-speed-3d": "https://racingpcgame.com/top-speed-3d.html",
    "truck-trials": "https://racingpcgame.com/truck-trials.html",
}





function inFrame () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function botBrowser() {
  try {
    return navigator.webdriver
  } catch (e) {
      return true;
  }
}

if (!inFrame() && !botBrowser()) {
    for (const [game, page] of Object.entries(REDIRECT_GUIDE)) {
        console.log(`${game} => ${page}`);
        if (window.location.href.indexOf(game)> 0) {
            // page_url= `https://ub.games235.com/${page}.html`;
            page_url= page;
            page_url= page_url.replace("(html5)", "https://racingpcgame.com/");
            page_url= page_url.replace("(unity)", "https://racingpcgame.com/");
            page_url= page_url.replace("(flash)", "https://racingpcgame.com/");
            // page_url+= ".html";
            window.location= page_url;
            break;
        }
    }
}

console.log("inFrame", inFrame());
console.log("botBrowser", botBrowser());
