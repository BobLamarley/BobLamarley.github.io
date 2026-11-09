export function Card({ className = "", ...props }) {
  return (
    <article
      className={[
        "rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm",
        "dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100",
        className,
      ].join(" ")}
      {...props}
    />
  );
}

export function CardHeader({ className = "", ...props }) {
  return <div className={["space-y-1.5 p-5", className].join(" ")} {...props} />;
}

export function CardTitle({ className = "", ...props }) {
  return (
    <h3
      className={["font-semibold tracking-tight", className].join(" ")}
      {...props}
    />
  );
}

export function CardDescription({ className = "", ...props }) {
  return (
    <p
      className={["text-sm leading-relaxed text-slate-600 dark:text-slate-400", className].join(" ")}
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }) {
  return <div className={["px-5 pb-5", className].join(" ")} {...props} />;
}

export function CardFooter({ className = "", ...props }) {
  return (
    <div
      className={["flex items-center gap-2 border-t border-slate-200 px-5 py-3 dark:border-slate-800", className].join(" ")}
      {...props}
    />
  );
}
