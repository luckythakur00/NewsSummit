// import React from 'react'

// function ContactPage() {
//   return (
//     <div>ContactPage</div>
//   )
// }

// export default ContactPage


// import React, { useState } from 'react';
// import Input from './Input';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//     alert('Thank you for your feedback! Check the console for data.');
//     // Here you would integrate your API call to send the data to the backend.
//   };

//   // Tailwind classes for the purple-colored elements
//   const primaryColorClasses = "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500";
//   const linkClasses = "text-blue-600 hover:text-blue-800 hover:underline";
//   const textBodyClasses = "text-gray-600 leading-relaxed";

//   return (
//     <div className="flex justify-center items-start min-h-screen bg-gray-50 p-4 sm:p-8">
//       <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-6 sm:p-10">

//         {/* --- Header Section --- */}
//         <header className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">Product Feedback</h1>
//           <p className="text-xl">
//             <a href="#" className={linkClasses}>Help Us Improve BiasBreak</a>
//           </p>
//           <p className={`mt-4 ${textBodyClasses}`}>
//             Your insights are essential for making our tool smarter, faster, and more accurate. Whether you’ve
//             encountered an issue with a specific analysis, have a suggestion for improvement, or want to
//             request a new feature, this is the best place to share it with our team.
//           </p>
//         </header>

//         {/* --- Form Section --- */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="bg-white p-0">
//             <Input
//               label="Your name"
//               id="your_name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />

//             <Input
//               label="Your email"
//               id="your_email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//             />

//             <Input
//               label="Subject"
//               id="subject"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//             />

//             <Input
//               label="Your message"
//               id="your_message"
//               name="message"
//               required={true}
//               isTextarea={true}
//               value={formData.message}
//               onChange={handleChange}
//             />
//           </div>

//           {/* --- Submit Button --- */}
//           <button type="submit" className={`w-full sm:w-auto px-6 py-3 text-lg text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-[1.01] focus:outline-none focus:ring-4 ${primaryColorClasses}`}>
//             Submit
//           </button>
//         </form>
//       </div>

//       {/* --- Footer (Fixed to Bottom as per screenshot) --- */}
//       <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 text-sm">
//         <div className="max-w-4xl mx-auto flex justify-between items-center flex-wrap">
//           <p className="text-gray-400">© 2025 BiasBreak. All rights reserved.</p>
//           <div className="space-x-4">
//             <a href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</a>
//             <a href="/career" className="hover:text-blue-400">Career</a>
//             <a href="/terms" className="hover:text-blue-400">Terms and Conditions</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ContactPage;


import { useState } from 'react';
import { MdCheckCircle, MdEmail, MdPhone } from 'react-icons/md';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert('Thank you for your feedback! Check the console for data.');
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="min-h-[91.9vh] text-white relative overflow-hidden pt-14">
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Side Content (No changes here) */}
        <div className="space-y-6 lg:space-y-10">
          <div className="space-y-4 contact-element">
            <h1 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">Feedback</h1>
            <p className="text-gray-300 leading-relaxed max-w-lg">Reach out by email, phone, or this form to see how we can solve your cloud management and governance challenges.</p>
          </div>
          <div>
            <h2 className="contact-element text-xl font-semibold mb-4">Talk to our team to:</h2>
            <ul className="space-y-3 contact-element text-gray-300 text-sm">
              <li className="flex items-start gap-3"><MdCheckCircle className="h-5 w-5 text-purple-400 mt-0.5 shrink-0" /><span>Understand how our product can fulfill your needs</span></li>
              <li className="flex items-start gap-3"><MdCheckCircle className="h-5 w-5 text-purple-400 mt-0.5 shrink-0" /><span>Discover our capabilities and get answers to your questions</span></li>
              <li className="flex items-start gap-3"><MdCheckCircle className="h-5 w-5 text-purple-400 mt-0.5 shrink-0" /><span>Get a customized quote for your business</span></li>
            </ul>
          </div>
          <div>
            <h2 className="contact-element text-xl font-semibold mb-5">Or, reach us directly</h2>
            <div className="contact-element flex flex-col gap-y-6 mt-4">
              <a className="flex items-center gap-4 group"><div className="bg-gray-800 p-3 rounded-full group-hover:bg-purple-600 transition-colors"><MdEmail size={20} className="text-purple-400 group-hover:text-white" /></div><div><p className="font-semibold text-white">luckythakur@gmail.com</p><p className="text-xs sm:text-sm text-gray-400">Contact us via email for event queries.</p></div></a>
              <a href="tel:+9784545245" className="flex items-center gap-4 group"><div className="bg-gray-800 p-3 rounded-full group-hover:bg-purple-600 transition-colors"><MdPhone size={20} className="text-purple-400 group-hover:text-white" /></div><div><p className="font-semibold text-white">+91 8542535625</p><p className="text-xs sm:text-sm text-gray-400">Call us for immediate help</p></div></a>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-gray-900/10 contact-element backdrop-blur-sm border border-gray-700/80 p-6 sm:p-8 rounded-2xl shadow-2xl">
          <div className="mb-4">
            {
              alert.show && (
                <Alert type={alert.type} title={alert.title} message={alert.message} onClose={handleCloseAlert} />
              )
            }
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm mb-2 font-medium text-gray-300">First name</label>
                <input type="text" name="firstName" id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2.5 bg-gray-700/80 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm mb-2 font-medium text-gray-300">Last name</label>
                <input type="text" name="lastName" id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2.5 bg-gray-700/80 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2 font-medium text-gray-300">Work email address</label>
              <input type="email" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 bg-gray-700/80 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none" />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-sm mb-2 font-medium text-gray-300">Phone number (Optional)</label>
              <input type="tel" name="mobile" id="mobile" value={formData.mobile} onKeyDown={(e) => { const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab']; if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) { e.preventDefault(); } }} inputMode="numeric" pattern="[0-9]{10,15}" maxLength={15} className="w-full px-4 py-2.5 bg-gray-700/80 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none" placeholder="Mobile" />
            </div>
            <div>
              <label htmlFor="query" className="block text-sm mb-2 font-medium text-gray-300">How can we help?</label>
              <textarea name="query" id="query" rows="4" value={formData.query} className="w-full px-4 py-2.5 bg-gray-700/80 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none" placeholder="Let us know..."></textarea>
            </div>
            <div>
              <button type="submit" className="w-full mt-2 bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all transform hover:scale-105 flex items-center justify-center gap-2 disabled:bg-purple-400 disabled:cursor-not-allowed">
                Send Message
                {/* {submitting ? 'Sending...' : 'Send Message'} */}
                {/* {!submitting && <MdSend size={18} />} */}
              </button>
            </div>
          </form>
        </div>
      </main>
    </section>
  );

};

export default ContactPage;