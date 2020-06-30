class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<div class="container">
        <div class="row justify-content-between">
            <div class="col-1">
                <a href="index.html">
                    <img src="./src/img/ic_logo.png" alt="">
                </a>
            </div>
            <div class="col-4 text-right">
                <a href="https://twitter.com/" target="_blank">
                    <img src="./src/img/003-twitter.png" alt="">
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <img src="./src/img/002-instagram.png" alt="">
                </a>
                <a href="https://web.facebook.com/" target="_blank">
                    <img src="./src/img/001-facebook (2).png" alt="">
                </a>
            </div>
        </div>
        <div class="row mt-3 justify-content-between">
            <div class="col-5">
                <p>All right reserved by <span>Cookit.com</span> 2020</p>
            </div>
            <div class="col-6 ">
                <nav class="nav justify-content-end text-uppercase">
                    <a class="nav-link active" href="#">Jobs</a>
                    <a class="nav-link" href="#">developer</a>
                    <a class="nav-link" href="#">Terms</a>
                    <a class="nav-link pr-0" href="#">Privacy Policy</a>
                </nav>
            </div>
        </div>
    </div>
    `;
    }
}

customElements.define("footer-bar", Footer);