import React from 'react';
import imgYo from '../images/Imagen2.png';
import Banner from '../components/Banner';
import face from '../images/facebook.png'
import git from '../images/github.png'
import insta from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'



const SocialIcon = ({ href, src, alt }) => (
  <a href={href} aria-label={alt} className="w-8 h-8">
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </a>
);

const Index = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-8">Hello, I am rosaldomx.dev Frontend Developer</h1>
      <figure className="bg-gray-200 rounded-lg p-4 border-2 border-gray-300 w-full max-w-3xl mx-auto mb-8">
        <img className="w-52 h-52 rounded-full mx-auto" src={imgYo} alt="Yo" />
        <div className="pt-4 text-center space-y-2">
          <blockquote>
            <p className="text-sm font-medium text-justify">
              “Soy una persona comprometida con el trabajo a realizar, honesta,
              responsable, empatica, me adapto al entorno de trabajo y cumplir con los
              retos que se me pongan enfrente. Mis fortalezas incluyen un pensamiento
              crítico y sistémico que me permite analizar mejor la situación y tomar las
              decisiones más óptimas. Comprometida con el aprendizaje continuo y el
              crecimiento profesional en un entorno colaborativo.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500">
              Marisol Rosaldo
            </div>
            <div className="text-slate-700">
              Front-End Developer, México
            </div>
          </figcaption>
          {/* <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Descargar CV
          </button> */}
          <div className="flex justify-center space-x-4 mt-4 text-gray-600 dark:text-gray-300">
            <SocialIcon href="https://github.com/marisol161" src={git} alt="rosaldomx.dev" />
            <SocialIcon href="https://www.facebook.com/mari.rosaldo.39/" src={face} alt="rosaldomx.dev" />
            <SocialIcon href="https://x.com/RosaldoSol" src={twitter} alt="rosaldomx.dev" />
            <SocialIcon href="linkedin.com/in/marisol-rosaldo-jimenez-82a453272" src={linkedin} alt="rosaldomx.dev" />
            <SocialIcon href="https://www.instagram.com/sol_rosaldo12/" src={insta} alt="rosaldomx.dev" />
          </div>
        </div>
      </figure>

      {/* <div className="container mx-auto">
        <h3>Hard Skills</h3>
        <div className="container mx-auto">
        <h3 className="text-2xl font-bold mb-4">Hard Skills</h3>
        <div className="flex flex-wrap justify-center">
          <Banner icon={<FaReact size={32} />} name="React" />
          <Banner icon={<FaPython size={32} />} name="Python" />
          <Banner icon={<FaNodeJs size={32} />} name="Node.js" />
          <Banner icon={<FaCss3Alt size={32} />} name="CSS" />
          <Banner icon={<FaGitAlt size={32} />} name="Git" />
          <Banner icon={<FaHtml5 size={32} />} name="HTML" />
          <Banner icon={<FaJs size={32} />} name="JavaScript" />
          <Banner icon={<FaBootstrap size={32} />} name="Bootstrap" />
          <Banner icon={<FaGithub size={32} />} name="GitHub" />
          <Banner icon={<FaGatsby size={32} />} name="Gatsby" />
          <Banner icon={<FaGraphql size={32} />} name="GraphQL" />
        </div>
      </div>
      </div> */}
    </div>
  );
};

export default Index;
