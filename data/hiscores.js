/* ==========================================================================
   Mythwake hiscores data. The Hiscores page reads this file.

   It is empty until the server can export it (see Site/README.md). Each
   player is one line: a name and, in skill order, [level, xp] pairs:

     Melee, Archery, Sorcery, Defence, Vitality, Prospecting, Logging,
     Angling, Foraging, Forging, Woodworking, Tailoring, Alchemy, Cooking

   Example (do not leave fake players in the real file):
     { name: "Somebody", skills: [[12, 1500], [3, 200], ... 14 pairs ...] },

   "updated" is shown on the page, e.g. "2026-12-01 18:00 UTC".
   ========================================================================== */

window.MYTHWAKE_HISCORES = {
  updated: "",
  players: []
};
