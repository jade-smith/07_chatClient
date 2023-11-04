import { useEffect, useState } from "react";

const DisplayRoom = () => {
  const [rooms, setRooms]= useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  
  useEffect(() => {
    async function fetchRooms(){
      try {
        const response = await fetch('http://127.0.0.1:4000/room/allRooms');
        const data = await response.json();
        setRooms(data.rooms);
      }catch (error){
        console.error('Error fetching rooms:', error);
      }
    }
    fetchRooms();
  }, []);

  return (
    <div className="room-container">
      <div className="room-list">
        <h2>Rooms</h2>
        <div className="card">
          <ul className="list-group list-group-flush">
            {rooms.map((room) => (
              <li
                key={room.id}
                className={`list-group-item ${selectedRoom === room.id ? 'selected-room' : ''}`}
                onClick={() => setSelectedRoom(room.id)}
              >
                {room.title}
              </li>
            ))}
            </ul>
        </div>
      </div>
      <div className="room-display">
        {/* Display the selected room's messages here */}
      </div>
    </div>
  );
}

export default DisplayRoom;