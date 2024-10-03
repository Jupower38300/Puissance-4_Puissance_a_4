import { ButtonDarkBlue, ButtonLightBlue } from "../components/button"
import { InputText } from "../components/input"
import { TokenPlay } from "../components/tokens"

export const Signup = () => {
    return(
        <div className="inscription flex flex-col gap-12 py-12 bg-[#5A9AEE] m-0">
            <InputText className="w-[60vw] mx-auto" placeholder={'Entrez votre pseudo...'}/>
            <div className="choice-token flex justify-center items-center gap-12 h-28">
                <TokenPlay className={'w-24 h-24 bg-[rgba(255,0,0,0.6)] cursor-pointer hover:w-28 hover:h-28 ease-in duration-150'}/>
                <TokenPlay className={'w-24 h-24 bg-[rgba(0,0,255,0.6)] cursor-pointer hover:w-28 hover:h-28 ease-in duration-150'}/>
            </div>
            <ButtonDarkBlue text={'Jouer'} className="w-[auto] mx-auto"/>
        </div>
    )
}