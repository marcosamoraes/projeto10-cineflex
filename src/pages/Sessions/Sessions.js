import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, TimeBox, Title } from "./Sessions.styled";
import Footer from "../../components/Footer/Footer";

export default function Sessions() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`movies/${id}/showtimes`)
      .then(({ data }) => {
        setMovie(data);
      })
      .catch((err) => {
        console.log("🚀 ~ file: Sessions.js:18 ~ useEffect ~ err", err);
      });
  }, [id]);

  return (
    <>
      <Container>
        <Title>
          <h2>Selecione o horário</h2>
        </Title>
        {movie.days?.map((day) => {
          return (
            <TimeBox key={day.id} data-test="movie-day">
              <p>
                {day.weekday} - {day.date}
              </p>
              {day.showtimes?.map((showtime) => {
                return (
                  <Link to={`/assentos/${showtime.id}`}>
                    <button data-test="showtime">{showtime.name}</button>
                  </Link>
                );
              })}
            </TimeBox>
          );
        })}
      </Container>
      <Footer img={movie.posterURL} title={movie.title} />
    </>
  );
}
