'use client'
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { useState } from "react";
import "./FloatingWhatsapp.css";

const FloatingWhatsApp = () => {
  const WhatsappButton = () => {
    const [isFloatingBoxVisible, setIsFloatingBoxVisible] = useState(false);

    const handleWhatsappClick = () => {
      setIsFloatingBoxVisible(!isFloatingBoxVisible);
    };

    const handleChatsClick = () => {
      window.open('https://wa.me/6282128540631', '_blank');
    };

    const buttonStyle = `fixed bottom-6 right-8 p-4 rounded-full shadow-lg whatsapp-button transition-transform ease-in-out duration-500 ${
      isFloatingBoxVisible ? 'bg-red-700 rotate-180' : 'bg-green-500'
    } text-white`;

    return (
      <div className="relative">
        {isFloatingBoxVisible && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="w-11/12 mx-auto animate-jitter bg-white text-black p-4 rounded-lg shadow-lg max-w-md">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-2 ml-4 text-white">
                  <svg className="w-10 h-10 mb-3 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4">
                    </path>
                  </svg>
                  <div className="text-3xl mb-2 text-black">Hallo
                    <span className='items-center justify-center'>  👋</span>
                  </div>
                  <div className="w-60 text-black
                   text-sm mb-1">
                    Kami akan membantu permasalahan anda dengan sebaik mungkin..
                  </div>
                </div>
                <div className="border-0 border-t-4 border-green-500 rounded shadow-md text-sm">
                  <div className="bg-white border border-t-0 rounded-t-none rounded-b flex flex-col space-y-2">
                    <div className="px-6 py-4 flex flex-col items-start gap-3">
                      <div className="font-semibold ">Start a conversation</div>
                      <button type="button"
                        className="bg-green-700 rounded-t-full rounded-s-full text-white flex flex-row gap-2 py-3 px-5"
                        onClick={handleChatsClick}
                      >
                        <svg className="w-5 h-5 transform rotate-90" fill="none" stroke="currentColor"
                          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                        Chat Dengan CS!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div>
            <span className={`transition-all ease-in-out duration-300 ${isFloatingBoxVisible ? 'opacity-0' : 'opacity-100'} fixed bottom-12 right-24 p-2 px-4 text-center justify-center bg-green-500 rounded-t-full rounded-s-full font-medium text-white space-x-2`}>
                Chat Me
            </span>
            <button className={buttonStyle} onClick={handleWhatsappClick}>
                {isFloatingBoxVisible ? <FaTimes size={30} /> : <FaWhatsapp size={30} />}
            </button>
        </div>
      </div>
    );
  };

  return (
    <WhatsappButton />
  );
};

export default FloatingWhatsApp;