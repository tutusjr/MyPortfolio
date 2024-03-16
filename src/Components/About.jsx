import png1 from "../assets/bgImages/png1.png";
export default function About() {
  return (
    <section className="h-screen bg-red-500">
      <div className="container mx-auto">
        {/* ilk */}
        <div className=" flex  w-full ">
          <div className="flex md:flex-row flex-col mt-10 justify-center items-center">
            <div className="md:w-1/2 flex flex-col gap-5 xl:px-12 mt-15">
              <h2 className="h2 bg-red-200">About Myself</h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                sequi porro in molestias ratione quis, dignissimos dolorum
                accusamus suscipit eligendi quod, doloribus est earum repellat
                rem qui facere consectetur nam.
              </p>
            </div>
            <div className="md:w-1/2">
            </div>
          </div>
        </div>
        {/* ikinci */}
        <div className=" flex  w-full mt-20">
          <div className="flex md:flex-row flex-col mt-10 justify-center items-center">
            <div className="md:w-1/2">
              
            </div>
            <div className="md:w-1/2 flex flex-col gap-5 px-12 mt-15">
              <h2 className="h2 bg-red-200">About Myself</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                sequi porro in molestias ratione quis, dignissimos dolorum
                accusamus suscipit eligendi quod, doloribus est earum repellat
                rem qui facere consectetur nam.
              </p>
            </div>
          </div>
        </div>
        {/* son */}
        <div className=" flex bg-red-300 w-full"></div>
      </div>
    </section>
  );
}
