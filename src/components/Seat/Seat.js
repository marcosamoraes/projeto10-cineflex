import { Button } from "./Seat.styled";

export default function Seat(props) {
  const isSelected = (id) => {
    return props.selectedSeats.includes(id);
  };

  const selectSeat = (id, index) => {
    if (!isSelected(id)) {
      props.setSelectedSeats((selectedSeats) => [...selectedSeats, id]);
      props.setSelectedSeatsIndex((selectedSeatsIndex) => [...selectedSeatsIndex, index]);
    } else {
      props.setSelectedSeats(props.selectedSeats.filter((seat) => seat !== id));
      props.setSelectedSeatsIndex(props.selectedSeatsIndex.filter((seatIndex) => seatIndex !== index));
    }
  };

  return (
    <>
      {props.seat.isAvailable ? (
        <Button
          className={isSelected(props.seat.id) ? "selected" : null}
          onClick={() => selectSeat(props.seat.id, props.index+1)}
          data-test="seat"
        >
          {String(props.index + 1).padStart(2, "0")}
        </Button>
      ) : (
        <Button
          className={"unavailable"}
          onClick={() => alert('Esse assento não está disponível')}
          data-test="seat"
        >
          {String(props.index + 1).padStart(2, "0")}
        </Button>
      )}
    </>
  );
}
