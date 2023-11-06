import '../../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddRoom(props) {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ownerId, setOwnerId] = useState("");
    
    const roomRoute = "http://127.0.0.1:4000/room/rooms"

    async function createRoom(e) {
        e.preventDefault();
            try {
                let response = await fetch(roomRoute, {
                    headers: new Headers({
                        "content-type": "application/json",
                        "Authorization": props.token
                    }),
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description,
                        ownerId: ownerId
                    }),
                });

                let results = await response.json();
                console.log(results);
                if (response.status === 200) navigate("/room");
            } catch (error) {
                console.log(error);
            }
        }
        
        return (
        <>
        <form onSubmit={createRoom}>
            <button className="add">Add Room</button>
        </form>
        </>
        )
    }

    
export default AddRoom;