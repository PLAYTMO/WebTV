const arrows = document.querySelectorAll(".fa-arrow-right");
const movielists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        clickCounter++;
        if(itemNumber - (4+clickCounter) >= 0) {
        movielists[i].style.transform = 'translateX(
            ${movielists[i].computedStyleMap().get("transform")[0].x.value
        -100}px)';
        } else {
        movielists[i].style.transform = "translateX(0)";
    }
    });

    console.log(movielists[i].querySelectorAll("img").length)
});