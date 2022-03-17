import { useEffect, useState } from 'react';
import './App.scss';
import { Flashcard } from './components/Flashcard';

const url = 'http://localhost:5000/flashcards';

function App() {
	const [flashcards, setFlashcards] = useState([]);

	const deleteItem = (id) => {
		if (id !== undefined) {
			(async () => {
				const options = {
					method: 'DELETE'
				};
				const response = await fetch(`${url}/${id}`, options);
				if (response.ok) {
					setFlashcards([...flashcards.filter(m => m.id !== id)]);
				}
			})();
		}
	}

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
						<Flashcard key={i} flashcard={flashcard} deleteItem={deleteItem} />
					)
				})}
			</div>
		</div>
	);
}

export default App;