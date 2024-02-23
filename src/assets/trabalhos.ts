import EvolucaoTerra_img from "./imgs/EvolucaoTerra.jpg"
import RStudio_img from "./imgs/rstudio.jpg"

import OCAP_img from "./imgs/ocap.jpg"
import Popstar_img from "./imgs/popstar.png"
import MDC_img from "./imgs/mdc.png"
import Betpiston_img from "./imgs/betpiston.jpg"

import TechnoXuxex_img from "./imgs/techno-xuxex.png"
import Pokedex_img from "./imgs/Pokedex.png"
import DWPessoal_img from "./imgs/dw-pessoal.png"


export interface ItemTrabalhoProps{
    nome: string,
    tipo: string,
    src: string,
    website?: string
}

const createTrabalho = (nome: string, tipo: string, src: string, website?: string) => {
    return ({
        nome: nome,
        tipo: tipo,
        src: src,
        website: website
    })
}


export const trabalhos = [
    createTrabalho(
        "Evolução da Terra",
        "Antes da Licenciatura",
        EvolucaoTerra_img
    ),
    createTrabalho(
        "R Studio",
        "Fora da Licenciatura",
        RStudio_img
    ),




    createTrabalho(
        "OCAP",
        "Licenciatura",
        OCAP_img,
        "https://student.dei.uc.pt/~rafaeldavid/Trabalho/OCAP/META%203/"
    ),
    createTrabalho(
        "Popstar",
        "Licenciatura",
        Popstar_img
    ),
    createTrabalho(
        "Museu da Ciência",
        "Licenciatura",
        MDC_img
    ),
    createTrabalho(
        "Betpiston",
        "Licenciatura",
        Betpiston_img,
        "https://student.dei.uc.pt/~rafaeldavid/BetPiston"
    ),




    createTrabalho(
        "Techno Xuxex",
        "Mestrado",
        TechnoXuxex_img,
        "https://techno-xuxex.vercel.app/"
    ),
    createTrabalho(
        "Pokedex",
        "Mestrado",
        Pokedex_img,
        "https://dw-api.rafael-david.com/"
    ),
    createTrabalho(
        "DW Pessoal",
        "Mestrado",
        DWPessoal_img,
        "https://www.dw-pessoal.rafael-david.com/"
    )
]