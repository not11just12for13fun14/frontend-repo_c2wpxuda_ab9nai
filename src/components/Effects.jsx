import React from "react";

export default function Effects() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">ما هي الأعراض والتأثيرات؟</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-amber-500/10 border border-amber-400/20 p-5">
            <h3 className="text-white font-semibold mb-2">تأثيرات قصيرة المدى</h3>
            <ul className="list-disc pr-6 text-blue-100/90 space-y-2">
              <li>النشوة وتغيّر المزاج/الإدراك</li>
              <li>جفاف الفم واحمرار العينين</li>
              <li>زيادة الشهية وبطء ردود الفعل</li>
              <li>تأثر الذاكرة قصيرة الأمد والانتباه</li>
              <li>قلق أو هلع لدى بعض الأشخاص خصوصًا بجرعات عالية</li>
            </ul>
          </div>
          <div className="rounded-xl bg-rose-500/10 border border-rose-400/20 p-5">
            <h3 className="text-white font-semibold mb-2">مخاطر وتأثيرات محتملة طويلة المدى</h3>
            <ul className="list-disc pr-6 text-blue-100/90 space-y-2">
              <li>اعتمادية نفسية ومشكلات في التنظيم اليومي عند الاستخدام المزمن</li>
              <li>تأثيرات على الصحة النفسية لدى من لديهم قابلية (مثل تفاقم القلق/الذهان)</li>
              <li>تأثيرات تنفسية عند التدخين المتكرر</li>
              <li>ضعف الذاكرة/الوظائف التنفيذية مع التعاطي الثقيل</li>
              <li>التأثير على النمو الدماغي للمراهقين</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-blue-200/80 mt-4">
          تختلف الأعراض حسب الجرعة، طريقة الاستهلاك، العمر، وحالة الصحة الجسدية والنفسية.
        </p>
      </div>
    </section>
  );
}
