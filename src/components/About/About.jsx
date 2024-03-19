import 'bulma/css/bulma.css';
import style from './about.module.css';

const About = () => {
    return <>
    <div className={`${style.container}`}>
        <div className="columns is-8">
            <div className="column">
                <div className="block is-flex">
                    <p className="title is-2">Kevin Carmona Serrano</p>
                </div>
                <div className="block is-flex">
                    <p className="subtitle is-4">Software developer</p>
                </div>
                <div className="block is-flex">
                    <p style={{width: "200px"}} className="subtitle is-5 content">Creando soluciones eficaces con software de calidad</p>
                </div>
            </div>
            <div className="column">
                <div className={`${style.text_container} block`}>
                    <p className="">Soy un desarrollador de software capáz de crear software que se adapte a las necesidades que se estén presentando.</p>
                </div>
                <div className={`${style.text_container} block`}>
                    <p className="">Mi meta principal es ser un profesional capáz de desarrollar <strong>software</strong> que se adapte a las tecnologías actuales y a las necesidades de las personas.
                        Analizar las problematicas que se estén presentando y proponer soluciones inteligentes.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
};

export default About;