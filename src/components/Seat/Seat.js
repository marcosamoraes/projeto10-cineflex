import { Button, ButtonSelected, ButtonUnavailable } from "./Seat.styled";

export default function Seat(props) {
  const isSelected = (id) => {
    return props.selectedSeats.includes(id);
  };

  const selectSeat = (id, index) => {
    if (!isSelected(id)) {
      props.setSelectedSeats((selectedSeats) => [...selectedSeats, id]);
      props.setSelectedSeatsIndex((selectedSeatsIndex) => [
        ...selectedSeatsIndex,
        index,
      ]);
    } else {
      props.setSelectedSeats(props.selectedSeats.filter((seat) => seat !== id));
      props.setSelectedSeatsIndex(
        props.selectedSeatsIndex.filter((seatIndex) => seatIndex !== index)
      );
    }
  };

  return (
    <>
      {props.seat.isAvailable ? (
        <>
          {isSelected(props.seat.id) ? (
            <ButtonSelected
              onClick={() => selectSeat(props.seat.id, props.index + 1)}
              data-test="seat"
            >
              {String(props.index + 1).padStart(2, "0")}
            </ButtonSelected>
          ) : (
            <Button
              onClick={() => selectSeat(props.seat.id, props.index + 1)}
              data-test="seat"
            >
              {String(props.index + 1).padStart(2, "0")}
            </Button>
          )}
        </>
      ) : (
        <ButtonUnavailable
          onClick={() => alert("Esse assento não está disponível")}
          data-test="seat"
        >
          {String(props.index + 1).padStart(2, "0")}
        </ButtonUnavailable>
      )}
    </>
  );
}
