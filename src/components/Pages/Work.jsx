import gitHubLogo from "../../Assets/Images/GitHub-Logo.png";
import projects from "../../Assets/Projects";

export default function Work() {
 
  projects.map((i) => console.log(i.title))
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My professional, personal, and student work, it's ALL here!
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              （Except for the embarrassing stuff）
            </p>
          </div>
          {projects.length ? (
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => {
              return (
            <div className="lg:w-1/3 h-full sm:w-1/2 p-4" key={project.key}>
              <div className="flex relative border-4  border-gray-200">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  src={project.img}
                />
                <div className="px-8 py-10 flex-col justify-center relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <a href={project.url}>
                    <h1 className="tracking-widest text-lg title-font font-medium text-indigo-500 mb-1 hover:font-bold hover:underline">
                      {project.title}
                    </h1>
                  </a>
                  <a href={project.repurl}>
                    <img className="h-10 inline my-2" src={gitHubLogo} />
                  </a>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </div>)
            })}
          </div>
            ): null}
        </div>
      </section>
    </>
  );
}