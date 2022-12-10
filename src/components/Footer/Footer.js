import { Container } from "./Footer.styled";

export default function Footer(props) {
  return (
    <Container>
      <img src={props.img} alt="Imagem" />
      <p>
        {props.title}
        {props.showtime ? (
          <>
            <br />
            {props.showtime}
          </>
        ) : null}
      </p>
    </Container>
  );
}
