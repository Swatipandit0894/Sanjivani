Sanjivani – Ayurvedic Consultation & Herbal Diagnosis Platform
Sanjivani is a full-stack web application that blends traditional Ayurvedic wisdom with modern tech. It helps users explore herbal plants, analyze their dosha (body constitution), get personalized herbal recommendations, and book consultations with certified Ayurvedic doctors.

🔹 Key Features:

🌿 User Panel:

Learn about herbal plants and Ayurvedic remedies

Dosha analysis through an MSQ-based system

Book online appointments and download prescriptions

View past and current medical history in one place

🧑‍⚕️ Doctor Panel:

Secure login/signup with profile creation

Set available slots for booking

Create and send digital prescriptions to users

View and manage patient history


📁 Project Structure
sanjivani/
│
├── ayurvedic-backend/           # Node.js + Express backend for managing APIs
│   ├── config/                  # Database connection and environment setup
│   ├── controllers/            # Logic for handling routes (auth, appointments, etc.)
│   ├── middleware/             # Middleware (auth, error handlers, etc.)
│   ├── models/                 # Mongoose schemas for Doctor, Patient, Appointments, etc.
│   ├── routes/                 # API endpoints (auth, dashboard, etc.)
│   ├── node_modules/           # Backend dependencies
│   ├── .env                    # Environment variables (Mongo URI, PORT)
│   ├── package.json            # Backend dependencies and scripts
│   ├── package-lock.json
│   └── server.js               # Entry point for backend
│
├── frontend/
│   └── my-app/                 # React frontend for Sanjivani Ayurveda
│       ├── public/            # Static assets
│       ├── src/
│       │   ├── components/     # React components (Landing, Dashboard, Doctor, etc.)
│       │   ├── styles/         # CSS files
│       │   ├── App.js          # Main App component
│       │   └── index.js        # React DOM rendering
│       ├── package.json        # Frontend dependencies and scripts
│       ├── package-lock.json
│       └── README.md
│
├── README.md                   # Project documentation
└── .gitignore



2. ⚙️ Technologies Used

- Frontend: React.js, React Router
- Backend: Node.js, Express.js, MongoDB
- Styling: CSS, Bootstrap
- Other: JWT, bcrypt, axios, mongoose

