
import {Links} from "../data/Links.js"

export default function Navbar() {
  return (
        <div className="flex flex-col z-10 text-xl gap-4 fixed right-[10vw] bottom-[20vh] ">
          {Links.map((link) => (
            <a
              key={link.id}
              href={link.url}>
              {link.name}  
            </a>
          ))}
        </div>
  )
}
