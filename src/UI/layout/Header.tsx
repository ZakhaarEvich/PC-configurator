import React, { memo, useCallback, useState } from "react";
import { BsChatDots } from "react-icons/bs";

import logo from "@assets/logo.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const Header = memo(() => {

    const goToHomePage = () => {
        window.location = (window as any).location.href.split('?')[0];
    }

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = useCallback(() =>
        setIsMobileMenuOpen(prev => !prev),
        [isMobileMenuOpen]
    );

    return (
        <header
            className="flex sticky top-0 w-full shadow-xl z-20 shrink-0 flex-col"
        >
            {/* Top header*/}
            <div className="relative flex items-center justify-center bg-app-dark text-app-t px-5 py-1">
                <div className="container flex items-center justify-between">
                    <h2
                        className="font-bowler text-lg uppercase -mb-1 flex-1 cursor-pointer"
                        onClick={goToHomePage}
                        title="Переход на главную страницу"
                    >
                        Компьютерный ослик
                    </h2>

                    <div className="flex gap-5 items-center lg:mr-20">
                        <a
                            href="https://t.me/ZakHaarEvich"
                            className="flex gap-1.5 items-center hover:underline md:mr-20 lg:mr-0"
                            target="_blank"
                        >
                            <span className="md:block hidden">Консультация по выбору железа</span>
                            <BsChatDots/>
                        </a>

                        {/* <a href="https://t.me/zkhrevich" target="_blank">
                            <img
                                className="h-10"
                                src={logo}
                                alt=""
                            />
                        </a> */}
                    </div>
                </div>
            </div>

            {/* Bottom header for desktop */}
            <div className="md:flex hidden relative items-center justify-center bg-white text-app-dark px-5 py-2.5">

                <div className="container flex items-center justify-between">
                    <h3
                        className="font-bowler text-lg uppercase -mb-1 flex-1 cursor-pointer"
                        onClick={goToHomePage}
                    >
                        Компьютерный конфигуратор без излишеств
                    </h3>

                    <div className="flex gap-10 font-bold">
                        <a
                            href="https://www.ozon.ru/"
                            className="hover:underline"
                            target="_blank"
                        >Ozon</a>

                        <a
                            href="https://onliner.by/"
                            className="hover:underline"
                            target="_blank"
                        >Onliner</a>

                        <a
                            href="https://aliexpress.com"
                            className="hover:underline"
                            target="_blank"
                        >Aliexpress</a>
                    </div>
                </div>
            </div>


            {/* Bottom header for mobile */}
            {/* <div className={`md:hidden flex flex-col relative bg-white text-app-dark px-5`}>

                <div
                    className="h-12 flex items-center justify-end w-full text-4xl cursor-pointer"
                    onClick={toggleMobileMenu}
                >
                    <MdOutlineKeyboardArrowDown
                        style={{
                            transform: `rotate(${isMobileMenuOpen ? 180 : 0}deg)`
                        }}
                    />
                </div>

                <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} absolute top-12 h-screen px-5 left-0 right-0 bg-white w-screen flex items-center flex-col gap-10`}>
                    <h3
                        className="font-bowler text-lg uppercase text-center -mb-1 mt-5 cursor-pointer"
                        onClick={goToHomePage}
                    >
                        Компьютерный конфигуратор без излишеств
                    </h3>

                    <a
                        href=""
                        className="hover:underline"
                        target="_blank"
                    ></a>

                    <a
                        href=""
                        className="hover:underline"
                        target="_blank"
                    ></a>

                    <a
                        href=""
                        className="hover:underline"
                        target="_blank"
                    ></a>

                    <div className="relative text-gray-600 mt-auto pb-36 text-sm text-center">
                        <h3>
                            Made and powered by <a href="https://github.com/ZakhaarEvich" target="_blank" className="underline">@ZakHaarEvich</a>
                        </h3>                   
                    </div>
                </div>
            </div> */}
        </header>
    );
});