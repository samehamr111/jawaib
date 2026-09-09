"use client";

import { useState } from "react";

const fmt = (n) => Math.round(n).toLocaleString("en-US");
const num = (v) => {
  const x = parseFloat(v);
  return isFinite(x) && x > 0 ? x : 0;
};

export default function Calculator() {
  const [visits, setVisits] = useState("1000");
  const [value, setValue] = useState("800");
  const [now, setNow] = useState("2");
  const [target, setTarget] = useState("5");

  const a = (num(visits) * num(now)) / 100;
  const b = (num(visits) * num(target)) / 100;
  const diff = Math.max(b - a, 0);

  return (
    <div className="calc">
      <div className="calc__fields">
        <div className="field">
          <label htmlFor="v">عدد زيارات إعلاناتك شهريًا</label>
          <input id="v" type="number" inputMode="numeric" min="0" step="50"
            value={visits} onChange={(e) => setVisits(e.target.value)} />
          <small>تجدها في لوحة سناب شات أو ميتا أو تيك توك</small>
        </div>
        <div className="field">
          <label htmlFor="val">قيمة العميل الواحد بالريال</label>
          <input id="val" type="number" inputMode="numeric" min="0" step="50"
            value={value} onChange={(e) => setValue(e.target.value)} />
          <small>متوسط ما ينفقه العميل عندك أول مرة</small>
        </div>
        <details className="adv">
          <summary>تعديل نسب التحويل</summary>
          <div className="adv__in">
            <div className="field">
              <label htmlFor="c1">النسبة الحالية %</label>
              <input id="c1" type="number" inputMode="decimal" min="0" max="100" step="0.5"
                value={now} onChange={(e) => setNow(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="c2">النسبة المستهدفة %</label>
              <input id="c2" type="number" inputMode="decimal" min="0" max="100" step="0.5"
                value={target} onChange={(e) => setTarget(e.target.value)} />
            </div>
          </div>
        </details>
      </div>

      <div className="calc__out" aria-live="polite">
        <div className="calc__row"><span>عملاء محتملون الآن</span><b>{fmt(a)}</b></div>
        <div className="calc__row"><span>عملاء محتملون عند هدفك</span><b>{fmt(b)}</b></div>
        <div className="calc__row"><span>الفرق شهريًا</span><b>{fmt(diff)}</b></div>
        <div className="calc__big">
          <span>قيمة الفرق سنويًا</span>
          <b>{fmt(diff * num(value) * 12)} ريال</b>
        </div>
      </div>

      <p className="calc__note">
        الأرقام التي تدخلها هي أرقامك، والحساب مجرد عملية ضرب — لسنا نعدك بنسبة تحويل معيّنة، ولا
        نستطيع ذلك. الغرض أن ترى حجم ما يتوقّف على الصفحة التي تستقبل زوّارك.
      </p>
    </div>
  );
}
