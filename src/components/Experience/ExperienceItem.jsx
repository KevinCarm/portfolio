import "bulma/css/bulma.css";
import style from "./experience.module.css";

const ExperienceItem = props => {
    let count = 2;
    if(props.images) {
        count = props.images.length;
    }
    const stypeImages = { width: count > 1 ? "60px": "50%", height: "100px",  borderRadius: "10px"}
    return (
        <>
            <br />
            <div
                onClick={() => {
                    props.onClickEvent(props.title);
                }}
                className={style.item_container}
            >
                <div className='columns'>
                    <div className='column mr-1'>
                        <p>{props.when}</p>
                        <hr />
                    </div>
                    <div className='column'>
                        <h4 className='title is-5'>{props.title}</h4>
                        <h4 className='mb-4'>{props.where}</h4>
                        <h4>{props.description}</h4>
                    </div>
                </div>
                <div key={props.where} className={style.skills}>
                    {props.skills.map(e => (
                        <span className='tag is-link'>{e}</span>
                    ))}
                </div>
                <br />
                <div>
                    {
                        props.images ?
                            <div className="columns is-desktop">
                                {
                                    props.images.map(i => <div className="column">
                                        <img style={stypeImages} src={i} />
                                    </div>)
                                }
                            </div> : null
                    }
                </div>
                <br />
                <br />
                <br />
            </div>
            <br />
        </>
    );
};

export default ExperienceItem;
