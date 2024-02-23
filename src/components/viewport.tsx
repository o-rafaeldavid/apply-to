interface ViewportProps{
    dynamic?: boolean,
    children?: string | JSX.Element | JSX.Element[]
    style?: CSSModuleClasses[string]
}

export default function Viewport({dynamic = false, children = undefined, style = undefined} : ViewportProps){
    return(
        <div className={`viewport${dynamic ? " dynamic" : ""} ${style}`}>
            {children}
        </div>
    )
}