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
    date: "2026-11-15",
    category: "Patch notes",
    title: "Calmer Packs, Free Bolts",
    body: `
Mages' basic bolts are free, packs no longer all come at you at once, and crafting materials come
from where you'd expect. The game closes for a short while during the update; the launcher downloads it as soon as it
opens again. Thanks for every report: keep them coming through Menu > Report a bug or the Discord.

## Highlights
- **Free basic bolts.** A staff's or wand's basic bolt costs no MP (was 1).
- **Packs no longer all come at once.** Monsters stand in loners and small groups, and only a few of a pack notice you
  as you walk past: 1 of a group of 3 (was all 3). Hit one standing in a group and its packmates join in; a loner
  fights alone.
- **See a monster's level before you fight.** Monsters near you show their level and name, coloured from grey (far
  below you) through green, yellow and orange to red (far above). Your target's name turns purple.
- **Bosses can't be fought from safety.** Hit a boss from a spot it can't reach and it leaps next to you. Where it
  can't land, your hits miss and it heals until you come out.
- **New sources for cloth.** Scarecrows on Scarecrow Hill near Wheatlow and in Pellow's Practice Yard drop 1-2 Flax,
  woven into Linen Cloth. Downs Sheep on Hollin Downs drop a Fleece, woven into Wool Cloth, and Raw Mutton to cook.
- **Crafting starts quicker.** The first levels of Forging, Woodworking and Tailoring come faster: a Copper bar pays 9
  Forging XP (was 6), so a Copper Platebody gives 45 XP (was 30). Every piece of a tier can be made by the level you
  can wear it: every Iron piece by Forging 20 (the Iron Platebody was 29).

## Improvements
- The dodge roll goes any way you push: all 8 directions on the keyboard and any angle on a controller's stick. On PC,
  a roll from standing still goes toward the mouse.
- Shops have a Buy X button: type how many, up to what you can afford.
- Clicking "Enter to chat" under the chat opens it, ready to type.
- With a controller, the mouse cursor hides and nothing under it lights up; move the mouse or press a key and it comes
  back.
- Claw throws use only the claw arm; the other arm stays down.

## Balance
- A bow or claw fires ammo of its own tier or lower: Copper weapons can't fire Iron, Iron weapons
  fire Iron, Copper and Training ammo. Training weapons can fire Copper too.

## Fixes
- Fixed the chat box sometimes not taking your typing until you clicked it a few times.
- Fixed the D-pad doing nothing in the bag until you moved the pointer over it, and losing its place mid-move.
- Fixed Innkeeper Gerens standing outside The Leaning Pig; he's inside behind the tables now.
- Fixed the cellar under Pellow showing as "Pellow Cellars"; it's Old Tom's Cellar everywhere.
`
  },
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
- **A new look.** A barber and a clothier have opened in Tolvadden, with eight new hairstyles.
- **Fish and feast.** Fishing has its own net and rod animations, and animals drop meat to cook: six new foods from
  Cooking 1 to 30.
- **Crafting is a real climb.** Forging, Woodworking, Tailoring and Alchemy pay by the materials you use and take
  several times longer to level.

## New
- Quest markers on the minimap and world map: who to talk to next, and where to go or what to hunt. Hover one to
  see the quest and step.
- "Add to hotbar..." in the item menu for potions and food, to put them in slot 1, 2 or 3.
- Chat is coloured by channel: local white, party green, guild purple, world yellow, whispers cyan, system messages
  a soft sand and level-ups gold.
- The world map zooms: scroll to zoom in, drag to move around. On a controller, RT zooms in and LT zooms out.
  Party members show on it as green X's.
- The barber and the clothier in Tolvadden's Noble Quarter. The barber changes your hairstyle and hair colour; the
  clothier changes your clothes, their colours and your skin tone. Your first visit to each is free, then it's 500
  coins.
- Eight new hairstyles: Textured Crop, Swept Quiff, Curtain Fringe and Tousled Shag; High Ponytail, Side Braid,
  Wavy Lob and Twin Buns. Pick one when you make a character, or at the barber.
- Zoom the camera out: scroll the mouse wheel, or lean the right stick gently up or down on a controller.
- Animals drop raw meat every time you kill them: Raw Rat Meat (Cellar Rats), Raw Pork (Piglets), Raw Crab Meat
  (Shore Crabs, Conch Hermits, Rock Crabs), Raw Boar Meat (Wild Boars, Thornhogs), Raw Fowl (Thieving Gulls, Plains
  Striders) and Raw Bristle Haunch (Clinker Brutes, in the Wilderness).
- Six new foods to cook on a range or campfire: Roast Rat, Roast Pork and Crab Meat at Cooking 1, Boar Chop at 10,
  Roast Fowl at 20 and Bristle Roast at 30. They heal 60 to 240 HP, the same as or a little less than the fish of
  their level, and give 4 to 46 Cooking XP.
- Bosses that live in dungeons show on the world map, its legend and the minimap at their dungeon's entrance: the
  Storm Titan, Old Gnasher, Old Snapper and the Slag Giant.

## Improvements
- Without a target locked, attacks go to the nearest monster, and a shot already lined up on one stays on it.
- The game runs smoother and uses much less CPU.
- Arrow keys and Enter no longer move through menus, so they stop getting in the way. A controller still steers
  menus.
- News in the launcher and on the title screen shows each post on its own, with its date.
- Fishing has its own animations: a net scoop at Shrimp spots; at Trout, Pike and Salmon spots you cast a rod, wait
  with the line and float on the water, and strike each time you try for a fish.
- Two-handed tools sit properly in both hands: the far hand holds the handle from underneath.
- Mining and chopping play their sound on every swing, as the tool lands (was once per ore or log).
- Cleaner icons for cooked Pike and Salmon, and for Willow and Maple logs.
- A Rules & terms button on the login screen and in Settings.

## Balance
- Monsters in a pack no longer wait for each other between hits.
- Monsters chase you about 50% farther. When they give up, they walk home keeping their wounds and heal slowly
  there, instead of healing to full straight away. Bosses still reset.
- Dragging the same monster away from its home twice within a minute heals it fully, so kiting it doesn't work.
- Arrows and kunai stack without limit (was 1,000).
- Forging, Woodworking, Tailoring and Alchemy take about 8 hours of steady crafting to reach level 40 (was 1-5 hours).
  XP you've already earned stays.
- Making something pays by the materials of that skill that go into it: a Copper Platebody (5 bars) pays five times a
  1-bar item. Ingredients from other skills, such as the leather in gauntlets or the herb in a staff, add nothing.
- Forging pays 6 XP per Copper bar, 12 per Iron bar and 19 per Steel bar: the Copper Platebody gives 30 XP (was 207),
  the Iron Platebody 60 (was 389).
- Earrings are no longer the fastest Forging training: the Sorrel Earring gives 6 XP (was 79), the Yarrow Earring 19
  (was 303). Kunai and arrows now pay like any other item of their tier: 40 Iron Kunai give 12 XP (was 32).
- Smelting gives 3 XP per Copper bar (was 5), 6 per Iron bar (was 27) and 10 per Steel bar (was 51).
- Woodworking pays 6 XP per Oak log, 16 per Ash log and 27 per Willow log: an Oak Shortbow gives 18 XP (was 66).
- Tailoring pays 5 XP per Soft Leather or Linen Cloth, 11 per Rugged Leather or Wool Cloth and 17 per Thick
  Leather or Velvet Cloth: a Wool Robe gives 55 XP (was 381). Making the leather or cloth gives 1, 3 and 4 XP
  (was 5, 27 and 51).
- Alchemy pays 7 XP per Sorrel, 14 per Feverfew, 22 per Comfrey and 33 per Yarrow: a Red Potion gives 7 XP (was 10),
  a Mana Elixir 44 (was 70).

## Fixes
- Fixed bats and other swooping or charging monsters standing still when you were right on top of them.
- Fixed town place names popping up for the wrong building.
- Pressing Alt while the bank, a shop or a conversation is open no longer starts the conversation over again.
- The Skills window opens on the overview again, not on the last skill you looked at.
- Fixed your own name tag (Alpha Tester and the others) not showing to you until you put it on again.
- Fixed the pickaxe or axe vanishing behind the rock or tree when you gather from behind it.
- Fixed shopkeepers and shop signs promising things the shop doesn't sell (eight shops, such as Hubert's in Pellow
  and the Fish Market).
- Burnt meat now comes out as Burnt Meat, not Burnt Fish.
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
