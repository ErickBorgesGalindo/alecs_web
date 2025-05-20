import React from "react";
import '../../index.css'; // Asegúrate de que la ruta sea correcta

interface CardServiceProps {
  title: string;
  description: string;
  Icon: React.ElementType; // Hacer que Icon sea obligatorio
  iconClassName?: string; // Nueva prop para clases personalizadas del ícono
}

export const CardService: React.FC<CardServiceProps> = ({
  title,
  description,
  Icon,
  iconClassName = "", // Valor por defecto vacío
}) => {
  return (
    <div
      className="text-left text-heading-1 transition-all duration-300 bg-box-bg rounded-lg shadow-lg shadow-box-shadow ease-liner focus-within:bg-body  
                p-6 hover:-rotate-z-2 hover:bg-background-card hover:text-heading-2">
      <Icon className={`text-left mb-4 w-8 h-8 ${iconClassName}`} /> {/* Renderizar solo el ícono */}
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="font-light text-sm ">{description}</p>
    </div>
  );
};