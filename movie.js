let ratings = [];

function rateMovie(stars) {

    ratings.push(stars);

    let total = 0;

    for(let i = 0; i < ratings.length; i++) {
        total += ratings[i];
    }

    let average = total / ratings.length;

    document.getElementById("average").innerText =
        "Average Rating: " + average.toFixed(1);
}