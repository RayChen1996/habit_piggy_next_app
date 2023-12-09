"use client";
import React, { useState } from "react";
import Stepper from "../components/stepper";

const Solution = () => {
  const [step, setStep] = useState(0);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Step1OrderConfirm />;
      case 1:
        return <Step2CreditCardPayment />;
      case 2:
        return <Step3PaymentSuccess />;
      default:
        return null;
    }
  };

  const RenderButtonText = () => {
    switch (step) {
      case 0:
        return "前往付款";
      case 1:
        return "確認付款";
      case 2:
        return "立即養成習慣";
      default:
        return null;
    }
  };

  return (
    <>
      <div className=" text-black h-screen flex justify-center flex-col items-center text-left">
        <Stepper />
        {renderStep()}
        <div className="flex justify-around items-center gap-5">
          {step > 0 && (
            <button
              className="btn btn-primary text-white"
              onClick={() => setStep(step - 1)}
            >
              上一步
            </button>
          )}
          {step < 2 && (
            <button
              className="btn btn-primary text-white"
              onClick={() => setStep(step + 1)}
            >
              {RenderButtonText()}
            </button>
          )}

          {step == 2 && (
            <button
              className="btn btn-primary text-white"
              onClick={() => setStep(step + 1)}
            >
              {RenderButtonText()}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

const Step1OrderConfirm = () => {
  return (
    <>
      <OrderText />

      <h3 className=" text-black">您將在 2023/09/17 被收費。</h3>
      <p className=" text-gray-500">
        在訂閱到期前至少24小時，您可以透過 帳號設定 會員訂閱 頁面取消自動續訂。
      </p>
      <div className="flex ">
        <input type="checkbox" className="bg-white text-lg  " /> 我同意 Habit
        Piggy 的 服務約定條款。
      </div>

      {/* <button className=" btn btn-primary text-white ">前往付款</button> */}
    </>
  );
};

const Step2CreditCardPayment = () => {
  return (
    <>
      <CalcFeeText />
    </>
  );
};

const Step3PaymentSuccess = () => {
  return (
    <>
      <CalcDetailText />
    </>
  );
};

const OrderText = () => {
  return (
    <div className=" w-3/5 border-8  bg-cover bg-white gap-1 bg-center h-1/2 flex flex-col  justify-center ">
      <h1 className=" text-black font-bold text-left lg:text-left sm:text-center md:text-center ">
        訂單摘要
      </h1>
      <div className="  text-black border-4  border-yellow-500 p-5 rounded-e flex justify-between  ">
        <div className=" text-2xl">從 2023/09/17 開始：</div>
        <div className=" text-right">
          <span className=" text-3xl font-bold">每月 NT$109</span> <br />{" "}
          （價格已含稅）
        </div>
      </div>
    </div>
  );
};

//信用卡付款 計算摘要
const CalcFeeText = () => {
  return (
    <div className=" w-3/5 border-8  bg-cover bg-white p-5 gap-5 bg-center h-2/3 flex flex-col  justify-center">
      <div className="    text-black border-4  bg-yellow-100 border-yellow-500 p-5 rounded-e flex flex-col  ">
        <div className="py-2 flex justify-between items-center  ">
          <div className="flex p-2 flex-col">
            <span>月費</span>
            <span className=" text-gray-400">
              開始計費日期：2023 年 09 月 17 日
            </span>
          </div>
          <span>每月 NT$109</span>
        </div>

        <div className="border-t py-2 font-bold border-black"></div>

        <div className=" flex justify-between  ">
          <span className=" text-3xl font-bold">今日應付金額</span>
          <span>NT$109</span>
        </div>
      </div>
    </div>
  );
};

const CalcDetailText = () => {
  return (
    <div className=" w-3/5 border-8  bg-cover bg-white p-5 gap-5 bg-center h-2/3 flex flex-col  justify-center">
      <h1 className=" text-black font-bold text-left text-2xl">訂購成功</h1>
      <span className=" text-black font-bold text-left">
        以下為您的訂單細節：
      </span>
      <div className="    text-black border-4  bg-yellow-100 border-yellow-500 p-5 rounded-e flex flex-col  ">
        <div className="py-2 flex justify-between items-center  ">
          <div className="flex p-2 flex-col">
            <span>月費</span>
            <span className=" text-gray-400">
              開始計費日期：2023 年 09 月 17 日
            </span>
          </div>
          <span>每月 NT$109</span>
        </div>

        <div className="border-t py-2 font-bold border-black"></div>

        <div className=" flex justify-between items-center ">
          <span className=" text-3xl font-bold">付款金額</span>
          <span>NT$109</span>
        </div>
      </div>
    </div>
  );
};
export default Solution;
