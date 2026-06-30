export const EXCUSE_SEEDS: string[] = [
  "My laptop is in recovery after your last 'quick fix'.",
  "I'm emotionally unavailable due to prior group project trauma.",
  "I reached my limit on Claude",
  "My GPU is grieving and needs space.",
  "I'm in a meeting with my other group project. It's complicated.",
  "My calendar said 'touch grass' and I have to obey.",
  "I'm buffering. ETA: after graduation.",
  "My mom said no and she's scarier than the professor.",
  "I already carried the group in a past life. Karmic debt paid.",
  "I'm on airplane mode emotionally.",
  "My sleep schedule filed a restraining order against deadlines.",
  "I would, but my horoscope said 'skill issue incoming'.",
  "I'm doing side quests rn. Main quest is not it.",
  "My brain is at 3% and not accepting chargers.",
  "I promised my therapist I wouldn't enable your procrastination.",
  "The group chat muted me and I respect boundaries.",
  "I'm in my villain arc and villains don't do citations.",
  "My computer crashed and took my will to live with it.",
  "I have a prior engagement: literally nothing.",
  "The professor's rubric gave me the ick.",
  "My contribution was emotional support. Over quota.",
  "I got peer-reviewed by my bed. It rejected me.",
  "I'm not lazy, I'm energy efficient.",
  "Your message triggered my fight-or-flight. I chose flight.",
  "I would help but that's crazy work and I'm not crazy.",
];

export function getRandomExcuseSeeds(count = 5): string[] {
  const shuffled = [...EXCUSE_SEEDS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
