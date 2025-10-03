const UserJourny = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
            NewsSummit User Journey
          </h1>
          <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
            How It Works
          </p>
        </header>

        {/* Main Description */}
        <div className="bg-gray-950 text-white rounded-2xl shadow-lg p-6 mb-12">
          <p className="text-center leading-relaxed">
            NewsSummit helps you verify news accuracy and detect misinformation in seconds using 
            advanced AI and natural language processing. Just import an article, URL, or text—our 
            system analyzes the content, verifies facts, and flags misinformation, giving you a 
            clear accuracy score and vital insight into its credibility.
          </p>
        </div>

        {/* Steps Section */}
        <div className="space-y-12">
          
          {/* Step 1 - Get Started */}
          <div className="bg-gray-900 text-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-600 text-white mr-4">
                <span className="text-lg font-bold">1</span>
              </div>
              <h2 className="text-xl font-bold">Get Started</h2>
            </div>
            
            <div className="rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Submit Content</h3>
              <p className="text-white/80">
                Simply paste the text you want to verify or provide the URL of the news source 
                you wish to check. NewsSummit supports both direct input and web-based content.
              </p>
              <div className="mt-4 flex space-x-4">
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
                  Paste Text
                </button>
                <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition duration-300">
                  Enter URL
                </button>
              </div>
            </div>
          </div>

          {/* Step 2 - Get Results */}
          <div className="bg-gray-900 text-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-600 text-white mr-4">
                <span className="text-lg font-bold">2</span>
              </div>
              <h2 className="text-xl font-bold">Get Accurate Results</h2>
            </div>
            
            <div className="rounded-lg p-6">
              <p className="text-white/80 mb-4">
                Within moments, you'll receive a detailed breakdown of the content's accuracy score, 
                fact-checking results, source credibility, and trust level empowering you to make 
                informed decisions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500">Accuracy Score</div>
                  <div className="text-2xl font-bold text-purple-600">94%</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500">Trust Level</div>
                  <div className="text-2xl font-bold text-green-600">High</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500">Source Rating</div>
                  <div className="text-2xl font-bold text-blue-600">Reliable</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500">Fact Check</div>
                  <div className="text-2xl font-bold text-green-600">Verified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 - AI Analysis */}
          <div className="bg-gray-900 text-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-600 text-white mr-4">
                <span className="text-lg font-bold">3</span>
              </div>
              <h2 className="text-xl font-bold ">AI-Powered Verification</h2>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 text-white">
              <p className="text-lg mb-6">
                Our advanced AI model processes the content to determine its factual accuracy, 
                verify sources, cross-reference information, and assess credibility all in real-time.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-white/80" >Fact Verification</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-white/80" >Source Credibility</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-white/80" >Cross-Referencing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-white/80" >Real-time Analysis</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Verify Your News?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust NewsSummit for accurate news verification and misinformation detection.
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition duration-300">
            Start Verifying Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default UserJourny;