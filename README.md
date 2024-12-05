# WE-MET-DATING-APP
# We Met - College Dating App

A modern web-based dating application designed specifically for college students, inspired by Hinge. Built with React, TypeScript, and Firebase.

## Features

- **User Authentication**
  - Email/password registration and login
  - Profile creation with university verification
  - Secure authentication powered by Firebase

- **Profile Management**
  - Multiple photo uploads
  - Detailed bio and interests
  - University and course information
  - Location-based matching

- **Matching System**
  - Like/Pass functionality
  - Interest-based matching
  - University-focused connections
  - Real-time chat (coming soon)

- **Admin Dashboard**
  - User management system
  - Analytics and statistics
  - Profile moderation
  - User activity monitoring

## Tech Stack

- **Frontend**
  - React 18
  - TypeScript
  - Tailwind CSS
  - React Router DOM
  - React Hook Form
  - Zod (form validation)
  - Zustand (state management)

- **Backend**
  - Firebase Authentication
  - Firebase Firestore
  - Firebase Storage

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/we-met.git
cd we-met
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:
```bash
npm run dev
```

### Firebase Setup

1. Create a new Firebase project
2. Enable Authentication with email/password
3. Create a Firestore database
4. Set up Storage for profile pictures
5. Add security rules for Firestore and Storage

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── admin/        # Admin dashboard components
│   ├── auth/         # Authentication components
│   ├── profile/      # Profile-related components
│   └── ui/           # Basic UI components
├── lib/              # Utility functions and hooks
│   ├── firebase.ts   # Firebase configuration
│   ├── hooks/        # Custom React hooks
│   ├── utils.ts      # Helper functions
│   └── validations.ts# Form validation schemas
├── pages/            # Page components
├── store/            # Zustand store definitions
└── types/            # TypeScript type definitions
```

## Features in Development

- [ ] Real-time chat system
- [ ] Advanced matching algorithm
- [ ] Profile verification system
- [ ] Push notifications
- [ ] Mobile app version

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by Hinge's user interface and functionality
- Built for college students to find meaningful connections
- Focused on privacy and security

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/Sahillll008/WE-MET-DATING-APP)
