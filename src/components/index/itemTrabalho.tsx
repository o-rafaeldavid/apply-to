import { useInView } from "react-intersection-observer";
import { ItemTrabalhoProps } from "../../assets/trabalhos";

export default function ItemTrabalho({src, nome, tipo, website} : ItemTrabalhoProps){
    const { ref, inView } = useInView({
        threshold: 0.3
    });
    return(
        <li
            ref={ref}
            style={{
                opacity: inView ? 1 : 0,
                translate: inView ? "0 0" : "0 50px"
            }}
            onClick={(website !== undefined) ? () => {
                window.open(website, "_blank")
            } : () => {}}
        >
            <img src={src} alt=""/>
            <div className="neonLuminoso">
                <h2 className="textDegrade blured">{nome}</h2>
                <h2>{nome}</h2>
            </div>
            <section>
                <h5>{tipo}</h5>
                {(website !== undefined) ? <h5 style={{textAlign: "right", color: "var(--verde-agua)"}}>clica para ir ao website!</h5> : <></>}
            </section>
        </li>
    )
}