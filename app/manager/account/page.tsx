export default function Page() {
  return (
    <section className="flex flex-col gap-6 px-4 py-6 md:px-10 md:py-8">
      <h1 className="text-2xl font-bold text-[#d0810b] md:text-3xl">帳號設定</h1>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-[#f5e6a4] bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-1 text-sm font-semibold text-[#4a4a4a]">
              <span>使用者名稱</span>
              <input
                className="w-full rounded-xl border border-[#f5e6a4] px-3 py-2 focus:border-[#fec10f] focus:outline-none"
                defaultValue="Piggy"
              />
            </label>
            <label className="space-y-1 text-sm font-semibold text-[#4a4a4a]">
              <span>Email</span>
              <input
                className="w-full rounded-xl border border-[#f5e6a4] px-3 py-2 focus:border-[#fec10f] focus:outline-none"
                defaultValue="Piggy@piggy.com"
              />
            </label>
            <label className="space-y-1 text-sm font-semibold text-[#4a4a4a]">
              <span>會員訂閱</span>
              <select className="w-full rounded-xl border border-[#f5e6a4] px-3 py-2 focus:border-[#fec10f] focus:outline-none">
                <option>一年方案</option>
                <option>半年方案</option>
              </select>
            </label>
            <label className="space-y-1 text-sm font-semibold text-[#4a4a4a]">
              <span>密碼</span>
              <div className="flex gap-2">
                <input
                  className="w-full rounded-xl border border-[#f5e6a4] px-3 py-2 focus:border-[#fec10f] focus:outline-none"
                  defaultValue="***********"
                  type="password"
                />
                <button className="rounded-full bg-[#fec10f] px-4 py-2 text-xs font-semibold text-white shadow">
                  修改
                </button>
              </div>
            </label>
          </div>
          <div className="flex justify-end gap-3">
            <button className="rounded-full border border-[#f5e6a4] px-4 py-2 text-sm font-semibold text-[#a47100]">
              取消
            </button>
            <button className="rounded-full bg-[#fec10f] px-5 py-2 text-sm font-semibold text-white shadow">
              儲存設定
            </button>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-[#f5e6a4] bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-full bg-[#fff6d6]" />
            <div>
              <div className="text-lg font-bold text-[#d0810b]">Piggy</div>
              <div className="text-sm text-[#555]">帳號資訊與安全性設定</div>
            </div>
          </div>

          <div className="space-y-2 text-sm text-[#4a4a4a]">
            <div className="font-semibold text-[#d0810b]">常用裝置</div>
            <ul className="list-disc space-y-1 pl-5">
              <li>iOS / Safari</li>
              <li>MacOS / Chrome</li>
              <li>Android / Chrome</li>
              <li>Windows / Edge</li>
            </ul>
          </div>

          <div className="space-y-2 rounded-xl bg-[#fff8e1] p-4 text-sm text-[#4a4a4a]">
            <div className="font-semibold text-[#d0810b]">安全提醒</div>
            <p>確保密碼安全、定期更新並開啟雙重認證。</p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#a47100]">
              <span className="rounded-full bg-white px-3 py-1">- 不要與他人分享密碼</span>
              <span className="rounded-full bg-white px-3 py-1">- 不使用重複密碼</span>
              <span className="rounded-full bg-white px-3 py-1">- 不在公開裝置使用</span>
              <span className="rounded-full bg-white px-3 py-1">- 避免弱密碼</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
