import { useState, useEffect } from "react";
import axios from "axios";

function Hobbies() {
    const [hobbies, setHobbies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/hobbies").then((res) => {
            setHobbies(res.data);
        });
    }, []);

    return (
        <div>
            <h2>Hobbies</h2>
            <ul>
                {hobbies.map((hobby) => (
                    <li key={hobby.id}>{hobby.hobby_name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Hobbies;
