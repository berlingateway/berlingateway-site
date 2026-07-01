import { Request } from "express";
import fs from "fs";
import path from "path";

interface MetaEntry {
  title: string;
  description?: string;
  ogUrl?: string;
}

const META_MAP: Record<string, MetaEntry> = {
  "/about": {
    title: `About Us | Medical Care Germany — Berlin`,
  },
  "/advanced-diagnostics-germany": {
    title: `Advanced Medical Diagnostics in Germany`,
    description: `Comprehensive diagnostic evaluation using Germany`,
  },
  "/ar": {
    title: `علاج في ألمانيا للمرضى العرب | ميديكال كير جيرماني`,
  },
  "/ar/about": {
    title: `من نحن | Medical Care Germany — برلين منذ 2012`,
    description: `Medical Care Germany — تنسيق طبي متخصص للمرضى العرب في ألمانيا منذ 2012. فريق برلين يرافقك من إرسال الملف حتى العودة.`,
  },
  "/ar/advanced-rehabilitation-germany": {
    title: `إعادة التأهيل المتقدمة في ألمانيا | برلين وأفضل المراكز`,
    description: `مراكز إعادة التأهيل في ألمانيا توفر أعلى مستويات العلاج الطبيعي والتأهيل العصبي والحركي — نرتب إقامتك التأهيلية.`,
  },
  "/ar/brain-tumor-treatment-germany": {
    title: `علاج أورام المخ في ألمانيا | جراحة دقيقة في برلين`,
    description: `أورام المخ تحتاج أفضل الجراحين — نوصلك بأقسام جراحة الأعصاب في المستشفيات الجامعية الألمانية لتقييم حالتك بدقة.`,
  },
  "/ar/breast-cancer-treatment-germany": {
    title: `علاج سرطان الثدي في ألمانيا | مراكز متخصصة في برلين`,
    description: `علاج سرطان الثدي في ألمانيا بأعلى معدلات الشفاء — فريق متكامل من الجراحة والأورام والأشعة. نرتب تقييمك الطبي.`,
  },
  "/ar/chronic-neck-pain": {
    title: `ألم الرقبة المزمن في ألمانيا | تشخيص وعلاج في برلين`,
    description: `ألم الرقبة المزمن الذي لم يُشخَّص بشكل صحيح — نوفر لك رأياً طبياً ثانياً من أفضل متخصصي العمود الفقري في ألمانيا.`,
  },
  "/ar/colon-cancer-treatment-germany": {
    title: `علاج سرطان القولون في ألمانيا | برلين وأفضل المستشفيات`,
    description: `سرطان القولون يحتاج فريقاً متكاملاً — نوفر لك الوصول لأفضل أطباء الأورام وجراحي الجهاز الهضمي في ألمانيا.`,
  },
  "/ar/complex-cases": {
    title: `الحالات الطبية المعقدة في ألمانيا | خبرة أكثر من 10 سنوات`,
    description: `الحالات الطبية المعقدة التي لم تجد حلاً — نتخصص في إيجاد المختص الصحيح في ألمانيا لأصعب الحالات منذ 2012.`,
  },
  "/ar/complex-trauma-germany": {
    title: `الحالات المعقدة بعد الحوادث والإصابات في ألمانيا | Medical Care Germany`,
  },
  "/ar/dizziness-long-term": {
    title: `تقييم الدوخة المزمنة في ألمانيا | HNO وطب الأعصاب`,
    description: `دوخة مستمرة لأشهر دون تشخيص واضح؟ نوفر لك تقييماً شاملاً من متخصصي الأعصاب والأذن في المستشفيات الجامعية الألمانية.`,
  },
  "/ar/ent-germany": {
    title: `طب الأنف والأذن والحنجرة في ألمانيا | برلين`,
    description: `تخصص الأنف والأذن والحنجرة في ألمانيا — تشخيص دقيق وعلاج متخصص لأمراض الحنجرة والأذن والجيوب الأنفية.`,
  },
  "/ar/ent-surgery-germany": {
    title: `جراحة الأنف والأذن والحنجرة في ألمانيا | تنسيق الحالات الجراحية`,
    description: `جراحات الأنف والأذن والحنجرة في ألمانيا بأعلى معايير الدقة — نرتب موعدك مع أفضل جراحي التخصص في برلين.`,
  },
  "/ar/failed-ivf-causes-germany": {
    title: `أسباب فشل IVF المتكرر | تقييم متخصص في ألمانيا`,
    description: `إذا فشل IVF أكثر من مرة، هناك أسباب يمكن تشخيصها — نوفر لك تقييماً شاملاً من متخصصي الخصوبة في ألمانيا.`,
  },
  "/ar/fertility-treatment-germany": {
    title: `علاج العقم في ألمانيا | مراكز متخصصة في برلين`,
    description: `علاج العقم في ألمانيا بأعلى معدلات النجاح — أطفال الأنابيب، ICSI، وتشخيص أسباب العقم. نرتب تقييمك في أفضل المراكز.`,
  },
  "/ar/head-neck-tumor-germany": {
    title: `أورام الرأس والعنق في ألمانيا — تقييم وتنسيق الحالات المعقدة | Medical Care Germany`,
  },
  "/ar/hearing-implant-germany": {
    title: `زراعة الأذن في ألمانيا | القوقعة وزراعة السمع في برلين`,
    description: `زراعة القوقعة والأجهزة السمعية المزروعة في ألمانيا — مراكز متخصصة بأعلى معدلات النجاح. نرتب تقييمك السمعي.`,
  },
  "/ar/herniated-disc": {
    title: `علاج الانزلاق الغضروفي في ألمانيا | تشخيص دقيق في برلين`,
    description: `إذا كنت تعاني من ألم الانزلاق الغضروفي ولم تجد حلاً، نوفر لك رأياً طبياً ثانياً من متخصصي العمود الفقري في ألمانيا.`,
  },
  "/ar/icsi-germany": {
    title: `ICSI في ألمانيا | حقن الحيوان المنوي في برلين`,
    description: `تقنية ICSI لعلاج العقم عند الرجل في ألمانيا — نوصلك بأفضل أطباء الخصوبة في المستشفيات الجامعية الألمانية.`,
  },
  "/ar/ivf-cost-germany": {
    title: `تكلفة أطفال الأنابيب في ألمانيا | أرقام حقيقية 2025`,
    description: `تكلفة IVF في ألمانيا تتراوح بين 3000 و6000 يورو للدورة الواحدة — نوفر لك تقديراً دقيقاً لتكاليف علاج العقم في برلين.`,
  },
  "/ar/ivf-germany": {
    title: `أطفال الأنابيب في ألمانيا | IVF في مراكز برلين المتخصصة`,
    description: `أطفال الأنابيب IVF في ألمانيا بأعلى معدلات النجاح في أوروبا — نوفر لك الوصول لأفضل مراكز الخصوبة مع دعم عربي كامل.`,
  },
  "/ar/joint-replacement-after-trauma": {
    title: `استبدال المفاصل بعد الإصابة في ألمانيا — إنقاذ الطرف أو تعويض المفصل | Medical Care Germany`,
  },
  "/ar/long-term-rehabilitation-germany": {
    title: `العلاج التأهيلي طويل المدى في ألمانيا | استمرارية التأهيل المتخصص`,
  },
  "/ar/lung-cancer-treatment-germany": {
    title: `علاج سرطان الرئة في ألمانيا | تقييم أورامي متخصص`,
    description: `علاج سرطان الرئة في ألمانيا بأحدث الأساليب — جراحة، إشعاع، وعلاج مناعي. نوصلك لأفضل المراكز الأورامية الجامعية.`,
  },
  "/ar/male-infertility-germany": {
    title: `علاج العقم عند الرجل في ألمانيا | تقييم دقيق في برلين`,
    description: `تشخيص وعلاج العقم عند الرجل في ألمانيا — تحليل شامل للحيوانات المنوية وخيارات العلاج الجراحي والهرموني.`,
  },
  "/ar/medical-visa-residency-germany": {
    title: `فيزا الإقامة الطبية في ألمانيا | تمديد وإجراءات كاملة`,
    description: `فيزا العلاج الطبي في ألمانيا وإجراءات التمديد — نساعدك في كل خطوات استخراج وتجديد تأشيرة الإقامة الطبية.`,
  },
  "/ar/nerve-injury-after-trauma-germany": {
    title: `إصابات الأعصاب بعد الحوادث في ألمانيا — جراحة دقيقة وإعادة تأهيل | Medical Care Germany`,
  },
  "/ar/neurological-rehabilitation-germany": {
    title: `التأهيل العصبي في ألمانيا | مراكز متخصصة في برلين`,
    description: `التأهيل العصبي بعد السكتة أو إصابات الدماغ والحبل الشوكي — نوفر لك أفضل مراكز التأهيل العصبي في ألمانيا.`,
  },
  "/ar/neurology-treatment-germany": {
    title: `علاج الأمراض العصبية في ألمانيا | تشخيص دقيق في برلين`,
    description: `أمراض الأعصاب المعقدة تحتاج تشخيصاً دقيقاً — نوصلك بأفضل أطباء الأعصاب في المستشفيات الجامعية الألمانية.`,
  },
  "/ar/numbness-hands-feet-germany": {
    title: `تنميل اليدين والقدمين في ألمانيا | تشخيص دقيق في برلين`,
    description: `التنميل المزمن في اليدين أو القدمين قد يكون له أسباب عصبية دقيقة — نوصلك بمتخصصي الأعصاب الطرفية في ألمانيا.`,
  },
  "/ar/orthopedics-germany": {
    title: `طب العظام والمفاصل في ألمانيا | Medical Care Germany`,
    description: `تنسيق طبي متكامل في تخصص العظام والمفاصل في ألمانيا — جراحة، تأهيل، ورأي طبي ثانٍ من أفضل المستشفيات الجامعية.`,
  },
  "/ar/parkinsons-treatment-germany": {
    title: `علاج الباركنسون في ألمانيا | أحدث البروتوكولات في برلين`,
    description: `علاج مرض باركنسون في ألمانيا — تقييم متخصص، تعديل العلاج الدوائي، وتقييم التدخلات الجراحية كـ DBS في أفضل المراكز.`,
  },
  "/ar/pediatric-ent-germany": {
    title: `طب الأنف والأذن والحنجرة للأطفال في ألمانيا | تقييم الحالات المعقدة`,
    description: `أمراض الأنف والأذن والحنجرة عند الأطفال في ألمانيا — تشخيص دقيق وعلاج متخصص في أفضل أقسام طب الأطفال الجامعية.`,
  },
  "/ar/pediatric-medicine-germany": {
    title: `طب الأطفال في ألمانيا | مستشفيات متخصصة في برلين`,
    description: `علاج الأطفال في ألمانيا بأعلى معايير طب الأطفال — نوفر الوصول لأفضل الأطباء والمستشفيات الجامعية المتخصصة في برلين.`,
  },
  "/ar/pediatric-neurology-germany": {
    title: `أعصاب الأطفال في ألمانيا | تشخيص دقيق في برلين`,
    description: `أمراض الأعصاب عند الأطفال تحتاج تخصصاً دقيقاً — نوصلك بأفضل أطباء أعصاب الأطفال في المستشفيات الجامعية الألمانية.`,
  },
  "/ar/pediatric-orthopedics-germany": {
    title: `عظام الأطفال في ألمانيا | تقييم ومتابعة في برلين`,
    description: `تشوهات العظام والمفاصل عند الأطفال في ألمانيا — تشخيص مبكر وعلاج متخصص في أفضل مراكز عظام الأطفال الجامعية.`,
  },
  "/ar/pediatric-rehabilitation-germany": {
    title: `تأهيل الأطفال في ألمانيا | إعادة التأهيل المتخصص للأطفال`,
    description: `إعادة تأهيل الأطفال في ألمانيا بعد الإصابات والعمليات — برامج متخصصة في أفضل مراكز تأهيل الأطفال الجامعية.`,
  },
  "/ar/pediatric-surgery-germany": {
    title: `جراحة الأطفال في ألمانيا | مراكز متخصصة في برلين`,
    description: `جراحة الأطفال في ألمانيا بأعلى درجات الدقة والأمان — نرتب مواعيد الأطفال في أفضل أقسام جراحة الأطفال الجامعية.`,
  },
  "/ar/prostate-cancer-treatment-germany": {
    title: `علاج سرطان البروستاتا في ألمانيا | تقييم دقيق في برلين`,
    description: `سرطان البروستاتا في ألمانيا — جراحة روبوتية، أشعة ببرائية، ومراقبة فعّالة. نوصلك للمختص المناسب لحالتك.`,
  },
  "/ar/prosthetics-after-amputation-germany": {
    title: `تركيب الأطراف الصناعية بعد البتر في ألمانيا — تقييم وتأهيل متخصص | Medical Care Germany`,
  },
  "/ar/prosthetics-germany": {
    title: `الأطراف الاصطناعية في ألمانيا | أحدث التقنيات في برلين`,
    description: `الأطراف الاصطناعية والمساعدات التعويضية في ألمانيا بأحدث التقنيات — نرتب تقييمك وتركيب الطرف المناسب لحالتك.`,
  },
  "/ar/repeated-miscarriage-causes-germany": {
    title: `أسباب الإجهاض المتكرر | تشخيص دقيق في ألمانيا`,
    description: `الإجهاض المتكرر له أسباب قابلة للعلاج — نوفر لك تقييماً شاملاً من أطباء الخصوبة والمناعة في المستشفيات الجامعية الألمانية.`,
  },
  "/ar/second-medical-evaluation-germany": {
    title: `التقييم الطبي الثاني في ألمانيا | مراجعة مستقلة للتشخيص والخطة العلاجية`,
  },
  "/ar/second-opinion-germany": {
    title: `رأي طبي ثانٍ في ألمانيا | تقييم مستقل من برلين`,
    description: `قبل أي قرار طبي كبير، احصل على رأي طبي ثانٍ من متخصصي ألمانيا — نرتب التقييم المستقل في أفضل المستشفيات الجامعية.`,
  },
  "/ar/send-medical-reports": {
    title: `إرسال التقارير الطبية | ميديكال كير جيرماني`,
    description: `كيفية إرسال التقارير الطبية للتقييم في ألمانيا — الوثائق المطلوبة، وما يحدث بعد الإرسال، ومدة المراجعة.`,
  },
  "/ar/sleep-apnea-snoring-germany": {
    title: `علاج انقطاع النفس أثناء النوم في ألمانيا | برلين`,
    description: `انقطاع النفس أثناء النوم والشخير المزمن — تشخيص بدراسة النوم وعلاج جراحي أو بالأجهزة في أفضل مراكز ألمانيا.`,
  },
  "/ar/spinal-rehabilitation-germany": {
    title: `تأهيل العمود الفقري في ألمانيا | برامج متخصصة في برلين`,
    description: `برامج تأهيل العمود الفقري في ألمانيا بعد الجراحة أو الإصابة — نوصلك بأفضل مراكز التأهيل الفقري الجامعية.`,
  },
  "/ar/spine-surgery-germany": {
    title: `جراحة العمود الفقري في ألمانيا | دقة عالية في برلين`,
    description: `عمليات العمود الفقري في ألمانيا بأحدث التقنيات الجراحية — انزلاق غضروفي، تضيق القناة، وتشوهات العمود. نرتب تقييمك الآن.`,
  },
  "/ar/surgery-second-opinion": {
    title: `رأي ثانٍ قبل العملية في ألمانيا | ميديكال كير جيرماني`,
    description: `هل أُخبرت أنك تحتاج عملية جراحية؟ نوفر لك رأياً طبياً ثانياً من جراحي ألمانيا قبل أي قرار.`,
  },
  "/ar/tinnitus-treatment-germany": {
    title: `علاج طنين الأذن في ألمانيا | تشخيص دقيق في برلين`,
    description: `طنين الأذن المزمن يحتاج تشخيصاً دقيقاً — نوصلك بأفضل متخصصي الأذن في ألمانيا لاكتشاف السبب ووضع خطة العلاج.`,
  },
  "/ar/treatment-germany-algeria": {
    title: `العلاج في ألمانيا للمرضى الجزائريين | Medical Care Germany`,
    description: `نساعد المرضى الجزائريين في الوصول للمستشفيات الجامعية الألمانية — من مستشفى مصطفى باشا وCHU وهران إلى Charité برلين. تواصل معنا اليوم.`,
  },
  "/ar/treatment-germany-iraq": {
    title: `العلاج في ألمانيا للمرضى العراقيين | Medical Care Germany`,
    description: `تنسيق طبي متخصص للمرضى العراقيين في ألمانيا — مواعيد سريعة في المستشفيات الجامعية وخدمة عربية متكاملة من برلين. نوفر مساراً مباشراً لأقسام جراحة الأعصاب والأورام الجامعية في ألمانيا.`,
  },
  "/ar/treatment-germany-libya": {
    title: `العلاج في ألمانيا للمرضى الليبيين | Medical Care Germany`,
    description: `تنسيق طبي متخصص للمرضى الليبيين في ألمانيا — مواعيد سريعة في المستشفيات الجامعية وخدمة عربية متكاملة من برلين. نكمل المسار معك بعد مركز طرابلس الطبي أو مركز بنغازي الطبي.`,
  },
  "/ar/treatment-germany-saudi": {
    title: `العلاج في ألمانيا للمرضى السعوديين | Medical Care Germany`,
    description: `تنسيق طبي متخصص للمرضى السعوديين في ألمانيا — مواعيد سريعة في المستشفيات الجامعية وخدمة عربية متكاملة من برلين.`,
  },
  "/ar/treatment-germany-tunisia": {
    title: `العلاج في ألمانيا للمرضى التونسيين | Medical Care Germany`,
    description: `تنسيق طبي متخصص للمرضى التونسيين في ألمانيا — مواعيد سريعة في المستشفيات الجامعية وخدمة عربية متكاملة من برلين. نوفر مساراً مكملاً للحالات التي تحتاج تقنيات أكثر تقدماً.`,
  },
  "/ar/treatment-germany-uae": {
    title: `العلاج في ألمانيا للمرضى الإماراتيين | Medical Care Germany`,
    description: `نساعد المرضى من الإمارات في الحصول على رأي طبي ثانٍ أو علاج متخصص في ألمانيا — تنسيق كامل باللغة العربية.`,
  },
  "/ar/treatment-germany-yemen": {
    title: `العلاج في ألمانيا للمرضى اليمنيين | Medical Care Germany`,
    description: `تنسيق طبي متخصص للمرضى اليمنيين في ألمانيا — نتعاون مع رحلة علاجك ونوفر مساراً إضافياً للحالات التي تحتاج تخصصاً دقيقاً غير متاح محلياً. مواعيد سريعة في المستشفيات الجامعية وخدمة عربية من برلين.`,
  },
  "/ar/trigeminal-neuralgia-treatment-germany": {
    title: `علاج ألم العصب الخامس في ألمانيا | تخصص دقيق في برلين`,
    description: `ألم العصب الثلاثي التوائم يحتاج متخصصاً — نوفر لك تقييماً دقيقاً من جراحي الأعصاب الألمان لاختيار أفضل خيار علاجي.`,
  },
  "/ar/unexplained-dizziness": {
    title: `دوخة غير مفسرة؟ | تشخيص دقيق في ألمانيا`,
    description: `إذا كنت تعاني من دوخة مستمرة دون سبب واضح، نوصلك بمتخصصي الأعصاب والأذن في ألمانيا للتشخيص الدقيق.`,
  },
  "/ar/voice-prosthesis-germany": {
    title: `بدائل الصوت وصمامات الكلام بعد جراحات الحنجرة في ألمانيا`,
    description: `تركيب بدائل الصوت وأجهزة النطق في ألمانيا — نوصلك بأفضل متخصصي الحنجرة والصوت في المستشفيات الجامعية.`,
  },
  "/ar/war-injury-rehabilitation-germany": {
    title: `تأهيل إصابات الحرب في ألمانيا | خبرة في الحالات المعقدة`,
    description: `تأهيل إصابات الحرب والصدمات المعقدة في ألمانيا — بروتوكولات متخصصة للمصابين بجروح وإعاقات حركية وعصبية.`,
  },
  "/ar/ارسال-التقارير-الطبية": {
    title: `إرسال التقارير الطبية | ميديكال كير جيرماني`,
    description: `كيفية إرسال التقارير الطبية للتقييم في ألمانيا — الوثائق المطلوبة، وما يحدث بعد الإرسال، ومدة المراجعة.`,
  },
  "/ar/السفر-للعلاج-في-المانيا": {
    title: `السفر للعلاج في ألمانيا | ميديكال كير جيرماني`,
    description: `دليل السفر للعلاج في ألمانيا — الاستعداد قبل السفر، والوثائق المطلوبة، وما يجب ترتيبه مسبقاً.`,
  },
  "/ar/العلاج-في-المانيا-للعرب": {
    title: `العلاج في ألمانيا: اتخاذ القرار الطبي الصحيح للحالات المعقدة`,
    description: `بعض الحالات لا تتطلب علاجًا إضافيًا بل تتطلب إعادة تقييم دقيقة للتشخيص. في ألمانيا، يتم اتخاذ القرار الطبي بناءً على تحليل منهجي للحالة.`,
  },
  "/ar/تكلفة-العلاج-في-المانيا": {
    title: `تكاليف العلاج في ألمانيا | أرقام حقيقية وشفافة`,
    description: `تكاليف العلاج في ألمانيا تختلف حسب التخصص والمستشفى — نوفر لك تقديراً دقيقاً وشفافاً قبل أي التزام مالي.`,
  },
  "/ar/فيزا-العلاج-في-المانيا": {
    title: `فيزا العلاج في ألمانيا | كيف نساعدك في الحصول عليها`,
    description: `نساعدك في استخراج تأشيرة العلاج الطبي في ألمانيا خطوة بخطوة — من تجهيز الملف الطبي حتى الموعد في المستشفى.`,
  },
  "/ar/مستشفيات-المانيا-للعرب": {
    title: `مستشفيات ألمانيا للمرضى الدوليين | ميديكال كير جيرماني`,
    description: `كيفية الوصول إلى المستشفيات الجامعية الألمانية كمريض دولي — آلية القبول، والتخصصات المتاحة، وكيفية التنسيق.`,
  },
  "/arrhythmia-treatment-germany": {
    title: `Arrhythmia Treatment in Germany`,
    description: `Electrophysiology studies and catheter ablation for cardiac arrhythmia at German university heart centers, with structured specialist evaluation.`,
  },
  "/brain-surgery-germany": {
    title: `Brain Surgery in Germany | Neurosurgical Expertise at University Hospitals`,
    description: `Access to specialist neurosurgical evaluation and treatment at German university hospitals for complex intracranial conditions requiring surgical intervention.`,
  },
  "/brain-tumor-treatment-germany": {
    title: `Brain Tumor Treatment in Germany | Specialist Neurosurgery`,
    description: `Structured access to neurosurgical and neuro-oncological expertise at German university hospitals for brain tumor diagnosis and treatment planning.`,
  },
  "/breast-cancer-treatment-germany": {
    title: `Breast Cancer Treatment in Germany | Expert Review Before Any Decision`,
    description: `Breast cancer cases reviewed by specialist professors at certified German university breast centers. Send your medical file — response within 24 hours.`,
  },
  "/cancer-treatment-germany": {
    title: `Cancer Treatment in Germany — Specialist Oncology Access`,
    description: `Structured access to oncological expertise at German university hospitals for complex cancer cases requiring specialist evaluation, multidisciplinary review, and advanced treatment planning.`,
  },
  "/cardiology-germany": {
    title: `Cardiology in Germany — Specialist Heart Care`,
  },
  "/cardiology-treatment-germany": {
    title: `Cardiology Treatment in Germany`,
    description: `Comprehensive cardiac evaluation and intervention at German university heart centers, covering coronary artery disease, heart failure, and structural heart conditions.`,
  },
  "/colon-cancer-treatment-germany": {
    title: `Colon Cancer Treatment in Germany | Expert Review Before Any Decision`,
    description: `Colorectal cancer cases reviewed by specialist professors at certified German university centers. Send your medical file — response within 24 hours.`,
  },
  "/complex-medical-cases-germany": {
    title: `Complex Medical Cases in Germany`,
    description: `Structured coordination for diagnostically challenging or treatment-resistant cases at German university hospitals, for international patients.`,
  },
  "/congenital-heart-treatment-germany": {
    title: `Congenital Heart Disease Treatment Germany`,
    description: `Specialist pediatric and adult congenital cardiac care at German university heart centers, with structured evaluation for complex congenital heart conditions.`,
  },
  "/de/langzeit-rehabilitation-deutschland": {
    title: `Langzeit-Rehabilitation Deutschland | Nachhaltige Rehabilitationspfadkoordination`,
  },
  "/de/medizinische-zweitbewertung-deutschland": {
    title: `Medizinische Zweitbewertung Deutschland | Unabhängige klinische Zweitmeinung`,
  },
  "/de/neurologische-rehabilitation-deutschland": {
    title: `Neurologische Rehabilitation Deutschland | Schlaganfall und Hirnverletzungsrehabilitation`,
  },
  "/de/prothetik-deutschland": {
    title: `Prothetik Deutschland | Prothesenversorgung und funktionelle Rehabilitation`,
  },
  "/de/rehabilitation-deutschland": {
    title: `Rehabilitation in Deutschland | Koordination komplexer Rehabilitationspfade`,
  },
  "/de/rehabilitation-kriegsverletzungen-deutschland": {
    title: `Rehabilitation Kriegsverletzungen Deutschland | Komplexe Traumarehabilitation`,
  },
  "/de/spinale-rehabilitation-deutschland": {
    title: `Spinale Rehabilitation Deutschland | Rückenmarksrehabilitation Koordination`,
  },
  "/en/advanced-rehabilitation-germany": {
    title: `Advanced Rehabilitation in Germany | Structured Rehabilitation Pathway Coordination`,
  },
  "/en/long-term-rehabilitation-germany": {
    title: `Long-Term Rehabilitation in Germany | Sustained Rehabilitation Pathway Coordination`,
  },
  "/en/neurological-rehabilitation-germany": {
    title: `Neurological Rehabilitation in Germany | Stroke and Brain Injury Rehabilitation`,
  },
  "/en/prosthetics-germany": {
    title: `Prosthetics in Germany | Advanced Prosthetic Rehabilitation Coordination`,
  },
  "/en/second-medical-evaluation-germany": {
    title: `Second Medical Evaluation in Germany | Independent Clinical Second Opinion`,
  },
  "/en/spinal-rehabilitation-germany": {
    title: `Spinal Rehabilitation in Germany | Spinal Cord Injury Rehabilitation Coordination`,
  },
  "/en/war-injury-rehabilitation-germany": {
    title: `War Injury Rehabilitation in Germany | Complex Trauma Rehabilitation Coordination`,
  },
  "/epilepsy-treatment-germany": {
    title: `Epilepsy Treatment in Germany | Epilepsy Surgery & Specialist Centres`,
    description: `Comprehensive epilepsy evaluation including presurgical workup, resective surgery, and neuromodulation at German university epilepsy centres for drug-resistant epilepsy.`,
  },
  "/heart-surgery-germany": {
    title: `Heart Surgery in Germany`,
    description: `Open-heart and minimally invasive cardiac surgery at German university cardiac centers, including coronary bypass, valve repair, and aortic surgery.`,
  },
  "/herniated-disc-treatment-germany": {
    title: `Herniated Disc Treatment in Germany | Medical Care Germany`,
  },
  "/hip-replacement-germany": {
    title: `استبدال مفصل الورك في ألمانيا | جراحة متخصصة في برلين`,
    description: `تعاني من ألم مفصل الورك ولا تجد حلاً؟ نرتب لك تقييماً دقيقاً مع أفضل جراحي العظام في المستشفيات الجامعية الألمانية — من برلين.`,
  },
  "/hospitals-germany-international-patients": {
    title: `مستشفيات ألمانيا للمرضى الدوليين | ميديكال كير جيرماني`,
    description: `كيفية الوصول إلى المستشفيات الجامعية الألمانية كمريض دولي — آلية القبول، والتخصصات المتاحة، وكيفية التنسيق.`,
  },
  "/international-patients": {
    title: `Treatment in Germany for International Patients — Medical Care Germany`,
    description: `Patients from outside Germany may submit medical reports for specialist review. Medical coordination in Berlin helps identify the appropriate specialist and hospital.`,
  },
  "/knee-replacement-germany": {
    title: `استبدال مفصل الركبة في ألمانيا | تقييم وجراحة في برلين`,
    description: `هل تحتاج استبدال مفصل الركبة؟ نوفر لك تقييماً دقيقاً من متخصصي العظام في ألمانيا وننسق الجراحة في أفضل المستشفيات.`,
  },
  "/liver-cancer-treatment-germany": {
    title: `علاج سرطان الكبد في ألمانيا | تقييم متخصص في برلين`,
    description: `علاج سرطان الكبد في ألمانيا بأحدث البروتوكولات العلاجية — جراحة، أشعة تداخلية، وعلاج موجه. نرتب تقييمك الأورامي.`,
  },
  "/lung-cancer-treatment-germany": {
    title: `Lung Cancer Treatment in Germany`,
    description: `Multidisciplinary oncological care for lung cancer at German university cancer centers, including molecular profiling, immunotherapy, and thoracic surgery.`,
  },
  "/medical-visa-germany": {
    title: `فيزا العلاج في ألمانيا | كيف نساعدك في الحصول عليها`,
  },
  "/multiple-sclerosis-treatment-germany": {
    title: `Multiple Sclerosis Treatment in Germany | MS Centres & Disease-Modifying Therapy`,
    description: `Advanced multiple sclerosis diagnostics and disease-modifying therapy at German MS centres, with specialist evaluation for relapsing-remitting, secondary progressive, and primary progressive MS.`,
  },
  "/neurology-germany": {
    title: `Neurology Treatment in Germany — Specialist Neurological Care`,
  },
  "/neurology-treatment-germany": {
    title: `Neurology Treatment in Germany | Specialist Neurological Care at University Hospitals`,
    description: `Specialist neurological evaluation and treatment at German university hospitals for complex neurological conditions including movement disorders, demyelinating diseases, and epilepsy.`,
  },
  "/oncology-germany": {
    title: `Oncology Treatment in Germany — Cancer Specialist Care`,
  },
  "/orthopedic-surgery-germany": {
    title: `Orthopedic Surgery in Germany`,
    description: `Advanced orthopedic and musculoskeletal surgical care at German university hospitals, covering joint replacement, sports medicine, and complex reconstructive procedures.`,
  },
  "/orthopedic-treatment-germany": {
    title: `Orthopedic Treatment in Germany — Specialist Musculoskeletal Care`,
    description: `Structured access to orthopedic and musculoskeletal specialist expertise at German university hospitals for complex joint, spine, and bone conditions.`,
  },
  "/orthopedics-germany": {
    title: `Orthopedics in Germany — Specialist Bone and Joint Care`,
  },
  "/parkinson-treatment-germany": {
    title: `Parkinson`,
    description: `Specialist Parkinson`,
  },
  "/pediatric-neurology-germany": {
    title: `Pediatric Neurology in Germany | Children`,
    description: `Specialist neurological care for children and adolescents at German university paediatric centres, covering epilepsy, neuromuscular disorders, cerebral palsy, and genetic neurological diseases.`,
  },
  "/scoliosis-treatment-germany": {
    title: `Scoliosis Treatment in Germany`,
    description: `Conservative and surgical management of spinal deformity at German university spine centers, covering adolescent and adult scoliosis with structured specialist evaluation.`,
  },
  "/second-opinion-germany": {
    title: `Second Medical Opinion in Germany`,
    description: `Independent specialist review of complex diagnoses and treatment plans by German university physicians, structured for international patients.`,
  },
  "/send-medical-reports": {
    title: `Send Medical Reports for Specialist Review in Germany | Medical Care Germany`,
  },
  "/specialist-referral-germany": {
    title: `Specialist Referral in Germany`,
    description: `Coordinated referral pathways to senior German specialists across all major medical disciplines, structured for international patients and referring physicians.`,
  },
  "/spinal-stenosis-treatment-germany": {
    title: `Spinal Stenosis Treatment in Germany`,
    description: `Decompression surgery and minimally invasive options for spinal stenosis at German university spine centers, with structured specialist evaluation.`,
  },
  "/spine-surgery-germany": {
    title: `Spine Surgery in Germany`,
    description: `Advanced spinal surgical procedures at accredited German university hospitals, from minimally invasive techniques to complex spinal reconstruction.`,
  },
  "/spine-treatment-germany": {
    title: `Spine Treatment in Germany — Specialist Spinal Care`,
  },
  "/travel-for-treatment-germany": {
    title: `السفر للعلاج في ألمانيا | ميديكال كير جيرماني`,
    description: `دليل السفر للعلاج في ألمانيا — الاستعداد قبل السفر، والوثائق المطلوبة، وما يجب ترتيبه مسبقاً.`,
  },
  "/treatment-cost-germany": {
    title: `تكاليف العلاج في ألمانيا | أرقام حقيقية وشفافة`,
    description: `تكاليف العلاج في ألمانيا تختلف حسب التخصص والمستشفى — نوفر لك تقديراً دقيقاً وشفافاً قبل أي التزام مالي.`,
  },
  "/treatment-in-germany-arab-patients": {
    title: `العلاج في ألمانيا: اتخاذ القرار الطبي الصحيح للحالات المعقدة`,
    description: `بعض الحالات لا تتطلب علاجًا إضافيًا بل تتطلب إعادة تقييم دقيقة للتشخيص. في ألمانيا، يتم اتخاذ القرار الطبي بناءً على تحليل منهجي للحالة.`,
  },
  "/treatment-in-germany-for-international-patients": {
    title: `Treatment in Germany for International Patients`,
    description: `Structured medical access to Germany`,
  },
  "/trigeminal-neuralgia-treatment-germany": {
    title: `Trigeminal Neuralgia Treatment in Germany | Specialist Neurosurgery`,
    description: `Specialist evaluation and treatment for trigeminal neuralgia at German university hospitals, including microvascular decompression and radiosurgery.`,
  },
  "/university-hospital-treatment-germany": {
    title: `University Hospital Treatment in Germany`,
    description: `Structured access to Germany`,
  },
};

const SITE_URL = "https://medicalcaregermany.com";

const DEFAULT_TITLE = "Medical Care Germany | Strategic Medical Authority for Complex Cases";
const DEFAULT_DESC = "Cross-border medical authority structuring priority access to Germany\'s leading specialists. Trusted by patients from across the Arab world for complex neurological, oncological, and surgical cases.";

export function injectMeta(html: string, reqPath: string): string {
  // Normalize path: remove trailing slash (except root)
  const normalizedPath = reqPath.length > 1 ? reqPath.replace(/\/+$/, "") : reqPath;
  
  const meta = META_MAP[normalizedPath];
  
  const title = meta?.title ?? DEFAULT_TITLE;
  const description = meta?.description ?? DEFAULT_DESC;
  const ogUrl = `${SITE_URL}${normalizedPath}`;

  // Replace <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  
  // Replace meta description
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${description}" />`
  );
  
  // Replace og:title
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${title}" />`
  );
  
  // Replace og:description
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${description}" />`
  );
  
  // Replace og:url
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${ogUrl}" />`
  );
  
  // Replace twitter:title
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${title}" />`
  );
  
  // Replace twitter:description
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${description}" />`
  );

  return html;
}
