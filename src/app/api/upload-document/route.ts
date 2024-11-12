// src/app/api/upload-document/route.ts

import { NextRequest, NextResponse } from 'next/server';
import formidable from 'formidable';
import { extractTextFromFile, analyzeDocumentContent } from '@/lib/documentHelpers';
import DocumentModel from '@/models/DocumentModel';
import fs from 'fs/promises';

export async function POST(req: NextRequest) {
	const form = formidable({ multiples: false });

	const { fields, files } = await new Promise((resolve, reject) => {
		form.parse(req, (err, fields, files) => {
			if (err) reject(err);
			resolve({ fields, files });
		});
	});

	console.log({files})

	const filePath = files.file.filepath;
	const documentText = await extractTextFromFile(filePath);

	// Save document details in MongoDB
	const document = await DocumentModel.create({
		content: documentText,
		uploadDate: new Date(),
		status: 'Pending',
	});

	// Trigger document analysis
	await analyzeDocumentContent(document._id);

	return NextResponse.json({ success: true, documentId: document._id });
}
