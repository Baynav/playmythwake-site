/* The Hiscores page: skill tables, paging and a player lookup, all from data/hiscores.js. */
(function () {
  "use strict";

  /* The game's skill order (Shared/Skills.cs DisplayOrder) and names. */
  var SKILLS = ["Melee", "Archery", "Sorcery", "Defence", "Vitality", "Prospecting", "Logging",
    "Angling", "Foraging", "Forging", "Woodworking", "Tailoring", "Alchemy", "Cooking"];
  var COLORS = ["#c0392b", "#27ae60", "#2e86de", "#5d6d7e", "#e74c3c", "#95a5a6", "#a0522d",
    "#3498db", "#58d68d", "#e67e22", "#d4ac0d", "#e91e63", "#9b59b6", "#a04000"];
  var PER_PAGE = 25;

  var data = window.MYTHWAKE_HISCORES || { players: [] };
  var players = (data.players || []).filter(function (p) {
    return p && p.name && Array.isArray(p.skills);
  }).map(function (p) {
    var lv = 0, xp = 0, skills = [];
    for (var i = 0; i < SKILLS.length; i++) {
      var s = p.skills[i] || [1, 0];
      var l = Number(s[0]) || 1, x = Number(s[1]) || 0;
      skills.push([l, x]);
      lv += l; xp += x;
    }
    return { name: String(p.name), skills: skills, total: [lv, xp] };
  });

  /* Guilds (Nov 21): ranked by their members' combined total level, as the game's Hiscores > Guilds. */
  var GUILDS = -2;
  var guilds = (data.guilds || []).filter(function (g) { return g && g.name; }).map(function (g) {
    return { name: String(g.name), emblem: Array.isArray(g.emblem) ? g.emblem.map(Number) : [0, 0, 0, 0],
      members: Number(g.members) || 0, total: Number(g.total) || 0 };
  });

  /* The emblem, as the game draws it (Bay, Nov 21: the symbol alone, no shape): the symbol filled with the light
     colour, outlined in the dark one (Client EmblemBake.BakeSmall). img/guild-emblems.png: 64 px cells, 6 a row; the
     symbols are cells 4-35. Palettes: Shared/GuildEmblems.cs Light / Dark. */
  var LIGHT = ["#F2E6C8", "#A9D4F5", "#B5E8C8", "#F4B8C0", "#F5D46E", "#D2BFF0", "#D9DEE5", "#F7C9A0", "#C9D9A5", "#D4F1F4"];
  var DARK = ["#15264A", "#7A1420", "#1E4A26", "#161616", "#3D1F66", "#4A2E15", "#0F4A4D", "#5A1A3A", "#2E3A48", "#7A3A10"];
  var CELL = 64, sheet = new Image(), sheetReady = false, waiting = [];
  sheet.onload = function () { sheetReady = true; waiting.splice(0).forEach(function (f) { f(); }); };
  sheet.src = "img/guild-emblems.png?v=2";
  function tinted(sym, colour, s, box) {
    var t = document.createElement("canvas"); t.width = t.height = s;
    var c = t.getContext("2d"), k = 4 + sym;
    c.drawImage(sheet, (k % 6) * CELL, Math.floor(k / 6) * CELL, CELL, CELL, (s - box) / 2, (s - box) / 2, box, box);
    c.globalCompositeOperation = "source-in";
    c.fillStyle = colour; c.fillRect(0, 0, s, s);
    return t;
  }
  function emblem(e) {
    var c = el("canvas", "hs-emblem");
    c.width = c.height = CELL;
    var back = e[1], sym = e[2], fore = e[3];
    if (!(e[0] >= 1) || !LIGHT[back] || !DARK[fore] || !(sym >= 0 && sym < 32)) {
      c.className += " none";
      return c;
    }
    function paint() {
      var ctx = c.getContext("2d"), s = CELL, ring = 3;
      var box = (s - 2 * ring) / 0.86;   // Art Studio's symbols keep ~8% clear on every side
      var dark = tinted(sym, DARK[fore], s, box), light = tinted(sym, LIGHT[back], s, box);
      for (var a = 0; a < 16; a++) {     // the outline: the dark symbol all round, ring px out
        ctx.drawImage(dark, Math.round(Math.cos(a * Math.PI / 8) * ring), Math.round(Math.sin(a * Math.PI / 8) * ring));
      }
      ctx.drawImage(light, 0, 0);
    }
    if (sheetReady) paint(); else waiting.push(paint);
    return c;
  }

  /* Minigame and world-event boards (Nov 24): data.minigames holds one array per board, already in rank order
     ({ name, score }), from the server's MinigameBoards. A board shows only once its key is in the file, and boards
     in HOLD stay hidden until their content ships. */
  var MINIGAMES = -3, EVENTS = -4;
  var BOARDS = [
    { key: "duel_best_rung", group: MINIGAMES, name: "Duel Ring: best rung", col: "Rung" },
    { key: "duel_wins", group: MINIGAMES, name: "Duel Ring: duels won", col: "Wins" },
    { key: "rush_best_streak", group: MINIGAMES, name: "The Undermarket: best streak", col: "Streak" },
    { key: "rush_orders", group: MINIGAMES, name: "The Undermarket: carts loaded", col: "Carts" },
    { key: "fogwrack_returns", group: MINIGAMES, name: "Fogwrack: things returned", col: "Returns" },
    { key: "fogborn_defeated", group: MINIGAMES, name: "Fogwrack: Fogborn defeated", col: "Fogborn" },
    { key: "lanterns_lit", group: MINIGAMES, name: "Quietside: lanterns lit", col: "Lanterns" },
    { key: "wreck_searches", group: EVENTS, name: "The Wreck at Low Water: spots searched", col: "Searches" },
    { key: "caravans_escorted", group: EVENTS, name: "The Salt Caravan: caravans escorted", col: "Caravans" }
  ];
  var HOLD = [];   // keys of boards whose content isn't in the game yet (the caravan was held until Nov 24)
  var mg = data.minigames || null;
  var boardRows = {};
  BOARDS.forEach(function (b) {
    boardRows[b.key] = (mg && Array.isArray(mg[b.key]) ? mg[b.key] : []).filter(function (r) { return r && r.name; })
      .map(function (r) { return { name: String(r.name), score: Number(r.score) || 0 }; });
  });
  function boardsOf(group) {
    return BOARDS.filter(function (b) { return b.group === group && HOLD.indexOf(b.key) < 0; });
  }
  var boardPick = {};
  boardPick[MINIGAMES] = boardsOf(MINIGAMES)[0];
  boardPick[EVENTS] = boardsOf(EVENTS)[0];

  var $ = function (id) { return document.getElementById(id); };
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function num(n) { return Number(n).toLocaleString("en-US"); }
  function stat(p, skill) { return skill < 0 ? p.total : p.skills[skill]; }
  function ranked(skill) {
    return players.slice().sort(function (a, b) {
      var A = stat(a, skill), B = stat(b, skill);
      return B[0] - A[0] || B[1] - A[1] || a.name.localeCompare(b.name);
    });
  }
  function skillName(skill) {
    return skill === GUILDS ? "Guilds" : skill === MINIGAMES ? "Minigames" : skill === EVENTS ? "Events" :
      skill < 0 ? "Overall" : SKILLS[skill];
  }

  var state = { skill: -1, page: 1 };

  /* ---- Skill list ---- */
  var list = $("hs-skills");
  function skillButton(i) {
    var b = el("button", "hs-skill");
    b.type = "button";
    var dot = el("span", "hs-dot");
    dot.style.background = i === GUILDS ? "#9b6fd6" : i === MINIGAMES ? "#1d8a8a" : i === EVENTS ? "#ff9a3c" :
      i < 0 ? "#f2b632" : COLORS[i];
    b.appendChild(dot);
    b.appendChild(document.createTextNode(skillName(i)));
    b.addEventListener("click", function () { show(i, 1); });
    b.dataset.skill = i;
    return b;
  }
  list.appendChild(skillButton(GUILDS));   // first, as in the game's Hiscores window
  list.appendChild(skillButton(MINIGAMES));
  if (boardsOf(EVENTS).length) list.appendChild(skillButton(EVENTS));
  list.appendChild(skillButton(-1));
  SKILLS.forEach(function (_, i) { list.appendChild(skillButton(i)); });

  /* ---- Table ---- */
  function show(skill, page) {
    state.skill = skill;
    state.page = page;
    Array.prototype.forEach.call(list.children, function (b) {
      b.classList.toggle("on", Number(b.dataset.skill) === skill);
    });
    $("hs-title").textContent = skillName(skill) + " Hiscores";
    $("hs-player").hidden = true;
    $("hs-table-wrap").hidden = false;
    var isBoard = skill === MINIGAMES || skill === EVENTS;
    $("hs-search-form").style.display = skill === GUILDS || isBoard ? "none" : "";   // the search finds players' skills
    var body = $("hs-rows");
    body.textContent = "";
    $("hs-head").textContent = "";
    var pick = isBoard ? boardPick[skill] : null;
    (skill === GUILDS ? ["Rank", "Guild", "Members", "Total level"] : isBoard ? ["Rank", "Name", pick ? pick.col : ""] :
      ["Rank", "Name", "Level", "XP"]).forEach(function (h) {
      $("hs-head").appendChild(el("th", null, h));
    });
    showBoardPicker(isBoard ? skill : null);
    if (skill === GUILDS) { showGuilds(page); return; }
    if (isBoard) { showBoard(skill, page); return; }
    var rows = ranked(skill);
    var pages = Math.max(1, Math.ceil(rows.length / PER_PAGE));
    if (page > pages) page = state.page = pages;
    if (!rows.length) {
      var tr = el("tr"), td = el("td", "hs-empty");
      td.colSpan = 4;
      td.textContent = "The hiscores aren't live yet. Rankings appear here once the game's servers publish them.";
      tr.appendChild(td);
      body.appendChild(tr);
    }
    rows.slice((page - 1) * PER_PAGE, page * PER_PAGE).forEach(function (p, i) {
      var s = stat(p, skill);
      var tr = el("tr");
      tr.appendChild(el("td", "num", num((page - 1) * PER_PAGE + i + 1)));
      var nameTd = el("td");
      var a = el("a", null, p.name);
      a.href = "?player=" + encodeURIComponent(p.name);
      a.addEventListener("click", function (e) { e.preventDefault(); lookup(p.name); });
      nameTd.appendChild(a);
      tr.appendChild(nameTd);
      tr.appendChild(el("td", "num", num(s[0])));
      tr.appendChild(el("td", "num", num(s[1])));
      body.appendChild(tr);
    });
    $("hs-pageinfo").textContent = "Page " + page + " of " + pages;
    $("hs-prev").disabled = page <= 1;
    $("hs-next").disabled = page >= pages;
  }
  function showGuilds(page) {
    var body = $("hs-rows");
    var pages = Math.max(1, Math.ceil(guilds.length / PER_PAGE));
    if (page > pages) page = state.page = pages;
    if (!guilds.length) {
      var tr = el("tr"), td = el("td", "hs-empty");
      td.colSpan = 4;
      td.textContent = "No guilds on the hiscores yet. Found one in the game with Registrar Kerensa in Tolvadden's Guild Row.";
      tr.appendChild(td);
      body.appendChild(tr);
    }
    guilds.slice((page - 1) * PER_PAGE, page * PER_PAGE).forEach(function (g, i) {
      var tr = el("tr");
      tr.appendChild(el("td", "num", num((page - 1) * PER_PAGE + i + 1)));
      var td = el("td", "hs-guild");
      td.appendChild(emblem(g.emblem));
      td.appendChild(el("span", null, g.name));
      tr.appendChild(td);
      tr.appendChild(el("td", "num", num(g.members)));
      tr.appendChild(el("td", "num", num(g.total)));
      body.appendChild(tr);
    });
    $("hs-pageinfo").textContent = "Page " + page + " of " + pages;
    $("hs-prev").disabled = page <= 1;
    $("hs-next").disabled = page >= pages;
  }

  /* The board buttons above the table, for the Minigames and Events tabs. */
  function showBoardPicker(group) {
    var row = $("hs-boards");
    row.textContent = "";
    row.hidden = group == null;
    if (group == null) return;
    boardsOf(group).forEach(function (b) {
      var btn = el("button", "hs-board" + (boardPick[group] === b ? " on" : ""), b.name);
      btn.type = "button";
      btn.addEventListener("click", function () { boardPick[group] = b; show(group, 1); });
      row.appendChild(btn);
    });
  }
  function showBoard(group, page) {
    var b = boardPick[group], body = $("hs-rows");
    $("hs-title").textContent = b ? b.name : skillName(group) + " Hiscores";
    var rows = b ? boardRows[b.key] : [];
    var pages = Math.max(1, Math.ceil(rows.length / PER_PAGE));
    if (page > pages) page = state.page = pages;
    if (!rows.length) {
      var tr = el("tr"), td = el("td", "hs-empty");
      td.colSpan = 3;
      td.textContent = mg ? "No one is on this board yet." : "These boards start with the next update.";
      tr.appendChild(td);
      body.appendChild(tr);
    }
    rows.slice((page - 1) * PER_PAGE, page * PER_PAGE).forEach(function (r, i) {
      var tr = el("tr");
      tr.appendChild(el("td", "num", num((page - 1) * PER_PAGE + i + 1)));
      var nameTd = el("td"), a = el("a", null, r.name);
      a.href = "?player=" + encodeURIComponent(r.name);
      a.addEventListener("click", function (e) { e.preventDefault(); lookup(r.name); });
      nameTd.appendChild(a);
      tr.appendChild(nameTd);
      tr.appendChild(el("td", "num", num(r.score)));
      body.appendChild(tr);
    });
    $("hs-pageinfo").textContent = "Page " + page + " of " + pages;
    $("hs-prev").disabled = page <= 1;
    $("hs-next").disabled = page >= pages;
  }

  $("hs-prev").addEventListener("click", function () { show(state.skill, state.page - 1); });
  $("hs-next").addEventListener("click", function () { show(state.skill, state.page + 1); });

  /* ---- Rank search (jump to the page with that rank) ---- */
  $("hs-rank-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var r = parseInt($("hs-rank").value, 10);
    if (r > 0) show(state.skill, Math.ceil(r / PER_PAGE));
  });

  /* ---- Player lookup ---- */
  function lookup(name) {
    var want = String(name || "").trim().toLowerCase();
    if (!want) return;
    var p = players.filter(function (x) { return x.name.toLowerCase() === want; })[0];
    var box = $("hs-player");
    box.textContent = "";
    $("hs-table-wrap").hidden = true;
    box.hidden = false;
    Array.prototype.forEach.call(list.children, function (b) { b.classList.remove("on"); });
    showBoardPicker(null);
    if (!p) {
      $("hs-title").textContent = "Player lookup";
      box.appendChild(el("p", "hs-empty", "No player called \"" + name + "\" is on the hiscores" +
        (players.length ? "." : " yet. The hiscores aren't live yet.")));
    } else {
      $("hs-title").textContent = "Personal scores for " + p.name;
      var table = el("table", "hs-table");
      var head = el("tr");
      ["Skill", "Rank", "Level", "XP"].forEach(function (h) { head.appendChild(el("th", null, h)); });
      var thead = el("thead"); thead.appendChild(head); table.appendChild(thead);
      var tbody = el("tbody");
      [-1].concat(SKILLS.map(function (_, i) { return i; })).forEach(function (i) {
        var s = stat(p, i);
        var rank = ranked(i).indexOf(p) + 1;
        var tr = el("tr");
        var td = el("td");
        var dot = el("span", "hs-dot");
        dot.style.background = i < 0 ? "#f2b632" : COLORS[i];
        td.appendChild(dot);
        td.appendChild(document.createTextNode(skillName(i)));
        tr.appendChild(td);
        tr.appendChild(el("td", "num", num(rank)));
        tr.appendChild(el("td", "num", num(s[0])));
        tr.appendChild(el("td", "num", num(s[1])));
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      box.appendChild(table);
    }
    var back = el("button", "btn btn-small", "Back to the tables");
    back.type = "button";
    back.addEventListener("click", function () { show(-1, 1); });
    box.appendChild(back);
  }
  $("hs-search-form").addEventListener("submit", function (e) {
    e.preventDefault();
    lookup($("hs-search").value);
  });

  $("hs-updated").textContent = data.updated ? "Last updated " + data.updated : "";

  var params = new URLSearchParams(location.search), q = params.get("player");
  var table = params.get("table");
  if (q) { $("hs-search").value = q; lookup(q); }
  else { show(table === "guilds" ? GUILDS : table === "minigames" ? MINIGAMES : table === "events" && boardsOf(EVENTS).length ? EVENTS : -1, 1); }
})();
