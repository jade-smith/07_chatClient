import AddRoom from "./AddRoom";
import DeleteRoom from "./DeleteRoom";
import UpdateRoom from "./UpdateRoom";
import "../../App";
import { useEffect, useState } from 'react';

function DisplayRoom(props) {
  const [rooms, setRooms] = useState([]);
  const roomRoute = "http://127.0,0.1:4000/room/allRooms";

  async function allRooms() {
    try {
      let response = await fetch(roomRoute, {
        headers: new Headers({
          "content-type": "application/json",
          "Authorization": props.token
        }),
        method: "GET"
      });
      let results = await response.json();
      console.log(results)
      if (response.status === 200)
      setRooms()
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(() => {
    allRooms()
  }, []);

  return (
    <>
      <div className="grid-sample">
        <h2 id="available">Available Rooms</h2>
          <AddRoom />
        <div>
        </div>
        <DeleteRoom />
        <UpdateRoom />
      </div>
    </>
  );
}

export default DisplayRoom;
