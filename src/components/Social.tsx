import { cn } from "@/utils/cn";
import { company } from "@/data/site";
import { socialIcons, type SocialIconName } from "./icons";

export const activeSocial = company.social.filter((s) => s.show && s.href);

/** Icon-only row — used in the footer and compact spots. */
export function SocialIcons({
  tone = "dark",
  size = "md",
  className,
}: {
  tone?: "light" | "dark";
  size?: "sm" | "md";
  className?: string;
}) {
  const box = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const glyph = size === "sm" ? "h-[15px] w-[15px]" : "h-[17px] w-[17px]";

  return (
    <ul className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {activeSocial.map((s) => {
        const Icon = socialIcons[s.icon as SocialIconName];
        return (
          <li key={s.label}>
            <a
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              title={`${s.label}${s.handle ? ` — ${s.handle}` : ""}`}
              className={cn(
                "group relative flex items-center justify-center border transition-colors duration-300",
                box,
                tone === "dark"
                  ? "border-white/15 text-paper/70 hover:border-paper hover:bg-paper hover:text-ink"
                  : "border-ink/15 text-ink/70 hover:border-ink hover:bg-ink hover:text-paper"
              )}
            >
              <span className="sr-only">
                {s.label}
                {s.handle ? ` — ${s.handle}` : ""}
              </span>
              <Icon className={glyph} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/** Labelled rows — used on the contact page where the handle matters. */
export function SocialList({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <ul className={cn("border-t", tone === "dark" ? "border-white/10" : "border-ink/10", className)}>
      {activeSocial.map((s) => {
        const Icon = socialIcons[s.icon as SocialIconName];
        return (
          <li key={s.label}>
            <a
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={cn(
                "group flex items-center gap-4 border-b py-4 transition-colors duration-300",
                tone === "dark" ? "border-white/10 hover:text-paper" : "border-ink/10 hover:text-ink"
              )}
            >
              <Icon className={cn("h-4 w-4 shrink-0", tone === "dark" ? "text-mute-2" : "text-mute")} />
              <span
                className={cn(
                  "font-mono text-[10.5px] uppercase tracking-[0.2em]",
                  tone === "dark" ? "text-mute-2" : "text-mute"
                )}
              >
                {s.label}
              </span>
              <span
                className={cn(
                  "ml-auto text-[15px] transition-transform duration-500 ease-[var(--ease-expo)] group-hover:-translate-x-1",
                  tone === "dark" ? "text-paper/85" : "text-ink/85"
                )}
              >
                {s.handle || "Visit"}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
