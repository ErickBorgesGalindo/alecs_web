interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  bgColor?: string; // Nueva prop para el color de fondo
}

export const Button = ({
  children,
  onClick,
  className = "",
  bgColor = "bg-[rgb(187,168,255)]", // Color por defecto
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border border-transparent
        ${bgColor}
        hover:bg-gradient-to-r hover:from-[rgb(187,168,255)] hover:to-[rgb(100,162,238)]
        transition-colors duration-300
        ${className}
      `}
    >
      {children}
    </button>
  );
};


