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
    date: "2026-11-28",
    category: "Patch notes",
    title: "Salvage at the Wreck, Free Gathering and the Tide Charm",
    published: "2026-11-28T00:41:41Z",
    body: `
Our first update that downloads straight from the title screen: no store update needed this time. The Wreck at Low Water now holds real salvage and the chance of a captain's strongbox, there's a new charm and a new hat to find, and the Undermarket lets you gather and make as much as you like.

Found something odd? Use Menu > Report a bug or tell us on the Discord.

## Highlights
- **Real salvage at the wreck.** The Wreck at Low Water's crates now hold sailcloth, rigging, iron fittings, timbers, salt, potions, silver and scrolls, alongside coins, bait, salmon and pearls.
- **The captain's strongbox.** Any search may turn it up (1 in 6): one bonus find, with a chance at the new **Tide Charm** and a rare chance at the **Barnacled Tricorn**.
- **Gather and make freely in the Undermarket.** Collect as much as you like: a full stack of 16 starts a new one. Every good can be made at its station, whatever the carts want right now.
- **Monsters far below you leave you alone.** If your combat level is more than double a monster's, it no longer attacks you on sight.

## New
- **Tide Charm** (necklace): worn, fishing spots and the tide-line Foraging spots succeed 5% more often.
- **Barnacled Tricorn**: a sea-stained hat crusted with barnacles. Defence 2, for any style.
- **More tide-line Foraging spots** along the beaches by Polgarra Cove and the Pellow coast: Salt Pans and Seaweed Rocks 12 (was 6), Shellfish Beds, Sand-hopper Banks, Samphire Beds and Worm Casts 18 (was 12).
- **Boatman Keverne rows any time**: from the Fogwrack strand to Polgarra Cove whenever you like, and to the wreck itself while it's uncovered.

## Improvements
- **Keverne's boat** starts out on the water at the boat, not on the sand, and its panel names him.
- **Exciseman Hoskin** now keeps watch over Polgarra Cove from a post by the signal lanterns, instead of standing alone in the sand.
- **Quest items** that went to your bank because your bag was full now come back to you.
- **Seven quest items have proper icons**, including Davey's Knife, Doyle's Crate and the Shut House keys.

## Balance
- **Undermarket gathering** pays a fixed amount per item: Seam Iron 18, Cellar Timber 22, Smuggler's Rags 20 (was a share of your best gathering spot's XP, up to 50).
- **Oak** 25 XP a log (was 28). **Driftwood** 28 (was 31).
- **Sorrel, Salt Pans and Worm Casts** 20 XP (was 16).

## Fixes
- Fixed Hermit Wenwyn taking your salt, berries and seaweed, then asking you to cook with them. He now just checks you have them.
- Fixed monsters wandering on top of the Wreck at Low Water.
- Fixed being able to attack from Keverne's boat. Attacking now calls the ride off, and your fare is refunded.
`
  },
  {
    date: "2026-11-27",
    category: "Patch notes",
    title: "The Undermarket Rework and Quests on the Map",
    published: "2026-11-27T17:41:28Z",
    body: `
A quick update built from your reports and our own play-testing. The Undermarket plays the way it should: gathering keeps going, every station takes orders, and your streak is now yours to manage. Your active quests also show on the world map, every campfire cooks, and a handful of characters now stand where their quests say they are.

Please update the game from the Microsoft Store or Google Play. Found something odd? Use Menu > Report a bug or tell us on the Discord.

## Highlights
- **Your streak, your pace.** In the Undermarket, the streak now runs on the carts you load. Take on one cart at a time or juggle several: miss any cart you've loaded into and the streak is gone.
- **Gathering keeps going.** One press at the Old Seam, the Rotten Beams or the Rag Pile keeps gathering. Collect as much as you like, whatever the carts want.
- **Metal goods are back.** Carts now ask for Smuggler's Daggers and Strongbox Hinges from the Smuggler's Anvil, not just wood and cloth.
- **Quests on the map.** The world map shows where each active quest wants you next.
- **Cook at any campfire.** Every campfire in the world is now a cooking fire.

## New
- **The world map marks your active quests**: the person to talk to, or the spot to use, for each quest's current step. Click a quest in the tracker or the quest log to see it on the map.
- **Polgarra Cove** is named on the world map.
- **41 campfires** across the world now work as cooking fires, with the same recipes, burn chances and XP as any other campfire.

## Improvements
- **The Undermarket:**
  - **The streak** runs on the carts you load into, each on its own timer (was a single 150-second timer between carts). Carts you never touched don't count.
  - **Your streak carts are highlighted:** an amber rim and a "your streak" tag over the cart, turning red in its last 10 seconds. The panel shows how many carts you're on.
  - **One press keeps gathering**, with the same time and XP for each item as before. Gather as much as you like: it stops only when a stack is full (16), your bag is full, or you move.
  - **Every good has its own colour**, so a cart's order matches the station's list at a glance: steel-blue daggers, violet hinges, red crate lids, golden staves, blue wraps and teal sacks. Seam Iron, Cellar Timber and Smuggler's Rags are recoloured too.
  - **Messages like "This cart wants..." show over your head** for a moment instead of in chat, and each is said once.
- **The Shut House** quest says exactly where the chest and the house are.
- **Fisherman Col** now stands by the Shore Cottages in Pellow, next to the Shut House his quest is about.

## Fixes
- Fixed carts never asking for metal goods. The Smuggler's Anvil was too far from Doyle's pad to count.
- Fixed bosses that could be beaten from just outside their reach (Old Gnasher in Old Tom's Cellar, and others by a doorway). A boss that can't reach you now closes in, leaps beside you, or walks home and heals.
- Fixed Tregear Vosper and Exciseman Hoskin standing far south of Polgarra Cove, so "Lights on the Mirefen" pointed to empty land.
- Fixed Fisherman Col standing in open sand east of Pellow, with no hut where his quests said one was.
- Fixed chat filling with "You carry all the Cellar Timber the carts need" on every press. You can now gather past what the carts need.
`
  },
  {
    date: "2026-11-26",
    category: "Patch notes",
    title: "Quietside Keepers - Outfits, the Wreck Boat and Fixes",
    published: "2026-11-26T19:40:57Z",
    body: `
A follow-up to the Minigames & Events Update, built from your reports. Quietside gets a deposit box and proper lantern-keeping, the world events tell everyone when they start, and a long list of fixes and balance changes.

**Updated Nov 27:** every minigame outfit now has a set bonus worth wearing, Keverne rows you out to the wreck, Fogreach Pier goes deeper, walking slides along bridge edges, and small updates now download right at the title screen, so fixes reach you sooner.

This update needs the new version of the game: the Microsoft Store and the launcher both update you, and an old copy is asked to update before it can log in. The game closes for a minute while it goes in.

Mythwake is available on Windows (Microsoft Store) and Android (Google Play).

Thanks for every report: keep them coming through Menu > Report a bug or the Discord.

## Highlights
- **Every outfit has a set bonus worth wearing** (Nov 27). The Duellist's outfit is now real gear for any combat style, the full Keeper's outfit fishes faster, and the full Rogue's outfit keeps the Watch off your goods.
- **A boat to the wreck** (Nov 27). While the Wreck at Low Water is on, Keverne rows you from the Fogwrack strand straight to the Polgarra spit.
- **The first deposit box.** Drop your catch straight into your bank at Quietside Landing.
- **Lantern-keeping makes sense.** Relight a buoy that's gone out with a Tinderbox; replace one a wave has smashed.
- **World events announce themselves.** Everyone in the world hears when the Salt Caravan or the Wreck at Low Water starts.
- **Kinder early Cooking.** Burning stops 5 levels above a recipe (was 25).
- **Faster updates** (Nov 27). Small updates download at the title screen ("Downloading update...") instead of waiting for a new store version.

## New
- **Deposit box at Quietside Landing**, by the camp fire. Deposit items, or your whole bag, straight into your bank. You can't withdraw from it.
- **A Quest Points hiscore**, in the game and on the website.
- **A workbench at Quietside Landing**, so you can make Buoy Lanterns and Quiet Lanterns on the spot.
- **Keverne's wreck boat:** from the Fogwrack strand to the Polgarra spit, only while the Wreck at Low Water is on, for 15 coins. It's one way: you walk back.
- **Fogreach Pier** reaches further out to sea and ends in a T, with 6 Deep Wrack spots along its arms.
- **The Tide Bell** now stands on the Fogwrack strand and tolls when the fog tide comes in, with four strokes you can hear across the strand.

## Improvements
- **Lantern-keeping at Quietside:**
  - A buoy that's gone out is relit with a Tinderbox from your bag; nothing is used up. 5 Woodworking XP (8 on the outer ring).
  - About 1 in 5 times a buoy goes dark, a wave smashes it instead. Fit a new Buoy Lantern (inner ring) or Quiet Lantern (outer ring), then light it: 25 Woodworking XP (45 on the outer ring) (was 15 / 20 for every relight, and every relight used a lantern).
  - "Lanterns on the Water" now gives you a Tinderbox.
- **More driftwood at Quietside:** 12 more piles on the shore and 6 floating in the shallows, all clear of the fishing spots.
- **World event announcements** now reach everyone in the overworld: the Salt Caravan's 5-minute warning and start, and the Wreck at Low Water as the tide goes out and comes back.
- **One panel stack.** The event, Undermarket, Fogwrack, Quiet mist, Duel Ring and ferry panels share one stack in the top-left corner on PC. They show only while you're taking part, and you can move and fold them; they no longer cover the quest tracker. On phones they line up along the top.
- **Party frames** sit at the middle left on PC, above the chat.
- **Walking slides along edges.** Walking into a bridge's edge, a jetty's edge or any angled wall now slides you along it instead of stopping you.
- **Hauling wrack:** one press hauls a pile until it's used up, like Quietside's driftwood. The prompts read "Pull out the Floating Wrack" and "Hook the Deep Wrack".
- **Hiscores window:** Skills come first (Total level is the default), then Guilds, Minigames and Events, in the same order as the website.
- **Phones:** one tap is always one click. Taps no longer count twice, so toggles stay on and buttons don't miss.
- **The Undermarket:**
  - Carts ask for at most 2 different goods (was 3).
  - Rough materials and goods stack to 16 (was 50).
  - The Watch's lanterns patrol only the open floor between the gathering room, the stations and the carts. You're safe while gathering, crafting and loading.
  - Fewer chat lines: no message for every cart coming and going, and no counts while gathering.
- **The Update button** now closes the game once the update starts.
- **Zone moods fade in and out smoothly** when you cross into a new area.

## Balance
- **Duellist's outfit:** real gear for any combat style, Combat 28, and no Defence needed. It has 60 armour in all (was 12). Wearing all five gives +5% damage, +2.5% crit chance and +2% evasion. The full set also gives 20% faster HP and MP regeneration out of combat (was HP only) and a 12% shorter dodge cooldown.
- **Keeper's outfit (full set):** fishing and wrack hauls are 10% faster (was 0.5% more cleansing XP per piece).
- **Rogue's outfit (full set):** 10% more of Doyle's coins, and the Watch can't take your goods (was 2.5% more XP and 10% more coins).
- **Fogwrack piles:** each Floating or Deep Wrack pile gives 3-6 pulls (was 1), and an emptied pile floats back after 20 seconds (was 12 seconds per piece).
- **Fogborn:** a deep pull raises one 1 time in 20 (was 1 in 10).
- **Morvoren's shop:** Wrack-hook 400 (was 200), Keeper's Thimble 600 (was 300), the Keeper's outfit 240 a piece (was 120).
- **Potions and food** work the same in the Wilderness as everywhere else: health potions 10 s (was 30 s there), mana potions 2 s (was 22 s there).
- **Archery Potion:** Feverfew + Feather (was Feverfew + Bat Wing). Feverfew + Bat Wing still works as a second recipe; the skill guide shows both.
- **Cooking:** the burn chance at a recipe's level is unchanged, but it falls to nothing 5 levels above it (was 25).
- **Fogwrack's fog tide** now stays in for 2 minutes, with a minute's break between tides (was 1 minute in, then 2 minutes out).
- **Driftwood and Sunken Timber** give 3-6 before a pile is used up (was 1-3).
- **Raider gear:** every caravan raider can now drop one of the six raider pieces, rarer the lower the raider: the Lv 32 Raider Ravager 1 in 128, the Lv 28 raiders 1 in 256, the Lv 24 Ravager 1 in 384, the Lv 20 raiders 1 in 512 (was the Lv 32 Ravager only).

## Fixes
- Escorted caravans now count on the hiscores, and wreck searches show up sooner.
- Floating Wrack at Fogwrack is pulled out by hand: it no longer asks for a fishing net. Deep Wrack needs only the Wrack-hook.
- Every plank of the Quietside jetty can be walked on.
- The cooked Quietfin and Mistcarp icons no longer have a leaf under them.
- An old copy of the game is now asked to update instead of being let into a world that doesn't match.
- Fixed getting stuck when walking straight along a narrow jetty or an angled bridge deck.
- Fixed phone taps sometimes switching a setting on and straight back off.
`
  },
  {
    date: "2026-11-26",
    category: "Patch notes",
    title: "Quietside Keepers - Fixes and Polish for the Minigames & Events Update",
    published: "2026-11-26T19:40:51Z",
    body: `
A follow-up to yesterday's update, built from your reports. Quietside gets a deposit box and proper lantern-keeping, the world events tell everyone when they start, and a long list of fixes and balance changes.

This update needs the new version of the game: the Microsoft Store and the launcher both update you, and an old copy is asked to update before it can log in. The game closes for a minute while it goes in.

Mythwake is available on Windows (Microsoft Store) and Android (Google Play).

Thanks for every report: keep them coming through Menu > Report a bug or the Discord.

## Highlights
- **The first deposit box.** Drop your catch straight into your bank at Quietside Landing.
- **Lantern-keeping makes sense.** Relight a buoy that's gone out with a Tinderbox; replace one a wave has smashed.
- **World events announce themselves.** Everyone in the world hears when the Salt Caravan or the Wreck at Low Water starts.
- **Kinder early Cooking.** Burning stops 5 levels above a recipe (was 25).

## New
- **Deposit box at Quietside Landing**, by the camp fire. Deposit items, or your whole bag, straight into your bank. You can't withdraw from it.
- **A Quest Points hiscore**, in the game and on the website.
- **A workbench at Quietside Landing**, so you can make Buoy Lanterns and Quiet Lanterns on the spot.

## Improvements
- **Lantern-keeping at Quietside:**
  - A buoy that's gone out is relit with a Tinderbox from your bag; nothing is used up. 5 Woodworking XP (8 on the outer ring).
  - About 1 in 5 times a buoy goes dark, a wave smashes it instead. Fit a new Buoy Lantern (inner ring) or Quiet Lantern (outer ring), then light it: 25 Woodworking XP (45 on the outer ring) (was 15 / 20 for every relight, and every relight used a lantern).
  - "Lanterns on the Water" now gives you a Tinderbox.
- **More driftwood at Quietside:** 12 more piles on the shore and 6 floating in the shallows, all clear of the fishing spots.
- **World event announcements** now reach everyone in the overworld: the Salt Caravan's 5-minute warning and start, and the Wreck at Low Water as the tide goes out and comes back.
- **The event and Undermarket panels** sit in the top-left corner on PC, show only while you're taking part, and can be moved and folded. They no longer cover the quest tracker.
- **The Undermarket:**
  - Carts ask for at most 2 different goods (was 3).
  - Rough materials and goods stack to 16 (was 50).
  - The Watch's lanterns patrol only the open floor between the gathering room, the stations and the carts. You're safe while gathering, crafting and loading.
  - Fewer chat lines: no message for every cart coming and going, and no counts while gathering.
- **The Update button** now closes the game once the update starts.
- **Zone moods fade in and out smoothly** when you cross into a new area.

## Balance
- **Potions and food** work the same in the Wilderness as everywhere else: health potions 10 s (was 30 s there), mana potions 2 s (was 22 s there).
- **Archery Potion:** Feverfew + Feather (was Feverfew + Bat Wing). Feverfew + Bat Wing still works as a second recipe; the skill guide shows both.
- **Cooking:** the burn chance at a recipe's level is unchanged, but it falls to nothing 5 levels above it (was 25).
- **Fogwrack's fog tide** now stays in for 2 minutes, with a minute's break between tides (was 1 minute in, then 2 minutes out).
- **Driftwood and Sunken Timber** give 3-6 before a pile is used up (was 1-3).
- **Raider gear:** every caravan raider can now drop one of the six raider pieces, rarer the lower the raider: the Lv 32 Raider Ravager 1 in 128, the Lv 28 raiders 1 in 256, the Lv 24 Ravager 1 in 384, the Lv 20 raiders 1 in 512 (was the Lv 32 Ravager only).

## Fixes
- Escorted caravans now count on the hiscores, and wreck searches show up sooner.
- Floating Wrack at Fogwrack is pulled out by hand: it no longer asks for a fishing net. Deep Wrack needs only the Wrack-hook.
- Every plank of the Quietside jetty can be walked on.
- The cooked Quietfin and Mistcarp icons no longer have a leaf under them.
- An old copy of the game is now asked to update instead of being let into a world that doesn't match.
`
  },
  {
    date: "2026-11-25",
    category: "Patch notes",
    title: "The Minigames & Events Update - Three Minigames, Two World Events and New Shores to Explore",
    published: "2026-11-25T18:51:07Z",
    body: `
This is our biggest update yet.

Three minigames open their doors: climb the Duel Ring's Echo ladder in Tolvadden, load smugglers' carts for Fence Doyle in the Undermarket under Sloughton while the Watch's lanterns sweep the cellar, and haul lost things out of the fog at Fogwrack.

Every hour or so the world itself calls you out: guard the Salt Caravan across the Greenwarden Plains against hooded raiders, or race the tide to search the wreck at Polgarra Cove.

Take Senara's ferry to Quietside and keep its lanterns lit, explore Saltings Wood and the Greenwarden hunting grounds, forage for seasonings and cook dishes with buffs that last, and watch the rain roll over Sloughton.

The game closes for a minute during the update, with a countdown first; Microsoft Store players get it through the Store, and the launcher downloads only what changed.

Thanks for every report: keep them coming through Menu > Report a bug or the Discord.

**Full notes with pictures:** https://playmythwake.com/minigames-and-events

## Highlights
- **The Duel Ring.** Climb a ten-rung ladder in Tolvadden's arena against Echoes of blades, archers and sorcerers near your level, or duel other players, for Renown and the Duellist's outfit.
- **The Undermarket.** Run Fence Doyle's smugglers' kitchen under Sloughton: gather, make and load five carts against the clock while the Watch's lanterns sweep the cellar.
- **Fogwrack.** Haul lost things out of the fog tide south of Pellow, cleanse them, and give them back to the ghosts waiting on the strand.
- **Two world events.** Every hour or so, guard the Salt Caravan from hooded raiders across the Greenwarden Plains, or race the low tide to loot the wreck at Polgarra Cove. Raiders can drop rare gear.
- **New places.** Quietside and Senara's ferry, Saltings Wood, Polgarra Cove and the Greenwarden hunting grounds, with eight new quests between them, and a new quest at Pellow.
- **Foraging feeds the kitchen.** New things to gather, bait for fishing, and seasoned dishes with a buff that lasts.
- **A world with weather.** Rain over Sloughton and the swamps, mist at Quietside, ash in the Wilderness: every area has its own mood.
- **Bigger, clearer maps.** The minimap zooms, and the world map zooms in to 6x.
- **The Grand Market moves to the fountain.** Its clerks are bank and market in one.
- **Vouchers.** Take items out of the bank as vouchers that stack, and trade them on the market.
- **The bosses line up.** Every boss sits at its own step on the way to the Storm Titan.

## New

### The Duel Ring
- A walled ring in Tolvadden's south meadow, run by Ringmaster Carveth from his hall by the north wall.
- **The Echo ladder:** 10 rungs, each an Echo of a blade, archer or sorcerer near your combat level: the first rungs are 1 to 3 levels below you, the last 1 to 3 above. Rungs 5 and 10 are champions in better gear. Each Echo shows its own name and level, mixes its style's moves, and its arrows and bolts lead a moving target.
- You start every rung at full HP. Losing costs nothing: no death, no grave, nothing dropped.
- Each rung pays its number in Renown, champions double, so a full climb pays 70 Renown. Echoes give half the combat XP of a monster of their level.
- A fight takes you into the walled arena, where you can move anywhere until it ends; then you're set down at the Ringmaster's hall door. Wait more than 90 seconds between rungs and the climb ends; you keep what you earned.
- **Player duels:** choose "Challenge another player" with the Ringmaster, challenge someone at the ring and pick the rules (food, potions, and which of melee, ranged and magic are allowed). Nothing is staked and nothing is lost. A challenge waits 30 seconds for an answer. A win pays 2 Renown, once a day for each pair of players.
- **Carveth's shop (Renown):** Duellist's Gloves 500; the Duellist's outfit, 144 a piece (Hat, Coat, Breeches, Cuffs, Boots).

### The Undermarket
- Fence Doyle runs it from a cellar under his house in Sloughton. Climb down the trapdoor and you're working; there's no shift or clock, and leaving the cellar ends it.
- **Five carts** wait at the rail, shared by everyone in the cellar. Each cart's order lists 1 to 3 different goods (1 to 3 of each), picked to suit someone down there, with 60 to 120 seconds on its clock and 30 more for each extra good.
- **Gather, make, load:**
  - Chip Seam Iron from the Old Seam with your pickaxe (Prospecting XP), split Cellar Timber from the Rotten Beams with your axe (Logging XP), and pull Smuggler's Rags from the Rag Pile by hand (Foraging XP). Every gather succeeds and the spots never run out; you can carry as much as the carts still need.
  - Make the cellar's own goods at the Smuggler's Anvil, Workbench and Loom (Forging, Woodworking, Tailoring XP): Smuggler's Daggers, Strongbox Hinges, Crate Lids, Cask Staves, Rag Wraps and Smuggler's Sacks, from Rusty (Lv 1) to Sturdy (Lv 40).
  - What you make goes into your bag. You can only make a good while a waiting cart still needs more of it than you carry.
  - Walk up to a cart and press the action button (or interact) to load it: it takes what its own order still needs from your bag and leaves the other carts alone. When every line is full it rolls off into its tunnel, and a new cart rolls in with a new order.
  - The rough materials and the goods never leave the cellar.
- **When a cart goes out full,** everyone who loaded into it is paid for their share of the load:
  - coins by your combat level, raised by your streak (a tenth more a cart, up to double);
  - Marks by the work that went into the cart: 1 Mark for every 12 gathers and crafts, and a quarter more once your streak reaches 5. Part Marks carry over to your next cart.
- **Your streak is your own.** It starts with your first full cart, and each full cart you loaded into resets its timer to 150 seconds. Load into another full cart before the timer runs out and the streak grows; let it run out and the streak is gone.
- A cart whose time runs out rolls away empty, and a new one rolls in. Nobody is paid for it, and it doesn't touch anyone's streak. You can wave off a cart nobody else has loaded into.
- **Watch out for the Watch:** nine lanterns sweep the cellar at different speeds. Three circle the gathering room, three more go the other way round the stations and the carts, two zig-zag slowly through the cart lines, and one crosses the gathering room fast in an X. Caught in the light, you drop the goods in your bag. What's in a cart, your rough materials and your own things are safe.
- **Doyle's shop (Marks):** Smuggler's Boots 300; the Rogue's outfit, 96 a piece (Hood, Jerkin, Trousers, Gloves, Boots).

### Fogwrack
- On the beach south of Pellow, where Morvoren the Wrack-keeper keeps his hut. Walk onto the strand and you're in.
- **The fog tide** comes in every 3 minutes and stays 60 seconds. Wrack floats in on the tide line, and deep wrack gathers round the end of Fogreach Pier. Walk up to a piece and press the action button to haul it: a 3.5-second pull. Your chance is 60% plus 1.25% for each Angling level above the find's (1 on the shore, 20 in the deep), up to 95%. The first 2 things you pull up each tide are ones somebody is waiting for.
- You can haul the shore wrack by hand, at three quarters of that chance. The deep wrack needs a Wrack-hook, which also adds 5% (up to 99%).
- Every haul pays Angling XP: as much as the best fish you can catch.
- **The forgetting meter** fills while you're on Fogreach Pier during a tide (about 25 seconds). When it's full, the fog takes back one of the lost things you've hauled (never your own items) and you're set back on the beach.
- A deep pull can raise a Fogborn (1 in 10). Beat it for a deep find, or let the line go and it sinks back.
- **Cleanse what you find** with Alchemy at the Keeper's Bench beside the hut: shore things from Alchemy 1, deep things from Alchemy 20. The chance is 70% plus 1% for each Alchemy level above the thing's, up to 95%; a failed cleanse loses the thing but still pays a quarter of the XP. The XP grows with your Alchemy level.
- **The Waiting** are the dead of this coast. Four of them rise from the fog each tide and fade when it goes out. Give a cleansed thing back to the one who lost it: 1 Remembrance for a shore find, 2 for a deep one. Things nobody wants can go on Morvoren's shelf.
- **Morvoren's shop (Remembrances):** Wrack-hook 200; Keeper's Thimble 300; the Keeper's outfit, 120 a piece (Sou'wester, Oilskin, Waders, Mitts, Boots).

### Minigame rewards
- **Duellist's Gloves:** 10 Defence, +1% crit chance, Defence 24. After a dodge, your next hit within 3 seconds does 15% more damage.
- **Smuggler's Boots:** 14 Defence, +2% evasion, Defence 22. Run energy drains 25% slower and comes back 25% faster.
- **Keeper's Thimble:** a ring, 2 Attack, +1% crit chance, combat level 18. A 5% chance to save one material when you make something (7% with the full Keeper's outfit).
- **Wrack-hook:** a hook-pole, rod and net in one, with a reel. It reaches Fogwrack's deep hauls, and every haul succeeds 5% more often.
- **Outfits:** no level needed and weightless, 2 / 4 / 3 / 1 / 2 Defence (head / body / legs / hands / feet).
  - Duellist's, full set: 20% faster HP regeneration out of combat.
  - Rogue's, full set: 2.5% more XP for what you make in the cellar, and 10% more of Doyle's coins.
  - Keeper's: 0.5% more cleansing XP for each piece you wear.
- Rewards can't be traded or dropped. Lose one and its keeper sells it again for a tenth of the price.

### Around the minigames
- Each keeper walks you through their minigame the first time you talk to them, and you get a few hints on your first round. Ask "How does this work again?" any time.
- The Hiscores window has three new boards: Duel Ring (best rung; on the same rung, the higher combat level ranks first), Undermarket (best streak of carts) and Fogwrack (returns).
- The website's hiscores (playmythwake.com/hiscores) have new Minigames and Events tabs: the Duel Ring's best rungs and duels won, the Undermarket's best streaks and carts loaded, Fogwrack's returns and Fogborn defeated, lanterns lit at Quietside, wreck spots searched and caravans escorted.
- The world map and minimap have a Minigames layer with an icon for each one.

### Quietside
- Mennick Shore is now Quietside, and its landing is Quietside Landing.
- **Senara's ferry** crosses the lake between Quietside Landing, Lanvean's lakeside, the Rushmoor jetties and the Mennick Woods bank, 15 coins a ride. Walk up to the moored boat at a stop and press the action button to board; you land beside the boat at the other end. If you're hit or step out of the boat, the ride is off and the fare comes back. Now and then the boat brings something up.
- **Lantern-keeping:** the inner ring of buoys sits beside the jetty, and the outer ring along an old jetty that runs on into the Quiet. The Quiet puts out a buoy lantern every 90 seconds. Relight the inner ring with a Buoy Lantern for 15 Woodworking XP. The outer ring takes a Quiet Lantern and pays 20 Woodworking XP.
- **The Quiet's mist** rises out at the outer buoys: stay too long (33 seconds) and the Quiet sets you down on the bank. Nothing is lost.
- **New gathering:** Driftwood piles on the bank (Logging 8, 31 XP) and Sunken Timber in the shallows (Logging 16, 38 XP).
- **New crafts:** the Buoy Lantern (Woodworking 8, 2 Driftwood at a workbench, 46 XP) and the Quiet Lantern (Woodworking 16, 2 Sunken Timber, 52 XP).
- **New fish:**
  - Quietfin: Angling 16, 40 XP. Cooked at Cooking 16 for 56 XP, it heals 180 HP.
  - Mistcarp: Angling 24, 57 XP. Cooked at Cooking 24 for 71 XP, it heals 234 HP.

### Saltings Wood, Polgarra Cove and the Greenwarden hunting grounds
- **Saltings Wood** (Lv 6-14): a salt marsh with Hermit Wenwyn's turf hut by the salt pans.
- **Polgarra Cove** on the Mirefen Coast: a smugglers' landing, with Tregear Vosper and Exciseman Hoskin.
- **The Greenwarden hunting grounds:** Plains Jackals (Lv 19), Steppe Aurochs (Lv 23, Raw Beef on every kill), Tallgrass Mantises (Lv 27) and Barrow Hounds (Lv 30). The mantises and hounds attack on sight.

### New quests
- Saltings Wood: Salt from the Sea (Beginner, recommended Lv 6), What the Mud Keeps (Beginner, 8) and A Hedge Supper (Beginner, 10; needs Cooking 10).
- Quietside: Lanterns on the Water (Beginner, 16) and The One Who Rowed Out (Beginner, 18).
- Polgarra Cove: Lights on the Mirefen (Intermediate, 18; Fence Doyle starts it), The Exciseman (Intermediate, 20) and What the Tide Uncovered (Intermediate, 24; needs Foraging 15).
- Pellow: The Shut House (Beginner, 4). Fisherman Col at the Shore Cottages wants to know what's behind a door that hasn't opened in anyone's memory. Reward: 150 coins and 180 XP.

### The Wreck at Low Water (world event)
- Every hour or so the tide goes out at Polgarra Cove for 5 minutes and uncovers a wreck on the sand spit. A warning goes out 3 minutes before.
- Search its 6 spots, each once per tide: coins, bait and shellfish, Raw Salmon, and now and then a Fen Pearl or Teleport Crystals.
- Wreck Crabs (Lv 20) come up with the wreck and go back with the tide.
- World events show in chat as [World Event] in orange, with a banner on screen.

### The Salt Caravan (world event)
- About every 75 minutes Caravan Master Penwarden's salt wagon leaves the Kiln Bridge and rolls east across the Greenwarden Plains towards the Tarrow Bridge. A warning goes out 5 minutes before it sets off.
- Hooded raiders (Plains Raiders with bows, Raider Stormcallers with staffs, and a Raider Ravager) come out of the long grass at three ambush spots, in waves, and the wagon waits until they're all down. Raiders nobody is fighting attack the wagon; if it's destroyed, the caravan is lost and nobody is paid.
- The road matches the guards' combat levels (the middle of the group). Up to level 25: Plains Raiders and Raider Stormcallers of Lv 20 and a Raider Ravager of Lv 24, and the run pays 300 coins. From 26: Plains Raiders and Raider Stormcallers of Lv 28 and a Raider Ravager of Lv 32, and it pays 450.
- **You count as a guard** if you hit a raider, or if you stay near the wagon for 40% of the run. The event panel shows whether you're counted.
- **Collect your pay in person:** when the wagons reach the Tarrow Bridge, Penwarden waits beside the road's end for 3 minutes. Talk to him to collect your share; if you weren't counted, he tells you why. Every other counted guard adds 20% to everyone's pay, up to 80% more. If your bag is full, the rest goes to your mailbox.
- **Raider gear:** the Lv 32 Raider Ravager can drop one of six pieces: the Antlerhook Bow, Crescentglass Staff and Fangnotch Greataxe, and the Fern Raider Hood, Storm Raider Hood and Ravager's Hood. A kill has a 1 in 128 chance of a piece, then any of the six alike.

### The Grand Market at the fountain
- The Grand Market has moved from the Vault to the Market Fountain, a new plaza north of Tolvadden's Clocktower.
- Its six clerks are bank and market in one, and you can collect from any of them. Town bankers are now bank only.

### Foraging, bait and seasoned dishes
- **17 new kinds of Foraging spot**, 167 in all:
  - Salt Pans and Worm Casts (Lv 1)
  - Brambles (3), Seaweed Rocks (5), Shellfish Beds (6), Sand-hopper Banks (8)
  - Mushroom Patches (12), Rotten Logs (14), Samphire Beds (15), Garlic Patches and Hazel Thickets (18)
  - Bog Myrtle and Leech Pools (22), Salt Seams (25), Wild Hives (28), Thyme Patches and Cave Crevices (30)
- Some finds can be eaten as they are: Wild Berries heal 36 HP, Shellfish 45, Field Mushrooms 54, Hazelnuts 66 and Honeycomb 90.
- **Bait:** carry Worms, Sand-hoppers, Grubs, Leeches or Cave Grubs while you fish. Each catch uses one, the best first. Any bait gives a 15% chance of a second fish; Leeches and Cave Grubs also give a 5% chance the catch is the next fish up.
- **Seasoned dishes** (at a range) heal and give a buff for 10 minutes:
  - Shellfish Stew (Cooking 6): heals 120, +3% max HP
  - Hedge Pie (10): heals 189, 4% less MP cost
  - Mushroom Stew (15): heals 189, +3% accuracy
  - Hazel Roast (20): heals 264, 3% less damage from monsters
  - Bog Pie (24): heals 264, +3% evasion
  - Salt-crust Salmon (30): heals 339, +5% max HP
  - Honey-glazed Salmon (32): heals 339, +4% accuracy and +1% crit chance
- One dish buff at a time: another dish replaces it. A buff ends when you die and keeps its time when you log out. You can eat a dish on a full stomach for its buff.
- Timed buffs show in a row on the HUD, each with a ring and the time left. Hover one for what it does.
- Roast Beef: Raw Beef cooked at Cooking 15, heals 150 HP.

### Vouchers
- At the bank, switch Withdraw between Item and Voucher. A voucher stacks without limit and can be traded, sold on the market and mailed. The bank menu also has "Withdraw all as items" and "Withdraw all as vouchers".
- Deposit a voucher, or "Redeem" it at a banker, to get the real item back. Vouchers can't be used, equipped or eaten.
- Most items that don't stack can be vouchered; coins can't.
- **Vouchers in your bag are never kept on death**: they go to your grave like other items.

## Improvements
- **Minimap zoom:** the mouse wheel, the - / + buttons, a pinch on a phone, or "Minimap zoom" in the controller's Select menu. It now shows 2,400 across by default (was 3,400), with bigger icons.
- The world map zooms in to 6x (was 3x).
- **Zone moods:** each area has its own light and colour. Drifting fog and weather come only where they mean something: rain and fog over Sloughton and the Rushmoor, the mist at Quietside, ash in the Wilderness, and the dungeons. Change it in Settings > Graphics > Atmosphere (Full, Light or Off).
- On PC the game shows a "Preparing the world" loading screen while it builds the world at start-up, instead of freezing.
- Relighting a buoy, boarding the ferry and climbing down into the Undermarket all use the action button.
- Tolgarrick's Furnace Row (2 furnaces and 2 anvils) now stands in a yard beside Anvil Hall (was out on the coast, south-east of town).
- The Mirefen Coast is a broad sand beach along the sea, with the marsh behind it.
- **Phones:** taps, holds and drags work like a mouse. A tap clicks, holding opens the item menu, hold and move drags an item, and dragging scrolls. Buttons light up when tapped, and notices sit at the bottom middle instead of running off the edge.
- Server messages in chat start with [Server].
- The loot window can be dragged, and it remembers where you put it.
- The map legend has a Quest markers toggle that hides the "!" and "?" on the world map and minimap.
- Thieving Gulls and Plains Striders drop Feathers instead of Bat Wings. Any brew that takes a Bat Wing takes a Feather too.
- The privacy policy now explains that the game records your characters' gameplay history (kills, first boss kills, notable drops, deaths and when quests were done) to run and balance the game. It stays on our server and is not shared.

## Balance
- **The boss ladder:** each boss has its own step.
  - The Bog King is Lv 32 (was 25) and now lives by Witch Tregenza's hut at the Mire Pool, south-west of Sloughton. It drops the Mirescale Gloves and Boots (Lv 32), and Yarrow (was Comfrey).
  - The Storm Titan is Lv 40 (was 45) and drops 2-3 Steel Bars. Stormbreak Hollow reads Lv 35-40 (was 35-45).
- **The Slag Giant and Old Snapper are gone**, and their unique drops with them. Pieces you already own stay yours and keep working.
- Heart of the Mountain now ends at the Storm Titan in Stormbreak Hollow (was the Slag Giant). The Drowned Quarter has a new ending.
- The Drowned Quarter's recommended level is 31 (was 35); The Bog King's Circlet is 32 (was 25), and it needs combat level 30 (was 25).
- Pender's Deep reads Lv 30-40 (was 30-50).
- Old metal bands and herb earrings no longer drop from monsters. Silver jewellery drops in their place. Pieces you own stay yours.

## Fixes
- Fixed monsters and other players moving in jerks instead of gliding after the server had been running for about 3 days.
- Monsters now give the 50% more combat XP per kill announced in the last update; it hadn't reached the live game. Bosses are unchanged.
- Fixed the bank's scroll bar and mouse wheel snapping back to the top.
- Fixed logging out against a wall, tree, bank counter or fence putting you back at Pellow when you logged in. You now come back where you were, or on the nearest open ground.
- Fixed the world map's Dungeons toggle leaving the dungeon entrances showing.
- Fixed the skill window showing 100% before you actually reach the next level.
- Fixed moves that deal no damage, such as Shadow Step, saying "100% damage".
- Fixed The Titan's Due sending you to the Mirefen Coast: Chief Grubnose is on the Hollin Downs, north-east of the Goblin Warren.
- Fixed menus on phones only working with a second finger down, holding an item in the bank doing nothing, and dragging an item scrolling the bank.
`
  },
  {
    date: "2026-11-21",
    category: "Patch notes",
    title: "The Mines & Guilds Update - Mixed Ores, Guild Emblems and Better Crafting XP",
    published: "2026-11-21T10:41:06Z",
    body: `
Mines, guilds and crafting all get attention in this update. Every mine now sits on rocky ground and mixes its ores,
three towns get a small mine of their own, and Pellow's starter mine moves into a crater you climb down into. Guilds get
emblems and their own hiscores, crafting pays for every ingredient you use, iron pays more, Foraging levels faster and
quests now have a difficulty that sets their rewards. There are also a better bank sort, clearer map colours, tidier
fields and towns, and a few fixes. The game closes for a minute during the update,
with a countdown first; Microsoft Store players get it through the Store, and the launcher downloads only what
changed. Thanks for every report: keep them coming through Menu > Report a bug or the Discord.

## Highlights
- **Mixed mines.** Town mines hold more than one kind of ore, the common ores in the middle and the rarer ones round
  the edge, and every mine sits on rocky ground.
- **New small mines** outside Lanvean, Tolvadden and Sloughton.
- **A crater mine at Pellow.** Step down two ledges to reach the copper and silver at the bottom.
- **A tidier bank.** Sort groups your gear by combat style and tier.
- **Clearer maps.** Friends, guildmates and party members each have their own colour.
- **Guild emblems.** Pick your guild's symbol and its two colours. It shows next to your guild's name.
- **Guild hiscores.** Guilds are ranked by the combined total level of all their members.
- **Crafting pays properly.** Every ingredient in a recipe now gives XP, and higher-level recipes always pay more.
- **Faster Foraging.** Every herb patch gives 50% more XP.
- **Faster combat levels.** Monsters give 50% more XP per kill.
- **Iron pays its way.** Iron Rocks and iron smithing give a third more XP.
- **Quest difficulty.** Every quest is Beginner, Intermediate or Master, with a recommended level, and its rewards
  match its difficulty.

## New
- Pellow's mine is a crater: walk to the edge and step down onto a ledge, then down again to the rocks. Two slopes lead
  in, the first from the road.
- Lanvean has a small mine in the woods outside town: 2 Silver, 2 Iron and 1 Coal.
- Tolvadden has a small mine on the mainland, just across the north-east bridge: 2 Copper, 1 Silver and 1 Iron.
- Sloughton has a small mine out by the marsh: 1 Silver, 2 Iron and 1 Coal.
- Lanvean's mine is a crater too, cut into the woods, with two ways down.
- Quests show their difficulty (Beginner, Intermediate or Master) and a recommended level in the quest list, the
  quest details, when a quest is offered, and on the world map.
- Guild emblems: the guild's leader or officers choose one of 32 symbols, a fill colour and an outline colour. Open the guild window to design it. The first emblem
  is free, for new guilds and for every guild that already exists; changing it afterwards costs 50,000 coins.
- The emblem shows next to the guild's name under its members, in the guild window and on the guild hiscores.
- Guild hiscores: a Guilds tab in the Hiscores window ranks every guild by its members' combined total level.

## Improvements
- Guild names under players are purple: your own guild in the guild-chat purple, other guilds a softer purple (were
  green and sand).
- Wheatlow's fields are clean plots again: tilled plots with wheat, stubble and bare untilled soil, with grass lanes
  between them and the farm easing into the meadow at its edge. The minimap and world map show the plots in the same
  colours.
- Every town's lodestone stands on its own small paved circle at the end of a short walkway, off the square and the
  streets.
- Campfires that stood on a road now sit beside it, with a log to sit on.
- Stray standing stones are gone: the Saffah Well is a real well now, and the one beside Pellow's chapel is removed.
- The lone Silver Rock east of Hollin Downs is gone; the main Hollin Downs mine is unchanged.
- Settings no longer has a Graphics Quality option. It changed almost nothing; the game always uses the best setting
  for your device.
- Bank and bag Sort now groups gear by combat style, then by tier: melee from the lowest tier up, then ranged, then
  magic, then pieces any style can use and jewellery. Within a tier: weapon, off-hand, ammo, then helmet to boots.
- Minimap: friends show as green dots, your guild as purple and your party as blue (party members are still drawn
  larger and on top).
- World map: party members are a blue X (was green).
- Every mine sits on its own patch of rocky ground instead of open grass.
- Rolling ground has soft light and shade everywhere, not only beside cliffs, so grassy hills read better.

## Balance
- Town mines mix their ores. Pellow: 4 Copper and 2 Silver, with no Iron. Hollin Downs: mostly Silver, with some Iron
  and a little Coal. Tolgarrick: Copper, Silver and Iron near town, with more Coal further out.
- Pellow's mine is a short walk further from the bank, out on open grass east of the road (18 seconds, was about 10).
- Rocks take a little longer to come back: Silver 13.5 seconds (was 13), Iron 18 (was 17), Coal 22 (was 21).
  Copper is unchanged at 13.
- Crafting: every secondary ingredient now adds XP, half as much as one of the recipe's main materials. For example, the
  Oak Arrows (1 Oak Log and 1 Copper Bar) give 32 XP (was 21).
- Crafting: a higher-level recipe never pays less than a lower one, so the best recipe at each level is one of about
  that level. For example, the Steel Claw gives 103 XP (was 33), the Steel Greatsword 206 (was 82), the Silk Fire
  Focus and Silk Robe 154 (were 60 and 75), the Ash Staff 98 (was 68) and the Defence Potion 42 (was 14). The early
  recipes are unchanged.
- Monsters give 50% more combat XP per kill; bosses are unchanged. For example, a Timber Wolf gives a level 24 player
  87 XP (was 58).
- Iron Rocks give 50 XP (was 37). Iron smithing pays about a third more: Iron Bar 18 (was 13), Iron Claw 91 (was 54),
  Iron Greatsword 182 (was 135). Bars, and the higher leathers and cloths, pay a little more too.
- Quest rewards follow the quest's difficulty and recommended level: big at low levels, a solid bonus higher up. Most
  quests pay less XP and coins than before, such as The Drowned Quarter at 37,000 XP (was 155,000) and Heart of the
  Mountain at 96,000 (was 270,000). The first quests on the mainland still carry a new player through their first
  levels: The Tide Brings Another 120 XP (was 450), Across the Water 270 (was 450), Spectacles on the Sand 390 (was 940).
- Foraging: every herb patch gives 50% more XP. Sorrel 16 (was 11), Feverfew 43 (was 28), Comfrey 54 (was 36),
  Yarrow 95 (was 63).

## Fixes
- Fixed Enter doing nothing in the "how many?" box (withdraw, deposit, drop, sell, offer). Enter confirms the amount.
- Fixed being able to chop down the Lifttree in Lanvean and other landmark trees. They're scenery now.
- Fixed "Silk for the Wards" rewarding an earring that can no longer be made. It rewards the Silver Necklace, and its
  steps send you to the Downs Sheep outside Pellow.
`
  },
  {
    date: "2026-11-20",
    category: "Patch notes",
    title: "Silver Jewellery - Faster Early Skilling and Controller Fixes",
    published: "2026-11-20T06:10:44Z",
    body: `
Silver comes to Mythwake: a new ore, rings, earrings and a brand-new necklace slot. The early levels of every gathering
and crafting skill move faster, every animal you can skin drops a hide, and there's a sweep of fixes for controller and
phone players. **This update needs the newest version of the game:** the launcher downloads it at once, and Microsoft
Store players get it through the Store. The game closes for a minute during the update, with a countdown first. Thanks
for every report: keep them coming through Menu > Report a bug or the Discord.

## Highlights
- **Silver jewellery.** Mine silver, smith rings, earrings and pendants, and string a necklace.
- **A new necklace slot** in the Character window.
- **Faster early skilling.** The early levels of every gathering and crafting skill now go by quickly, the way early
  levels should.
- **Hides every time.** Every animal you can skin now drops one or two hides.
- **Controller and phone polish.** Clearer loot-bag controls, and every hint names the right button for your device.

## New
- Silver Rocks (Prospecting 8): a cluster of six just outside Pellow, a short run from the bank.
- Smithing silver: Silver Bar (Forging 8, 2 ore), Silver Band (9), Silver Earring (10) and Silver Pendant (11).
- Tailoring: Wool Cord from fleece (Tailoring 8), and the Silver Necklace (10): a pendant on a wool cord.
- The necklace slot: the Character window now has a Necklace slot (right column), and Gloves moved under Boots. Silver
  jewellery is worn from level 12: the Silver Band (Attack +2, critical chance +1.6%), the Silver Earring (Health +70,
  Mana +35) and the Silver Necklace (Defence +4, Accuracy +1.2%).
- The Tolvadden armourer sells the silver band and earring.

## Balance
- Jewellery is made from silver now: the Copper Band, Iron Band and the herb earrings can no longer be made. If you have
  one, you keep it, and it can still be worn and traded.
- The Downs Sheep are level 8 (was 13) and graze near Pellow, so new tailors can get fleece early.
- Velvet Cloth is woven from Mohair (was a herb).
- Gathering, first tier: Oak Logs 28 XP (was 9), Shrimp 12 (was 8), Trout 36 (was 23), Sorrel 11 (was 7), Feverfew 28
  (was 18). Copper Ore stays 10 - Silver Ore (31) is the new step at level 8.
- Crafting, first tier: oak bows and staves, the first potions and the first cooked food pay about twice as much.
- Smithing and Tailoring recipes from level 15 to 29 pay about twice as much.
- The resources and recipes from level 15 to 44 in the other skills, and from level 30 to 44 in Smithing and
  Tailoring, pay a little less.
- Every skinnable animal drops 1-2 hides every time (was a 40% chance): rats, piglets and boars, thornhogs and wolves,
  crag lizards, brutes and bristlebacks.

## Improvements
- Controller: the loot window's hint has its own row ("pick", "take", "close") and the button says "Hold RB: take all".
- Controller: the prompt by your loot bags reads "[RB] Loot · hold RB: take all", and never shows a keyboard key while
  you're playing on a controller.
- Help has a section for phone controls.
- Settings > Key bindings always lists keyboard keys.
- Tutorial Island's lessons name the right button on keyboard, controller and phone (the food lesson no longer says
  "press 3" on a controller or phone).
- Messages that assumed a mouse now work for every device: equipping a second sword (use the bag's item menu), opening a
  player's menu, and where to find Help.

## Fixes
- Fixed pressing down on the D-pad to close the loot window also opening your bag.
- Fixed the controller loot window's hint being cut off when a bag held only a few items.
- Fixed Help, the welcome card and Settings still saying Z picks up loot (loot bags open with Alt / RB; Z picks up items
  on the ground).
- Fixed the world map saying the right stick moves its cursor (it's the left stick).
- Fixed putting on a saved gear set not putting every piece back on.
- Fixed several hints and tooltips naming the wrong button on a controller or phone.
`
  },
  {
    date: "2026-11-18",
    category: "Patch notes",
    title: "Loot Bags - Follow Me, Party Play and Smoother Chat",
    published: "2026-11-18T18:19:41Z",
    body: `
Every kill now drops one loot bag only you can see, follow your friends across the map, a new face in Guild Row, a bigger reward for fighting together, and a lot of
polish: chat that behaves, fishing that tells you when the fish move, and smoother menus on a controller. The game
closes for a minute during the update, with a countdown first; Microsoft Store players get it through the Store, and
the launcher downloads only what changed. Thanks for every report: keep them coming through Menu > Report a bug or the
Discord.

## Highlights
- **Loot bags.** Each kill drops one bag that only you (or your party) can see. Open all your nearby bags at once in
  one small window, take what you want or everything, and keep fighting while it's open.
- **Follow a player.** Right-click a player and pick Follow to walk after them.
- **Registrar Kerensa in Guild Row.** Found a guild, manage yours, or ask what guilds are for.
- **Train near your level.** Monsters pay for their health, so the best XP is on monsters close to your level.
- **Party play pays more.** Fighting together gives a bigger XP bonus to everyone who's pitching in.
- **Chat that gets out of your way.** It lets go of the keyboard after you send, and no longer sticks on a whisper.

## New
- Loot bags: each monster you kill drops one bag that only you and your party see. Press Alt by your bags (RB on a
  controller) to open one small loot window with everything from all your bags nearby, stacked; click an item to take
  it, or hold Alt (hold RB) to take everything. Bags you fill while it's open join the list, and you can keep fighting.
  An unclaimed bag bursts after 60 seconds: its items lie on the ground for anyone for 30 seconds more (was 15
  seconds private, 2 minutes in all). Items you drop yourself still stay 2 minutes.
- Party loot setting (party leader, in the Party window): Free for all (the default), Killer only, or Take turns.
- Controller: hold LB near a player to open their menu (Follow, Trade, Invite, Whisper, Add friend, Report); a tap of LB
  still changes stance.
- Follow: right-click a player (or open their menu on a controller) and pick Follow. You walk after them until you move
  yourself, start talking to someone, or they leave sight or the map. A "Following" line with an X shows while it's on.
- Registrar Kerensa stands in the Guild Row hall in Tolvadden. She can found a guild (100,000 coins), open your guild's
  management if you lead one, and explain what guilds are for.
- Settings > Delete account opens the website's page on how to delete your account.

## Balance
- Monsters now pay XP for how much health they have, at your level: the best XP is on monsters near your level, and
  farming monsters far below you pays less. The time to each level stays the same, and nothing changes for your levels
  or the hiscores.
- Old Gnasher pays less once you've outgrown him: from 4 levels above him his XP fades a little each level - time to move
  on.
- The party XP bonus counts only members who are fighting together: +5% for each party member who has hit a monster or
  healed in the last 30 seconds, up to +15% (was +10% for each extra member nearby, fighting or not). Two fighting get
  +10%, three or four +15%. Members who are nearby but idle still share the XP.

## Improvements
- Controller: your character no longer walks while a window or menu is open. The left stick moves the pointer (and the
  world map's cursor), and the right stick scrolls (the bank row by row).
- Controller: LT / RT switch the chat channel while the chat is open.
- The Change stance button in the bottom-left is bigger and shows your stance in its colour (the "Level" text there is
  gone; your combat level still shows under your character and in Skills).

## Fixes
- Fixed fishing stopping with no message when the fish moved to another spot: you're now told "The fish have moved on.
  Look for ripples nearby." A fishing spot with no other spot nearby never runs out.
- Fixed chat staying in a whisper to the last person you messaged from the Social window every time you opened it.
- Fixed the chat box keeping hold of the keyboard after you sent a message: movement and hotkeys work straight away
  again (Enter opens the chat).
- Fixed flowers, mushrooms and a bush growing in the water near Pellow, crates floating in the Old Sewers' water, and a
  group of Crab Knights standing in the water in The Depths.
- Fixed new characters and guilds being able to take names that look like staff, such as "GM" or "Mod" names. Existing
  names are kept.
`
  },
  {
    date: "2026-11-17",
    category: "Patch notes",
    title: "Microsoft Store Launch! - Bosses Bite Back",
    published: "2026-11-16T21:31:55Z",
    body: `
**Mythwake is on the Microsoft Store!** Download it straight from the Store, no launcher needed, and the Store keeps
it up to date for you: https://apps.microsoft.com/detail/9NCS6GLQ56GV (every way to play: https://playmythwake.com/download).
Already using the launcher? It keeps working as before.

Bosses hit harder and smarter, boss drops are worth chasing, and armour fits better. The game closes for a minute during
the update, with a countdown first; Store players get it through the Store, and the launcher downloads only what
changed. Thanks for every report: keep them coming through Menu > Report a bug or the Discord.

## Highlights
- **Bosses hit like their level.** The higher the boss, the harder it hits.
- **No more frozen bosses.** A boss that can't reach you walks round what's in the way, leaps to you, or gives up and
  walks home.
- **Boss drops build a set.** Bosses drop helms, gloves, boots, rings and earrings any combat style can wear, plus their
  own weapons, with new pieces to find.
- **Armour fits better.** Dozens of pieces are redrawn or refitted.
- **A tidier skill guide.** Armour sets are one row each, and gear says where it comes from.

## Improvements
- Skill guide entries say where an item comes from: made, sold, a quest, a boss or a monster.
- Controller: the D-pad scrolls long lists, and the left stick scrolls any window.

## Balance
- Every boss hits on one scale by level. Old Snapper, the Slag Giant and the Storm Titan hit harder, and their big
  attacks hurt more; Old Gnasher hits a little softer.
- No single hit from Old Gnasher, Chief Grubnose or the Bog King takes more than 40% of your health.
- Every monster hits on one scale by level: bats, treants and blobs hit harder, and spiders, wolves, hounds and lizards
  hit a little softer.
- The Bog King and Old Snapper drop a rare a little more often (1 in 18, was 1 in 24; 1 in 21, was 1 in 28).
- The Slagforged Plate and the Goblin Chief's Headdress no longer drop. If you have one, you keep it.
- Flax, Fleece and Spider Silk take a bag slot each, like ores, logs and hides (the bank still stacks them). Any you
  carry in a stack move to your bank when you log in.

## Fixes
- Fixed bosses standing still when they couldn't reach you, such as Old Gnasher across the cellar pond.
- Fixed being pulled straight back into a dungeon or house when you kept walking after leaving it.
- Fixed a controller pulling you back through a portal right after you came out of it.
- Fixed goblins, skeletons and bandits only landing the first swing of their two-hit combo.
- Fixed Death Echoes' quick flurries only landing their first hit.
- Fixed armour gaps: dark patches under plate sleeves and belts, bare ankles above boots, rough sleeve edges on starter
  gear, the Ratskin Cap's strap across the mouth, the Morrowveil Slippers' ribbon tails and the Kestrel Boots' cuff.
- Fixed quest text that still named old crafting materials ("Silk for the Wards", "The Scarecrow's Coat").
- Fixed bows called Longbow and Shortbow: every bow is a Bow now.
`
  },
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
