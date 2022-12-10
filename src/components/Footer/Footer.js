import { Container } from "./Footer.styled";

export default function Footer(props) {
  return (
    <Container data-test="footer">
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
