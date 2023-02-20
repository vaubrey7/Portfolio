export default function Contact() {
    return (
      <>
        <div className="px-5 grid gap-8 grid-cols-1 md:grid-cols-2 py-24 mx-auto bg-gray-100 text-gray-900 rounded-lg">
          <div className="flex flex-col justify-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Lets talk about everything!
              </h2>
              <div className="text-gray-700 mt-8">
                Forms not really your thing? Send me an &nbsp;
                <a
                  className="font-bold hover:underline"
                  href="mailto:vaubrey7@gmail.com"
                >
                  email!
                </a>
              </div>
            </div>
            <div className="mt-12 text-center">
              <img
                className="shadow rounded-lg h-1/2 inline"
                src="https://images.pexels.com/photos/6968122/pexels-photo-6968122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Contact"
              />
            </div>
          </div>
          <form className="mx-10">
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">
                Full Name
              </span>
              <input
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                type="text"
                placeholder="Enter your Name"
                required
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
              <input
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                type="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Phone Number
              </span>
              <input
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                type="phone"
                placeholder="Enter your Phone Number including country code"
                required
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Message
              </span>
              <textarea
                className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your Message"
                required
              ></textarea>
            </div>
            <div className="mt-8">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-indigo-700"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
  