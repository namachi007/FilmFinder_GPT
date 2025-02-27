import React, { useState } from 'react';

const FrequentlyAskedQuestions = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price."
    },
    {
      question: "How much does Netflix cost?",
      answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts."
    },
    {
      question: "Where can I watch?",
      answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
    },
    {
      question: "How do I cancel?",
      answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      question: "What can I watch on Netflix?",
      answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
      question: "Is Netflix good for kids?",
      answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see."
    }
  ];

  const toggleQuestion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
              <button
                className="w-full p-6 text-left bg-gray-900 hover:bg-gray-800 transition-colors duration-300 flex justify-between items-center"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-xl font-medium">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 bg-gray-800">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg mb-6">Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600 md:w-96"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 flex items-center justify-center">
              Get Started
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;