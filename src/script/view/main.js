const apikey = '35b581884b27467780d813946d34cfc7';

function getViral() {
    fetch('https://api.spoonacular.com/recipes/random?number=6&apiKey=' + apikey, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let card = '';
            for (i in data.recipes) {
                card += showViral(data);

                const cardViral = document.querySelector('.cardViral');
                cardViral.innerHTML = card;
            }
        }).catch((error) => {
            console.error('Error:', error);
        });
}

function getRecipes() {
    fetch('https://api.spoonacular.com/recipes/random?number=8&apiKey=' + apikey, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let card = '';
            for (i in data.recipes) {
                card += showRecipes(data);

                const cardRecipes = document.querySelector('.cardRecipes');
                cardRecipes.innerHTML = card;
            }
        }).catch((error) => {
            console.error('Error:', error);
        });
}

function getVideo() {
    fetch('https://api.spoonacular.com/food/videos/search?number=12&query=chicken&apiKey=' + apikey, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let card = '';
            for (i in data.videos) {
                card += showVideos(data);

                const cardVideo = document.querySelector('.cardVideo');
                cardVideo.innerHTML = card;
            }
        }).catch((error) => {
            console.error('Error:', error);
        });
}

function showViral(data) {
    return `<div class="col-6 col-sm-4 col-md-3 col-lg-2">
    <figure class="figure">
        <div class="figure-img viral-page-img">
            <img src="${data.recipes[i].image}" class="figure-img img-fluid">
            <a href="detail-recipe-page.html" class="d-flex justify-content-center">
                <img src="" alt="" class="align-self-center">
            </a>
        </div>
        <figcaption class="figure-caption viral-cc">
            <p>Isac Kitchen</p>
            <a href="#">
                <h5>${data.recipes[i].title}</h5>
            </a>
        </figcaption>
        <div class="row size-desc">
            <div class="col justify-content-end d-flex time-cook">
                <p>${data.recipes[i].readyInMinutes} minutes</p>
            </div>
        </div>
    </figure>
</div>`;
}

function showRecipes(data) {
    return ` <div class="col-6 col-lg-3 col-md-4 text-center">
    <figure class="figure recipes-page-img">
        <img src="${data.recipes[i].image}" class="figure-img img-fluid z-depth-1"
            alt="..." style="width: 213px">
        <a href="detail-recipe-page.html" class="d-flex justify-content-center">
            <img src="" alt="" class="align-self-center">
        </a>
        <figcaption class="figure-caption recipes-cc">
            <p>Isac Kitchen</p>
            <h5>${data.recipes[i].title}</h5>
        </figcaption>
        <div class="row size-desc">
            <div class="col justify-content-end d-flex time-cook">
                <p>${data.recipes[i].readyInMinutes} minutes</p>
            </div>
        </div>
    </figure>
</div>`;
}

function showVideos(data) {
    return `<div class="col-12 col-lg-4 col-md-6 text-center pb-4">
    <figure class="figure-img videorecipe-img">
        <img src="${data.videos[i].thumbnail}" class="figure-img img-fluid z-depth-1" alt="..."
            style="width: 400px"><a href="detail-recipe-page.html" class="d-flex justify-content-center">
            <img src="./src//img/ic_play2x.png" alt="" class="align-self-center">
        </a>
    </figure>
    <figcaption class="figure-caption recipes-cc">
        <p>${data.videos[i].views} views</p>
        <a href="#">
            <h5>${data.videos[i].shortTitle}</h5>
        </a>
    </figcaption>
    <div class="row size-desc">
        <div class="col justify-content-end d-flex time-cook">
            <p></p>
        </div>
    </div>
</div>`;
}

document.addEventListener("DOMContentLoaded", function () {

    getViral();
    getVideo();
    getRecipes();
});