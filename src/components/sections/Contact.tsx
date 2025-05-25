import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import React, { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    comoNosSupiste: "",
    descripcionProyecto: "",
  });

  // const handleScrollToContact = () => {
  //   const section = document.getElementById("contact");
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Formulario enviado:", formData);
  //   // Aquí podrías agregar la lógica para enviar el formulario
  // };

  return (
    <section id="about-us" className="mt-20 mb-10 px-4 sm:px-10">
      <Container>
        <div className="max-w-3xl mx-auto rounded-lg shadow-lg shadow-box-shadow ease-liner focus-within:bg-body focus-within:border-primary bg-gradient-to-r from-[rgb(187,168,255)] to-[rgb(100,162,238)] p-1">
          <div className="bg-box-bg flex flex-col items-center p-6 sm:p-10">
            <Title>¡Escríbenos!</Title>
            <div className="mt-5 text-center">
              <p className="text-heading-1 text-sm sm:text-xl mb-2 mx-20">
                Cuéntanos sobre tu proyecto y con gusto nos pondremos en
                contacto contigo en un plazo de 24 horas.
              </p>
            </div>

            <form
              className="w-full max-w-lg mt-10"
              action="https://formspree.io/f/xknyreng"
              method="POST"
            >
              <div className="mb-4">
                <label
                  htmlFor="nombre"
                  className="block text-heading-1 text-sm sm:text-md font-medium mb-2"
                >
                  Tu nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="transition-all duration-50 shadow appearance-none rounded-full bg-body w-full py-2 px-3 text-heading-1 leading-tight focus:outline-none focus:shadow-outline hover:border border-blue-400"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-heading-1 text-sm sm:text-md font-medium mb-2"
                >
                  Tu Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="transition-all duration-50 shadow appearance-none rounded-full bg-body w-full py-2 px-3 text-heading-1 leading-tight focus:outline-none focus:shadow-outline hover:border border-blue-400"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="comoNosSupiste"
                  className="block text-heading-1 text-sm sm:text-md font-medium mb-2"
                >
                  ¿Cómo supiste de nosotros?
                </label>
                <select
                  id="comoNosSupiste"
                  name="comoNosSupiste"
                  className="transition-all duration-50 shadow appearance-none rounded-full bg-body w-full py-2 px-3 text-heading-1 leading-tight focus:outline-none focus:shadow-outline hover:border border-blue-400"
                  value={formData.comoNosSupiste}
                  onChange={handleChange}
                >
                  <option value="">Selecciona...</option>
                  <option value="redes_sociales">Redes Sociales</option>
                  <option value="google">Google</option>
                  <option value="recomendacion">Recomendación</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="descripcionProyecto"
                  className="block text-heading-1 text-sm sm:text-md font-medium mb-2"
                >
                  Describe tu proyecto
                </label>
                <textarea
                  id="descripcionProyecto"
                  name="descripcionProyecto"
                  rows={5}
                  className="transition-all duration-50 resize-none shadow appearance-none rounded-2xl bg-body w-full py-2 px-3 text-heading-1 leading-tight focus:outline-none focus:shadow-outline hover:border border-blue-400"
                  value={formData.descripcionProyecto}
                  onChange={handleChange}
                />
              </div>

              <Button
                className="w-1/2"
                bgColor="bg-blue"
              >
                <span className="relative z-[5] text-white">Enviar</span>
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
