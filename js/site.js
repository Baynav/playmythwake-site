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
  /* Text with https:// links made clickable. Everything is added as text, never as HTML. */
  function addText(parent, text) {
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
  function renderBody(parent, body) {
    String(body || "").trim().split(/\n\s*\n/).forEach(function (block) {
      var lines = block.split("\n").map(function (l) { return l.trim(); }).filter(Boolean);
      if (!lines.length) return;
      if (lines.every(function (l) { return l.indexOf("- ") === 0; })) {
        var ul = el("ul");
        lines.forEach(function (l) {
          var li = el("li");
          addText(li, l.slice(2));
          ul.appendChild(li);
        });
        parent.appendChild(ul);
      } else {
        var p = el("p");
        addText(p, lines.join(" "));
        parent.appendChild(p);
      }
    });
  }
  function postId(post) {
    return "post-" + (post.date || "") + "-" +
      String(post.title || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  each("[data-news]", function (box) {
    var posts = (window.MYTHWAKE_NEWS || []).slice();
    var limit = Number(box.getAttribute("data-news")) || posts.length;
    var brief = box.hasAttribute("data-news-brief");
    box.textContent = "";
    if (!posts.length) {
      box.appendChild(el("p", "muted", "No news yet. Check back soon."));
      return;
    }
    posts.slice(0, limit).forEach(function (post) {
      var art = el("article", "post");
      art.id = postId(post);
      var meta = el("p", "post-meta");
      var time = el("time", null, niceDate(post.date));
      time.setAttribute("datetime", post.date || "");
      meta.appendChild(time);
      if (post.category) meta.appendChild(el("span", "post-cat", post.category));
      var h = el("h3");
      if (brief) {
        var link = el("a", null, post.title || "");
        link.href = "news.html#" + art.id;
        h.appendChild(link);
      } else {
        h.textContent = post.title || "";
      }
      art.appendChild(h);
      art.appendChild(meta);
      var body = el("div", "post-body");
      renderBody(body, post.body);
      if (brief && body.firstChild) {
        /* Home page: the first paragraph and a "Read more" link. */
        var first = body.firstChild;
        body.textContent = "";
        body.appendChild(first);
        var more = el("a", "more", "Read more");
        more.href = "news.html#" + art.id;
        body.appendChild(more);
      }
      art.appendChild(body);
      box.appendChild(art);
    });
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
      location.href = "hiscores.html" + (name ? "?player=" + encodeURIComponent(name) : "");
    });
  });

  each("[data-year]", function (s) { s.textContent = new Date().getFullYear(); });
})();
