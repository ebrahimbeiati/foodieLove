
const Footer = () => {
  return (
    <div className="bg-gray-400 rounded-t-3xl mt-8 md:mt-0 flex text-center justify-center items-center">
      <footer className="text-gray-800 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">FoodieLove</span>
          </a>
          <p
            className="text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0
                  mt-4"
          >
            © 2024 FoodieLove —
            <a
              href="#_"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer