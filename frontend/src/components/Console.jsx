const Console = (props) => {
  return (
    <>
      <div id='console' className="h-[15vh] fixed bottom-0 w-full bg-stone-800 text-white">
        <nav id='console-head' className="p-1 whitespace-nowrap w-full h-[2.5rem] overflow-x-auto sm:flex sm:justify-between bg-stone-900">
          {props.children}
        </nav>
        <div className="m-2 overflow-scroll pb-8 h-[16vh]">
        {props.output}

        </div>
      </div>
    </>
  );
};

export default Console;
