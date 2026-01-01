export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  try {
    const endPoint =
      "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

    const endPoint2 = query
      ? `search/movie?query=${encodeURIComponent(query)}`
      : `discover/movie?sort_by=popularity.desc`;

    const response = await fetch(`${TMDB_CONFIG.BASE_URL}/${endPoint2}`, {
      method: "GET",
      headers: TMDB_CONFIG.headers,
    });
    if (!response.ok) {
      console.log(response?.statusText);
      throw new Error("Failed to fetch movies");
    }
    const data = await response.json();
    if (data) return data.results;
  } catch (error) {
    console.log(error as Error);
  }
};
