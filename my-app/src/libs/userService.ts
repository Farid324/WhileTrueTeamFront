// libs/userService.ts
export const updateUserField = async (campo: string, valor: string) => {
    const token = localStorage.getItem("token");
  
    const res = await fetch("http://localhost:3001/api/user/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // asegúrate que sea Bearer
      },
      body: JSON.stringify({ campo, valor }),
    });
  
    if (!res.ok) {
      throw new Error("Error al actualizar el campo");
    }
  
    return res.json();
  };