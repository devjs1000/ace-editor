
const Console=(props)=>{
    return (
        <>
<div className="h-[19vh] fixed bottom-0 w-full bg-zinc-800 text-white">
    <nav className="p-2 bg-zinc-900">
<button className="bg-white text-zinc-900 font-bold text-xl px-2 rounded-full">
    console
</button>
    </nav>
{props.output}
</div>
        </>
    )
}

export default Console