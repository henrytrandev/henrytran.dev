(function () {
  const track = document.getElementById("track");
  const dotsEl = document.getElementById("dots");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const section = document.getElementById("projects");
  const projects = Array.isArray(window.PROJECTS) ? window.PROJECTS : (typeof PROJECTS !== "undefined" ? PROJECTS : []);

  const svg = (id) => `<svg class="i"><use href="#${id}"/></svg>`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function placeholder(title) {
    return `<div class="shot-ph">${svg("i-disc")}<span>${esc(title)} screenshot coming soon</span></div>`;
  }

  track.innerHTML = projects.map((p) => {
    const links = (p.links || []).slice(0, 2).map((l, i) =>
      `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}${i === 0 ? " " + svg("i-arrow") : ""}</a>`
    ).join("");
    const img = p.image
      ? `<img src="${esc(p.image)}" alt="Screenshot of ${esc(p.title)}" loading="lazy" data-title="${esc(p.title)}">`
      : placeholder(p.title);
    return `
      <article class="card">
        <div class="shot">${img}</div>
        <div class="card-body">
          <h3 class="card-title">${esc(p.title)}</h3>
          <p class="card-desc">${esc(p.description || "")}</p>
          <p class="card-tech">${(p.tech || []).map(esc).join(" · ")}</p>
          <div class="card-links">${links}</div>
        </div>
      </article>`;
  }).join("");

  // Show a placeholder if a screenshot file is missing.
  track.querySelectorAll(".shot img").forEach((img) => {
    const swap = () => { img.insertAdjacentHTML("afterend", placeholder(img.dataset.title || "Project")); img.remove(); };
    if (img.complete && img.naturalWidth === 0) swap();
    else img.addEventListener("error", swap, { once: true });
  });

  const count = projects.length;
  if (count <= 1) section.classList.add("single");
  dotsEl.innerHTML = Array.from({ length: count }, () => "<span></span>").join("");
  const dots = Array.from(dotsEl.children);

  const current = () => Math.round(track.scrollLeft / Math.max(1, track.clientWidth));

  function update() {
    const i = current();
    dots.forEach((d, j) => d.classList.toggle("on", j === i));
    prev.disabled = i <= 0;
    next.disabled = i >= count - 1;
  }

  function go(delta) {
    const i = Math.min(count - 1, Math.max(0, current() + delta));
    track.scrollTo({ left: i * track.clientWidth });
  }

  prev.addEventListener("click", () => go(-1));
  next.addEventListener("click", () => go(1));
  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
  });
  let t;
  track.addEventListener("scroll", () => { clearTimeout(t); t = setTimeout(update, 60); }, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
