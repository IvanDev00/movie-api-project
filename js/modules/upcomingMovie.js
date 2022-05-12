import config from "./config.js";

const BASE_URL = config.BASE_URL;
const API_KEY = config.API_KEY;

const getUpcomingMovie = async () => {
   let data = [];
   let loading = false;
   let error = "";

   loading = true;
   try {
      const response = await await axios.get(
         `${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      const responseData = response.data?.results;
      data = responseData;
   } catch (error) {
      error = error;
   } finally {
      loading = false;
   }

   return { data, loading, error };
};

export default getUpcomingMovie;
