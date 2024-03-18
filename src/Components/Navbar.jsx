import { CiHome } from "react-icons/ci";

export default function Navbar() {
  return (
    <section className='absolute z-10'>
        <div className="flex flex-col sm:hidden text-xl gap-4 fixed right-[100px] bottom-[100px] ">
        <a href="#">
      <CiHome/>
        </a>
        <a href="#">linkler</a>
        <a href="#">linkler</a>
        <a href="#">linkler</a>
        <a href="#">linkler</a>
        </div>
    </section>
  )
}
