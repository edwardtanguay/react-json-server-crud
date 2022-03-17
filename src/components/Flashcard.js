export const Flashcard = ({flashcard}) => {
	return (
		<div className="flashcard">
			<div className="front"><span className="category">{flashcard.category.toUpperCase()}:</span> {flashcard.front}</div>
			<div className="back">{flashcard.back}</div>
		</div>
	)
}