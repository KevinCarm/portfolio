import style from './footer.module.css';
import 'bulma/css/bulma.css';
import git from '../../assets/git.svg';
import linkedin from '../../assets/linkedin.svg';
const Footer = () => {
    return <>
        <div className={style.container}>
            <div className="columns">
                <div className="column">
                    <div className="is-flex is-justify-content-center">
                        <p className="subtitle is-5">Sitio creado con React js, Bulma css y codificado en Visual Studio Code</p>
                    </div>
                </div>
                <div className="column">
                    <div style={{height: "100%"}} className="is-flex is-justify-content-center">
                        <div  className="is-flex is-flex-direction-column  is-justify-content-center">
                           <div className="columns">
                               <div className="column">
                                   <a href="https://github.com/KevinCarm">
                                       <img src={git}/>
                                   </a>
                               </div>
                               <div className="column">
                                   <a href="https://www.linkedin.com/in/kevin-carmona-serrano-60b613234/">
                                       <img src={linkedin}/>
                                   </a>
                               </div>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Footer;