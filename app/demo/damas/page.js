/* Spec demo for عيادات دماس — قسم الأسنان.
 *
 * Built from their own public Meta ad (Library ID 1976832296528198, running since
 * 23 Jun 2026): the 25% offer, the tagline, and the wa.me number are all theirs and
 * all public. Nothing else about the clinic is asserted as fact — every service and
 * price on this page is marked as a placeholder, because inventing medical services
 * or prices for a real clinic is both an MOH-advertising problem and a credibility one.
 *
 * noindex + a permanent banner, so this can never be mistaken for their real site.
 */

const WA = "966598435334"; // from their own live ad
const waHref = `https://wa.me/${WA}`;

export const metadata = {
  title: "نموذج — عيادات دماس",
  description: "نموذج تجريبي من جاوب. ليس الموقع الرسمي للعيادة.",
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: null },
};

const CHECK = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function DamasDemo() {
  return (
    <>
      {/* permanent, unmissable: this is not their site */}
      <div className="band" style={{ borderRadius: 0, margin: 0, borderInline: 0 }}>
        <span className="band__tag">نموذج</span>
        <p>
          هذه صفحة <b>تجريبية</b> بناها فريق <b>جاوب</b> لعرض الفكرة على العيادة — وليست الموقع
          الرسمي لعيادات دماس. الخدمات والأسعار المعروضة <b>أمثلة توضيحية</b> تُستبدل ببيانات
          العيادة الفعلية.
        </p>
      </div>

      <main id="main">
        <section className="hero">
          <div className="wrap hero__grid">
            <div>
              <p className="eyebrow">عيادات دماس — قسم الأسنان</p>
              <h1>ابتسامتك تبدأ من هنا.</h1>
              <p className="hero__what">
                خصم <b>25%</b> على جميع الخدمات. احجز موعدك في أقل من دقيقة — والمساعد يرد على
                أسئلتك عن السعر والمواعيد على مدار الساعة، حتى بعد إغلاق العيادة.
              </p>
              <p className="hero__sub">
                لا تنتظر ردًا في الصباح. اسأل الآن، واعرف السعر والموعد المتاح قبل أن تصل.
              </p>
              <div className="hero__cta">
                <a className="btn btn--primary" href={waHref} target="_blank" rel="noopener noreferrer">
                  احجز عبر واتساب
                </a>
                <a className="btn btn--ghost" href="#services">الخدمات والأسعار</a>
              </div>
              <p className="hero__meta">
                العرض ساري · الرد خلال دقائق · الحجز خلال <b>60</b> ثانية
              </p>
            </div>

            <div className="demo" role="img" aria-label="مثال على محادثة: المساعد يرد على سؤال عن السعر ويعرض المواعيد ثم يحجز">
              <div className="demo__bar">
                <div className="demo__avatar" aria-hidden="true">د</div>
                <div>
                  <div className="demo__who">عيادات دماس — مساعد ذكي</div>
                  <div className="demo__status">يرد خلال ثوانٍ · على مدار الساعة</div>
                </div>
              </div>
              <div className="demo__body">
                <div className="msg msg--bot">هلا وغلا، كيف أقدر أساعدك؟</div>
                <div className="msg msg--me">كم سعر تنظيف الأسنان مع الخصم؟</div>
                <div className="msg msg--bot">
                  التنظيف 350 ريال، ومع خصم 25% يصير 262 ريالًا ويشمل الفحص. عندنا موعد بكرة 5 م أو
                  الخميس 7 م — أيهما يناسبك؟
                </div>
                <div className="msg msg--me">بكرة الساعة 5</div>
                <div className="msg msg--bot">تمام، حجزت لك الموعد. بيوصلك التأكيد على الواتساب الحين.</div>
                <div className="demo__note">{CHECK}حُوّل العميل وبياناته إلى واتساب العيادة</div>
              </div>
            </div>
          </div>
        </section>

        <section className="proof" aria-label="ما تحصل عليه العيادة">
          <div className="wrap">
            <div className="proof__grid">
              <div className="proof__item"><div className="proof__k">على مدار الساعة</div><div className="proof__v">يرد على السعر والموعد بعد الدوام</div></div>
              <div className="proof__item"><div className="proof__k">بيانات كل عميل</div><div className="proof__v">الاسم والرقم وطلبه تصلك مرتبة</div></div>
              <div className="proof__item"><div className="proof__k">موعد مؤكد</div><div className="proof__v">بدل محادثة تنتهي بلا رد</div></div>
              <div className="proof__item"><div className="proof__k">نفس رقمك</div><div className="proof__v">واتساب العيادة كما هو</div></div>
            </div>
          </div>
        </section>

        <section className="sec sec--tint" id="services">
          <div className="wrap">
            <div className="sec__head">
              <h2>الخدمات</h2>
              <p>هذه القائمة مثال توضيحي — تُستبدل بخدمات العيادة وأسعارها الفعلية.</p>
            </div>
            <div className="fgrid">
              <div className="fhero">
                <h3>تنظيف وتلميع الأسنان</h3>
                <p>يشمل الفحص والأشعة عند الحاجة. الموعد من 30 إلى 45 دقيقة.</p>
              </div>
              <div className="fhero">
                <h3>تقويم الأسنان</h3>
                <p>استشارة أولى وخطة علاج مكتوبة قبل البدء.</p>
              </div>
              <div className="fhero">
                <h3>زراعة الأسنان</h3>
                <p>تقييم الحالة بالأشعة، ثم عرض سعر واضح قبل أي إجراء.</p>
              </div>
              <div className="fhero">
                <h3>تبييض الأسنان</h3>
                <p>جلسة واحدة داخل العيادة، مع إرشادات ما بعد الجلسة.</p>
              </div>
            </div>
            <p className="calc__note u-flat">
              الأسعار والخدمات أعلاه أمثلة. تُعرَّف مرة واحدة عند الإعداد، ثم يجيب المساعد بها تلقائيًا.
            </p>
          </div>
        </section>

        <section className="sec" id="cta">
          <div className="wrap">
            <div className="close close--single">
              <div className="final">
                <h2>احجز موعدك الآن</h2>
                <p>اسأل عن السعر أو احجز مباشرة — الرد خلال دقائق، وفي أي وقت.</p>
                <a className="btn btn--primary" href={waHref} target="_blank" rel="noopener noreferrer">
                  تواصل عبر واتساب
                </a>
                <p className="final__meta">خصم 25% على جميع الخدمات</p>
              </div>
            </div>

            <div className="foot">
              <span className="logo__word u-1rem">عيادات دماس</span>
              <span>
                نموذج تجريبي من <b>جاوب</b> · ليس الموقع الرسمي للعيادة · الأسماء والأرقام في
                المحادثة أمثلة توضيحية
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
