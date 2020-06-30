import 'regenerator-runtime';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/main.css";
import "./script/component/app-bar.js";
import '@fortawesome/fontawesome-free/js/fontawesome';
import "./script/component/footer.js";
import "./script/component/brand-bar.js";
import "./script/component/chef-bar.js";
import "./script/view/main.js";
import "./script/view/recipe-page.js";
import "./script/view/recipe-search.js";
import {
    $,
    jQuery
} from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;