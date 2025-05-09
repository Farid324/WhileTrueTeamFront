"use client";
import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { debounce } from "lodash";
import { FiMail, FiPhone, FiSearch, FiPlusCircle, FiX } from "react-icons/fi";

interface User {
  id_usuario: number;
  nombre_completo: string;
  email: string;
  telefono: string;
  foto_perfil: string;
}

const UserBrowser = () => {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Imprimir los datos del paso 1
    const datosPaso1 = localStorage.getItem("registroDriverPaso1");
    if (datosPaso1) {
      console.log("📦 Datos del paso 1 recibidos:", JSON.parse(datosPaso1));
    } else {
      console.warn("⚠️ No se encontraron datos del paso 1 en localStorage");
    }
  
    // Cargar usuarios desde backend
    fetch("http://localhost:3001/api/usuarios/renters")
      .then((res) => res.json())
      .then((data) => setAllUsers(data))
      .catch((err) => console.error("Error al obtener renters:", err))
      .finally(() => setLoading(false));
  }, []);
  

  // Cargar usuarios seleccionados desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem("selectedRenters");
    if (stored) {
      setSelectedUsers(JSON.parse(stored));
    }
  }, []);

  // Guardar en localStorage cuando cambie la selección
  useEffect(() => {
    localStorage.setItem("selectedRenters", JSON.stringify(selectedUsers));
  }, [selectedUsers]);

  const debouncedSearch = useCallback(
    debounce((query) => setSearchQuery(query), 300),
    []
  );

  const filteredUsers = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return allUsers.filter(
      (user) =>
        user.nombre_completo.toLowerCase().includes(q) ||
        user.email.toLowerCase().includes(q) ||
        user.telefono?.toString().includes(q)
    );
  }, [searchQuery, allUsers]);

  const handleAddUser = (user: User) => {
    if (!selectedUsers.find((u) => u.id_usuario === user.id_usuario)) {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handleRemoveUser = (id: number) => {
    setSelectedUsers(selectedUsers.filter((u) => u.id_usuario !== id));
  };

  const handleRegisterDriver = async () => {
    try {
      const datosPaso1 = localStorage.getItem("registroDriverPaso1");
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No se encontró el token de autenticación.");
        setLoading(false);
        return;
      }

      if (!datosPaso1) {
        alert("❌ No se encontraron datos del paso 1");
        return;
      }
  
      const {
        sexo,
        telefono,
        nro_licencia,
        categoria,
        fecha_emision,
        fecha_vencimiento,
      } = JSON.parse(datosPaso1);
  
      const res = await fetch("http://localhost:3001/api/registro-driver", {
        method: "POST",
        headers: { "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,},
        credentials: "include",
        body: JSON.stringify({
          sexo,
          telefono,
          nro_licencia,
          categoria,
          fecha_emision,
          fecha_vencimiento,
          rentersIds: selectedUsers.map((u) => u.id_usuario),
        }),
      });
      console.log("🔴 Respuesta del backend:", res.status);
      const errorText = await res.text();
      console.log("🧾 Detalle del error:", errorText);
  
      if (!res.ok) throw new Error("Falló el registro");
      alert("Driver registrado con éxito ✅");
  
      setSelectedUsers([]);
      localStorage.removeItem("selectedRenters");
      localStorage.removeItem("registroDriverPaso1");
    } catch (err) {
      console.error("Error:", err);
      alert("❌ Error al registrar driver");
    }
  };
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };  
  

  const UserCard = ({ user, isSelected, onAction }: { user: User; isSelected: boolean; onAction: (user: User) => void }) => (
    <div className="w-64 p-4 m-2 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 font-inter">
      <div className="flex items-center space-x-4">
        <img
          src={user.foto_perfil || "https://via.placeholder.com/150"}
          alt={user.nombre_completo}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="flex-1">
          <h3 className="text-lg font-semibold">{user.nombre_completo}</h3>
          <div className="text-sm text-gray-600 flex items-center">
            <FiMail className="mr-2" /> {user.email}
          </div>
          <div className="text-sm text-gray-600 flex items-center">
            <FiPhone className="mr-2" /> {user.telefono}
          </div>
        </div>
      </div>
      <button
        onClick={() => onAction(user)}
      className={`mt-4 w-full py-1.5 rounded-full text-sm font-semibold ${
        isSelected
          ? "bg-gray-200 text-[#505050] hover:bg-gray-300"
          : "bg-[#FFA800] text-white hover:bg-[#e29400]"
      }`}
      >
        {isSelected ? (
          <>
            <FiX className="inline mr-2" />
            Quitar
          </>
        ) : (
          <>
            <FiPlusCircle className="inline mr-2" />
            Añadir
          </>
        )}
      </button>
    </div>
  );

  return (
    
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#1E3A8A] mb-4">Seleccionar Renters</h1>
        
        {/* Input de búsqueda */}
        <div className="mb-8 relative">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por nombre, correo o teléfono..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-200"
            onChange={(e) => debouncedSearch(e.target.value)}
          />
        </div>

        {/* Lista de cards 
        {loading ? (
          <p className="text-center">Cargando usuarios...</p>
        ) : filteredUsers.length === 0 ? (
          <p className="text-center text-gray-600">No se encontraron usuarios.</p>
        ) : (
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-4 w-max">
              {filteredUsers.map((user) => (
                <UserCard
                  key={user.id_usuario}
                  user={user}
                  isSelected={selectedUsers.some((u) => u.id_usuario === user.id_usuario)}
                  onAction={handleAddUser}
                />
              ))}
            </div>
          </div>
        )}*/}

        {loading ? (
          <p className="text-center">Cargando usuarios...</p>
        ) : filteredUsers.length === 0 ? (
          <p className="text-center text-gray-600">No se encontraron usuarios.</p>
        ) : (
          <div className="relative mt-4">
            {/* Flecha izquierda */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full hover:bg-gray-100"
              aria-label="Scroll left"
            >
              ←
            </button>

            {/* Contenedor de cards */}
            <div
              ref={scrollRef}
              className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth px-12"
              style={{ scrollBehavior: "smooth" }}
            >
              {filteredUsers.map((user) => (
                <UserCard
                  key={user.id_usuario}
                  user={user}
                  isSelected={selectedUsers.some(
                    (u) => u.id_usuario === user.id_usuario
                  )}
                  onAction={handleAddUser}
                />
              ))}
            </div>

            {/* Flecha derecha */}
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-200 transition duration-200"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        )}

        {/* grilla usuarios seleccionados */}
        {/*{selectedUsers.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Renters seleccionados</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedUsers.map((user) => (
                <UserCard
                  key={user.id_usuario}
                  user={user}
                  isSelected={true}
                  onAction={() => handleRemoveUser(user.id_usuario)}
                />
              ))}
            </div>
            <button
              onClick={handleRegisterDriver}
              className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg"
            >
              Registrar driver con renters
            </button>
          </div>
      )}*/}

      {/* Tabla visual de renters seleccionados */}
      {selectedUsers.length > 0 && (
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg border border-[#1E3A8A] p-6">
            <h2 className="text-lg font-semibold mb-4 text-[#1E3A8A] text-center">
              Renters seleccionados
            </h2>

            <table className="w-full text-sm text-[#505050] font-inter">
              <thead>
                <tr className="border-b text-left text-gray-600 font-medium">
                  <th className="py-2 px-2">Nombre</th>
                  <th className="py-2 px-2">Correo</th>
                  <th className="py-2 px-2">Teléfono</th>
                  <th className="py-2 px-2 text-center">Acción</th>
                </tr>
              </thead>
              <tbody>
                {selectedUsers.map((user) => (
                  <tr
                    key={user.id_usuario}
                    className="border-b last:border-0 hover:bg-gray-50 transition"
                  >
                    <td className="py-2 px-2">{user.nombre_completo}</td>
                    <td className="py-2 px-2">{user.email}</td>
                    <td className="py-2 px-2">{user.telefono}</td>
                    <td className="py-2 px-2 text-center">
                      <button
                        onClick={() => handleRemoveUser(user.id_usuario)}
                        className="p-2 rounded-full hover:bg-red-100 text-red-500 transition"
                        title="Eliminar renter"
                      >
                        <FiX size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-end mt-6">
              <button
                onClick={handleRegisterDriver}
                className="px-6 py-2 bg-[#FFA800] text-white rounded-full text-sm font-semibold hover:bg-[#e19900] transition"
              >
                Finalizar registro
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default UserBrowser;
