import React from 'react';

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-pink-200 text-black font-sans text-center shadow-[8px_8px_0px_#000] border-4 border-black p-5 m-5">
            <h1 className="text-6xl mb-5 shadow-[2px_2px_0px_#000]">404</h1>
            <p className="text-xl mb-5">
                Oops! The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <a
                href="/"
                className="no-underline text-black bg-white px-5 py-2 border-2 border-black shadow-[4px_4px_0px_#000]"
            >
                Go Back Home
            </a>
        </div>
    );
};

export default NotFound;
