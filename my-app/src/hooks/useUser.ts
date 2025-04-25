import { useEffect, useState } from 'react';

interface User {
  id_usuario: number;
  nombre_completo: string;
  email: string;
  telefono?: number;
  fecha_nacimiento?: string;
}

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token'); // 🚀 Trae el token del localStorage
      if (!token) return;

      try {
        const res = await fetch('http://localhost:3001/api/me', { // ⚠️ Cambia si deployas
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setUser(data.user); // 🚀 Guarda el usuario en el estado
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      }
    };

    fetchUser();
  }, []);

  return user;
};