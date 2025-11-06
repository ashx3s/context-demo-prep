export default function Button({ text, onClick, variant = "primary" }) {
  const variants = {
    primary:
      "bg-blue-500 hover:bg-blue-700 dark:bg-orange-500 hover:dark:bg-orange-700",
    secondary:
      "bg-gray-500 hover:bg-gray-700 dark:bg-gray-600 hover:dark:bg-gray-800",
  };
  return (
    <button
      onClick={onClick}
      className={`p-4 ${variants[variant]} rounded-full mx-2 cursor-pointer`}
    >
      {text}
    </button>
  );
}
