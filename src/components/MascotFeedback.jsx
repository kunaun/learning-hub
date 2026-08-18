export default function MascotFeedback({ correct }) {
  const image = correct ? "/mascot/success.png" : "/mascot/fail.png";

  return (
    <div
      className={`mt-6 overflow-hidden rounded-2xl border-2 p-4 text-center ${
        correct
          ? "border-green-200 bg-green-50"
          : "border-pink-200 bg-pink-50"
      }`}
    >
      <div className="flex justify-center">
        <img
          src={image}
          alt={correct ? "ตัวละครดีใจเมื่อทำถูก" : "ตัวละครเสียใจเมื่อทำผิด"}
          className={`h-52 w-auto object-contain ${
            correct ? "animate-bounce" : "animate-pulse"
          }`}
          onError={(event) => {
            event.currentTarget.style.display = "none";
            event.currentTarget.nextElementSibling.style.display = "block";
          }}
        />
        <div className="hidden text-7xl" aria-hidden="true">
          {correct ? "🥳" : "😭"}
        </div>
      </div>

      <p
        className={`mt-2 text-lg font-bold ${
          correct ? "text-green-700" : "text-pink-700"
        }`}
      >
        {correct ? "เย้! เก่งมากเลย! 🎉" : "ไม่เป็นไร ลองใหม่อีกครั้งนะ 💕"}
      </p>
    </div>
  );
}
