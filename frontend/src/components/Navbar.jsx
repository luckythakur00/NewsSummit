// import React from 'react'

// function Navbar() {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar


// import { useState } from "react"
// import { ChevronDown, Leaf } from "lucide-react"

// export default function Navbar() {
//     const [language, setLanguage] = useState("EN")
//     const [menuOpen, setMenuOpen] = useState(false)
//     const [dropdownOpen, setDropdownOpen] = useState(false)

//     return (<nav className="bg-white/95 backdrop-blur sticky top-0 z-50 w-full border-b border-gray-200"> <div className="container mx-auto "> <div className="flex items-center justify-between h-16">
//         {/* Logo */} <div className="flex items-center space-x-2">
//             {/* <Leaf className="h-8 w-8 text-green-600" /> */}
//             <span className="text-xl font-bold text-gray-900">OmniScience</span> </div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center space-x-8">
//             <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
//             <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About Us</a>
//             <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Feedback</a>
//             <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
//             {/* <a href="#" className="bg-blue-600 transition-colors font-medium">Get Started</a> */}
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Get Started</button>

//             {/* Language Dropdown */}
//             {/* <div className="relative">
//                 <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center px-3 py-2 text-gray-700 hover:text-green-600">
//                     <span>{language}</span>
//                     <ChevronDown className="h-4 w-4 ml-1" />
//                 </button>
//                 {dropdownOpen && (
//                     <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg">
//                         <button
//                             onClick={() => { setLanguage("EN"); setDropdownOpen(false) }}
//                             className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                         >
//                             English
//                         </button>
//                         <button
//                             onClick={() => { setLanguage("ES"); setDropdownOpen(false) }}
//                             className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                         >
//                             Español
//                         </button>
//                         <button
//                             onClick={() => { setLanguage("FR"); setDropdownOpen(false) }}
//                             className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                         >
//                             Français
//                         </button>
//                     </div>
//                 )}
//             </div> */}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//             <button
//                 onClick={() => setMenuOpen(!menuOpen)}
//                 className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
//             >
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     {menuOpen ? (
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     ) : (
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                     )}
//                 </svg>
//             </button>
//         </div>
//     </div>

//         {/* Mobile Nav Menu */}
//         {menuOpen && (
//             <div className="md:hidden mt-2 space-y-2">
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Shop</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Farmers</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Delivery Partners</a>
//             </div>
//         )}
//     </div>
//     </nav>

//     )
// }



import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-black backdrop-blur sticky top-0 z-50 w-full">
            <div className="container mx-auto">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl font-extrabold text-white">NewsSummit</span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to={'/'} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Home</Link>
                        <Link to={'/analyseNews'} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Analyse</Link>
                        <Link to={'/aboutUs'} href="#" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">About Us</Link>
                        <Link to={'/feedback'} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Feedback</Link>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition-colors">Login</button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-md text-gray-300 hover:bg-gray-700 transition-colors">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {
                                    menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                }
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Nav Menu */}
                {
                    menuOpen && (
                        <div className="md:hidden mt-2 space-y-2 bg-gray-800 border-t border-gray-700 py-2">
                            <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 transition-colors">Home</a>
                            <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 transition-colors">About Us</a>
                            <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 transition-colors">Feedback</a>
                            <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 transition-colors">Contact</a>
                            <div className="px-4 py-2">
                                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Get Started</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </nav>
    );
}

