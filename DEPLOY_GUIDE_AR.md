# دليل رفع موقع KrakenTic على GitHub Pages

**الحالة:** الملفات جاهزة كموقع تجريبي محلي، لكن **لا تنشر سياسة الخصوصية باعتبارها معتمدة** قبل إقفال مراجعات البيانات الموضّحة في `REVIEW_BEFORE_PUBLISH.md`.

## معلومات الموقع

- الحساب: `DesertDemons`
- المستودع المقترح: `krakentic-oauth-site` (Public)
- الدومين المقترح: `connect.krakentic.com`
- الاستضافة: GitHub Pages (Project Site)
- البريد العام: `Krakenhmk@gmail.com`
- نظام Hermes وn8n والـVPS يبقون منفصلين بالكامل عن هذا الموقع.

## الخطوات بعد مراجعة واعتماد المحتوى

1. أنشئ المستودع العام باسم `krakentic-oauth-site` في حساب `DesertDemons` إن لم يكن موجوداً.
2. فك ضغط الحزمة وارفع **الملفات والمجلدات الموجودة داخلها** إلى جذر المستودع، بما فيها `index.html` و`privacy/` و`terms/` و`assets/` و`.nojekyll` و`CNAME`.
3. من المستودع افتح **Settings → Pages** واختر **Deploy from a branch**، ثم `main` و`/(root)` واضغط Save.
4. تحت **Custom domain** تأكد من قيمة `connect.krakentic.com` واضغط Save. GitHub قد ينشئ أو يحدث ملف `CNAME` تلقائياً.
5. بعد حفظ الدومين على GitHub فقط، ادخل Hostinger DNS وأضف سجل جديد **CNAME**: الاسم `connect` والقيمة `desertdemons.github.io` وTTL = `300` إن توفر. لا تضف `https://` ولا اسم الـRepository إلى قيمة السجل.
6. **لا تعدل أو تحذف** سجلات `@` أو `www` أو `n8n` أو `dashboard` أو سجل TXT الخاص بتوثيق ملكية الدومين الذي نجح سابقاً.
7. انتظر انتشار DNS وصدور شهادة HTTPS؛ ثم فعّل **Enforce HTTPS** في GitHub Pages.
8. افتح هذه الروابط وتأكد من عملها:
   - `https://connect.krakentic.com/`
   - `https://connect.krakentic.com/privacy/`
   - `https://connect.krakentic.com/terms/`
9. بعد التأكد من دقة سياسة الخصوصية، أدخل هذه الروابط في Google Cloud → Google Auth Platform → Branding. الدومين المصرّح به هو `krakentic.com`؛ التحقق لدى GitHub لا يغني عن Google Search Console إذا طلبته Google.
10. لا تستخدم موقع GitHub Pages لاستقبال OAuth callback أو tokens. ضبط Hermes OAuth وإصدار refresh token جديد **مرحلة منفصلة لاحقة**.

## مرحلة المراجعة الحالية

اللي تحتاجه الحين: راجع المحتوى والتصميم. إرسال الملفات إلى المستودع وإضافة DNS ونشر OAuth كلها إجراءات منفصلة وتحتاج موافقتك قبل التنفيذ.
