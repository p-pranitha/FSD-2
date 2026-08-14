"use strict";
let movieTitle = "Baahubali";
let releaseYear = 2015;
let isBlockbuster = true;
function getMovieStatus(title, year) {
    return `${title} was released in ${year}.`;
}
let leadActors = [
    "Prabhas",
    "Rana Daggubati",
    "Anushka Shetty",
    "Tamannaah"
];
let summary = getMovieStatus(movieTitle, releaseYear);
console.log("Movie:", movieTitle);
console.log("Release Year:", releaseYear);
console.log("Blockbuster:", isBlockbuster);
console.log("Lead Actors:", leadActors);
console.log("Summary:", summary);
