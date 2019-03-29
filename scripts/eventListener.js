/*
            <div class="iframe">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/3TFdE_pSusw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
*/
document.getElementById("signin-button").addEventListener("click", function(event) {
    event.preventDefault();
    let results1 = '<button id="like-button" onclick="handleLikeClick()">Like</button>';
    document.getElementById("like-button_space").innerHTML = results1;
    let results2 = '<button id="dislike-button" onclick="handleLikeClick()">Disike</button>';
    document.getElementById("dislike-button_space").innerHTML = results2;
});
