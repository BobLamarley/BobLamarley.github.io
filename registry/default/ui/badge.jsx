const variants = {
  neutral:
    "border-slate-200 bg-white text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300",
  green:
    "border-lime-200 bg-lime-50 text-lime-900 dark:border-lime-900 dark:bg-lime-950/50 dark:text-lime-200",
  blue:
    "border-sky-200 bg-sky-50 text-sky-900 dark:border-sky-900 dark:bg-sky-950/50 dark:text-sky-200",
};

export function Badge({ variant = "neutral", className = "", ...props }) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-md border px-2 py-1 font-mono text-[10px] leading-none",
        variants[variant] ?? variants.neutral,
        className,
      ].join(" ")}
      {...props}
    />
  );
}
