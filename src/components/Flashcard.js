import { useState } from 'react';

export const Flashcard = ({ flashcard, deleteFlashcard, editFlashcard, cancelEditingFlashcard, changeFlashcardField, saveFlashcard }) => {
	const [originalFlashcard] = useState({ ...flashcard });
	return (
		<div className="flashcard">
			{!flashcard.editing && (
				<>
					<div className="front"><span className="category">{flashcard.category.toUpperCase()}:</span> {flashcard.front}</div>
					<div className="back">{flashcard.back}</div>
					<div className="panel"><button onClick={() => deleteFlashcard(flashcard)}>Delete</button><button onClick={() => editFlashcard(flashcard)}>Edit</button></div>
				</>
			)}
			{flashcard.editing && (
				<form>
					<div><label htmlFor="category">Category</label><input id="category" type="text" value={flashcard.category} onChange={(e) => changeFlashcardField(flashcard, 'category', e.target.value)} /></div>

					<div><label htmlFor="front">Front</label><input id="front" type="text" value={flashcard.front} onChange={(e) => changeFlashcardField(flashcard, 'front', e.target.value)} /></div>

					<div><label htmlFor="back">Back</label><input id="back" type="text" value={flashcard.back} onChange={(e) => changeFlashcardField(flashcard, 'back', e.target.value)} /></div>

					<div className="panel">
						<button type="button" onClick={() => cancelEditingFlashcard(flashcard, originalFlashcard)}>Cancel</button>
						<button type="button" onClick={() => saveFlashcard(flashcard)}>Save</button>
					</div>
				</form>
			)}
		</div>
	)
}