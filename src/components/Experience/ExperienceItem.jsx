import 'bulma/css/bulma.css';
import style from './experience.module.css';

const ExperienceItem = (props) => {
    return <>
    <br/>
    <div className={style.item_container}>
        <div className="columns">
            <div className="column mr-1">
                <p>{props.when}</p>
                <hr/>
            </div>
            <div className="column">
                <h4 className="title is-5">{props.title}</h4>
                <h4 className="mb-4">{props.where}</h4>
                <h4>{props.description}</h4>
            </div>
        </div>
        <div key={props.title} className={style.skills}>
            {props.skills.map(e => <span className="tag is-link">{e}</span>)}
        </div>
    </div>
    <br/>
    </>
};

export default ExperienceItem;