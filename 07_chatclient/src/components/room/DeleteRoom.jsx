import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DeleteRoom() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ownerId, setOwnerId] = useState("");
    const roomRoute = "http://127.0.0.1:4000/allRooms";

    async function removeRoom(e) {
        e.preventDefault();
            try {
                let response = await fetch(roomRoute, {
                    headers: new Headers({
                        "content-type": "application/json",
                    }),
                    method: "DELETE",
                    body: JSON.stringify({
                        title: title,
                        description: description,
                        ownerId: ownerId
                    }),
                });

                let results = await response.json();
                console.log(results);
                if (response.status === 200) navigate("/allRooms");
            } catch (error) {
                console.log(error);
            }
        }
        return (
            <>
            <form onSubmit={removeRoom}>
                <button className="delete">Delete</button>
            </form>
            </>
    )
}


export default DeleteRoom;