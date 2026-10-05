import { Box } from "@mui/material"
import background from "./../assets/me-bg.png"
import me from "./../assets/me3.png"
import linkedin from "./../assets/linkedin.png";
import instagram from "./../assets/instagram.png";
import gmail from "./../assets/gmail.png";

export default function About(){
    return (
          <Box
            sx={{
              minHeight: "100vh",
              backgroundImage: `url(${background})`,
              backgroundPosition: "top center",
              backgroundRepeat: "repeat",
              backgroundSize: "auto",
            }}
          >
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-2 p-10">
              <div className="text-7xl font-serif font-semibold mb-5" style={{color: "#811128"}}>Hi!</div>
              <div className="font-serif text-justify mb-3" style={{color: "#811128"}}>I’m Haya Qonita Amani, an Informatics Engineering graduate passionate about software engineering and building practical solutions through technology. I enjoy developing applications, working with APIs and databases, and exploring different technologies</div>
              <div className="font-serif text-justify" style={{color: "#811128"}}>For me, software engineering is about more than just writing code. I’m always interested in learning, improving systems, and turning ideas into useful solutions. Through internships and projects, I’ve developed my skills in problem-solving, collaboration, and building reliable software.</div>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              
              <div className="grid grid-cols-3">
                <div>
                  <a href="mailto:qonitahaya@gmail.com">
                    <img src={gmail} alt="Gmail" className="h-8 w-8" />
                  </a>
                </div>

                <div>
                  <a
                    href="https://www.instagram.com/hayaqoni/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={instagram} alt="Instagram" className="h-8 w-8" />
                  </a>
                </div>

                <div>
                  <a
                    href="https://www.linkedin.com/in/hayaqonitaamani/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedin} alt="LinkedIn" className="h-8 w-8" />
                  </a>
                </div>
              </div>

          </div>
            </div>

            <div className="md:col-span-1 p-10 flex justify-center">
              <img src={me} alt="" />
            </div>
          </div>
        </Box>    
    )
}