/* Fills in the settings from config.js, renders the news and loads screenshots.
   No libraries, nothing loaded from other sites. */
(function () {
  "use strict";
  var cfg = window.MYTHWAKE || {};

  function each(sel, fn) {
    Array.prototype.forEach.call(document.querySelectorAll(sel), fn);
  }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function todo(text) {
    return el("span", "todo", "[Placeholder: " + text + "]");
  }

  /* ---- Players online, under the logo (every page) ----
     The game server writes data/hiscores.js every few minutes with "online: N", and it is published here about every
     ten minutes. Read as text (the file is never run on pages that don't need it); nothing shows if the count is
     missing or more than 30 minutes old - a server that is down doesn't leave a stale number up. */
  /* v14.5 (Bay): during maintenance (data/status.js, pushed the moment it starts and ends by Deploy/site-status.ps1)
     the pill says "Maintenance in progress" instead. */
  (function () {
    var banner = document.querySelector(".banner");
    if (!banner || !window.fetch) return;
    var t = "?t=" + Math.floor(Date.now() / 60000);
    function text(url) {
      return fetch(url + t, { cache: "no-store" }).then(function (r) { return r.ok ? r.text() : ""; }).catch(function () { return ""; });
    }
    function pill(label, cls) {
      var p = el("span", "online-pill" + (cls ? " " + cls : ""));
      p.appendChild(el("span", "online-dot"));
      p.appendChild(document.createTextNode(label));
      banner.appendChild(p);
    }
    Promise.all([text("data/status.js"), text("data/hiscores.js")]).then(function (got) {
      if (/\bmaintenance:\s*true\b/.test(got[0])) { pill("Maintenance in progress", "is-maint"); return; }
      var js = got[1];
      var n = /\bonline:\s*(\d+)/.exec(js), u = /\bupdated:\s*"(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}) UTC"/.exec(js);
      if (!n || !u) return;
      var at = Date.UTC(+u[1], +u[2] - 1, +u[3], +u[4], +u[5]);
      if (Date.now() - at > 30 * 60 * 1000) return;
      var count = parseInt(n[1], 10);
      pill(count === 1 ? "1 player online" : count.toLocaleString("en-GB") + " players online");
    });
  })();

  /* ---- The real download button (Download page) ---- */
  each("[data-download]", function (a) {
    if (cfg.downloadUrl) {
      a.href = cfg.downloadUrl;
    } else {
      a.removeAttribute("href");
      a.classList.add("is-off");
      a.setAttribute("aria-disabled", "true");
      a.textContent = "Download coming soon";
    }
  });
  each("[data-download-note]", function (p) {
    p.textContent = "";
    if (!cfg.downloadUrl) p.textContent = "Join the Discord to hear the moment it's out.";
    else if (cfg.downloadNote) p.textContent = cfg.downloadNote;
  });

  /* ---- Discord links ---- */
  each("[data-discord]", function (a) {
    if (cfg.discordUrl) {
      a.href = cfg.discordUrl;
      a.rel = "noopener";
    } else {
      a.removeAttribute("href");
      a.classList.add("is-off");
      a.setAttribute("aria-disabled", "true");
      a.title = "Placeholder: set DISCORD_URL in js/config.js";
    }
  });
  each("[data-discord-note]", function (p) {
    p.textContent = "";
    if (!cfg.discordUrl) p.appendChild(todo("set DISCORD_URL in js/config.js"));
  });

  /* ---- Support email ---- */
  each("[data-support-email]", function (span) {
    span.textContent = "";
    if (cfg.supportEmail) {
      var a = el("a", null, cfg.supportEmail);
      a.href = "mailto:" + cfg.supportEmail;
      span.appendChild(a);
    } else {
      span.appendChild(todo("set SUPPORT_EMAIL in js/config.js"));
    }
  });

  /* ---- News ---- */
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  function niceDate(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || "");
    if (!m) return iso || "";
    return Number(m[3]) + " " + MONTHS[Number(m[2]) - 1] + " " + m[1];
  }
  /* Text with https:// links made clickable and **bold** made bold. Everything is added as text, never as HTML. */
  function addLinks(parent, text) {
    var parts = text.split(/(https?:\/\/[^\s]*[^\s.,;:!?)])/);
    parts.forEach(function (part, i) {
      if (i % 2) {
        var a = el("a", null, part);
        a.href = part;
        a.rel = "noopener";
        parent.appendChild(a);
      } else if (part) {
        parent.appendChild(document.createTextNode(part));
      }
    });
  }
  function addText(parent, text) {
    text.split(/\*\*(.+?)\*\*/).forEach(function (part, i) {
      if (i % 2) { var b = el("b"); addLinks(b, part); parent.appendChild(b); }
      else if (part) addLinks(parent, part);
    });
  }
  /* A post body: blank lines split paragraphs, "## " starts a heading, "- " starts a bullet (an indented line
     carries on the bullet above), and <!-- notes --> are left out. */
  function renderBody(parent, body) {
    var text = String(body || "").replace(/[ \t]*<!--[\s\S]*?-->[ \t]*(\r?\n|$)/g, "").trim();
    var para = [], ul = null, li = null;
    function endPara() {
      if (para.length) { var p = el("p"); addText(p, para.join(" ")); parent.appendChild(p); }
      para = [];
    }
    function endList() { ul = null; li = null; }
    text.split(/\r?\n/).forEach(function (raw) {
      var line = raw.trim();
      if (!line) { endPara(); endList(); return; }
      if (line.indexOf("## ") === 0) {
        endPara(); endList();
        var h = el("h4");
        addText(h, line.slice(3));
        parent.appendChild(h);
      } else if (line.indexOf("- ") === 0) {
        endPara();
        if (!ul) { ul = el("ul"); parent.appendChild(ul); }
        li = el("li");
        li._text = line.slice(2);
        ul.appendChild(li);
        addText(li, li._text);
      } else if (li && /^\s/.test(raw)) {
        li._text += " " + line;
        li.textContent = "";
        addText(li, li._text);
      } else {
        endList();
        para.push(line);
      }
    });
    endPara();
  }
  function postId(post) {
    return "post-" + (post.date || "") + "-" +
      String(post.title || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  /* The short version of a post for lists: the intro and the Highlights (the rest is on the post's own page). */
  function summaryOf(body) {
    var text = String(body || "").replace(/[ \t]*<!--[\s\S]*?-->[ \t]*(\r?\n|$)/g, "").trim();
    var parts = ("\n" + text).split(/\r?\n## /);
    var out = parts[0].trim();
    for (var i = 1; i < parts.length; i++) {
      if (/^Highlights\s*(\r?\n|$)/.test(parts[i])) { out += "\n\n## " + parts[i].trim(); break; }
    }
    return { text: out, more: parts.length > 1 };
  }
  /* One post as an <article>. mode: "full" (its own page), "card" (News list: intro + Highlights + Read more),
     "brief" (Home: first paragraph + Read more). */
  function postCard(post, mode) {
    var id = postId(post);
    var art = el("article", "post");
    art.id = id;
    var meta = el("p", "post-meta");
    var time = el("time", null, niceDate(post.date));
    time.setAttribute("datetime", post.date || "");
    meta.appendChild(time);
    if (post.category) meta.appendChild(el("span", "post-cat", post.category));
    var h = el(mode === "full" ? "h2" : "h3");
    if (mode === "full") {
      h.className = "post-title";
      h.textContent = post.title || "";
    } else {
      var link = el("a", null, post.title || "");
      link.href = "news#" + id;
      h.appendChild(link);
    }
    art.appendChild(h);
    art.appendChild(meta);
    var body = el("div", "post-body");
    var sum = summaryOf(post.body);
    renderBody(body, mode === "card" ? sum.text : post.body);
    if (mode === "brief" && body.firstChild) {
      var first = body.firstChild;
      body.textContent = "";
      body.appendChild(first);
    }
    if (mode !== "full" && (sum.more || mode === "brief")) {
      var more = el("a", "more", "Read more");
      more.href = "news#" + id;
      more.setAttribute("aria-label", "Read more: " + (post.title || ""));
      body.appendChild(more);
    }
    art.appendChild(body);
    return art;
  }
  var siteTitle = document.title;
  each("[data-news]", function (box) {
    var posts = (window.MYTHWAKE_NEWS || []).slice();
    var limit = Number(box.getAttribute("data-news")) || posts.length;
    var brief = box.hasAttribute("data-news-brief");
    function show() {
      box.textContent = "";
      if (!posts.length) {
        box.appendChild(el("p", "muted", "No news yet. Check back soon."));
        return;
      }
      if (brief) {
        posts.slice(0, limit).forEach(function (post) { box.appendChild(postCard(post, "brief")); });
        return;
      }
      /* News page: news#post-<date>-<title> (or news?post=<id>) shows that one post in full; otherwise the list. */
      var want = decodeURIComponent((location.hash || "").slice(1)) ||
        (/[?&]post=([^&#]+)/.exec(location.search) || [])[1] || "";
      var one = null;
      if (want) posts.forEach(function (p) { if (!one && postId(p) === want) one = p; });
      if (one) {
        var back = el("p", "post-back");
        var a = el("a", null, "\u2190 Back to all news");
        a.href = "news";
        back.appendChild(a);
        box.appendChild(back);
        box.appendChild(postCard(one, "full"));
        var back2 = back.cloneNode(true);
        back2.className = "post-back post-back-end";
        box.appendChild(back2);
        document.title = (one.title || "News") + " - Mythwake";
        var top = box.closest(".box") || box;
        if (top.scrollIntoView) top.scrollIntoView();
      } else {
        posts.slice(0, limit).forEach(function (post) { box.appendChild(postCard(post, "card")); });
        document.title = siteTitle;
      }
    }
    show();
    if (!brief) window.addEventListener("hashchange", show);
  });

  /* ---- Screenshots: a slot shows its picture once the file exists. Slots with no file are
     removed, and the whole Screenshots box stays hidden until at least one picture exists. ---- */
  each("[data-shot]", function (slot) {
    var src = slot.getAttribute("data-shot");
    var img = new Image();
    img.onerror = function () { slot.remove(); };
    img.onload = function () {
      var box = slot.closest("[data-shots-box]");
      if (box) box.hidden = false;
      var a = el("a");
      a.href = src;
      img.alt = slot.getAttribute("data-alt") || "Mythwake screenshot";
      a.appendChild(img);
      slot.textContent = "";
      slot.appendChild(a);
      slot.classList.add("has-shot");
    };
    img.src = src;
  });

  /* ---- Hiscores quick search in the sidebar ---- */
  each("form[data-hs-search]", function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("input").value.trim();
      location.href = "hiscores" + (name ? "?player=" + encodeURIComponent(name) : "");
    });
  });

  each("[data-year]", function (s) { s.textContent = new Date().getFullYear(); });
})();
