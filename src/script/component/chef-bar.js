class Chef extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<div class="container">
        <div class="row text-center desc">
            <div class="col">
                <h3>OUR TOP CHEF</h3>
                <p>The best food from professional chefs</p>
            </div>
        </div>
        <div class="row pt-5">
            <div class="col-6 col-lg-3 col-md-4 text-center">
                <figure class="figure">
                    <img src="./src/img/Group 90.png" class="figure-img img-fluid">
                    <figcaption class="figure-caption text-center">
                        <h5>Chef Renata</h5>
                        <p>Master Chef Judge</p>
                    </figcaption>
                </figure>
            </div>
            <div class="col-6 col-lg-3 col-md-4 text-center">
                <figure class="figure">
                    <img src="./src/img/Group 91.png" class="figure-img img-fluid">
                    <figcaption class="figure-caption text-center">
                        <h5>Chef Gordon Ramsay</h5>
                        <p>International Chef</p>
                    </figcaption>
                </figure>
            </div>
            <div class="col-6 col-lg-3 col-md-4 text-center">
                <figure class="figure">
                    <img src="./src/img/Group 92.png" class="figure-img img-fluid">
                    <figcaption class="figure-caption text-center">
                        <h5>Chef Arnold</h5>
                        <p>Master Chef Judge</p>
                    </figcaption>
                </figure>
            </div>
            <div class="col-6 col-lg-3 col-md-4 text-center">
                <figure class="figure">
                    <img src="./src/img/Group 93.png" class="figure-img img-fluid">
                    <figcaption class="figure-caption text-center">
                        <h5>Chef Juna</h5>
                        <p>Master Chef Judge</p>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>`;
    }
}

customElements.define("chef-bar", Chef);