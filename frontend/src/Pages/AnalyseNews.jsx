// import React, { useState } from 'react';
// // import './App.css';

// function AnalyseNews() {
//   const [newsText, setNewsText] = useState('');
//   const [newsUrl, setNewsUrl] = useState('');
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const analyzeNews = async (e) => {
//     e.preventDefault();
    
//     if (!newsText.trim() && !newsUrl.trim()) {
//       setError('Please enter either news text or a URL');
//       return;
//     }

//     setLoading(true);
//     setError('');
//     setResult(null);

//     try {
//       // Simulate API call - replace with actual verification service
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       // Mock response - replace with actual API integration
//       const mockResult = {
//         isTrue: Math.random() > 0.5,
//         confidence: Math.floor(Math.random() * 40) + 60,
//         sources: [
//           { name: 'Reuters', url: 'https://reuters.com', supports: true },
//           { name: 'Associated Press', url: 'https://apnews.com', supports: false },
//           { name: 'FactCheck.org', url: 'https://factcheck.org', supports: true }
//         ],
//         explanation: 'This news appears to be based on verified information from multiple reliable sources. However, some context might be missing from the original reporting.',
//         similarStories: [
//           { title: 'Related verified story', url: '#', date: '2024-01-15' },
//           { title: 'Fact-check analysis', url: '#', date: '2024-01-14' }
//         ]
//       };

//       setResult(mockResult);
//     } catch (err) {
//       setError('Failed to analyze news. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetForm = () => {
//     setNewsText('');
//     setNewsUrl('');
//     setResult(null);
//     setError('');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-xl">✓</span>
//               </div>
//               <h1 className="ml-3 text-2xl font-bold text-gray-900">TruthVerifier</h1>
//             </div>
//             <nav className="hidden md:flex space-x-8">
//               <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</a>
//               <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
//               <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
//             </nav>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//             Verify News Authenticity
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Paste any news article or URL to check its credibility using advanced fact-checking technology
//           </p>
//         </div>

//         {/* Main Form */}
//         <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//           <form onSubmit={analyzeNews} className="space-y-6">
//             <div>
//               <label htmlFor="newsText" className="block text-sm font-medium text-gray-700 mb-2">
//                 News Content
//               </label>
//               <textarea
//                 id="newsText"
//                 rows="4"
//                 value={newsText}
//                 onChange={(e) => setNewsText(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
//                 placeholder="Paste the news content here..."
//               />
//             </div>

//             <div className="text-center text-gray-500">OR</div>

//             <div>
//               <label htmlFor="newsUrl" className="block text-sm font-medium text-gray-700 mb-2">
//                 News URL
//               </label>
//               <input
//                 type="url"
//                 id="newsUrl"
//                 value={newsUrl}
//                 onChange={(e) => setNewsUrl(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="https://example.com/news-article"
//               />
//             </div>

//             {error && (
//               <div className="bg-red-50 border border-red-200 rounded-lg p-4">
//                 <p className="text-red-700">{error}</p>
//               </div>
//             )}

//             <div className="flex space-x-4">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//               >
//                 {loading ? (
//                   <div className="flex items-center justify-center">
//                     <div className="loading-spinner mr-3"></div>
//                     Analyzing...
//                   </div>
//                 ) : (
//                   'Verify News'
//                 )}
//               </button>
              
//               <button
//                 type="button"
//                 onClick={resetForm}
//                 className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
//               >
//                 Clear
//               </button>
//             </div>
//           </form>

//           {/* Results Section */}
//           {result && (
//             <div className="mt-8 p-6 border rounded-lg bg-gray-50">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-2xl font-bold text-gray-900">Analysis Results</h2>
//                 <div className={`px-4 py-2 rounded-full font-medium ${
//                   result.isTrue 
//                     ? 'bg-green-100 text-green-800' 
//                     : 'bg-red-100 text-red-800'
//                 }`}>
//                   {result.isTrue ? 'Likely True' : 'Likely False'}
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Confidence Score</h3>
//                   <div className="bg-white rounded-lg p-4 shadow-sm">
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-sm text-gray-600">Accuracy</span>
//                       <span className="text-lg font-bold text-blue-600">{result.confidence}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div 
//                         className="bg-blue-600 h-2 rounded-full transition-all duration-500"
//                         style={{ width: `${result.confidence}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Source Analysis</h3>
//                   <div className="space-y-2">
//                     {result.sources.map((source, index) => (
//                       <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
//                         <span className="text-sm font-medium">{source.name}</span>
//                         <span className={`px-2 py-1 rounded text-xs ${
//                           source.supports 
//                             ? 'bg-green-100 text-green-800' 
//                             : 'bg-red-100 text-red-800'
//                         }`}>
//                           {source.supports ? 'Supports' : 'Contradicts'}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-3">Explanation</h3>
//                 <p className="text-gray-700 bg-white p-4 rounded-lg shadow-sm">
//                   {result.explanation}
//                 </p>
//               </div>

//               {result.similarStories && result.similarStories.length > 0 && (
//                 <div className="mt-6">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Stories</h3>
//                   <div className="space-y-2">
//                     {result.similarStories.map((story, index) => (
//                       <a 
//                         key={index}
//                         href={story.url}
//                         className="block bg-white p-3 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
//                       >
//                         <div className="flex justify-between items-center">
//                           <span className="text-blue-600 hover:text-blue-800">{story.title}</span>
//                           <span className="text-sm text-gray-500">{story.date}</span>
//                         </div>
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         {/* How It Works Section */}
//         <div id="how-it-works" className="max-w-4xl mx-auto mt-20">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl">📝</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Paste Content</h3>
//               <p className="text-gray-600">Enter the news text or paste the URL of the article you want to verify</p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl">🔍</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
//               <p className="text-gray-600">Our system cross-references with trusted sources and analyzes patterns</p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl">📊</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Get Results</h3>
//               <p className="text-gray-600">Receive detailed analysis with confidence scores and source verification</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-white border-t mt-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="text-center text-gray-600">
//             <p>© 2024 TruthVerifier. Helping combat misinformation one fact at a time.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default AnalyseNews;




import React, { useState } from 'react';

function AnalyseNews() {
  const [newsText, setNewsText] = useState('');
  const [newsUrl, setNewsUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const analyzeNews = async (e) => {
    e.preventDefault();
    
    if (!newsText.trim() && !newsUrl.trim()) {
      setError('Please enter either news text or a URL');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const mockApiResult = {
        verdict: Math.random() > 0.5 ? 'true' : 'false',
        confidence_score: 0.7 + Math.random() * 0.25,
        source_analysis: [
          { source_name: 'Reuters', source_url: 'https://reuters.com', alignment: 'supporting' },
          { source_name: 'Associated Press', source_url: 'https://apnews.com', alignment: 'contradicting' },
          { source_name: 'FactCheck.org', source_url: 'https://factcheck.org', alignment: 'supporting' }
        ],
        explanation: 'This news appears to be based on verified information from multiple reliable sources. Cross-referencing with established fact-checking databases shows consistent reporting across reputable outlets.',
        related_fact_checks: [
          { title: 'Verified related story from trusted source', url: '#', publication_date: '2024-01-15' },
          { title: 'Fact-check analysis by independent organization', url: '#', publication_date: '2024-01-14' }
        ]
      };

      const apiResult = mockApiResult;
      
      const transformedResult = {
        isTrue: apiResult.verdict === 'true',
        confidence: Math.round(apiResult.confidence_score * 100),
        sources: apiResult.source_analysis.map(source => ({
          name: source.source_name,
          url: source.source_url,
          supports: source.alignment === 'supporting'
        })),
        explanation: apiResult.explanation,
        similarStories: apiResult.related_fact_checks.map(story => ({
          title: story.title,
          url: story.url,
          date: story.publication_date
        }))
      };
      setResult(transformedResult);
    } catch (err) {
      setError('Failed to analyze news. Please try again.');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setNewsText('');
    setNewsUrl('');
    setResult(null);
    setError('');
  };

  // return (
  //   <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
  //     {/* Hero Section */}
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  //       <div className="text-center mb-12">
  //         <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
  //           Verify News Authenticity
  //         </h1>
  //         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  //           Paste any news article or URL to check its credibility using advanced fact-checking technology
  //         </p>
  //       </div>

  //       {/* Main Form */}
  //       <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
  //         <form onSubmit={analyzeNews} className="space-y-6">
  //           <div>
  //             <label htmlFor="newsText" className="block text-sm font-medium text-gray-700 mb-2">
  //               News Content
  //             </label>
  //             <textarea
  //               id="newsText"
  //               rows="4"
  //               value={newsText}
  //               onChange={(e) => setNewsText(e.target.value)}
  //               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
  //               placeholder="Paste the news content here..."
  //             />
  //           </div>

  //           <div className="text-center text-gray-500">OR</div>

  //           <div>
  //             <label htmlFor="newsUrl" className="block text-sm font-medium text-gray-700 mb-2">
  //               News URL
  //             </label>
  //             <input
  //               type="url"
  //               id="newsUrl"
  //               value={newsUrl}
  //               onChange={(e) => setNewsUrl(e.target.value)}
  //               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  //               placeholder="https://example.com/news-article"
  //             />
  //           </div>

  //           {error && (
  //             <div className="bg-red-50 border border-red-200 rounded-lg p-4">
  //               <p className="text-red-700">{error}</p>
  //             </div>
  //           )}

  //           <div className="flex space-x-4">
  //             <button
  //               type="submit"
  //               disabled={loading}
  //               className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
  //             >
  //               {loading ? (
  //                 <div className="flex items-center justify-center">
  //                   <div className="loading-spinner mr-3"></div>
  //                   Analyzing...
  //                 </div>
  //               ) : (
  //                 'Verify News'
  //               )}
  //             </button>
              
  //             <button
  //               type="button"
  //               onClick={resetForm}
  //               className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
  //             >
  //               Clear
  //             </button>
  //           </div>
  //         </form>

  //         {/* Results Section */}
  //         {result && (
  //           <div className="mt-8 p-6 border rounded-lg bg-gray-50">
  //             <div className="flex items-center justify-between mb-6">
  //               <h2 className="text-2xl font-bold text-gray-900">Analysis Results</h2>
  //               <div className={`px-4 py-2 rounded-full font-medium ${
  //                 result.isTrue 
  //                   ? 'bg-green-100 text-green-800' 
  //                   : 'bg-red-100 text-red-800'
  //               }`}>
  //                 {result.isTrue ? 'Likely True' : 'Likely False'}
  //               </div>
  //             </div>

  //             <div className="grid md:grid-cols-2 gap-6">
  //               <div>
  //                 <h3 className="text-lg font-semibold text-gray-900 mb-3">Confidence Score</h3>
  //                 <div className="bg-white rounded-lg p-4 shadow-sm">
  //                   <div className="flex items-center justify-between mb-2">
  //                     <span className="text-sm text-gray-600">Accuracy</span>
  //                     <span className="text-lg font-bold text-blue-600">{result.confidence}%</span>
  //                   </div>
  //                   <div className="w-full bg-gray-200 rounded-full h-2">
  //                     <div 
  //                       className="bg-blue-600 h-2 rounded-full transition-all duration-500"
  //                       style={{ width: `${result.confidence}%` }}
  //                     ></div>
  //                   </div>
  //                 </div>
  //               </div>

  //               <div>
  //                 <h3 className="text-lg font-semibold text-gray-900 mb-3">Source Analysis</h3>
  //                 <div className="space-y-2">
  //                   {result.sources.map((source, index) => (
  //                     <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
  //                       <span className="text-sm font-medium">{source.name}</span>
  //                       <span className={`px-2 py-1 rounded text-xs ${
  //                         source.supports 
  //                           ? 'bg-green-100 text-green-800' 
  //                           : 'bg-red-100 text-red-800'
  //                       }`}>
  //                         {source.supports ? 'Supports' : 'Contradicts'}
  //                       </span>
  //                     </div>
  //                   ))}
  //                 </div>
  //               </div>
  //             </div>

  //             <div className="mt-6">
  //               <h3 className="text-lg font-semibold text-gray-900 mb-3">Explanation</h3>
  //               <p className="text-gray-700 bg-white p-4 rounded-lg shadow-sm">
  //                 {result.explanation}
  //               </p>
  //             </div>

  //             {result.similarStories && result.similarStories.length > 0 && (
  //               <div className="mt-6">
  //                 <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Stories</h3>
  //                 <div className="space-y-2">
  //                   {result.similarStories.map((story, index) => (
  //                     <a 
  //                       key={index}
  //                       href={story.url}
  //                       className="block bg-white p-3 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
  //                     >
  //                       <div className="flex justify-between items-center">
  //                         <span className="text-blue-600 hover:text-blue-800">{story.title}</span>
  //                         <span className="text-sm text-gray-500">{story.date}</span>
  //                       </div>
  //                     </a>
  //                   ))}
  //                 </div>
  //               </div>
  //             )}
  //           </div>
  //         )}
  //       </div>

  //       {/* How It Works Section */}
  //       <div id="how-it-works" className="max-w-4xl mx-auto mt-20">
  //         <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
  //         <div className="grid md:grid-cols-3 gap-8">
  //           <div className="text-center">
  //             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
  //               <span className="text-2xl">📝</span>
  //             </div>
  //             <h3 className="text-xl font-semibold mb-2">Paste Content</h3>
  //             <p className="text-gray-600">Enter the news text or paste the URL of the article you want to verify</p>
  //           </div>
            
  //           <div className="text-center">
  //             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
  //               <span className="text-2xl">🔍</span>
  //             </div>
  //             <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
  //             <p className="text-gray-600">Our system cross-references with trusted sources and analyzes patterns</p>
  //           </div>
            
  //           <div className="text-center">
  //             <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
  //               <span className="text-2xl">📊</span>
  //             </div>
  //             <h3 className="text-xl font-semibold mb-2">Get Results</h3>
  //             <p className="text-gray-600">Receive detailed analysis with confidence scores and source verification</p>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Stats Section */}
  //       <div className="max-w-4xl mx-auto mt-20 bg-white rounded-2xl shadow-lg p-8">
  //         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
  //           <div>
  //             <div className="text-3xl font-bold text-blue-600">10K+</div>
  //             <div className="text-gray-600">News Verified</div>
  //           </div>
  //           <div>
  //             <div className="text-3xl font-bold text-green-600">95%</div>
  //             <div className="text-gray-600">Accuracy Rate</div>
  //           </div>
  //           <div>
  //             <div className="text-3xl font-bold text-purple-600">50+</div>
  //             <div className="text-gray-600">Trusted Sources</div>
  //           </div>
  //           <div>
  //             <div className="text-3xl font-bold text-orange-600">24/7</div>
  //             <div className="text-gray-600">Real-time Analysis</div>
  //           </div>
  //         </div>
  //       </div>

  //       {/* FAQ Section */}
  //       <div className="max-w-4xl mx-auto mt-20">
  //         <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
  //         <div className="space-y-6">
  //           <div className="bg-white rounded-lg shadow-sm p-6">
  //             <h3 className="text-lg font-semibold text-gray-900 mb-2">How accurate is the verification?</h3>
  //             <p className="text-gray-600">Our system achieves over 95% accuracy by cross-referencing with multiple trusted sources and using advanced AI algorithms.</p>
  //           </div>
  //           <div className="bg-white rounded-lg shadow-sm p-6">
  //             <h3 className="text-lg font-semibold text-gray-900 mb-2">Which sources do you use for verification?</h3>
  //             <p className="text-gray-600">We use reputable fact-checking organizations, established news outlets, and official government sources for verification.</p>
  //           </div>
  //           <div className="bg-white rounded-lg shadow-sm p-6">
  //             <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my data secure?</h3>
  //             <p className="text-gray-600">Yes, we don't store your personal information or the content you verify. Your privacy is our priority.</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Footer */}
  //     <footer className="bg-white border-t mt-20">
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  //         <div className="text-center text-gray-600">
  //           <p>© 2024 TruthVerifier. Helping combat misinformation one fact at a time.</p>
  //         </div>
  //       </div>
  //     </footer>
  //   </div>
  // );


  return (
    <div className="min-h-screen  text-gray-100 font-sans">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {/* Smaller max-width, less padding */}
        <div className="text-center mb-12"> {/* Smaller bottom margin */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"> {/* Smaller font sizes */}NewsSummit AI</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto"> {/* Smaller font size, narrower max-width */}
            Harness the power of AI to instantly verify news authenticity and combat misinformation.
          </p>
        </div>

        {/* Main Form */}
        <div className="max-w-3xl mx-auto bg-gray-950 rounded-2xl shadow-xl p-6 md:p-8 border border-purple-800"> {/* Smaller max-width, smaller padding, slightly less rounded */}
          <form onSubmit={analyzeNews} className="space-y-6"> {/* Smaller space between elements */}
            <div>
              <label htmlFor="newsText" className="block text-sm font-medium text-purple-300 mb-2"> {/* Smaller bottom margin */}
                News Content
              </label>
              <textarea
                id="newsText"
                rows="4"
                value={newsText}
                onChange={(e) => setNewsText(e.target.value)}
                className="w-full px-4 py-3 border border-gray-700 bg-gray-900 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 text-gray-50 placeholder-gray-600 resize-none transition-colors text-sm" // Smaller padding, text size, less rounded
                placeholder="Paste the news content here..."
              />
            </div>

            <div className="text-center text-gray-500 font-semibold text-base relative"> {/* Smaller font size */}
              <span className="relative z-10 bg-gray-800 px-3">OR</span> {/* Smaller padding */}
              <div className="absolute inset-y-1/2 left-0 right-0 h-px bg-gray-700 -z-0"></div>
            </div>

            <div>
              <label htmlFor="newsUrl" className="block text-sm font-medium text-purple-300 mb-2"> {/* Smaller bottom margin */}
                News URL
              </label>
              <input
                type="url"
                id="newsUrl"
                value={newsUrl}
                onChange={(e) => setNewsUrl(e.target.value)}
                className="w-full px-4 py-3 border border-gray-700 bg-gray-900 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 text-gray-50 placeholder-gray-600 transition-colors text-sm" // Smaller padding, text size, less rounded
                placeholder="https://example.com/news-article"
              />
            </div>

            {error && (
              <div className="bg-red-900 border border-red-700 rounded-lg p-4 shadow-inner"> {/* Smaller padding, less rounded */}
                <p className="text-red-300 font-medium flex items-center text-sm"> {/* Smaller text size */}
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                  {error}
                </p>
              </div>
            )}

            <div className="flex space-x-4"> {/* Smaller space between buttons */}
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-purple-700 hover:bg-purple-900 text-white py-3 px-6 rounded-lg font-bold text-base hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md" // Smaller padding, font size, less rounded, smaller shadow
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> {/* Smaller spinner */}
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </div>
                ) : (
                  'Verify News'
                )}
              </button>
              
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3 border border-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors shadow-md text-base" // Smaller padding, less rounded
              >
                Clear
              </button>
            </div>
          </form>

          {/* Results Section */}
          {result && (
            <div className="mt-8 p-6 border border-purple-700 rounded-2xl bg-gray-900 shadow-xl animate-fade-in"> {/* Smaller margin, padding, less rounded */}
              <div className="flex flex-col md:flex-row items-center justify-between mb-6 pb-3 border-b border-gray-700"> {/* Smaller margin, padding, border */}
                <h2 className="text-2xl font-bold text-purple-400 mb-3 md:mb-0">Analysis Results</h2> {/* Smaller font size */}
                <div className={`px-5 py-1.5 rounded-full font-semibold text-base shadow-md ${ /* Smaller padding, text size */
                  result.isTrue 
                    ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white' 
                    : 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
                }`}>
                  {result.isTrue ? 'Likely True' : 'Likely False'}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6"> {/* Smaller gap, margin */}
                <div>
                  <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center"> {/* Smaller font size */}
                    <span className="mr-1.5 text-xl">✨</span> Confidence Score
                  </h3>
                  <div className="bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-700"> {/* Smaller padding, less rounded */}
                    <div className="flex items-center justify-between mb-2"> {/* Smaller margin */}
                      <span className="text-sm text-gray-400">Accuracy</span>
                      <span className="text-2xl font-bold text-purple-500">{result.confidence}%</span> {/* Smaller font size */}
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2"> {/* Thinner bar */}
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${result.confidence}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center"> {/* Smaller font size */}
                    <span className="mr-1.5 text-xl">📚</span> Source Analysis
                  </h3>
                  <div className="space-y-2"> {/* Smaller space */}
                    {result.sources.map((source, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-800 p-3 rounded-lg shadow-md border border-gray-700"> {/* Smaller padding, less rounded */}
                        <span className="text-sm font-medium text-gray-200">{source.name}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${ /* Smaller padding */
                          source.supports 
                            ? 'bg-green-700 text-green-200' 
                            : 'bg-red-700 text-red-200'
                        }`}>
                          {source.supports ? 'Supports' : 'Contradicts'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6"> {/* Smaller margin */}
                <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center"> {/* Smaller font size */}
                  <span className="mr-1.5 text-xl">💬</span> Explanation
                </h3>
                <p className="text-gray-300 bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 leading-relaxed text-sm"> {/* Smaller padding, less rounded, smaller text size */}
                  {result.explanation}
                </p>
              </div>

              {result.similarStories && result.similarStories.length > 0 && (
                <div className="mt-6"> {/* Smaller margin */}
                  <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center"> {/* Smaller font size */}
                    <span className="mr-1.5 text-xl">🔗</span> Related Stories
                  </h3>
                  <div className="space-y-2"> {/* Smaller space */}
                    {result.similarStories.map((story, index) => (
                      <a 
                        key={index}
                        href={story.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-gray-800 p-3 rounded-lg shadow-md border border-gray-700 hover:bg-gray-700 transition-colors group" // Smaller padding, less rounded
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-purple-400 group-hover:text-purple-300 text-base font-medium">{story.title}</span> {/* Smaller font size */}
                          <span className="text-xs text-gray-500">{story.date}</span> {/* Smaller font size */}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* How It Works Section */}
        <div id="how-it-works" className="max-w-3xl mx-auto mt-20"> {/* Smaller max-width, margin */}
          <h2 className="text-3xl font-bold text-center text-purple-400 mb-10">How It Works</h2> {/* Smaller font size, margin */}
          <div className="grid md:grid-cols-3 gap-8"> {/* Smaller gap */}
            <div className="text-center p-5 bg-gray-800 rounded-xl shadow-xl border border-purple-800"> {/* Smaller padding, less rounded */}
              <div className="w-16 h-16 bg-purple-900 bg-opacity-50 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl shadow-inner border border-purple-700"> {/* Smaller dimensions, font size */}
                📝
              </div>
              <h3 className="text-xl font-semibold text-purple-300 mb-2">Paste Content</h3> {/* Smaller font size */}
              <p className="text-gray-400 leading-relaxed text-sm">Simply enter the news text or paste the URL of the article you wish to verify.</p> {/* Smaller text size */}
            </div>
            
            <div className="text-center p-5 bg-gray-800 rounded-xl shadow-xl border border-purple-800"> {/* Smaller padding, less rounded */}
              <div className="w-16 h-16 bg-pink-900 bg-opacity-50 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl shadow-inner border border-pink-700"> {/* Smaller dimensions, font size */}
                🔍
              </div>
              <h3 className="text-xl font-semibold text-pink-300 mb-2">AI Analysis</h3> {/* Smaller font size */}
              <p className="text-gray-400 leading-relaxed text-sm">Our advanced AI system rapidly cross-references with a vast database of trusted sources.</p> {/* Smaller text size */}
            </div>
            
            <div className="text-center p-5 bg-gray-800 rounded-xl shadow-xl border border-purple-800"> {/* Smaller padding, less rounded */}
              <div className="w-16 h-16 bg-teal-900 bg-opacity-50 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl shadow-inner border border-teal-700"> {/* Smaller dimensions, font size */}
                📊
              </div>
              <h3 className="text-xl font-semibold text-teal-300 mb-2">Get Results</h3> {/* Smaller font size */}
              <p className="text-gray-400 leading-relaxed text-sm">Receive instant, detailed analysis with clear confidence scores and source verification.</p> {/* Smaller text size */}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-3xl mx-auto mt-20 bg-gray-800 rounded-2xl shadow-xl p-8 border border-pink-800"> {/* Smaller max-width, margin, padding, less rounded */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"> {/* Smaller gap */}
            <div>
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-1">10K+</div> {/* Smaller font size */}
              <div className="text-gray-400 text-base">News Verified</div> {/* Smaller text size */}
            </div>
            <div>
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 mb-1">95%</div> {/* Smaller font size */}
              <div className="text-gray-400 text-base">Accuracy Rate</div> {/* Smaller text size */}
            </div>
            <div>
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-1">50+</div> {/* Smaller font size */}
              <div className="text-gray-400 text-base">Trusted Sources</div> {/* Smaller text size */}
            </div>
            <div>
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-500 mb-1">24/7</div> {/* Smaller font size */}
              <div className="text-gray-400 text-base">Real-time Analysis</div> {/* Smaller text size */}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-20"> {/* Smaller max-width, margin */}
          <h2 className="text-4xl font-bold text-center text-white mb-10">Frequently Asked Questions</h2> {/* Smaller font size, margin */}
          <div className="space-y-5"> {/* Smaller space */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-purple-800"> {/* Smaller padding, less rounded */}
              <h3 className="text-lg font-semibold text-purple-300 mb-2 flex items-center"> {/* Smaller font size */}
                <span className="mr-2 text-xl text-pink-400">❓</span> How accurate is the verification?
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">Our system achieves over 95% accuracy by leveraging cutting-edge AI, cross-referencing with a multitude of trusted journalistic and academic sources, and employing advanced linguistic analysis to detect subtle biases and inconsistencies.</p> {/* Smaller text size */}
            </div>
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-purple-800"> {/* Smaller padding, less rounded */}
              <h3 className="text-lg font-semibold text-purple-300 mb-2 flex items-center"> {/* Smaller font size */}
                <span className="mr-2 text-xl text-pink-400">🌐</span> Which sources do you use for verification?
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">We integrate data from a diverse array of highly reputable sources including established international news agencies, independent fact-checking organizations (e.g., Poynter Institute's International Fact-Checking Network signatories), peer-reviewed academic journals, and official government publications. We prioritize sources with proven track records of journalistic integrity.</p> {/* Smaller text size */}
            </div>
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-purple-800"> {/* Smaller padding, less rounded */}
              <h3 className="text-lg font-semibold text-purple-300 mb-2 flex items-center"> {/* Smaller font size */}
                <span className="mr-2 text-xl text-pink-400">🔒</span> Is my data secure and private?
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">Absolutely. Your privacy is paramount. We do not store any news content you submit or your personal identifying information. All analyses are performed in real-time, and content is processed transiently, ensuring your data remains private and secure.</p> {/* Smaller text size */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );


  // return (
  //   <div className="min-h-screen bg-black text-gray-100 font-sans">
  //     {/* Hero Section */}
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  //       <div className="text-center mb-16">
  //         <h1 className="text-xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-white mb-6 leading-tight">
  //           TruthGuard 
  //         </h1>
  //         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
  //           Harness the power of AI to instantly verify news authenticity and combat misinformation.
  //         </p>
  //       </div>

  //       {/* Main Form */}
  //       <div className="max-w-4xl mx-auto bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-10 border border-purple-800">
  //         <form onSubmit={analyzeNews} className="space-y-8">
  //           <div>
  //             <label htmlFor="newsText" className="block text-sm font-medium text-purple-300 mb-3">
  //               News Content
  //             </label>
  //             <textarea
  //               id="newsText"
  //               rows="5"
  //               value={newsText}
  //               onChange={(e) => setNewsText(e.target.value)}
  //               className="w-full px-5 py-4 border border-gray-700 bg-gray-900 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-purple-600 text-gray-50 placeholder-gray-600 resize-none transition-colors"
  //               placeholder="Paste the news content here..."
  //             />
  //           </div>

  //           <div className="text-center text-gray-500 font-semibold text-lg relative">
  //             <span className="relative z-10 bg-gray-800 px-4">OR</span>
  //             <div className="absolute inset-y-1/2 left-0 right-0 h-px bg-gray-700 -z-0"></div>
  //           </div>

  //           <div>
  //             <label htmlFor="newsUrl" className="block text-sm font-medium text-purple-300 mb-3">
  //               News URL
  //             </label>
  //             <input
  //               type="url"
  //               id="newsUrl"
  //               value={newsUrl}
  //               onChange={(e) => setNewsUrl(e.target.value)}
  //               className="w-full px-5 py-4 border border-gray-700 bg-gray-900 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-purple-600 text-gray-50 placeholder-gray-600 transition-colors"
  //               placeholder="https://example.com/news-article"
  //             />
  //           </div>

  //           {error && (
  //             <div className="bg-red-900 border border-red-700 rounded-xl p-5 shadow-inner">
  //               <p className="text-red-300 font-medium flex items-center">
  //                 <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
  //                 {error}
  //               </p>
  //             </div>
  //           )}

  //           <div className="flex space-x-6">
  //             <button
  //               type="submit"
  //               disabled={loading}
  //               className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
  //             >
  //               {loading ? (
  //                 <div className="flex items-center justify-center">
  //                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  //                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
  //                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  //                   </svg>
  //                   Analyzing...
  //                 </div>
  //               ) : (
  //                 'Verify News'
  //               )}
  //             </button>
              
  //             <button
  //               type="button"
  //               onClick={resetForm}
  //               className="px-8 py-4 border border-gray-700 text-gray-300 rounded-xl font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors shadow-md"
  //             >
  //               Clear
  //             </button>
  //           </div>
  //         </form>

  //         {/* Results Section */}
  //         {result && (
  //           <div className="mt-12 p-8 border border-purple-700 rounded-3xl bg-gray-900 shadow-xl animate-fade-in">
  //             <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-4 border-b border-gray-700">
  //               <h2 className="text-3xl font-bold text-purple-400 mb-4 md:mb-0">Analysis Results</h2>
  //               <div className={`px-6 py-2 rounded-full font-semibold text-lg shadow-md ${
  //                 result.isTrue 
  //                   ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white' 
  //                   : 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
  //               }`}>
  //                 {result.isTrue ? 'Likely True' : 'Likely False'}
  //               </div>
  //             </div>

  //             <div className="grid md:grid-cols-2 gap-8 mb-8">
  //               <div>
  //                 <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
  //                   <span className="mr-2 text-2xl">✨</span> Confidence Score
  //                 </h3>
  //                 <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
  //                   <div className="flex items-center justify-between mb-3">
  //                     <span className="text-md text-gray-400">Accuracy</span>
  //                     <span className="text-3xl font-bold text-purple-500">{result.confidence}%</span>
  //                   </div>
  //                   <div className="w-full bg-gray-700 rounded-full h-3">
  //                     <div 
  //                       className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-700 ease-out"
  //                       style={{ width: `${result.confidence}%` }}
  //                     ></div>
  //                   </div>
  //                 </div>
  //               </div>

  //               <div>
  //                 <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
  //                   <span className="mr-2 text-2xl">📚</span> Source Analysis
  //                 </h3>
  //                 <div className="space-y-3">
  //                   {result.sources.map((source, index) => (
  //                     <div key={index} className="flex items-center justify-between bg-gray-800 p-4 rounded-xl shadow-md border border-gray-700">
  //                       <span className="text-md font-medium text-gray-200">{source.name}</span>
  //                       <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
  //                         source.supports 
  //                           ? 'bg-green-700 text-green-200' 
  //                           : 'bg-red-700 text-red-200'
  //                       }`}>
  //                         {source.supports ? 'Supports' : 'Contradicts'}
  //                       </span>
  //                     </div>
  //                   ))}
  //                 </div>
  //               </div>
  //             </div>

  //             <div className="mt-8">
  //               <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
  //                 <span className="mr-2 text-2xl">💬</span> Explanation
  //               </h3>
  //               <p className="text-gray-300 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 leading-relaxed">
  //                 {result.explanation}
  //               </p>
  //             </div>

  //             {result.similarStories && result.similarStories.length > 0 && (
  //               <div className="mt-8">
  //                 <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
  //                   <span className="mr-2 text-2xl">🔗</span> Related Stories
  //                 </h3>
  //                 <div className="space-y-3">
  //                   {result.similarStories.map((story, index) => (
  //                     <a 
  //                       key={index}
  //                       href={story.url}
  //                       target="_blank"
  //                       rel="noopener noreferrer"
  //                       className="block bg-gray-800 p-4 rounded-xl shadow-md border border-gray-700 hover:bg-gray-700 transition-colors group"
  //                     >
  //                       <div className="flex justify-between items-center">
  //                         <span className="text-purple-400 group-hover:text-purple-300 text-lg font-medium">{story.title}</span>
  //                         <span className="text-sm text-gray-500">{story.date}</span>
  //                       </div>
  //                     </a>
  //                   ))}
  //                 </div>
  //               </div>
  //             )}
  //           </div>
  //         )}
  //       </div>

  //       {/* How It Works Section */}
  //       <div id="how-it-works" className="max-w-4xl mx-auto mt-24">
  //         <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">How It Works</h2>
  //         <div className="grid md:grid-cols-3 gap-10">
  //           <div className="text-center p-6 bg-gray-800 rounded-2xl shadow-xl border border-purple-800">
  //             <div className="w-20 h-20 bg-purple-900 bg-opacity-50 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner border border-purple-700">
  //               📝
  //             </div>
  //             <h3 className="text-2xl font-semibold text-purple-300 mb-3">Paste Content</h3>
  //             <p className="text-gray-400 leading-relaxed">Simply enter the news text or paste the URL of the article you wish to verify.</p>
  //           </div>
            
  //           <div className="text-center p-6 bg-gray-800 rounded-2xl shadow-xl border border-purple-800">
  //             <div className="w-20 h-20 bg-pink-900 bg-opacity-50 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner border border-pink-700">
  //               🔍
  //             </div>
  //             <h3 className="text-2xl font-semibold text-pink-300 mb-3">AI Analysis</h3>
  //             <p className="text-gray-400 leading-relaxed">Our advanced AI system rapidly cross-references with a vast database of trusted sources.</p>
  //           </div>
            
  //           <div className="text-center p-6 bg-gray-800 rounded-2xl shadow-xl border border-purple-800">
  //             <div className="w-20 h-20 bg-teal-900 bg-opacity-50 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner border border-teal-700">
  //               📊
  //             </div>
  //             <h3 className="text-2xl font-semibold text-teal-300 mb-3">Get Results</h3>
  //             <p className="text-gray-400 leading-relaxed">Receive instant, detailed analysis with clear confidence scores and source verification.</p>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Stats Section */}
  //       <div className="max-w-4xl mx-auto mt-24 bg-gray-800 rounded-3xl shadow-2xl p-10 border border-pink-800">
  //         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
  //           <div>
  //             <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">10K+</div>
  //             <div className="text-gray-400 text-lg">News Verified</div>
  //           </div>
  //           <div>
  //             <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 mb-2">95%</div>
  //             <div className="text-gray-400 text-lg">Accuracy Rate</div>
  //           </div>
  //           <div>
  //             <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">50+</div>
  //             <div className="text-gray-400 text-lg">Trusted Sources</div>
  //           </div>
  //           <div>
  //             <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-500 mb-2">24/7</div>
  //             <div className="text-gray-400 text-lg">Real-time Analysis</div>
  //           </div>
  //         </div>
  //       </div>

  //       {/* FAQ Section */}
  //       <div className="max-w-4xl mx-auto mt-24">
  //         <h2 className="text-4xl font-bold text-center text-pink-400 mb-12">Frequently Asked Questions</h2>
  //         <div className="space-y-6">
  //           <div className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-purple-800">
  //             <h3 className="text-xl font-semibold text-purple-300 mb-3 flex items-center">
  //               <span className="mr-3 text-2xl text-pink-400">❓</span> How accurate is the verification?
  //             </h3>
  //             <p className="text-gray-400 leading-relaxed">Our system achieves over 95% accuracy by leveraging cutting-edge AI, cross-referencing with a multitude of trusted journalistic and academic sources, and employing advanced linguistic analysis to detect subtle biases and inconsistencies.</p>
  //           </div>
  //           <div className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-purple-800">
  //             <h3 className="text-xl font-semibold text-purple-300 mb-3 flex items-center">
  //               <span className="mr-3 text-2xl text-pink-400">🌐</span> Which sources do you use for verification?
  //             </h3>
  //             <p className="text-gray-400 leading-relaxed">We integrate data from a diverse array of highly reputable sources including established international news agencies, independent fact-checking organizations (e.g., Poynter Institute's International Fact-Checking Network signatories), peer-reviewed academic journals, and official government publications. We prioritize sources with proven track records of journalistic integrity.</p>
  //           </div>
  //           <div className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-purple-800">
  //             <h3 className="text-xl font-semibold text-purple-300 mb-3 flex items-center">
  //               <span className="mr-3 text-2xl text-pink-400">🔒</span> Is my data secure and private?
  //             </h3>
  //             <p className="text-gray-400 leading-relaxed">Absolutely. Your privacy is paramount. We do not store any news content you submit or your personal identifying information. All analyses are performed in real-time, and content is processed transiently, ensuring your data remains private and secure.</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Footer */}
  //     {/* <footer className="bg-gray-950 border-t border-purple-900 mt-20">
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  //         <div className="text-center text-gray-500 text-sm">
  //           <p>© 2024 TruthGuard AI. Empowering informed decisions in the digital age.</p>
  //           <p className="mt-2">Built with <span className="text-pink-500">❤️</span> for a more truthful world.</p>
  //         </div>
  //       </div>
  //     </footer> */}
  //   </div>
  // );

}

export default AnalyseNews;





// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [newsText, setNewsText] = useState('');
//   const [newsUrl, setNewsUrl] = useState('');
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const analyzeNews = async (e) => {
//     e.preventDefault();
    
//     if (!newsText.trim() && !newsUrl.trim()) {
//       setError('Please enter either news text or a URL');
//       return;
//     }

//     setLoading(true);
//     setError('');
//     setResult(null);

//     try {
//       // Simulate API call - replace with actual verification service
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       // Mock response - replace with actual API integration
//       const mockResult = {
//         isTrue: Math.random() > 0.5,
//         confidence: Math.floor(Math.random() * 40) + 60,
//         sources: [
//           { name: 'Reuters', url: 'https://reuters.com', supports: true },
//           { name: 'Associated Press', url: 'https://apnews.com', supports: false },
//           { name: 'FactCheck.org', url: 'https://factcheck.org', supports: true }
//         ],
//         explanation: 'This news appears to be based on verified information from multiple reliable sources. However, some context might be missing from the original reporting.',
//         similarStories: [
//           { title: 'Related verified story', url: '#', date: '2024-01-15' },
//           { title: 'Fact-check analysis', url: '#', date: '2024-01-14' }
//         ]
//       };

//       setResult(mockResult);
//     } catch (err) {
//       setError('Failed to analyze news. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetForm = () => {
//     setNewsText('');
//     setNewsUrl('');
//     setResult(null);
//     setError('');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-xl">✓</span>
//               </div>
//               <h1 className="ml-3 text-2xl font-bold text-gray-900">TruthVerifier</h1>
//             </div>
//             <nav className="hidden md:flex space-x-8">
//               <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</a>
//               <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
//               <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
//             </nav>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//             Verify News Authenticity
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Paste any news article or URL to check its credibility using advanced fact-checking technology
//           </p>
//         </div>

//         {/* Main Form */}
//         <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//           <form onSubmit={analyzeNews} className="space-y-6">
//             <div>
//               <label htmlFor="newsText" className="block text-sm font-medium text-gray-700 mb-2">
//                 News Content
//               </label>
//               <textarea
//                 id="newsText"
//                 rows="4"
//                 value={newsText}
//                 onChange={(e) => setNewsText(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
//                 placeholder="Paste the news content here..."
//               />
//             </div>

//             <div className="text-center text-gray-500">OR</div>

//             <div>
//               <label htmlFor="newsUrl" className="block text-sm font-medium text-gray-700 mb-2">
//                 News URL
//               </label>
//               <input
//                 type="url"
//                 id="newsUrl"
//                 value={newsUrl}
//                 onChange={(e) => setNewsUrl(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="https://example.com/news-article"
//               />
//             </div>

//             {error && (
//               <div className="bg-red-50 border border-red-200 rounded-lg p-4">
//                 <p className="text-red-700">{error}</p>
//               </div>
//             )}

//             <div className="flex space-x-4">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//               >
//                 {loading ? (
//                   <div className="flex items-center justify-center">
//                     <div className="loading-spinner mr-3"></div>
//                     Analyzing...
//                   </div>
//                 ) : (
//                   'Verify News'
//                 )}
//               </button>
              
//               <button
//                 type="button"
//                 onClick={resetForm}
//                 className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
//               >
//                 Clear
//               </button>
//             </div>
//           </form>

//           {/* Results Section */}
//           {result && (
//             <div className="mt-8 p-6 border rounded-lg bg-gray-50">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-2xl font-bold text-gray-900">Analysis Results</h2>
//                 <div className={`px-4 py-2 rounded-full font-medium ${
//                   result.isTrue 
//                     ? 'bg-green-100 text-green-800' 
//                     : 'bg-red-100 text-red-800'
//                 }`}>
//                   {result.isTrue ? 'Likely True' : 'Likely False'}
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Confidence Score</h3>
//                   <div className="bg-white rounded-lg p-4 shadow-sm">
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-sm text-gray-600">Accuracy</span>
//                       <span className="text-lg font-bold text-blue-600">{result.confidence}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div 
//                         className="bg-blue-600 h-2 rounded-full transition-all duration-500"
//                         style={{ width: `${result.confidence}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Source Analysis</h3>
//                   <div className="space-y-2">
//                     {result.sources.map((source, index) => (
//                       <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
//                         <span className="text-sm font-medium">{source.name}</span>
//                         <span className={`px-2 py-1 rounded text-xs ${
//                           source.supports 
//                             ? 'bg-green-100 text-green-800' 
//                             : 'bg-red-100 text-red-800'
//                         }`}>
//                           {source.supports ? 'Supports' : 'Contradicts'}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-3">Explanation</h3>
//                 <p className="text-gray-700 bg-white p-4 rounded-lg shadow-sm">
//                   {result.explanation}
//                 </p>
//               </div>

//               {result.similarStories && result.similarStories.length > 0 && (
//                 <div className="mt-6">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Stories</h3>
//                   <div className="space-y-2">
//                     {result.similarStories.map((story, index) => (
//                       <a 
//                         key={index}
//                         href={story.url}
//                         className="block bg-white p-3 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
//                       >
//                         <div className="flex justify-between items-center">
//                           <span className="text-blue-600 hover:text-blue-800">{story.title}</span>
//                           <span className="text-sm text-gray-500">{story.date}</span>
//                         </div>
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         {/* How It Works Section */}
//         <div id="how-it-works" className="max-w-4xl mx-auto mt-20">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl">📝</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Paste Content</h3>
//               <p className="text-gray-600">Enter the news text or paste the URL of the article you want to verify</p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl">🔍</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
//               <p className="text-gray-600">Our system cross-references with trusted sources and analyzes patterns</p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl">📊</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Get Results</h3>
//               <p className="text-gray-600">Receive detailed analysis with confidence scores and source verification</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-white border-t mt-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="text-center text-gray-600">
//             <p>© 2024 TruthVerifier. Helping combat misinformation one fact at a time.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;


