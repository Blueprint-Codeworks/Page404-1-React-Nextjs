import Image from "next/image";
import Link from "next/link";
import SocialSection from "./components/socialSection/page";
export default function Home() {
  return (
    <div className="container">
    <h1 className="error-code">
      <span className="digit">4</span>
      <span className="digit">0</span>
      <span className="digit">4</span>
    </h1>
    <p className="error-message">Oops... Página no encontrada</p>
    <p className="error-description">Parece que la página que estás buscando no existe o fue movida.</p>
    
    <Link href="/" className="home-button">
      Volver al Inicio
    </Link>

    <div className="decorative-circles">
      <span className="circle large"></span>
      <span className="circle medium"></span>
      <span className="circle small"></span>
    </div>
   <SocialSection/>
  </div>
  );
}
