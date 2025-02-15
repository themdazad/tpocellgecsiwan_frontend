// CSS imported in main.jsx 

import { Github, GraduationCap, Laptop, Linkedin } from "lucide-react"

export const AnimatedBackground = () => {
  return (
    <div className="area" >
            <ul className="circles">
              {/* put anything inside <li> to make it float */}
                    <li><Linkedin/></li>
                    <li>Jobs</li>
                    <li><GraduationCap/></li>
                    <li><span className="h-[1px] bg-yellow-400> w-[1px]"/>.</li>
                    <li>Careers</li>
                    <li><Laptop/></li>
            </ul>
    </div >
  )
}
