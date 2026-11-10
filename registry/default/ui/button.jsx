const variants = {
  primary:
    "bg-slate-950 text-white hover:bg-slate-800 dark:bg-lime-300 dark:text-slate-950 dark:hover:bg-lime-200",
  secondary:
    "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800",
  ghost:
    "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",
  accent:
    "bg-lime-300 text-slate-950 hover:bg-lime-200 dark:bg-lime-300 dark:text-slate-950 dark:hover:bg-lime-200",
};

const sizes = {
  sm: "min-h-8 px-3 text-xs",
  md: "min-h-10 px-4 text-sm",
  lg: "min-h-12 px-5 text-base",
};

export function Button({
  as: Element = "button",
  variant = "primary",
  size = "md",
  className = "",
  type,
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant] ?? variants.primary,
    sizes[size] ?? sizes.md,
    className,
  ].join(" ");

  return (
    <Element
      className={classes}
      {...(Element === "button" ? { type: type ?? "button" } : {})}
      {...props}
    />
  );
}
