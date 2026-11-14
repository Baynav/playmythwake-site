/* ==========================================================================
   Mythwake news. Add a post by copying one block to the TOP of the list.

     date      "YYYY-MM-DD"
     category  a short label: "Website", "Game update", "Event", "Support"...
     title     the headline
     body      the text, between backticks. A blank line starts a new
               paragraph, lines starting with "- " make a bullet list, and a
               full link (https://...) becomes clickable.

   The newest post goes first. The home page shows the first three.
   ========================================================================== */

window.MYTHWAKE_NEWS = [
  {
    date: "2026-11-14",
    category: "Patch notes",
    title: "Monsters Fight Back",
    body: `
Monsters are harder to cheese and quests show up on your maps. Thanks to everyone who reported what felt off.
Keep the reports coming through Menu > Report a bug.

**There's a new launcher.** Download it from https://playmythwake.com/download and use it in place of the old one: it
shows when the game is under maintenance and has the new look.

## Highlights
- **Stronger monsters pay more XP.** One-hitting a Lv 1 no longer pays like fighting something your own level.
- **Quest markers.** A gold "?" on the minimap and world map shows where each quest goes next.
- **Monsters fight back.** Packs hit much harder, and a monster that gives up the chase keeps its wounds.

## New
- Quest markers on the minimap and world map: who to talk to next, and where to go or what to hunt. Hover one to
  see the quest and step.
- "Add to hotbar..." in the item menu for potions and food, to put them in slot 1, 2 or 3.
- Chat is coloured by channel: local white, party green, guild purple, world yellow, whispers cyan, system messages
  a soft sand and level-ups gold.
- The world map zooms: scroll to zoom in, drag to move around. Party members show on it as green X's.

## Improvements
- Without a target locked, attacks go to the nearest monster, and a shot already lined up on one stays on it.
- The game runs smoother and uses much less CPU.
- Arrow keys and Enter no longer move through menus, so they stop getting in the way. A controller still steers
  menus.

## Balance
- Monsters in a pack no longer wait for each other between hits.
- Monsters chase you about 50% farther. When they give up, they walk home keeping their wounds and heal slowly
  there, instead of healing to full straight away. Bosses still reset.
- Dragging the same monster away from its home twice within a minute heals it fully, so kiting it doesn't work.

## Fixes
- Fixed bats and other swooping or charging monsters standing still when you were right on top of them.
- Fixed town place names popping up for the wrong building.
- Pressing Alt while the bank, a shop or a conversation is open no longer starts the conversation over again.
- The Skills window opens on the overview again, not on the last skill you looked at.
`
  },
  {
    date: "2026-11-12",
    category: "Website",
    title: "Welcome to playmythwake.com",
    body: `
Mythwake has a home on the web. This is where you'll find the download, the news, the hiscores and the rules of the game.
`
  }
];
