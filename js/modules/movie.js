import getUpcomingMovie from "./upcomingMovie.js";

const renderMovie = async () => {
   const { data } = await getUpcomingMovie();
};

export default renderMovie;
