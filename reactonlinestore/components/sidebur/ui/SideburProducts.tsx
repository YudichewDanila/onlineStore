import React, {useState} from "react";
import style from "./SideburProducts.module.scss";
import SelectorPrice from "@/modules/customSelectors/Selectorwithchecks"

const SideburProducts = () => {
    const [checks, setChecks] = useState([
        {id:1, NameCheck:'1000-5000', CheckActive:false },
        {id:2, NameCheck:'5000-10000', CheckActive:false }
    ])

    return (
        <>
            <div className={style.sideburProducts}>
                <SelectorPrice nameSelector={'Цена'} content={checks} seterContent={setChecks} />
            </div>
        </>
    )
}

export default SideburProducts;