const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
      <div className="text-center lg:text-right">
        <p className="mb-4">&copy; Duhumurizanye Iwacu Rwanda 2010-2024</p>
        <div className="flex flex-wrap">
          <a href="#" className="mr-4 hover:underline">
            Privacy Notice
          </a>
          <a href="#" className="mr-4 hover:underline">
            Contact Us
          </a>
          <a href="#" className="mr-4 hover:underline">
            Camp Authorization
          </a>
          <a href="#" className="hover:underline">
            Tender Announcements
          </a>
        </div>
      </div>
      <div className="mt-4 lg:mt-0 ">
        <span className="mr-4">Follow Us</span>
        <a href="#" className="text-white hover:text-gray-400 mr-4">
          Facebook
        </a>
        <a href="#" className="text-white hover:text-gray-400 mr-4">
          Twitter
        </a>
        <a href="#" className="text-white hover:text-gray-400">
          Instagram
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
