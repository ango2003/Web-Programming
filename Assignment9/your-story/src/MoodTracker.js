import { useState } from 'react';

export default function MoodTracker() {

    const [mood, setMood] = useState(null);

    const moodData = {
        "😂": {
            description: "I feel very happy when I'm laughing with friends.",
            link: "https://www.youtube.com/watch?v=EffPnse4WQs",
            memory: "I remember laughing so hard during a game night with friends!"
        },
        "😒": {
            description: "Feeling unamused when things don't go my way.",
            link: "https://imgur.com/gallery/boris-is-perpetually-unamused-x3YAt",
            memory: "That time I waited in a long line just for the store to close."
        },
        "😭": {
            description: "I feel upset when things get overwhelming.",
            link: "https://www.youtube.com/watch?v=xeGzxMMI1Qg",
            memory: "When stress overwhelms me and life seems to start moving monotonously."
        },
        "😁": {
            description: "Beaming with joy when I achieve something new!",
            link: "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
            memory: "When I got to eat all kind of deserts at a bakery such as cakes, pies, pastries, and icecream."
        },
        "😠": {
            description: "I feel anger coursing through my veins!",
            link: "https://www.youtube.com/watch?v=6x4lp2X214Y",
            memory: "When a person accuses me of doing something that I did not do."
        }
    };

    const moodStyles = {
        "😂": {
            backgroundColor: "#FFEB3B", // Yellow for happiness
            color: "#000",
            fontFamily: "'Comic Sans MS', cursive, sans-serif"
        },
        "😒": {
            backgroundColor: "#FF9800", // Orange for unamused
            color: "#fff",
            fontFamily: "'Courier New', monospace"
        },
        "😭": {
            backgroundColor: "#2196F3", // Blue for sadness
            color: "#fff",
            fontFamily: "'Arial', sans-serif"
        },
        "😁": {
            backgroundColor: "#4CAF50", // Green for excitement
            color: "#000",
            fontFamily: "'Verdana', sans-serif"
        },
        "😠": {
            backgroundColor: "#FF0000", // Green for excitement
            color: "#000",
            fontFamily: "'Times New Roman', sans-serif"
        }
    };

    const moodBackgrounds = {
        "😂": "url('https://example.com/happy-bg.jpg')",
        "😒": "url('https://example.com/unamused-bg.jpg')",
        "😭": "url('https://example.com/sad-bg.jpg')",
        "😁": "url('https://example.com/excited-bg.jpg')",
        "😠": "url('https://example.com/angry-bg.jpg')"
    };

    return (
        <div
            style={{
                textAlign: "center",
                padding: "20px",
                backgroundImage: mood ? moodBackgrounds[mood] : "none",
                backgroundSize: "cover",
                minHeight: "100vh"
            }}
        >
            <h1 style={{ fontFamily: "'Pacifico', cursive", color: "#6A0572" }}>🌟 Your Mood, Your Story 🌟</h1>

            {Object.keys(moodData).map((emoji) => (
                <button
                    key={emoji}
                    onClick={() => setMood(emoji)}
                    style={{
                        margin: "5px",
                        padding: "10px",
                        background: "lightblue",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "transform 0.2s ease"
                    }}
                    onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                >
                    {emoji}
                </button>
            ))}

            {mood && (
                <div style={{ marginTop: "20px", padding: "20px", borderRadius: "12px", ...moodStyles[mood] }}>
                    <h2>Current Mood: {mood}</h2>
                    <p><strong>Description:</strong> {moodData[mood].description}</p>
                    <p>
                        <strong>Corresponding Link:</strong>{" "}
                        <a
                            href={moodData[mood].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: moodStyles[mood]?.color }}
                        >
                            Check this out!
                        </a>
                    </p>
                    <p><strong>Memory:</strong> {moodData[mood].memory}</p>
                </div>
            )}
        </div>
    );
}
