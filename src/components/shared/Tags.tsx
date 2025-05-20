interface TagProps {
    tag: string;
    className?: string;
  }
  
  export const Tags = ({ tag, className="" }: TagProps) => {
  
    return (
      <span
        className={`inline-block rounded-full px-3 py-1 text-heading-1 text-sm font-semibold mr-2 mb-2 ${className}`}
      >
        {tag}
      </span>
    );
  };
  