import React from "react";
import Header from "../components/header/ui/Header";
import SideBur from "../components/sidebur/ui/SideburCategory";
import MainWindow from "../components/main/ui/Mainwindow";
import { getCategorys } from "@/api/InteractionData/getCategorys";

export async function getStaticProps() {
    const categorys = await getCategorys();
    console.log(categorys);
    return {
        props: { categorys: categorys }
    }
}

const Index = ({ categorys }) => {
    return (
        <>
            <Header />
            <main>
                <SideBur categorys={categorys} />
                <MainWindow />
            </main>
        </>
    )
}


export default Index;