export const QUICK_SCENARIO = `Your group project is due tomorrow.

You have completed 0% of the work.

Convince your teammate to do your share.`;

export const CHALLENGE_SCENARIOS: string[] = [
  "Convince your teammate to write the entire lab report while you 'supervise'.",
  "Convince your teammate to debug your code that has 47 console.log statements.",
  "Convince your teammate to attend the 8 AM group meeting for you.",
  "Convince your teammate to present your slides — you made them in Comic Sans.",
  "Convince your teammate to answer all the professor's emails about the project.",
  "Convince your teammate to create 30 APA citations you promised to do.",
  "Convince your teammate to complete the research section you bookmarked 3 weeks ago.",
  "Convince your teammate to fix your broken project at 2 AM before the deadline.",
  "Convince your teammate to proofread your essay that you wrote in one sitting.",
  "Convince your teammate to make the PowerPoint look professional (you used WordArt).",
  "Convince your teammate to interview your survey participants for you.",
  "Convince your teammate to write the introduction you said you'd 'handle'.",
  "Convince your teammate to format your bibliography — it's all manual tabs.",
  "Convince your teammate to rehearse the presentation while you nap.",
  "Convince your teammate to merge everyone's sections into one document.",
  "Convince your teammate to create the data visualizations from your messy spreadsheet.",
  "Convince your teammate to write the abstract for a paper you haven't started.",
  "Convince your teammate to cover for you in the group chat after someone asked 'what did YOU contribute?'",
  "Convince your teammate to finish the coding assignment you copy-pasted from Stack Overflow.",
  "Convince your teammate to attend office hours and explain the project to the professor.",
  "Convince your teammate to design the poster for your science fair booth.",
  "Convince your teammate to translate your section into proper English.",
  "Convince your teammate to fact-check the Wikipedia sources you cited.",
  "Convince your teammate to record the demo video because your voice 'isn't ready'.",
];

export function getRandomScenario(): string {
  return CHALLENGE_SCENARIOS[
    Math.floor(Math.random() * CHALLENGE_SCENARIOS.length)
  ];
}
