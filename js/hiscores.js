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
  function skillName(skill) { return skill < 0 ? "Overall" : SKILLS[skill]; }

  var state = { skill: -1, page: 1 };

  /* ---- Skill list ---- */
  var list = $("hs-skills");
  function skillButton(i) {
    var b = el("button", "hs-skill");
    b.type = "button";
    var dot = el("span", "hs-dot");
    dot.style.background = i < 0 ? "#f2b632" : COLORS[i];
    b.appendChild(dot);
    b.appendChild(document.createTextNode(skillName(i)));
    b.addEventListener("click", function () { show(i, 1); });
    b.dataset.skill = i;
    return b;
  }
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
    var body = $("hs-rows");
    body.textContent = "";
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

  var q = new URLSearchParams(location.search).get("player");
  if (q) { $("hs-search").value = q; lookup(q); } else { show(-1, 1); }
})();
