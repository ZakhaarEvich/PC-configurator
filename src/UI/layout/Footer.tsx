import React, {memo} from 'react';

const Footer: React.FC = () => {


    return (
        <footer className="flex justify-center bg-app-dark shadow-xl pb-5 pt-6 font-play z-10">
            <div className="container px-5 flex-col md:flex-row flex justify-between gap-5">

                <div className="text-gray-300 flex-1">

                    Удобный инструмент для быстрого создания компьютерных сборок. Здесь вы можете сохранить список
                    ссылок на железо из разных магазинов и поделиться этой сборкой с другими с помощью ссылки.

                </div>

                <div className="text-gray-400 text-sm text-center">
                    <h3>
                        <i className="fa fa-github  mr-1"></i>
                        Made and powered by <a href="https://github.com/ZakhaarEvich" target="_blank" className="underline">@ZakHaarEvich</a>
                    </h3>
                    {/* <h4>
                        <i className="fab fa-telegram mr-1"></i>
                        <a href="https://t.me/ZakHaarEvich" target="_blank" className="underline">RX4D VK</a>
                    </h4> */}
                </div>
                
            </div>
        </footer>
    );
}

export default memo(Footer);
