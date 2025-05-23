import { useState, useEffect } from 'react';
import { addPrescription } from '../api';
import { API_BASE_URL } from '../api';

export default function Prescriptions() {
  const [prescriptions, setPrescriptions] = useState([]);
  const [patientName, setPatientName] = useState('');
  const [exerciseInput, setExerciseInput] = useState('');

  useEffect(() => {
    fetch(`${API_BASE_URL}/prescriptions`)
      .then(res => res.json())
      .then(data => setPrescriptions(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newPrescription = {
      patientName,
      exercises: exerciseInput.split(',').map(e => e.trim())
    };

    const res = await addPrescription(newPrescription);
    setPrescriptions(prev => [...prev, res]);
    setPatientName('');
    setExerciseInput('');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Prescriptions</h1>
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
          placeholder="Exercises (comma-separated)"
          value={exerciseInput}
          onChange={e => setExerciseInput(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Prescription
        </button>
      </form>

      <ul className="space-y-2">
        {prescriptions.map(p => (
          <li key={p.id} className="border p-2 rounded">
            <strong>{p.patientName}</strong>: {p.exercises.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}