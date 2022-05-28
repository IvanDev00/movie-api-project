import fetchData from "./fetchData.js";
import config from "./config.js";
const form = document.getElementById("search_form");
const row = document.querySelector(".row");

const IMAGE_BASE_URL = config.IMAGE_BASE_URL;

const renderMovie = async () => {
  const { data } = await fetchData("upcoming");

  renderMovieList(data.results);
};

export default renderMovie;

const searchHandler = async (event) => {
  event.preventDefault();
  let query = document.getElementById("search").value;
  const { data } = await fetchData("search", query);

  if (!query) {
    renderMovie();
  }

  if (data.results.length >= 1) {
    renderMovieList(data.results);
  } else {
    renderNoResultFound(query);
  }
};

form.addEventListener("submit", searchHandler);

const renderMovieList = (data) => {
  row.innerHTML = data
    .map((movie) => {
      return `
            <a href="single-movie.html?movie=${
              movie.id
            }" onclick="return false" ondblclick="location=this.href">
            <div class="card hvr">
               <img class="card__image" src="${
                 IMAGE_BASE_URL + movie.poster_path
               }" alt="" />
               <div class="card__details">
                  <div class="card__content">
                     <span class="card__header">Title</span>
                     <h1 class="card__title ellipsis">${
                       movie.title || "N/A"
                     }</h1>
                  </div>
                  <div class="card__content">
                     <span class="card__header">Release Date</span>
                     <h2 class="card__genre ellipsis">${
                       movie.release_date || "N/A"
                     }</h2>
                  </div>
               </div>
            </div>
            </a>
           `;
    })
    .join("");
};

const renderNoResultFound = (query) => {
  row.innerHTML = `
      <h1 class="no-result">No Result Found for "${query}"</h1>
  `;
};
