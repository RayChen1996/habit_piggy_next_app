import React from "react";

const faq = () => {
  return (
    <div className=" bg-white text-black lg:w-3/5 m-0 md:w-full sm:w-full gap-5 bg-center  m-0 mx-auto lg:flex justify-center item-center h-3/5  ">
      <div className="   lg:flex justify-center   p-2  gap-3 ">
        <div>
          <div style={{ position: "relative", width: "50%" }}>
            <p style={{ position: "relative", width: "50%", zIndex: "99" }}>
              <h3 className=" text-3xl font-bold">FAQs</h3>

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
          <p>關於「Habit Piggy」的常見問題，你好奇的、全都在這裡！</p>
        </div>
        <div className=" bg-white">
          <div className="collapse collapse-plus border-b border-yellow-300 border-t-8 ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              <span className=" text-yellow-500">Q</span> Habit Piggy
              能夠免費使用嗎？
            </div>
            <div className="collapse-content">
              <p>
                是的，Habit Piggy
                提供免費使用的基本版本，讓您開始建立習慣，並享受核心功能。同時，我們也提供付費版，讓訂閱會員享受更多的功能。
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b border-yellow-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              <span className=" text-yellow-500">Q</span>
              我可以設定多少個目標習慣？
            </div>
            <div className="collapse-content">
              <p>
                免費版允許您設定最多三個目標習慣，而訂閱會員則可以無限制地新增目標習慣。
              </p>
            </div>
          </div>
          <div className="collapse  bg-white collapse-plus border-b border-yellow-300 ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              <span className=" text-yellow-500">Q</span>
              未能完成目標的罰款如何計算？
            </div>
            <div className="collapse-content">
              <p>
                未能完成目標的罰款計算取決於您在目標設定時指定的金額和條件。每次未達成目標時，系統將扣除相應金額。
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus border-b border-yellow-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              <span className=" text-yellow-500">Q</span>
              除了習慣養成，還有哪些功能呢？
            </div>
            <div className="collapse-content">
              <p>
                除了習慣養成，Habit
                Piggy還提供圖表分析、自定義習慣執行頻率等高級功能，幫助您更全面地管理和改進您的習慣。
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus border-b border-yellow-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              <span className=" font-bold text-yellow-500">Q</span>
              該如何養成習慣呢？
            </div>
            <div className="collapse-content">
              <p>
                要養成習慣，首先在應用程式中設定您的目標習慣。每當您完成一項目標，您將獲得獎勵，但未達成目標時，您將支付罰款。這種積極的激勵機制有助於提高自律性。更多的養成習慣方法可以參閱我們的「推薦文章」。
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b border-yellow-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              <span className="font-bold text-yellow-500 font-bold">Q</span>{" "}
              我可以隨時取消訂閱 Habit Piggy 嗎？
            </div>
            <div className="collapse-content">
              <p>
                <span className=" text-indigo-950 font-bold">A</span>
                是的，你可以隨時取消訂閱 Habit Piggy。
                我們希望你對我們的服務感到滿意，因此沒有任何長期合約或隱藏費用。你可以在任何時間通過設置中的相應選項來取消訂閱。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default faq;
