import Calculator from "@/components/Calculator";
import LeadModal from "@/components/LeadModal";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://jawib-ksa.com/#org",
      "name": "جاوب",
      "alternateName": "Jawib",
      "url": "https://jawib-ksa.com",
      "email": "ops@jawib-ksa.com",
      "logo": "https://jawib-ksa.com/logo.png",
      "areaServed": {
        "@type": "Country",
        "name": "SA"
      }
    },
    {
      "@type": "Service",
      "name": "صفحة هبوط عربية ومساعد ذكي",
      "provider": {
        "@id": "https://jawib-ksa.com/#org"
      },
      "description": "صفحة هبوط عربية ومساعد ذكي يرد على أسئلة العملاء ويحجز المواعيد، بدفعة واحدة وتسليم خلال خمسة أيام.",
      "areaServed": {
        "@type": "Country",
        "name": "SA"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "الأساسية",
          "price": "1990",
          "priceCurrency": "SAR"
        },
        {
          "@type": "Offer",
          "name": "الذكية",
          "price": "3490",
          "priceCurrency": "SAR"
        },
        {
          "@type": "Offer",
          "name": "الكاملة",
          "price": "6490",
          "priceCurrency": "SAR"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "دفعت لموقع من قبل ولم أستفد. ما الفرق؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "الفرق ثلاثة أشياء تتحقّق منها قبل أن تدفع الدفعة الأخيرة: ترى الصفحة والمساعد يعملان على رابط حقيقي في اليوم الثالث وتجرّبهما بنفسك؛ والنطاق وجميع الملفات تُسجَّل باسمك منذ اليوم الأول فلا شيء محتجز عندنا؛ وإن لم يعجبك العمل عند التسليم نعيد المبلغ كاملًا. لا نطلب ثقة مسبقة، بل تجربة واحدة تنتهي بتسليم كامل بين يديك."
          }
        },
        {
          "@type": "Question",
          "name": "بعد التسليم، هل يكلّفني المساعد شيئًا؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "سنة التشغيل الأولى مشمولة في الباقة الذكية، وسنتان في الكاملة. بعدها تختار: التجديد بـ390 ريالًا سنويًا، أو ربط مفتاحك الخاص والدفع للمزوّد مباشرة — نحو 10 إلى 30 ريالًا شهريًا. أما الباقة الأساسية فبلا مساعد، أي بلا أي تكلفة تشغيل إطلاقًا."
          }
        },
        {
          "@type": "Question",
          "name": "أريد تعديلات لاحقًا، ما التكلفة؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "150 ريالًا للساعة، ونخبرك بعدد الساعات قبل البدء. وإن فضّلت التعديل بنفسك أو عبر مطوّر آخر، فالملفات ملكك ولا قيد عليها."
          }
        },
        {
          "@type": "Question",
          "name": "لديّ حساب واتساب للأعمال — هل تربطونه؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نركّب واتساب بزنس داخل حسابك أنت على ميتا وبرقمك أنت، وتذهب الفواتير إلى بطاقتك مباشرة. إضافة بـ900 ريال مرة واحدة. لا نحتفظ برقمك ولا بحسابك، ويمكنك فصلنا متى شئت."
          }
        },
        {
          "@type": "Question",
          "name": "كم يستغرق التسليم فعليًا؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "خمسة أيام عمل من استلام محتواك: الخدمات والأسعار والصور. أكثر التأخير الذي يحدث سببه انتظار المحتوى، لذلك نرسل لك نموذجًا جاهزًا لا يستغرق منك أكثر من عشرين دقيقة."
          }
        },
        {
          "@type": "Question",
          "name": "كيف أدفع؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "برابط دفع بالبطاقة، أو بتحويل بنكي — أيّهما أسهل عليك. الباقتان الأساسية والذكية تُدفعان كاملة عند البدء، والكاملة نصفها عند البدء ونصفها عند التسليم."
          }
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

<a className="skip" href="#main">تخطَّ إلى المحتوى</a>

<header className="nav">
  <div className="wrap nav__in">
    <a className="logo" href="#top" aria-label="جاوب، الصفحة الرئيسية">
      <svg className="logo__mark" width="34" height="34" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M13.2 12.6 17.4 16.8M24 7v5.8M34.8 12.6 30.6 16.8" stroke="var(--accent)" strokeWidth="3.1" strokeLinecap="round"/><circle cx="24" cy="18.6" r="2.9" fill="var(--accent)"/><path d="M10.5 37.2C10.5 26 16.5 20.4 24 20.4s13.5 5.6 13.5 16.8Z" fill="var(--accent)"/><rect x="8" y="38.4" width="32" height="5" rx="2.5" fill="var(--accent)"/>
      </svg>
      <span>
        <span className="logo__word">جاوب</span>
        <span className="logo__sub">JAWIB</span>
      </span>
    </a>
    <a className="btn btn--primary btn--sm" href="#lead-form">مراجعة مجانية</a>
  </div>
</header>

<main id="main">
<div id="top"></div>

  {/* HERO */}
  <section className="hero">
    <div className="wrap hero__grid">
      <div>
        <p className="eyebrow">لأصحاب الأعمال الذين ينفقون على الإعلانات</p>
        <h1>موظف استقبال رقمي لا ينام، على صفحتك.</h1>
        <p className="hero__what">يردّ على أسئلة عملائك، ويعطيهم الأسعار، ويحجز لهم موعدًا — ثم يحوّلهم إليك على واتساب وقد عرفوا كل شيء. جاهز خلال خمسة أيام، بدفعة واحدة.</p>
        <p className="hero__sub">ليست صفحة هبوط فقط — هي نقطة الاستقبال التي تلتقط كل من ضغط على إعلانك، بدل أن يصل إلى نموذج صامت أو رسالة بلا رد.</p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#lead-form">أرسل رابط صفحتك — مراجعة مجانية
          </a>
          <a className="btn btn--ghost" href="#pricing">اطّلع على الأسعار</a>
        </div>
        <p className="hero__meta">تبدأ من <b>1,990</b> ريال · التسليم خلال <b>5</b> أيام · استرداد كامل</p>
      </div>

      <div className="demo" role="img" aria-label="مثال على محادثة: المساعد الذكي يجيب عن سؤال حول السعر، يعرض المواعيد المتاحة، ويحجز للعميل ثم يحوّل بياناته إلى واتساب العيادة">
        <div className="demo__bar">
          <div className="demo__avatar" aria-hidden="true">ع</div>
          <div>
            <div className="demo__who">عيادة النخبة — مساعد ذكي</div>
            <div className="demo__status">يرد خلال ثوانٍ · على مدار الساعة</div>
          </div>
        </div>
        <div className="demo__body">
          <div className="msg msg--bot">هلا وغلا، كيف أقدر أساعدك؟</div>
          <div className="msg msg--me">كم سعر تنظيف الأسنان؟</div>
          <div className="msg msg--bot">تنظيف الأسنان 350 ريال، ويشمل الفحص والأشعة. عندنا موعد بكرة 5 م أو الخميس 7 م — أيهما يناسبك؟</div>
          <div className="msg msg--me">بكرة الساعة 5</div>
          <div className="msg msg--bot">تمام، حجزت لك الموعد. بيوصلك التأكيد على الواتساب الحين.</div>
          <div className="demo__note">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
            حُوّل العميل وبياناته إلى واتساب العيادة
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* PROOF */}
  <section className="proof" aria-label="ما نلتزم به">
    <div className="wrap">
      <div className="proof__grid">
        <div className="proof__item"><div className="proof__k">خمسة أيام</div><div className="proof__v">من الدفع حتى الإطلاق</div></div>
        <div className="proof__item"><div className="proof__k">باسمك أنت</div><div className="proof__v">النطاق والملفات وكلمات الدخول</div></div>
        <div className="proof__item"><div className="proof__k">نظام حماية البيانات</div><div className="proof__v">موافقة صريحة وسياسة خصوصية بالعربية</div></div>
        <div className="proof__item"><div className="proof__k">استرداد كامل</div><div className="proof__v">إن لم يعجبك العمل عند التسليم</div></div>
      </div>
    </div>
  </section>

  {/* PROBLEM */}
  <section className="sec">
    <div className="wrap">
      <div className="sec__head">
        <h2>أربع جمل نسمعها في كل مكالمة</h2>
        <p>إن كانت إحداها تشبه وضعك، فالمشكلة ليست في ميزانيتك الإعلانية.</p>
      </div>
      <div className="pains">
        <blockquote className="pain">«أصرف على إعلانات وما أشوف نتيجة.»</blockquote>
        <blockquote className="pain">«الرسايل تجيني وأنا نايم، والزبون يروح لغيري.»</blockquote>
        <blockquote className="pain">«ما عندي وقت أرد على كل واحد يسأل عن السعر.»</blockquote>
        <blockquote className="pain">«سويت موقع قبل، دفعت وما استفدت.»</blockquote>
      </div>
      <p className="verdict">الإعلان أدّى دوره وأوصل الزائر. لكن ما ينتظره بعد الضغطة هو ما يحدّد إن كان سيصبح عميلاً — أو <b>رقمًا في تقرير الحملة فقط</b>.</p>
    </div>
  </section>

  {/* CALCULATOR */}
  <section className="sec sec--tint" id="calc">
    <div className="wrap">
      <div className="sec__head">
        <h2>احسب الفرق بأرقامك أنت</h2>
        <p>لا نطلب منك تصديق أي وعد. أدخل رقمين، واحكم بنفسك.</p>
      </div>
      <Calculator />

      <div className="rail">
        <p>أرسل لنا رابط صفحتك الحالية، ونقول لك أين تخسر الزوّار — مجانًا.</p>
        <a className="btn btn--primary" href="#lead-form">اطلب المراجعة المجانية</a>
      </div>
    </div>
  </section>

  {/* GUARANTEE — moved above the ask */}
  <section className="sec">
    <div className="wrap">
      <div className="sec__head">
        <h2>ثلاثة أشياء تحميك، لا وعود</h2>
        <p>لن نطلب منك ثقة مسبقة. هذه ثلاثة التزامات مكتوبة تتحقّق منها بنفسك قبل أن تدفع الدفعة الأخيرة — قبل أن نتحدث عن السعر.</p>
      </div>
      <div className="guar">
        <div className="guar__card">
          <h3><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>كل شيء باسمك</h3>
          <p>النطاق يُسجَّل ببريدك وباسمك من اليوم الأول، لا باسمنا. الملفات وكلمات الدخول تنتقل إليك كاملة عند التسليم.</p>
        </div>
        <div className="guar__card">
          <h3><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>ترى العمل قبل الإطلاق</h3>
          <p>يصلك رابط عامل تختبره بنفسك في اليوم الثالث. لا تعتمد شيئًا لم تجرّبه بيدك.</p>
        </div>
        <div className="guar__card">
          <h3><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>استرداد كامل</h3>
          <p>إن لم يعجبك العمل عند التسليم، نعيد المبلغ كاملاً. نضمن جودة ما ننفّذه؛ ولا نعدك بعدد عملاء لأننا لن نكون معك بعد التسليم لنتحكّم فيه.</p>
        </div>
      </div>
    </div>
  </section>

  {/* WHAT — one dominant feature */}
  <section className="sec sec--tint" id="what">
    <div className="wrap">
      <div className="sec__head">
        <h2>ما الذي تحصل عليه</h2>
        <p>كل شيء جاهز وعامل، ومُسلَّم إليك بالكامل — دون أي التزام بعد ذلك.</p>
      </div>
      <div className="fgrid">
        <div className="fhero">
          <p className="fhero__tag">الفرق الأساسي</p>
          <h3>مساعد ذكي يعرف عملك، لا نموذج تواصل</h3>
          <p>مدرَّب على خدماتك وأسعارك وأوقات دوامك. يجيب بالعربية عن الأسئلة التي تتكرّر عليك يوميًا، ثم يحوّل العميل إلى واتساب ومعه ملخّص ما يريد — فتبدأ المحادثة من نقطة متقدّمة بدل أن تشرح من البداية.</p>
          <ul>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>يرد في الثانية الثالثة صباحًا كما يرد في الظهيرة</li>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>يفرز الجاد عن السائل قبل أن يصلك</li>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>يعمل على الصفحة دون رسوم رسائل من ميتا</li>
          </ul>
        </div>
        <div className="flist">
          <div>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
            <div><h4>صفحة عربية مبنية من الأصل</h4><p>من اليمين إلى اليسار في بنيتها، لا قالبًا إنجليزيًا مترجمًا.</p></div>
          </div>
          <div>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"/></svg>
            <div><h4>تفتح في أقل من ثانيتين</h4><p>على شبكة الجوال داخل المملكة. كل ثانية انتظار زوّار غادروا بعد أن دفعت ثمن وصولهم.</p></div>
          </div>
          <div>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
            <div><h4>تعرف أي إعلان جاء بالعميل</h4><p>بكسل سناب شات وميتا وتيك توك مع قوقل أناليتكس، مضبوطة من اليوم الأول.</p></div>
          </div>
          <div>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
            <div><h4>متوافقة مع نظام حماية البيانات</h4><p>موافقة صريحة قبل جمع أي بيانات، وسياسة خصوصية بالعربية. الغرامات تصل إلى خمسة ملايين ريال.</p></div>
          </div>
          <div>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>
            <div><h4>تسليم كامل بلا ارتباط</h4><p>النطاق والملفات وكلمات الدخول لك. لن تحتاج إلينا بعد اليوم الخامس.</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* HOW */}
  <section className="sec" id="how">
    <div className="wrap">
      <div className="sec__head">
        <h2>ثلاث خطوات، ثم ننصرف</h2>
        <p>بلا اجتماعات متكرّرة ولا عروض تقديمية. مكالمة واحدة منك، وعمل مُسلَّم منّا.</p>
      </div>
      <div className="steps">
        <div className="step">
          <h3>مكالمة نصف ساعة</h3>
          <p>نسألك عن خدماتك وأسعارك والأسئلة التي تتكرّر عليك من العملاء. هذه المكالمة هي كل ما نحتاجه منك.</p>
          <p className="step__when">اليوم الأول</p>
        </div>
        <div className="step">
          <h3>تجرّب قبل أن تعتمد</h3>
          <p>يصلك رابط عامل تختبر فيه الصفحة والمساعد بنفسك، وتطلب تعديلاتك قبل الإطلاق.</p>
          <p className="step__when">اليوم الثالث</p>
        </div>
        <div className="step">
          <h3>نسلّمك كل شيء</h3>
          <p>النطاق باسمك، والملفات لك، وكلمات الدخول تنتقل إليك. لن تحتاج إلينا بعدها — وهذا هو المقصود.</p>
          <p className="step__when">اليوم الخامس</p>
        </div>
      </div>
    </div>
  </section>

  {/* COMPARE */}
  <section className="sec sec--tint">
    <div className="wrap">
      <div className="sec__head">
        <h2>قارن قبل أن تقرّر</h2>
        <p>الصفحة وحدها لها سوق، والمساعد وحده له سوق آخر. نحن في المنتصف تمامًا.</p>
      </div>
      <div className="cmp__scroll">
        <table className="cmp">
          <caption>الأسعار المذكورة نطاقات سوقية معلنة في السعودية لعام 2026، للمقارنة التقريبية.</caption>
          <thead>
            <tr><th scope="col">&nbsp;</th><th scope="col">أن تردّ بنفسك</th><th scope="col">مستقل على منصات العمل الحر</th><th scope="col">وكالة</th><th scope="col" className="col-us">جاوب</th></tr>
          </thead>
          <tbody>
            <tr><th scope="row">الصفحة</th><td>لا توجد</td><td>300 – 1,500 ريال</td><td>5,000 – 25,000 ريال</td><td className="col-us">مشمولة</td></tr>
            <tr><th scope="row">المساعد الذكي</th><td>أنت، متى فرغت</td><td>غير متاح غالبًا</td><td>يبدأ من 30,000 ريال</td><td className="col-us">مشمول</td></tr>
            <tr><th scope="row">مدة التسليم</th><td>—</td><td>غير محدّدة</td><td>3 – 6 أسابيع</td><td className="col-us">5 أيام</td></tr>
            <tr><th scope="row">ملكية النطاق</th><td>—</td><td>تختلف</td><td>غالبًا باسم الوكالة</td><td className="col-us">باسمك من اليوم الأول</td></tr>
            <tr><th scope="row">التزام شهري</th><td>وقتك كل يوم</td><td>لا</td><td>عادةً نعم</td><td className="col-us">لا</td></tr>
            <tr><th scope="row">الإجمالي</th><td>كل استفسار يصل بعد الدوام</td><td>صفحة فقط</td><td>35,000 ريال فأكثر</td><td className="col-us">2,490 ريال مرة واحدة</td></tr>
          </tbody>
        </table>
      </div>
      <div className="rail">
        <p>غير متأكد أي باقة تناسبك؟ اسأل، ونرشّح لك بصراحة — حتى لو كانت الأرخص.</p>
        <a className="btn btn--primary" href="#lead-form">اسألنا</a>
      </div>
    </div>
  </section>

  {/* PRICING */}
  <section className="sec" id="pricing">
    <div className="wrap">
      <div className="sec__head">
        <h2>الأسعار معلنة، لا تُطلب برسالة</h2>
        <p>دفعة واحدة، بلا اشتراك شهري ولا التزام بعد التسليم.</p>
      </div>
      <div className="tiers">

        <div className="tier">
          <div>
            <div className="tier__name">الأساسية</div>
            <div className="tier__price">1,990 <span>ريال</span></div>
            <div className="tier__once">دفعة واحدة</div>
          </div>
          <p className="tier__for">لمن يريد وجهة حقيقية لإعلاناته، دون مساعد ذكي.</p>
          <ul>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>صفحة هبوط عربية واحدة</li>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>زر واتساب مباشر</li>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>نموذج تواصل يصلك على بريدك</li>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>بكسل الإعلانات وقوقل أناليتكس</li>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>تعديل واحد · تسليم خلال 5 أيام</li>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg><b>بلا أي تكلفة تشغيل بعد التسليم</b></li>
          </ul>
          <a className="btn btn--ghost btn--block" href="#lead-form">ابدأ بالأساسية</a>
        </div>

        <div className="tier tier--lift">
          <div className="tier__flag">الأكثر طلبًا</div>
          <div>
            <div className="tier__name">الذكية</div>
            <div className="tier__price">3,490 <span>ريال</span></div>
            <div className="tier__once">دفعة واحدة · تشمل سنة تشغيل للمساعد</div>
          </div>
          <p className="tier__for">للعيادات ومراكز التدريب والمكاتب العقارية — وكل عمل تتكرّر فيه الأسئلة نفسها.</p>
          <ul>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>كل ما في الأساسية</li>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg><b>مساعد ذكي مدرَّب على خدماتك وأسعارك</b></li>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>يفرز العميل ويحوّله إلى واتساب مع طلبه</li>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>نسختان من العنوان والعرض للمقارنة</li>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>تعديلان · دعم 30 يومًا بعد الإطلاق</li>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>بعد السنة: 390 ريالًا سنويًا أو مفتاحك الخاص</li>
          </ul>
          <a className="btn btn--primary btn--block" href="#lead-form">ابدأ بالذكية</a>
        </div>

        <div className="tier">
          <div>
            <div className="tier__name">الكاملة</div>
            <div className="tier__price">6,490 <span>ريال</span></div>
            <div className="tier__once">دفعة واحدة · تشمل سنتَي تشغيل</div>
          </div>
          <p className="tier__for">لمن لديه أكثر من فرع أو أكثر من حملة، أو وكالة تشتري لعميلها.</p>
          <ul>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>كل ما في الذكية</li>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>حتى ثلاث صفحات أو حملات</li>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>ربط الحجز والتقويم</li>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>أربعة تصاميم إعلانية جاهزة</li>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>دعم 60 يومًا وجلسة تسليم مسجّلة</li>
            <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>واتساب بزنس داخل حسابك (+900 ريال)</li>
          </ul>
          <a className="btn btn--ghost btn--block" href="#lead-form">ابدأ بالكاملة</a>
        </div>

      </div>

      <p className="pricing__anchor">المساعد وحده يبدأ من <b>3,500 ريال</b> في السوق السعودي. عندنا الصفحة والمساعد معًا بـ<b>3,490</b>.</p>
      <p className="calc__note u-flat">الأسعار لمرة واحدة ولا تشمل ضريبة القيمة المضافة إن انطبقت · التعديلات بعد التسليم 150 ريالًا للساعة، ويُبلَّغ بها قبل التنفيذ.</p>
    </div>
  </section>


  {/* FAQ */}
  <section className="sec sec--tint" id="faq">
    <div className="wrap">
      <div className="sec__head"><h2>أسئلة تصلنا فعلاً</h2></div>
      <div className="faq">
        <details open>
          <summary>دفعت لموقع من قبل ولم أستفد. ما الفرق؟</summary>
          <p className="faq__a">الفرق ثلاثة أشياء تتحقّق منها قبل أن تدفع الدفعة الأخيرة: ترى الصفحة والمساعد يعملان على رابط حقيقي في اليوم الثالث وتجرّبهما بنفسك؛ والنطاق وجميع الملفات تُسجَّل باسمك منذ اليوم الأول فلا شيء محتجز عندنا؛ وإن لم يعجبك العمل عند التسليم نعيد المبلغ كاملًا. لا نطلب ثقة مسبقة، بل تجربة واحدة تنتهي بتسليم كامل بين يديك.</p>
        </details>
        <details>
          <summary>بعد التسليم، هل يكلّفني المساعد شيئًا؟</summary>
          <p className="faq__a">سنة التشغيل الأولى مشمولة في الباقة الذكية، وسنتان في الكاملة. بعدها تختار: التجديد بـ390 ريالًا سنويًا، أو ربط مفتاحك الخاص والدفع للمزوّد مباشرة — نحو 10 إلى 30 ريالًا شهريًا. أما الباقة الأساسية فبلا مساعد، أي بلا أي تكلفة تشغيل إطلاقًا.</p>
        </details>
        <details>
          <summary>أريد تعديلات لاحقًا، ما التكلفة؟</summary>
          <p className="faq__a">150 ريالًا للساعة، ونخبرك بعدد الساعات قبل البدء. وإن فضّلت التعديل بنفسك أو عبر مطوّر آخر، فالملفات ملكك ولا قيد عليها.</p>
        </details>
        <details>
          <summary>لديّ حساب واتساب للأعمال — هل تربطونه؟</summary>
          <p className="faq__a">نركّب واتساب بزنس داخل حسابك أنت على ميتا وبرقمك أنت، وتذهب الفواتير إلى بطاقتك مباشرة. إضافة بـ900 ريال مرة واحدة. لا نحتفظ برقمك ولا بحسابك، ويمكنك فصلنا متى شئت.</p>
        </details>
        <details>
          <summary>كم يستغرق التسليم فعليًا؟</summary>
          <p className="faq__a">خمسة أيام عمل من استلام محتواك: الخدمات والأسعار والصور. أكثر التأخير الذي يحدث سببه انتظار المحتوى، لذلك نرسل لك نموذجًا جاهزًا لا يستغرق منك أكثر من عشرين دقيقة.</p>
        </details>
        <details>
          <summary>كيف أدفع؟</summary>
          <p className="faq__a">برابط دفع بالبطاقة، أو بتحويل بنكي — أيّهما أسهل عليك. الباقتان الأساسية والذكية تُدفعان كاملة عند البدء، والكاملة نصفها عند البدء ونصفها عند التسليم.</p>
        </details>
      </div>
    </div>
  </section>

  {/* CLOSE */}
  <section className="sec" id="cta">
    <div className="wrap">
      <div className="close close--single">
        <div className="final">
          <h2>أرسل لنا رابط صفحتك الحالية</h2>
          <p>اترك رقمك، ونجاوبك على واتساب خلال يوم عمل برأي صريح — دون مقابل، ودون متابعة مزعجة بعدها. إن كانت صفحتك جيدة، سنقول لك ذلك.</p>
          <a className="btn btn--primary" href="#lead-form">اترك رقمك ونجاوبك
          </a>
          <p className="final__meta">الرد خلال يوم عمل · من 9 صباحًا حتى 9 مساءً</p>
        </div>
      </div>

      <div className="ident">
        <div>
          <h4>الاسم التجاري</h4>
          <p>[يُضاف بعد التسجيل] · جاوب</p>
        </div>
        <div>
          <h4>التواصل</h4>
          <p>ops@jawib-ksa.com</p>
        </div>
        <div>
          <h4>أوقات الرد</h4>
          <p>الأحد – الخميس، 9 ص – 9 م</p>
        </div>
      </div>

      <div className="foot">
        <a className="logo" href="#top">
          <svg className="logo__mark" width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M13.2 12.6 17.4 16.8M24 7v5.8M34.8 12.6 30.6 16.8" stroke="var(--accent)" strokeWidth="3.1" strokeLinecap="round"/><circle cx="24" cy="18.6" r="2.9" fill="var(--accent)"/><path d="M10.5 37.2C10.5 26 16.5 20.4 24 20.4s13.5 5.6 13.5 16.8Z" fill="var(--accent)"/><rect x="8" y="38.4" width="32" height="5" rx="2.5" fill="var(--accent)"/>
          </svg>
          <span className="logo__word" className="u-1rem">جاوب</span>
        </a>
        <span>عميلك سأل. جاوبناه. · نموذج تصميم أولي — الأسماء والأرقام في المحادثة أمثلة توضيحية</span>
      </div>
    </div>
  </section>

</main>

<div className="ovl" id="ovl" role="dialog" aria-modal="true" aria-labelledby="mt">
  <div className="modal" id="mbox">
    <button className="modal__x" id="mx" aria-label="إغلاق">&times;</button>
    <h3 id="mt">اطلب مراجعة مجانية لصفحتك</h3>
    <p>اترك رقمك ونجاوبك على واتساب خلال يوم عمل — برأي صريح، وبدون التزام.</p>
    <form id="lead" novalidate>
      <div className="field">
        <label htmlFor="l-name">الاسم</label>
        <input id="l-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="l-wa">رقم الجوال (واتساب)</label>
        <input id="l-wa" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="05xxxxxxxx" required />
      </div>
      <div className="field">
        <label htmlFor="l-url">رابط صفحتك أو حسابك <span className="u-opt">(اختياري)</span></label>
        <input id="l-url" name="page" type="url" inputMode="url" placeholder="https://" />
      </div>
      <div className="field">
        <label htmlFor="l-biz">نوع النشاط</label>
        <select id="l-biz" name="business">
          <option>عيادة أو مركز طبي</option>
          <option>مركز تدريب أو مدرّب</option>
          <option>مكتب عقاري</option>
          <option>متجر إلكتروني</option>
          <option>نشاط آخر</option>
        </select>
      </div>
      <button className="btn btn--primary btn--block" type="submit" id="lsend">أرسل الطلب</button>
      <p className="modal__fine">نستخدم رقمك للتواصل بخصوص طلبك فقط، ولا نشاركه مع أي جهة. يمكنك طلب حذف بياناتك في أي وقت.</p>
    </form>
    <p className="modal__alt">تفضّل البريد؟ راسلنا على <a href="mailto:ops@jawib-ksa.com">ops@jawib-ksa.com</a></p>
  </div>
</div>




{/* sticky mobile dock */}
<div className="dock">
  <div className="dock__price"><b>من 1,990 ﷼</b><span>تسليم 5 أيام</span></div>
  <a className="btn btn--primary" href="#lead-form">مراجعة مجانية
  </a>
</div>
      <LeadModal />
    </>
  );
}
