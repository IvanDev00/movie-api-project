import config from "./config.js";

const BASE_URL = config.BASE_URL;
const API_KEY = config.API_KEY;

const getSingleMovie = async () => {
   let data = [];
   let loading = false;
   let error = "";

   loading = true;
   try {
      const response = await await axios.get(
         `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
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

export default getSingleMovie;
