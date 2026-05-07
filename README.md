# React JS Ecommerce

A React + Vite ecommerce project with Firebase authentication.

## Setup

Install dependencies:

```bash
npm install
```

Create a local `.env` file from `.env.example` and fill in your Firebase config:

```bash
cp .env.example .env
```

Run the app locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Environment Variables

This project uses Vite environment variables for Firebase:

```bash
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```

The real `.env` file is ignored by Git so Firebase config values are not committed.
