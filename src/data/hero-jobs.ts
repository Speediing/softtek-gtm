export type HeroJobIcon =
  | "outbound"
  | "research"
  | "follow-up"
  | "deal-desk"
  | "pipeline"
  | "renewal"
  | "competitive"
  | "chief-of-staff";

export type HeroJob = {
  name: string;
  icon: HeroJobIcon;
  account: string;
  signal: string;
  work: string;
  result: string;
  user: string;
  bot: string;
};

export const HERO_JOBS: HeroJob[] = [
  {
    name: "Room",
    icon: "follow-up",
    account: "Sample client",
    signal: "A live client review started",
    work: "Granola is in. I am mapping one high-toil workload and a Softtek baseline onto the open deck. FRIDA stays in Cursor.",
    result: "Draft slides ready for you",
    user: "update the last slides",
    bot: "drafts are in the deck. nothing sent.",
  },
  {
    name: "Paper",
    icon: "deal-desk",
    account: "Sample client",
    signal: "A delivery lead asked about private NPM access",
    work: "I marked private NPM access as open and drafted the details product needs to confirm. Origin is a GitHub sync, not a move.",
    result: "Draft with open question ready",
    user: "send the reply",
    bot: "still a draft until you tap send.",
  },
  {
    name: "Signal",
    icon: "outbound",
    account: "Sample client",
    signal: "The POC still needs one high-toil workload",
    work: "Softtek asked for one workload and a Softtek baseline before a wider Cursor-funded POC. I drafted the expansion brief and outreach.",
    result: "Brief and outreach drafts ready",
    user: "send the brief to the account owner",
    bot: "parked. you send.",
  },
  {
    name: "Follow-up",
    icon: "research",
    account: "Sample client",
    signal: "The review ended",
    work: "I captured what the room covered. Grok Bot was already demoed on 8/21. The recap names the workload, FRIDA staying, and the open product questions.",
    result: "Recap draft ready",
    user: "share the recap with the delivery lead",
    bot: "draft is waiting. nothing posted.",
  },
  {
    name: "Account research",
    icon: "pipeline",
    account: "Sample client",
    signal: "Evaluation notes were added",
    work: "I read the notes. Private NPM access is open, Origin is a GitHub sync, and the wider POC waits on a Softtek baseline.",
    result: "Research note ready",
    user: "brief me before the next review",
    bot: "brief is in the thread. i will keep it current.",
  },
  {
    name: "POC desk",
    icon: "renewal",
    account: "Sample client",
    signal: "Ask to widen the Cursor-funded POC",
    work: "I held the wider ask. Softtek wants one high-toil workflow and a Softtek baseline first. The draft says that plainly.",
    result: "POC path note ready",
    user: "keep the wider ask on hold",
    bot: "held. the note waits for you.",
  },
  {
    name: "Origin",
    icon: "competitive",
    account: "Sample client",
    signal: "A delivery lead asked if Origin is a migration",
    work: "Origin is a GitHub sync. Repos stay put. FRIDA already runs in Cursor and stays next to it.",
    result: "Sourced answer ready",
    user: "send that to the delivery lead",
    bot: "draft only. you send.",
  },
  {
    name: "Chief of staff",
    icon: "chief-of-staff",
    account: "Sample client",
    signal: "Three next steps are still open",
    work: "I gathered the review notes, the product questions, and the POC hold. Room, Paper, and Signal have drafts. You approve.",
    result: "Next-step list ready",
    user: "keep the drafts with me",
    bot: "they stay drafts. nothing left the machine.",
  },
];
