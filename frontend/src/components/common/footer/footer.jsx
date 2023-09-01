import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-xl font-semibold">Contact Us</p>
          <p className="text-gray-400 mt-2">123 Main Street, City</p>
          <p className="text-gray-400">contact@example.com</p>
          <p className="text-gray-400">123-456-7890</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white">FAQs</a>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Tutor Assistance. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
