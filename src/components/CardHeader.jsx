const CardHeader = ({ title, count, backgroundColor }) => {
  // console.log("backgroundColor", backgroundColor);
  // const bgcolor = "bg-red-700";
  return (
    <>
      <div className="flex justify-between items-center font-bold text-gray-500 max-w-96 px-6 py-4">
        <div className="flex justify-center items-center gap-1">
          <span
            className={`box-border h-6 w-6 ${backgroundColor} rounded-s-full`}
          ></span>
          <p className="">{title}</p>
        </div>

        <div>
          <span className="flex justify-center items-center px-3 py-2 rounded bg-gray-200">
            {count}
          </span>
        </div>
      </div>
    </>
  );
};

export default CardHeader;
