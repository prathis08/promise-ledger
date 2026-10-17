#!/usr/bin/env python3
"""Generate DeepSeek research job prompts: one per party x domain.
Usage: python3 -I scripts/make_jobs.py [PARTY] [ROUND] [MIN_STATEMENTS]   e.g. make_jobs.py INC 2 6"""
import sys
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
JOBS = ROOT / "research" / "jobs"; JOBS.mkdir(parents=True, exist_ok=True)

DOMAINS = {
    "economy": ("Economy & Jobs", "economy, jobs, black-money, manufacturing, prices, income"),
    "agri": ("Agriculture & Rural", "agriculture (farm income, MSP, loan waivers, irrigation, rural employment)"),
    "welfare": ("Welfare, Health & Education", "housing, sanitation, health, education, women"),
    "infra": ("Infrastructure & Energy", "energy, infrastructure, railways, digital, environment"),
    "security": ("Security & Internal Affairs", "security, terrorism, kashmir, citizenship, internal-security"),
    "governance": ("Democracy & Governance", "governance, corruption, foreign-policy"),
}
PARTY = {
    "BJP": dict(
        era="26 May 2014 to today (2026-10-17). BJP's 2013-14 campaign promises also count (date them when made).",
        people="Union ministers (e.g. Narendra Modi, Amit Shah, Nirmala Sitharaman, Arun Jaitley, Nitin Gadkari, Piyush Goyal, Rajnath Singh, Ashwini Vaishnaw, Hardeep Puri, Dharmendra Pradhan, Mansukh Mandaviya, S. Jaishankar) and BJP Chief Ministers (e.g. Yogi Adityanath UP, Shivraj Singh Chouhan MP, Devendra Fadnavis Maharashtra, Himanta Biswa Sarma Assam, Manohar Lal Khattar Haryana, Vasundhara Raje Rajasthan, Vijay Rupani / Bhupendra Patel Gujarat, B.S. Yediyurappa / Basavaraj Bommai Karnataka, Pushkar Singh Dhami Uttarakhand, Raghubar Das Jharkhand, Mohan Yadav MP, Bhajan Lal Sharma Rajasthan)",
        prefix="bjp",
        recency="- RECENCY: prefer claims from 2020-2026 (at least 5 of the 8); the dataset is already heavy on 2013-2019."),
    "INC": dict(
        era="1 January 2000 to 25 May 2014. Congress 2004 and 2009 manifesto/campaign promises count.",
        people="UPA Union ministers and leaders (e.g. Manmohan Singh, P. Chidambaram, Pranab Mukherjee, Kapil Sibal, Sushilkumar Shinde, A.K. Antony, Jairam Ramesh, Sharad Pawar is NCP so exclude, Sonia Gandhi as UPA Chairperson, Rahul Gandhi, Mallikarjun Kharge, Veerappa Moily, Jyotiraditya Scindia then in INC) and Congress Chief Ministers (e.g. Sheila Dikshit Delhi, Y.S. Rajasekhara Reddy / Kiran Kumar Reddy Andhra Pradesh, Ashok Gehlot Rajasthan, Digvijaya Singh MP until 2003, Vilasrao Deshmukh / Ashok Chavan / Prithviraj Chavan Maharashtra, Bhupinder Singh Hooda Haryana, Tarun Gogoi Assam, Oommen Chandy Kerala, Amarinder Singh Punjab 2002-07, Siddaramaiah Karnataka 2013-14, Virbhadra Singh Himachal)",
        prefix="inc",
        recency="- Spread claims across UPA-I (2004-09), UPA-II (2009-14) and Congress state governments 2000-2014."),
}
SCHEMA = (ROOT / "SCHEMA.md").read_text()
EXISTING_CLAIMS = [json.loads(p.read_text()) for p in sorted((ROOT / "data" / "claims").glob("*.json"))]
EXISTING = [c["id"] for c in EXISTING_CLAIMS]
COVERED = "\n".join(f"- {c['id']} ({c['speaker']}, {c['date'][:4]}): {c.get('quote_english') or c.get('summary','')}"[:220] for c in EXISTING_CLAIMS)

TEMPLATE = """You are a careful, strictly non-partisan fact-check researcher building a benchmark that compares the
claims and promises of Indian political parties against verifiable data. Today is 2026-10-17.

TASK: research exactly 8 claims made by **{party}** leaders in the domain **{dname}** (topics: {topics}).
Era: {era}
Speakers to consider: {people}

QUOTA (follow it — the same quota is used for every party so the comparison is fair):
- 8 claims total: at least {min_promises} `promise` with a stated deadline or target, at least {min_statements} `statement`/`statistic`.
- At least 2 claims by Chief Ministers (level "state"), the rest central ministers / party leaders.
- Choose the MOST PROMINENT, widely reported claims in this domain (manifesto pledges, budget speeches, Independence Day / flagship
  scheme announcements, major Parliament statements) — do NOT cherry-pick only the worst or only the best.
- Include every claim's honest verdict; claims that held up get verdict "true". Expect a mix.
- NO DUPLICATES. These claims are ALREADY in the dataset — do not research them again, not even under a different id,
  a different speaker repeating the same promise, or a later restatement of the same target. Pick genuinely NEW claims:
{covered}
- Stay inside YOUR domain ({dname}); other agents cover the other domains in parallel, so a claim that belongs mainly to
  another domain (e.g. farm income belongs to Agriculture, not Economy) is not yours.
{recency}

METHOD — use your websearch and webfetch tools heavily:
1. For each claim, find where it was said (PIB, pmindia, Lok Sabha/Rajya Sabha debates, party manifesto PDF, news report of the
   speech, YouTube video). Video is optional.
2. Find the outcome in primary data: ministry data, CAG reports, Parliament Q&A answers, RBI, MoSPI/NSO, NFHS, Economic Survey,
   Budget documents, World Bank/IMF, plus fact-checkers (Alt News, BOOM, Factly, PTI Fact Check, IndiaSpend) and reputable press.
3. Find the government's/party's own defence or response if one exists (govt_response).

HARD RULES (entries that break them are automatically discarded by a verifier that opens every URL):
- NEVER invent a URL, video id, quote, date or number. Only cite URLs you actually saw in search results or fetched.
  An invented URL gets the whole claim rejected.
- quote_is_verbatim = true only if you saw the exact words in a transcript; otherwise false and give the reported wording.
- >= 2 evidence items per claim, each with a real URL. >= 1 transcript_sources or media item.
- Neutral wording in summary/analysis: data first, no adjectives, no claims about intent.
- confidence: "high" only if you read primary data yourself; otherwise "medium" or "low".

OUTPUT: your final answer must be ONE fenced ```json code block containing a JSON ARRAY of 8 claim objects and nothing after it.
Each object follows the claim schema below (with the v2 fields party/role/level/state). Set "party": "{party_code}",
"researched_by": "deepseek-v4.1-flash-free", "review_status": "draft". id format: "{prefix}-<speaker-surname>-<year>-<slug>".
You cannot write files — just print the JSON.

=== SCHEMA ===
{schema}
"""

ONLY = sys.argv[1] if len(sys.argv) > 1 else None
ROUND = int(sys.argv[2]) if len(sys.argv) > 2 else 1
MIN_A = int(sys.argv[3]) if len(sys.argv) > 3 else 3
for pcode, p in PARTY.items():
    if ONLY and pcode != ONLY: continue
    for dkey, (dname, topics) in DOMAINS.items():
        suffix = "" if ROUND == 1 else f"-r{ROUND}"
        (JOBS / f"{p['prefix']}-{dkey}{suffix}.md").write_text(TEMPLATE.format(min_statements=MIN_A, min_promises=max(1, 8 - MIN_A - 0) if MIN_A > 3 else 3,
            party="BJP (Bharatiya Janata Party)" if pcode == "BJP" else "INC (Indian National Congress)",
            party_code=pcode, dname=dname, topics=topics, era=p["era"], people=p["people"],
            covered=COVERED, recency=p["recency"], prefix=p["prefix"], schema=SCHEMA))
print(sorted(x.name for x in JOBS.glob("*.md")))
