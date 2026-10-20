// All user-facing UI strings live here. Add src/i18n/hi.ts with the same shape for a Hindi UI.
export const t = {
  siteName: 'Sarkari Benchmark',
  tagline: "We check what India's leaders said and promised against the official numbers, and keep score.",
  nav: { home: 'Claims', promises: 'Promises', indices: 'World rankings', methodology: 'How we score', data: 'Download data' },
  fixtureBanner: 'This is sample data for testing. Nothing here is a real claim or verdict.',
  draftBanner: 'Not checked yet: two people still need to review this entry, so it may contain mistakes.',
  draftCount: (n: number) => `${n} of these entries have not been checked by a person yet.`,
  verdicts: {
    false: 'False',
    misleading: 'Misleading',
    unachieved: 'Not delivered',
    'missed-deadline': 'Missed deadline',
    'in-progress': 'In progress',
    true: 'True',
    unverifiable: "Can't be checked",
  } as Record<string, string>,
  verdictDefs: {
    false: 'The official numbers or records show this is not true.',
    misleading: 'Partly true, but it leaves out something important or twists a number, so it gives the wrong idea.',
    unachieved: 'The promise was not delivered (or was quietly dropped).',
    'missed-deadline': 'The promise had a deadline, the deadline passed, and the goal was not met.',
    'in-progress': 'Work is still going on and the deadline has not passed yet.',
    true: 'The evidence backs it up. We include claims that turned out true on purpose, to be fair.',
    unverifiable: 'There is no reliable public data to prove it right or wrong.',
  } as Record<string, string>,
  claimTypes: { promise: 'Promise', statement: 'Statement', statistic: 'Claim about numbers' } as Record<string, string>,
  confidence: { high: 'Very sure', medium: 'Fairly sure', low: 'Not very sure' } as Record<string, string>,
  evidenceTypes: {
    govt_data: 'Government data', parliament: 'Parliament', cag: 'CAG', rti: 'RTI', index: 'Index',
    news: 'News', fact_check: 'Fact-check', intl_org: 'International org.',
  } as Record<string, string>,
  home: {
    title: 'Claims', byVerdict: 'How many of each result', bySpeaker: 'Who said them', search: 'Search what was said, by whom, or where',
    speaker: 'Speaker', verdict: 'Verdict', topic: 'Topic', year: 'Year', type: 'Type', all: 'All', reset: 'Reset filters',
    results: (n: number, total: number) => `Showing ${n} of ${total} claims`, none: 'Nothing matches. Try removing a filter.',
  },
  claim: {
    original: 'What they said', english: 'In English', paraphrased: 'Not word for word', paraphrasedNote: 'Taken from news reports, so this may not be their exact words.',
    venue: 'Where', date: 'When', deadline: 'Deadline', type: 'Type', video: 'Watch it', mediaLinks: 'Media', transcripts: 'Where it was said',
    evidence: 'The proof we checked', colType: 'Kind', colPublisher: 'Source', colTitle: 'Document', colDate: 'Date', colFigure: 'What it shows',
    chart: 'The numbers', govtResponse: "What the government says", analysis: 'Our reading', confidence: 'How sure we are',
    lastReviewed: 'Last checked', notes: 'Notes', reviewStatus: 'Checked by people?', reviewed: 'Reviewed', draft: 'Draft',
    target: 'Promised target', watch: 'Watch on YouTube', source: 'Source',
  },
  promises: {
    title: 'Promises', intro: 'Promises that carry a deadline, sorted by deadline. “Pending” means the deadline is after the date this site was built.',
    met: 'Met', missed: 'Missed', pending: 'Pending', overdue: 'Past deadline, unresolved', none: 'No promises with deadlines yet.',
    builtOn: 'Status computed on', deadline: 'Deadline',
  },
  indices: {
    title: 'Indices', intro: 'India’s position in international indices over time.', outOf: 'Out of', metric: 'Metric', methodology: 'Methodology note',
    govtResponse: "Government's response", related: 'Related claims', publisher: 'Publisher', lowerBetter: 'Lower is better; axis inverted so “up” is an improvement.',
    none: 'No indices yet.', india: 'India',
  },
  data: {
    title: 'Download the data',
    downloadJson: 'Download for developers (JSON)', downloadCsv: 'Download for Excel (CSV)',
  },
  footer: 'No tracking. All our data is public, and anyone can check or challenge a result on GitHub.',
  noData: 'No data yet.',
};
export type Strings = typeof t;
