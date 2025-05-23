import { useState, useEffect } from 'react';

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');

  useEffect(() => {
    fetch('https://localhost:44322/api/patients')
      .then(res => res.json())
      .then(data => setPatients(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newPatient = {
      name : patientName,
      email : patientEmail
    };

    const res = await fetch('https://localhost:44322/api/patients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPatient)
    });

    const saved = await res.json();
    setPatients(prev => [...prev, saved]);
    setPatientName('');
    setPatientEmail('');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Patients</h1>
      <form onSubmit={handleSubmit} className="space-y-2 mb-4">
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={e => setPatientName(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          placeholder="Email"
          value={patientEmail}
          onChange={e => setPatientEmail(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Patient
        </button>
      </form>

      <ul className="space-y-2">
        {patients.map(p => (
          <li key={p.id} className="border p-2 rounded">
            <strong>{p.name}</strong>: {p.email}
          </li>
        ))}
      </ul>
    </div>
  );
}