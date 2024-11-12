// src/models/DocumentModel.ts

import mongoose, { Schema, Document } from 'mongoose';

interface Answer {
	question: string;
	answer: string;
}

interface DocumentInterface extends Document {
	userId: mongoose.Types.ObjectId;
	content: string;
	uploadDate: Date;
	status: string; // 'Pending', 'Analyzed', etc.
	answers?: Answer[]; // Stores question-answer pairs related to the document
}

const DocumentSchema: Schema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	content: { type: String, required: true },
	uploadDate: { type: Date, default: Date.now },
	status: { type: String, default: 'Pending' },
	answers: [
		{
			question: { type: String },
			answer: { type: String },
		},
	],
});

// Export the model with a check to prevent multiple declarations
export default mongoose.models.Document || mongoose.model<DocumentInterface>('Document', DocumentSchema);
