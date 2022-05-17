import config from "./config.js";

const BASE_URL = config.BASE_URL;
const API_KEY = config.API_KEY;
const row = document.querySelector(".row");

const fetchData = async (fetch = "upcoming", query = "", id = "") => {
   let data = [];
   let error = "";

   row.innerHTML = `<h1>Loading...</h1>`;
   try {
      const response = await axios.get(fetchVariant(fetch, query, id));
      const responseData = response.data;
      data = responseData;
   } catch (error) {
      error = error;
   }

   return { data, error };
};

export default fetchData;

const fetchVariant = (method = "upcoming", query = "", id = "") =>
   ({
      upcoming: `${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
      search: `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`,
      single: `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`,
   }[method]);
