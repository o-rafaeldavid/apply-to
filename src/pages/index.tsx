import { Children, LegacyRef, useRef, useState } from "react"
import Viewport from "../components/viewport"
import ItemTrabalho from "../components/index/itemTrabalho"

import { isMouseEvent, mapear } from "../lib/funcoes"
import { useWindowEventListener } from "../lib/hooks"

import { trabalhos } from "../assets/trabalhos"
import indexStyle from "./index.module.scss"


export default function Index(){
    return(
        <>
            <Viewport style={indexStyle.primeiraViewport}>
                <div className="neonLuminoso doShow">
                    <h1 className="textDegrade blured">
                        <CoisasQueFiz>ALGUMAS COISAS</CoisasQueFiz>
                        <br/>
                        <CoisasQueFiz>QUE JÁ FIZ</CoisasQueFiz>
                    </h1>
                    <h1>
                        <CoisasQueFiz>ALGUMAS COISAS</CoisasQueFiz>
                        <br/>
                        <CoisasQueFiz>QUE JÁ FIZ</CoisasQueFiz>
                    </h1>
                </div>
                <h3 className="doShow">este website foi criado no âmbito para a minha aplicação na jeKnowledge</h3>
            </Viewport>
            {/*  */}
            <Viewport dynamic={true} style={indexStyle.segundaViewport}>
                <ol>
                    {trabalhos.map(trabalho => (
                        <ItemTrabalho nome={trabalho.nome} tipo={trabalho.tipo} src={trabalho.src} website={trabalho.website}/>
                    ))}
                </ol>
            </Viewport>
        </>
    )
}




interface ChildrenString{
    children: String
}

function CoisasQueFiz({children} : ChildrenString){
    return(
        <>
            {Children.map(children, child => {
                let array : Array<JSX.Element> = []

                for(let i = 0; i < child.length; i++) array.push(<SpanByMouse>{child[i]}</SpanByMouse>)

                return array
            })}
        </>
    )
}

function SpanByMouse({children} : ChildrenString){
    const [peso, setPeso] = useState<number>(800)
    let spanRef = useRef<HTMLSpanElement>()
    const mudarPeso = (e : Event) => {
        /* const tg = e.currentTarget
        const bounds = tg.getBoundingClientRect() */
        const span = spanRef.current
        if(span !== undefined && isMouseEvent(e)){
            const bounds = span.getBoundingClientRect()
            const dist = Math.sqrt(
                Math.pow(e.clientX - bounds.x, 2)
                + Math.pow(e.clientY - bounds.y, 2)
            )
            setPeso(antes => mapear(Math.sqrt(dist), 0, Math.sqrt(700), 800, 720))
        }
    }

    useWindowEventListener(
        "mousemove",
        mudarPeso
    )

    return(
        <span
            ref={spanRef as LegacyRef<HTMLSpanElement>}
            style={{ fontVariationSettings: `"wght" ${peso}, "GRAD" 88` }}
        >
            {children}
        </span>
    )
}