import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Card = ({ image, title, description, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 flex flex-col justify-between">
      <div>
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={link} className="bg-gray-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
          <span className="mr-2">View Project</span>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </div>
    </div>
  );
}

export default Card;
