// Content for "What's Really Running Your Success?" — the self-assessment
// quiz that feeds the newsletter signup and the mentorship application.

export type ResultKey = "overdriver" | "overthinker" | "quietdoubter" | "composedguardian" | "hollowsummit";

export type QuizOption = {
  text: string;
  weights: Record<ResultKey, number>;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
};

export type QuizResult = {
  key: ResultKey;
  name: string;
  oneLinePattern: string;
  resultPageHeadline: string;
  resultPageBody: string[];
  whatItCovers: string;
  reflectionPrompt: string;
  ctaText: string;
};

export const QUIZ_TITLE = "What's Really Running Your Success?";
export const QUIZ_SUBTITLE = "A 2-minute reflection for high-achieving women — executives and founders — who've hit every goal on the list and still feel something underneath it that success hasn't fixed.";
export const QUIZ_DISCLAIMER =
  "This is a self-reflection tool for insight, not a psychological assessment, diagnosis, or substitute for medical or mental health care.";

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    prompt: "It's 9pm on a weeknight. Where's your body, and where's your mind?",
    options: [
      { text: "Still working, or thinking about work — stopping doesn't feel like an option.", weights: { overdriver: 3, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 0 } },
      { text: "Physically stopped, but running the same three decisions in a loop.", weights: { overdriver: 0, overthinker: 3, quietdoubter: 0, composedguardian: 0, hollowsummit: 0 } },
      { text: "Watching something to switch off, but a version of me that did more is still watching too.", weights: { overdriver: 1, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 2 } },
      { text: "With people I love, but half a step removed — present enough that no one asks if I'm okay.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 3, hollowsummit: 0 } },
      { text: "Replaying something I said today, wondering if it made me look unprepared.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 3, composedguardian: 0, hollowsummit: 0 } },
    ],
  },
  {
    id: "q2",
    prompt: "A big decision is in front of you — a hire, a deal, a move. What actually happens?",
    options: [
      { text: "I decide fast and move — sitting with it too long feels like losing ground.", weights: { overdriver: 3, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 0 } },
      { text: "I build the pros-and-cons list, then build it again, then ask three more people.", weights: { overdriver: 0, overthinker: 3, quietdoubter: 0, composedguardian: 0, hollowsummit: 0 } },
      { text: "I decide, then quietly need everyone to confirm I made the right call.", weights: { overdriver: 0, overthinker: 1, quietdoubter: 2, composedguardian: 0, hollowsummit: 0 } },
      { text: "I decide alone. I don't love bringing people into my uncertainty.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 3, hollowsummit: 0 } },
      { text: "I decide well — it's the right move on paper — I just don't feel much once it's done.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 3 } },
    ],
  },
  {
    id: "q3",
    prompt: "You make a visible mistake in front of people whose opinion matters. What's true by that night?",
    options: [
      { text: "I've already fixed it and I'm three tasks past it — there's no time to sit with it.", weights: { overdriver: 2, overthinker: 0, quietdoubter: 1, composedguardian: 0, hollowsummit: 0 } },
      { text: "I'm still replaying the exact moment, editing what I should have said instead.", weights: { overdriver: 0, overthinker: 3, quietdoubter: 0, composedguardian: 0, hollowsummit: 0 } },
      { text: "It confirms something I already privately suspected about myself.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 3, composedguardian: 0, hollowsummit: 0 } },
      { text: "I've filed it away and I look completely fine — no one in that room would guess it landed.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 3, hollowsummit: 0 } },
      { text: "It barely registers. Lately, not much does.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 2 } },
    ],
  },
  {
    id: "q4",
    prompt: "Someone praises your work in front of the room. What's the real reaction, underneath the thank-you?",
    options: [
      { text: "Good, noted, next.", weights: { overdriver: 2, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 0 } },
      { text: "I'm already thinking about what I need to do to deserve it next time.", weights: { overdriver: 0, overthinker: 2, quietdoubter: 1, composedguardian: 0, hollowsummit: 0 } },
      { text: "A flicker of 'if they knew what actually goes on behind this, they wouldn't say that.'", weights: { overdriver: 0, overthinker: 0, quietdoubter: 3, composedguardian: 0, hollowsummit: 0 } },
      { text: "I say the right thing back and give nothing else away.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 3, hollowsummit: 0 } },
      { text: "Numb, mostly. It's the fortieth version of this exact moment and I can't feel the difference anymore.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 3 } },
    ],
  },
  {
    id: "q5",
    prompt: "If the people closest to you were honest, how would they describe you?",
    options: [
      { text: "Always half-on. Even holidays come with a laptop.", weights: { overdriver: 3, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 0 } },
      { text: "Hard to reach mid-decision — I go quiet and disappear into my own head.", weights: { overdriver: 0, overthinker: 2, quietdoubter: 0, composedguardian: 1, hollowsummit: 0 } },
      { text: "Surprised when I doubt myself — from the outside, it never shows.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 3, composedguardian: 0, hollowsummit: 0 } },
      { text: "Warm, but they've learned not to ask what's actually going on with me.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 3, hollowsummit: 0 } },
      { text: "Successful and a little unreadable — they respect me more than they feel close to me.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 2, hollowsummit: 1 } },
    ],
  },
  {
    id: "q6",
    prompt: "It's Sunday evening, before a demanding week. What's the dominant feeling?",
    options: [
      { text: "Restless — I'd rather already be in Monday than sit in Sunday.", weights: { overdriver: 3, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 0 } },
      { text: "Rehearsing Monday's conversations before they've even happened.", weights: { overdriver: 0, overthinker: 3, quietdoubter: 0, composedguardian: 0, hollowsummit: 0 } },
      { text: "A low dread that this is the week it finally shows I'm not as capable as they think.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 3, composedguardian: 0, hollowsummit: 0 } },
      { text: "Calm on the surface — I've already compartmentalised whatever's underneath.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 3, hollowsummit: 0 } },
      { text: "Flat. Not dread, not excitement — just the motions of a life that looks right.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 3 } },
    ],
  },
  {
    id: "q7",
    prompt: "You just hit a goal you've worked years for — the promotion, the exit, the number. What shows up first?",
    options: [
      { text: "Relief, then almost immediately, the next target.", weights: { overdriver: 3, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 0 } },
      { text: "Second-guessing whether I actually earned it, or just got lucky.", weights: { overdriver: 0, overthinker: 2, quietdoubter: 1, composedguardian: 0, hollowsummit: 0 } },
      { text: "A voice waiting for someone to notice I don't actually belong at this level.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 3, composedguardian: 0, hollowsummit: 0 } },
      { text: "Pride I show, but don't let myself sit in for long.", weights: { overdriver: 1, overthinker: 0, quietdoubter: 0, composedguardian: 2, hollowsummit: 0 } },
      { text: "A strange emptiness — like the finish line moved and nobody told me.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 3 } },
    ],
  },
  {
    id: "q8",
    prompt: "What does your body do lately that your calendar has no record of?",
    options: [
      { text: "Runs hot — wired, fast heart rate, a nervous system that struggles to switch off.", weights: { overdriver: 3, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 0 } },
      { text: "Holds tension in the jaw and shoulders from thinking in circles.", weights: { overdriver: 0, overthinker: 2, quietdoubter: 0, composedguardian: 1, hollowsummit: 0 } },
      { text: "Tight chest before I have to perform in front of people I want to impress.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 3, composedguardian: 0, hollowsummit: 0 } },
      { text: "Nothing dramatic — I've gotten very good at not noticing it.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 3, hollowsummit: 0 } },
      { text: "Goes quiet and still, like it's waiting to be asked what's actually wrong.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 1, hollowsummit: 2 } },
    ],
  },
  {
    id: "q9",
    prompt: "Someone offers, with no strings attached, to take something off your plate. What's your first instinct?",
    options: [
      { text: "No thank you — I'll just do it myself, it's faster.", weights: { overdriver: 3, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 0 } },
      { text: "I say yes, then quietly redo their part or worry about how it'll turn out.", weights: { overdriver: 0, overthinker: 3, quietdoubter: 0, composedguardian: 0, hollowsummit: 0 } },
      { text: "Yes, gratefully — followed by a flicker of 'now they'll see I couldn't do it all.'", weights: { overdriver: 0, overthinker: 0, quietdoubter: 3, composedguardian: 0, hollowsummit: 0 } },
      { text: "Yes, and I hand it off cleanly. Control is easier to release on tasks than on feelings.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 2, hollowsummit: 1 } },
      { text: "Yes. Increasingly, not much feels worth holding onto tightly anyway.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 3 } },
    ],
  },
  {
    id: "q10",
    prompt: "Right before sleep, what does your mind actually do?",
    options: [
      { text: "Runs tomorrow's to-do list, already half awake for it.", weights: { overdriver: 3, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 0 } },
      { text: "Reopens today's conversations, looking for the line I could have said better.", weights: { overdriver: 0, overthinker: 3, quietdoubter: 0, composedguardian: 0, hollowsummit: 0 } },
      { text: "Wonders how long until someone realises I'm not as capable as they think.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 3, composedguardian: 0, hollowsummit: 0 } },
      { text: "Asks whether anyone actually knows the real me, underneath what they see.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 2, hollowsummit: 1 } },
      { text: "Goes strangely blank — for someone with this much to think about, oddly quiet, and it doesn't feel like peace.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 3 } },
    ],
  },
  {
    id: "q11",
    prompt: "When did you last feel something at full volume — cry, get angry, laugh until it hurt — in front of another person?",
    options: [
      { text: "Anger, maybe, under pressure, when something threatens to slip.", weights: { overdriver: 2, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 0 } },
      { text: "I felt it, but needed to think it through first — by then the moment had passed.", weights: { overdriver: 0, overthinker: 2, quietdoubter: 0, composedguardian: 0, hollowsummit: 0 } },
      { text: "I got emotional about not being good enough, not about anything external.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 2, composedguardian: 0, hollowsummit: 0 } },
      { text: "Honestly, I can't remember. I feel things — I don't often show them.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 3, hollowsummit: 0 } },
      { text: "It's been a long time since anything moved me either way.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 3 } },
    ],
  },
  {
    id: "q12",
    prompt: "If you're honest, which sentence lands closest to true right now?",
    options: [
      { text: "If I stop moving, I'm not sure what's underneath it — so I don't stop.", weights: { overdriver: 3, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 0 } },
      { text: "I have all the information I need, and I still can't make myself decide.", weights: { overdriver: 0, overthinker: 3, quietdoubter: 0, composedguardian: 0, hollowsummit: 0 } },
      { text: "I've built a life that looks like proof, and I still feel like I'm getting away with something.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 3, composedguardian: 0, hollowsummit: 0 } },
      { text: "I'm the person everyone brings their problems to, and no one brings me mine.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 3, hollowsummit: 0 } },
      { text: "I have everything I said I wanted. I don't know why it doesn't feel like enough.", weights: { overdriver: 0, overthinker: 0, quietdoubter: 0, composedguardian: 0, hollowsummit: 3 } },
    ],
  },
];

export const QUIZ_RESULTS: QuizResult[] = [
  {
    key: "overdriver",
    name: "The Overdriver",
    oneLinePattern: "You run on adrenaline, and rest doesn't feel safe.",
    resultPageHeadline: "You Call It Drive. It's Actually a Nervous System That Doesn't Know How to Stop.",
    resultPageBody: [
      "You get more done before 8am than most people manage all day, and it's tempting to call that discipline. But discipline chooses when to stop. What you're running on doesn't choose — it just keeps going, because somewhere along the way, stopping stopped feeling safe.",
      "Speed became the proof you were worth taking seriously. You moved fast, delivered before anyone could doubt you, and the adrenaline did what caffeine never could — it turned exhaustion into momentum. It worked. It's still working. That's exactly the problem: it's working well enough that you have no evidence you need to change it, only a body that's starting to argue otherwise.",
      "Rest isn't restful for you. It's a gap where the noise stops and something less comfortable might get a word in — so you fill it, with the next deliverable, the next early morning, the next thing to prove. The cost doesn't show up on your calendar. It shows up in a body that's stopped fully switching off, and in people who've learned to reach you through your assistant.",
      "This isn't a discipline problem, and a better morning routine won't touch it. It's a subconscious pattern — your nervous system decided long ago that slowing down was dangerous, and it's been running that decision on your behalf ever since. That's the exact layer the Science + Soul Fusion™ Method works at.",
    ],
    whatItCovers: "Burnout",
    reflectionPrompt: "If you fully stopped for 48 hours — no work, nothing to prove — what would you actually feel?",
    ctaText: "If this is the pattern quietly running your life, the next step isn't another productivity system — it's the Science + Soul Fusion™ 90-Day Private Mentorship. Apply, and Christina will personally review whether it's the right fit.",
  },
  {
    key: "overthinker",
    name: "The Overthinker",
    oneLinePattern: "You loop, second-guess, and run on decision fatigue.",
    resultPageHeadline: "The Meeting Ended Hours Ago. It Hasn't, for You.",
    resultPageBody: [
      "You make good decisions — better than most people in the room, usually. And then you keep making them, quietly, for hours after everyone else has moved on. The loop was never about lacking the answer. You had it twenty minutes in. It's about not trusting that having it once is enough.",
      "Somewhere along the way, thinking harder became how you kept yourself safe from being wrong. More analysis felt like more control. So you built a mind that reviews everything twice, then a third time for good measure — and it's very good at its job. What it isn't good at is knowing when the job is finished.",
      "The cost is quieter than burnout, so it's easy to underrate. It's the hour of sleep lost replaying one comment. The decision you delayed until someone else made it for you. The energy spent managing a conversation in your head that the other person forgot about within the day.",
      "This isn't a thinking problem that more information will fix. It's a subconscious pattern that equates certainty with safety — and it can be retrained directly, which is exactly what the Science + Soul Fusion™ Method is built for.",
    ],
    whatItCovers: "Overthinking & decision fatigue",
    reflectionPrompt: "What decision have you already made correctly, that you're still re-making in your head?",
    ctaText: "If your mind won't let a decision rest even after you've made it well, that's worth addressing properly. Apply for the Science + Soul Fusion™ 90-Day Private Mentorship — Christina reviews every application herself.",
  },
  {
    key: "quietdoubter",
    name: "The Quiet Doubter",
    oneLinePattern: "Underneath the results, you still feel like an impostor.",
    resultPageHeadline: "The Room Believes You. Some Part of You Is Still Waiting to Be Caught.",
    resultPageBody: [
      "By any external measure, you've arrived. The title, the results, the years of evidence — none of it is actually in question, except by you. There's a version of you that receives every win and quietly files it under 'not enough yet,' or 'I got lucky,' or 'they don't see the whole picture.'",
      "This isn't modesty. Modesty doesn't cost you anything. What you're running is a private ledger where your wins get discounted and your smallest gaps get magnified — and you've gotten so practiced at keeping that ledger that nobody around you has any idea it exists.",
      "It's expensive in ways that don't show up on a scorecard: the promotion you didn't put yourself forward for, the room you shrank in rather than took up, the credit you deflected so fast no one got to actually see what you did. Playing smaller than your results warrant isn't humility. It's a pattern doing exactly what it was built to do — keep you from being seen closely enough to be found out.",
      "The gap between what you've achieved and what you believe about yourself isn't something you can think your way out of. It's a subconscious pattern, installed early, running quietly underneath very real competence — and it's precisely what the Science + Soul Fusion™ Method is designed to close.",
    ],
    whatItCovers: "Confidence & self-sabotage",
    reflectionPrompt: "What would you go after this year if you actually believed the last ten years of evidence?",
    ctaText: "If some part of you is still waiting to be found out, that pattern is worth ending properly, not managing forever. Apply for the Science + Soul Fusion™ 90-Day Private Mentorship.",
  },
  {
    key: "composedguardian",
    name: "The Composed Guardian",
    oneLinePattern: "In control on the outside, emotions pushed down, people kept at arm's length.",
    resultPageHeadline: "Everyone Brings You Their Problems. Who Do You Bring Yours To?",
    resultPageBody: [
      "You are, by design, the person other people feel steadier around. Composed under pressure, unreadable when it counts, the one who has it handled — and that's not an act. You genuinely can hold it. The real question is what it costs you to be the only one who can.",
      "Somewhere, staying composed became safer than being fully known. Maybe showing the full weight of something once didn't land the way you needed it to, so you got efficient: feel it privately, present it cleanly, move on. That's a reasonable strategy for a demanding career. It's a much harder one to run at home, with a partner, with people who want to get close to the parts of you that don't come with a strategy attached.",
      "The distance isn't cold — it's protective, and it works. It also means the people closest to you respect you more than they feel they fully have you, and that most of what you're actually carrying, you're carrying alone. Control over your own emotional weather is a genuine skill. It stops being a skill and starts being a wall the moment it keeps anyone out, including you.",
      "This isn't something willpower fixes by finally 'opening up.' It's a subconscious pattern that decided, at some point, that being fully seen wasn't safe — and it can be worked with directly, which is where the Science + Soul Fusion™ Method differs from most coaching.",
    ],
    whatItCovers: "Emotional suppression & relationships",
    reflectionPrompt: "Who in your life is allowed to see you before you've composed yourself?",
    ctaText: "If the cost of staying composed is a growing distance from the people you love, that deserves real work, not more management. Apply for the Science + Soul Fusion™ 90-Day Private Mentorship.",
  },
  {
    key: "hollowsummit",
    name: "The Hollow Summit",
    oneLinePattern: "You have it all on paper, and it feels strangely empty inside.",
    resultPageHeadline: "You Reached the Top. Nobody Warned You It Would Feel Like This.",
    resultPageBody: [
      "You have, by most reasonable definitions, made it. The title, the outcome, the life other people say they want — you built it, largely on schedule, mostly as planned. And somewhere in the last stretch of building it, the feeling you were promised at the top didn't show up. What's there instead is quieter than disappointment. It's closer to nothing at all.",
      "This is the part almost no one around you would believe, because it doesn't look like a problem from the outside. Success without feeling isn't a contradiction — it's what happens when every milestone gets treated as the next item to clear, rather than something to actually arrive at. The achieving never stopped long enough for the achievement to register.",
      "The risk isn't that you'll fail. You won't; you're good at this. The risk is that you'll hit the next summit, and the one after that, running the same account that never pays out, wondering each time why this still isn't it.",
      "This isn't a gratitude problem, and wanting the win more won't solve it. It's the gap between the success you built and the person underneath it, who's stopped feeling connected to any of it — which is precisely the 'Soul' half of the Science + Soul Fusion™ Method, not just the strategy half.",
    ],
    whatItCovers: "Purpose & the Soul side of the method",
    reflectionPrompt: "If nobody was watching or grading it, what would actually feel like enough?",
    ctaText: "If success has started to feel like a very well-built room with nobody home, that's exactly the work of the next 90 days. Apply for the Science + Soul Fusion™ 90-Day Private Mentorship.",
  },
];

const zero: Record<ResultKey, number> = {
  overdriver: 0,
  overthinker: 0,
  quietdoubter: 0,
  composedguardian: 0,
  hollowsummit: 0,
};

export function scoreQuiz(answers: number[]): ResultKey {
  const totals: Record<ResultKey, number> = { ...zero };
  answers.forEach((optionIndex, qIndex) => {
    const question = QUIZ_QUESTIONS[qIndex];
    const option = question?.options[optionIndex];
    if (!option) return;
    (Object.keys(totals) as ResultKey[]).forEach((k) => {
      totals[k] += option.weights[k];
    });
  });
  return (Object.keys(totals) as ResultKey[]).reduce((best, k) => (totals[k] > totals[best] ? k : best), "overdriver" as ResultKey);
}

export function getResult(key: ResultKey): QuizResult {
  return QUIZ_RESULTS.find((r) => r.key === key) ?? QUIZ_RESULTS[0];
}
