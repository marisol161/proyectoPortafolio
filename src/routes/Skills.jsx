import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as brandsIcons from '@fortawesome/free-brands-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import { faAws } from '@fortawesome/free-brands-svg-icons'; // Importar el ícono de AWS

import Banner from '../components/Banner';

const Skills = () => {
  const technologies = [
    { name: 'C++', icon: <FontAwesomeIcon icon={brandsIcons.faCpp} /> },
    { name: 'Python', icon: <FontAwesomeIcon icon={brandsIcons.faPython} /> },
    { name: 'JavaScript', icon: <FontAwesomeIcon icon={brandsIcons.faJs} /> },
    { name: 'React', icon: <FontAwesomeIcon icon={brandsIcons.faReact} /> },
    { name: 'Node.js', icon: <FontAwesomeIcon icon={brandsIcons.faNode} /> },
    { name: 'Angular', icon: <FontAwesomeIcon icon={brandsIcons.faAngular} /> },
    { name: 'Git', icon: <FontAwesomeIcon icon={faGit} /> },
    { name: 'AWS', icon: <FontAwesomeIcon icon={faAws} /> }, // Añadir el ícono de AWS
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {technologies.map((tech, index) => (
        <Banner key={index} icon={tech.icon} name={tech.name} />
      ))}
    </div>
  );
};

export default Skills;
