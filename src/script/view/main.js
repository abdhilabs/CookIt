function getViral() {
    fetch('https://api.spoonacular.com/recipes/random?number=6&apiKey=f7e29ac5cdf44e008bbf384c84d48c3f', {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => response.json()).then(data => {
        // console.log(data);
        let card = '';
        for (i in data.recipes) {
            card += `<div class="col-6 col-sm-4 col-md-3 col-lg-2">
            <figure class="figure">
                <div class="figure-img viral-page-img">
                    <img src="${data.recipes[i].image}" class="figure-img img-fluid">
                    <a href="#" class="d-flex justify-content-center">
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

            const cardViral = document.querySelector('.cardViral');
            cardViral.innerHTML = card;
        }
    }).catch((error) => {
        console.error('Error:', error);
    });
}

document.addEventListener("DOMContentLoaded", function () {

    getViral();
});