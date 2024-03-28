const ContactPage = () => {
  return (
    <div className="min-h-screen  bg-gray-100 flex justify-center items-center">
      <main className="container mx-auto ">
        <section className="contact-info">
          <div className="max-w-md mx-auto bg-white p-20 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4 text-center text-gray-900">
              Contact Us
            </h2>
            <div className="flex flex-cols-1 md:flex-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Location
                </h3>
                <p className="text-gray-700">123 Main Street</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Contact Information
                </h3>
                <p className="text-gray-700">
                  <b>Phone:</b> <a href="tel:+1234567890">+34 (123) 456-7890</a>
                </p>
                <p className="text-gray-700 flex- flex-col flex-wrap">
                  <b>Email:</b>{" "}
                  <a href="mailto:info@foodielove.com">info@foodielove.com</a>
                </p>
              </div>
                      </div>
                      <hr />
            <p className="text-gray-700 ">
              For inquiries and reservations, feel free to reach out to us using
              the contact information provided.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
