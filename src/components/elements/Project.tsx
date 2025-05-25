import React from "react";
import { Paragraph } from "../shared/Paragraph";

interface ProjectProps {
  title: string;
  description: string;
  contributionTitle: string;
  contributions: string[];
  image: string;
  imageAlt?: string;
  link?: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  contributionTitle,
  contributions,
  image,
  imageAlt = "Imagen del proyecto",
  link,
}) => {
  return (
    <section className="flex flex-col md:flex-row items-stretch gap-10 my-10 pt-10">
      {/* Lado izquierdo */}
      <div className="flex-1 text-left space-y-4 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-heading-1">{title}</h2>
        <Paragraph className="text-base text-heading-1">
          {description}
        </Paragraph>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-heading-1">
            {contributionTitle}
          </h3>
          <ul className="list-disc list-inside space-y-1">
            {contributions.map((item, idx) => (
              <li key={idx} className="text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Enlace para descargar o visitar el proyecto */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-gray-500 hover:underline text-sm underline"
        >
          Ver proyecto →
        </a>
      </div>
      {/* Lado derecho */}
      <div className="flex-1 flex justify-center items-stretch">
        <img
          src={image}
          alt={imageAlt}
          className="rounded-xl shadow-lg max-w-xs w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Project;
