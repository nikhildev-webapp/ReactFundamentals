import React, { useState, useEffect } from 'react';

const RandomJoke = () => {
    // Initialize data as an object to store setup and punchline
    const [joke, setJoke] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchJoke = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            setJoke(json);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Fetch a joke when the component mounts initially
    useEffect(() => {
        fetchJoke();
    }, []);

    // Display appropriate messages based on loading/error states
    if (loading) {
        return <p>Please wait, loading joke...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <h1>Random Joke Generator</h1>
            {/* Display the specific parts of the joke object */}
            {joke.setup && joke.punchline ? (
                <div>
                    <p><strong>Setup:</strong> {joke.setup}</p>
                    <p><strong>Punchline:</strong> {joke.punchline}</p>
                </div>
            ) : (
                // Initial state rendering before the first fetch completes
                <p>Click the button to load a joke.</p>
            )}
            {/* Call fetchJoke when the button is clicked */}
            <button onClick={fetchJoke}>Get New Joke</button>
        </>
    );
};

export default RandomJoke;
