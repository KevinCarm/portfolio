import "bulma/css/bulma.css";
import ExperienceItem from "./ExperienceItem.jsx";
import style from "./experience.module.css";
import close from "../../assets/close.svg";
import list from "./data.js";
import { useState } from "react";

const Experience = () => {
    const [selectItem, setSelectItem] = useState([]);

    const onItemClickLister = title => {
        const modal = document.querySelector("#modal");
        setSelectItem(list.find(i => i.title === title).images);
        modal.showModal();
    };

    const onCloseModalClickListener = () => {
        setSelectItem([]);
        const modal = document.querySelector("#modal");
        modal.close();
    };

    return (
        <>
            {typeof selectItem != "undefined" ? (
                <dialog id='modal' className={style.dialog}>
                    <div
                        className={`${style.close_container} is-flex is-column`}
                    >
                        <img
                            onClick={onCloseModalClickListener}
                            src={close}
                            className={style.close}
                        />
                    </div>
                    <div className= {`${style.image_container}`}>
                            {typeof selectItem != "undefined"
                                ? selectItem.length > 0
                                    ? selectItem.map(i => (
                                          <img key={Date.now()} src={i} />
                                      ))
                                    : null
                                : null}
                        </div>
                </dialog>
            ) : null}
            <div className={style.container}>
                {list.map(e => (
                    <div className={style.container_1} key={e.when}>
                        <ExperienceItem
                            onClickEvent={onItemClickLister}
                            skills={e.skills}
                            title={e.title}
                            description={e.description}
                            where={e.where}
                            when={e.when}
                            images={e.images}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Experience;
