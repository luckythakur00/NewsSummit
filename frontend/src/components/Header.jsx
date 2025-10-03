const Header = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-gray-900">About Us</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Changelog</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Stories</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Solutions</a>
        </div>
        <div className="flex items-center">
          <img src="https://example.com/biasbreak-logo.png" alt="BiasBreak Logo" className="h-8 mr-2" /> {/* Replace with actual logo */}
          <span className="text-xl font-bold text-gray-800">BiasBreak</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-gray-900">Policies</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Feedback</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Contact Us</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;