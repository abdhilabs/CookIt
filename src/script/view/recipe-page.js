const apikey = '35b581884b27467780d813946d34cfc7';

function getRecipe() {
    fetch('https://api.spoonacular.com/recipes/random?number=12&apiKey=' + apikey, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            let card = '';
            for (i in data.recipes) {
                card += showRecipe(data);

                const recipeContent = document.querySelector('.recipeContent');
                recipeContent.innerHTML = card;
            }
        }).catch((error) => {
            console.error('Error:', error);
        });
}

function getWidgetRecipePage() {
    fetch('https://api.spoonacular.com/recipes/random?number=4&apiKey=' + apikey, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let cards = '';
            for (i in data.recipes) {
                cards += showWidgetRecipePage(data);

                const cardWidget = document.querySelector('.cardWidget');
                cardWidget.innerHTML = cards;
            }
        }).catch((error) => {
            console.error('Error:', error);
        });
}

function showRecipe(data) {
    return `<div class="col-md-4">
    <figure class="figure">
        <div class="figure-img viral-page-img">
            <img src="${data.recipes[i].image}" class="figure-img img-fluid"
                style="">
            <a href="detail-recipe-page.html" class="d-flex justify-content-center">
                <img src="" alt="" class="align-self-center">
            </a>
        </div>
        <figcaption class="figure-caption recipe-title">
            <p>${data.recipes[i].servings} person</p>
            <a href="detail-recipe-page.html">
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

function showWidgetRecipePage(data) {
    return `<div class="row mt-4">
    <div class="col-md-6 widget-img ">
        <img src="${data.recipes[i].image}" class="card-img" alt="...">
        <a href="#" class="d-flex justify-content-center">
            <img src="" alt="" class="align-self-center">
        </a>
    </div>
    <div class="col-md-6">
        <div class="card-body">
            <a href="#">
                <p class="widget-title">Isac Kitchen</p>
            </a>
            <a href="#">
                <p class="widget-name">${data.recipes[i].title}</p>
            </a>
        </div>
    </div>
</div>`;
}

document.addEventListener("DOMContentLoaded", function () {

    getRecipe();
    getWidgetRecipePage();
});