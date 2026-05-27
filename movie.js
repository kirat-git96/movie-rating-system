let ratings = {interstellar: [], inception: []};

function rateMovie(movieName,stars) {

    ratings[movieName].push(stars);

    let total = 0;

    for(let i = 0; i < ratings[movieName].length; i++) {
        total += ratings[movieName][i];
    }

    let average = total / ratings[movieName].length;

    document.getElementById(movieName+"-average").innerText =
        "Average Rating: " + average.toFixed(1);
}
