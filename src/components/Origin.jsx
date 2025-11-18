import React from "react";

export default function Origin() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">من أين تُنتج؟</h2>
        <p className="text-blue-100/90 leading-8 mb-4">
          يُنتَج القِنّب من نبات القِنّب الهندي وأنواعه، حيث تُستخدم الأزهار (البراعم) والأوراق الغنية بالراتنج لاستخلاص الماريجوانا. يمكن زراعته في البيوت البلاستيكية أو في الهواء الطلق، ويؤثر نوع السلالة وطرق الزراعة والتجفيف على القوة والتركيب الكيميائي.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl bg-emerald-500/10 border border-emerald-400/20 p-4">
            <h4 className="text-white font-semibold mb-2">أجزاء النبات المستخدمة</h4>
            <ul className="list-disc pr-6 text-blue-100/90 space-y-1">
              <li>الأزهار/البراعم الغنية بالكانابينويدات</li>
              <li>الأوراق المحيطة</li>
              <li>الراتنج المستخلص (قد ينتج الحشيش)</li>
            </ul>
          </div>
          <div className="rounded-xl bg-blue-500/10 border border-blue-400/20 p-4">
            <h4 className="text-white font-semibold mb-2">طرق الاستهلاك الشائعة</h4>
            <ul className="list-disc pr-6 text-blue-100/90 space-y-1">
              <li>التدخين أو التبخير</li>
              <li>المأكولات/الزيوت المحتوية على مستخلصات</li>
              <li>القطرات أو الرشاشات</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
