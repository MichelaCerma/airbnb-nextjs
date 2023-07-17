import React from "react";
import { useRouter } from "next/router";
import { roomList } from "../mocks/reservations";

function locations() {
  const router = useRouter();
  const onHandleClick = (id) => router.push(`/locations/${id}`);
  return (
    <>
      {roomList.map((room) => (
        <div key={room.id}>
          {room.name}
          <img
            src={room.imageLocation}
            onClick={() => onHandleClick(room.id)}
          />
        </div>
      ))}
    </>
  );
}
export default locations