// FIXTURE DATA — fake, for layout testing only. Never shown when real files exist in data/.
const base = {
  language: 'en', quote_is_verbatim: false, topics: ['economy'], media: [], transcript_sources: [{ title: 'FIXTURE source', url: 'https://example.com/fixture' }],
  evidence: [{ type: 'govt_data', publisher: 'FIXTURE Publisher', title: 'FIXTURE dataset', url: 'https://example.com/data', date: '2024-01-01', key_figure: 'FIXTURE figure: 42' }],
  govt_response: [], chart: null, confidence: 'medium', review_status: 'draft', last_reviewed: '2026-10-17', notes: 'FIXTURE — not a real claim.',
};
export const fixtureClaims = [
  { ...base, id: 'fixture-2016-sample-promise', speaker: 'Narendra Modi', date: '2016-02-28', venue: 'FIXTURE venue', claim_type: 'promise', deadline: '2022-12-31',
    quote_english: 'FIXTURE: We will double the sample metric by 2022.', quote_original: '', verdict: 'missed-deadline',
    summary: 'FIXTURE: the sample metric rose, but did not double.', topics: ['agriculture', 'income'],
    media: [{ platform: 'youtube', title: 'FIXTURE video', url: 'https://youtu.be/dQw4w9WgXcQ', timestamp_seconds: 30, channel: 'FIXTURE' }],
    chart: { series: 'fixture-metric', target: 16000, target_label: 'FIXTURE target' },
    govt_response: [{ title: 'FIXTURE reply', url: 'https://example.com/reply', summary: 'FIXTURE: the government says the metric is on track.' }],
    analysis: 'FIXTURE paragraph one.\n\nFIXTURE paragraph two.' },
  { ...base, id: 'fixture-2020-sample-true', speaker: 'Amit Shah', date: '2020-05-01', venue: 'FIXTURE venue 2', claim_type: 'statistic', deadline: null,
    quote_english: 'FIXTURE: The sample figure reached 100.', quote_original: 'FIXTURE original', verdict: 'true', summary: 'FIXTURE: official data confirms the figure.', topics: ['health'], analysis: 'FIXTURE analysis.' },
  { ...base, id: 'fixture-2024-sample-pending', speaker: 'Narendra Modi', date: '2024-03-10', venue: 'FIXTURE venue 3', claim_type: 'promise', deadline: '2030-12-31',
    quote_english: 'FIXTURE: Every village will be connected by 2030.', quote_original: '', verdict: 'in-progress', summary: 'FIXTURE: coverage is rising.', topics: ['infrastructure'], analysis: 'FIXTURE analysis.' },
];
export const fixtureIndices = [
  { slug: 'fixture-index', name: 'FIXTURE Index', publisher: 'FIXTURE Org', url: 'https://example.com', higher_is_better: false, metric: 'Rank', out_of_label: 'countries ranked',
    points: [{ year: 2014, value: 55, out_of: 76 }, { year: 2018, value: 103, out_of: 119 }, { year: 2022, value: 107, out_of: 121 }],
    govt_response: [{ title: 'FIXTURE response', url: 'https://example.com', summary: 'FIXTURE: government disputes the methodology.' }],
    methodology_note: 'FIXTURE: methodology changed between editions.', related_claims: ['fixture-2016-sample-promise'] },
];
export const fixtureSeries = [
  { slug: 'fixture-metric', title: 'FIXTURE metric', unit: 'units', source: { publisher: 'FIXTURE', title: 'FIXTURE', url: 'https://example.com' },
    points: [{ x: '2012-13', y: 6000 }, { x: '2015-16', y: 8000 }, { x: '2018-19', y: 10218 }], note: 'FIXTURE series.' },
];
