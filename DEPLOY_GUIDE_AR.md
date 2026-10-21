# دليل رفع موقع KrakenTic على GitHub Pages

**الحالة:** الملفات جاهزة كموقع تجريبي محلي، لكن **لا تنشر سياسة الخصوصية باعتبارها معتمدة** قبل إقفال مراجعات البيانات الموضّحة في `REVIEW_BEFORE_PUBLISH.md`.

## معلومات الموقع

- الحساب: `DesertDemons`
- المستودع المقترح: `krakentic-oauth-site` (Public)
- الدومين المقترح: `connect.krakentic.com`
- الاستضافة: GitHub Pages (Project Site)
- البريد العام: `Krakenhmk@gmail.com`
- مصدر النشر في GitHub Pages: الفرع `main` والمجلد `/docs`
- عميل OAuth الحالي (حسب مالك المشروع، دون تحقق من هذا المستودع): النوع **Desktop / Installed application** والاسم **Kraken Hermes v2**
- إنشاء عميل OAuth أو تجديد الـtokens **ليس** جزءاً من هذه المهمة.
- نظام Hermes وn8n والـVPS يبقون منفصلين بالكامل عن هذا الموقع.

## الخطوات بعد مراجعة واعتماد المحتوى

1. أنشئ المستودع العام باسم `krakentic-oauth-site` في حساب `DesertDemons` إن لم يكن موجوداً.
2. ادمج التغييرات المعتمدة في الفرع `main` (بعد موافقة المالك فقط). ملفات الموقع موجودة داخل المجلد `docs/`: `docs/index.html` و`docs/privacy/` و`docs/terms/` و`docs/assets/` و`docs/.nojekyll` و`docs/CNAME`. أما ملفات التوثيق (`README.md` وهذا الدليل و`REVIEW_BEFORE_PUBLISH.md`) فتبقى خارج `docs/` ولا تُنشر.
3. من المستودع افتح **Settings → Pages** واختر **Deploy from a branch**، ثم `main` و`/docs` واضغط Save.
4. تحت **Custom domain** تأكد من قيمة `connect.krakentic.com` واضغط Save. ملف `CNAME` يجب أن يبقى في جذر المجلد `docs/`، وقد ينشئه GitHub أو يحدّثه هناك تلقائياً.
5. بعد حفظ الدومين على GitHub فقط، ادخل Hostinger DNS وأضف سجل جديد **CNAME**: الاسم `connect` والقيمة `desertdemons.github.io` وTTL = `300` إن توفر. لا تضف `https://` ولا اسم الـRepository إلى قيمة السجل.
6. **لا تعدل أو تحذف** سجلات `@` أو `www` أو `n8n` أو `dashboard` أو سجل TXT الخاص بتوثيق ملكية الدومين الذي نجح سابقاً.
7. انتظر انتشار DNS وصدور شهادة HTTPS؛ ثم فعّل **Enforce HTTPS** في GitHub Pages.
8. افتح هذه الروابط وتأكد من عملها:
   - `https://connect.krakentic.com/`
   - `https://connect.krakentic.com/privacy/`
   - `https://connect.krakentic.com/terms/`
9. بعد التأكد من دقة سياسة الخصوصية، أدخل هذه الروابط في Google Cloud → Google Auth Platform → Branding. الدومين المصرّح به هو `krakentic.com`؛ التحقق لدى GitHub لا يغني عن Google Search Console إذا طلبته Google.
10. لا تستخدم موقع GitHub Pages لاستقبال OAuth callback أو tokens. إنشاء عميل OAuth أو تجديد الـrefresh token **ليس جزءاً من هذه المهمة**، ويتم كمرحلة منفصلة لاحقة بعد موافقة المالك.

## مرحلة المراجعة الحالية

اللي تحتاجه الحين: راجع المحتوى والتصميم. إرسال الملفات إلى المستودع وإضافة DNS ونشر OAuth كلها إجراءات منفصلة وتحتاج موافقتك قبل التنفيذ.
