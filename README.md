# Sahasra Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing professional skills, projects, and achievements.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Dynamic typing animation, hover effects, and smooth scrolling
- **Contact Form**: Live email sending using EmailJS
- **Skills Showcase**: Comprehensive display of technical skills with icons
- **Project Portfolio**: Showcase of completed projects
- **Education Timeline**: Academic achievements and certifications
- **Firebase Integration**: Ready for database and authentication features

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: CSS3, Bootstrap 5, Custom CSS
- **Icons**: React Icons, Bootstrap Icons
- **Animations**: TypeAnimation for typing effects
- **Email**: EmailJS for contact form
- **Database**: Firebase (configured)
- **Deployment**: Firebase Hosting ready

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sahasralive/sahasra-portfolio.git
cd sahasra-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file at project root with:

#### EmailJS Configuration
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

#### Firebase Configuration
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database, Authentication, and Storage
3. Copy your Firebase config values to the `.env` file
4. The app will automatically connect to Firebase services

## Contact Form

The contact form expects EmailJS template variables: `user_name`, `user_email`, and `message`.

## Deployment

The project is configured for Firebase Hosting deployment:

```bash
npm run build
firebase deploy
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Sahasra Nawodhi - [sahasralive21@gmail.com](mailto:sahasralive21@gmail.com)

Project Link: [https://github.com/sahasralive/sahasra-portfolio](https://github.com/sahasralive/sahasra-portfolio)
