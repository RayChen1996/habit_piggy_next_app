import React from "react";

const recommend = () => {
  return (
    <div className=" bg-white text-black w-3/5  gap-5 bg-center h-3/5 m-0 mx-auto  ">
      <div className="  w-4/5 flex justify-center   p-2 m-5 gap-3 ">
        <div>
          <div style={{ position: "relative", width: "50%" }}>
            <p style={{ position: "relative", width: "50%", zIndex: "99" }}>
              <h3 className=" text-3xl font-bold">RECOMMEND</h3>

              <span
                style={{
                  position: "absolute",
                  bottom: "5px",
                  left: "-5px",
                  width: "70%",
                  borderBottom: "10px solid yellow",
                  zIndex: "-1",
                }}
              ></span>
            </p>
          </div>
          <p>
            「Habit Piggy」受到全球數十個國家的使用者歡迎，
            快來看看我們的用戶推薦評價！
          </p>
        </div>
        <div className=" bg-white"></div>
      </div>
    </div>
  );
};

export default recommend;
