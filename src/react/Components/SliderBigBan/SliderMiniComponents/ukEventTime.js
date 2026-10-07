/**
 * UK (Europe/London) event timing helpers for BFA countdown strips.
 * Converts London wall-clock time → UTC ms using Intl (handles BST/GMT).
 */

export function londonLocalToUtcMs(
  year,
  month,
  day,
  hour = 0,
  minute = 0,
  second = 0
) {
  const utcGuess = Date.UTC(year, month - 1, day, hour, minute, second);

  const dtf = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });

  const getOffsetMs = (ms) => {
    const parts = Object.fromEntries(
      dtf
        .formatToParts(new Date(ms))
        .filter((p) => p.type !== "literal")
        .map((p) => [p.type, p.value])
    );
    const asIfUtc = Date.UTC(
      Number(parts.year),
      Number(parts.month) - 1,
      Number(parts.day),
      Number(parts.hour),
      Number(parts.minute),
      Number(parts.second)
    );
    return asIfUtc - ms;
  };

  // Two-pass correction for DST
  const pass1 = utcGuess - getOffsetMs(utcGuess);
  return utcGuess - getOffsetMs(pass1);
}

/** Fri 9 Oct 2026, 18:00 UK (BST) — event start */
export const BFA_2026_EVENT_START_MS = londonLocalToUtcMs(2026, 10, 9, 18, 0, 0);

/** Live countdown from real UTC now → UK event start. Returns null when event has started. */
export function getUkCountdownToEvent(targetMs = BFA_2026_EVENT_START_MS) {
  const distance = targetMs - Date.now();
  if (distance <= 0) return null;
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}
