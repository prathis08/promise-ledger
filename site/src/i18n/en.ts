// All user-facing UI strings live here. Add src/i18n/hi.ts with the same shape for a Hindi UI.
export const t = {
  siteName: 'Sarkari Benchmark',
  tagline: 'A neutral, sourced fact-check ledger of public claims and promises by Narendra Modi and Amit Shah.',
  nav: { home: 'Claims', promises: 'Promises', indices: 'Indices', methodology: 'Methodology', data: 'Data' },
  fixtureBanner: 'Showing FIXTURE data (no files found in data/). Nothing here is a real claim or verdict.',
  draftBanner: 'DRAFT — not reviewed. This entry has not been checked by two human reviewers and may contain errors.',
  draftCount: (n: number) => `${n} of the entries shown are still drafts awaiting human review.`,
  verdicts: {
    false: 'False',
    misleading: 'Misleading',
    unachieved: 'Unachieved',
    'missed-deadline': 'Missed deadline',
    'in-progress': 'In progress',
    true: 'True',
    unverifiable: 'Unverifiable',
  } as Record<string, string>,
  verdictDefs: {
    false: 'The claim is contradicted by the best available evidence.',
    misleading: 'The claim is technically accurate in part but leaves out context that changes its meaning, or uses a figure in a way the data does not support.',
    unachieved: 'A promise or target whose stated goal was not met, where no specific deadline is the issue (or the goal is no longer being pursued).',
    'missed-deadline': 'A promise with a dated deadline that has passed without the goal being met.',
    'in-progress': 'A promise or target that is being worked on; the deadline has not passed or progress is ongoing.',
    true: 'The claim is supported by the best available evidence. Claims that held up are included on purpose.',
    unverifiable: 'No reliable public data exists that can confirm or refute the claim.',
  } as Record<string, string>,
  claimTypes: { promise: 'Promise', statement: 'Statement', statistic: 'Statistic' } as Record<string, string>,
  confidence: { high: 'High', medium: 'Medium', low: 'Low' } as Record<string, string>,
  evidenceTypes: {
    govt_data: 'Government data', parliament: 'Parliament', cag: 'CAG', rti: 'RTI', index: 'Index',
    news: 'News', fact_check: 'Fact-check', intl_org: 'International org.',
  } as Record<string, string>,
  home: {
    title: 'Claims', byVerdict: 'By verdict', bySpeaker: 'By speaker', search: 'Search quotes, summaries, venues',
    speaker: 'Speaker', verdict: 'Verdict', topic: 'Topic', year: 'Year', type: 'Type', all: 'All', reset: 'Reset filters',
    results: (n: number, total: number) => `${n} of ${total} claims`, none: 'No claims match these filters.',
  },
  claim: {
    original: 'Original', english: 'English', paraphrased: 'Paraphrased', paraphrasedNote: 'Paraphrased from news reports; not a verbatim quote.',
    venue: 'Venue', date: 'Date', deadline: 'Deadline', type: 'Type', video: 'Video', mediaLinks: 'Media', transcripts: 'Transcript / text sources',
    evidence: 'Evidence', colType: 'Type', colPublisher: 'Publisher', colTitle: 'Title', colDate: 'Date', colFigure: 'Key figure',
    chart: 'The data', govtResponse: "Government's response", analysis: 'Analysis', confidence: 'Confidence in verdict',
    lastReviewed: 'Last reviewed', notes: 'Notes', reviewStatus: 'Review status', reviewed: 'Reviewed', draft: 'Draft',
    target: 'Target', watch: 'Watch on YouTube', source: 'Source',
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
    title: 'Data',
    downloadJson: 'Download claims (JSON)', downloadCsv: 'Download claims (CSV)',
  },
  footer: 'No tracking. Open data and open review: every verdict can be checked and challenged on GitHub.',
  noData: 'No data yet.',
};
export type Strings = typeof t;
