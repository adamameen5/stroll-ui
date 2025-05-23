export const API_BASE_URL = "https://localhost:4432/api";

export async function getPrescriptions() {
  const res = await fetch(`${API_BASE_URL}/prescriptions`);
  return res.json();
}

export async function addPrescription(prescription) {
  const res = await fetch(`${API_BASE_URL}/AddPrescription`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(prescription)
  });
  return res.json();
}

export default API_BASE_URL;