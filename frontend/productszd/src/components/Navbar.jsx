import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, NavLink } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const { logout, authCokie } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Si no hay sesión, no mostrar el NavBar
  if (!authCokie) return null;

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-bold">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-300 hover:text-gray-400"
            }
          >
            Zona Digital
          </NavLink>
        </div>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold"
                  : "text-gray-300 hover:text-gray-400"
              }
            >
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/employees"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold"
                  : "text-gray-300 hover:text-gray-400"
              }
            >
              Empleados
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clients"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold"
                  : "text-gray-300 hover:text-gray-400"
              }
            >
              Clientes
            </NavLink>
          </li>
        </ul>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
