//libs/verificacionDosPasos/desactivar2FA.ts
export const desactivar2FA = async () => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No hay token disponible');

  const res = await fetch('https://site--fronted-redibo--pnmmfvfj8jpw.code.run/api/2fa/desactivar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || 'Error al desactivar verificación en dos pasos');
  }

  return true;
};