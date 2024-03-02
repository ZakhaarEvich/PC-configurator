import React, {memo} from "react";
import {Header} from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export const Layout: React.FC<{ children: React.ReactElement }> = memo(({children}) => {
    return (
        <div
            className="scroll-container flex flex-col h-screen overflow-auto overflow-x-hidden bg-app"
        >

            <Header/>
            
            <Main>
                <div className="relative flex lg:flex-row flex-col-reverse">
                   
                    <div className="max-w-4xl flex-1">
                        {children}
                    </div>

                </div>
            </Main>

            <Footer/>

        </div>
    );
});