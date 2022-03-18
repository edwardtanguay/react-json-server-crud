// import { useState } from 'react';

export const Flashcard = ({ flashcard, deleteFlashcard, editFlashcard, cancelEditingFlashcard, changeFlashcardField }) => {
	// originalFlashcard.category = 'nnn';
	// const [fieldCategory, setFieldCategory] = useState(flashcard.category);
	// const [fieldFront, setFieldFront] = useState(flashcard.front);
	// const [fieldBack, setFieldBack] = useState(flashcard.back);

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
						<button onClick={() => cancelEditingFlashcard(flashcard)}>Cancel</button>
					</div>
				</>
			)}
		</div>
	)
}