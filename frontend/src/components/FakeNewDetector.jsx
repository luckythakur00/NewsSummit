import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Shield, Search, RefreshCw, Link, FileText, Loader, XCircle, Info } from 'lucide-react';

const FakeNewDetector = () => {
  const [inputText, setInputText] = useState('');
  const [inputUrl, setInputUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('text');
  const [error, setError] = useState(null);

  // Google Fact Check API Key - Get free from: https://developers.google.com/fact-check/tools/api
  const FACT_CHECK_API_KEY = 'YOUR_API_KEY_HERE';

  const analyzeWithFactCheckAPI = async (query) => {
    try {
      const response = await fetch(`https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${encodeURIComponent(query)}&key=${FACT_CHECK_API_KEY}`);

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Fact Check API Error:', err);
      return null;
    }
  };

  const analyzeText = async (text) => {
    setLoading(true);
    setError(null);

    try {
      const factCheckData = await analyzeWithFactCheckAPI(text);

      if (factCheckData && factCheckData.claims && factCheckData.claims.length > 0) {
        const claim = factCheckData.claims[0];
        const review = claim.claimReview?.[0];

        let verdict, color, icon, confidence;

        if (review) {
          const rating = review.textualRating?.toLowerCase() || '';

          if (rating.includes('false') || rating.includes('fake') || rating.includes('pants on fire')) {
            verdict = "FALSE - This claim has been fact-checked";
            color = "red";
            icon = <XCircle className="w-12 h-12" />;
            confidence = 95;
          } else if (rating.includes('mostly false') || rating.includes('misleading')) {
            verdict = "MISLEADING - Partially false information";
            color = "orange";
            icon = <AlertTriangle className="w-12 h-12" />;
            confidence = 80;
          } else if (rating.includes('true') || rating.includes('correct')) {
            verdict = "TRUE - Verified by fact-checkers";
            color = "green";
            icon = <CheckCircle className="w-12 h-12" />;
            confidence = 90;
          } else {
            verdict = "UNVERIFIED - Mixed or unclear rating";
            color = "yellow";
            icon = <Info className="w-12 h-12" />;
            confidence = 50;
          }

          setAnalysisResult({
            verdict,
            confidence,
            color,
            icon,
            factCheckSource: {
              publisher: review.publisher?.name || 'Unknown',
              title: review.title || claim.text,
              rating: review.textualRating || 'Not specified',
              url: review.url,
              date: review.reviewDate
            },
            claim: claim.text,
            recommendations: [
              `✓ Fact-checked by ${review.publisher?.name || 'verified source'}`,
              `📅 Review date: ${review.reviewDate || 'Recent'}`,
              `🔗 Source: ${review.url ? 'Available' : 'Not provided'}`,
              "Always verify with multiple sources for important claims"
            ]
          });
        } else {
          // No review but claim exists
          performLocalAnalysis(text, 'No fact-check reviews found for this claim');
        }
      } else {
        // No fact-check data available, use local analysis
        performLocalAnalysis(text, 'No matching fact-checks found in database');
      }
    } catch (err) {
      setError('Unable to verify claim. Using local analysis.');
      performLocalAnalysis(text, 'API unavailable - using pattern-based analysis');
    }

    setLoading(false);
  };

  // Local pattern-based analysis as fallback
  const performLocalAnalysis = (text, note) => {
    const textLower = text.toLowerCase();

    // Critical claims that should NEVER be auto-verified
    const criticalClaims = [
      'killed', 'died', 'dead', 'assassination', 'murdered',
      'war declared', 'attack', 'bomb', 'terrorist',
      'prime minister', 'president', 'pm', 'celebrity death'
    ];

    const hasCriticalClaim = criticalClaims.some(claim => textLower.includes(claim));

    if (hasCriticalClaim) {
      setAnalysisResult({
        verdict: "⚠️ UNVERIFIED SERIOUS CLAIM - Requires Fact-Checking",
        confidence: 0,
        color: "red",
        icon: <AlertTriangle className="w-12 h-12" />,
        warning: "This appears to be a serious claim that requires immediate verification from trusted news sources.",
        note: note,
        recommendations: [
          "🚨 DO NOT SHARE without verification",
          "📰 Check trusted news sources immediately (BBC, Reuters, PTI, ANI)",
          "🔍 Search on Google News for confirmation",
          "⚠️ Serious claims require multiple reliable sources",
          "📱 Report if spreading misinformation"
        ]
      });
      return;
    }

    // Regular analysis for non-critical content
    const fakeIndicators = [
      'breaking', 'shocking', 'unbelievable', 'miracle', 'secret',
      'click here', 'you won\'t believe', 'must watch', 'viral'
    ];

    const credibleIndicators = [
      'according to', 'study', 'research', 'expert', 'official'
    ];

    let fakeScore = 0;
    let credibleScore = 0;

    fakeIndicators.forEach(indicator => {
      if (textLower.includes(indicator)) fakeScore += 2;
    });

    credibleIndicators.forEach(indicator => {
      if (textLower.includes(indicator)) credibleScore += 3;
    });

    const capsRatio = (text.match(/[A-Z]/g) || []).length / text.length;
    if (capsRatio > 0.3) fakeScore += 3;

    const exclamationCount = (text.match(/!/g) || []).length;
    if (exclamationCount > 3) fakeScore += 2;

    const totalScore = fakeScore - credibleScore;
    let verdict, confidence, color, icon;

    if (totalScore > 5) {
      verdict = "LIKELY MISLEADING - Pattern analysis";
      confidence = 70;
      color = "orange";
      icon = <AlertTriangle className="w-12 h-12" />;
    } else {
      verdict = "CANNOT VERIFY - Please fact-check manually";
      confidence = 0;
      color = "yellow";
      icon = <Info className="w-12 h-12" />;
    }

    setAnalysisResult({
      verdict,
      confidence,
      color,
      icon,
      note: note,
      details: {
        suspiciousPatterns: fakeScore,
        crediblePatterns: credibleScore,
        capsUsage: capsRatio > 0.3 ? "High" : "Normal",
        exclamationMarks: exclamationCount
      },
      recommendations: [
        "🔍 Verify with trusted fact-checking websites",
        "📰 Check Factly.in, AltNews.in, BoomLive.in",
        "🌐 Search on Google News for confirmation",
        "⚠️ Don't share without verification"
      ]
    });
  };

  const handleAnalyze = () => {
    if (activeTab === 'text' && inputText.trim()) {
      analyzeText(inputText);
    } else if (activeTab === 'url' && inputUrl.trim()) {
      setAnalysisResult({
        verdict: "URL Analysis - Manual verification needed",
        confidence: 0,
        color: "blue",
        icon: <Link className="w-12 h-12" />,
        note: "For URL analysis, please visit the link and copy-paste the article text for better accuracy.",
        recommendations: [
          "Copy the article content",
          "Paste in Text Analysis tab",
          "Or verify the domain reputation manually"
        ]
      });
    }
  };

  const handleReset = () => {
    setInputText('');
    setInputUrl('');
    setAnalysisResult(null);
    setError(null);
  };

  const exampleTexts = [
    "According to WHO official report, new guidelines were issued for public health safety in 2024.",
    "BREAKING: Shocking miracle cure discovered! Doctors hate this! Click now!!!",
    "Research published in Nature journal shows promising results for the new treatment approach."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center space-x-3">
            <div className="p-3 bg-blue-500 text-white rounded-full">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Fake News Detector</h1>
              <p className="text-gray-600">AI-Powered Misinformation Detection</p>
            </div>
          </div>
        </div>
      </div>

      {/* API Warning Banner */}
      {FACT_CHECK_API_KEY === 'YOUR_API_KEY_HERE' && (
        <div className="max-w-6xl mx-auto px-4 mt-4">
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
            <div className="flex items-center">
              <Info className="w-5 h-5 text-yellow-700 mr-3" />
              <div>
                <p className="text-sm text-yellow-700">
                  <strong>Setup Required:</strong> Get a free API key from{' '}
                  <a
                    href="https://developers.google.com/fact-check/tools/api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold"
                  >
                    Google Fact Check API
                  </a>
                  {' '}and replace 'YOUR_API_KEY_HERE' in the code for full fact-checking functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">Verified</div>
            <div className="text-gray-600">Google Fact Check API</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">Real-time</div>
            <div className="text-gray-600">Instant Verification</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">Trusted</div>
            <div className="text-gray-600">Multiple Sources</div>
          </div>
        </div>

        {/* Analysis Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">

          {/* Tabs */}
          <div className="flex space-x-4 mb-6 border-b">
            <button
              onClick={() => setActiveTab('text')}
              className={`flex items-center space-x-2 px-4 py-3 font-medium transition-colors border-b-2 ${activeTab === 'text'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
            >
              <FileText className="w-5 h-5" />
              <span>Text Analysis</span>
            </button>
            <button
              onClick={() => setActiveTab('url')}
              className={`flex items-center space-x-2 px-4 py-3 font-medium transition-colors border-b-2 ${activeTab === 'url'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
            >
              <Link className="w-5 h-5" />
              <span>URL Analysis</span>
            </button>
          </div>

          {/* Input Area */}
          {activeTab === 'text' ? (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Paste News Article / WhatsApp Forward / Social Media Post
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows="8"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Paste the content you want to verify here..."
              />

              {/* Example Buttons */}
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Try these examples:</p>
                <div className="flex flex-wrap gap-2">
                  {exampleTexts.map((example, index) => (
                    <button
                      key={index}
                      onClick={() => setInputText(example)}
                      className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-full transition-colors"
                    >
                      Example {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Article URL
              </label>
              <input
                type="url"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://example.com/news-article"
              />
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-6">
            <button
              onClick={handleAnalyze}
              disabled={loading || (!inputText.trim() && !inputUrl.trim())}
              className={`flex-1 flex items-center justify-center space-x-2 py-4 rounded-lg font-semibold transition-all ${loading || (!inputText.trim() && !inputUrl.trim())
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                }`}
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  <span>Verify with Fact Check</span>
                </>
              )}
            </button>
            <button
              onClick={handleReset}
              className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Results */}
        {analysisResult && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Verification Results</h2>

            {/* Verdict Card */}
            <div className={`bg-${analysisResult.color}-50 border-2 border-${analysisResult.color}-300 rounded-xl p-6 mb-6`}>
              <div className="flex items-center space-x-4">
                <div className={`text-${analysisResult.color}-600`}>
                  {analysisResult.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{analysisResult.verdict}</h3>
                  {analysisResult.confidence > 0 && (
                    <>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-3">
                          <div
                            className={`bg-${analysisResult.color}-600 h-3 rounded-full transition-all duration-1000`}
                            style={{ width: `${analysisResult.confidence}%` }}
                          ></div>
                        </div>
                        <span className="text-lg font-semibold text-gray-700">{analysisResult.confidence}%</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Confidence Level</p>
                    </>
                  )}
                  {analysisResult.warning && (
                    <div className="mt-3 bg-red-100 border border-red-300 rounded-lg p-3">
                      <p className="text-red-800 font-medium">{analysisResult.warning}</p>
                    </div>
                  )}
                  {analysisResult.note && (
                    <p className="text-sm text-gray-600 mt-2 italic">{analysisResult.note}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Fact Check Source */}
            {analysisResult.factCheckSource && (
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Fact-Check Details</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Publisher:</span>
                    <span className="font-medium text-gray-900">{analysisResult.factCheckSource.publisher}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Rating:</span>
                    <span className="font-medium text-gray-900">{analysisResult.factCheckSource.rating}</span>
                  </div>
                  {analysisResult.factCheckSource.date && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Review Date:</span>
                      <span className="font-medium text-gray-900">{analysisResult.factCheckSource.date}</span>
                    </div>
                  )}
                  {analysisResult.factCheckSource.url && (
                    <div className="mt-3">
                      <a
                        href={analysisResult.factCheckSource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 underline text-sm"
                      >
                        View full fact-check article →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Details */}
            {analysisResult.details && (
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Analysis Details</h4>
                <div className="space-y-2">
                  {Object.entries(analysisResult.details).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                      <span className="font-medium text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommendations */}
            {analysisResult.recommendations && (
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Recommendations</h4>
                <ul className="space-y-2">
                  {analysisResult.recommendations.map((rec, index) => (
                    <li key={index} className="text-sm text-gray-700">{rec}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Fact-Check Resources */}
            <div className="border-t pt-6 mt-6">
              <h4 className="font-semibold text-gray-900 mb-4">Verify with Trusted Sources</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Factly.in", url: "https://factly.in" },
                  { name: "Alt News", url: "https://altnews.in" },
                  { name: "Boom Live", url: "https://boomlive.in" },
                  { name: "Google News", url: "https://news.google.com" }
                ].map((source) => (
                  <a
                    key={source.name}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-blue-500 hover:shadow-md transition-all"
                  >
                    <div className="text-sm font-medium text-gray-900">{source.name}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FakeNewDetector;

{/* </div>
  )
}

export default FakeNewDetector */}