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
  { n: 15, par: 4, yards: 417, hdcp: 1, depth: 36, on: 23, side: "R", sideYards: 11, adjust: 5, shape: "left", hazards: ["Rough both sides", "Uphill approach", "Green bunkers"], headline: "Bogey is a win on the hardest hole", tee: "Driver to the right-center. At 220–230, you’ll still have roughly 190–200 uphill. Do not chase extra yards into Bethpage rough.", approach: "Pin is back-right and plays about 422 total. If the green is out of range, lay to your best wedge number. Missing short-center is far better than either side.", team: "Get one drive in play, then let the final players swing freely. The first stress-free 5 is valuable in best ball." },
  { n: 16, par: 4, yards: 431, hdcp: 5, depth: 32, on: 10, side: "L", sideYards: 10, adjust: -6, shape: "left", hazards: ["Left fairway bunker", "Deep green bunkers"], headline: "Use the downhill tee — stay out of sand", tee: "Driver at the right-center of the fairway. The elevated tee helps, but the left bunker and rough can turn this into three shots quickly.", approach: "Front-left pin plays about 425. Take enough club to clear the front hazards; center-green is the target from anything over 170.", team: "After one fairway, a confident hitter can shade left for a shorter angle. Everyone else keeps double out of play." },
  { n: 17, par: 3, yards: 178, hdcp: 13, depth: 29, on: 4, side: "L", sideYards: 11, adjust: -10.5, shape: "straight", hazards: ["Five bunkers", "False-front feel"], headline: "Front pin, but the miss is not short", tee: "Pin plays roughly 168. Your normal 3-wood is too much; choose the club that carries 165–170. Aim center, not directly at the tucked front-left flag.", approach: "Four paces on means almost no cushion. A ball 20 feet long is excellent. Anything short can roll back or find sand.", team: "First ball: middle of the green. With cover secured, the best iron player can attack the left half." },
  { n: 18, par: 4, yards: 345, hdcp: 15, depth: 31, on: 9, side: "R", sideYards: 6, adjust: -6.5, shape: "straight", hazards: ["Narrow bunker chute", "Rough pinches landing"], headline: "Fairway first; then chase the long-drive sign", tee: "At 220–230, driver leaves about 115–125. The fairway narrows between bunkers, so pick a committed center line.", approach: "Front-right pin plays about 339. Favor center-right and keep the approach below the hole.", team: "Men’s and women’s long drive: put one controlled drive in the fairway first. Then the remaining eligible players can send it — only a fairway ball counts." },
  { n: 1, par: 4, yards: 426, hdcp: 8, depth: 38, on: 30, side: "R", sideYards: 7, adjust: 11, shape: "right", hazards: ["Trees right", "Rough through dogleg", "Back pin"], headline: "Don’t let the downhill view bait you right", tee: "Driver or controlled 3-wood to the left-center. Your 220–230 driver fits the corner; a push right is blocked by trees.", approach: "Back-right pin adds 11 yards, so the hole plays about 437. From rough, advance safely; from fairway, take the extra club and aim center.", team: "Lead with a fairway finder. Only after one is safe should anyone challenge the right side for a shorter look." },
  { n: 2, par: 4, yards: 346, hdcp: 16, depth: 29, on: 15, side: "R", sideYards: 12, adjust: 0.5, shape: "right", hazards: ["Trees at corner", "Deep bunkers right", "Steep uphill"], headline: "Short on paper, steep on the second shot", tee: "A 175–180 3-wood to center-left leaves about 165 and keeps the dogleg in front of you. Driver is fine only if the shape is reliable.", approach: "Pin is center-right. The green sits well uphill: add a club, favor center-left, and accept a longer putt.", team: "This is a scoring chance if one tee ball finds grass. Don’t let all four players take on the corner." },
  { n: 3, par: 3, yards: 128, hdcp: 18, depth: 39, on: 16, side: "R", sideYards: 7, adjust: -3.5, shape: "straight", hazards: ["Deep front bunker", "Falloff long-left"], headline: "Middle of the green is plenty", tee: "Pin plays roughly 125, slightly front-right. Choose a full, comfortable shot and aim a few paces left of the flag.", approach: "The green is wide but shallow. Avoid the deep front sand and the long-left falloff.", team: "One safe green first; then fire at the flag. This is one of your best chances to post a 3 or better." },
  { n: 4, par: 5, yards: 438, hdcp: 2, depth: 24, on: 7, side: "R", sideYards: 12, adjust: -5, shape: "left", hazards: ["Glacier bunker", "Cross-bunker walls", "Elevated green"], headline: "Three smart shots beat one heroic mistake", tee: "Driver left of the huge right-side Glacier Bunker. Your 220–230 drive should set up a layup, not a go-for-it second.", approach: "Front-right pin plays about 433. Lay up short of the next bunker wall to 80–105 yards, then take enough loft to carry the front sand.", team: "No one needs to reach in two. Put two balls in position, then let the best-struck drive try the more aggressive second." },
  { n: 5, par: 4, yards: 401, hdcp: 4, depth: 24, on: 14, side: "R", sideYards: 14, adjust: 2, shape: "right", hazards: ["Cross bunkers", "Trees right", "Uphill green"], headline: "Respect the cross bunkers", tee: "Use the club that finishes short-left of the diagonal sand. For your bag, the 175–180 3-wood is the default unless the actual marker makes the carry obvious.", approach: "Center-right pin adds about 2. From a long way out, play to the mouth/front-center rather than bringing every bunker into play.", team: "Assign one player to lay back. Players with a safe ball behind them may challenge the carry only if the exact yardage fits." },
  { n: 6, par: 4, yards: 376, hdcp: 10, depth: 28, on: 14, side: "R", sideYards: 12, adjust: 0, shape: "straight", hazards: ["Fairway bunkers", "Sand around green"], headline: "Pick the fattest landing area", tee: "The fairway pinches near the bunkers. A controlled 3-wood can leave roughly 195; driver brings more sand into play but shortens the approach.", approach: "Center-right pin. From 175+, aim at the front opening and plan on an up-and-down rather than forcing a carry at the flag.", team: "One player lays to the wide section; after that, the strongest driver can press." },
  { n: 7, par: 5, yards: 489, hdcp: 6, depth: 29, on: 13, side: "L", sideYards: 12, adjust: -1.5, shape: "right", hazards: ["Trees and bunker right", "Guarded green"], headline: "A genuine three-shot birdie chance", tee: "Driver to the widest center-left portion. A 225-yard fairway drive leaves about 264 — perfect for a 175–180 layup plus a wedge.", approach: "Center-left pin. Lay up to a favorite full-wedge number, keeping the second away from the right-side trouble.", team: "This is where patient golf can produce a 4 or 5. Agree on wedge numbers before anyone hits the second." },
  { n: 8, par: 3, yards: 152, hdcp: 14, depth: 44, on: 13, side: "L", sideYards: 12, adjust: -9, shape: "straight", hazards: ["Pond short-left", "Bunker right"], headline: "The only water: carry it and breathe", tee: "Front-left pin plays roughly 143 and the shot is downhill. Use a club you know carries the pond; aim center-right, away from both water and flag.", approach: "The green is very deep. Long-center is much safer than short-left.", team: "Hole-in-one contest, but don’t donate four balls. Secure the green first, then let the rest chase the flag." },
  { n: 9, par: 4, yards: 293, hdcp: 12, depth: 30, on: 15, side: "L", sideYards: 8, adjust: 0, shape: "left", hazards: ["Diagonal left bunker", "Narrow angle"], headline: "Position beats power on the short card yardage", tee: "Your 175–180 3-wood to center-right should leave a wedge and avoid the diagonal bunker on the inside-left. Driver is only for a very confident line.", approach: "Center-left pin. Attack from the fairway; from rough, use the middle of the green.", team: "Great best-ball opportunity. Lock in one position tee shot, then the remaining players can push closer." },
  { n: 10, par: 4, yards: 377, hdcp: 9, depth: 28, on: 12, side: "R", sideYards: 13, adjust: -2, shape: "straight", hazards: ["Many fairway bunkers", "Narrow corridor"], headline: "Fairway is the entire assignment", tee: "Driver only if it is behaving. Center is perfect; the hole’s bunker field punishes small misses. A 225 drive leaves about 150.", approach: "Slightly front-right pin. Aim center and resist short-siding right.", team: "Send the steadiest driver first. This starts the demanding 10–12 stretch; a boring 5 can save the team." },
  { n: 11, par: 4, yards: 412, hdcp: 11, depth: 31, on: 11, side: "L", sideYards: 11, adjust: -4.5, shape: "left", hazards: ["Bunkers left and right", "Elevated target"], headline: "Treat the approach as a three-shot decision", tee: "Driver to center-right, away from the inside-left trouble. At your distance, expect 180–190 remaining.", approach: "Front-left pin plays about 408. If the green carry isn’t comfortable, lay short-center and leave a simple pitch.", team: "One player commits to the no-double route. A player with the best drive can take on the front edge." },
  { n: 12, par: 4, yards: 403, hdcp: 7, depth: 35, on: 20, side: "R", sideYards: 14, adjust: 2.5, shape: "right", hazards: ["Long forced carry feel", "Right-side bunkers"], headline: "No shame in playing this as a par 5", tee: "Driver at left-center. Your priority is clearing the opening trouble and staying out of the right rough.", approach: "Back-right pin makes it about 406. From 175+, center or front-center is the target; missing right is expensive.", team: "With a safe drive, one player may attack. Otherwise everyone builds a five with three playable shots." },
  { n: 13, par: 5, yards: 472, hdcp: 3, depth: 29, on: 13, side: "L", sideYards: 9, adjust: -1.5, shape: "left", hazards: ["Bunker complex", "Narrow layup zone"], headline: "Split it into 225 + 150 + wedge", tee: "Driver center-right. Don’t flirt with the inside-left bunker complex.", approach: "Center-left pin. A 225 drive leaves 247: hit 140–160 to the widest layup area and leave a comfortable third.", team: "Choose different layup distances across the group. The best angle, not the longest second, gets the green light." },
];

const order = [14, 15, 16, 17, 18, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

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
  return (
    <div className={`course-map shape-${hole.shape}`} aria-hidden="true">
      <span className="tee-dot" />
      <span className="fairway one" />
      <span className="fairway two" />
      <span className="map-green" />
      <span className="bunker b1" />
      <span className="bunker b2" />
      {hole.par === 3 && <span className="flight-line" />}
      {hole.n === 8 && <span className="water" />}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="eyebrow">Ohel Rosemil Healthcare Golf Tournament · July 27, 2026</div>
        <h1>Bethpage Black<br /><span>Best-Ball Field Guide</span></h1>
        <p className="hero-copy">Yellow tees · 15–20 handicaps · built around a 220–230 yard drive and a 175–180 yard stock 3-wood.</p>
        <div className="start-card">
          <div><span className="start-label">Shotgun start</span><strong>Hole 14 · 11:00 AM</strong></div>
          <a href="#hole-14">Start the round <span>↓</span></a>
        </div>
        <div className="weather-strip">
          <span className="weather-icon">☀</span>
          <div><strong>80°F & mostly sunny at 11</strong><small>Storm chance rises around 4 PM. Hydrate early; pack a light rain layer.</small></div>
        </div>
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
        <span>Playing order</span>
        <div>{order.map((n) => <a key={n} href={`#hole-${n}`} className={n === 14 ? "active" : ""}>{n}</a>)}</div>
      </nav>

      <section className="holes" aria-label="Hole-by-hole guide">
        {holes.map((hole, idx) => (
          <article className="hole-card" id={`hole-${hole.n}`} key={hole.n}>
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
              <div className="visual-note">
                <p>Schematic play line</p>
                <div className="hazards">{hole.hazards.map((h) => <span key={h}>{h}</span>)}</div>
              </div>
              <PinMap hole={hole} />
            </div>

            <div className="hole-content">
              <p className="hole-index">Stop {idx + 1} of 18</p>
              <h2>{hole.headline}</h2>
              <div className="strategy-grid">
                <div><span className="strategy-icon">T</span><p><strong>Off the tee</strong>{hole.tee}</p></div>
                <div><span className="strategy-icon">G</span><p><strong>Into the green</strong>{hole.approach}</p></div>
                <div className="team-call"><span className="strategy-icon">4</span><p><strong>Best-ball call</strong>{hole.team}</p></div>
              </div>
            </div>
            <footer>
              <span>Pin: {hole.on} on · {hole.sideYards}{hole.side} · green {hole.depth} deep</span>
              <a href={`#hole-${order[(idx + 1) % order.length]}`}>{idx === 17 ? "Back to 14" : `Next: ${order[idx + 1]}`} →</a>
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

      <section className="source-note">
        <h2>Yardage & pin notes</h2>
        <p>Yellow-tee hole yardages use the published forward-tee scorecard (6,223 yards). The current USGA listing is 6,207 yards, so tournament markers may differ — the marker on the tee and your rangefinder always win. “Pin vs center” comes directly from tomorrow’s supplied pin sheet; blank pin adjustments on holes 6 and 9 calculate to approximately center.</p>
        <p className="links"><a href="https://ncrdb.usga.org/courseTeeInfo?CourseID=14914" target="_blank" rel="noreferrer">USGA rating</a><a href="https://www.allgolfholes.com/courses/new-york/bethpage-state-park-black-course" target="_blank" rel="noreferrer">Course & scorecard</a><a href="https://golfcourseintel.com/golf-improvement-strategy-high-handicap/" target="_blank" rel="noreferrer">Amateur strategy</a></p>
        <small>Weather snapshot checked July 26 for Bethpage, NY. Conditions can change. Course schematics are strategy aids, not surveyed maps.</small>
      </section>
    </main>
  );
}
