import type { JobId } from "./types";

export type FleetBot = {
  id: string;
  name: string;
  blurb: string;
  color: string;
  jobId?: JobId;
  mark?: string;
  seat?: boolean;
};

export const FLEET: FleetBot[] = [
  {
    id: "rep",
    name: "Every Softtek seller",
    blurb: "The human stays in control. Their agents keep the surrounding work moving.",
    color: "#E8E8ED",
    mark: "AE",
    seat: true,
  },
  {
    id: "room",
    name: "Room",
    blurb: "Sits in a live client review. Writes the last slides from what this room covered.",
    jobId: "standardize-room",
    color: "#34C759",
  },
  {
    id: "slides",
    name: "Slides",
    blurb: "Owns the open deck. Updates it while the review is still on.",
    jobId: "standardize-room",
    color: "#007AFF",
  },
  {
    id: "paper",
    name: "Paper",
    blurb: "Watches product questions. Drafts a sourced reply on private packages and Origin.",
    jobId: "legal-redlines",
    color: "#FF375F",
  },
  {
    id: "signal",
    name: "Signal",
    blurb: "Watches delivery notes. Turns a workload signal into an expansion brief.",
    jobId: "attach-engine",
    color: "#FF9500",
  },
];
