import React from 'react';
import {
  InformationCircleIcon,
  HandThumbDownIcon,
  FaceSmileIcon,
  DocumentTextIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline'; // Importing outline icons

const Response = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        {/* Header */}
        <div className="bg-green-600 text-white text-center py-4 rounded-t-lg mb-6">
          <h2 className="text-2xl font-bold">True News</h2>
        </div>

        {/* Article Summary */}
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          The article discusses the Sir Creek dispute between India and Pakistan, a longstanding
          issue over maritime boundaries and economic resources, with recent warnings from India's
          Defence Minister Rajnath Singh.
        </p>

        {/* Authenticity Score and Bias Detected */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Authenticity Score</h3>
            <div className="flex items-center">
              <div className="w-full bg-blue-100 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{ width: '90%' }} // 9.0/10 = 90%
                ></div>
              </div>
              <span className="ml-4 text-2xl font-bold text-gray-900">9.0/10</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Bias Detected</h3>
            <div className="flex items-center">
              <div className="w-full bg-red-100 rounded-full h-3">
                <div
                  className="bg-red-600 h-3 rounded-full"
                  style={{ width: '40%' }} // Example width for "Mild" bias
                ></div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Mild towards India's perspective</p>
          </div>
        </div>

        {/* Detailed Metrics */}
        <div className="space-y-6">
          {/* Truth Status */}
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div className="flex items-center">
              <InformationCircleIcon className="h-6 w-6 text-gray-500 mr-3" />
              <span className="text-lg text-gray-700">Truth Status</span>
            </div>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
              True
            </span>
          </div>

          {/* Misleading Info Risk */}
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div className="flex items-center">
              <InformationCircleIcon className="h-6 w-6 text-gray-500 mr-3" />
              <span className="text-lg text-gray-700">Misleading Info Risk</span>
            </div>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
              Low
            </span>
          </div>

          {/* Clickbait Level */}
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div className="flex items-center">
              {/* This icon isn't directly available in Heroicons. Using HandThumbDown as a generic indicator for 'level' */}
              <HandThumbDownIcon className="h-6 w-6 text-gray-500 transform rotate-180 mr-3" /> {/* Rotated for 'up' icon */}
              <span className="text-lg text-gray-700">Clickbait Level</span>
            </div>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
              Low
            </span>
          </div>

          {/* Sentiment */}
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div className="flex items-center">
              <FaceSmileIcon className="h-6 w-6 text-gray-500 mr-3" />
              <span className="text-lg text-gray-700">Sentiment</span>
            </div>
            <span className="text-gray-600 text-lg">Neutral</span>
          </div>

          {/* Source Type */}
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div className="flex items-center">
              <DocumentTextIcon className="h-6 w-6 text-gray-500 mr-3" />
              <span className="text-lg text-gray-700">Source Type</span>
            </div>
            <span className="text-gray-600 text-lg">News Report</span>
          </div>

          {/* Unverified Claims */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
              <ExclamationCircleIcon className="h-6 w-6 text-gray-500 mr-3" />
              <span className="text-lg text-gray-700">Unverified Claims</span>
            </div>
            <span className="text-gray-600 text-lg">None</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Response;