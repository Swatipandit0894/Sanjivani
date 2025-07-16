 Project Description
Sanjivani Ayurveda is a full-stack Ayurvedic consultation platform where patients can:
- Analyze Doshas
- Check symptoms
- Book appointments with doctors
- View personalized herbal recommendations

Doctors can:
- View appointments
- Set availability
- Generate and send online prescriptions


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



