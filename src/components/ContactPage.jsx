const ContactPage = () => {
  return (
    <div className="flex min-h-screen 
bg-gray-100 flex-wrap justify-center items-center">
      <main className="container mx-auto px-4 py-16">
        <section className="contact-info shadow-md rounded-lg overflow-hidden bg-white">
          <h2 className="text-3xl font-bold text-center p-6 mb-8">Get in Touch</h2>
          <div className="flex flex-cols-1 justify-center items-center p-12 gap-8">
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Our Location
              </h3>
              <address className="text-gray-600">
                123 Main Street
                <br />
                City Name, Country
              </address>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Contact Information
              </h3>
              <ul className="text-gray-600 list-none pl-0">
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8a6 6 0 0 1 12 0 6 6 0 0 0-12 0ZM21 12c0 6-4.5 10.5-11 10.5a11.48 11.48 0 0 1-8.5-5.5v.06a12.73 12.73 0 0 1-.7 4.8c-.4 1.7-.9 3.1-1.6 4.2a1.49 1.49 0 0 1-2.1 0c-.7-1.1-1.2-2.5-1.6-4.2a12.73 12.73 0 0 1-.7-4.8v-.06a11.48 11.48 0 0 1-8.5-5.5C1.5 12 0 6 0 6a6 6 0 1 1 12 0z"
                    />
                  </svg>
                  <a href="tel:+1234567890" className="hover:text-blue-500">
                    +34 (123) 456-7890
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a6 6 0 0 1 12 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6zM15 18a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3 M8.25 7.75l4 4L20.75 4.5"
                    />
                  </svg>
                  <a
                    href="mailto:info@foodielove.com"
                    className="hover:text-blue-500"
                  >
                    info@foodielove.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 mt-8 p-6 text-center">
            We love hearing from you! Whether you have inquiries, feedback, or
            just want to say hello, feel free to reach out using the contact
            information provided.
          </p>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;

