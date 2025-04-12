import { useState, useEffect } from "react";
import axios from "axios";

function People() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/people").then((res) => {
            setPeople(res.data);
        });
    }, []);

    return (
        <div>
            <h2>People</h2>
            <ul>
                {people.map((person) => (
                    <li key={person.id}>{person.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default People;
