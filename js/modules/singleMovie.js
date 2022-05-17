import fetchData from "./fetchData.js";
const row = document.querySelector(".row");

const getSingleMovie = async () => {
   const pathName = window.location.href.split("/")[3];
   const movieId = pathName.split("?")[1].split("=")[1];
   const { data } = await fetchData("single", "", movieId);

   renderMovie(data);
};

const renderMovie = (data) => {
   row.innerHTML = `
                <a href="index.html">
                back
                </a>
               <h3>${data.title}</h3>
           `;
};

getSingleMovie();
