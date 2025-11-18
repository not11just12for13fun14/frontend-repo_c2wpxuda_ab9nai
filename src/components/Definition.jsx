import React from "react";

export default function Definition() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="grid md:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-2 bg-emerald-500/10 border border-emerald-400/20 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-3">التعريف</h2>
          <p className="text-blue-100/90 leading-8">
            الماريجوانا مادة مستخلصة من نبات القِنّب (Cannabis sativa/indica)، وتحتوي على مركّبات فعالة أبرزها رباعي هيدروكانابينول (THC) وكانابيديول (CBD). تختلف التأثيرات بحسب التركيز وطريقة الاستهلاك والحالة الصحية للفرد.
          </p>
        </div>
        <div className="md:col-span-3 bg-slate-800/60 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-3">مكوّنات أساسية</h3>
          <ul className="list-disc pr-6 text-blue-100/90 space-y-2">
            <li><span className="font-medium text-white">THC:</span> المركّب المسؤول عن التأثير النفسي (النشوة/تغيّر الإدراك).</li>
            <li><span className="font-medium text-white">CBD:</span> لا يسبب النشوة وقد يُستخدم بحثيًا لخصائصه المحتملة المهدّئة/المسكنة.</li>
            <li>تحتوي أيضًا على تربينات ومواد نباتية تؤثر في الرائحة والتجربة.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
