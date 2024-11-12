// src/app/_components/DocumentUpload.tsx

'use client';
import React, { useState } from 'react';
import axios from 'axios';

const DocumentUpload = ({ onUploadSuccess }) => {
	const [file, setFile] = useState<File | null>(null);
	const [uploading, setUploading] = useState(false);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0]);
		}
	};

	const handleUpload = async () => {
		if (!file) return;

		const formData = new FormData();
		formData.append('file', file);

		setUploading(true);
		try {
			const response = await axios.post('/api/upload-document', formData, {
				headers: { 'Content-Type': 'multipart/form-data' },
			});
			setFile(null);
			onUploadSuccess(response.data.documentId); // Pass documentId to parent component
		} catch (error) {
			console.error("Document upload failed", error);
		} finally {
			setUploading(false);
		}
	};

	return (
		<div>
			<input type="file" onChange={handleFileChange} />
			<button onClick={handleUpload} disabled={uploading}>
				{uploading ? "Uploading..." : "Upload Document"}
			</button>
		</div>
	);
};

export default DocumentUpload;
