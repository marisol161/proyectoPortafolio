import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import platziLogo from './../images/platzi.png'; // Importa la imagen del logo de Platzi
import udemyLogo from './../images/udemy.png'; // Importa la imagen del logo de Udemy

const CardCertificados = ({ imagenCertificado, titulo, fecha, icono }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full" src={imagenCertificado} alt={titulo} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{titulo}</div>
        <div className="flex items-center mb-2 text-gray-700">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
          <span>{fecha}</span>
        </div>
        <div className="flex items-center">
          <img src={icono === 'platzi' ? platziLogo : udemyLogo} alt={icono === 'platzi' ? 'Platzi' : 'Udemy'} className="w-8 h-8 mr-2" />
          <span className="text-gray-700">{icono === 'platzi' ? 'Platzi' : 'Udemy'}</span>
        </div>
      </div>
    </div>
  );
}

export default CardCertificados;
