const API_KEY = "1bfdbff05c2698dc917dd28c08d41096";
const BASE_URL = "https://api.themoviedb.org/3/";
let click = document.getElementById("view");

function showlist(data) {
  const row = document.querySelector(".row");

  row.innerHTML = data
    .map((movie) => {
      return `
          <a onclick="return false" ondblclick="location = this.href" onclick="clickHandler(${movie.id})" href="/single-movie.html">
                <div>${movie.title}</div>
             </a>`;
    })
    .join("");
}

const searchAnime = async (event) => {
  event.preventDefault();

  let query = document.getElementById("search").value;

  const response = await axios.get(
    query
      ? `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
      : `${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  );
  const data = response.data.results;
  showlist(data);
};

function pageLoaded() {
  const form = document.getElementById("search_form");
  form.addEventListener("submit", searchAnime);
}

if (window.location.pathname.split("/")[1]) {
}
window.addEventListener("load", searchAnime);

pageLoaded();

const clickHandler = async (id) => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`,
  );
  const data = response.data;

  singleData(data);
};

function singleData(data) {
  const { title, popularity, vote_count } = data;
  const single = document.querySelector("#single-movie");

  console.log(title);
}

singleData();
