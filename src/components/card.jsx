export const CardRoom = ({text, joinButton}) => {
    return(
        <div className="w-[70vw] mx-auto bg-[#1F1442] rounded-lg flex flex-col gap-y-6 py-6">
            <h3 className="text-4xl text-white text-center">{text}</h3>
            {joinButton}
        </div>
    )
}