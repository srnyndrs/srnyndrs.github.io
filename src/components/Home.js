import React from 'react';
import Socials from './Socials';

const Home = () => {
  return (
    <div className="flex w-full h-80 justify-center items-center">
        <div className="hero h-full w-full" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/banner.jpg)`}}>
            <div className="hero-overlay bg-opacity-40" />
            <div className="flex w-full sm:w-4/5 md:w-3/5 [text-shadow:_0_1px_0_rgb(0_0_0_/_70%)] justify-center space-x-6 sm:space-x-12 md:space-x-12">
                <div className="flex-column w-full md:w-3/4 text-neutral-100">
                    <p className="text-2xl md:text-4xl text-center font-semibold w-full">András Surányi</p>
                    <div className="divider divider-center w-full pt-2 pb-6 px-24 before:bg-neutral-100 after:bg-neutral-100">
                        <p className="text-md md:text-lg font-semibold">Computer Engineer Graduate</p>
                    </div>
                    <Socials />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;