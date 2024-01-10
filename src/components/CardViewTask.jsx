import userData from "../db/UserData";
import CardHeader from "./CardHeader";
import CardView from "./CardView";

const CardViewTask = () => {
  return (
    <>
      <div className="flex flex-row overflow-x-auto min-w-fit min-h-fit">
        {userData.map((data, index) => (
          <div
            key={index}
            className="bg-gray-100 w-fit m-3 flex flex-col h-screen overflow-y-clip min-w-fit"
          >
            {/* {console.log("backgroundColor", data.backgroundColor)} */}
            <CardHeader
              title={data.title}
              count={data.count}
              backgroundColor={data.backgroundColor ? data.backgroundColor : ""}
            />
            <div className="flex h-screen">
              <div className="flex-grow overflow-scroll mb-10">
                {data.cardDetails &&
                  data.cardDetails.map((item, itemIndex) => (
                    <div className="px-3 py-2" key={itemIndex}>
                      <CardView item={item} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardViewTask;
