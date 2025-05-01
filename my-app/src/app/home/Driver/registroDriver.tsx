'use client';
import React, { useEffect, useState } from 'react';
import NavbarPerfilUsuario from '@/app/components/navbar/NavbarPerfilUsuario';

export default function registroDriver() {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
        setIsError(true);
        } else {
        setIsLoading(false);
        }
    }, []);
    
    if (isLoading) {
        return <div>Cargando...</div>;
    }
    
    if (isError) {
        return <div>Error: No tienes permiso para acceder a esta página.</div>;
    }
    
    return (
        <div className="bg-[var(--blanco)] min-h-screen flex flex-col">
        <NavbarPerfilUsuario />
        <div className="flex-grow flex items-center justify-center">
            <h1 className="text-3xl font-bold">Registro de Conductor</h1>
        </div>
        </div>
    );
}