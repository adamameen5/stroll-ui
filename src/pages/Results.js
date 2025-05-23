import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../api';

export default function Results() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/sessions`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch results');
        return res.json();
      })
      .then(data => setResults(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Session Results</h1>
      {results.length === 0 ? (
        <p>No session results available.</p>
      ) : (
        <ul className="space-y-2">
          {results.map(result => (
            <li key={result.id} className="border p-3 rounded shadow-sm">
              <div><strong>Prescription ID:</strong> {result.prescriptionId}</div>
              <div><strong>Patient Name:</strong> {result.patientName}</div>
              <div><strong>Date:</strong> {new Date(result.sessionDate).toLocaleString()}</div>
              <div><strong>Feedback:</strong> {result.feedback}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
