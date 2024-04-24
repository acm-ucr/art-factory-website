const CustomEvent = ({ event }) => {
  return (
    <div className="font-playfair text-sm flex bg-saf-red justify-start p-1">
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
  );
};

export default CustomEvent;
