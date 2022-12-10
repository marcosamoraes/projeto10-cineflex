import { useState } from "react";
import { Button } from "./Seat.styled";

export default function Seat(props) {

  const isSelected = (id) => {
    return props.selectedSeats.includes(id);
  };

  const selectSeat = (id) => {
    if (!isSelected(id)) {
      props.setSelectedSeats(selectedSeats => [...selectedSeats, id]);
    } else {
      props.setSelectedSeats(props.selectedSeats.filter(seat => seat !== id));
    }
  };

  return (
    <>
      {props.seat.isAvailable ? (
        <Button
          className={isSelected(props.seat.id) ? "selected" : null}
          onClick={() => selectSeat(props.seat.id)}
        >
          {String(props.index + 1).padStart(2, "0")}
        </Button>
      ) : (
        <Button className={"unavailable"}>
          {String(props.index + 1).padStart(2, "0")}
        </Button>
      )}
    </>
  );
}
