import react, { useState } from "react"
import style from './Selectorwithchecks.module.scss'


const Selectorwithchecks = ({ nameSelector, content, seterContent }) => {
    const [selectorActive, setSelectorActive] = useState(false);
    return (
        <>
            <div onClick={() => setSelectorActive(!selectorActive)} className={style.selector}>{nameSelector}</div>
            {selectorActive &&
                <div className={style.selectorMainBlock}>
                    {content.map(contentItem => {
                        return (
                            <label key={contentItem.id} className={style.labelCheckBoxs}>
                                <input type="checkbox" 
                                onChange={() => {
                                    const newContent = Object.assign([], content);
                                    newContent[contentItem.id - 1].CheckActive = !newContent[contentItem.id - 1].CheckActive;
                                    seterContent(newContent);
                                }} />
                                <p>{contentItem.NameCheck}</p>
                            </label>
                        )
                    })}

                </div>
            }
        </>
    )
}


export default Selectorwithchecks

