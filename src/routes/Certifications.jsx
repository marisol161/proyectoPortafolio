import React from 'react';
import CardCertificados from '../components/CardCertificados'; // Importa el componente CardCertificados
import certificado1 from '../images/curso-backend-node.png'; // Importa las imágenes de tus certificados
import certificado2 from '../images/curso-configuracion.png'; // Importa las imágenes de tus certificados
import certificado3 from '../images/curso-ciberseguridad-empresas.png'; // Importa las imágenes de tus certificados
import certificado4 from '../images/curso-ataques.png'; // Importa las imágenes de tus certificados
import certificado5 from '../images/buman.jpg'; // Importa las imágenes de tus certificados
import certificado6 from '../images/curso-c.jpg'; // Importa las imágenes de tus certificados
import platziLogo from './../images/platzi.png';
import udemyLogo from './../images/udemy.png';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono que deseas usar

const Certifications = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <CardCertificados
        imagenCertificado={certificado1}
        titulo="Certificado de BACKEND CON NODE.JS: API REST CON EXPRESS.JS"
        fecha="Concluido el 21 de mayo de 2024"
        icono={faGlobe} // Pasa el ícono como una prop al componente CardCertificados
      />
      <CardCertificados
        imagenCertificado={certificado2}
        titulo="Certificado de CONFIGURACION DE ENTORNO DE DESARROLLO EN WINDOWS"
        fecha="Concluido el 28 de marzo de 2024"
        icono={'platzi'}
      />
      <CardCertificados
        imagenCertificado={certificado3}
        titulo="Certificado de CIBERSEGURIDAD Y PRIVACIDAD PARA EMPRESAS"
        fecha="Concluido el 27 de marzo de 2024"
        icono={'platzi'}
      />
      <CardCertificados
        imagenCertificado={certificado4}
        titulo="Certificado de CIBERSEGURIDAD PARA PREVENIR ATAQUES INFORMATICOS"
        fecha="Concluido el 10 de marzo de 2024"
        icono={'platzi'}
      />
      <CardCertificados
        imagenCertificado={certificado5}
        titulo="Certificado de BUMAN1.0 - APP ANDROID + SISTEMA PARA RESTAURANTE EN C#"
        fecha="Concluido el 1 de marzo de 2024"
        icono={'udemy'} // Pasa 'udemy' como el icono correspondiente a Udemy
      />
      <CardCertificados
        imagenCertificado={certificado6}
        titulo="Certificado de C# TOTAL"
        fecha="Concluido el 7 de Enero de 2023"
        icono={'udemy'} // Pasa 'udemy' como el icono correspondiente a Udemy
      />
      {/* Agrega más instancias de CardCertificados según sea necesario */}
    </div>
  );
}

export default Certifications;
