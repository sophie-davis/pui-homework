const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const chosenState = params.get('state');
const headerElement = document.querySelector('#stateTitle');
headerElement.innerText = chosenState;






const states = {
    "Alabama": {
        "stateFlower": "Camellia",
        "stateBird": "Yellowhammer", 
        "stateCapital":"Montgomery",
        "largestCity":"Birmingham",
        "stateNickname":"The Heart of Dixie",
        "statehood":"1819 - 22nd State",
        "stateAbbreviation":"AL",
        "notableMusicians":"Nat King Cole",
        "stateFood": "Lane Cake",       
    }, 
    "Alaska": {
        "stateFlower": "Forget-Me-Not",
        "stateBird": "Willow Ptarmigan", 
        "stateCapital":"Juneau",
        "largestCity":"Anchorage",
        "stateNickname":"The Last Frontier",
        "statehood":"1959 - 49th State",
        "stateAbbreviation":"AK",
        "notableMusicians":"Jewel",
        "stateFood": "Giant King Salmon",       
    },
    "Arizona": {
        "stateFlower": "Saguaro Cactus Blossom",
        "stateBird": "Cactus Wren", 
        "stateCapital":"Phoenix",
        "largestCity":"Phoenix",
        "stateNickname":"The Grand Canyon State",
        "statehood":"1912 - 48th State",
        "stateAbbreviation":"AZ",
        "notableMusicians":"Stevie Nicks",
        "stateFood": "Apache Trout",       
    },
    "Arkansas": {
        "stateFlower": "Apple Blossom",
        "stateBird": "Mockingbird", 
        "stateCapital":"Little Rock",
        "largestCity":"Little Rock",
        "stateNickname":"The Natural State",
        "statehood":"1836 - 25th State",
        "stateAbbreviation":"AR",
        "notableMusicians":"Johnny Cash",
        "stateFood": "Rice",       
    },
    "California": {
        "stateFlower": "California Poppy",
        "stateBird": "California Valley Quail", 
        "stateCapital":"Sacramento",
        "largestCity":"Los Angeles",
        "stateNickname":"The Golden State",
        "statehood":"1850 - 31st State",
        "stateAbbreviation":"CA",
        "notableMusicians":"Snoop Dogg",
        "stateFood": "Pistachios",       
    },
    "Colorado": {
        "stateFlower": "White and Lavender Columbine",
        "stateBird": "Lark Bunting", 
        "stateCapital":"Denver",
        "largestCity":"Denver",
        "stateNickname":"The Centennial State",
        "statehood":"1876 - 38th State",
        "stateAbbreviation":"CO",
        "notableMusicians":"The Lumineers",
        "stateFood": "The Snowball",       
    },
    "Connecticut": {
        "stateFlower": "Mountain Laurel",
        "stateBird": "American Robin", 
        "stateCapital":"Hartford",
        "largestCity":"Bridgeport",
        "stateNickname":"The Constitution State",
        "statehood":"1788 - 5th State",
        "stateAbbreviation":"CT",
        "notableMusicians":"John Mayer",
        "stateFood": "Pizza",       
    },
    "Delaware": {
        "stateFlower": "Peach Blossom",
        "stateBird": "Blue Hen", 
        "stateCapital":"Dover",
        "largestCity":"Wilmington",
        "stateNickname":"The First State",
        "statehood":"1787 - 1st State",
        "stateAbbreviation":"DE",
        "notableMusicians":"Jimmie Allen",
        "stateFood": "Peach Pie",       
    },
    "Florida": {
        "stateFlower": "Orange Blossom",
        "stateBird": "Mockingbird", 
        "stateCapital":"Tallahassee",
        "largestCity":"Jacksonville",
        "stateNickname":"The Sunshine State",
        "statehood":"1845 - 27th State",
        "stateAbbreviation":"FL",
        "notableMusicians":"Ariana Grande",
        "stateFood": "Oranges",       
    },
    "Georgia": {
        "stateFlower": "Cherokee Rose",
        "stateBird": "Brown Thrasher", 
        "stateCapital":"Atlanta",
        "largestCity":"Atlanta",
        "stateNickname":"The Peach State",
        "statehood":"1788 - 4th State",
        "stateAbbreviation":"GA",
        "notableMusicians":"André 3000",
        "stateFood": "Grits",       
    },
    "Hawaii": {
        "stateFlower": "Yellow Hibiscus",
        "stateBird": "Nene", 
        "stateCapital":"Honolulu",
        "largestCity":"Honolulu",
        "stateNickname":"The Aloha State",
        "statehood":"1959 - 50th State",
        "stateAbbreviation":"HI",
        "notableMusicians":"Israel Kamakawiwo'ole",
        "stateFood": "Saimin",       
    },
    "Idaho": {
        "stateFlower": "Syringa",
        "stateBird": "Mountain Bluebird", 
        "stateCapital":"Boise",
        "largestCity":"Boise",
        "stateNickname":"The Gem State",
        "statehood":"1890 - 43rd State",
        "stateAbbreviation":"ID",
        "notableMusicians":"Josh Ritter",
        "stateFood": "Potatoes",       
    },
    "Illinois": {
        "stateFlower": "Violet",
        "stateBird": "Northern Cardinal", 
        "stateCapital":"Springfield",
        "largestCity":"Chicago",
        "stateNickname":"The Prairie State",
        "statehood":"1818 - 21st State",
        "stateAbbreviation":"IL",
        "notableMusicians":"Miles Davis",
        "stateFood": "Popcorn",       
    },
    "Indiana": {
        "stateFlower": "Peony",
        "stateBird": "Cardinal", 
        "stateCapital":"Indianapolis",
        "largestCity":"Indianapolis",
        "stateNickname":"The Hoosier State",
        "statehood":"1816 - 19th State",
        "stateAbbreviation":"IN",
        "notableMusicians":"Michael Jackson",
        "stateFood": "Sugar Cream Pie",       
    },
    "Iowa": {
        "stateFlower": "Wild Rose",
        "stateBird": "Eastern Goldfinch", 
        "stateCapital":"Des Moines",
        "largestCity":"Des Moines",
        "stateNickname":"The Hawkeye State",
        "statehood":"1846 - 29th State",
        "stateAbbreviation":"IA",
        "notableMusicians":"Adam Young",
        "stateFood": "Sweet Potato",       
    },
    "Kansas": {
        "stateFlower": "Sunflower",
        "stateBird": "Western Meadowlark", 
        "stateCapital":"Topeka",
        "largestCity":"Wichita",
        "stateNickname":"The Sunflower State",
        "statehood":"1861 - 34th State",
        "stateAbbreviation":"KS",
        "notableMusicians":"Janelle Monáe",
        "stateFood": "Sandhill Plum",       
    },
    "Kentucky": {
        "stateFlower": "Goldenrod",
        "stateBird": "Cardinal", 
        "stateCapital":"Frankfort",
        "largestCity":"Louisville",
        "stateNickname":"The Bluegrass State",
        "statehood":"1792 - 15th State",
        "stateAbbreviation":"KY",
        "notableMusicians":"Chris Stapleton",
        "stateFood": "Blackberry",       
    },
};

const headerElement2= document.querySelector('.card-text-flower');
headerElement2.innerText=states[chosenState].stateFlower;

const headerElement3= document.querySelector('.card-text-bird');
headerElement3.innerText=states[chosenState].stateBird;

const headerElement4= document.querySelector('.card-text-capital');
headerElement4.innerText=states[chosenState].stateCapital;

const headerElement5= document.querySelector('.card-text-city');
headerElement5.innerText=states[chosenState].largestCity;

const headerElement6= document.querySelector('.card-text-nickname');
headerElement6.innerText=states[chosenState].stateNickname;

const headerElement7= document.querySelector('.card-text-statehood');
headerElement7.innerText=states[chosenState].statehood;

const headerElement8= document.querySelector('.card-text-abbreviation');
headerElement8.innerText=states[chosenState].stateAbbreviation;

const headerElement9= document.querySelector('.card-text-musician');
headerElement9.innerText=states[chosenState].notableMusicians;

const headerElement10= document.querySelector('.card-text-food');
headerElement10.innerText=states[chosenState].stateFood;

