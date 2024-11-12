// src/lib/documentHelpers.ts

import pdfParse from 'pdf-parse';
import axios from 'axios';
import DocumentModel from '@/models/DocumentModel';
import * as fs from "node:fs";

export const extractTextFromFile = async (filePath) => {
	const fileBuffer = fs.readFileSync(filePath);
	const data = await pdfParse(fileBuffer);
	return data.text;
};

// src/lib/documentHelpers.ts



const GEMINI_API_BASE_URL = 'https://api.geminiflash.com/v1';
const GEMINI_API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

// Function to analyze document content using Gemini Flash API
export const analyzeDocumentContent = async (documentId: string) => {
	// Retrieve the document from MongoDB
	const document = await DocumentModel.findById(documentId);
	if (!document) {
		throw new Error('Document not found');
	}

	try {
		// Send document content to Gemini Flash for analysis
		const response = await axios.post(
			`${GEMINI_API_BASE_URL}/document/analyze`,
			{ content: document.content },
			{
				headers: {
					'Authorization': `Bearer ${GEMINI_API_KEY}`,
					'Content-Type': 'application/json',
				},
			}
		);

		// Update the document in MongoDB with the analyzed status and any additional information
		document.status = 'Analyzed';
		await document.save();

		// Optionally, store analysis results in the document or in a separate field if needed
		return response.data; // Return analysis result if needed

	} catch (error) {
		console.error('Error analyzing document content:', error);
		throw new Error('Document analysis failed.');
	}
};
