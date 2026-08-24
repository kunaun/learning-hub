export default function MascotFeedback({
  correct,
  explanation,
  streak = 0,
  finished = false,
  score = 0,
  total = 0,
}) {
  let mascot = correct ? "success.png" : "fail.png";
  let title = correct ? "ถูกต้อง!" : "ยังไม่ถูกนะ!";
  let subtitle = correct
    ? "เก่งมากเลย! คำตอบของหนูถูกต้องแล้ว"
    : "ไม่เป็นไร ลองใหม่อีกครั้งนะ";

  let titleColor = correct ? "text-green-700" : "text-red-600";

  let cardBg = correct
    ? "bg-gradient-to-br from-green-50 to-lime-50"
    : "bg-gradient-to-br from-red-50 to-rose-50";

  let borderColor = correct
    ? "border-green-300"
    : "border-red-300";

  // ทำครบแบบทดสอบ
  if (finished) {
    const percentage = total > 0 ? score / total : 0;

    mascot = percentage >= 0.8
      ? "winner.png"
      : "celebrate.png";

    title = "ทำครบแล้ว! 🎉";

    subtitle =
      percentage >= 0.8
        ? "สุดยอดมาก! วันนี้ทำได้ดีมากเลย"
        : "เก่งมากที่ทำจนจบ!";

    titleColor = "text-purple-700";
    cardBg = "bg-gradient-to-br from-purple-50 to-pink-50";
    borderColor = "border-purple-300";
  }

  // ตอบถูกติดต่อกัน 3 ข้อขึ้นไป
  else if (correct && streak >= 3) {
    mascot = "great-job.png";
    title = "เก่งมาก! 🔥";
    subtitle = `ตอบถูกติดต่อกัน ${streak} ข้อแล้ว!`;
  }

  return (
    <div
      className={`mt-5 overflow-hidden rounded-3xl border-2 ${borderColor} ${cardBg} shadow-sm`}
    >
      {/* หัวข้อ */}
      <div className="px-5 pt-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-3xl">
            {finished ? "🎉" : correct ? "✅" : "❌"}
          </span>

          <h3 className={`text-2xl font-extrabold ${titleColor}`}>
            {title}
          </h3>

          <span className="text-2xl">
            {finished ? "✨" : correct ? "✨" : "💦"}
          </span>
        </div>

        <p className="mt-1 text-base font-semibold text-slate-700">
          {subtitle}
        </p>
      </div>

      {/* ตัว Mascot */}
      <div className="relative flex h-52 items-center justify-center sm:h-56">
        {correct && !finished && (
          <>
            <span className="absolute left-[18%] top-8 text-2xl">
              ♪
            </span>
            <span className="absolute right-[18%] top-10 text-2xl">
              ♫
            </span>
            <span className="absolute left-[25%] bottom-8 text-xl">
              ✨
            </span>
            <span className="absolute right-[25%] bottom-10 text-xl">
              ⭐
            </span>
          </>
        )}

        {!correct && !finished && (
          <>
            <span className="absolute left-[20%] top-8 text-2xl">
              💧
            </span>
            <span className="absolute right-[20%] top-12 text-2xl">
              💧
            </span>
          </>
        )}

        {finished && (
          <>
            <span className="absolute left-[18%] top-6 text-2xl">
              🎊
            </span>
            <span className="absolute right-[18%] top-8 text-2xl">
              🎉
            </span>
          </>
        )}

        <img
          src={`/mascot/${mascot}`}
          alt=""
          className={`relative z-10 max-h-48 w-auto max-w-[72%] object-contain sm:max-h-52 ${
            correct || finished
              ? "animate-bounce"
              : "animate-pulse"
          }`}
        />
      </div>

      {/* คำอธิบาย */}
      <div className="mx-4 mb-4 rounded-2xl bg-white/85 px-4 py-3 shadow-sm">
        <p className={`font-bold ${titleColor}`}>
          📖 คำอธิบาย
        </p>

        <p className="mt-1 text-sm leading-relaxed text-slate-700">
          {explanation}
        </p>
      </div>
    </div>
  );
}