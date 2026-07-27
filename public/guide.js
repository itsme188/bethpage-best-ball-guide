(() => {
  const initializeGuide = () => {
  const defaults = {
    start: 14,
    hcp: 17,
    driver: 225,
    longName: "3-wood",
    long: 178,
    midName: "7-iron",
    mid: 145,
    wedgeName: "PW",
    wedge: 105,
  };

  const routes = {
    1: [{ x: 56.9, y: 88.4 }, { x: 36.2, y: 31.9 }, { x: 56.9, y: 11.6 }],
    2: [{ x: 46.3, y: 88.3 }, { x: 57.5, y: 36.2 }, { x: 46.3, y: 11.7 }],
    3: [{ x: 50, y: 84.4 }, { x: 50, y: 15.6 }],
    4: [{ x: 45.7, y: 89.1 }, { x: 55.5, y: 46 }, { x: 53, y: 16.9 }, { x: 45.7, y: 10.9 }],
    5: [{ x: 49.9, y: 88 }, { x: 50.2, y: 40.4 }, { x: 49.9, y: 12 }],
    6: [{ x: 47.3, y: 88.5 }, { x: 55.4, y: 30.4 }, { x: 47.3, y: 11.5 }],
    7: [{ x: 58.1, y: 88.3 }, { x: 31.6, y: 45.6 }, { x: 52.2, y: 17.6 }, { x: 58.1, y: 11.7 }],
    8: [{ x: 50, y: 83.8 }, { x: 50, y: 16.2 }],
    9: [{ x: 42.5, y: 88.4 }, { x: 65, y: 37.8 }, { x: 42.5, y: 11.6 }],
    10: [{ x: 48.5, y: 88.5 }, { x: 52.9, y: 41.1 }, { x: 48.5, y: 11.5 }],
    11: [{ x: 49.3, y: 87.8 }, { x: 51.5, y: 35.9 }, { x: 49.3, y: 12.2 }],
    12: [{ x: 43, y: 88.1 }, { x: 64.1, y: 41.4 }, { x: 43, y: 11.9 }],
    13: [{ x: 51, y: 89.3 }, { x: 48, y: 50.4 }, { x: 50, y: 20.6 }, { x: 51, y: 10.7 }],
    14: [{ x: 50, y: 82.2 }, { x: 50, y: 17.8 }],
    15: [{ x: 47.2, y: 88 }, { x: 55.6, y: 40.3 }, { x: 47.2, y: 12 }],
    16: [{ x: 48.4, y: 88.3 }, { x: 53.1, y: 39.6 }, { x: 48.4, y: 11.7 }],
    17: [{ x: 50, y: 84 }, { x: 50, y: 16 }],
    18: [{ x: 50.2, y: 87.6 }, { x: 49.6, y: 35.2 }, { x: 50.2, y: 12.4 }],
  };

  const routeLegYards = {
    1: [300, 131], 2: [260, 127], 3: [236], 4: [285, 190, 53],
    5: [300, 179], 6: [300, 102], 7: [295, 200, 47], 8: [211],
    9: [300, 176], 10: [310, 194], 11: [300, 138], 12: [310, 210],
    13: [300, 230, 77], 14: [162], 15: [300, 181], 16: [310, 179],
    17: [206], 18: [290, 126],
  };

  const targetNudges = {
    1: [-5], 2: [-5], 4: [-6, -4], 5: [-6], 6: [0], 7: [-4, -4],
    9: [5], 10: [0], 11: [4], 12: [-5], 13: [4, 0], 15: [5], 16: [4], 18: [0],
  };

  const dangerZones = {
    1: [
      { from: 190, to: 285, type: "rough", label: "Trees and blocking rough on the right" },
    ],
    2: [
      { from: 165, to: 230, type: "rough", label: "Dogleg corner and trees right" },
      { from: 300, to: 315, type: "sand", label: "Right-side bunker near the approach" },
    ],
    3: [
      { from: 105, to: 128, type: "sand", label: "Deep front bunker" },
      { from: 145, to: 165, type: "rough", label: "Long-left falloff" },
    ],
    4: [
      { from: 190, to: 255, type: "sand", label: "Glacier Bunker and heavy right rough frame the landing area" },
      { from: 360, to: 410, type: "sand", label: "Cross-bunker wall on the next shot" },
    ],
    5: [
      { from: 190, to: 250, type: "sand", label: "Diagonal cross-bunker line" },
      { from: 175, to: 260, type: "rough", label: "Trees and rough tighten the right side" },
    ],
    6: [
      { from: 195, to: 215, type: "sand", label: "Fairway bunker at the pinch point" },
    ],
    7: [
      { from: 215, to: 285, type: "rough", label: "Trees and rough narrow the right side" },
      { from: 315, to: 335, type: "sand", label: "Layup bunker farther ahead" },
    ],
    8: [
      { from: 0, to: 135, type: "carry", label: "Pond is a forced carry short-left" },
      { from: 135, to: 170, type: "sand", label: "Right greenside bunker" },
    ],
    9: [
      { from: 155, to: 215, type: "sand", label: "Diagonal bunker on the inside-left" },
    ],
    10: [
      { from: 225, to: 245, type: "sand", label: "Fairway bunker complex" },
      { from: 175, to: 275, type: "rough", label: "Narrow rough-lined corridor" },
    ],
    11: [
      { from: 180, to: 275, type: "rough", label: "Thick rough tightens both sides" },
      { from: 295, to: 320, type: "sand", label: "Fairway bunkers farther ahead" },
    ],
    12: [
      { from: 0, to: 150, type: "carry", label: "Opening trouble requires a committed carry" },
      { from: 215, to: 260, type: "sand", label: "Right-side bunker line" },
    ],
    13: [
      { from: 190, to: 255, type: "sand", label: "Inside-left bunker complex" },
      { from: 175, to: 270, type: "rough", label: "Narrow layup corridor" },
    ],
    14: [
      { from: 105, to: 145, type: "sand", label: "Bunkers short-left and right" },
    ],
    15: [
      { from: 185, to: 285, type: "rough", label: "Heavy rough pinches both sides" },
    ],
    16: [
      { from: 200, to: 250, type: "sand", label: "Left fairway bunker" },
      { from: 180, to: 280, type: "rough", label: "Rough tightens the downhill landing area" },
    ],
    17: [
      { from: 145, to: 180, type: "sand", label: "Front bunker complex" },
    ],
    18: [
      { from: 195, to: 215, type: "sand", label: "Fairway bunkers form a narrow chute" },
      { from: 175, to: 250, type: "rough", label: "Rough pinches both sides" },
    ],
  };

  const positionClubHoles = new Set([2, 5, 6, 9]);
  const foodStopNames = {
    1: "Hot dogs",
    2: "Poppers & wings",
    3: "Poppers & wings",
    5: "Smoothies & tuna tartare",
    6: "Smoothies & tuna tartare",
    8: "Rita’s ice",
    10: "Jerky & salamis",
    12: "Smoothies & tuna tartare",
    14: "Sushi",
    17: "Shots & mini burgers",
  };
  const storageKey = "bethpage-group-profile-v2";
  const form = document.querySelector("#group-form");
  const holesContainer = document.querySelector(".holes");
  const navLinks = document.querySelector(".hole-nav div");
  const setupPanel = document.querySelector("#setup-panel");
  const status = document.querySelector("#setup-status");

  if (!form || !holesContainer || !navLinks) return;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const cleanName = (value, fallback) => String(value || fallback).trim().slice(0, 16) || fallback;
  const cleanNumber = (value, fallback, min, max) => {
    const parsed = Number(value);
    return clamp(Math.round(Number.isFinite(parsed) && String(value).trim() !== "" ? parsed : fallback), min, max);
  };
  const between = (a, b, ratio) => {
    const t = clamp(ratio, 0, 1);
    return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
  };

  function pointAlongRoute(hole, distance) {
    const route = routes[hole];
    const legs = routeLegYards[hole];
    let remaining = Math.max(0, distance);
    for (let index = 0; index < legs.length; index += 1) {
      if (remaining <= legs[index]) return between(route[index], route[index + 1], remaining / legs[index]);
      remaining -= legs[index];
    }
    return route[route.length - 1];
  }

  function normalize(source) {
    return {
      start: cleanNumber(source.start, defaults.start, 1, 18),
      hcp: cleanNumber(source.hcp, defaults.hcp, 0, 40),
      driver: cleanNumber(source.driver, defaults.driver, 140, 330),
      longName: cleanName(source.longName, defaults.longName),
      long: cleanNumber(source.long, defaults.long, 100, 260),
      midName: cleanName(source.midName, defaults.midName),
      mid: cleanNumber(source.mid, defaults.mid, 70, 220),
      wedgeName: cleanName(source.wedgeName, defaults.wedgeName),
      wedge: cleanNumber(source.wedge, defaults.wedge, 40, 160),
    };
  }

  function profileFromUrl() {
    const params = new URLSearchParams(location.search);
    if (!params.has("start") && !params.has("hcp") && !params.has("driver")) return null;
    return normalize(Object.fromEntries(params.entries()));
  }

  function storedProfile() {
    try {
      return normalize(JSON.parse(localStorage.getItem(storageKey) || "null") || defaults);
    } catch {
      return { ...defaults };
    }
  }

  function fillForm(profile) {
    Object.entries(profile).forEach(([key, value]) => {
      if (form.elements[key]) form.elements[key].value = String(value);
    });
  }

  function readForm() {
    return normalize(Object.fromEntries(new FormData(form).entries()));
  }

  function paramsFor(profile) {
    const params = new URLSearchParams();
    Object.entries(profile).forEach(([key, value]) => params.set(key, String(value)));
    return params;
  }

  function updateUrl(profile) {
    history.replaceState(null, "", `${location.pathname}?${paramsFor(profile)}${location.hash}`);
  }

  function orderedHoles(start) {
    return Array.from({ length: 18 }, (_, index) => ((start - 1 + index) % 18) + 1);
  }

  function reorderRound(profile) {
    const order = orderedHoles(profile.start);
    const cards = new Map([...holesContainer.querySelectorAll(".hole-card")].map((card) => [Number(card.dataset.hole), card]));

    order.forEach((hole, index) => {
      const card = cards.get(hole);
      if (!card) return;
      holesContainer.append(card);
      card.querySelector("[data-stop-index]").textContent = `Stop ${index + 1} of 18`;
      const next = order[(index + 1) % order.length];
      const nextLink = card.querySelector("[data-next-hole]");
      nextLink.href = `#hole-${next}`;
      nextLink.textContent = index === 17 ? `Back to ${profile.start} →` : `Next: ${next} →`;
    });

    navLinks.replaceChildren(...order.map((hole, index) => {
      const link = document.createElement("a");
      link.href = `#hole-${hole}`;
      link.textContent = String(hole);
      if (index === 0) {
        link.className = "active";
        link.setAttribute("aria-current", "location");
      }
      return link;
    }));
  }

  function approachReference(yards, profile) {
    const clubs = [
      { name: profile.longName, distance: profile.long },
      { name: profile.midName, distance: profile.mid },
      { name: profile.wedgeName, distance: profile.wedge },
    ].sort((a, b) => b.distance - a.distance);

    if (yards > clubs[0].distance + 15) return `beyond comfortable ${clubs[0].name} range`;
    if (yards < clubs[2].distance - 18) return `shorter than a full ${clubs[2].name}`;

    const nearest = [...clubs].sort((a, b) => Math.abs(a.distance - yards) - Math.abs(b.distance - yards))[0];
    if (Math.abs(nearest.distance - yards) <= 10) return `a ${nearest.name} reference`;

    for (let index = 0; index < clubs.length - 1; index += 1) {
      if (yards < clubs[index].distance && yards > clubs[index + 1].distance) {
        return `between ${clubs[index].name} and ${clubs[index + 1].name}`;
      }
    }
    return `near your ${nearest.name} number`;
  }

  function handicapCall(profile, holeHdcp, par) {
    const hard = holeHdcp <= 6;
    if (profile.hcp <= 9) {
      return hard
        ? "Play one ball to the safe side first; the best position can then challenge."
        : "Once one ball is secure, this group can use the remaining swings aggressively.";
    }
    if (profile.hcp <= 18) {
      return hard
        ? "Use a bogey-first plan here: one safe ball before anyone attacks."
        : "Use the balanced sequence: fairway or green first, then press.";
    }
    if (par === 3) return "Put the first ball at the middle of the green; avoid four attempts at the tucked flag.";
    return hard
      ? "Treat this as one extra shot: keep every swing playable and take double out of the team card."
      : "Build the hole in playable stages; one stress-free bogey gives the group permission to attack.";
  }

  function planFor(card, profile) {
    const hole = Number(card.dataset.hole);
    const par = Number(card.dataset.par);
    const yards = Number(card.dataset.yards);
    const adjust = Number(card.dataset.adjust);
    const playing = Math.round(yards + adjust);
    const pin = routes[hole][routes[hole].length - 1];

    if (par === 3) {
      return {
        points: [routes[hole][0], pin],
        labels: [`${playing} yd · pin`],
        title: `${playing} yards · ${approachReference(playing, profile)}`,
        copy: `${handicapCall(profile, Number(card.dataset.holeHdcp), par)} Use the entered clubs as references; the tee marker and actual conditions decide the final club.`,
      };
    }

    const positional = positionClubHoles.has(hole);
    const teeClub = positional ? profile.longName : "driver";
    const teeDistance = positional ? profile.long : profile.driver;
    const driveBase = pointAlongRoute(hole, teeDistance);
    const drive = { ...driveBase, x: driveBase.x + (targetNudges[hole]?.[0] || 0) };
    const remainingAfterTee = Math.max(0, playing - teeDistance);

    if (par === 5) {
      const secondDistance = profile.long;
      const layupBase = pointAlongRoute(hole, teeDistance + secondDistance);
      const layup = { ...layupBase, x: layupBase.x + (targetNudges[hole]?.[1] || 0) };
      const remainingAfterTwo = Math.max(0, playing - teeDistance - secondDistance);
      return {
        points: [routes[hole][0], drive, layup, pin],
        labels: [`${teeDistance} yd · ${teeClub}`, `${secondDistance} yd · ${profile.longName}`, `~${remainingAfterTwo} yd left`],
        title: `${teeDistance} + ${secondDistance} leaves about ${remainingAfterTwo} yards`,
        copy: `${handicapCall(profile, Number(card.dataset.holeHdcp), par)} The third-shot estimate is ${approachReference(remainingAfterTwo, profile)}.`,
      };
    }

    return {
      points: [routes[hole][0], drive, pin],
      labels: [`${teeDistance} yd · ${teeClub}`, `~${remainingAfterTee} yd left`],
      title: `${teeClub === "driver" ? "Driver" : teeClub} leaves about ${remainingAfterTee} yards`,
      copy: `${handicapCall(profile, Number(card.dataset.holeHdcp), par)} The projected approach is ${approachReference(remainingAfterTee, profile)}.`,
    };
  }

  function updateDangerWindow(card, profile) {
    const hole = Number(card.dataset.hole);
    const par = Number(card.dataset.par);
    const playing = Math.round(Number(card.dataset.yards) + Number(card.dataset.adjust));
    const positional = positionClubHoles.has(hole);
    const clubName = positional ? profile.longName : "driver";
    const reference = par === 3 ? playing : (positional ? profile.long : profile.driver);
    const low = Math.round(reference * 0.8);
    const high = Math.round(reference * 1.2);
    const zones = dangerZones[hole] || [];
    const overlaps = zones.filter((zone) => zone.from <= high && zone.to >= low);
    const forcedCarries = par !== 3
      ? zones.filter((zone) => zone.type === "carry" && !overlaps.includes(zone))
      : [];
    const title = card.querySelector("[data-danger-title]");
    const list = card.querySelector("[data-danger-list]");

    title.textContent = par === 3
      ? `${low}–${high} yd shot band around the ${playing}-yard pin`
      : `${low}–${high} yd · ${clubName} total-distance window`;

    const notes = overlaps.map((zone) => {
      const range = zone.from === 0 ? `Carry by ~${zone.to} yd` : `~${zone.from}–${zone.to} yd`;
      return { type: zone.type, text: `${range}: ${zone.label}` };
    });
    forcedCarries.forEach((zone) => notes.unshift({ type: zone.type, text: `Forced carry: ${zone.label} (clear by roughly ${zone.to} yd)` }));

    if (!notes.length) {
      notes.push({
        type: "clear",
        text: `No mapped sand or water overlaps ${low}–${high} yd; fairway width and rough are still the priority.`,
      });
    }

    list.replaceChildren(...notes.map((note) => {
      const item = document.createElement("li");
      item.className = `danger-${note.type}`;
      item.textContent = note.text;
      return item;
    }));
  }

  function updateCanvas(card, plan) {
    card.querySelectorAll(".course-map").forEach((canvas) => {
      canvas.querySelectorAll("[data-shot-line]").forEach((line, index) => {
        const start = plan.points[index];
        const end = plan.points[index + 1];
        if (!start || !end) {
          line.hidden = true;
          return;
        }
        line.hidden = false;
        const dx = end.x - start.x;
        const dy = (end.y - start.y) * (4 / 3);
        line.style.left = `${start.x}%`;
        line.style.top = `${start.y}%`;
        line.style.width = `${Math.hypot(dx, dy)}%`;
        line.style.transform = `rotate(${Math.atan2(dy, dx) * 180 / Math.PI}deg)`;
      });

      canvas.querySelectorAll("[data-shot-target]").forEach((target, index) => {
        const point = plan.points[index + 1];
        if (!point) {
          target.hidden = true;
          return;
        }
        target.hidden = false;
        target.style.left = `${point.x}%`;
        target.style.top = `${point.y}%`;
      });
    });

    card.querySelectorAll("[data-shot-legend]").forEach((legend) => {
      const index = Number(legend.dataset.shotLegend);
      const label = plan.labels[index];
      legend.hidden = !label;
      const text = legend.querySelector("em");
      if (text && label) text.textContent = label;
    });
  }

  function updateCards(profile) {
    holesContainer.querySelectorAll(".hole-card").forEach((card) => {
      const plan = planFor(card, profile);
      card.querySelector("[data-plan-title]").textContent = plan.title;
      card.querySelector("[data-plan-copy]").textContent = plan.copy;
      updateDangerWindow(card, profile);
      updateCanvas(card, plan);
    });
  }

  const weatherPointUrl = "https://api.weather.gov/points/40.744,-73.456";
  const eventDate = "2026-07-27";

  function datePartsInNewYork(date) {
    return Object.fromEntries(
      new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        hourCycle: "h23",
      }).formatToParts(date).filter((part) => part.type !== "literal").map((part) => [part.type, part.value]),
    );
  }

  function renderRainForecast(periods) {
    const hours = periods.map((period) => {
      const parts = datePartsInNewYork(new Date(period.startTime));
      return { ...period, localDate: `${parts.year}-${parts.month}-${parts.day}`, localHour: Number(parts.hour) };
    }).filter((period) => period.localDate === eventDate && period.localHour >= 8 && period.localHour <= 16);

    if (!hours.length) throw new Error("Tournament-day hourly forecast is not available yet.");

    const container = document.querySelector("#rain-hours");
    const summary = document.querySelector("#rain-summary");
    const updated = document.querySelector("#rain-updated");
    const peak = hours.reduce((highest, period) =>
      (period.probabilityOfPrecipitation?.value || 0) > (highest.probabilityOfPrecipitation?.value || 0) ? period : highest,
    hours[0]);
    const peakChance = peak.probabilityOfPrecipitation?.value || 0;
    const peakLabel = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", hour: "numeric" }).format(new Date(peak.startTime));

    summary.textContent = peakChance >= 50
      ? `Rain is a factor: peak chance ${peakChance}% at ${peakLabel}`
      : peakChance >= 25
        ? `Keep a rain layer handy: peak chance ${peakChance}% at ${peakLabel}`
        : `Low rain risk: peak chance ${peakChance}% at ${peakLabel}`;

    container.replaceChildren(...hours.map((period) => {
      const chance = period.probabilityOfPrecipitation?.value || 0;
      const hour = document.createElement("span");
      hour.className = `rain-hour ${chance >= 50 ? "rain-high" : chance >= 25 ? "rain-medium" : ""}`;
      const time = document.createElement("b");
      time.textContent = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", hour: "numeric" }).format(new Date(period.startTime));
      const bar = document.createElement("i");
      bar.style.setProperty("--rain", `${Math.max(4, chance)}%`);
      const value = document.createElement("strong");
      value.textContent = `${chance}%`;
      const temp = document.createElement("small");
      temp.textContent = `${period.temperature}°`;
      hour.title = `${period.shortForecast}; ${chance}% rain; ${period.temperature}°${period.temperatureUnit}`;
      hour.append(time, bar, value, temp);
      return hour;
    }));
    updated.innerHTML = `Updated ${new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", hour: "numeric", minute: "2-digit" }).format(new Date())} from <a href="https://forecast.weather.gov/MapClick.php?lat=40.744&lon=-73.456" target="_blank" rel="noreferrer">Weather.gov</a>. Refreshes hourly.`;
  }

  function renderWeatherError() {
    const summary = document.querySelector("#rain-summary");
    const container = document.querySelector("#rain-hours");
    const updated = document.querySelector("#rain-updated");
    if (!summary || !container || !updated) return;
    summary.textContent = "Live rain forecast is temporarily unavailable";
    container.innerHTML = '<a class="weather-fallback" href="https://forecast.weather.gov/MapClick.php?lat=40.744&lon=-73.456" target="_blank" rel="noreferrer">Open the Bethpage forecast ↗</a>';
    updated.textContent = "Try again when you reopen or refocus this page.";
  }

  async function updateWeather() {
    try {
      const pointResponse = await fetch(weatherPointUrl, { headers: { Accept: "application/geo+json" } });
      if (!pointResponse.ok) throw new Error(`Weather point request failed: ${pointResponse.status}`);
      const point = await pointResponse.json();
      const hourlyResponse = await fetch(point.properties.forecastHourly, { headers: { Accept: "application/geo+json" } });
      if (!hourlyResponse.ok) throw new Error(`Hourly forecast request failed: ${hourlyResponse.status}`);
      const hourly = await hourlyResponse.json();
      renderRainForecast(hourly.properties.periods || []);
    } catch {
      renderWeatherError();
    }
  }

  function updateProfileCopy(profile) {
    const firstFoodHole = orderedHoles(profile.start).find((hole) => foodStopNames[hole]);
    document.querySelector("#start-summary").textContent = `Hole ${profile.start} · 11:00 AM`;
    document.querySelector("#first-food-summary").textContent = `Hole ${firstFoodHole} · ${foodStopNames[firstFoodHole]}`;
    document.querySelector("#start-round-link").href = `#hole-${profile.start}`;
    document.querySelector("#setup-summary").textContent = `Hole ${profile.start} · ${profile.hcp} HCP · ${profile.driver}-yard driver`;
    document.querySelector("#nav-profile").textContent = `Hole ${profile.start} start`;
    document.querySelector("#hero-profile").textContent =
      `Yellow tees · ${profile.hcp}-handicap group · ${profile.driver}-yard driver · ${profile.long}-yard ${profile.longName}.`;
  }

  function applyProfile(profile, options = {}) {
    const normalized = normalize(profile);
    fillForm(normalized);
    reorderRound(normalized);
    updateCards(normalized);
    updateProfileCopy(normalized);
    document.body.classList.add("guide-ready");

    if (options.persist) {
      localStorage.setItem(storageKey, JSON.stringify(normalized));
      updateUrl(normalized);
    }
    return normalized;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const profile = applyProfile(readForm(), { persist: true });
    setupPanel.open = false;
    status.value = `Guide updated for a Hole ${profile.start} start.`;
  });

  document.querySelector(".customize-link")?.addEventListener("click", () => {
    setupPanel.open = true;
  });

  const mapTriggers = new WeakMap();
  const closeMap = (modal, restoreFocus = true) => {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("map-dialog-open");
    if (restoreFocus) mapTriggers.get(modal)?.focus();
  };

  document.querySelectorAll("[data-map-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.getElementById(button.getAttribute("aria-controls"));
      if (!modal) return;
      mapTriggers.set(modal, button);
      modal.hidden = false;
      document.body.classList.add("map-dialog-open");
      modal.querySelector("[data-map-close]")?.focus();
    });
  });

  document.querySelectorAll("[data-map-modal]").forEach((modal) => {
    modal.querySelector("[data-map-close]")?.addEventListener("click", () => closeMap(modal));
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeMap(modal);
    });
  });

  document.addEventListener("keydown", (event) => {
    const openModal = document.querySelector("[data-map-modal]:not([hidden])");
    if (!openModal) return;
    if (event.key === "Escape") {
      closeMap(openModal);
      return;
    }
    if (event.key === "Tab") {
      event.preventDefault();
      openModal.querySelector("[data-map-close]")?.focus();
    }
  });

  const connectionStatus = document.querySelector("#connection-status");
  let reconnectTimer;
  const setConnectionState = (isOnline) => {
    if (!connectionStatus) return;
    window.clearTimeout(reconnectTimer);
    if (!isOnline) {
      connectionStatus.classList.remove("is-online");
      connectionStatus.querySelector("strong").textContent = "Connection lost";
      connectionStatus.querySelector("span").textContent = "Open content still works. Weather and unloaded maps may wait.";
      connectionStatus.hidden = false;
      return;
    }
    if (connectionStatus.hidden) return;
    connectionStatus.classList.add("is-online");
    connectionStatus.querySelector("strong").textContent = "Back online";
    connectionStatus.querySelector("span").textContent = "Live weather and maps can refresh again.";
    reconnectTimer = window.setTimeout(() => {
      connectionStatus.hidden = true;
    }, 2500);
  };
  window.addEventListener("offline", () => setConnectionState(false));
  window.addEventListener("online", () => setConnectionState(true));
  setConnectionState(navigator.onLine);

  document.querySelector("#share-setup")?.addEventListener("click", async () => {
    if (!form.reportValidity()) return;
    const profile = applyProfile(readForm(), { persist: true });
    const link = `${location.origin}${location.pathname}?${paramsFor(profile)}`;
    try {
      await navigator.clipboard.writeText(link);
      status.value = "Setup link copied — send it to the group.";
    } catch {
      const field = document.createElement("textarea");
      field.value = link;
      document.body.append(field);
      field.select();
      document.execCommand("copy");
      field.remove();
      status.value = "Setup link copied — send it to the group.";
    }
  });

  function setActiveHole(activeHole) {
    navLinks.querySelectorAll("a").forEach((link) => {
      const active = Number(link.textContent) === activeHole;
      link.classList.toggle("active", active);
      if (active) {
        link.setAttribute("aria-current", "location");
        const linkStart = link.offsetLeft;
        const linkEnd = linkStart + link.offsetWidth;
        const visibleStart = navLinks.scrollLeft;
        const visibleEnd = visibleStart + navLinks.clientWidth;
        if (linkStart < visibleStart || linkEnd > visibleEnd) {
          navLinks.scrollTo({ left: linkStart - (navLinks.clientWidth - link.offsetWidth) / 2, behavior: "smooth" });
        }
      } else link.removeAttribute("aria-current");
    });
  }

  window.addEventListener("hashchange", () => {
    const activeHole = Number(location.hash.replace("#hole-", ""));
    if (activeHole) setActiveHole(activeHole);
  });

  if ("IntersectionObserver" in window) {
    const holeObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => Math.abs(a.boundingClientRect.top - 70) - Math.abs(b.boundingClientRect.top - 70))[0];
      if (visible) setActiveHole(Number(visible.target.dataset.hole));
    }, { rootMargin: "-70px 0px -68% 0px", threshold: [0, 0.05] });
    holesContainer.querySelectorAll(".hole-card").forEach((card) => holeObserver.observe(card));
  }

  const urlProfile = profileFromUrl();
  const initial = applyProfile(urlProfile || storedProfile());
  setupPanel.open = !urlProfile && !localStorage.getItem(storageKey);
  fillForm(initial);
  updateWeather();
  window.setInterval(updateWeather, 60 * 60 * 1000);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") updateWeather();
  });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(initializeGuide, 0), { once: true });
  } else {
    setTimeout(initializeGuide, 0);
  }
})();
