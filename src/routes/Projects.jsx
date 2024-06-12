import React from 'react';
import Card from '../components/Card';
import plaza from '../images/plaza.png'
import practicaimg from '../images/practicaImagenes.png'
import practicaform from '../images/practicaFormulario.png'
import practicareg from '../images/practicaRegistros.png'
import practicagenetico from '../images/genetico.png'
import practicatabu from '../images/tabu.png'

const Projects = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Card 
        image={plaza} 
        title="Sistema para el restaurante Plaza-Jardín (PHP)" 
        description="Este sistema busca ofrecerle los recursos a Plaza Jardín para cubrir las principales necesidades de los clientes, así como, también el servicio de administración por parte de los empleados, siendo este flexible y manejable para cada uno de ellos. Este sistema implementa menú a la mano con un solo clic" 
        link="https://github.com/marisol161/SISTEMA-VENTA-RESTAURANTE"
      />
      <Card 
        image={practicaform} 
        title="Práctica de formulario implementando React (JAVASCRIPT)" 
        description="Formulario utilizando la tecnología de react, con los campos correspondientes a nombre, contacto, añadir un archivo o imagen de la mascota, e insertar algun padecimiento, visualizando este en un card independiente por cada paciente." 
        link="https://github.com/marisol161/practicaFormulario"
      />
      <Card 
        image={practicaimg} 
        title="Práctica de Imágenes centradas (JAVASCRIPT)" 
        description="Está práctica fue desarrollada para visualizar la imagen en un componente principal  conforme se le vaya dando clic a cada componente." 
        link="https://github.com/marisol161/practicaImagen"
      />
      <Card 
        image={practicareg} 
        title="Práctica de inserción (JAVASCRIPT)" 
        description="Práctica de formulario para registrar, eidtar y eliminar un registro" 
        link="https://github.com/marisol161/practicaregistro"
      />
      <Card 
        image={practicagenetico} 
        title="API de Algoritmos geneticos (PYTHON)" 
        description="El API de algoritmos geneticos se basa en buscar los mejor adaptados y los más fuertes tenderán a vivir más tiempo y a dejar una
        mayor descendencia mientras, que aquellos menos adaptados tendrán una descendencia menor. Con el tiempo,
        los genes de aquellos individuos mejor adaptados serán más abundantes y, por lo tanto, es de esperar una
        mejora global de la especie." 
        link="https://github.com/marisol161/PLF-SEPTIMO-SEMESTRE-ALGORITMOS-GENETICOS"
      />
      <Card 
        image={practicatabu} 
        title="API de búsqueda tabu (PYTHON)" 
        description="La búsqueda tabú, al igual que la técnica del templado simulado, es un procedimiento metaheurístico, este se basa en utiliza una memoria adaptativa que va variando conforme a la ejecución del algoritmo y que
        permite “recordar” los caminos visitados recientemente." 
        link="https://github.com/marisol161/API-TABU"
      />
    </div>
  );
}

export default Projects;
