import type { Artifact, CroJob, SlideCard } from "./types";

export const CLIENT_TAIL_SLIDES: SlideCard[] = [
  {
    n: 4,
    kicker: "Covered · live",
    voice: "them",
    title: "One high-toil workload",
    body: "Start with one workload and a Softtek baseline before any wider Cursor-funded POC.",
  },
  {
    n: 5,
    kicker: "Mapped live",
    voice: "us",
    title: "Keep FRIDA in place",
    body: "FRIDA already runs inside Cursor. The next step sits next to it, not on top of it.",
  },
  {
    n: 6,
    kicker: "Covered · live",
    voice: "them",
    title: "Private packages",
    body: "Private NPM package access is on the table. Origin as a GitHub sync is the other product question.",
  },
  {
    n: 7,
    kicker: "Mapped live",
    voice: "us",
    title: "Grok Bot, already seen",
    body: "Grok Bot was demoed on 8/21. This deck is the live review, not a first look.",
  },
];

export const CLIENT_PRODUCT_REPLY: Extract<Artifact, { kind: "redlines" }> = {
  kind: "redlines",
  title: "Product questions for the POC",
  paperTitle: "Questions to answer",
  from: "Softtek evaluation notes · open",
  marks: [
    {
      text: "Can Cursor reach our private NPM packages?",
      note: "Still open. Confirm the registry host, auth method, and a test repository with the delivery lead before writing the answer.",
      take: false,
    },
    {
      text: "Is Origin a GitHub migration?",
      note: "No. Origin is a GitHub sync. Repos stay where they are. The sync keeps Cursor current.",
      take: true,
    },
    {
      text: "Does this replace FRIDA?",
      note: "No. FRIDA already runs inside Cursor and stays. Grok Bot is extra background work, not a swap.",
      take: true,
    },
    {
      text: "Can we widen the Cursor-funded POC now?",
      note: "Not yet. Softtek asked for one high-toil workload with a Softtek baseline first. Hold the wider ask until that baseline exists.",
      take: false,
    },
  ],
  reply: {
    to: "the delivery lead",
    subject: "Private packages, Origin, FRIDA, and the POC path",
    body: "Hi,\n\nPrivate NPM access is still open. To get a sourced answer, please send the registry host, auth method, and a test repository.\n\nOrigin is a GitHub sync, not a migration. Repositories stay put.\n\nFRIDA stays in Cursor. Grok Bot sits next to it.\n\nA wider Cursor-funded POC waits on one high-toil workload with a Softtek baseline. Happy to help choose that workload.\n\nDraft only until you send.\n\nBest,",
  },
};

export const CLIENT_EXPANSION: Extract<Artifact, { kind: "outbound" }> = {
  kind: "outbound",
  title: "Sample client expansion",
  account: "Sample client",
  hypothesis: [
    {
      k: "Why us",
      body: "FRIDA already runs inside Cursor. Grok Bot was demoed on 8/21 and can handle work around the POC.",
    },
    {
      k: "Why now",
      body: "The next step is to choose one high-toil workload and capture a Softtek baseline before any wider Cursor-funded POC.",
    },
    {
      k: "Why them",
      body: "The account owner and delivery lead can choose the workload and own the baseline together.",
    },
  ],
  evidence: [
    {
      source: "Evaluation notes · 8/21",
      finding:
        "The workload is not picked. Softtek wants one high-toil workflow with a Softtek baseline before a wider POC.",
    },
    {
      source: "Product questions already asked",
      finding:
        "Private NPM package access and Origin as a GitHub sync are the open product questions.",
    },
    {
      source: "Current setup",
      finding:
        "FRIDA already runs inside Cursor. Grok Bot was shown on 8/21 and should sit beside it.",
    },
  ],
  targets: [
    {
      name: "the account owner",
      role: "Account owner",
      why: "Can choose the account path and keep the wider POC tied to evidence.",
    },
    {
      name: "the delivery lead",
      role: "Delivery lead",
      why: "Can choose the high-toil workflow and define the Softtek baseline.",
    },
  ],
  page: {
    headline: "One workload, then the wider POC",
    body: "Start with one high-toil workload and a Softtek baseline. Keep FRIDA in place. Widen the Cursor-funded POC only after that baseline exists.",
  },
};

export const JOBS: CroJob[] = [
  {
    id: "standardize-room",
    number: 1,
    title: "Update decks in a live client review",
    trigger: "A live client review starts",
    backgroundAction: "Listening to the room + updating the open deck",
    problem:
      "A generic deck is a pitch they have already sat through. The useful move is hearing this review back, then seeing the next step named for this room, while they are still on.",
    botJob:
      "Granola is in while you are on. The last slides become what this room covered and a next step that fits Sample client. Not last quarter's story.",
    storyboard: [
      {
        when: "Review opens",
        label: "The review starts. Grok is already listening. No prompt needed.",
        scene: "call",
        visual: {
          kind: "live-call",
          title: "Sample client review",
          people: [
            { initials: "YO", name: "You" },
            { initials: "DL", name: "Delivery lead" },
            { initials: "AO", name: "Account owner" },
          ],
        },
      },
      {
        when: "The workload comes up",
        label: "The room names the workload and the product questions.",
        scene: "demo",
        visual: {
          kind: "live-transcript",
          status: "Live",
          label: "Meeting note",
          note:
            "One high-toil workload with a Softtek baseline before anything wider.",
          signals: ["One workload", "Softtek baseline"],
        },
      },
      {
        when: "The deck updates",
        label: "Grok maps it and rewrites the open deck.",
        scene: "notes",
        visual: {
          kind: "deck-update",
          eyebrow: "This room",
          headline: "One workload, then the POC",
          product: "Keep FRIDA. Answer the package question.",
          status: "Draft updated",
        },
      },
      {
        when: "Before the review ends",
        label: "Present the new slides before the review ends.",
        scene: "deck",
        slides: CLIENT_TAIL_SLIDES,
      },
    ],
    unlock:
      "This review on the slide, plus a next step that fits this room, while they are still on.",
    outcome:
      "One live client review becomes an updated deck before the call ends.",
    clips: ["03-slides-granola"],
    demo: {
      title: "Room",
      subtitle: "Live review · slides from this room",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "room",
          name: "Room",
          role: "bot",
          persona: "Turns a live client review into slides this room can use",
          color: "#34C759",
        },
        {
          id: "slides",
          name: "Slides",
          role: "bot",
          persona: "Maps what the room just covered to a next step for Sample client",
          color: "#007AFF",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "room",
          kind: "routine",
          body: "Client review started. I am following Granola for the workload, the product questions, and anything that should change the open deck. The deck stays untouched until there is something worth changing.",
        },
        {
          id: "m2",
          from: "room",
          kind: "text",
          body: "The delivery lead named one high-toil workload and a Softtek baseline. Private packages and Origin came up. Mapping those to the last slides while the review is still live.",
        },
        {
          id: "m3",
          from: "room",
          kind: "text",
          body: "Still on. This review is the slide. One workload, FRIDA stays, Grok Bot already seen on 8/21. They should see their room, not a generic pack.",
        },
        {
          id: "m4",
          from: "slides",
          kind: "draft",
          draftLabel: "Last slides of the open deck · still on",
          artifact: {
            kind: "slides",
            title: "What this room covered",
            cards: CLIENT_TAIL_SLIDES,
          },
        },
        {
          id: "m5",
          from: "room",
          kind: "draft",
          draftLabel: "One-pager they can forward",
          artifact: {
            kind: "one-pager",
            title: "Sample client one-pager",
            eyebrow: "One-pager",
            sections: [
              {
                heading: "What we covered",
                body: "One high-toil workload with a Softtek baseline. FRIDA stays in Cursor. Private NPM access and Origin as a GitHub sync are the open product questions.",
              },
              {
                heading: "What stays",
                body: "FRIDA already runs inside Cursor. Grok Bot was demoed on 8/21. Neither replaces the other.",
              },
              {
                heading: "POC path",
                body: "A wider Cursor-funded POC waits on that one workload and a Softtek baseline. Do not widen from this room.",
              },
              {
                heading: "What we need next",
                body: "Name the workload. Confirm the private-registry host. Keep the delivery lead in the next review.",
              },
            ],
          },
        },
        {
          id: "m6",
          from: "room",
          kind: "draft",
          draftLabel: "Note they can send inside",
          artifact: {
            kind: "packet",
            title: "Forward this inside Sample client",
            fields: [
              {
                label: "Problem in this room",
                value:
                  "One high-toil workload needs a Softtek baseline before any wider Cursor-funded POC. Private packages and Origin are still open.",
              },
              {
                label: "Why now",
                value:
                  "Grok Bot was already demoed on 8/21. This is the live review of the next step, not a first look.",
              },
              {
                label: "Already named",
                value:
                  "FRIDA stays. Origin is a sync, not a migration. The wider POC is on hold until the baseline exists.",
              },
              {
                label: "Exact ask for the next review",
                value:
                  "Name the one workload. Confirm private NPM access. Keep the delivery lead in the room.",
              },
            ],
          },
        },
        {
          id: "m7",
          from: "room",
          kind: "draft",
          draftLabel: "Gmail to your contact",
          artifact: {
            kind: "gmail",
            title: "Forward to your contact",
            to: "Sample client contact",
            subject: "Sample client / Cursor. Next review packet",
            body: "Forwarding the note from today's review. The ask is one high-toil workload with a Softtek baseline, FRIDA staying in place, and answers on private packages and Origin. Nothing else is in the ask.",
          },
        },
        {
          id: "m8",
          from: "room",
          kind: "system",
          body: "Nothing sent. Deck, one-pager, note, and Gmail stay drafts until you tap Send.",
        },
      ],
    },
  },
  {
    id: "legal-redlines",
    number: 2,
    title: "Turn a product question into a sourced reply",
    trigger: "A product question lands",
    backgroundAction: "Searching product knowledge + internal company context",
    problem:
      "A private-package or Origin question can turn into a week of Slack. The seller waits, the delivery lead waits, and internal experts repeat the same answer.",
    botJob:
      "Grok Bot watches for the question, searches product knowledge, and drafts a sourced reply. The seller reviews instead of chasing teams.",
    storyboard: [
      {
        when: "A question lands",
        label: "Product questions land. Grok starts without a prompt.",
        scene: "notes",
        visual: {
          kind: "procurement-email",
          sender: "Delivery lead · Sample client",
          subject: "Private packages, Origin, FRIDA, POC",
          status: "Open",
        },
      },
      {
        when: "Before you open mail",
        label: "Grok has already found and checked every answer.",
        scene: "inspect",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Product", answer: "Private NPM details needed" },
            { name: "Origin", answer: "GitHub sync, not a move" },
            { name: "FRIDA", answer: "Stays in Cursor" },
          ],
          status: "Current notes checked",
        },
      },
      {
        when: "Ready for you",
        label: "A sourced reply is waiting for one-click approval.",
        scene: "send",
        visual: {
          kind: "reply-ready",
          to: "the delivery lead",
          subject: "Private packages + Origin",
          status: "Ready to approve",
        },
      },
      {
        when: "Artifact ready",
        label: "The open questions and draft reply are ready to review.",
        scene: "send",
        artifact: CLIENT_PRODUCT_REPLY,
      },
    ],
    unlock:
      "A product question in. A sendable draft out. No week of internal delay.",
    outcome:
      "Grok finds the product context, then drafts the answer. No Slack chase.",
    clips: ["01-morning-inbox"],
    demo: {
      title: "Paper",
      subtitle: "Product questions · draft waiting",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "paper",
          name: "Paper",
          role: "bot",
          persona: "Reads a product question and drafts the reply so you do not chase teams",
          color: "#FF375F",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "paper",
          kind: "routine",
          body: "New thread from a delivery lead on Sample client. Private NPM packages, Origin, FRIDA, and the POC path. Checking product knowledge while you are offline.",
        },
        {
          id: "m2",
          from: "paper",
          kind: "text",
          body: "Already read it. The known answers are in the draft, and the private-package details are called out as open. Nothing sent.",
        },
        {
          id: "m3",
          from: "paper",
          kind: "draft",
          draftLabel: "Questions + reply",
          artifact: CLIENT_PRODUCT_REPLY,
        },
        {
          id: "m4",
          from: "paper",
          kind: "draft",
          draftLabel: "Gmail reply · not sent",
          artifact: {
            kind: "gmail",
            title: "Reply to the delivery lead",
            to: CLIENT_PRODUCT_REPLY.reply.to,
            subject: CLIENT_PRODUCT_REPLY.reply.subject,
            body: CLIENT_PRODUCT_REPLY.reply.body,
          },
        },
        {
          id: "m5",
          from: "paper",
          kind: "system",
          body: "Nothing sent. The reply stays a draft until you tap Send.",
        },
      ],
    },
  },
  {
    id: "attach-engine",
    number: 3,
    title: "Turn a delivery signal into an expansion brief",
    trigger: "A delivery signal shows up on an account",
    backgroundAction: "Reading the signal + drafting the expansion brief",
    problem:
      "A delivery signal dies in Slack. Nobody writes the brief, nobody drafts the outreach, and the wider POC wait becomes another week.",
    botJob:
      "When a delivery lead flags a workload, Grok Bot writes the expansion brief and drafts outreach to the account owner. Draft only. You send.",
    storyboard: [
      {
        when: "Signal lands",
        label: "Sample client shows a delivery signal. Grok starts without a prompt.",
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: "Sample client",
          sources: ["Delivery notes", "Product questions", "8/21 demo"],
          signal: "High-toil workload",
        },
      },
      {
        when: "The brief takes shape",
        label: "It turns that signal into a short brief.",
        scene: "notes",
        visual: {
          kind: "three-why",
          items: [
            { label: "Why us", answer: "FRIDA already in" },
            { label: "Why now", answer: "One workload first" },
            { label: "Why them", answer: "Owns the POC path" },
          ],
        },
      },
      {
        when: "Brief ready",
        label: "The account owner gets a brief and a draft, not a generic sequence.",
        scene: "map",
        visual: {
          kind: "outreach-ready",
          person: "the account owner · Sample client",
          channels: ["Brief", "Email", "Sample client page"],
          status: "Drafts · nothing sent",
        },
      },
      {
        when: "Ready for your click",
        label: "Brief, outreach, and a page built from this signal.",
        scene: "send",
        artifact: CLIENT_EXPANSION,
      },
    ],
    unlock:
      "A delivery signal, a short brief, and sendable drafts. Nothing fires until you tap.",
    outcome:
      "One delivery signal in. An expansion brief and draft outreach out.",
    clips: ["02-prospecting-pg"],
    demo: {
      title: "Signal",
      subtitle: "Delivery signal to a brief",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "attach",
          name: "Signal",
          role: "bot",
          persona: "Reads the delivery signal, writes the brief, and drafts the outreach",
          color: "#FF9500",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "attach",
          kind: "routine",
          body: "Sample client showed a delivery signal. A high-toil workload needs a Softtek baseline. Writing the brief and finding who should see it. Drafts only.",
        },
        {
          id: "m2",
          from: "attach",
          kind: "text",
          body: "In the notes. The delivery lead asked for one workload first. Private packages and Origin are still open. Grok Bot was already demoed on 8/21. Writing the brief from that, not from a persona.",
        },
        {
          id: "m3",
          from: "attach",
          kind: "draft",
          draftLabel: "Why this account, why now",
          artifact: {
            kind: "packet",
            title: "Sample client brief",
            fields: CLIENT_EXPANSION.hypothesis.map((item) => ({
              label: item.k,
              value: item.body,
            })),
          },
        },
        {
          id: "m4",
          from: "attach",
          kind: "draft",
          draftLabel: "What we already know",
          artifact: {
            kind: "packet",
            title: "Signal, then the people",
            fields: [
              ...CLIENT_EXPANSION.evidence.map((item) => ({
                label: item.source,
                value: item.finding,
              })),
              ...CLIENT_EXPANSION.targets.map((person) => ({
                label: `${person.name} · ${person.role}`,
                value: person.why,
              })),
            ],
          },
        },
        {
          id: "m5",
          from: "attach",
          kind: "draft",
          draftLabel: "LinkedIn · not sent",
          artifact: {
            kind: "linkedin",
            title: "LinkedIn to the account owner",
            to: "the account owner",
            role: "Account owner, Sample client",
            body: "Following the 8/21 Grok Bot demo and the delivery-lead ask for one high-toil workload with a Softtek baseline. I drafted a one-page note on that path, with FRIDA staying in place. Draft only. Nothing sent.",
          },
        },
        {
          id: "m6",
          from: "attach",
          kind: "draft",
          draftLabel: "Gmail · not sent",
          artifact: {
            kind: "gmail",
            title: "Email to the account owner",
            to: "the account owner",
            subject: "One workload, then the wider POC",
            body: "The delivery lead asked for one high-toil workload with a Softtek baseline before any wider Cursor-funded POC. I put a short note on that path. FRIDA stays. Private packages and Origin are the open product questions. Draft only until you tap Send.",
          },
        },
        {
          id: "m7",
          from: "attach",
          kind: "draft",
          draftLabel: "Page for this account · not live",
          artifact: {
            kind: "one-pager",
            title: CLIENT_EXPANSION.page.headline,
            eyebrow: "Page for Sample client",
            sections: [
              {
                heading: "What we saw",
                body:
                  CLIENT_EXPANSION.evidence[0]?.finding ??
                  "The workload is still open. Start with one high-toil workflow.",
              },
              {
                heading: "Why this team",
                body:
                  CLIENT_EXPANSION.hypothesis.find((item) => item.k === "Why them")
                    ?.body ?? "The account owner owns the POC path.",
              },
              {
                heading: "How the product maps",
                body: CLIENT_EXPANSION.page.body,
              },
            ],
          },
        },
        {
          id: "m8",
          from: "attach",
          kind: "system",
          body: "Nothing sent. LinkedIn, Gmail, and the page stay drafts until you tap Send.",
        },
      ],
    },
  },
];

export function getJob(id: string): CroJob | undefined {
  return JOBS.find((job) => job.id === id);
}
