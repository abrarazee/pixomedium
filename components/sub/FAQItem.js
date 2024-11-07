"use client"
import React from 'react';

const FAQItem = () => {
    return (
        <div className="container mx-auto mt-[25vh] grid grid-cols-1 md:grid-cols-2 gap-8 relative z-[-1]">
            <div className="flex justify-center items-center" data-aos="zoom-in-right">
                <div className="w-3/4">
                    <img src="../../public/faqs-1.png" alt="thumb" className="w-full" />
                </div>
            </div>
            <div className="p-4" data-aos="zoom-in-left">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-semibold mb-0">
                        People who ask to <br />
                        know more about me?
                    </h2>
                </div>
                <div className="max-w-lg mx-auto space-y-4">
                    <AccordionCard
                        title="1. What services do I offer?"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusitempor is exercitation ullamco laboris."
                        defaultOpen
                    />
                    <AccordionCard
                        title="2. How will I complete your project?"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusitempor is exercitation ullamco laboris."
                    />
                    <AccordionCard
                        title="3. How will you pay me?"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusitempor is exercitation ullamco laboris."
                    />
                    <AccordionCard
                        title="4. What is the process & my time zone?"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusitempor is exercitation ullamco laboris."
                    />
                </div>
            </div>
        </div>
    );
};

const AccordionCard = ({ title, content, defaultOpen }) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen || false);

    return (
        <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-4 shadow-md">
            <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'} bg-gray-200 text-gray-900 rounded-full h-6 w-6 flex items-center justify-center`}></i>
            </div>
            {isOpen && (
                <div className="mt-2 text-sm text-gray-700">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

export default FAQItem;
