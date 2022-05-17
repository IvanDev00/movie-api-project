import fetchData from "./fetchData.js";
const form = document.getElementById("search_form");
const row = document.querySelector(".row");

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
   renderMovieList(data.results);
};

form.addEventListener("submit", searchHandler);

const renderMovieList = (data) => {
   row.innerHTML = data
      .map((movie) => {
         return `
            <a href="single-movie.html?movie=${movie.id}">
                <h3>${movie.title}</h3>
            </a>
           `;
      })
      .join("");
};
