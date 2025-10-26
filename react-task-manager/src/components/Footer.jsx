const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto w-full">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-lg font-bold mb-2">TaskFlow</h3>
            <p className="text-gray-400 text-sm">
              Manage your tasks efficiently with our modern task management app.
            </p>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Tasks</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-2">Resources</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; 2025 TaskFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
