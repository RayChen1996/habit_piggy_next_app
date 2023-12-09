import React from "react";

const ActionButton = () => {
  return (
    <div className="bg-cover py-32 text-black gap-5 bg-center bg-white flex flex-col  items-center justify-center m-0 mx-auto">
      <p style={{ position: "relative", zIndex: "99" }}>
        <div>
          <p style={{ position: "relative", zIndex: "99" }}>
            <h3 className=" text-3xl font-bold">立即開始建立好習慣！</h3>
            <span
              style={{
                position: "absolute",
                bottom: "5px",
                left: "-5px",
                width: "100%",
                borderBottom: "10px solid yellow",
                zIndex: "-1",
              }}
            ></span>
          </p>
        </div>
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
      <a className="btn btn-primary text-white " href="/login">
        會員登入
      </a>
    </div>
  );
};

export default ActionButton;
