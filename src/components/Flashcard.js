import { useState } from 'react';

export const Flashcard = ({ flashcard, deleteFlashcard, editFlashcard, cancelEditingFlashcard, changeFlashcardField }) => {
	const [originalFlashcard] = useState({...flashcard});
	return (
		<div className="flashcard">
			{!flashcard.editing && (
				<>
					<div className="front"><span className="category">{flashcard.id} {flashcard.category.toUpperCase()}:</span> {flashcard.front}</div>
					<div className="back">{flashcard.back}</div>
					<div className="panel"><button onClick={() => deleteFlashcard(flashcard)}>Delete</button><button onClick={() => editFlashcard(flashcard)}>Edit</button></div>
				</>
			)}
			{flashcard.editing && (
				<>
					<div className="panel">
						<div><input className="fieldCategory" type="text" value={flashcard.category} onChange={(e) => changeFlashcardField(flashcard, 'category', e.target.value)} /></div>
						<button onClick={() => cancelEditingFlashcard(flashcard, originalFlashcard)}>Cancel</button>
					</div>
				</>
			)}
		</div>
	)
}