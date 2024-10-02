export const Token = ({className}) => {
    return( 
        <div className={`${className?className: 'w-12 h-12 bg-[#D9D9D9]'} rounded-full`}></div>
    )
}
export const TokenActive = ({className}) => {
    return( 
        <div className={`${className?className: 'w-12 h-12 bg-[#D9D9D9] shadow-[0px_0px_50px_20px_rgba(255,255,255,0.6)]'} rounded-full`}></div>
    )
}
export const TokenPlay = ({className}) =>{
    return(
        <div className={`${className?className: 'w-12 h-12 bg-[rgba(255,0,0,0.6)]'} relative flex justify-center items-center rounded-full border-2 border-[rgba(255,255,255,0.4)]  shadow-[inset_-7px_-7px_0px_0px_rgba(0,0,0,0.2)]`}></div>
    )
}