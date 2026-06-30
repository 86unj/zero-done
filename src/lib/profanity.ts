import { Filter } from "bad-words";

const filter = new Filter();

export function filterProfanity(text: string): string {
  return filter.clean(text);
}
