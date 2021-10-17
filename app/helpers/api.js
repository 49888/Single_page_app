const site_1 = "https://www.megapeliculasrip.net";
const site_2 = "https://fueradefoco.com.mx";



const WEB = site_1;


//Wordpress Api rest
const INFO = `${WEB}/wp-json`;//<---

const API = `${WEB}/wp-json/wp/v2`;//<---

const POSTS = `${API}/posts`;

const POSTS_EMBED = `${API}/posts?_embed`;

const PAGES = `${API}/pages`;//Paginas estatica pre definidas

const SEARCH = `${API}/search?_embed&search=`;


export default {WEB, INFO, API, POSTS, POSTS_EMBED, PAGES, SEARCH}