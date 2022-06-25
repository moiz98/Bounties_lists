import React from "react";

const Card = ({ item, color, prefix }) => {
  return (
    <>
      <div className="bg-[#5a4860] overflow-hidden text-white rounded-[12px] pt-5">
        <h3 className=" font-bold text-lg mb-5 px-5 capitalize">
          {item.title}
        </h3>
        <p className="px-5 mb-4 text-sm">{item.desc}</p>

        <div
          style={{
            backgroundColor: color,
            color: prefix === "openBounties" ? "rgb(31, 31, 31)" : "white",
          }}
          className={`flex text-[13px] font-semibold justify-between items-center  px-5  py-2`}
        >
          <div className="">Reward : $5</div>
          <div className="">Time left: 2 days</div>
        </div>
      </div>
    </>
  );
};

export default Card;
