import { useState } from "react";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="">
        <div className="">
          <button className="" onClick={toggleAccordion}>{title}</button>
          <span className={`transform ${isOpen ? 'rotate-180' : ''}`}>&#9662;</span>
        </div>
        <div className={isOpen ? "accordion-body" : "accordion-body hidden"}>
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
    <div className="w-full flex items-center justify-start flex-col py-11">
        <div className=" ">
            <h1>Choose your job by industry</h1>
            <Accordion title="Titlu Accordion 1" content={
                job.map((elem, index) => (
                    <p key={index}>{elem}</p>
                ))
            } />
        </div>
        <div>
            <Accordion title="Titlu Accordion 2" content="Conținutul Accordion-ului 2." />
        </div>
    </div>
  )
}

export default AccordionJobs