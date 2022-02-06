
const Console=(props)=>{
    return (
        <>
<div className="h-[20vh] fixed bottom-0 w-full bg-stone-800 text-white">
    <nav className="p-1 flex justify-between bg-stone-900">
        {props.children}
    </nav>
{props.output}
</div>
        </>
    )
}

export default Console