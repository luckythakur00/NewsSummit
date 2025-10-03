// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gray-300 transform rotate-45"></div>
//       <div className="absolute top-3/4 left-1/2 w-10 h-10 bg-gray-400 transform rotate-45"></div>
//       <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-gray-200 transform rotate-45"></div>
//       <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-gray-500 transform rotate-45 rounded-full"></div>

//       <div className="text-center max-w-4xl z-10">
//         <p className="text-lg text-gray-600 mb-4">BiasBreak</p>
//         <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
//           AI Fact Check for Fake News & Bias Detection
//         </h1>
//         <p className="text-xl text-gray-700 mb-12 leading-relaxed">
//           Cut through the noise and get to the truth. BiasBreak is your AI-powered tool for fact
//           check, fake news detection, and uncovering hidden Bias in any content, helping
//           students, researchers, journalists, and everyday readers make informed decisions
//           instantly.
//         </p>
//         <p className="text-lg text-gray-600 mb-8">
//           Got a news topic? Verify it with just one click.
//         </p>
//         <div className="flex justify-center">
//           <div className="relative flex items-center bg-white border border-gray-300 rounded-full shadow-md w-full max-w-lg p-2 pr-4">
//             <input
//               type="text"
//               placeholder="https://www.indiatoday.in/india/story/sir-creek-dispute-between-india-"
//               className="flex-grow p-3 rounded-full outline-none focus:ring-2 focus:ring-blue-300"
//             />
//             <button className="ml-2 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-gray-600"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//             <button className="ml-2 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-gray-600"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;




// import React from 'react';
// import vid from '../assets/Glowing Wave Design.gif';

// const HomePage = () => {
//     return (
//         // <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
//         <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
//             <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
//             >
//                 <source src={vid} type="video/mp4" />
//                 {/* If it's still a .gif, you can just use <img src={vid} /> instead */}
//                 Your browser does not support the video tag.
//             </video>

//             {/* Original Decorative elements - adjust z-index if they should be above or below content */}
//             {/* I'll keep them below the main content for now by ensuring content has higher z-index */}
//             <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gray-300 transform rotate-45 z-10"></div>
//             <div className="absolute top-3/4 left-1/2 w-10 h-10 bg-gray-400 transform rotate-45 z-10"></div>
//             <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-gray-200 transform rotate-45 z-10"></div>
//             <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-gray-500 transform rotate-45 rounded-full z-10"></div>

//             <div className="text-center max-w-4xl z-20 relative"> {/* z-index 20 to ensure content is above video and decorative elements */}
//                 <p className="text-lg text-gray-600 mb-4">BiasBreak</p>
//                 <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
//                     AI Fact Check for Fake News & Bias Detection
//                 </h1>
//                 <p className="text-xl text-gray-700 mb-12 leading-relaxed">
//                     Cut through the noise and get to the truth. BiasBreak is your AI-powered tool for fact
//                     check, fake news detection, and uncovering hidden Bias in any content, helping
//                     students, researchers, journalists, and everyday readers make informed decisions
//                     instantly.
//                 </p>
//                 <p className="text-lg text-gray-600 mb-8">
//                     Got a news topic? Verify it with just one click.
//                 </p>
//                 <div className="flex justify-center">
//                     <div className="relative flex items-center bg-white border border-gray-300 rounded-full shadow-md w-full max-w-lg p-2 pr-4">
//                         <input
//                             type="text"
//                             placeholder="https://www.indiatoday.in/india/story/sir-creek-dispute-between-india-"
//                             className="flex-grow p-3 rounded-full outline-none focus:ring-2 focus:ring-blue-300"
//                         />
//                         <button className="ml-2 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-6 w-6 text-gray-600"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M6 18L18 6M6 6l12 12"
//                                 />
//                             </svg>
//                         </button>
//                         <button className="ml-2 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-6 w-6 text-gray-600"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                                 />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HomePage;


// import { Link } from 'lucide-react';
import { Link } from 'react-router-dom';
import vid from '../assets/Glowing Wave Design.gif';
import UserJourny from './UserJourny';

const HomePage = () => {
    return (
        <>
            <div className="min-h-[92vh] flex flex-col items-center justify-center p-8 relative overflow-hidden">
                <img src={vid} alt="Glowing Wave Background" className="absolute inset-0 w-full h-full object-center z-0" />
                <div className="text-center max-w-4xl z-20 relative">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-8">AI Fact Check for Fake News & Bias Detection</h1>
                    <p className="text-xl text-white/90 mb-12 leading-relaxed">
                        Cut through the noise and get to the truth. BiasBreak is your AI-powered tool for fact
                        check, fake news detection, and uncovering hidden Bias in any content, helping
                        students, researchers, journalists, and everyday readers make informed decisions
                        instantly.
                    </p>
                    <p className="text-lg text-white mb-8">Got a news topic? Verify it with just one click.</p>
                    <div className="flex justify-center">
                        <Link to={'/analyseNews'} className="bg-purple-600 text-white px-8 py-3 hover:bg-purple-800 rounded-full transition-colors" >Get Started</Link>
                    </div>
                </div>
            </div>
            <UserJourny />
        </>
    );
};

export default HomePage;

// import '../waves.css';

// const HomePage = () => {
//     return (
//         <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
//             {/* Wave Background Animation */}
//             <div className="wave-container">
//                 <div className="wave wave1"></div>
//                 <div className="wave wave2"></div>
//                 <div className="wave wave3"></div>
//             </div>

//             <div className="text-center max-w-4xl z-10">
//                 <p className="text-lg text-gray-400 mb-4">BiasBreak</p>
//                 <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-8">
//                     AI Fact Check for Fake News & Bias Detection
//                 </h1>
//                 <p className="text-xl text-gray-300 mb-12 leading-relaxed">
//                     Cut through the noise and get to the truth. BiasBreak is your AI-powered tool for fact
//                     check, fake news detection, and uncovering hidden Bias in any content, helping
//                     students, researchers, journalists, and everyday readers make informed decisions
//                     instantly.
//                 </p>
//                 <p className="text-lg text-gray-400 mb-8">
//                     Got a news topic? Verify it with just one click.
//                 </p>
//                 <div className="flex justify-center">
//                     <div className="relative flex items-center bg-gray-800 border border-gray-700 rounded-full shadow-md w-full max-w-lg p-2 pr-4">
//                         <input
//                             type="text"
//                             placeholder="https://www.indiatoday.in/india/story/sir-creek-dispute-between-india-"
//                             className="flex-grow p-3 rounded-full outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white"
//                         />
//                         <button className="ml-2 p-2 bg-gray-700 rounded-full hover:bg-gray-600">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-6 w-6 text-gray-300"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M6 18L18 6M6 6l12 12"
//                                 />
//                             </svg>
//                         </button>
//                         <button className="ml-2 p-2 bg-gray-700 rounded-full hover:bg-gray-600">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-6 w-6 text-gray-300"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                                 />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HomePage;