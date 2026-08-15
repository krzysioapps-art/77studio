const POLISH_SHORT_WORDS =
  /\s+(i|a|o|u|w|z|we|ze|na|do|od|po|za|ku|niż|czy|że|by|bo|to)\s+/gi;

export function formatPolishText(
  text: string,
): string {
  return text.replace(
    POLISH_SHORT_WORDS,
    " $1\u00A0",
  );
}