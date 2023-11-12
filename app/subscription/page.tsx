import React from "react";

const page = () => {
  return (
    <>
      <BackgroundImage />

      <CompareTable />

      <ActionButton />
    </>
  );
};

const BackgroundImage = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://github.com/chunjull/Habit-Piggy/blob/main/assets/images/subscribeBanner.jpg?raw=true")',
      }}
      className=" py-10 bg-cover gap-5 bg-center h-1/3  flex flex-col text-start items-center justify-center   "
    >
      <div>Subscribe</div>
      <div>每月只需支付 NT$109 即可暢享訂閱服務</div>
      <span className=" text-2xl">
        習慣數目無限制、多元化頻率設定、圖表分析， <br />
        以及更多專屬功能。
      </span>
      <button className="btn btn-primary text-white font-bold text-lg">
        <a href="/solution">月付最低 NT$109</a>
      </button>
    </div>
  );
};

const CompareTable = () => {
  return (
    <div className=" text-black flex flex-col justify-center items-center p-10">
      <h2 className=" font-bold text-2xl">升級訂閱會員有什麼好處？</h2>
      <table className=" w-1/3 border-yellow-400 table table-fixed p-2 text-black text-center">
        <thead>
          <tr>
            <th className="text-black">使用功能</th>
            <th className="text-black">免費會員</th>
            <th className="text-black">訂閱會員</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>新增習慣數目</td>
            <td>最多三個</td>
            <td className=" text-yellow-400 font-bold">無上限</td>
          </tr>
          <tr>
            <td>設定罰款</td>
            <td>可</td>
            <td>可</td>
          </tr>
          <tr>
            <td>設定執行頻率</td>
            <td>只有每日</td>
            <td className=" text-yellow-400 font-bold">自訂</td>
          </tr>
          <tr>
            <td>圖表分析</td>
            <td>無</td>
            <td className=" text-yellow-500 font-bold">有</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const ActionButton = () => {
  return (
    <div className="  text-black flex flex-col justify-center items-center p-10 gap-5">
      <h2 className=" font-bold text-2xl">心動不如馬上心動！</h2>
      <div>現在訂閱，第一個月內完全免費！</div>
      <button className="btn btn-primary text-white">立即訂閱</button>
    </div>
  );
};

export default page;
