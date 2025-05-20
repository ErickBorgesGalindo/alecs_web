import React from "react";

interface ProjectCardProps {
  title: string;
  image: string;
  link?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  link,
}) => {
  return (
    <div className="relative overflow-hidden rounded-xl group shadow-lg">
      {/* Imagen con opacidad */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 "
      />

      {/* Capa de fondo con opacidad */}
      <div className="absolute inset-0 bg-black opacity-40 transition duration-300"></div>

      {/* Contenido del texto */}
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <h3 className="text-[#F3F3EA] text-lg font-semibold leading-snug z-10">
          {title}
        </h3>
        <a
          href={link}
          className="text-sm text-[#F3F3EA] mt-1 underline z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        >
          Ver más →
        </a>
      </div>
    </div>
  );
};
