import { useState } from 'react';

import BtnTabbar from '@components/BtnTabbar';

const TABS = ['장바구니', '선물하기'] as const;

const ComponentsPage = () => {
  const [grayTab, setGrayTab] = useState<(typeof TABS)[number]>('장바구니');
  const [whiteTab, setWhiteTab] = useState<(typeof TABS)[number]>('장바구니');

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-title-20sb">Common Components</h1>

      <section className="mt-8">
        <h2 className="mb-3 text-body-14sb text-gray-700">BtnTabbar</h2>

        <div className="inline-flex flex-col gap-6 rounded-lg border border-gray-300 bg-white p-6">
          <div className="rounded-lg border border-gray-100 px-5 py-6">
            <div
              aria-label="흰색 탭 예시"
              className="flex gap-[21.75px]"
              role="tablist"
            >
              {TABS.map((tab) => (
                <BtnTabbar
                  isSelected={whiteTab === tab}
                  key={tab}
                  label={tab}
                  onClick={() => setWhiteTab(tab)}
                />
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-gray-50 px-5 py-6">
            <div
              aria-label="회색 탭 예시"
              className="flex gap-[21.75px]"
              role="tablist"
            >
              {TABS.map((tab) => (
                <BtnTabbar
                  background="gray"
                  isSelected={grayTab === tab}
                  key={tab}
                  label={tab}
                  onClick={() => setGrayTab(tab)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComponentsPage;
