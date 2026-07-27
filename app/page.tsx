import type { CSSProperties } from "react";

type Hole = {
  n: number;
  par: number;
  yards: number;
  hdcp: number;
  depth: number;
  on: number;
  side: "L" | "R";
  sideYards: number;
  adjust: number;
  shape: "straight" | "left" | "right";
  hazards: string[];
  headline: string;
  tee: string;
  approach: string;
  team: string;
};

const holes: Hole[] = [
  { n: 14, par: 3, yards: 139, hdcp: 17, depth: 40, on: 13, side: "L", sideYards: 7, adjust: -7, shape: "straight", hazards: ["Bunker short-left", "Bunker right"], headline: "Start with a real birdie look", tee: "Pin plays about 132 from the yellow-card yardage. Favor the middle-left, but don’t short-side it left. A smooth club to the center is the percentage play.", approach: "The pin is front-left. Short is sand; long leaves plenty of green. Club for the number, not the adrenaline of the first swing.", team: "Closest-to-pin hole: first player hits center-green. Once one is safely aboard, the others can aim 7 yards left of center." },
  { n: 15, par: 4, yards: 417, hdcp: 1, depth: 36, on: 23, side: "R", sideYards: 11, adjust: 5, shape: "left", hazards: ["Rough both sides", "Uphill approach", "Green bunkers"], headline: "Bogey is a win on the hardest hole", tee: "Favor the right-center. Do not chase extra yards into Bethpage rough.", approach: "The pin is back-right. If the green is out of range, lay to your best wedge number. Missing short-center is far better than either side.", team: "Get one drive in play, then let the final players swing freely. The first stress-free 5 is valuable in best ball." },
  { n: 16, par: 4, yards: 431, hdcp: 5, depth: 32, on: 10, side: "L", sideYards: 10, adjust: -6, shape: "left", hazards: ["Left fairway bunker", "Deep green bunkers"], headline: "Use the downhill tee — stay out of sand", tee: "Driver at the right-center of the fairway. The elevated tee helps, but the left bunker and rough can turn this into three shots quickly.", approach: "Front-left pin plays about 425. Take enough club to clear the front hazards; center-green is the target from anything over 170.", team: "After one fairway, a confident hitter can shade left for a shorter angle. Everyone else keeps double out of play." },
  { n: 17, par: 3, yards: 178, hdcp: 13, depth: 29, on: 4, side: "L", sideYards: 11, adjust: -10.5, shape: "straight", hazards: ["Five bunkers", "False-front feel"], headline: "Front pin, but the miss is not short", tee: "Choose the club that comfortably carries the front edge. Aim center, not directly at the tucked front-left flag.", approach: "Four paces on means almost no cushion. A ball 20 feet long is excellent. Anything short can roll back or find sand.", team: "First ball: middle of the green. With cover secured, the best iron player can attack the left half." },
  { n: 18, par: 4, yards: 345, hdcp: 15, depth: 31, on: 9, side: "R", sideYards: 6, adjust: -6.5, shape: "straight", hazards: ["Narrow bunker chute", "Rough pinches landing"], headline: "Fairway first; then chase the long-drive sign", tee: "The fairway narrows between bunkers, so pick a committed center line.", approach: "Front-right pin plays about 339. Favor center-right and keep the approach below the hole.", team: "Men’s and women’s long drive: put one controlled drive in the fairway first. Then the remaining eligible players can send it — only a fairway ball counts." },
  { n: 1, par: 4, yards: 426, hdcp: 8, depth: 38, on: 30, side: "R", sideYards: 7, adjust: 11, shape: "right", hazards: ["Trees right", "Rough through dogleg", "Back pin"], headline: "Don’t let the downhill view bait you right", tee: "Favor the left-center. A push right can be blocked by trees.", approach: "Back-right pin adds 11 yards. From rough, advance safely; from fairway, take the extra club and aim center.", team: "Lead with a fairway finder. Only after one is safe should anyone challenge the right side for a shorter look." },
  { n: 2, par: 4, yards: 346, hdcp: 16, depth: 29, on: 15, side: "R", sideYards: 12, adjust: 0.5, shape: "right", hazards: ["Trees at corner", "Deep bunkers right", "Steep uphill"], headline: "Short on paper, steep on the second shot", tee: "Choose a reliable club to center-left and keep the dogleg in front of you. Driver is fine only if the shape is reliable.", approach: "Pin is center-right. The green sits well uphill: add a club, favor center-left, and accept a longer putt.", team: "This is a scoring chance if one tee ball finds grass. Don’t let all four players take on the corner." },
  { n: 3, par: 3, yards: 128, hdcp: 18, depth: 39, on: 16, side: "R", sideYards: 7, adjust: -3.5, shape: "straight", hazards: ["Deep front bunker", "Falloff long-left"], headline: "Middle of the green is plenty", tee: "Pin plays roughly 125, slightly front-right. Choose a full, comfortable shot and aim a few paces left of the flag.", approach: "The green is wide but shallow. Avoid the deep front sand and the long-left falloff.", team: "One safe green first; then fire at the flag. This is one of your best chances to post a 3 or better." },
  { n: 4, par: 5, yards: 438, hdcp: 2, depth: 24, on: 7, side: "R", sideYards: 12, adjust: -5, shape: "left", hazards: ["Glacier bunker", "Cross-bunker walls", "Elevated green"], headline: "Three smart shots beat one heroic mistake", tee: "Play left of the huge right-side Glacier Bunker. Set up a controlled layup, not a forced second.", approach: "Lay up short of the next bunker wall to a comfortable wedge number, then take enough loft to carry the front sand.", team: "No one needs to reach in two. Put two balls in position, then let the best-struck drive try the more aggressive second." },
  { n: 5, par: 4, yards: 401, hdcp: 4, depth: 24, on: 14, side: "R", sideYards: 14, adjust: 2, shape: "right", hazards: ["Cross bunkers", "Trees right", "Uphill green"], headline: "Respect the cross bunkers", tee: "Use the club that finishes short-left of the diagonal sand unless the actual marker makes the carry obvious.", approach: "From a long way out, play to the mouth/front-center rather than bringing every bunker into play.", team: "Assign one player to lay back. Players with a safe ball behind them may challenge the carry only if the exact yardage fits." },
  { n: 6, par: 4, yards: 376, hdcp: 10, depth: 28, on: 14, side: "R", sideYards: 12, adjust: 0, shape: "straight", hazards: ["Fairway bunkers", "Sand around green"], headline: "Pick the fattest landing area", tee: "The fairway pinches near the bunkers. A controlled long club finds the wide section; driver brings more sand into play.", approach: "Center-right pin. From long range, aim at the front opening rather than forcing a carry at the flag.", team: "One player lays to the wide section; after that, the strongest driver can press." },
  { n: 7, par: 5, yards: 489, hdcp: 6, depth: 29, on: 13, side: "L", sideYards: 12, adjust: -1.5, shape: "right", hazards: ["Trees and bunker right", "Guarded green"], headline: "A genuine three-shot birdie chance", tee: "Play to the widest center-left portion and set up a comfortable layup.", approach: "Center-left pin. Lay up to a favorite full-wedge number, keeping the second away from the right-side trouble.", team: "This is where patient golf can produce a 4 or 5. Agree on wedge numbers before anyone hits the second." },
  { n: 8, par: 3, yards: 152, hdcp: 14, depth: 44, on: 13, side: "L", sideYards: 12, adjust: -9, shape: "straight", hazards: ["Pond short-left", "Bunker right"], headline: "The only water: carry it and breathe", tee: "Front-left pin plays roughly 143 and the shot is downhill. Use a club you know carries the pond; aim center-right, away from both water and flag.", approach: "The green is very deep. Long-center is much safer than short-left.", team: "Hole-in-one contest, but don’t donate four balls. Secure the green first, then let the rest chase the flag." },
  { n: 9, par: 4, yards: 293, hdcp: 12, depth: 30, on: 15, side: "L", sideYards: 8, adjust: 0, shape: "left", hazards: ["Diagonal left bunker", "Narrow angle"], headline: "Position beats power on the short card yardage", tee: "A reliable long club to center-right avoids the diagonal bunker on the inside-left. Driver is only for a very confident line.", approach: "Center-left pin. Attack from the fairway; from rough, use the middle of the green.", team: "Great best-ball opportunity. Lock in one position tee shot, then the remaining players can push closer." },
  { n: 10, par: 4, yards: 377, hdcp: 9, depth: 28, on: 12, side: "R", sideYards: 13, adjust: -2, shape: "straight", hazards: ["Many fairway bunkers", "Narrow corridor"], headline: "Fairway is the entire assignment", tee: "Driver only if it is behaving. Center is perfect; the hole’s bunker field punishes small misses.", approach: "Slightly front-right pin. Aim center and resist short-siding right.", team: "Send the steadiest driver first. This starts the demanding 10–12 stretch; a boring 5 can save the team." },
  { n: 11, par: 4, yards: 412, hdcp: 11, depth: 31, on: 11, side: "L", sideYards: 11, adjust: -4.5, shape: "left", hazards: ["Bunkers left and right", "Elevated target"], headline: "Treat the approach as a three-shot decision", tee: "Favor center-right, away from the inside-left trouble.", approach: "If the green carry isn’t comfortable, lay short-center and leave a simple pitch.", team: "One player commits to the no-double route. A player with the best drive can take on the front edge." },
  { n: 12, par: 4, yards: 403, hdcp: 7, depth: 35, on: 20, side: "R", sideYards: 14, adjust: 2.5, shape: "right", hazards: ["Long forced carry feel", "Right-side bunkers"], headline: "No shame in playing this as a par 5", tee: "Driver at left-center. Your priority is clearing the opening trouble and staying out of the right rough.", approach: "Back-right pin makes it about 406. From 175+, center or front-center is the target; missing right is expensive.", team: "With a safe drive, one player may attack. Otherwise everyone builds a five with three playable shots." },
  { n: 13, par: 5, yards: 472, hdcp: 3, depth: 29, on: 13, side: "L", sideYards: 9, adjust: -1.5, shape: "left", hazards: ["Bunker complex", "Narrow layup zone"], headline: "Three committed shots, no forced carry", tee: "Favor center-right. Don’t flirt with the inside-left bunker complex.", approach: "Use the widest layup area and leave a comfortable third. The best angle matters more than the longest second.", team: "Choose different layup distances across the group. The best angle, not the longest second, gets the green light." },
];

const order = [14, 15, 16, 17, 18, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

type Sponsor = { name: string; logo: string };
type FoodStop = { offering: string; note?: string; sponsors: Sponsor[] };

const sponsor = {
  muscat: { name: "Muscat Catering", logo: "/sponsors/muscat.png" },
  smash: { name: "Smash House", logo: "/sponsors/smash-house.png" },
  sunflower: { name: "Sunflower", logo: "/sponsors/sunflower.png" },
  doma: { name: "Doma Land + Sea", logo: "/sponsors/doma.png" },
  ritas: { name: "Rita’s of Lawrence", logo: "/sponsors/ritas.png" },
  chimichurri: { name: "Chimichurri Charcoal Chicken", logo: "/sponsors/chimichurri.png" },
  sushi: { name: "Sushi Tokyo", logo: "/sponsors/sushi-tokyo.png" },
  schnitzel: { name: "Holy Schnitzel", logo: "/sponsors/holy-schnitzel.png" },
};

const foodStops: Record<number, FoodStop> = {
  1: { offering: "Hot dogs", sponsors: [sponsor.muscat] },
  2: { offering: "Poppers & wings", note: "Shared stop with Hole 3", sponsors: [sponsor.smash] },
  3: { offering: "Poppers & wings", note: "Shared stop with Hole 2", sponsors: [sponsor.smash] },
  5: { offering: "Smoothies & tuna tartare", note: "Meeting point with Holes 6 & 12", sponsors: [sponsor.sunflower, sponsor.doma] },
  6: { offering: "Smoothies & tuna tartare", note: "Meeting point with Holes 5 & 12", sponsors: [sponsor.sunflower, sponsor.doma] },
  8: { offering: "Italian ice", sponsors: [sponsor.ritas] },
  10: { offering: "Beef jerky & salamis", sponsors: [sponsor.chimichurri] },
  12: { offering: "Smoothies & tuna tartare", note: "Meeting point with Holes 5 & 6", sponsors: [sponsor.sunflower, sponsor.doma] },
  14: { offering: "Sushi", sponsors: [sponsor.sushi] },
  17: { offering: "Shot table & mini burgers", sponsors: [sponsor.schnitzel] },
};

const hospitalityStops = [
  { holes: "Hole 1", ...foodStops[1] },
  { holes: "Holes 2 / 3", ...foodStops[2], note: undefined },
  { holes: "Holes 5 / 6 / 12", ...foodStops[5], note: "Shared meeting point" },
  { holes: "Hole 8", ...foodStops[8] },
  { holes: "Hole 10", ...foodStops[10] },
  { holes: "Hole 14", ...foodStops[14] },
  { holes: "Hole 17", ...foodStops[17] },
];

function SponsorLogos({ sponsors, compact = false }: { sponsors: Sponsor[]; compact?: boolean }) {
  return (
    <div className={`sponsor-logos ${compact ? "compact" : ""}`}>
      {sponsors.map((item) => (
        <span className="sponsor-logo" key={item.name}>
          <img src={item.logo} alt={`${item.name} logo`} />
        </span>
      ))}
    </div>
  );
}

type MapPoint = { x: number; y: number };

const aerialRoutes: Record<number, MapPoint[]> = {
  1: [{ x: 56.9, y: 88.4 }, { x: 36.2, y: 31.9 }, { x: 56.9, y: 11.6 }],
  2: [{ x: 46.3, y: 88.3 }, { x: 57.5, y: 36.2 }, { x: 46.3, y: 11.7 }],
  3: [{ x: 50, y: 84.4 }, { x: 50, y: 15.6 }],
  4: [{ x: 45.7, y: 89.1 }, { x: 55.5, y: 46.0 }, { x: 53.0, y: 16.9 }, { x: 45.7, y: 10.9 }],
  5: [{ x: 49.9, y: 88.0 }, { x: 50.2, y: 40.4 }, { x: 49.9, y: 12.0 }],
  6: [{ x: 47.3, y: 88.5 }, { x: 55.4, y: 30.4 }, { x: 47.3, y: 11.5 }],
  7: [{ x: 58.1, y: 88.3 }, { x: 31.6, y: 45.6 }, { x: 52.2, y: 17.6 }, { x: 58.1, y: 11.7 }],
  8: [{ x: 50, y: 83.8 }, { x: 50, y: 16.2 }],
  9: [{ x: 42.5, y: 88.4 }, { x: 65.0, y: 37.8 }, { x: 42.5, y: 11.6 }],
  10: [{ x: 48.5, y: 88.5 }, { x: 52.9, y: 41.1 }, { x: 48.5, y: 11.5 }],
  11: [{ x: 49.3, y: 87.8 }, { x: 51.5, y: 35.9 }, { x: 49.3, y: 12.2 }],
  12: [{ x: 43.0, y: 88.1 }, { x: 64.1, y: 41.4 }, { x: 43.0, y: 11.9 }],
  13: [{ x: 51.0, y: 89.3 }, { x: 48.0, y: 50.4 }, { x: 50.0, y: 20.6 }, { x: 51.0, y: 10.7 }],
  14: [{ x: 50, y: 82.2 }, { x: 50, y: 17.8 }],
  15: [{ x: 47.2, y: 88.0 }, { x: 55.6, y: 40.3 }, { x: 47.2, y: 12.0 }],
  16: [{ x: 48.4, y: 88.3 }, { x: 53.1, y: 39.6 }, { x: 48.4, y: 11.7 }],
  17: [{ x: 50, y: 84.0 }, { x: 50, y: 16.0 }],
  18: [{ x: 50.2, y: 87.6 }, { x: 49.6, y: 35.2 }, { x: 50.2, y: 12.4 }],
};

const routeLegYards: Record<number, number[]> = {
  1: [300, 131], 2: [260, 127], 3: [236], 4: [285, 190, 53],
  5: [300, 179], 6: [300, 102], 7: [295, 200, 47], 8: [211],
  9: [300, 176], 10: [310, 194], 11: [300, 138], 12: [310, 210],
  13: [300, 230, 77], 14: [162], 15: [300, 181], 16: [310, 179],
  17: [206], 18: [290, 126],
};

const targetNudges: Record<number, number[]> = {
  1: [-5], 2: [-5], 4: [-6, -4], 5: [-6], 6: [0], 7: [-4, -4],
  9: [5], 10: [0], 11: [4], 12: [-5], 13: [4, 0], 15: [5], 16: [4], 18: [0],
};

function between(a: MapPoint, b: MapPoint, ratio: number): MapPoint {
  const t = Math.max(0, Math.min(1, ratio));
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

function shotPlan(hole: Hole) {
  const route = aerialRoutes[hole.n];
  const pin = route[route.length - 1];
  const playingYards = Math.round(hole.yards + hole.adjust);

  if (hole.par === 3) {
    return {
      points: [route[0], pin],
      targets: [{ point: pin, label: `${playingYards} yd · pin` }],
    };
  }

  const teeTarget = [2, 5, 6, 9].includes(hole.n) ? 180 : 225;
  const driveBase = between(route[0], route[1], teeTarget / routeLegYards[hole.n][0]);
  const drive = { ...driveBase, x: driveBase.x + (targetNudges[hole.n]?.[0] ?? 0) };

  if (hole.par === 5) {
    const layupCarry = 178;
    const yardsRemainingToFirstBend = routeLegYards[hole.n][0] - teeTarget;
    const yardsIntoSecondLeg = layupCarry - yardsRemainingToFirstBend;
    const layupBase = between(route[1], route[2], yardsIntoSecondLeg / routeLegYards[hole.n][1]);
    const layup = { ...layupBase, x: layupBase.x + (targetNudges[hole.n]?.[1] ?? 0) };
    return {
      points: [route[0], drive, layup, pin],
      targets: [
        { point: drive, label: `${teeTarget} yd · driver` },
        { point: layup, label: `175–180 yd · layup` },
        { point: pin, label: "Center green" },
      ],
    };
  }

  return {
    points: [route[0], drive, pin],
    targets: [
      { point: drive, label: teeTarget === 180 ? "175–180 yd · 3W" : "220–230 yd · driver" },
      { point: pin, label: "Center green" },
    ],
  };
}

function PinMap({ hole }: { hole: Hole }) {
  const x = hole.side === "L" ? 50 - hole.sideYards * 2 : 50 + hole.sideYards * 2;
  const y = 88 - (hole.on / hole.depth) * 72;
  return (
    <div className="pin-map" aria-label={`Pin ${hole.on} yards on, ${hole.sideYards} yards ${hole.side === "L" ? "left" : "right"} of center`}>
      <span className="green-depth">{hole.depth}y deep</span>
      <span className="pin-dot" style={{ "--pin-x": `${x}%`, "--pin-y": `${y}%` } as CSSProperties} />
      <span className="front-label">front</span>
    </div>
  );
}

function CourseMap({ hole }: { hole: Hole }) {
  const plan = shotPlan(hole);
  const mapCanvas = (expanded = false) => (
    <div className={`course-map ${expanded ? "expanded-map" : ""}`}>
      <img src={`/aerials/hole-${hole.n}.webp`} alt={`Aerial map of Bethpage Black hole ${hole.n}, oriented from tee to green`} />
      <span className="map-shade" />
      {plan.points.slice(0, -1).map((start, index) => {
        const end = plan.points[index + 1];
        const dx = end.x - start.x;
        const dy = (end.y - start.y) * (4 / 3);
        return (
          <span
            className="shot-line"
            data-shot-line={index}
            key={`${start.x}-${start.y}`}
            style={{
              left: `${start.x}%`,
              top: `${start.y}%`,
              width: `${Math.hypot(dx, dy)}%`,
              transform: `rotate(${Math.atan2(dy, dx) * 180 / Math.PI}deg)`,
            }}
          />
        );
      })}
      <span className="map-tee" style={{ left: `${plan.points[0].x}%`, top: `${plan.points[0].y}%` }}>T</span>
      {plan.targets.map((target, index) => (
        <span className={`shot-target target-${index + 1}`} data-shot-target={index} style={{ left: `${target.point.x}%`, top: `${target.point.y}%` }} key={target.label}>
          {index + 1}
        </span>
      ))}
      <span className="imagery-credit">Esri · Maxar</span>
    </div>
  );

  return (
    <div className="aerial-wrap">
      {mapCanvas()}
      <input className="map-zoom-toggle" type="checkbox" id={`zoom-map-${hole.n}`} />
      <label className="map-open" htmlFor={`zoom-map-${hole.n}`}>Expand aerial ↗</label>
      <div className="map-modal" role="dialog" aria-label={`Expanded aerial map of hole ${hole.n}`}>
        <label className="map-close" htmlFor={`zoom-map-${hole.n}`}>Close ×</label>
        {mapCanvas(true)}
        <div className="aerial-legend expanded-legend">
          {plan.targets.map((target, index) => (
            <span data-shot-legend={index} key={target.label}><b>{index + 1}</b><em>{target.label}</em></span>
          ))}
        </div>
      </div>
      <div className="aerial-legend">
        {plan.targets.map((target, index) => (
          <span data-shot-legend={index} key={target.label}><b>{index + 1}</b><em>{target.label}</em></span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero">
        <img className="hero-ball" src="/event/teal-golf-ball.png" alt="" aria-hidden="true" />
        <img className="event-lockup" src="/event/tournament-lockup.png" alt="Ohel Rosemil Healthcare Golf Tournament" />
        <div className="eyebrow">Bethpage Black · July 27, 2026</div>
        <h1>Everything you need,<br /><span>hole by hole.</span></h1>
        <p className="hero-copy" id="hero-profile">Yellow tees · personalized for your starting hole, group handicap, and reliable club distances.</p>
        <div className="start-card">
          <div className="start-facts">
            <div><span className="start-label">Your shotgun start</span><strong id="start-summary">Hole 14 · 11:00 AM</strong></div>
            <div><span className="start-label">First food stop</span><strong id="first-food-summary">Hole 14 · Sushi</strong></div>
          </div>
          <div className="start-actions">
            <a href="#hole-14" id="start-round-link">Start the round <span>↓</span></a>
            <a href="#group-setup" className="customize-link">Customize group</a>
          </div>
        </div>
        <div className="rain-widget" id="rain-widget" aria-live="polite">
          <div className="rain-heading">
            <span className="rain-icon" aria-hidden="true">☂</span>
            <div><span>Tomorrow · 8 AM–4 PM</span><strong id="rain-summary">Checking the hourly rain forecast…</strong></div>
          </div>
          <div className="rain-hours" id="rain-hours" aria-label="Hourly rain chances">
            <span className="rain-loading">Loading Weather.gov…</span>
          </div>
          <small id="rain-updated">Updates hourly from the National Weather Service.</small>
        </div>
        <div className="day-checks" aria-label="Course-day reminders">
          <span><b>Walking course</b>Lighten your bag before arrival.</span>
          <span><b>Caddie courtesy</b>Plan as a foursome to tip both caddies appropriately.</span>
          <span><b>Best-ball scoring</b>Enter every individual score in Golf Genius after each hole.</span>
        </div>
      </section>

      <section className="mission-section" aria-labelledby="mission-title">
        <div>
          <p className="section-kicker">Why we play</p>
          <h2 id="mission-title">More than a round of golf.</h2>
          <p>Today supports Ohel’s care and critical services for children, adults, and families facing mental-health challenges, developmental disabilities, family crises, domestic violence, aging, and trauma — locally and through trauma-response work in Israel.</p>
        </div>
        <div className="mission-action">
          <strong>Turn today’s round into lasting impact.</strong>
          <p>Every gift helps Ohel continue essential care for people and families who rely on it.</p>
          <a className="donate-button" href="https://www.ohelfamily.org/donate/" target="_blank" rel="noreferrer">Donate to Ohel ↗</a>
          <a className="impact-link" href="https://www.ohelfamily.org/" target="_blank" rel="noreferrer">See Ohel’s impact</a>
        </div>
      </section>

      <section className="event-essentials" aria-labelledby="event-title">
        <div className="event-heading">
          <div>
            <p className="section-kicker">Before the first swing</p>
            <h2 id="event-title">Event essentials</h2>
          </div>
          <a className="directions-link" href="https://www.google.com/maps/dir/?api=1&destination=99+Quaker+Meeting+House+Rd%2C+Farmingdale%2C+NY+11735" target="_blank" rel="noreferrer">Directions ↗</a>
        </div>
        <div className="event-grid">
          <article><span>9:30 AM</span><strong>Drive-through registration</strong><p>Staff collect and tag your golf bag, then you check in and receive tournament swag without leaving the car.</p></article>
          <article><span>After check-in</span><strong>Park, shuttle, breakfast</strong><p>Park in the designated lot. A complimentary shuttle returns you to the clubhouse for breakfast.</p></article>
          <article><span>11:00 AM sharp</span><strong>Shotgun start</strong><p>Carts take players to their starting holes and return them after play. The course itself is walking only.</p></article>
          <article className="caddie-card"><span>During the round</span><strong>Two caddies per foursome</strong><p>They will carry the bags. Remove unnecessary items before arrival; locker rooms and changing facilities are available.</p><p className="caddie-tip"><b>Caddie courtesy:</b> Please coordinate as a foursome and tip both caddies appropriately at the end of the round.</p></article>
        </div>
        <details className="arrival-details">
          <summary>Address and arrival checklist</summary>
          <div>
            <p><strong>Bethpage State Park</strong><br />99 Quaker Meeting House Rd, Farmingdale, NY 11735</p>
            <ol>
              <li>Enter the forecourt and remain in your car.</li>
              <li>Let staff collect and tag your golf bag.</li>
              <li>Complete check-in and receive tournament swag.</li>
              <li>Park in the designated lot and take the shuttle to breakfast.</li>
            </ol>
          </div>
        </details>
      </section>

      <section className="setup-section" id="group-setup" aria-labelledby="setup-title">
        <div className="setup-intro">
          <p className="section-kicker">Make it yours</p>
          <h2 id="setup-title">Set up your foursome</h2>
          <p>Use normal, playable distances — not the best shot you have ever hit. Your choices stay on this device and can travel in a shareable link.</p>
        </div>
        <details className="setup-panel" id="setup-panel" open>
          <summary>
            <span>Group setup</span>
            <strong id="setup-summary">Hole 14 · 17 HCP · 225-yard driver</strong>
          </summary>
          <form id="group-form">
            <div className="setup-grid primary-inputs">
              <label>
                <span>Starting hole</span>
                <select name="start" defaultValue="14">
                  {Array.from({ length: 18 }, (_, index) => index + 1).map((n) => <option value={n} key={n}>Hole {n}</option>)}
                </select>
              </label>
              <label>
                <span>Typical group handicap</span>
                <input name="hcp" type="number" inputMode="decimal" min="0" max="40" step="1" defaultValue="17" />
              </label>
              <label>
                <span>Reliable driver distance</span>
                <span className="input-with-unit"><input name="driver" type="number" inputMode="numeric" min="140" max="330" step="1" defaultValue="225" /><em>yd</em></span>
              </label>
            </div>
            <fieldset>
              <legend>Your reference clubs</legend>
              <div className="club-grid">
                <div className="club-pair">
                  <label><span>Long club</span><input name="longName" type="text" maxLength={16} defaultValue="3-wood" /></label>
                  <label><span>Distance</span><span className="input-with-unit"><input name="long" type="number" inputMode="numeric" min="100" max="260" step="1" defaultValue="178" /><em>yd</em></span></label>
                </div>
                <div className="club-pair">
                  <label><span>Mid iron</span><input name="midName" type="text" maxLength={16} defaultValue="7-iron" /></label>
                  <label><span>Distance</span><span className="input-with-unit"><input name="mid" type="number" inputMode="numeric" min="70" max="220" step="1" defaultValue="145" /><em>yd</em></span></label>
                </div>
                <div className="club-pair">
                  <label><span>Comfortable wedge</span><input name="wedgeName" type="text" maxLength={16} defaultValue="PW" /></label>
                  <label><span>Distance</span><span className="input-with-unit"><input name="wedge" type="number" inputMode="numeric" min="40" max="160" step="1" defaultValue="105" /><em>yd</em></span></label>
                </div>
              </div>
            </fieldset>
            <div className="setup-actions">
              <button type="submit">Personalize my guide</button>
              <button type="button" className="secondary-button" id="share-setup">Copy setup link</button>
              <output id="setup-status" aria-live="polite" />
            </div>
          </form>
        </details>
      </section>

      <section className="playbook" aria-labelledby="playbook-title">
        <div>
          <p className="section-kicker">The team formula</p>
          <h2 id="playbook-title">One safe ball unlocks three aggressive swings.</h2>
        </div>
        <ol>
          <li><strong>Fairway first.</strong><span>Steadiest player puts a ball in play.</span></li>
          <li><strong>React, don’t preset.</strong><span>Only attack after you know the team is covered.</span></li>
          <li><strong>Middle beats tucked.</strong><span>Bethpage rough and bunkers turn flags into doubles.</span></li>
          <li><strong>Bogey can count.</strong><span>On 15, 16 and 10–12, avoid four simultaneous disasters.</span></li>
        </ol>
      </section>

      <nav className="hole-nav" aria-label="Hole order">
        <span id="nav-profile">Hole 14 start</span>
        <div>{order.map((n) => <a key={n} href={`#hole-${n}`} className={n === 14 ? "active" : ""}>{n}</a>)}</div>
      </nav>

      <section className="holes" aria-label="Hole-by-hole guide">
        {holes.map((hole, idx) => (
          <article
            className="hole-card"
            id={`hole-${hole.n}`}
            data-hole={hole.n}
            data-par={hole.par}
            data-yards={hole.yards}
            data-adjust={hole.adjust}
            data-hole-hdcp={hole.hdcp}
            key={hole.n}
          >
            <header className="hole-header">
              <div className="hole-number"><span>Hole</span>{hole.n}</div>
              <div className="hole-meta">
                <span>Par <strong>{hole.par}</strong></span>
                <span>Yellow <strong>{hole.yards} yd</strong></span>
                <span>Hcp <strong>{hole.hdcp}</strong></span>
              </div>
              <div className={`pin-adjust ${hole.adjust > 0 ? "back" : hole.adjust < 0 ? "front" : ""}`}>
                <span>Pin vs center</span><strong>{hole.adjust > 0 ? "+" : ""}{hole.adjust}</strong>
              </div>
            </header>

            <div className="hole-visuals">
              <CourseMap hole={hole} />
              <div className="map-side">
                <div>
                  <p className="map-side-title">Tomorrow&apos;s pin</p>
                  <PinMap hole={hole} />
                </div>
                <div className="hazards">{hole.hazards.map((h) => <span key={h}>{h}</span>)}</div>
              </div>
            </div>

            <div className="hole-content">
              <p className="hole-index" data-stop-index>Stop {idx + 1} of 18</p>
              <h2>{hole.headline}</h2>
              <div className="personalized-plan" data-personalized-plan>
                <span>Your numbers</span>
                <strong data-plan-title>Loading your group plan…</strong>
                <p data-plan-copy>Club and remaining-yardage estimates will appear here.</p>
              </div>
              <div className="danger-window" data-danger-window>
                <div>
                  <span>±20% landing window</span>
                  <strong data-danger-title>Calculating your landing zone…</strong>
                </div>
                <ul data-danger-list><li>Course danger notes will appear here.</li></ul>
                <small>Typical total-distance estimate. Tee markers, conditions, caddie and rangefinder always win.</small>
              </div>
              {foodStops[hole.n] && (
                <aside className="hole-stop">
                  <SponsorLogos sponsors={foodStops[hole.n].sponsors} compact />
                  <div>
                    <span>Food stop</span>
                    <strong>{foodStops[hole.n].offering}</strong>
                    {foodStops[hole.n].note && <small>{foodStops[hole.n].note}</small>}
                  </div>
                </aside>
              )}
              <div className="strategy-grid">
                <div><span className="strategy-icon">T</span><p><strong>Off the tee</strong>{hole.tee}</p></div>
                <div><span className="strategy-icon">G</span><p><strong>Into the green</strong>{hole.approach}</p></div>
                <div className="team-call"><span className="strategy-icon">4</span><p><strong>Best-ball call</strong>{hole.team}</p></div>
              </div>
            </div>
            <footer>
              <span>Pin: {hole.on} on · {hole.sideYards}{hole.side} · green {hole.depth} deep</span>
              <a data-next-hole href={`#hole-${order[(idx + 1) % order.length]}`}>{idx === 17 ? "Back to 14" : `Next: ${order[idx + 1]}`} →</a>
            </footer>
          </article>
        ))}
      </section>

      <section className="quick-reference">
        <p className="section-kicker">Pocket rules</p>
        <h2>When in doubt at Bethpage</h2>
        <div>
          <p><strong>Rough:</strong> advance to grass; don’t force the green.</p>
          <p><strong>Fairway bunker:</strong> take the lip out of play first.</p>
          <p><strong>Long approach:</strong> front-center is a legitimate target.</p>
          <p><strong>Team covered:</strong> that is the moment to attack.</p>
        </div>
      </section>

      <section className="hospitality-section" aria-labelledby="hospitality-title">
        <div>
          <p className="section-kicker">Food, drinks & recovery</p>
          <h2 id="hospitality-title">Hospitality along the route</h2>
          <p>Stops appear inside each hole card and automatically follow your selected starting hole. Snacks are spread throughout the course.</p>
        </div>
        <div className="hospitality-grid">
          {hospitalityStops.map((stop) => (
            <article key={stop.holes}>
              <span>{stop.holes}</span>
              <SponsorLogos sponsors={stop.sponsors} />
              <strong>{stop.offering}</strong>
              {stop.note && <p>{stop.note}</p>}
            </article>
          ))}
          <article className="all-course-stop"><span>All course</span><strong>Snacks throughout</strong><p>Keep something small in the bag between larger stops.</p></article>
          <article><span>After the round</span><strong>19th Hole Recovery Lounge</strong><p>Complimentary IV hydration from Wellspring Drips, plus massage or chiropractic care from Long Island Spine & Sport.</p></article>
        </div>
      </section>

      <section className="source-note">
        <h2>Yardage & pin notes</h2>
        <p>Yellow-tee hole yardages use the published forward-tee scorecard (6,223 yards). The current USGA listing is 6,207 yards, so tournament markers may differ — the marker on the tee and your rangefinder always win. “Pin vs center” comes directly from tomorrow’s supplied pin sheet; blank pin adjustments on holes 6 and 9 calculate to approximately center.</p>
        <p>The ±20% window is based on your entered typical total distance. Hazard distances are planning estimates interpreted from course aerials and published hole guides, not surveyed carry numbers. Forced carries are called out separately.</p>
        <p className="links"><a href="https://ncrdb.usga.org/courseTeeInfo?CourseID=14914" target="_blank" rel="noreferrer">USGA rating</a><a href="https://www.allgolfholes.com/courses/new-york/bethpage-state-park-black-course" target="_blank" rel="noreferrer">Course & hazard guide</a><a href="https://www.provisualizer.com/courses/bethpageblack.php" target="_blank" rel="noreferrer">Course coordinates</a><a href="https://www.arcgis.com/home/item.html?id=10df2279f9684e4a9f6a7f08febac2a9" target="_blank" rel="noreferrer">Aerial imagery</a><a href="https://www.weather.gov/documentation/services-web-api" target="_blank" rel="noreferrer">Weather.gov API</a></p>
        <small>Rain forecast updates hourly from the National Weather Service. Conditions can change. Aerial imagery © Esri, Maxar, Earthstar Geographics, and the GIS User Community. Target overlays are personalized strategy suggestions, not surveyed yardage markers.</small>
      </section>
    </main>
  );
}
