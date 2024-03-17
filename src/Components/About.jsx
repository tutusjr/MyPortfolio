
export default function About() {
  return (
    <section className="h-screen snap-start bg-white">
      <div className="container mx-auto flex h-screen">
        {/* ilk */}
        <div className="bg-red-500 w-full">
          <div className="flex md:flex-row flex-col mt-10 justify-center items-center">
            <div className="md:w-1/2 flex flex-col gap-5 xl:px-12 mt-15">
              <h2 className="h2 bg-red-200">About Myself</h2>
              <p className="text-[#2E5041]">
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
        <div className="bg-blue-500 w-full">
          <div className="flex md:flex-row flex-col mt-10 justify-center items-center">
            <div className="md:w-1/2 flex flex-col gap-5 xl:px-12 mt-15">
              <h2 className="h2 bg-red-200">About Myself</h2>
              <p className="text-[#2E5041]">
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
