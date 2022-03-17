import { useEffect, useState } from 'react';
import './App.scss';
import { Flashcard } from './components/Flashcard';

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
			<div className="flashcards">
				{flashcards.map((flashcard, i) => {
					return (
						<Flashcard key={i} flashcard={flashcard} />
					)
				})}
			</div>
		</div>
	);
}

export default App;