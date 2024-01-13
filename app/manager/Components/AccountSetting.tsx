import React from "react";

export default function SaveMoneyInfo() {
  return (
    <div className=" p-5 text-black w-full max-w-screen-lg">
      {" "}
      <div className=" pb-4  flex justify-between items-center  ">
        <h2 className=" font-bold text-3xl">歷史紀錄</h2>
        <span className=" cursor-pointer">
          <button
            onClick={() => {
              const modal = document.getElementById(
                "my_modal_1"
              ) as HTMLDialogElement | null;
              if (modal) {
                modal.showModal();
              }
            }}
          ></button>
        </span>
      </div>
      <hr />
    </div>
  );
}
