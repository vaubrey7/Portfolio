import gitHubLogo from "../../Assests/Images/GitHub-Logo.png";
import gitHubGistLogo from "../../Assests/Images/GitHubGistlogo.png";

export default function Github() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-contain object-center h-full w-full"
                src={gitHubLogo}
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              GitHub Profile
            </h2>
            <p className="leading-relaxed text-base">
              Check out my projects, contributions, and repositories.
            </p>
            <a href="https://github.com/vaubrey7">
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Let's Go
              </button>
            </a>
          </div>
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-contain object-center w-full h-full"
                src={gitHubGistLogo}
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              GitHub Gist
            </h2>
            <p className="leading-relaxed text-base">
              Some most excellent gists for your tech-ed needs.
            </p>
            <a href="https://gist.github.com/vaubrey7/189750a021ca319a166c116ea799a57d">
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Let's Go
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}