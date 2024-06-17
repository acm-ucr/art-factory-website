const CustomEvent = ({ event }) => {
  return (
    <div className="border-[6.5px] border-art-purple-200 rounded-full py-0 md:py-[1px] drop-shadow-[1px_1px_0px_rgba(191,140,225,.70)]">
      <div className=" py-.5 ring-4 ring-offset-[1.5px] ring-art-pink-400 ring-offset-art-purple-200 rounded-full font-playfair text-sm flex justify-start p-1 bg-white text-art-purple-200 overflow-hidden">
        <p className="whitespace-nowrap m-0">
          {!event.allDay &&
            new Date(event.start).toLocaleTimeString(navigator.language, {
              hour: "2-digit",
              minute: "2-digit",
            })}
          &nbsp;
          {event.summary}
        </p>
      </div>
    </div>
  );
};

export default CustomEvent;
