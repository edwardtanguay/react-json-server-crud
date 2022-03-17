export const Flashcard = ({flashcard, deleteItem}) => {
	return (
		<div className="flashcard">
			<div className="front"><span className="category">{flashcard.id} {flashcard.category.toUpperCase()}:</span> {flashcard.front}</div>
			<div className="back">{flashcard.back}</div>
			<div className="panel"><button onClick={() => deleteItem(flashcard.id)}>Delete</button></div>
		</div>
	)
}