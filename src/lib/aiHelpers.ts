// src/lib/aiHelpers.ts

import axios from 'axios';

const GEMINI_API_BASE_URL = 'https://api.geminiflash.com/v1'; // Assuming this is the base URL
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export const analyzeDocumentContent = async (documentContent) => {
	try {
		const response = await axios.post(
			`${GEMINI_API_BASE_URL}/document/analyze`,
			{ content: documentContent },
			{
				headers: {
					'Authorization': `Bearer ${GEMINI_API_KEY}`,
					'Content-Type': 'application/json',
				},
			}
		);
		return response.data; // Return the analysis results if needed
	} catch (error) {
		console.error('Error analyzing document content:', error);
		throw new Error('Document analysis failed.');
	}
};

export const getAnswerFromDocument = async (documentContent, question) => {
	try {
		const response = await axios.post(
			`${GEMINI_API_BASE_URL}/document/answer`,
			{
				content: documentContent,
				question: question,
			},
			{
				headers: {
					'Authorization': `Bearer ${GEMINI_API_KEY}`,
					'Content-Type': 'application/json',
				},
			}
		);
		return response.data.answer; // Adjust based on API response structure
	} catch (error) {
		console.error('Error fetching answer from document:', error);
		throw new Error('Failed to fetch answer from document.');
	}
};
