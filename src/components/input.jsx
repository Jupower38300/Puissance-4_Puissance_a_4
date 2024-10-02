export const InputText = ({className, onChange, placeholder}) => {
    return(
        <>
            <input type="text" className={`${className?className:''} bg-[#1F1442] text-white py-2 px-8 rounded-lg`} onChange={onChange} placeholder={placeholder?placeholder:''}/>
        </>
    )
}