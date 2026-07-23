'use client';

import { useState } from 'react';
import type { ChangeEvent } from 'react';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { dcHref } from '@/lib/routes';

/* ---------------------------------------------------------------------- */
/* Data                                                                    */
/* ---------------------------------------------------------------------- */

type CheckboxOption = { label: string; value: number };

type Question =
  | { id: string; type: 'checkbox'; maxPoints: number; text: string; hint?: string; options: CheckboxOption[] }
  | { id: string; type: 'scale'; maxPoints: number; text: string; hint?: string; options: string[] };

type Dimension = { id: string; title: string; number: number; questions: Question[] };

type FlatQuestion = Question & { dimId: string; dimTitle: string; dimNumber: number };

type Level = { min: number; max: number; label: string; summary: string; detail: string[]; hoursPerWeek?: number };

type Answers = Record<string, Set<number> | number>;

const DIMENSIONS: Dimension[] = [
  {
    id: 'systems', title: 'Systems & Tech Stack', number: 1, questions: [
      {
        id: 'q1', type: 'checkbox', maxPoints: 7,
        text: "Which of these describes how your agency's core systems and tools are currently managed?",
        hint: 'Think: project management, comms, CRM, file management, reporting, client delivery tools — not AI specifically',
        options: [
          { label: 'Tools have accumulated over time — nobody has a clear picture of what we have or why', value: 0 },
          { label: "We have overlapping tools doing the same job — and we're paying for both", value: 0 },
          { label: "We've done a review and have a clear view of what we use and what we need", value: 1 },
          { label: 'Each tool has a defined purpose and a clear owner', value: 1 },
          { label: 'Tools are connected — data flows between systems without manual re-entry', value: 1 },
          { label: 'Our stack has been deliberately designed around how we work', value: 1 },
          { label: 'We regularly review the stack and make deliberate decisions about what to keep, replace or integrate', value: 1 },
        ],
      },
      {
        id: 'q2', type: 'scale', maxPoints: 4,
        text: 'When a new tool or system is proposed, we evaluate it against our existing stack before adopting it.',
        options: ['Never', 'Rarely', 'Sometimes', 'Usually', 'Always'],
      },
    ],
  },
  {
    id: 'aitools', title: 'AI Tools — Adoption, Training & Safety', number: 2, questions: [
      {
        id: 'q3', type: 'checkbox', maxPoints: 8,
        text: 'Which of these describes how AI tools are currently used in your agency?',
        options: [
          { label: "People use whatever AI tools they want — there's no visibility or oversight", value: 0 },
          { label: 'AI tool usage is mostly individual and informal — no shared approach', value: 0 },
          { label: 'We have a defined set of AI tools the team is expected to use', value: 1 },
          { label: 'Staff have been trained on the AI tools we use — not just given access', value: 1 },
          { label: 'People understand which AI tool is best suited for which type of task', value: 1 },
          { label: 'We have shared resources (prompt libraries, guides, templates)', value: 1 },
          { label: 'AI tool adoption is reviewed regularly', value: 1 },
          { label: "We've moved beyond general AI tools and use specialist models or custom setups", value: 1 },
        ],
      },
      {
        id: 'q4', type: 'scale', maxPoints: 4,
        text: 'My team understands the data and privacy implications of the AI tools they use — including what should and shouldn’t go into them.',
        options: ['Not at all', 'Slightly', 'Moderately', 'Well', 'Completely'],
      },
      {
        id: 'q5', type: 'scale', maxPoints: 4,
        text: 'My team can get specific, useful outputs from AI tools — not just generic responses.',
        options: ['They mostly don’t use AI tools', 'Results are inconsistent', "Some people get good results, most don't", 'Most people get reliable results', 'The whole team prompts well and we have shared resources'],
      },
    ],
  },
  {
    id: 'automation', title: 'Automation & Workflow Systemisation', number: 3, questions: [
      {
        id: 'q6', type: 'checkbox', maxPoints: 7,
        text: 'Which of the following have you automated or systematised in your agency?',
        options: [
          { label: 'Nothing is formally automated yet', value: 0 },
          { label: "We've automated at least one repetitive internal task (e.g. reporting, scheduling)", value: 1 },
          { label: 'Client reporting or data aggregation', value: 1 },
          { label: 'Briefing, onboarding or project kickoff workflows', value: 1 },
          { label: 'Content production pipelines (drafting, review, approval)', value: 1 },
          { label: 'We have multiple connected automations that run without manual input', value: 1 },
          { label: "We've built proprietary workflows specific to how our agency operates", value: 1 },
        ],
      },
      {
        id: 'q7', type: 'scale', maxPoints: 4,
        text: 'How well does your leadership team understand where time is genuinely being lost to repetitive, manual tasks?',
        options: ["We haven't looked at this", 'We have a rough sense but nothing mapped', "We've identified some areas but it's not comprehensive", 'We have a good understanding of the main bottlenecks', "We've mapped it properly — we know exactly where time is lost"],
      },
      {
        id: 'q8', type: 'scale', maxPoints: 4,
        text: 'When we identify a repetitive, high-labour task, we have a clear process for deciding whether and how to automate it.',
        options: ['We don’t — we just do the task', 'We talk about it but rarely act', 'We sometimes automate', 'We usually evaluate and often automate', 'We have a consistent process and regularly ship new automations'],
      },
      {
        id: 'q9', type: 'scale', maxPoints: 4,
        text: "Automations and systems we've built are documented and maintained — they don't collapse when someone leaves.",
        options: ['We have no automations', "Things exist but aren't documented", 'Some are documented', 'Most are documented', 'All of them — documentation is part of how we build'],
      },
    ],
  },
  {
    id: 'process', title: 'Process Documentation & Scalability', number: 4, questions: [
      {
        id: 'q10', type: 'checkbox', maxPoints: 7,
        text: 'Which of these describes how your core workflows and processes are currently managed?',
        options: [
          { label: "Most processes live in people's heads — we rely on specific individuals", value: 0 },
          { label: "We have some documentation, but it's patchy or outdated", value: 0 },
          { label: 'Key workflows are documented with clear steps and assigned owners', value: 1 },
          { label: "Processes include a definition of what 'good' looks like at each stage", value: 1 },
          { label: 'Documentation is maintained and reviewed — it reflects how we actually work today', value: 1 },
          { label: 'Our processes are role-agnostic — an experienced new hire could follow them', value: 1 },
          { label: 'Processes are designed with automation in mind', value: 1 },
        ],
      },
      {
        id: 'q11', type: 'scale', maxPoints: 4,
        text: 'If an experienced person in a key role left tomorrow, how confident are you that their work could be handed over without significant disruption?',
        options: ['Not at all confident', "We'd struggle", "We'd manage but it would be messy", 'Fairly confident', "Very confident — our processes don't depend on who's in the seat"],
      },
      {
        id: 'q12', type: 'scale', maxPoints: 4,
        text: 'If an experienced account manager or copywriter joined tomorrow, how quickly could they be productive without leaning on senior people?',
        options: ["Weeks — we'd need to walk them through everything", 'A couple of weeks with significant support', '1–2 weeks with a mix of docs and shadowing', 'Within a week — we have clear process guides', 'Within days — our production engine is genuinely self-serve'],
      },
    ],
  },
  {
    id: 'enablement', title: 'Team Enablement & Training', number: 5, questions: [
      {
        id: 'q13', type: 'scale', maxPoints: 4,
        text: 'How would you describe the state of AI training and enablement in your agency?',
        options: ['Nobody has been trained — people figure it out themselves', 'A few individuals are self-taught', "We've done some training but it's been ad hoc", "We've run structured training for the team (at least 3 events)", 'Training is ongoing — we have a plan and people have clear goals'],
      },
      {
        id: 'q14', type: 'checkbox', maxPoints: 7,
        text: 'Which of these does your agency currently have in place?',
        options: [
          { label: 'No formal training or enablement exists', value: 0 },
          { label: 'A shared understanding of what AI can and can’t do', value: 1 },
          { label: 'Clear guidelines for when and how AI can be used on client work', value: 1 },
          { label: 'A culture where people actively share AI discoveries with the team', value: 1 },
          { label: 'Dedicated time or resource for the team to experiment with AI skills', value: 1 },
          { label: 'Staff are empowered to explore better AI solutions within clear goals and guardrails', value: 1 },
          { label: 'Internal champions or leads who actively drive AI capability', value: 1 },
        ],
      },
    ],
  },
  {
    id: 'governance', title: 'Governance, Security & Risk', number: 6, questions: [
      {
        id: 'q15', type: 'checkbox', maxPoints: 7,
        text: 'Which of these formal policies and controls does your agency have in place?',
        options: [
          { label: "None — AI governance hasn't been formally addressed", value: 0 },
          { label: "A clear policy on what data can and can't be entered into AI tools", value: 1 },
          { label: 'A formal AI usage policy shared with and understood by the team', value: 1 },
          { label: 'A process for vetting AI tools before adoption', value: 1 },
          { label: 'A clear understanding of how client contracts and NDAs interact with AI tool usage', value: 1 },
          { label: 'IT and cybersecurity frameworks that cover how AI tools are accessed', value: 1 },
          { label: 'AI governance is treated as a living framework — reviewed regularly', value: 1 },
        ],
      },
      {
        id: 'q16', type: 'scale', maxPoints: 4,
        text: "I'm confident we're not exposing client data or sensitive information through unsanctioned AI tool usage.",
        options: ['Not at all confident', 'Slightly confident', 'Moderately confident', 'Very confident', 'Completely confident'],
      },
    ],
  },
  {
    id: 'competitive', title: 'Competitive Positioning & Client Delivery', number: 7, questions: [
      {
        id: 'q17', type: 'checkbox', maxPoints: 8,
        text: 'Which of these are true for your agency right now?',
        options: [
          { label: "We haven't thought about AI as a commercial or competitive factor yet", value: 0 },
          { label: 'We can clearly articulate to clients how we use AI and why it benefits them', value: 1 },
          { label: 'AI features in how we pitch or position ourselves in new business', value: 1 },
          { label: 'We have a clear view of how competitors are using AI — and where we stand', value: 1 },
          { label: 'AI is actively improving the quality or speed of what we deliver to clients', value: 1 },
          { label: "We've developed services or offerings directly enabled or enhanced by AI", value: 1 },
          { label: "We're generating revenue from AI-enabled services that didn't exist 12 months ago", value: 1 },
          { label: "We deliver value competitors can't replicate — built on proprietary data, models or workflows", value: 1 },
        ],
      },
      {
        id: 'q18', type: 'scale', maxPoints: 4,
        text: "I'm confident our agency's use of AI is a commercial advantage — not a gap competitors could exploit.",
        options: ["Strongly disagree — we're behind", "We're reactive, not proactive", "We're keeping pace", 'We have a clear edge in some areas', 'Strongly agree — AI is central to how we compete and win'],
      },
    ],
  },
];

const LEVELS: Level[] = [
  {
    min: 0, max: 29, label: 'Early Stage', hoursPerWeek: 10,
    summary: 'Your agency is in the early stages of AI readiness. There are significant opportunities to improve your systems, processes and team capability — and getting structured now will put you ahead of most agencies.',
    detail: [
      'Your tech stack and processes likely need a review before AI can be layered in effectively.',
      'Most of the gains available to you are in fundamentals: documentation, workflow clarity and basic AI tool adoption.',
      'A guided audit would help you prioritise where to focus first.',
    ],
  },
  {
    min: 30, max: 54, label: 'Developing', hoursPerWeek: 8,
    summary: "You've made a start — there are pockets of good practice across your agency. But adoption is patchy, governance is thin, and the potential is largely untapped.",
    detail: [
      "Some of your team are getting value from AI tools, but it's not consistent or strategic.",
      'Automation and systemisation are areas where structured effort would pay dividends quickly.',
      'A focused conversation could help you identify the highest-leverage next steps.',
    ],
  },
  {
    min: 55, max: 74, label: 'Capable', hoursPerWeek: 4,
    summary: 'Your agency has solid foundations. AI tools are in use, some processes are documented, and your team has reasonable capability. The opportunity now is to go further — faster.',
    detail: [
      "You're likely leaving efficiency gains on the table through inconsistent automation and ad-hoc training.",
      'Governance and competitive positioning are areas worth strengthening.',
      'A strategic review could accelerate your progress significantly.',
    ],
  },
  {
    min: 75, max: 100, label: 'Advanced',
    summary: "Your agency is operating at a high level of AI readiness. You have strong systems, deliberate processes and a team that's genuinely capable. The challenge now is staying ahead.",
    detail: [
      'The focus at this stage is on competitive differentiation — proprietary workflows, specialist models, and revenue-generating AI services.',
      'A conversation about where you’re heading next could be valuable.',
    ],
  },
];

/* ROI calculator: recovered hours are valued over a conservative working year
   (52 weeks minus holiday / bank holidays). £122 = BenchPress 2026 average UK
   agency billing rate, used as the default the user can override. */
const WORKING_WEEKS = 46;
const DEFAULT_BILLING_RATE = '122';
const gbp = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 });
const num0 = new Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 });

const ALL_QUESTIONS: FlatQuestion[] = DIMENSIONS.flatMap((d) =>
  d.questions.map((q) => ({ ...q, dimId: d.id, dimTitle: d.title, dimNumber: d.number }))
);

/* ---------------------------------------------------------------------- */
/* Helpers                                                                 */
/* ---------------------------------------------------------------------- */

function isAnswered(q: Question, answers: Answers): boolean {
  const a = answers[q.id];
  if (q.type === 'scale') return a !== undefined && a !== null;
  return a instanceof Set && a.size > 0;
}

function optionLabel(q: Question, idx: number): string {
  return q.type === 'scale' ? q.options[idx] : q.options[idx].label;
}

function scoreFor(qs: Question[], answers: Answers): { earned: number; possible: number } {
  let earned = 0;
  let possible = 0;
  qs.forEach((q) => {
    possible += q.maxPoints;
    const a = answers[q.id];
    if (q.type === 'scale') {
      if (typeof a === 'number') earned += a;
    } else if (a instanceof Set) {
      a.forEach((i) => {
        if (q.options[i]?.value === 1) earned += 1;
      });
    }
  });
  return { earned, possible };
}

function levelFor(pct: number): Level {
  return LEVELS.find((l) => pct >= l.min && pct <= l.max) ?? LEVELS[0];
}

const eyebrow = 'at-eyebrow';

/* ---------------------------------------------------------------------- */
/* Page                                                                    */
/* ---------------------------------------------------------------------- */

export default function AiReadinessAuditPage() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<Answers>({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [billingRate, setBillingRate] = useState(DEFAULT_BILLING_RATE);
  const [teamSize, setTeamSize] = useState('');

  const total = ALL_QUESTIONS.length;
  const isIntro = step === -1;
  const isQuestion = step >= 0 && step < total;
  const isEmailGate = step === total;
  const isResults = step === total + 1;

  const currentQ = isQuestion ? ALL_QUESTIONS[step] : null;
  const canNext = isQuestion && currentQ ? isAnswered(currentQ, answers) : true;
  const canBack = isQuestion ? step > 0 : isEmailGate;
  const progressPct = Math.round(((isQuestion ? step : total) / total) * 100);
  const nextLabel = isQuestion && step === total - 1 ? 'See My Results' : 'Next';

  const leadValid = /\S+@\S+\.\S+/.test(email) && name.trim().length > 1;

  let result: { pct: number; level: Level; dimScores: { title: string; pctStr: string }[] } | null = null;
  if (isResults) {
    const overall = scoreFor(ALL_QUESTIONS, answers);
    const pct = overall.possible ? Math.round((overall.earned / overall.possible) * 100) : 0;
    const level = levelFor(pct);
    const dimScores = DIMENSIONS.map((d) => {
      const s = scoreFor(d.questions, answers);
      const dpct = s.possible ? Math.round((s.earned / s.possible) * 100) : 0;
      return { title: d.title, pctStr: `${dpct}%` };
    });
    result = { pct, level, dimScores };
  }

  // ROI figures — only for levels with an hours-per-week value (Stage 1–3).
  // Stage 4 (Advanced) has none and shows the new-revenue panel instead.
  let roi: { hoursPerWeek: number; size: number; teamHoursPerYear: number; teamValuePerYear: number } | null = null;
  if (result && result.level.hoursPerWeek != null) {
    const rate = parseFloat(billingRate) || 0;
    const size = Math.max(0, Math.floor(parseFloat(teamSize) || 0));
    const hoursPerWeek = result.level.hoursPerWeek;
    const teamHoursPerYear = hoursPerWeek * WORKING_WEEKS * size;
    const teamValuePerYear = teamHoursPerYear * rate;
    roi = { hoursPerWeek, size, teamHoursPerYear, teamValuePerYear };
  }

  function toggleOption(q: Question, idx: number) {
    setAnswers((prev) => {
      const next: Answers = { ...prev };
      if (q.type === 'scale') {
        next[q.id] = idx;
      } else {
        const cur = new Set(prev[q.id] instanceof Set ? (prev[q.id] as Set<number>) : []);
        if (cur.has(idx)) cur.delete(idx); else cur.add(idx);
        next[q.id] = cur;
      }
      return next;
    });
  }

  function onStart() {
    setStep(0);
  }

  function onNext() {
    if (isQuestion && canNext) setStep(step + 1);
  }

  function onBack() {
    if (isQuestion && step > 0) setStep(step - 1);
    else if (isEmailGate) setStep(total - 1);
  }

  function onSubmitLead() {
    if (leadValid) setStep(total + 1);
  }

  function onRestart() {
    setStep(-1);
    setAnswers({});
    setName('');
    setEmail('');
    setCompany('');
    setBillingRate(DEFAULT_BILLING_RATE);
    setTeamSize('');
  }

  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--at-white)' }}>
      <style>{`
        input::placeholder { color: var(--at-faint); }
      `}</style>

      <SiteNav active="" theme="light" />

      <section style={{ minHeight: '100vh', background: 'var(--at-grey)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '190px 24px 96px' }}>
        <div style={{ width: '100%', maxWidth: 640 }}>

          {isIntro && (
            <div style={{ background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', padding: '56px 48px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20 }}>
              <span className={eyebrow}>Free AI Readiness Mini-Audit</span>
              <h1 style={{ margin: 0, fontSize: 36, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>See Exactly Where Your Agency Stands With AI</h1>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 460, textWrap: 'pretty' }}>18 quick questions across 7 dimensions. Takes about 5 minutes — get an instant, personalised readiness score at the end.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginTop: 6 }}>
                {DIMENSIONS.map((d) => (
                  <span key={d.id} style={{ fontSize: 12, fontWeight: 600, color: 'var(--at-turquoise)', background: 'rgba(6,154,152,0.08)', borderRadius: 'var(--radius-pill)', padding: '6px 12px' }}>{d.title}</span>
                ))}
              </div>
              <button
                onClick={onStart}
                data-hover="background: var(--accent-hover); transform: scale(1.02)"
                style={{ marginTop: 10, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font-sans)', transition: 'background 200ms ease, transform 200ms ease' }}
              >
                Start the Audit
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>
          )}

          {isQuestion && currentQ && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--at-turquoise)' }}>Dimension {currentQ.dimNumber} of 7 · {currentQ.dimTitle}</span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', flex: 'none' }}>Question {step + 1} of {total}</span>
              </div>
              <div style={{ width: '100%', height: 6, background: 'var(--border-default)', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
                <div style={{ height: '100%', background: 'var(--accent)', borderRadius: 'var(--radius-pill)', width: `${progressPct}%`, transition: 'width 300ms ease' }} />
              </div>
              <div style={{ background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', padding: '44px 40px', display: 'flex', flexDirection: 'column', gap: 22 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <h2 style={{ margin: 0, fontSize: 21, lineHeight: 1.35, fontWeight: 700, color: 'var(--text-heading)', textWrap: 'pretty' }}>{currentQ.text}</h2>
                  {currentQ.hint && (
                    <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{currentQ.hint}</span>
                  )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {currentQ.options.map((_opt, idx) => {
                    const answered = answers[currentQ.id];
                    const selected = currentQ.type === 'scale' ? answered === idx : answered instanceof Set && answered.has(idx);
                    const borderColor = selected ? 'var(--at-turquoise)' : 'var(--border-default)';
                    const bg = selected ? 'rgba(6,154,152,0.06)' : '#fff';
                    const dotBorder = selected ? 'var(--at-turquoise)' : 'var(--border-strong)';
                    const dotBg = selected ? 'var(--at-turquoise)' : '#fff';
                    const optionShape = currentQ.type === 'scale' ? '50%' : '5px';
                    return (
                      <button
                        key={idx}
                        onClick={() => toggleOption(currentQ, idx)}
                        style={{ display: 'flex', alignItems: 'center', gap: 14, textAlign: 'left', padding: '14px 16px', borderRadius: 'var(--radius-sm)', border: `1.5px solid ${borderColor}`, background: bg, cursor: 'pointer', fontFamily: 'var(--font-sans)', transition: 'border-color 150ms ease, background 150ms ease' }}
                      >
                        <span style={{ flex: 'none', width: 20, height: 20, borderRadius: optionShape, border: `1.5px solid ${dotBorder}`, background: dotBg, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                          {selected && (
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                          )}
                        </span>
                        <span style={{ fontSize: 14.5, lineHeight: 1.4, color: 'var(--text-heading)' }}>{optionLabel(currentQ, idx)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <button
                  onClick={onBack}
                  style={{ height: 48, padding: '0 24px', background: 'transparent', color: 'var(--text-heading)', border: '1.5px solid var(--border-strong)', borderRadius: 'var(--radius-sm)', fontSize: 14.5, fontWeight: 700, fontFamily: 'var(--font-sans)', opacity: canBack ? 1 : 0.35, cursor: canBack ? 'pointer' : 'not-allowed' }}
                >
                  Back
                </button>
                <button
                  onClick={onNext}
                  style={{ height: 48, padding: '0 28px', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: 'var(--radius-sm)', fontSize: 14.5, fontWeight: 700, fontFamily: 'var(--font-sans)', display: 'inline-flex', alignItems: 'center', gap: 8, opacity: canNext ? 1 : 0.4, cursor: canNext ? 'pointer' : 'not-allowed' }}
                >
                  {nextLabel}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button>
              </div>
            </div>
          )}

          {isEmailGate && (
            <div style={{ background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', padding: '48px 44px', display: 'flex', flexDirection: 'column', gap: 18 }}>
              <span className={eyebrow}>Almost there</span>
              <h2 style={{ margin: 0, fontSize: 27, lineHeight: 1.25, fontWeight: 800, color: 'var(--text-heading)', textWrap: 'balance' }}>Where Should We Send Your Results?</h2>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-muted)' }}>Enter your details and we&apos;ll show your score straight away — and email you the full breakdown.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 4 }}>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  style={{ height: 48, padding: '0 16px', border: '1.5px solid var(--border-default)', borderRadius: 'var(--radius-sm)', fontSize: 14.5, fontFamily: 'var(--font-sans)', color: 'var(--text-heading)', background: '#fff' }}
                />
                <input
                  type="email"
                  placeholder="Work email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  style={{ height: 48, padding: '0 16px', border: '1.5px solid var(--border-default)', borderRadius: 'var(--radius-sm)', fontSize: 14.5, fontFamily: 'var(--font-sans)', color: 'var(--text-heading)', background: '#fff' }}
                />
                <input
                  type="text"
                  placeholder="Agency name (optional)"
                  value={company}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setCompany(e.target.value)}
                  style={{ height: 48, padding: '0 16px', border: '1.5px solid var(--border-default)', borderRadius: 'var(--radius-sm)', fontSize: 14.5, fontFamily: 'var(--font-sans)', color: 'var(--text-heading)', background: '#fff' }}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginTop: 6 }}>
                <button
                  onClick={onBack}
                  style={{ height: 50, padding: '0 24px', background: 'transparent', color: 'var(--text-heading)', border: '1.5px solid var(--border-strong)', borderRadius: 'var(--radius-sm)', fontSize: 14.5, fontWeight: 700, fontFamily: 'var(--font-sans)' }}
                >
                  Back
                </button>
                <button
                  onClick={onSubmitLead}
                  style={{ height: 52, padding: '0 30px', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 700, fontFamily: 'var(--font-sans)', opacity: leadValid ? 1 : 0.4, cursor: leadValid ? 'pointer' : 'not-allowed' }}
                >
                  Show My Results
                </button>
              </div>
            </div>
          )}

          {isResults && result && (
            <div style={{ background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', padding: '48px 44px', display: 'flex', flexDirection: 'column', gap: 22 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 10 }}>
                <span className={eyebrow}>Your AI Readiness Score</span>
                <div style={{ fontSize: 60, lineHeight: 1, fontWeight: 800, color: 'var(--at-cyprus)', letterSpacing: '-0.03em' }}>{result.pct}<span style={{ fontSize: 26, color: 'var(--at-faint)' }}>/100</span></div>
                <span style={{ display: 'inline-flex', padding: '8px 18px', borderRadius: 'var(--radius-pill)', background: 'rgba(6,154,152,0.1)', color: 'var(--at-turquoise)', fontSize: 14, fontWeight: 700 }}>{result.level.label}</span>
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'var(--text-muted)', textWrap: 'pretty' }}>{result.level.summary}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {result.level.detail.map((line, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--at-turquoise)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 3 }}><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    <span style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-body)' }}>{line}</span>
                  </div>
                ))}
              </div>
              <div style={{ height: 1, background: 'var(--border-default)', margin: '4px 0' }} />

              {/* --- Return-on-investment calculator ------------------------ */}
              {roi ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--at-faint)' }}>Your Return On Investment</span>
                    <h3 style={{ margin: 0, fontSize: 19, lineHeight: 1.3, fontWeight: 800, color: 'var(--text-heading)', letterSpacing: '-0.01em' }}>Realise the time you could get back</h3>
                    <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)', textWrap: 'pretty' }}>
                      Agencies at your level typically unlock around <strong style={{ color: 'var(--text-heading)' }}>{roi.hoursPerWeek} hours per person, per week*</strong>. Add your numbers to see what that&apos;s worth across your team.
                    </p>
                  </div>

                  <div className="at-roi-inputs" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label htmlFor="at-roi-rate" style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-heading)' }}>Blended billing rate <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(£ per hour you charge clients)</span></label>
                      <input
                        id="at-roi-rate"
                        type="number"
                        inputMode="numeric"
                        min={0}
                        value={billingRate}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setBillingRate(e.target.value)}
                        placeholder="122"
                        style={{ height: 48, padding: '0 16px', border: '1.5px solid var(--border-default)', borderRadius: 'var(--radius-sm)', fontSize: 14.5, fontFamily: 'var(--font-sans)', color: 'var(--text-heading)', background: '#fff' }}
                      />
                      <button
                        onClick={() => setBillingRate(DEFAULT_BILLING_RATE)}
                        style={{ alignSelf: 'flex-start', background: 'none', border: 'none', padding: 0, fontSize: 12, color: 'var(--at-turquoise)', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}
                      >
                        I don&apos;t know my rate — use the UK average
                      </button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label htmlFor="at-roi-team" style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-heading)' }}>Team size <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(people using AI)</span></label>
                      <input
                        id="at-roi-team"
                        type="number"
                        inputMode="numeric"
                        min={0}
                        value={teamSize}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTeamSize(e.target.value)}
                        placeholder="e.g. 10"
                        style={{ height: 48, padding: '0 16px', border: '1.5px solid var(--border-default)', borderRadius: 'var(--radius-sm)', fontSize: 14.5, fontFamily: 'var(--font-sans)', color: 'var(--text-heading)', background: '#fff' }}
                      />
                      <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>£122 default sourced from BenchPress 2026.</span>
                    </div>
                  </div>

                  <div className="at-roi-tiles" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#f7ddf1', border: '1px solid #edc6e5', borderRadius: 'var(--radius-sm)', padding: '20px', display: 'flex', flexDirection: 'column', gap: 5 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.02em', color: '#8f3f7d' }}>Hours recovered</div>
                      <div style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--text-heading)' }}>{roi.size > 0 ? num0.format(roi.teamHoursPerYear) : '—'}</div>
                      <div style={{ fontSize: 12, lineHeight: 1.45, color: 'var(--text-muted)' }}>hours across your team, per year</div>
                    </div>
                    <div style={{ background: '#f7ddf1', border: '1px solid #edc6e5', borderRadius: 'var(--radius-sm)', padding: '20px', display: 'flex', flexDirection: 'column', gap: 5 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.02em', color: '#8f3f7d' }}>Value unlocked</div>
                      <div style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--text-heading)' }}>{roi.size > 0 ? gbp.format(roi.teamValuePerYear) : '—'}</div>
                      <div style={{ fontSize: 12, lineHeight: 1.45, color: 'var(--text-muted)' }}>capacity, ready to reinvest, per year</div>
                    </div>
                  </div>

                  {roi.size === 0 && (
                    <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>Enter your team size to see your numbers.</span>
                  )}
                  <span style={{ fontSize: 11.5, lineHeight: 1.5, color: 'var(--at-faint)' }}>*Typical result for agencies at your level, based on {WORKING_WEEKS} working weeks a year. Guarantee terms discussed in The Review.</span>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--at-faint)' }}>Your Return On Investment</span>
                  <h3 style={{ margin: 0, fontSize: 19, lineHeight: 1.3, fontWeight: 800, color: 'var(--text-heading)', letterSpacing: '-0.01em' }}>At your level, the biggest wins aren&apos;t time — they&apos;re new revenue</h3>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)', textWrap: 'pretty' }}>
                    You&apos;ve already banked most of the easy time savings. The opportunity now is turning your systems and IP into AI-powered services and products you can sell — new revenue no competitor can copy.
                  </p>
                  <div style={{ background: '#f7ddf1', border: '1px solid #edc6e5', borderRadius: 'var(--radius-sm)', padding: '20px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.02em', color: '#8f3f7d' }}>What&apos;s possible from here</div>
                    <div style={{ fontSize: 15, lineHeight: 1.55, fontWeight: 600, color: 'var(--text-heading)' }}>New, sellable AI products built on your own IP — a revenue line competitors can&apos;t copy.</div>
                  </div>
                </div>
              )}

              <div style={{ height: 1, background: 'var(--border-default)', margin: '4px 0' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--at-faint)' }}>By Dimension</span>
                {result.dimScores.map((ds) => (
                  <div key={ds.title} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                      <span style={{ color: 'var(--text-heading)', fontWeight: 600 }}>{ds.title}</span>
                      <span style={{ color: 'var(--text-muted)' }}>{ds.pctStr}</span>
                    </div>
                    <div style={{ width: '100%', height: 5, background: 'var(--border-default)', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
                      <div style={{ height: '100%', background: 'var(--at-turquoise)', borderRadius: 'var(--radius-pill)', width: ds.pctStr }} />
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href={dcHref('Book The Review.dc.html')}
                data-hover="background: var(--accent-hover); transform: scale(1.02)"
                style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, height: 54, padding: '0 32px', background: 'var(--accent)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 15.5, fontWeight: 700, textDecoration: 'none', transition: 'background 200ms ease, transform 200ms ease' }}
              >
                Book The Review — Go Deeper
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
              <button
                onClick={onRestart}
                style={{ alignSelf: 'center', background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: 13, textDecoration: 'underline', cursor: 'pointer', padding: 0, fontFamily: 'var(--font-sans)' }}
              >
                Retake the audit
              </button>
            </div>
          )}

        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
