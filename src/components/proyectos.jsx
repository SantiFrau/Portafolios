import { Link } from "react-router-dom";
import { proyectos } from "../data/proyectos";

export default function Proyectos(){


    return (
        <section className="w-full h95 flex flex-col items-center justify-center fondo-cont gap-3 rounded-lg">
          
          <div className="grid sm:grid-cols-2 grid-cols-1 p-3 m-5 overflow-auto">
                {
                    proyectos.map((d)=>{
                        return (
                            <Link to={`/Portafolios/proyectos/${d.id}`} key={d.id}>
                            <div className={`${d.color} hover:scale-110 transition duration-200 m-2  flex flex-col items-center justify-center p-3 rounded-lg`}>
                             <img className="w-56 rounded-lg" src={`/Portafolios/public/media/${d.id}/1.png`} alt="" />
                             <h4 className="text-lg font-bold">{d.name}</h4>
                            </div>
                            </Link>
                        )
                    })
                }
          </div>

        </section>
    )
}
