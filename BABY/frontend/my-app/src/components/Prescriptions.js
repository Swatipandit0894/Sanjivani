// ClientPrescriptionPage.js
import React from 'react';
import '../styles/ClientPrescriptionPage.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const prescriptions = [
  {
    id: 1,
    doctorName: 'Dr. Ramesh Sharma',
    specialization: 'General Physician',
    date: '2025-06-20',
    diagnosis: 'Seasonal Flu',
    medicines: [
      { name: 'Paracetamol 500mg', dosage: '1 tab twice a day for 5 days' },
      { name: 'Cough Syrup', dosage: '10ml thrice a day after meals' }
    ],
    notes: 'Stay hydrated and take proper rest.'
  },
  {
    id: 2,
    doctorName: 'Dr. Priya Sinha',
    specialization: 'Gynecologist',
    date: '2025-05-28',
    diagnosis: 'PCOD',
    medicines: [
      { name: 'Metformin 500mg', dosage: '1 tab daily after breakfast' }
    ],
    notes: 'Regular exercise and low-carb diet suggested.'
  }
];

const ClientPrescriptionPage = () => {
  const handleDownload = (prescription) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Prescription', 14, 20);
    doc.setFontSize(12);
    doc.text(`Doctor: ${prescription.doctorName}`, 14, 30);
    doc.text(`Specialization: ${prescription.specialization}`, 14, 38);
    doc.text(`Date: ${prescription.date}`, 14, 46);
    doc.text(`Diagnosis: ${prescription.diagnosis}`, 14, 54);

    const tableData = prescription.medicines.map((med) => [med.name, med.dosage]);
    doc.autoTable({
      head: [['Medicine', 'Dosage']],
      body: tableData,
      startY: 62
    });

    doc.text(`Notes: ${prescription.notes}`, 14, doc.lastAutoTable.finalY + 10);
    doc.save(`Prescription_${prescription.id}.pdf`);
  };

  return (
    <div className="prescription-container">
      <h1>My Prescriptions</h1>
      <div className="prescription-list">
        {prescriptions.map((prescription) => (
          <div key={prescription.id} className="prescription-card">
            <h3>{prescription.doctorName} <span>({prescription.specialization})</span></h3>
            <p><strong>Date:</strong> {prescription.date}</p>
            <p><strong>Diagnosis:</strong> {prescription.diagnosis}</p>
            <div className="medicine-section">
              <strong>Medicines:</strong>
              <ul>
                {prescription.medicines.map((med, idx) => (
                  <li key={idx}>{med.name} – {med.dosage}</li>
                ))}
              </ul>
            </div>
            <p><strong>Notes:</strong> {prescription.notes}</p>
            <button className="download-btn" onClick={() => handleDownload(prescription)}>Download PDF</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientPrescriptionPage;
