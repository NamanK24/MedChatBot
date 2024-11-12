// src/app/api/ask-question/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { getAnswerFromDocument } from '@/lib/aiHelpers';
import DocumentModel from '@/models/DocumentModel';

export async function POST(req: NextRequest) {
	const { documentId, question } = await req.json();

	if (!documentId || !question) {
		return NextResponse.json({ success: false, error: 'Document ID and question are required' });
	}

	const document = await DocumentModel.findById(documentId);
	if (!document) {
		return NextResponse.json({ success: false, error: 'Document not found' });
	}

	// Generate an answer using the Gemini Flash API
	const answer = await getAnswerFromDocument(document.content, question);

	return NextResponse.json({ success: true, answer });
}
