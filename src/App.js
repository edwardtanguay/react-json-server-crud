import { useEffect, useState } from 'react';
import './App.scss';

const url = 'http://localhost:5000/flashcards';

function App() {
	const [flashcards, setFlashcards] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(url);
			const flashcards = await response.json();
			setFlashcards(flashcards);
		})();
	}, []);

	return (
		<div className="App">
			<h1>{flashcards.length} Flashcards</h1>
		</div>
	);
}

export default App;