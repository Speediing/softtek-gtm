import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const skipDirs = new Set([".git", "node_modules", ".next", "public/avatars"]);

const priorBrandA = ["data", "dog"].join("");
const priorBrandB = ["sea", "gate"].join("");
const priorAccountA = ["ac", "me"].join("");
const priorAccountB = ["as", "ter pe", "ak"].join("");
const priorFictionA = ["hel", "ios"].join("");
const priorFictionB = ["merid", "ian"].join("");
const priorFictionC = ["north", "line"].join("");
const priorFictionD = ["luc", "ia chen"].join("");
const priorIncident = ["sev", "-2"].join("");
const priorAssistant = ["bits", " ai"].join("");
const priorPersonA = ["pri", "ya shah"].join("");
const priorPersonB = ["jor", "dan hale"].join("");

const patterns = [
  { name: "prior brand A", re: new RegExp(priorBrandA, "i") },
  { name: "prior brand B", re: new RegExp(priorBrandB, "i") },
  { name: "prior account A", re: new RegExp(`\\b${priorAccountA}\\b`, "i") },
  { name: "prior account B", re: new RegExp(priorAccountB, "i") },
  { name: "prior fiction A", re: new RegExp(priorFictionA, "i") },
  { name: "prior fiction B", re: new RegExp(priorFictionB, "i") },
  { name: "prior fiction C", re: new RegExp(priorFictionC, "i") },
  { name: "prior fiction D", re: new RegExp(priorFictionD, "i") },
  { name: "prior incident", re: new RegExp(priorIncident, "i") },
  { name: "prior assistant", re: new RegExp(priorAssistant, "i") },
  { name: "prior person A", re: new RegExp(priorPersonA, "i") },
  { name: "prior person B", re: new RegExp(priorPersonB, "i") },
  { name: "prior purple", re: new RegExp(["#632", "ca6"].join(""), "i") },
  { name: "prior green", re: new RegExp(["#6e", "be49"].join(""), "i") },
  { name: "prior ink", re: new RegExp(["#202", "31f"].join(""), "i") },
  { name: "prior paper", re: new RegExp(["#f5f", "1e8"].join(""), "i") },
  { name: "shared wash black", re: new RegExp(["#1a1", "b18"].join(""), "i") },
  { name: "prior cookie A", re: new RegExp(`${priorBrandA}_cro_session`, "i") },
  { name: "prior cookie B", re: new RegExp(`${priorBrandB}_gtm_session`, "i") },
  { name: "prior host", re: new RegExp(`${priorBrandA}hq`, "i") },
];

const textExt = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".mjs",
  ".css",
  ".md",
  ".json",
  ".svg",
  ".html",
  ".wgsl",
]);

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const rel = path.slice(root.length).replace(/^\//, "");
    if (
      rel === "scripts/check-leftovers.mjs" ||
      [...skipDirs].some((skip) => rel === skip || rel.startsWith(`${skip}/`))
    ) {
      continue;
    }
    const stat = statSync(path);
    if (stat.isDirectory()) {
      walk(path, files);
    } else if (textExt.has(extname(name))) {
      files.push(path);
    }
  }
  return files;
}

const hits = [];
for (const file of walk(root)) {
  const text = readFileSync(file, "utf8");
  for (const pattern of patterns) {
    if (pattern.re.test(text)) {
      hits.push(`${file.replace(root, "")}: ${pattern.name}`);
    }
  }
}

if (hits.length > 0) {
  console.error("Prior-customer leftovers found:");
  for (const hit of hits) {
    console.error(`  ${hit}`);
  }
  process.exit(1);
}

console.log("No prior-customer leftovers found.");
