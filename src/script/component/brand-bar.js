class Brand extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<div class="container">
        <div class="row p-5 text-center mb-2">
            <div class="col-12 col-lg-4 col-md-4 mb-4">
                <a href="https://www.ajinomoto.co.id/id" target="_blank"><img src="./src/img/Path 20.png" alt=""
                        class="img-fluid"></a>
            </div>
            <div class="col-12 col-lg-4 col-md-4 mb-4">
                <a href="https://www.indofood.com/" target="_blank"><img src="./src/img/Group 76.png" alt=""
                        class="img-fluid"></a>
            </div>
            <div class="col-12 col-lg-4 col-md-4 mb-4">
                <a href="https://www.unilever.co.id/" target="_blank"><img src="./src/img/path4456.png" alt=""
                        class="img-fluid"></a>
            </div>
        </div>
    </div>`;
    }
}

customElements.define("brand-bar", Brand);