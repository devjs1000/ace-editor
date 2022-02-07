import { useEffect } from "react";
import Hammer from "hammerjs";

const Console = (props) => {
  useEffect(() => {
    const csl = document.getElementById("console");
    const editor = document.getElementById("editor");
    const cslHead = document.querySelector("#console-head");
    window.addEventListener('resize', ()=>{
      csl.style.height = 200+'px'
      editor.style.height = window.innerHeight-231 + "px";
    })
    const thor = new Hammer.Manager(cslHead);
    const power = new Hammer.Pan();
    thor.add(power);
    thor.on("pan", (e) => {
      const uniSize = window.innerHeight - e.center.y;
      csl.style.height = uniSize + "px";
      editor.style.height = e.center.y - 31 + "px";
    });
  }, []);

  return (
    <>
      <div
        id="console"
        className="h-[15vh] fixed bottom-0 w-full bg-stone-800 text-white"
        style={{zIndex:'1000 !important'}}
      >
        <nav
          id="console-head"
          className="p-1 whitespace-nowrap w-full h-[2.5rem] overflow-x-auto sm:flex sm:justify-between bg-stone-900"
        >
          {props.children}
        </nav>
        <div className="m-2 overflow-scroll pb-8 h-[16vh]">{props.output}</div>
      </div>
    </>
  );
};

export default Console;
