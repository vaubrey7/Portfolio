export default function Resume() {
    return (
      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <img
              src="https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5"
            />
            <div className="md:w-3/5 md:pl-6">
              <h1 className="lg:text-6xl inline sm:text-3xl text-2xl my-10 text-gray-900 font-medium title-font mb-2 md:w-2/5">
                {" "}
                Let's be coworkers!
              </h1>
              <p className="leading-relaxed text-base m-5">
                If you're looking for a people-loving and Hard Working web
                developer whose passionate about bringing people together, then look no further!
              </p>
              <div className="flex-col md:mt-4 mt-6">
                <button className="inline text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                  <a
                    href="https://docs.google.com/document/d/1iZshZk2aBimLwYFU8B1mnkd5HKMWRToGx4stLeSnov8/edit?usp=sharing"
                    className="white inline-flex items-center ml-4"
                  >
                    See Resume
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }