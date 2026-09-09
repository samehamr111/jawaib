"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const BIZ = [
  "عيادة أو مركز طبي",
  "مركز تدريب أو مدرّب",
  "مكتب عقاري",
  "متجر إلكتروني",
  "نشاط آخر",
];

/* Saudi mobile: 05XXXXXXXX. Also accepts 5XXXXXXXX, +9665XXXXXXXX, 009665XXXXXXXX and
   Arabic-Indic digits — people paste from their contacts in every one of these shapes. */
function toLatinDigits(s) {
  return String(s).replace(/[٠-٩۰-۹]/g, (d) => {
    const c = d.charCodeAt(0);
    return String(c - (c >= 0x06f0 ? 0x06f0 : 0x0660));
  });
}

function normalisePhone(raw) {
  let n = toLatinDigits(raw).replace(/[^\d+]/g, "").replace(/^\+/, "");
  if (n.startsWith("00966")) n = n.slice(5);
  else if (n.startsWith("966")) n = n.slice(3);
  if (n.startsWith("0")) n = n.slice(1);
  return /^5\d{8}$/.test(n) ? "0" + n : null;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

export default function LeadModal() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState("idle"); // idle | sending | done | error
  const [errors, setErrors] = useState({});
  const firstField = useRef(null);
  const opener = useRef(null);

  const close = useCallback(() => {
    setOpen(false);
    if (opener.current) opener.current.focus();
  }, []);

  /* every CTA on the page opens this — the static markup stays server-rendered */
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest?.('a[href="#lead-form"]');
      if (!a) return;
      e.preventDefault();
      opener.current = a;
      setOpen(true);
    };
    const onKey = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [close]);

  useEffect(() => { if (open && firstField.current) firstField.current.focus(); }, [open]);

  function validate(data) {
    const e = {};
    if (!String(data.name || "").trim()) e.name = "اكتب اسمك";
    if (!normalisePhone(data.phone || "")) e.phone = "رقم جوال سعودي غير صحيح — مثال: 0512345678";
    if (!EMAIL_RE.test(String(data.email || "").trim())) e.email = "بريد إلكتروني غير صحيح";
    return e;
  }

  async function submit(ev) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const found = validate(data);
    setErrors(found);
    const bad = Object.keys(found);
    if (bad.length) {
      const first = form.querySelector('[name="' + bad[0] + '"]');
      if (first) first.focus();
      return;
    }

    setState("sending");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          ...data,
          phone: normalisePhone(data.phone),
          email: String(data.email || "").trim(),
          source: typeof window !== "undefined" ? window.location.search || "direct" : "direct",
        }).toString(),
      });
      if (!res.ok) throw new Error("submit failed");
      setState("done");
      if (typeof window !== "undefined") {
        window.snaptr?.("track", "SIGN_UP");
        window.fbq?.("track", "Lead");
      }
    } catch {
      setState("error");
    }
  }

  const clear = (k) => setErrors((p) => (p[k] ? { ...p, [k]: undefined } : p));

  return (
    <div className={`ovl${open ? " is-open" : ""}`} role="dialog" aria-modal="true" aria-labelledby="mt">
      <div className="modal">
        <button className="modal__x" onClick={close} aria-label="إغلاق" type="button">&times;</button>

        {state === "done" ? (
          <div className="done">
            <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" /><path d="M8 12.5l2.5 2.5L16 9.5" />
            </svg>
            <h3>وصلنا طلبك</h3>
            <p>
              نجاوبك خلال يوم عمل. وإن استعجلت، راسلنا على{" "}
              <a href="mailto:ops@jawib-ksa.com">ops@jawib-ksa.com</a>
            </p>
          </div>
        ) : (
          <>
            <h3 id="mt">اطلب مراجعة مجانية لصفحتك</h3>
            <p>اترك بياناتك ونجاوبك خلال يوم عمل — برأي صريح، وبدون التزام.</p>

            <form name="lead" method="POST" data-netlify="true" netlify-honeypot="company" onSubmit={submit} noValidate>
              <input type="hidden" name="form-name" value="lead" />
              <p hidden><label>لا تملأ هذا الحقل <input name="company" tabIndex={-1} autoComplete="off" /></label></p>

              <div className="field">
                <label htmlFor="l-name">الاسم</label>
                <input ref={firstField} id="l-name" name="name" type="text" autoComplete="name" className="u-rtl"
                  aria-invalid={errors.name ? "true" : undefined}
                  aria-describedby={errors.name ? "e-name" : undefined}
                  onInput={() => clear("name")} />
                {errors.name && <small className="err" id="e-name" role="alert">{errors.name}</small>}
              </div>

              <div className="field">
                <label htmlFor="l-wa">رقم الجوال (واتساب)</label>
                <input id="l-wa" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="05xxxxxxxx"
                  aria-invalid={errors.phone ? "true" : undefined}
                  aria-describedby={errors.phone ? "e-phone" : undefined}
                  onInput={() => clear("phone")} />
                {errors.phone && <small className="err" id="e-phone" role="alert">{errors.phone}</small>}
              </div>

              <div className="field">
                <label htmlFor="l-mail">البريد الإلكتروني</label>
                <input id="l-mail" name="email" type="email" inputMode="email" autoComplete="email"
                  placeholder="name@example.com"
                  aria-invalid={errors.email ? "true" : undefined}
                  aria-describedby={errors.email ? "e-mail" : undefined}
                  onInput={() => clear("email")} />
                {errors.email && <small className="err" id="e-mail" role="alert">{errors.email}</small>}
              </div>

              <div className="field">
                <label htmlFor="l-url">رابط صفحتك أو حسابك <span className="u-opt">(اختياري)</span></label>
                <input id="l-url" name="page" type="url" inputMode="url" placeholder="https://" />
              </div>

              <div className="field">
                <label htmlFor="l-biz">نوع النشاط</label>
                <select id="l-biz" name="business" defaultValue={BIZ[0]}>
                  {BIZ.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>

              <button className="btn btn--primary btn--block" type="submit" disabled={state === "sending"}>
                {state === "sending" ? "جارٍ الإرسال…" : "أرسل الطلب"}
              </button>

              {state === "error" && (
                <p className="modal__fine" role="alert">
                  تعذّر الإرسال. راسلنا على <a href="mailto:ops@jawib-ksa.com">ops@jawib-ksa.com</a> ونرد عليك.
                </p>
              )}
              <p className="modal__fine">
                نستخدم رقمك وبريدك للتواصل بخصوص طلبك فقط، ولا نشاركهما مع أي جهة. يمكنك طلب حذف بياناتك في أي وقت.
              </p>
            </form>

            <p className="modal__alt">
              تفضّل البريد؟ راسلنا على <a href="mailto:ops@jawib-ksa.com">ops@jawib-ksa.com</a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
