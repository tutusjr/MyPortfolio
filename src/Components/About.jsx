

export default function About() {
  return (
    <section id="about" className="h-screen scroll-item transition-none bg-whitesmoke">
      <div className="container mt-10 mx-auto flex transition-none">
        {/* ilk */}
        <div className=" w-full transition-none ">
          <div className="flex md:flex-row flex-col mt-10 justify-center items-center">
            <div className="md:w-1/2 xl:w-full h-full flex flex-col gap-5 xl:px-12 mt-15">
              <h2 className="h2">About Myself</h2>
              <p className="p text-black">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                sequi porro in molestias ratione quis, dignissimos dolorum
                accusamus suscipit eligendi quod, doloribus est earum repellat
                rem qui facere consectetur nam.
              </p>
            </div>
          </div>
        </div>
        {/* ikinci */}
        <div className=" w-full">
          <div className="flex md:flex-row flex-col mt-10">
            <div className="xl:w-full sm:w-1/2 h-full flex flex-col gap-5 xl:px-12 mt-15">
              <h2 className="h2">About Myself</h2>
              <p className="text-black p">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                sequi porro in molestias ratione quis, dignissimos dolorum
                accusamus suscipit eligendi quod, doloribus est earum repellat
                rem qui facere consectetur nam.
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
  );
}
