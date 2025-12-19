// src/pages/getintouch.tsx

const GetInTouch = () => {
  const goHome = () => {
    window.location.href = "/"; // your Hero page
  };

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white shadow-md border border-gray-200 px-8 py-10 md:px-12 md:py-12">
        {/* Logo / title */}
        <div className="flex flex-col items-center mb-8">
          {/* Center logo that returns home */}
          <button onClick={goHome} className="focus:outline-none mb-4">
            <img
              src="/logo-01.png"
              alt="Lens Poetries by Akash"
              className="h-16 w-auto"
            />
          </button>

      
          <p className="text-sm text-gray-700 text-center max-w-xl">
            Congratulations, and thank you for taking the time to inquire about our
            wedding experience!
          </p>
        </div>

        {/* Intro text */}
        <p className="text-sm text-gray-700 mb-6">
          We&apos;d love for you to answer the questions below to get to know you a bit.
          Once we get some basic information, we will have a real conversation to
          learn how we can create the wedding photos you&apos;ve dreamt of.
        </p>

        <p className="text-sm text-gray-700 mb-8">
          We only take a limited number of weddings each year and want to make sure
          we&apos;re the perfect fit for one another.
        </p>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              What is your name?
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-none px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              What is your email address?
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-none px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              What is your phone number?
            </label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-none px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              When is a good time to call?{" "}
              <span className="text-gray-500 text-xs">(optional)</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-none px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              What is your date?
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-none px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Which service are you interested in?
            </label>
            <select
              className="w-full border border-gray-300 rounded-none px-3 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-black"
              defaultValue=""
            >
              <option value="" disabled>
                -- Select --
              </option>
              <option>Wedding photography</option>
              <option>Pre-wedding / engagement</option>
              <option>Event coverage</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Where will your wedding take place?
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-none px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div className="pt-4 flex justify-center">
            <button
              type="submit"
              className="px-8 py-2 bg-green-500 text-white text-sm font-medium rounded-none hover:bg-green-600 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
