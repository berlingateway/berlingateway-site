# معايير التصميم والجودة — Medical Care Germany
## يجب قراءة هذا الملف قبل أي مهمة جديدة

---

## الألوان الإلزامية
--navy:       #0f1f35
--navy-mid:   #162840
--gold:       #b8902a
--gold-dark:  #8a6a1a
--bg:         #ffffff
--bg-soft:    #f8f7f4
--bg-section: #f3f1ec
--text:       #1a1a2e
--text-mid:   #3a3a4a
--text-muted: #6b7280
--border:     #e5e0d5
--green:      #25D366

لا استثناءات. أي صفحة جديدة تستخدم هذه المتغيرات فقط.

---

## بنية كل صفحة عربية — إلزامية
1. Topbar (هاتف + إيميل + روابط اللغات)
2. Nav (شعار + زر واتساب أخضر)
3. Breadcrumb
4. Hero داكن (#162840) مع H1 أبيض وتوهج ذهبي خفي
5. Trust strip (12+ عام، برلين، شاريتيه، عربي)
6. محتوى الصفحة
7. FAQ (minimum 4 أسئلة)
8. CTA block داكن (Tally + واتساب)
9. Related pages (minimum 3 روابط داخلية)
10. Footer كامل

المرجع البصري: /ar/treatment-germany-libya/
المرجع الكودي: client/public/ar/treatment-germany-libya/index.html

---

## الخطوط
- العربية: IBM Plex Sans Arabic
- الإنجليزية: Inter + Playfair Display

---

## SEO — إلزامي لكل صفحة جديدة
- [ ] Canonical يطابق الـ URL بالضبط
- [ ] lang="ar" dir="rtl" للعربية / lang="en" للإنجليزية
- [ ] hreflang (ar + en + x-default)
- [ ] URL مضاف في sitemap.xml
- [ ] Route مضاف في App.tsx
- [ ] FAQ Schema JSON-LD
- [ ] Internal links (minimum 3)

---

## روابط ثابتة
- Tally form: https://tally.so/r/68MrBP
- WhatsApp: https://wa.me/4915781497451
- Email: info@medicalcaregermany.com
- Tel: +49 30 25730875
- Address: Perleberger Str. 41, Berlin

---

## Checklist قبل كل checkpoint
- [ ] الألوان مطابقة للمعايير أعلاه
- [ ] بنية الصفحة كاملة (10 أقسام)
- [ ] SEO مكتمل
- [ ] TypeScript: 0 أخطاء
- [ ] Build: PASSED
- [ ] screenshot للصفحة مرفق

إذا أي نقطة ناقصة — لا ترسل checkpoint.

---

## صفحات الجيو — Template موحد
لكل صفحة دولة جديدة، استخدم:
client/src/pages/seo/_GeoPageTemplate.tsx

لا تنشئ HTML جديداً من الصفر.

---

## المحتوى المحوري — إلزامي في كل صفحة
هذه الجملة أو معناها يجب أن تظهر في كل صفحة عربية
في الموقع — في الـ Hero أو في قسم منفصل:

"إذا لم تنجح العملية السابقة — هذا تحديداً ما نتخصص فيه"

### لماذا هذا مهم:
المريض الذي وصل إلينا بعد عملية فاشلة هو الجمهور
الأساسي لـ Medical Care Germany في جميع الدول.
هذا الشخص:
- فقد ثقته بالطب المحلي
- خائف من عملية ثانية
- يحتاج ضماناً وليس فقط مستشفى
- أول رسالته: "أجريت عملية ولم تنجح، هل ألمانيا تساعدني؟"

### التطبيق:
في كل صفحة جيو جديدة (السعودية، الإمارات، الكويت...)
أضف قسماً أو بطاقة بهذا المعنى:

العنوان: "العملية لم تنجح؟"
النص: "كثير من مرضانا وصلونا بعد تجربة علاجية صعبة
في بلدهم أو خارجه. الرأي الطبي الثاني في ألمانيا
ليس خياراً — أحياناً هو الفرق."
الرابط: /ar/second-opinion-germany

---

آخر تحديث: يونيو 2026
