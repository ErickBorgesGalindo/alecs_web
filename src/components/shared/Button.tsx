interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
  }
  
  export const Button = ({ children, onClick, className = "" }: ButtonProps) => {
    return (
      <button
        onClick={onClick}
        className={`px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border border-transparent bg-gradient-to-r from-[rgb(187,168,255)] to-[rgb(100,162,238)] ${className}`}
      >
        {children}
      </button>
    );
  };