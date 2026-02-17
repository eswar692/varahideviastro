const TermsOfService = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Terms of Service
        </h1>

        <p className="text-gray-600 mb-6">Last Updated: February 2026</p>

        {/* Section 1 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600">
            By accessing or using our website and services, you agree to be
            bound by these Terms of Service. If you do not agree, please do not
            use our services.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. Services Provided
          </h2>
          <p className="text-gray-600">
            We provide astrology-related services and consultations. All
            services are provided for informational purposes only.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. User Responsibilities
          </h2>
          <p className="text-gray-600">
            You agree not to misuse our services or engage in any unlawful
            activities while using our platform.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            4. Payments & Refunds
          </h2>
          <p className="text-gray-600">
            All payments made for services are non-refundable unless otherwise
            stated. Please review service details before making payment.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-600">
            We are not responsible for any decisions made based on our
            consultations. Users are advised to use their discretion.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            6. Changes to Terms
          </h2>
          <p className="text-gray-600">
            We reserve the right to modify these Terms at any time. Continued
            use of our services implies acceptance of the updated terms.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
