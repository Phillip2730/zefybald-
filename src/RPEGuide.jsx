export default function RPEGuide() {
  const guide = [
    "RPE 10 = Absolute max — Could not do more reps or weight.",
    "RPE 9.5 = Very hard — Could not do more reps, maybe a little more weight.",
    "RPE 9.0 = Very hard — Could do 1 more rep.",
    "RPE 8.5 = Hard — Could do 1 more rep, maybe 2.",
    "RPE 8.0 = Hard — Could do 2 more reps.",
    "RPE 7.5 = Tough — Could do 2 more reps, maybe 3.",
    "RPE 7.0 = Tough — Could do 3 more reps.",
    "RPE 6.5 = Challenging — Could do 3 more reps, maybe 4.",
    "RPE 6.0 = Challenging — Could do 4 more reps.",
    "RPE 5.5 = Light — Could do 4 more reps, maybe 5.",
    "RPE 5.0 = Light — Could do 5 more reps.",
    "RPE < 5 = Easy — Could do 5 or more reps."
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-sm text-center">
      <h1 className="text-2xl font-bold mb-6">RPE Guide</h1>
      <ul className="space-y-2 text-left">
        {guide.map((line, index) => (
          <li
            key={index}
            className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 text-black dark:text-white"
          >
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
