import 'bulma/css/bulma.css'
import ExperienceItem from "./ExperienceItem.jsx";
import style from './experience.module.css';

const list = [
    {
        title: "Desarrollador Java",
        where: "Coppel, Servicios Financieros",
        when: "Enero 2023 - Hoy",
        description: "Desarrollo de sistemas bancarios y participación en el desarrollo del core bancario",
        skills: ["Java", "Spring Boot", "Insumos BIAN", "Servicios web"]
    },
    {
        title: "App de Registro de gastos",
        where: "Proyecto personal",
        when: "Octubre 2023",
        description: "Aplicación de android nativa que permite el registro de gastos diarios realizados, mostrando una lista dividida por fechas con sus respectivos gastos",
        skills: ["Kotlin", "Android Studio", "ROOM"]
    },
    {
        title: "App para consulta de clima",
        where: "Proyecto personal",
        when: "Octubre 2022",
        description: "Aplicación de android nativa que muestra un mapa de google y al dar click en una ciudad se obtiene sus coordenadas con las cuales se consulta una api externa para obtener información del clima",
        skills: ["Kotlin", "Android Studio", "APIS", "View Model"]
    },
    {
        title: "Servicio Back End con spring",
        where: "Proyecto personal",
        when: "Septiempre 2022",
        description: "Un servicio web creado con spring que utiliza jpa para la persistencia de datos y spring security junto con jwt para crear una autenticación simple",
        skills: ["Java", "Spring Boot", "APIS", "Spring Security", "JWT"]
   },
];

const Experience = () => {
    return <>
    <div className={style.container}>
        {list.map(e => <div className={style.container_1} key={e.when}>
            <ExperienceItem skills={e.skills} title={e.title} description={e.description} where={e.where} when={e.when}/>
        </div>)}
    </div>
    </>
};

export default Experience;