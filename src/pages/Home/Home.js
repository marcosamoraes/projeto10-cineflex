import { useEffect, useState } from "react";
import { Movie, MovieList, Title } from "./Home.styled";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("movies")
      .then(({ data }) => {
        setMovies(data);
      })
      .catch((err) => {
        console.log("🚀 ~ file: Home.js:16 ~ useEffect ~ err", err);
      });
  }, []);

  return (
    <>
      <Title>
        <h2>Selecione o filme</h2>
      </Title>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id} data-test="movie">
              <Link to={`/sessoes/${movie.id}`}>
                <img src={movie.posterURL} alt={movie.overview} />
              </Link>
            </Movie>
          );
        })}
      </MovieList>
    </>
  );
}
