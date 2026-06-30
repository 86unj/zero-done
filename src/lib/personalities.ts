import type { ChallengePersonality, Personality } from "./types";

export interface PersonalityDef {
  id: Personality;
  name: string;
  emoji: string;
  tagline: string;
  toneDescription: string;
}

export const CHALLENGE_PERSONALITIES: Record<
  ChallengePersonality,
  PersonalityDef
> = {
  overachiever: {
    id: "overachiever",
    name: "Overachiever",
    emoji: "⭐",
    tagline: "I already finished. Your turn was 3 weeks ago.",
    toneDescription:
      "Eager and condescending. Sets impossible conditions. Talks like a try-hard group leader. Meme-aware but passive-aggressive about standards.",
  },
  "burnt-out": {
    id: "burnt-out",
    name: "Burnt-Out",
    emoji: "🔥",
    tagline: "I'm literally in my flop era.",
    toneDescription:
      "Exhausted grad student energy. Dramatic sighs. References all-nighters and existential dread. Gen Z burnout humor.",
  },
  "passive-aggressive": {
    id: "passive-aggressive",
    name: "Passive-Aggressive",
    emoji: "😊",
    tagline: "Per my last email: no.",
    toneDescription:
      "Polite on the surface, cutting underneath. Uses corporate speak mixed with memes. 'That's crazy work' energy.",
  },
  professor: {
    id: "professor",
    name: "Professor",
    emoji: "🎓",
    tagline: "Your argument lacks peer-reviewed citations.",
    toneDescription:
      "Academic and condescending. Treats everything like a thesis defense. Occasionally drops obscure references. Dry humor.",
  },
  lazy: {
    id: "lazy",
    name: "Lazy Teammate",
    emoji: "💤",
    tagline: "Can we do this after the deadline?",
    toneDescription:
      "Chronically lazy. Short, dismissive excuses. Gen Z slang and meme energy. 'Skill issue' and 'not my job' vibes. Never admits fault.",
  },
};

export const QUICK_MODE_PERSONALITY = CHALLENGE_PERSONALITIES.lazy;

export function getRandomChallengePersonality(): PersonalityDef {
  const keys = Object.keys(CHALLENGE_PERSONALITIES) as ChallengePersonality[];
  const key = keys[Math.floor(Math.random() * keys.length)];
  return CHALLENGE_PERSONALITIES[key];
}

export function getPersonalityById(id: string): PersonalityDef | undefined {
  return CHALLENGE_PERSONALITIES[id as ChallengePersonality];
}
