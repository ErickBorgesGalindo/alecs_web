interface ParagraphProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export const Paragraph = ({ children, className }: ParagraphProps) => {
    return <div className={`text-heading-1 md:text-md ${className}`}>{children}</div>;
  };
  