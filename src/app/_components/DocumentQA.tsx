// src/app/_components/DocumentQA.tsx

'use client';
import React, { useState } from 'react';
import axios from 'axios';

const DocumentQA = ({ documentId }) => {
	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState("");
	const [loading, setLoading] = useState(false);

	const handleQuestionSubmit = async () => {
		if (!question.trim()) return;

		setLoading(true);
		try {
			const response = await axios.post('/api/ask-question', {
				documentId,
				question,
			});
			setAnswer(response.data.answer);
		} catch (error) {
			console.error("Error fetching answer", error);
			setAnswer("Error fetching answer.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Ask a question..."
				value={question}
				onChange={(e) => setQuestion(e.target.value)}
			/>
			<button onClick={handleQuestionSubmit} disabled={loading}>
				{loading ? "Fetching..." : "Get Answer"}
			</button>
			{answer && <p>Answer: {answer}</p>}
		</div>
	);
};

export default DocumentQA;
