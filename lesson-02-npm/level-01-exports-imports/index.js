import { greet } from "./greet.js";
import { stats } from "./stats.js";
import { showNames } from "./showNames.js";
import names from "./names.js";

greet("Frontend Developer");
stats(3, 7);
showNames(names);

console.log(
    "\n",
    "The benefits of Exporting and Importing code is exporting and impording code separates them into smaller, readable files."
);
