// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-bold mb-2">TaskFlow</h3>
            <p className="text-gray-400 text-sm">
              Manage your tasks efficiently with our modern task management application.
            </p>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tasks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-2">Resources</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-4 pt-4 text-center text-gray-400 text-sm">
          <p>&copy; 2025 TaskFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
