import { useEffect, useState } from "react";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { motion } from "framer-motion";

export const Hero = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <section className="relative pt-32 lg:pt-36">
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-[rgb(187,168,255)] to-[rgb(100,162,238)] blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
        </div>

        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-[rgb(187,168,255)] to-[rgb(100,162,238)] blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
        >
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            Impulsa tu negocio con{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(187,168,255)] to-[rgb(100,162,238)] ml-0">
              Soluciones Digitales
            </span>
          </h1>

          <Paragraph className="mt-8">
            Creamos experiencias a medida con diseño web, desarrollo de
            software, automatización, branding y soporte técnico especializado.
            Nos enfocamos en soluciones funcionales, creativas y orientadas a
            resultados que impulsan el crecimiento de tu negocio.
          </Paragraph>
          <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
            <div className="flex sm:flex-row flex-col gap-5 w-full">
              <Button className="min-w-max ">
                <a href="#contact" className="relative z-[5] text-white text-bold">
                  ¡Empecemos!
                </a>
              </Button>
              {/* Botón para cambiar a modo oscuro */}
              {/* <button
                onClick={() => setIsDark(!isDark)}
                className="min-w-max px-6 py-3 rounded-xl border border-box-border text-heading-1 bg-box-bg hover:bg-[rgb(20,33,61)] hover:text-white transition"
              >
                {isDark ? "Modo Claro ☀️" : "Modo Oscuro 🌙"}
              </button> */}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-2-non lg:mx-0 mx-auto max-w-3xl"
        >
          {/* Cambiar esta imagen por un gif o animación de mi logo */}
          {/* <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnhpbndxeXJvOW5lMDk0ZXh2NWZtd28wMDdmdXUya3V6bTB2bm0xeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2XB76CaWPggiNW/giphy.gif" alt="Hero Image" width={2350} height={2359} className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-non max-h-96"/> */}
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDIyajVvaWNoNTRjNDl5ODhsaXRleHNqaXd1Y29kb2ppaTFmeG8wdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Ih6NnugfrRa3UmyWO3/giphy.gif"
            alt="Hero Image"
            width={2350}
            height={2359}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-non max-h-96"
          />
        </motion.div>
      </Container>
    </section>
  );
};
