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
