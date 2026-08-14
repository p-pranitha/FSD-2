 let movieTitle: string = "Baahubali";
let releaseYear: number = 2015;
let isBlockbuster: boolean = true;

function getMovieStatus(title: string, year: number): string {
    return `${title} was released in ${year}.`;
}

let leadActors: string[] = [
    "Prabhas",
    "Rana Daggubati",
    "Anushka Shetty",
    "Tamannaah"
];
let summary: string = getMovieStatus(movieTitle, releaseYear);

console.log("Movie:", movieTitle);
console.log("Release Year:", releaseYear);
console.log("Blockbuster:", isBlockbuster);
console.log("Lead Actors:", leadActors);
console.log("Summary:", summary);