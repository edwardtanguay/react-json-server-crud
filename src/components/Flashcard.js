export const Flashcard = ({ flashcard, deleteFlashcard, editFlashcard }) => {
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
					editing...	
				</>
			)}
		</div>
	)
}