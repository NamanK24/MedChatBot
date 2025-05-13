# MediIQ: The Only Medical Assistant You Will Ever Need!

**MediIQ** is a smart, AI-powered medical chatbot platform designed to assist users with health-related queries, symptom assessment, document analysis, and personalized health insights. MediIQ bridges the gap between individuals and accessible healthcare knowledge.

---

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Technical Stack](#technical-stack)
- [Challenges Faced](#challenges-faced)
- [Usage](#usage)
- [Authentication](#authentication)
- [Future Enhancements](#future-enhancements)
- [Acknowledgements](#acknowledgements)

---

## About the Project

The platform empowers users to make informed health decisions with instant access to AI-driven medical advice and analysis.

Key goals of MediIQ:
- Offer reliable **medical guidance** powered by advanced LLMs.
- **Analyze medical reports** to extract key health indicators.
- Provide **personalized health insights** based on symptoms and user input.
- Boost **health awareness** with interactive quizzes and knowledge assessments.

---

## Features

- **AI-Powered Health Q&A**: Ask symptoms-based or general health questions and receive reliable responses.
- **Medical Report Analyzer**: Upload diagnostic reports (e.g., blood tests, prescriptions) for key insights and flagging critical values.
- **Symptom Checker**: Input symptoms and get a preliminary risk assessment and next steps.
- **Interactive Health Quizzes**: Test your medical knowledge and improve health literacy.
- **Personalized Health Recommendations**: Receive suggestions for diet, lifestyle, or specialist referrals based on interactions.

---

## Technical Stack

- **Frontend**: Next.js 15  
- **Database**: Prisma DB  
- **API Integration**: Gemini API  
- **Authentication**: Clerk Authentication  
- **Hosting**: Vercel (Mumbai region)  

---

## Challenges Faced

We faced several challenges while building MediIQ, especially around fine-tuning large language models (LLMs) for medical reliability and accuracy. Some models explored include:

- **Gemma 2B**  
- **Mistral 7B**  
- **Llama 3.2**

Despite limited TPU access and medical dataset constraints, our team iterated quickly to ensure trustworthy and context-aware outputs for health-related queries.

---

## Usage

1. **Sign Up** via Clerk Authentication to access personalized services.  
2. **Ask Medical Questions** and receive AI-generated responses based on real-world medical knowledge.  
3. **Upload Health Documents** (e.g., lab reports, prescriptions) for automated interpretation.  
4. **Use Symptom Checker** to assess potential conditions and suggested next steps.  
5. **Take Health Quizzes** to benchmark and improve your health awareness.  

---

## Authentication

MediIQ uses **Clerk Authentication** to offer a secure and seamless login experience. It supports:

- **Email/Password login**
- **OAuth Providers** (Google, Facebook, etc.)

This ensures that each interaction is securely tied to an authenticated user profile for privacy and personalized recommendations.

---

## Future Enhancements

- **TPU Access**: Accelerate and scale fine-tuning of medical LLMs with cloud TPU integration.  
- **Medical Knowledge Base Expansion**: Incorporate updated medical datasets for enhanced advice accuracy.  
- **Clinical Integration**: Collaborate with certified medical professionals for supervised AI validation.  
- **Multilingual Support**: Extend access to non-English speakers for broader health outreach.  

---
