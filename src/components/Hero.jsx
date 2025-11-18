import React from "react";

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          الماريجوانا: التعريف والمنشأ والأعراض
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-blue-100/90 leading-relaxed">
          صفحة توعوية بسيطة تشرح ما هي الماريجوانا، من أين تُنتج، وما أبرز تأثيراتها الصحية قصيرة وطويلة المدى.
        </p>
        <div className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white/5 px-5 py-3 backdrop-blur border border-white/10 text-blue-100">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm">محتوى تثقيفي فقط — لا يشجّع على التعاطي</span>
        </div>
      </div>
    </header>
  );
}
