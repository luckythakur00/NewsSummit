// const AboutUsPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <header className="text-center mb-16">
//           <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
//             About <span className="text-indigo-600">NewsSummit</span>
//           </h1>
//           <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
//             Your trusted partner in the fight against misinformation
//           </p>
//         </header>

//         {/* Mission Section */}
//         <section className="mb-20">
//           <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
//             <div>
//               <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//                 Our Mission
//               </h2>
//               <p className="mt-4 text-lg text-gray-600">
//                 In today's digital age, misinformation spreads faster than ever before. 
//                 NewsSummit was founded with a simple but powerful mission: to restore 
//                 trust in digital media by providing accurate, unbiased news verification 
//                 to everyone.
//               </p>
//               <p className="mt-4 text-lg text-gray-600">
//                 We believe that access to truthful information is a fundamental right, 
//                 and our platform empowers users to make informed decisions by separating 
//                 fact from fiction.
//               </p>
//             </div>
//             <div className="mt-10 lg:mt-0">
//               <img 
//                 className="rounded-lg shadow-lg w-full h-64 object-cover"
//                 src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
//                 alt="News verification process" 
//               />
//             </div>
//           </div>
//         </section>

//         {/* How It Works Section */}
//         <section className="mb-20">
//           <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
//             How NewsSummit Works
//           </h2>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
//                 <span className="text-xl font-bold">1</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Submit News</h3>
//               <p className="text-gray-600">
//                 Users submit news articles, social media posts, or any information they want verified.
//               </p>
//             </div>
            
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
//                 <span className="text-xl font-bold">2</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">AI Analysis</h3>
//               <p className="text-gray-600">
//                 Our advanced AI algorithms scan multiple sources and cross-reference information.
//               </p>
//             </div>
            
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
//                 <span className="text-xl font-bold">3</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Human Verification</h3>
//               <p className="text-gray-600">
//                 Our team of fact-checkers reviews the AI findings to ensure maximum accuracy.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Accuracy Section */}
//         <section className="mb-20 bg-white rounded-2xl shadow-xl p-8">
//           <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
//             <div>
//               <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//                 Unmatched Accuracy
//               </h2>
//               <p className="mt-4 text-lg text-gray-600">
//                 NewsSummit combines cutting-edge artificial intelligence with human expertise 
//                 to deliver verification results with over 95% accuracy. Our multi-layered 
//                 verification process ensures that every piece of information is thoroughly 
//                 examined before receiving a credibility rating.
//               </p>
//               <div className="mt-8">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0">
//                     <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="ml-3 text-lg text-gray-600">Cross-references multiple reliable sources</p>
//                 </div>
//                 <div className="flex items-center mt-4">
//                   <div className="flex-shrink-0">
//                     <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="ml-3 text-lg text-gray-600">Analyzes source credibility and bias</p>
//                 </div>
//                 <div className="flex items-center mt-4">
//                   <div className="flex-shrink-0">
//                     <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="ml-3 text-lg text-gray-600">Detects manipulated images and deepfakes</p>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-10 lg:mt-0">
//               <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 text-white">
//                 <h3 className="text-2xl font-bold mb-4">Our Accuracy Metrics</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <div className="flex justify-between mb-1">
//                       <span>Fact Verification</span>
//                       <span>96%</span>
//                     </div>
//                     <div className="w-full bg-indigo-200 rounded-full h-2.5">
//                       <div className="bg-white h-2.5 rounded-full" style={{width: '96%'}}></div>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="flex justify-between mb-1">
//                       <span>Source Credibility</span>
//                       <span>94%</span>
//                     </div>
//                     <div className="w-full bg-indigo-200 rounded-full h-2.5">
//                       <div className="bg-white h-2.5 rounded-full" style={{width: '94%'}}></div>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="flex justify-between mb-1">
//                       <span>Bias Detection</span>
//                       <span>92%</span>
//                     </div>
//                     <div className="w-full bg-indigo-200 rounded-full h-2.5">
//                       <div className="bg-white h-2.5 rounded-full" style={{width: '92%'}}></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Team Section */}
//         <section className="mb-20">
//           <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
//             Our Team
//           </h2>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             <div className="text-center">
//               <div className="mx-auto h-32 w-32 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
//                 <span className="text-indigo-600 text-xl font-bold">JD</span>
//               </div>
//               <h3 className="text-lg font-bold text-gray-900">John Doe</h3>
//               <p className="text-indigo-600">CEO & Founder</p>
//               <p className="mt-2 text-gray-600">Former journalist with 15+ years of experience</p>
//             </div>
            
//             <div className="text-center">
//               <div className="mx-auto h-32 w-32 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
//                 <span className="text-indigo-600 text-xl font-bold">AS</span>
//               </div>
//               <h3 className="text-lg font-bold text-gray-900">Alice Smith</h3>
//               <p className="text-indigo-600">Head of Research</p>
//               <p className="mt-2 text-gray-600">PhD in Media Studies and fact-checking expert</p>
//             </div>
            
//             <div className="text-center">
//               <div className="mx-auto h-32 w-32 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
//                 <span className="text-indigo-600 text-xl font-bold">MJ</span>
//               </div>
//               <h3 className="text-lg font-bold text-gray-900">Michael Johnson</h3>
//               <p className="text-indigo-600">AI Lead</p>
//               <p className="mt-2 text-gray-600">Machine learning specialist with focus on NLP</p>
//             </div>
            
//             <div className="text-center">
//               <div className="mx-auto h-32 w-32 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
//                 <span className="text-indigo-600 text-xl font-bold">EW</span>
//               </div>
//               <h3 className="text-lg font-bold text-gray-900">Emma Wilson</h3>
//               <p className="text-indigo-600">Verification Manager</p>
//               <p className="mt-2 text-gray-600">Leads our team of professional fact-checkers</p>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="text-center bg-indigo-700 rounded-2xl shadow-xl py-16 px-6">
//           <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
//             Join the Fight Against Misinformation
//           </h2>
//           <p className="mt-4 text-xl text-indigo-100 max-w-2xl mx-auto">
//             Help us create a more informed society. Verify news, share accurate information, 
//             and become part of the solution.
//           </p>
//           <div className="mt-10">
//             <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition duration-300">
//               Start Verifying News
//             </button>
//             <button className="ml-4 inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-indigo-600 transition duration-300">
//               Learn More
//             </button>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AboutUsPage;



const AboutUsPage = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-gray-100"> {/* Changed background and default text color */}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"> {/* Changed text-gray-900 to text-white */}
            About <span className="text-purple-400">NewsSummit</span> {/* Changed text-indigo-600 to text-purple-400 */}
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-300"> {/* Changed text-gray-500 to text-gray-300 */}
            Your trusted partner in the fight against misinformation
          </p>
        </header>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl"> {/* Changed text-gray-900 to text-white */}
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-gray-300"> {/* Changed text-gray-600 to text-gray-300 */}
                In today's digital age, misinformation spreads faster than ever before. 
                NewsSummit was founded with a simple but powerful mission: to restore 
                trust in digital media by providing accurate, unbiased news verification 
                to everyone.
              </p>
              <p className="mt-4 text-lg text-gray-300"> {/* Changed text-gray-600 to text-gray-300 */}
                We believe that access to truthful information is a fundamental right, 
                and our platform empowers users to make informed decisions by separating 
                fact from fiction.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <img 
                className="rounded-lg shadow-lg w-full h-64 object-cover border border-purple-700" // Added a subtle border
                src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="News verification process" 
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-extrabold text-center text-white sm:text-4xl mb-12"> {/* Changed text-gray-900 to text-white */}
            How NewsSummit Works
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-purple-700"> {/* Changed bg-white, added border */}
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white mb-4"> {/* Changed bg-indigo-500 to bg-purple-600 */}
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Submit News</h3> {/* Changed text-gray-900 to text-white */}
              <p className="text-gray-300"> {/* Changed text-gray-600 to text-gray-300 */}
                Users submit news articles, social media posts, or any information they want verified.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-purple-700"> {/* Changed bg-white, added border */}
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white mb-4"> {/* Changed bg-indigo-500 to bg-purple-600 */}
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Analysis</h3> {/* Changed text-gray-900 to text-white */}
              <p className="text-gray-300"> {/* Changed text-gray-600 to text-gray-300 */}
                Our advanced AI algorithms scan multiple sources and cross-reference information.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-purple-700"> {/* Changed bg-white, added border */}
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white mb-4"> {/* Changed bg-indigo-500 to bg-purple-600 */}
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Human Verification</h3> {/* Changed text-gray-900 to text-white */}
              <p className="text-gray-300"> {/* Changed text-gray-600 to text-gray-300 */}
                Our team of fact-checkers reviews the AI findings to ensure maximum accuracy.
              </p>
            </div>
          </div>
        </section>

        {/* Accuracy Section */}
        <section className="mb-20 bg-gray-800 rounded-2xl shadow-xl p-8 border border-purple-800"> {/* Changed bg-white, added border */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl"> {/* Changed text-gray-900 to text-white */}
                Unmatched Accuracy
              </h2>
              <p className="mt-4 text-lg text-gray-300"> {/* Changed text-gray-600 to text-gray-300 */}
                NewsSummit combines cutting-edge artificial intelligence with human expertise 
                to deliver verification results with over 95% accuracy. Our multi-layered 
                verification process ensures that every piece of information is thoroughly 
                examined before receiving a credibility rating.
              </p>
              <div className="mt-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Changed text-green-500 to text-green-400 */}
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-gray-300">Cross-references multiple reliable sources</p> {/* Changed text-gray-600 to text-gray-300 */}
                </div>
                <div className="flex items-center mt-4">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Changed text-green-500 to text-green-400 */}
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-gray-300">Analyzes source credibility and bias</p> {/* Changed text-gray-600 to text-gray-300 */}
                </div>
                <div className="flex items-center mt-4">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Changed text-green-500 to text-green-400 */}
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-gray-300">Detects manipulated images and deepfakes</p> {/* Changed text-gray-600 to text-gray-300 */}
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-gradient-to-r from-purple-700 to-indigo-800 rounded-lg p-8 text-white"> {/* Changed from-indigo-500 to-purple-600 */}
                <h3 className="text-2xl font-bold mb-4">Our Accuracy Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Fact Verification</span>
                      <span>96%</span>
                    </div>
                    <div className="w-full bg-purple-300 rounded-full h-2.5"> {/* Changed bg-indigo-200 to bg-purple-300 */}
                      <div className="bg-white h-2.5 rounded-full" style={{width: '96%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Source Credibility</span>
                      <span>94%</span>
                    </div>
                    <div className="w-full bg-purple-300 rounded-full h-2.5"> {/* Changed bg-indigo-200 to bg-purple-300 */}
                      <div className="bg-white h-2.5 rounded-full" style={{width: '94%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Bias Detection</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-purple-300 rounded-full h-2.5"> {/* Changed bg-indigo-200 to bg-purple-300 */}
                      <div className="bg-white h-2.5 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-extrabold text-center text-white sm:text-4xl mb-12"> {/* Changed text-gray-900 to text-white */}
            Our Team
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg border border-purple-700"> {/* Added dark background and border */}
              <div className="mx-auto h-32 w-32 rounded-full bg-purple-900 flex items-center justify-center mb-4 text-white"> {/* Changed bg-indigo-100, text-indigo-600 */}
                <span className="text-xl font-bold">LT</span>
              </div>
              <h3 className="text-lg font-bold text-white">Lucky Thakur</h3> {/* Changed text-gray-900 to text-white */}
              {/* <p className="text-purple-400">CEO & Founder</p> Changed text-indigo-600 to text-purple-400 */}
              <p className="mt-2 text-gray-300">Full Stack Web Developer</p> {/* Changed text-gray-600 to text-gray-300 */}
            </div>
            
            <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg border border-purple-700"> {/* Added dark background and border */}
              <div className="mx-auto h-32 w-32 rounded-full bg-purple-900 flex items-center justify-center mb-4 text-white"> {/* Changed bg-indigo-100, text-indigo-600 */}
                <span className="text-xl font-bold">MT</span>
              </div>
              <h3 className="text-lg font-bold text-white">Manas Tiwari</h3> {/* Changed text-gray-900 to text-white */}
              {/* <p className="text-purple-400">Head of Research</p> Changed text-indigo-600 to text-purple-400 */}
              <p className="mt-2 text-gray-300">Machine Learning expert</p> {/* Changed text-gray-600 to text-gray-300 */}
            </div>
            
            <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg border border-purple-700"> {/* Added dark background and border */}
              <div className="mx-auto h-32 w-32 rounded-full bg-purple-900 flex items-center justify-center mb-4 text-white"> {/* Changed bg-indigo-100, text-indigo-600 */}
                <span className="text-xl font-bold">PN</span>
              </div>
              <h3 className="text-lg font-bold text-white">Prashant Negi</h3> {/* Changed text-gray-900 to text-white */}
              {/* <p className="text-purple-400">AI Lead</p> Changed text-indigo-600 to text-purple-400 */}
              <p className="mt-2 text-gray-300">Java Full Stack Developer</p> {/* Changed text-gray-600 to text-gray-300 */}
            </div>
            
            <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg border border-purple-700"> {/* Added dark background and border */}
              <div className="mx-auto h-32 w-32 rounded-full bg-purple-900 flex items-center justify-center mb-4 text-white"> {/* Changed bg-indigo-100, text-indigo-600 */}
                <span className="text-xl font-bold">RR</span>
              </div>
              <h3 className="text-lg font-bold text-white">Rishab Rana</h3> {/* Changed text-gray-900 to text-white */}
              {/* <p className="text-purple-400">Verification Manager</p> Changed text-indigo-600 to text-purple-400 */}
              <p className="mt-2 text-gray-300">Java Full Stack Developer</p> {/* Changed text-gray-600 to text-gray-300 */}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gray-900 rounded-2xl shadow-xl py-16 px-6"> {/* Changed bg-indigo-700, added gradient and border */}
          <h2 className="text-xl font-extrabold text-white sm:text-4xl">
            Join the Fight Against Misinformation
          </h2>
          <p className="mt-4 text-purple-100 max-w-2xl mx-auto"> {/* Changed text-indigo-100 to text-purple-100 */}
            Help us create a more informed society. Verify news, share accurate information, 
            and become part of the solution.
          </p>
          <div className="mt-10">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-gray-200 transition duration-300"> {/* Changed text-indigo-700, hover */}
              Start Verifying News
            </button>
            <button className="ml-4 inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-purple-600 transition duration-300"> {/* Changed hover:bg-indigo-600 */}
              Learn More
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;


// const AboutUsPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <header className="text-center mb-16">
//           <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
//             About <span className="text-purple-600">NewsSummit</span>
//           </h1>
//           <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
//             Your trusted partner in the fight against misinformation
//           </p>
//         </header>

//         {/* Mission Section */}
//         <section className="mb-20">
//           <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
//             <div>
//               <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//                 Our Mission
//               </h2>
//               <p className="mt-4 text-lg text-gray-700">
//                 In today's digital age, misinformation spreads faster than ever before. 
//                 NewsSummit was founded with a simple but powerful mission: to restore 
//                 trust in digital media by providing accurate, unbiased news verification 
//                 to everyone.
//               </p>
//               <p className="mt-4 text-lg text-gray-700">
//                 We believe that access to truthful information is a fundamental right, 
//                 and our platform empowers users to make informed decisions by separating 
//                 fact from fiction.
//               </p>
//             </div>
//             <div className="mt-10 lg:mt-0">
//               <img 
//                 className="rounded-lg shadow-lg w-full h-64 object-cover"
//                 src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
//                 alt="News verification process" 
//               />
//             </div>
//           </div>
//         </section>

//         {/* How It Works Section */}
//         <section className="mb-20">
//           <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
//             How NewsSummit Works
//           </h2>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
//               <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white mb-4">
//                 <span className="text-xl font-bold">1</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Submit News</h3>
//               <p className="text-gray-700">
//                 Users submit news articles, social media posts, or any information they want verified.
//               </p>
//             </div>
            
//             <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
//               <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white mb-4">
//                 <span className="text-xl font-bold">2</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">AI Analysis</h3>
//               <p className="text-gray-700">
//                 Our advanced AI algorithms scan multiple sources and cross-reference information.
//               </p>
//             </div>
            
//             <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
//               <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white mb-4">
//                 <span className="text-xl font-bold">3</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Human Verification</h3>
//               <p className="text-gray-700">
//                 Our team of fact-checkers reviews the AI findings to ensure maximum accuracy.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Accuracy Section */}
//         <section className="mb-20 bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
//           <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
//             <div>
//               <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//                 Unmatched Accuracy
//               </h2>
//               <p className="mt-4 text-lg text-gray-700">
//                 NewsSummit combines cutting-edge artificial intelligence with human expertise 
//                 to deliver verification results with over 95% accuracy. Our multi-layered 
//                 verification process ensures that every piece of information is thoroughly 
//                 examined before receiving a credibility rating.
//               </p>
//               <div className="mt-8">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0">
//                     <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="ml-3 text-lg text-gray-700">Cross-references multiple reliable sources</p>
//                 </div>
//                 <div className="flex items-center mt-4">
//                   <div className="flex-shrink-0">
//                     <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="ml-3 text-lg text-gray-700">Analyzes source credibility and bias</p>
//                 </div>
//                 <div className="flex items-center mt-4">
//                   <div className="flex-shrink-0">
//                     <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="ml-3 text-lg text-gray-700">Detects manipulated images and deepfakes</p>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-10 lg:mt-0">
//               <div className="bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg p-8 text-white">
//                 <h3 className="text-2xl font-bold mb-4">Our Accuracy Metrics</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <div className="flex justify-between mb-1">
//                       <span>Fact Verification</span>
//                       <span>96%</span>
//                     </div>
//                     <div className="w-full bg-purple-400 rounded-full h-2.5">
//                       <div className="bg-white h-2.5 rounded-full" style={{width: '96%'}}></div>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="flex justify-between mb-1">
//                       <span>Source Credibility</span>
//                       <span>94%</span>
//                     </div>
//                     <div className="w-full bg-purple-400 rounded-full h-2.5">
//                       <div className="bg-white h-2.5 rounded-full" style={{width: '94%'}}></div>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="flex justify-between mb-1">
//                       <span>Bias Detection</span>
//                       <span>92%</span>
//                     </div>
//                     <div className="w-full bg-purple-400 rounded-full h-2.5">
//                       <div className="bg-white h-2.5 rounded-full" style={{width: '92%'}}></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Team Section */}
//         <section className="mb-20">
//           <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
//             Our Team
//           </h2>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             <div className="text-center bg-white rounded-lg p-6 shadow-lg border border-gray-200">
//               <div className="mx-auto h-32 w-32 rounded-full bg-purple-100 flex items-center justify-center mb-4">
//                 <span className="text-purple-600 text-xl font-bold">JD</span>
//               </div>
//               <h3 className="text-lg font-bold text-gray-900">John Doe</h3>
//               <p className="text-purple-600">CEO & Founder</p>
//               <p className="mt-2 text-gray-700">Former journalist with 15+ years of experience</p>
//             </div>
            
//             <div className="text-center bg-white rounded-lg p-6 shadow-lg border border-gray-200">
//               <div className="mx-auto h-32 w-32 rounded-full bg-purple-100 flex items-center justify-center mb-4">
//                 <span className="text-purple-600 text-xl font-bold">AS</span>
//               </div>
//               <h3 className="text-lg font-bold text-gray-900">Alice Smith</h3>
//               <p className="text-purple-600">Head of Research</p>
//               <p className="mt-2 text-gray-700">PhD in Media Studies and fact-checking expert</p>
//             </div>
            
//             <div className="text-center bg-white rounded-lg p-6 shadow-lg border border-gray-200">
//               <div className="mx-auto h-32 w-32 rounded-full bg-purple-100 flex items-center justify-center mb-4">
//                 <span className="text-purple-600 text-xl font-bold">MJ</span>
//               </div>
//               <h3 className="text-lg font-bold text-gray-900">Michael Johnson</h3>
//               <p className="text-purple-600">AI Lead</p>
//               <p className="mt-2 text-gray-700">Machine learning specialist with focus on NLP</p>
//             </div>
            
//             <div className="text-center bg-white rounded-lg p-6 shadow-lg border border-gray-200">
//               <div className="mx-auto h-32 w-32 rounded-full bg-purple-100 flex items-center justify-center mb-4">
//                 <span className="text-purple-600 text-xl font-bold">EW</span>
//               </div>
//               <h3 className="text-lg font-bold text-gray-900">Emma Wilson</h3>
//               <p className="text-purple-600">Verification Manager</p>
//               <p className="mt-2 text-gray-700">Leads our team of professional fact-checkers</p>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="text-center bg-gray-900 rounded-2xl shadow-xl py-16 px-6">
//           <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
//             Join the Fight Against Misinformation
//           </h2>
//           <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
//             Help us create a more informed society. Verify news, share accurate information, 
//             and become part of the solution.
//           </p>
//           <div className="mt-10">
//             <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition duration-300">
//               Start Verifying News
//             </button>
//             <button className="ml-4 inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-gray-800 transition duration-300">
//               Learn More
//             </button>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AboutUsPage;