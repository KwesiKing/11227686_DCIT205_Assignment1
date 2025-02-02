import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './nav';
import MyFooter from './MyFooter';

const HelpAndSupport = () => {

  const faqs = [
    {
      question: 'What is the missing grade process?',
      answer: 'The missing grade process is the procedure for requesting and resolving missing grades. Missing grades can occur for a variety of reasons, such as clerical errors, incomplete records, or lost coursework..',
    },
    {
      question: 'How can I check if my grade is missing?',
      answer: 'You can check if your grade is missing by reviewing your unofficial transcript on the Student Portal. If your grade is missing, it will be displayed as an "N/A"',
    },
    {
      question: 'What should I do if my grade is missing??',
      answer: 'If your grade is missing, you should submit a missing grade request form. The form can be found on the Registrars Office website.',
    },
    {
      question: 'How long will it take for my missing grade to be processed?',
      answer: 'If you miss the deadline for submitting a missing grade request, your request will not be processed. You will need to submit a late request, which will be subject to a late fee.',
    },
    {
      question: 'What happens if I miss the deadline for submitting a missing grade request?',
      answer: 'Yes, you can use the filter on the Grade Report page to view grades from specific semesters or academic years.',
    },

   
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted. We will get in touch with you shortly.');
  };

  return (
    <div>
      <MyNavbar />
      
      

    
    <div className="container main mt-5">
      <h1 className="mb-4">Help and Support</h1>

      <div className="mb-4">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`faqHeading${index}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faqCollapse${index}`}
                  aria-expanded="true"
                  aria-controls={`faqCollapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`faqCollapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`faqHeading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Contact Technical Support</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name:
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email:
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea className="form-control" id="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
    <MyFooter />
    </div>
  );
};

export default HelpAndSupport;
