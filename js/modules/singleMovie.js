import fetchData from "./fetchData.js";
import config from "./config.js";

const row = document.querySelector(".movie-data-row");
const rowSimilar = document.querySelector(".similar-movies-row");
const IMAGE_BASE_URL = config.IMAGE_BASE_URL;

const getSingleMovie = async () => {
  const pathName = window.location.href.split("/")[3];
  const movieId = pathName.split("?")[1].split("=")[1];
  const { data: singleData } = await fetchData("single", "", movieId);
  const { data: similarData } = await fetchData("similar", "", movieId);

  renderMovie(singleData);
  renderSimilarMovie(similarData.results);
};

const renderMovie = (data) => {
  row.innerHTML = `
      <div class="single-movie__content">
        <div class="single-movie__bg">
          <img class="single-movie__bg-img" src="${
            IMAGE_BASE_URL + data.backdrop_path
          }" alt="" />
        </div>
        <div class="single-movie__main-info">
          <div class="single-movie__poster">
            <img
              class="single-movie__poster-img"
              src="${IMAGE_BASE_URL + data.poster_path}"
              alt=""
            />
          </div>
          <div class="single-movie__info">
            <h1 class="single-movie__title">${data.title || "N/A"}</h1>
            <div class="single-movie__other">
              <span class="single-movie__label">Genre</span>
              <span class="single-movie__value">${data.genres.map(
                (item) => item.name || "N/A"
              )}</span>
            </div>
            <div class="single-movie__other">
              <span class="single-movie__label">Status</span>
              <span class="single-movie__value">${data.status || "N/A"}</span>
            </div>
            <div class="single-movie__other">
              <span class="single-movie__label">Release Date</span>
              <span class="single-movie__value">${
                data.release_date || "N/A"
              }</span>
            </div>
          </div>
        </div>
        <div class="single-movie__story">
          <h1 class="single-movie__story-label">Story</h1>
          <p class="single-movie__story-content">
           ${data.overview || "N/A"}
          </p>
        </div>
      </div>
           `;
};

const renderSimilarMovie = (data) => {
  rowSimilar.innerHTML = data
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
                   <h1 class="card__title ellipsis">${movie.title || "N/A"}</h1>
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

getSingleMovie();
