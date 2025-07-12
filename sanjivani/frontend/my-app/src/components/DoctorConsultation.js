// DoctorConsultationPage.js 
import React, { useState, useEffect } from 'react';
import '../styles/DoctorConsultationPage.css';

const doctorData = {
  general: [
    {
      id: 1,
      name: 'Dr. Ramesh Sharma',
      specialization: 'General Physician',
      address: 'Shivaji Nagar Clinic, Patna',
      phone: '9876543210',
      fees: 400,
      timeSlots: ['10:00 AM', '11:30 AM', '02:00 PM']
    },
    {
      id: 2,
      name: 'Dr. Anita Verma',
      specialization: 'General Physician',
      address: 'Boring Road Clinic, Patna',
      phone: '9123456780',
      fees: 500,
      timeSlots: ['09:00 AM', '12:00 PM', '04:00 PM']
    },
    {
      id: 3,
      name: 'Dr. Neeraj Kumar',
      specialization: 'General Physician',
      address: 'Kankarbagh, Patna',
      phone: '9812345678',
      fees: 450,
      timeSlots: ['08:00 AM', '01:00 PM', '06:00 PM']
    }
  ],
  gynecology: [
    {
      id: 4,
      name: 'Dr. Priya Sinha',
      specialization: 'Gynecologist',
      address: 'Gandhi Maidan Clinic, Patna',
      phone: '9988776655',
      fees: 600,
      timeSlots: ['11:00 AM', '01:00 PM', '03:30 PM']
    },
    {
      id: 5,
      name: 'Dr. Meena Yadav',
      specialization: 'Gynecologist',
      address: 'Rajendra Nagar, Patna',
      phone: '9900990011',
      fees: 550,
      timeSlots: ['10:30 AM', '12:30 PM', '04:00 PM']
    }
  ],
  skin: [
    {
      id: 6,
      name: 'Dr. Rohit Singh',
      specialization: 'Dermatologist',
      address: 'SK Puri, Patna',
      phone: '9877665544',
      fees: 500,
      timeSlots: ['09:30 AM', '11:30 AM', '05:00 PM']
    },
    {
      id: 7,
      name: 'Dr. Anjali Thakur',
      specialization: 'Dermatologist',
      address: 'Kankarbagh, Patna',
      phone: '9123450987',
      fees: 550,
      timeSlots: ['10:00 AM', '02:00 PM', '06:00 PM']
    }
  ],
  bone: [
    {
      id: 8,
      name: 'Dr. Sanjeev Kumar',
      specialization: 'Orthopedic Surgeon',
      address: 'Ashiana Digha, Patna',
      phone: '9811122233',
      fees: 650,
      timeSlots: ['08:30 AM', '12:00 PM', '03:00 PM']
    },
    {
      id: 9,
      name: 'Dr. Kavita Sharma',
      specialization: 'Orthopedic Consultant',
      address: 'Danapur, Patna',
      phone: '9822211334',
      fees: 600,
      timeSlots: ['09:00 AM', '01:00 PM', '05:00 PM']
    }
  ],
  ayurveda: [
    {
      id: 10,
      name: 'Dr. Swati Pandit',
      specialization: 'Ayurveda Consultant',
      address: 'Fraser Road, Patna',
      phone: '7000001111',
      fees: 400,
      timeSlots: ['10:00 AM', '12:00 PM', '03:00 PM']
    }
  ]
};

const DoctorConsultationPage = () => {
  const [selectedType, setSelectedType] = useState('general');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [bookedSlot, setBookedSlot] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setSelectedDoctor(null);
    setBookedSlot(null);
    setMessage('');
  }, [selectedType]);

  const handleSlotBooking = (slot) => {
    setBookedSlot(slot);
    setMessage(`Appointment booked for ${slot}`);
  };

  const handleCancelBooking = () => {
    setBookedSlot(null);
    setMessage('Appointment cancelled.');
  };

  return (
    <div className="doctor-page">
      <div className="sidebar">
        <h3>Doctor Types</h3>
        {Object.keys(doctorData).map((type) => (
          <button
            key={type}
            className={`sidebar-button ${selectedType === type ? 'active' : ''}`}
            onClick={() => setSelectedType(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
        <h4 className="mt-4">Doctors</h4>
        {doctorData[selectedType].map((doc) => (
          <button
            key={doc.id}
            className={`doctor-button ${selectedDoctor?.id === doc.id ? 'selected' : ''}`}
            onClick={() => setSelectedDoctor(doc)}
          >
            {doc.name}
          </button>
        ))}
      </div>
      <div className="content">
        {selectedDoctor ? (
          <div className="doctor-detail">
            <h2>{selectedDoctor.name}</h2>
            <p><strong>Specialization:</strong> {selectedDoctor.specialization}</p>
            <p><strong>Clinic Address:</strong> {selectedDoctor.address}</p>
            <p><strong>Phone:</strong> {selectedDoctor.phone}</p>
            <p><strong>Fees:</strong> ₹{selectedDoctor.fees}</p>
            <h4>Available Time Slots</h4>
            <div className="slots">
              {selectedDoctor.timeSlots.map((slot, index) => (
                <button
                  key={index}
                  className={`slot-button ${bookedSlot === slot ? 'booked' : ''}`}
                  onClick={() => handleSlotBooking(slot)}
                  disabled={bookedSlot === slot}
                >
                  {slot}
                </button>
              ))}
            </div>
            {bookedSlot && (
              <div className="booking-actions">
                <p className="booking-message">{message}</p>
                <button className="cancel-button" onClick={handleCancelBooking}>Cancel Appointment</button>
              </div>
            )}
            {!bookedSlot && message && <p className="booking-message">{message}</p>}
          </div>
        ) : (
          <div className="placeholder">Select a doctor to view details</div>
        )}
      </div>
    </div>
  );
};

export default DoctorConsultationPage;
