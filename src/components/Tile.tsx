import Feels from "./Icons/Feels"
import Pop from "./Icons/Pop"
import Pressure from "./Icons/Pressure"
import Visibility from "./Icons/Visibility"
import Wind from "./Icons/Wind"
import Humidity from "./Icons/Humidity"
import { info } from "console"

type props = {
    icon:'wind'| 'feels'|'humidity'|'visibility'|'pressure'|'pop'
    title:string
    info:string | JSX.Element
    description:string
}
const icons ={
    wind:Wind,
    feels:Feels,
    humidity:Humidity,
    visibility:Visibility,
    pressure:Pressure,
    pop:Pop

}
const Tile = ({
    icon,title,info,description}: //info,description
props):JSX.Element =>{
    const Icon = icons[icon]
    return(
        <article className="w-[140px] h-[130px] text-zinc-700 bg-white/20 backdrop-blur-lg rounded drop-shadow-lg p-2 mb-5 flex flex-col justify-between
        ">
            <div className="flex item-center text-sm font-bold">
            <Icon /><h4 className="ml-1">{title}</h4>
            </div>
            <h3 className="mt-2 text-lg">{info}</h3>
            <p className="text-xs font-bold">{description}</p>
        </article>
    )
}
export default Tile
