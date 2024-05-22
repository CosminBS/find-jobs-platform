import { useState } from "react";
import { motion } from 'framer-motion'

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="w-full">
        <div className="w-full px-11 py-2 bg-red-200 md:w-[500px]">
          <button className="h-[1-dvh]" onClick={toggleAccordion}>{title}</button>
          <span className={`transform ${isOpen ? 'rotate-180' : ''}`}>&#9662;</span>
        </div>
        <div className={isOpen ? "bg-red-500" : "accordion-body hidden"}>
          <ul className="p-4">{content}</ul>
        </div>
      </div>
    );
  };

const AccordionJobs = () => {
    const job:  string[] = [
        'asa', 'asdas', 'asdasdas', "asd"
    ]

  return (
    <div className="w-full h-[50dvh] flex items-center justify-start flex-col py-11 gap-3">
        <div className="w-full px-10">
            <h1>Choose your job by industry</h1>
            <Accordion title="Accordion 1" content={
                job.map((elem, index) => (
                    <p key={index}>{elem}</p>
                ))
            } />
        </div>
        <div>
            <Accordion title="Acordion 2" content="Container." />
        </div>
    </div>
  )
}

export default AccordionJobs