import React, {FC} from "react";
import {Categorys} from "@/types/categorys";
import style from "./SideburCategory.module.scss";

const SideburCategory: FC<Categorys> = ({ categorys }) => {
    return (
        <>
            <div className={style.main_catalogProduct}>
                <div className={style.main_headerCatalog}>Каталог:</div>
                {categorys.map((category) => {
                    return <button key={category.id}>{category.CategoryName}</button>;
                })}
            </div>
        </>
    );
};

export default SideburCategory;
