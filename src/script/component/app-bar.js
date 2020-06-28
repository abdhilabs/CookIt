class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = ` <nav class="navbar navbar-expand-lg navbar-light fixed-top my-auto">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <img src="./src/img/ic_logo-2x.png" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav text-uppercase mx-auto">
                    <li class="nav-item active my-auto">
                        <a class="nav-link nav-title-menu" href="recipe-page.html">Recipes</a>
                    </li>
                    <li class="nav-item my-auto">
                        <a class="nav-link nav-title-menu" href="#">Videorecepty</a>
                    </li>
                    <li class="nav-item my-auto">
                        <a class="nav-link nav-title-menu" href="#">Raw Materials</a>
                    </li>
                </ul>
                <div class="my-auto text-uppercase">
                    <a class="nav-link nav-title-menu" href="#"><i class="fa fa-user-circle-o fa-lg mr-2"
                            aria-hidden="true"></i>my
                        account</a>
                </div>
            </div>
        </div>
    </nav>`;
    }
}

customElements.define("app-bar", AppBar);