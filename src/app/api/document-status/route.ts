// src/app/api/document-status/route.ts

import { NextRequest, NextResponse } from 'next/server';
import DocumentModel from '@/models/DocumentModel';

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const documentId = searchParams.get('documentId');

	if (!documentId) {
		return NextResponse.json({ success: false, error: 'Document ID is required' });
	}

	const document = await DocumentModel.findById(documentId);

	if (!document) {
		return NextResponse.json({ success: false, error: 'Document not found' });
	}

	return NextResponse.json({ success: true, status: document.status });
}
