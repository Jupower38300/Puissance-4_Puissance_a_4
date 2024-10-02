export const InputText = ({onChange, className}) => {
    return(
        <>
            <input type="text" className={`${className?className:''}`} onChange={`${onChange?onChange: ''}`}/>
        </>
    )
}