const apikey = '812e6cf081e840de876997fc8260d956';

const searchButton = document.querySelector('.searchBtn');

searchButton.addEventListener('click', async function () {
    try {
        const inputKeyword = document.querySelector('.keyword');
        const recipes = await getRecipes(inputKeyword.value);
        document.querySelector('main').innerHTML = '';
        let page = '';
        // console.log(page);
        setTimeout(() => {
            let result = updateResult(recipes);
            document.querySelector('.recipeResult').innerHTML = result;
            let widget = updateWidget(recipes);
            document.querySelector('.cardWidget').innerHTML = widget;
        }, 300);
    } catch (err) {
        alert(err);
    }
    page = page();
    document.querySelector('main').innerHTML = page;
});

function getRecipes(keyword) {
    return fetch('https://api.spoonacular.com/recipes/search?query=' + keyword + '&number=12&apiKey=' + apikey)
        .then(response => {
            if (response.ok === "false") {
                throw new Error(response.statusText);
                // console.log('gagal');

            }
            return response.json();
            // console.log(respon.json());
        })
        .then(response => {
            if (response.Response === "false") {
                throw new Error(response.Error);

            }
            // console.log(response);
            return response.results;
        });
}

function getWidget() {
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
                cards += showWidget(recipes);

                const cardWidget = document.querySelector('.cardWidget');
                cardWidget.innerHTML = cards;
            }
        }).catch((error) => {
            console.error('Error:', error);
        });
}

function showWidget(data) {
    return `<div class="row mt-2">
    <div class="col-md-6 widget-img ">
        <img src="${data.recipes[i].image}" class="card-img" alt="...">
        <a href="#" class="d-flex justify-content-center">
            <img src="" alt="" class="align-self-center">
        </a>
    </div>
    <div class="col-md-6">
        <div class="card-body">
            <a href="#">
                <p class="widget-title">${data.recipes[i].servings} person</p>
            </a>
            <a href="#">
                <p class="widget-name">${data.recipes[i].title}</p>
            </a>
        </div>
    </div>
</div>`;
}

function page() {
    return ` <!-- jumbotron -->
    <div class="container">
        <div class="jumbotron jumbotron-fluid text-white img-fluid" id="home"
            style="background-image: url(./src/img/jumbotron.png); height: 500px;">
        </div>
    </div>
    <!-- recipes-content -->
    <section class="recipes">
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-1">
                    <div class="row">
                        <div class="col total-recipe-title">
                            <p>12 RECIPES</p>
                            <hr>
                        </div>
                    </div>
                    <div class="row recipeResult"> 
                        
                    </div>
                    <div class="row pt-5 mb-5">
                        <div class="col text-center d-flex justify-content-center align-items-center my-auto">
                            <hr>
                            <button type=" button" class="btn btn-outline-secondary btn-md rounded-0 m-2">See
                                More</button>
                            <hr>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 offset-md-1 d-none d-lg-block d-print-block ">
                    <div class="row mt-5">
                        <div class="col-md-3">
                            <!-- masako -->
                            <div class="card" style="width: 260px; height: 390px;">
                                <img src="./src/img/banner-indomie.png" class="card-img-top" alt="...">
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-12 side-bar-title">
                            <p>YOU ARE CURRENTLY COOKING</p>
                            <hr>
                        </div>
                    </div>
                    <div class="cardWidget">

                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    <!-- tags -->
    <section class="tags pt-5 mb-5">
        <div class="container bg-light pt-4" style="width: 100%; height: 400px;">
            <div class="row text-center pt-5 mb-5">
                <div class="col">
                    <h3>TOP TAGS ON THE WEB</h3>
                    <p style="color:#EB4A36 ;">Get Inspired by what Indonesia are looking for the most</p>
                </div>
            </div>
            <div class="row justify-content-center px-5">
                <div class="col-3 col-lg-2 col-md-3 text-center mb-3">
                    <button type="button" class="btn btn-secondary rounded-pill btn-sm">Beverages</button>
                </div>
                <div class="col-3 col-lg-2 col-md-3 text-center mb-3">
                    <button type="button" class="btn btn-secondary rounded-pill btn-sm">Beverages</button>
                </div>
                <div class="col-3 col-lg-2 col-md-3 text-center mb-3">
                    <button type="button" class="btn btn-secondary rounded-pill btn-sm">Beverages</button>
                </div>
                <div class="col-3 col-lg-2 col-md-3 text-center mb-3">
                    <button type="button" class="btn btn-secondary rounded-pill btn-sm">Beverages</button>
                </div>
                <div class="col-3 col-lg-2 col-md-3 text-center mb-3">
                    <button type="button" class="btn btn-secondary rounded-pill btn-sm">Beverages</button>
                </div>
                <div class="col-3 col-lg-2 col-md-3 text-center mb-3">
                    <button type="button" class="btn btn-secondary rounded-pill btn-sm">Beverages</button>
                </div>
                <div class="col-3 col-lg-2 col-md-3 text-center mb-3">
                    <button type="button" class="btn btn-secondary rounded-pill btn-sm">Beverages</button>
                </div>
                <div class="col-3 col-lg-2 col-md-3 text-center mb-3">
                    <button type="button" class="btn btn-secondary rounded-pill btn-sm">Beverages</button>
                </div>
                <div class="col-3 col-lg-2 col-md-3 text-center mb-3">
                    <button type="button" class="btn btn-secondary rounded-pill btn-sm">Beverages</button>
                </div>
                <div class="col-3 col-lg-2 col-md-3 text-center mb-3">
                    <button type="button" class="btn btn-secondary rounded-pill btn-sm">Beverages</button>
                </div>
                <div class="col-3 col-lg-2 col-md-3 text-center mb-3">
                    <button type="button" class="btn btn-secondary rounded-pill btn-sm">Beverages</button>
                </div>
            </div>
        </div>
    </section>
    <!-- brand-start -->
    <section>
        <brand-bar></brand-bar>
    </section>`;
}


function updateResult(r) {
    let cards = '';
    for (x in r) {
        cards += `<div class="col-md-4">
        <figure class="figure">
            <div class="figure-img viral-page-img">
                <img src="https://spoonacular.com/recipeImages/${r[x].id}-556x370.jpg" class="figure-img img-fluid"
                    style="">
                <a href="detail-recipe-page.html" class="d-flex justify-content-center">
                    <img src="" alt="" class="align-self-center">
                </a>
            </div>
            <figcaption class="figure-caption recipe-title">
                <p>${r[x].servings} person</p>
                <a href="detail-recipe-page.html">
                    <h5>${r[x].title}</h5>
                </a>
            </figcaption>
            <div class="row size-desc">
                <div class="col justify-content-end d-flex time-cook">
                    <p>${r[x].readyInMinutes} minutes</p>
                </div>
            </div>
        </figure>
    </div>`;
    }
    return cards;
}

function updateWidget(r) {
    let cards = '';
    for (x in r) {
        cards += `<div class="row mt-4">
        <div class="col-md-6 widget-img-search ">
            <img src="https://spoonacular.com/recipeImages/${r[x].id}-556x370.jpg" class="card-img" alt="...">
            <a href="#" class="d-flex justify-content-center">
                <img src="" alt="" class="align-self-center">
            </a>
        </div>
        <div class="col-md-6">
            <div class="card-body">
                <a href="#">
                    <p class="widget-title">${r[x].servings} person</p>
                </a>
                <a href="#">
                    <p class="widget-name">${r[x].title}</p>
                </a>
            </div>
        </div>
    </div>`;
    }
    return cards;
}

document.addEventListener("DOMContentLoaded", function () {

    getWidget();
});