import React from 'react';
import Card from '../components/Card';
import plaza from '../images/plaza.png'
import practicaimg from '../images/practicaImagenes.png'
import practicaform from '../images/practicaFormulario.png'
import practicareg from '../images/practicaRegistros.png'

const Projects = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Card 
        image={plaza} 
        title="Sistema para el restaurante Plaza-Jardín" 
        description="Este sistema busca ofrecerle los recursos a Plaza Jardín para cubrir las principales necesidades de los clientes, así como, también el servicio de administración por parte de los empleados, siendo este flexible y manejable para cada uno de ellos. Este sistema implementa menú a la mano con un solo clic" 
        link="https://github.com/marisol161/SISTEMA-VENTA-RESTAURANTE"
      />
      <Card 
        image={practicaform} 
        title="Práctica de formulario implementando React" 
        description="Formulario utilizando la tecnología de react, con los campos correspondientes a nombre, contacto, añadir un archivo o imagen de la mascota, e insertar algun padecimiento, visualizando este en un card independiente por cada paciente." 
        link="https://github.com/marisol161/practicaFormulario"
      />
      <Card 
        image={practicaimg} 
        title="Práctica de Imágenes centradas" 
        description="Está práctica fue desarrollada para visualizar la imagen en un componente principal  conforme se le vaya dando clic a cada componente." 
        link="https://github.com/marisol161/practicaImagen"
      />
      <Card 
        image={practicareg} 
        title="Práctica de inserción" 
        description="Práctica de formulario para registrar, eidtar y eliminar un registro" 
        link="https://github.com/marisol161/practicaregistro"
      />
    </div>
  );
}

export default Projects;
