import { Container } from "../shared/Container";
import logo from "../../assets/icon.svg";
import { Link } from "react-router-dom";
import { Button } from "../shared/Button";
import '../../index.css'; // Asegúrate de que la ruta sea correcta

export const Footer = () => {
  return (
    <footer className="relative p-10 bg-[#112D5D] rounded-t-lg">
      <Container className="grid grid-cols-1 md:grid-cols-3">
        <div className="">
          <div className="min-w-max relative mb-4">
            <a href="/" className="relative flex items-center gap-3">
              <img src={logo} alt="Alecs Studio Logo" className="w-10 h-10" />
              <div className="inline-flex text-lg cursor-pointer font-semibold text-back">
                Alecs Studio
              </div>
            </a>
          </div>
          <text className="text-back text-sm text-justify">
            Nos interesamos en crear soluciones digitales efectivas y reales.
            Queremos verte crecer y alcanzar el éxito
          </text>
          <div className="flex justify-between pr-60 mt-5">
            {/* Facebook */}
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="rgb(234,234,243)"
                  d="M29,3c-5.523,0-10,4.477-10,10v5h-6v8h6v19h8V26h7l1-8h-8v-4c0-2.209,1.791-4,4-4h4V3.322 C33.091,3.125,30.921,2.996,29,3L29,3z"
                ></path>
              </svg>
            </a>
            {/* LinkedInn */}
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
              >
                <path
                  fill="rgb(234,234,243)"
                  d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                ></path>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 32 32"
              >
                <path
                  fill="rgb(234,234,243)"
                  d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"
                ></path>
              </svg>
            </a>
            {/* Twitter */}
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <polygon
                  fill="rgb(234,234,243)"
                  points="41,6 9.929,42 6.215,42 37.287,6"
                ></polygon>
                <polygon
                  fill="rgba(255,255,255,0)"
                  fill-rule="evenodd"
                  points="31.143,41 7.82,7 16.777,7 40.1,41"
                  clip-rule="evenodd"
                ></polygon>
                <path
                  fill="rgb(234,234,243)"
                  d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className=" text-back grid grid-cols-1 md:grid-cols-3 ml-10 items-center content-center">
          <a href="#services" className="mb-5 text-back">
            Servicios
          </a>
          <a href="#about-us" className="mb-5 text-back">
            Nosotros
          </a>
          <a href="#our-projects" className="mb-5 text-back">
            Proyectos
          </a>
          <a href="#contact" className="mb-5 text-back">
            Contacto
          </a>
          <Link to="/portfolio" className="mb-5 text-back">
            Portfolio
          </Link>
          <Link to="/blog" className="mb-5 text-back">
            Blog
          </Link>
        </div>

        <div className=" items-center content-center">
          <div className="flex justify-center">
            <text className="text-white text-2xl font-medium">
              Nuestro Blog
            </text>
          </div>
          <div className="flex justify-center">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Introduce your email address"
              className="transition-all duration-50 mt-4 text-sm shadow appearance-none rounded-xl bg-body w-8/12 h-10 py-2 px-3 text-heading-1 leading-tight focus:outline-none focus:shadow-outline hover:border border-pink-400"
            />
          </div>
          <div className="mt-4 flex justify-center">
            <Button className="w-8/12 rounded-xl bg-blue">
              <span className="text-white font-medium">¡Suscribete!</span>
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
