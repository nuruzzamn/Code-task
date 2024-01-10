import stack from "../assets/images/stack.png";
import calendar from "../assets/images/calendar.png";
import comment from "../assets/images/comment.png";
import notes from "../assets/images/notes.png";
import upload from "../assets/images/upload.png";
import TruncatedText from "./TruncatedText";
import { useState } from "react";
import Modal from "./modal/Modal";

const CardView = ({ item }) => {
  // console.log("test", item);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const isOpen = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <div className="font-bold max-w-96 px-6 py-4 bg-white">
        <div className="flex justify-between pb-4">
          <div className="flex justify-start items-center gap-1">
            <img
              src={item.leftProImg}
              alt="img_client1"
              className="h-8 w-8 rounded-full"
            />
            <p>{item.leftProTitle}</p>
          </div>

          <div className="flex justify-start items-center gap-1">
            <img
              src={item.rightProImg}
              alt="img_client1"
              className="h-8 w-8 rounded-full"
            />
            <p>{item.rightProTitle}</p>
          </div>
        </div>

        <div className="flex justify-between pb-4">
          <div className="flex justify-start items-center gap-1">
            <img src={stack} alt="img_stack" className="h-6 w-6 rounded-full" />
            <TruncatedText text={item.des} maxWords={5} />
          </div>

          <div className="flex justify-start items-center gap-1 bg-gray-200 rounded-sm p-[1%]">
            <img
              src={notes}
              alt="img_client1"
              className="h-5 w-5 rounded-full"
            />

            <span className="flex items-center">{item.note}</span>
          </div>
        </div>

        <div className="">
          <div className="flex justify-around items-center gap-1 max-w-96">
            <img
              src={item.downProleft}
              alt="img_client1"
              className="h-8 w-8 rounded-full"
            />

            <img
              src={item.downProRight}
              alt="img_client1"
              className="h-8 w-8 rounded-full"
            />

            <span className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              {item.seen + "+"}
            </span>

            <div className="flex justify-start items-center gap-1">
              <img
                src={comment}
                alt="img_comment"
                className="h-6 w-6 rounded-full"
              />
              <span className="flex items-center">{item.comment}</span>
            </div>

            {}
            <div className="flex justify-start items-center gap-1">
              <img
                src={upload}
                alt="img_comment"
                className="h-6 w-6 rounded-full p-[5%] cursor-pointer"
                onClick={() => setIsOpenModal(!isOpenModal)}
              />
              <span className="flex items-center">{item.upload}</span>
            </div>

            <div className="flex justify-start items-center gap-1">
              <img
                src={calendar}
                alt="calendar"
                className="h-6 w-6 rounded-full"
              />
              <span className="">{item.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {isOpenModal && <Modal isOpen={isOpen} />}
      </div>

      {/* {isOpenModal && <Modal closeModal={closeModal} />} */}
    </>
  );
};

export default CardView;
