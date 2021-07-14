const fs = require("fs");
const{add, del, list, update} = require(".utils")
let movieList=[];

try {
    let tempJson = fs.readFileSync("./netflix.json");
    let tempNetflix = JSON.parse(tempJson)
    movieList.push(tempNetflix);
} 
catch (error) {
    movieList = []
}

const app = () => {
    if (process.argv[2] === "add") {
        add(movieList, process.argv[3]);
    } else if (process.argv[2] === "del") {
        del(movieList, process.argv[3]);
    } else if (process.argv[2] === "list") {
        list(movieList, process.argv[3]);
    } else if (process.argv[2] === "update")
        update(movieList, process.argv[3]);
}

app();
// const add = () => {
//    if (process.argv[2] === "add") {
//        tempMovie = {movie: process.argv[3]};
//        movieList.push(tempMovie)
//       let stringMovieList = JSON.stringify(movieList);
//       console.log(movieList);
//        fs.writeFileSync("./netflix.json", stringMovieList);
//     };
// };

// add();