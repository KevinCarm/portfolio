import 'bulma/css/bulma.css';
import style from './about.module.css';

const About = () => {
    return <>
    <div className={`${style.container}`}>
        <div className="columns is-8">
            <div className="column">
                <div className="block is-flex">
                    <p className="title is-2">Kevin Carmona</p>
                </div>
                <div className="block is-flex">
                    <p className="subtitle is-4">Software developer</p>
                </div>
                <div className="block is-flex">
                    <p style={{width: "200px"}} className="subtitle is-6 content">Creando soluciones eficaces con software de calidad</p>
                </div>
            </div>
            <div className="column">
                <div className={`${style.text_container} block`}>
                    <p className="">Soy un desarrollador de software capáz de crear software que se adapte a las necesidades que se estén presentando.</p>
                </div>
                <div className={`${style.text_container} block`}>
                    <p className="">Mi meta principal es ser un profesional que desarrolle <strong>software</strong> para los clientes.
                        Analizar las problemáticas actualues a proponer las mejores soluciónes.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
};

export default About;