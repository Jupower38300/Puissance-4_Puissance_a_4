export function ButtonDarkBlue({text, className, onClick}) {
    return(
        <button className={`p-4 bg-[#1F1442] text-white rounded-lg py-2 px-8 ${className?className:''}`} onClick={onClick?onClick:''}>{text?text:''}</button>
    )
};

export const ButtonLightBlue = ({text, className, onClick}) => {
    return(
        <button className={`p-4 bg-[#5A9AEE] text-white rounded-lg py-2 px-8 ${className?className:''}`} onClick={onClick?onClick:''}>{text?text:''}</button>
    )
}
