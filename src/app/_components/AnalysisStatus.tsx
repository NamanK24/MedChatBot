// src/app/_components/AnalysisStatus.tsx

'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnalysisStatus = ({ documentId, onAnalysisComplete }) => {
	const [status, setStatus] = useState('Pending');

	useEffect(() => {
		const interval = setInterval(async () => {
			try {
				const response = await axios.get(`/api/document-status?documentId=${documentId}`);
				setStatus(response.data.status);
				if (response.data.status === 'Analyzed') {
					clearInterval(interval);
					onAnalysisComplete();
				}
			} catch (error) {
				console.error("Error checking analysis status", error);
			}
		}, 3000); // Check status every 3 seconds

		return () => clearInterval(interval); // Clear interval on component unmount
	}, [documentId]);

	return <div>Analysis Status: {status}</div>;
};

export default AnalysisStatus;
