[0m
> build · deepseek-flash
[0m✗ [0mls -la indices/ failed
[91m[1mError: [0mNo tool named "bash" is currently available. Please use a tool from the available tool list.
> build · deepseek-flash
[0m✱ [0mGlob "indices/*.json" [90m12 matches[0m
> build · deepseek-flash
[0m→ [0mRead indices/eiu-democracy-index.json 
[0m→ [0mRead indices/freedom-house.json 
[0m→ [0mRead indices/global-hunger-index.json 
[0m→ [0mRead indices/global-innovation-index.json 
[0m→ [0mRead indices/ti-corruption-perceptions.json 
[0m→ [0mRead indices/rsf-press-freedom.json 
> build · deepseek-flash
I've read all six files. Now let me research the earlier editions. Let me start with several parallel searches.
[0m◈ [0mWeb Search via Tavily "RSF World Press Freedom Index India rank 2004 2005 2006 2007 2008 2009 2010 2011 2012 2013 2014" 
[0m◈ [0mWeb Search via Tavily "EIU Democracy Index India score 2006 2008 2010 2012" 
[0m◈ [0mWeb Search via Tavily "Global Hunger Index India rank 2008 2009 2010 2011 2012 2013" 
[0m◈ [0mWeb Search via Tavily "Transparency International Corruption Perceptions Index India score 2004 2005 2006 2007 2008 2009 2010 2011" 
[0m◈ [0mWeb Search via Tavily "Global Innovation Index India rank 2007 2008 2009 2010 2011 2012" 
[0m◈ [0mWeb Search via Tavily "Freedom House India freedom score 2006 2007 2008 2009 2010 2011 2012 2013 2014 2015 2016" 
> build · deepseek-flash
Let me dig into primary sources for each index. Starting with several fetches.
[0m% [0mWebFetch https://en.wikipedia.org/wiki/World_Press_Freedom_Index 
[0m% [0mWebFetch https://en.wikipedia.org/wiki/Global_Innovation_Index 
[0m% [0mWebFetch https://www.transparency.org/en/cpi/2011 
[0m% [0mWebFetch https://rsf.org/en/country/india 
> build · deepseek-flash
Let me gather TI pre-2012 data and the EIU historical table.
[0m% [0mWebFetch https://www.transparency.org/en/cpi/2010 
[0m✗ [0mWebFetch https://www.transparency.org/en/cpi/2007 failed
[91m[1mError: [0mStatusCode: non 2xx status code (403 GET https://www.transparency.org/en/cpi/2007)
[0m✗ [0mWebFetch https://www.transparency.org/en/cpi/2004 failed
[91m[1mError: [0mStatusCode: non 2xx status code (403 GET https://www.transparency.org/en/cpi/2004)
[0m% [0mWebFetch https://www.transparency.org/en/cpi/2006 
[0m% [0mWebFetch https://www.transparency.org/en/cpi/2005 
[0m% [0mWebFetch https://www.transparency.org/en/cpi/2008 
[0m% [0mWebFetch https://www.transparency.org/en/cpi/2009 
> build · deepseek-flash
Now let me fetch the official TI datasets (CSV) to get India's exact scores.
[0m% [0mWebFetch https://images.transparencycdn.org/images/CPI-2010-new_200601_105629.csv 
[0m% [0mWebFetch https://images.transparencycdn.org/images/CPI-Archive-2008-2.csv 
[0m% [0mWebFetch https://images.transparencycdn.org/images/CPI-2009-new_200601_120052.csv 
[0m% [0mWebFetch https://images.transparencycdn.org/images/CPI-2005_200602_104136.csv 
[0m% [0mWebFetch https://images.transparencycdn.org/images/CPI-2011-new_200601_104308.csv 
[0m% [0mWebFetch https://images.transparencycdn.org/images/CPI-2006-new_200602_095933.csv 
> build · deepseek-flash
Good — I have TI data for 2005–2011 from official CSVs. Now let me get 2004/2007/2012 and other indices.
[0m✗ [0mWebFetch https://www.transparency.org/en/cpi/2012 failed
[91m[1mError: [0mStatusCode: non 2xx status code (403 GET https://www.transparency.org/en/cpi/2012)
[0m◈ [0mWeb Search via Firecrawl "India Global Innovation Index rank 2011 2012 INSEAD report 62 64" 
[0m◈ [0mWeb Search via Firecrawl "Freedom House India aggregate score 75 76 77 78 "Freedom in the World" 2008 2010 2012 2014" 
[0m✗ [0mWebFetch https://www.eiu.com/n/wp-content/uploads/2023/02/Democracy-Index-2022_FV2.pdf failed
[91m[1mError: [0mUnsupported fetched file content type: application/pdf
> build · deepseek-flash
Let me search for the remaining indices with focused queries.
[0m◈ [0mWeb Search via Firecrawl "India ranked 62 Global Innovation Index 2011 INSEAD" 
[0m◈ [0mWeb Search via Firecrawl "India rank Global Innovation Index 2012 64 INSEAD" 
[0m◈ [0mWeb Search via Firecrawl "India 63rd Global Hunger Index 2013" 
[0m◈ [0mWeb Search via Firecrawl "India 67th Global Hunger Index 2011 report" 
[0m◈ [0mWeb Search via Firecrawl "India 66th Global Hunger Index 2008" 
[0m◈ [0mWeb Search via Firecrawl "India rank World Press Freedom Index 2010 2011 2012 2013 2014 RSF" 
> build · deepseek-flash
[0m◈ [0mWeb Search via Firecrawl "Global Innovation Index India 2012 rank" 
[0m◈ [0mWeb Search via Firecrawl "World Press Freedom Index India 2010 rank" 
[0m◈ [0mWeb Search via Firecrawl "Global Hunger Index India 2013 rank 63" 
> build · deepseek-flash
[0m✗ [0mGrep "India" failed
[91m[1mError: [0mPermission denied: external_directory
[0m✗ [0mGrep "2013|2014|2012" failed
[91m[1mError: [0mPermission denied: external_directory
> build · deepseek-flash
Web search seems rate-limited. Let me fetch known reference pages directly.
[0m% [0mWebFetch https://en.wikipedia.org/wiki/Global_Hunger_Index 
[0m% [0mWebFetch https://en.wikipedia.org/wiki/Freedom_in_the_World 
[0m✗ [0mWebFetch https://rsf.org/en/ranking/2014 failed
[91m[1mError: [0mStatusCode: non 2xx status code (404 GET https://rsf.org/en/ranking/2014)
[0m✗ [0mWebFetch https://rsf.org/en/ranking/2013 failed
[91m[1mError: [0mStatusCode: non 2xx status code (404 GET https://rsf.org/en/ranking/2013)
> build · deepseek-flash
[0m◈ [0mWeb Search via Firecrawl "Global Innovation Index 2012 India" 
[0m% [0mWebFetch https://en.wikipedia.org/wiki/Global_Innovation_Index?action=raw 
[0m✗ [0mWebFetch https://rsf.org/en/classement/2013 failed
[91m[1mError: [0mStatusCode: non 2xx status code (404 GET https://rsf.org/en/classement/2013)
[0m% [0mWebFetch https://web.archive.org/web/2013/http://en.rsf.org/press-freedom-index-2013,1054.html 
> build · deepseek-flash
[0m✗ [0mWebFetch https://freedomhouse.org/country/india/freedom-world/2016 failed
[91m[1mError: [0mStatusCode: non 2xx status code (404 GET https://freedomhouse.org/country/india/freedom-world/2016)
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=Global+Innovation+Index+India+rank+2012+2011+2010 
[0m✗ [0mWebFetch https://freedomhouse.org/country/india/freedom-world/2006 failed
[91m[1mError: [0mStatusCode: non 2xx status code (404 GET https://freedomhouse.org/country/india/freedom-world/2006)
> build · deepseek-flash
DuckDuckGo works. Let me run targeted searches for the remaining series.
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=Global+Innovation+Index+India+rank+2007+2008+2009 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=Global+Hunger+Index+India+rank+2006+2008+2009+2010+2011+2012+2013 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=Freedom+House+India+aggregate+score+2006+2010+2014+2016 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=World+Press+Freedom+Index+India+rank+2004+2005+2006+2007+2008+2009+2010+2011+2012 
> build · deepseek-flash
Good leads. Let me fetch the specific sources.
[0m✗ [0mWebFetch https://www.refworld.org/reference/annualreport/freehou/2016/110146 failed
[91m[1mError: [0mStatusCode: non 2xx status code (403 GET https://www.refworld.org/reference/annualreport/freehou/2016/110146)
[0m% [0mWebFetch https://www.thehindu.com/sci-tech/agriculture/India-ranked-dismal-66th-in-Global-Hunger-Index/article16875885.ece 
[0m% [0mWebFetch https://stats.areppim.com/listes/list_innovation_2012.htm 
[0m% [0mWebFetch https://rsf.org/en/node/79198 
> build · deepseek-flash
Let me try Our World in Data CSVs (reputable, machine-readable) and the RSF 2005 page.
[0m% [0mWebFetch https://www.nationsonline.org/oneworld/press_freedom-2005.htm 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=rsf.org+world+press+freedom+index+2006+2007+2008+node 
[0m% [0mWebFetch https://ourworldindata.org/grapher/freedom-score-fh.csv 
> build · deepseek-flash
[0m% [0mWebFetch https://stats.areppim.com/listes/list_innovation_2007.htm 
[0m% [0mWebFetch https://ourworldindata.org/grapher/freedom-score-fh.csv?country=IND 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=Global+Hunger+Index+2011+India+67+81+countries 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=Global+Hunger+Index+2013+India+rank+63+78+countries 
> build · deepseek-flash
[0m✗ [0mWebFetch https://freedomhouse.org/report/freedom-world/2016/india failed
[91m[1mError: [0mStatusCode: non 2xx status code (404 GET https://freedomhouse.org/report/freedom-world/2016/india)
[0m% [0mWebFetch https://stats.areppim.com/listes/list_innovation_2008_2009.htm 
[0m% [0mWebFetch https://stats.areppim.com/listes/list_innovation_2009_2010.htm 
[0m% [0mWebFetch https://ourworldindata.org/grapher/freedom-score-fh.csv?country=~IND 
> build · deepseek-flash
[0m% [0mWebFetch https://ourworldindata.org/grapher/freedom-score-fh.metadata.json 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=Freedom+House+India+aggregate+score+2006+2008+2012+2016 
[0m% [0mWebFetch https://rsf.org/en/index?year=2005 
[0m% [0mWebFetch https://rsf.org/en/index?year=2014 
> build · deepseek-flash
Major breakthrough — RSF serves per-year official data. Let me fetch the RSF CSVs and OWID API.
[0m% [0mWebFetch https://rsf.org/sites/default/files/import_classement/2004.csv 
[0m% [0mWebFetch https://api.ourworldindata.org/v1/indicators/1210111.data.json?entities=IND 
[0m% [0mWebFetch https://rsf.org/sites/default/files/import_classement/2006.csv 
[0m% [0mWebFetch https://rsf.org/sites/default/files/import_classement/2007.csv 
> build · deepseek-flash
[0m% [0mWebFetch https://rsf.org/sites/default/files/import_classement/2008.csv 
[0m% [0mWebFetch https://ourworldindata.org/grapher/freedom-score-fh.csv?v=1&csvType=filtered&entities=IND 
[0m% [0mWebFetch https://rsf.org/sites/default/files/import_classement/2010.csv 
[0m% [0mWebFetch https://rsf.org/sites/default/files/import_classement/2012.csv 
> build · deepseek-flash
[0m✗ [0mWebFetch https://worldscorecard.com/scorecards/indian-scorecard/freedom-in-the-world/ failed
[91m[1mError: [0mStatusCode: non 2xx status code (403 GET https://worldscorecard.com/scorecards/indian-scorecard/freedom-in-the-world/)
[0m% [0mWebFetch https://rsf.org/sites/default/files/import_classement/2009.csv 
[0m% [0mWebFetch https://rsf.org/sites/default/files/import_classement/2013.csv 
> build · deepseek-flash
[0m% [0mWebFetch https://api.ourworldindata.org/v1/indicators/1210111.data.json 
[0m✗ [0mWebFetch https://web.archive.org/web/2023/https://www.refworld.org/reference/annualreport/freehou/2016/110146 failed
[91m[1mError: [0mStatusCode: non 2xx status code (404 GET https://web.archive.org/web/2023/https://www.refworld.org/reference/annualreport/freehou/2016/110146)
> build · deepseek-flash
[0m% [0mWebFetch https://web.archive.org/web/2016/http://freedomhouse.org/report/freedom-world/2016/india 
[0m% [0mWebFetch https://web.archive.org/web/2010/http://freedomhouse.org/report/freedom-world/2010/india 
> build · deepseek-flash
[0m% [0mWebFetch https://www.transparency.org/en/cpi/2012 
[0m% [0mWebFetch https://www.transparency.org/en/cpi/2007 
[0m% [0mWebFetch https://web.archive.org/web/2016/http://freedomhouse.org/report/freedom-world/2015/india 
[0m% [0mWebFetch https://web.archive.org/web/2016/http://freedomhouse.org/report/freedom-world/2014/india 
> build · deepseek-flash
[0m% [0mWebFetch https://www.transparency.org/en/cpi/2004 
[0m% [0mWebFetch https://images.transparencycdn.org/images/CPI-2007-new_200602_092501.csv 
[0m% [0mWebFetch https://ourworldindata.org/grapher/freedom-score-fh.csv?time=2005..2015 
> build · deepseek-flash
[0m% [0mWebFetch https://images.transparencycdn.org/images/CPI-2004_200602_110140.csv 
> build · deepseek-flash
```json
{
  "eiu-democracy-index": {
    "slug": "eiu-democracy-index",
    "name": "EIU Democracy Index",
    "publisher": "Economist Intelligence Unit",
    "url": "https://www.eiu.com/n/campaigns/democracy-index-2024/",
    "higher_is_better": true,
    "metric": "Score (0-10)",
    "out_of_label": "not a rank",
    "points": [
      {
        "year": 2006,
        "value": 7.68,
        "out_of": 10,
        "source_url": "https://en.wikipedia.org/wiki/The_Economist_Democracy_Index"
      },
      {
        "year": 2008,
        "value": 7.8,
        "out_of": 10,
        "source_url": "https://en.wikipedia.org/wiki/The_Economist_Democracy_Index"
      },
      {
        "year": 2010,
        "value": 7.28,
        "out_of": 10,
        "source_url": "https://en.wikipedia.org/wiki/The_Economist_Democracy_Index"
      },
      {
        "year": 2011,
        "value": 7.3,
        "out_of": 10,
        "source_url": "https://en.wikipedia.org/wiki/The_Economist_Democracy_Index"
      },
      {
        "year": 2012,
        "value": 7.52,
        "out_of": 10,
        "source_url": "https://en.wikipedia.org/wiki/The_Economist_Democracy_Index"
      },
      {
        "year": 2013,
        "value": 7.69,
        "out_of": 10,
        "source_url": "https://en.wikipedia.org/wiki/The_Economist_Democracy_Index"
      },
      {
        "year": 2014,
        "value": 7.92,
        "out_of": 10,
        "source_url": "https://en.wikipedia.org/wiki/The_Economist_Democracy_Index"
      },
      {
        "year": 2015,
        "value": 7.74,
        "out_of": 10,
        "source_url": "https://en.wikipedia.org/wiki/The_Economist_Democracy_Index"
      },
      {
        "year": 2016,
        "value": 7.81,
        "out_of": 10,
        "source_url": "https://en.wikipedia.org/wiki/The_Economist_Democracy_Index"
      },
      {
        "year": 2017,
        "value": 7.23,
        "out_of": 10,
        "source_url": "https://en.wikipedia.org/wiki/The_Economist_Democracy_Index"
      },
      {
        "year": 2018,
        "value": 7.23,
        "out_of": 10,
        "source_url": "https://en.wikipedia.org/wiki/The_Economist_Democracy_Index"
      },
      {
        "year": 2019,
        "value": 6.9,
        "out_of": 10,
        "source_url": "https://en.wikipedia.org/wiki/The_Economist_Democracy_Index"
      },
      {
        "year": 2020,
        "value": 6.61,
        "out_of": 10,
        "source_url": "https://en.wikipedia.org/wiki/The_Economist_Democracy_Index"
      },
      {
        "year": 2021,
        "value": 6.91,
        "out_of": 10,
        "source_url": "https://en.wikipedia.org/wiki/The_Economist_Democracy_Index"
      },
      {
        "year": 2022,
        "value": 7.04,
        "out_of": 10,
        "source_url": "https://en.wikipedia.org/wiki/The_Economist_Democracy_Index"
      },
      {
        "year": 2023,
        "value": 7.18,
        "out_of": 10,
        "source_url": "https://en.wikipedia.org/wiki/The_Economist_Democracy_Index"
      },
      {
        "year": 2024,
        "value": 7.29,
        "out_of": 10,
        "source_url": "https://en.wikipedia.org/wiki/The_Economist_Democracy_Index"
      },
      {
        "year": 2025,
        "value": 6.96,
        "out_of": 10,
        "source_url": "https://en.wikipedia.org/wiki/The_Economist_Democracy_Index"
      }
    ],
    "govt_response": [
      {
        "title": "EAC-PM paper 'Global Perception Indices' (July 2023)",
        "url": "https://eacpm.gov.in/wp-content/uploads/2023/07/6-Global-Perception-Indices.pdf",
        "summary": "Paper from the Prime Minister's Economic Advisory Council critiquing perception-based global indices; listed here as the government's general position, not an EIU-specific rebuttal (content not fully read)."
      }
    ],
    "methodology_note": "Score is used as it is comparable across years. Ranks (from press coverage): 2014: 27th, 2019: 51st of 167 (down 10), 2020: 53rd of 167, 2021: 46th of 167, 2023: 41st (tied with Poland), 2025: 47th (Wikipedia); other years' ranks not confirmed. India is classed 'flawed democracy' throughout. Scores per Wikipedia's table of the EIU data; 2013 edition may reflect the 2012 data year. EIU relies partly on expert assessments and opinion surveys. Earlier editions added: the EIU first published the index for 2006 (7.68), then 2008 (7.80) and 2010 (7.28), and annually from 2011 (7.30) and 2012 (7.52). There was no 2004, 2005, 2007 or 2009 edition, so those years are gaps rather than missing values. The 0-10 scoring framework is continuous across 2006-2014; the main methodological caveat is the irregular early publication cadence, and the 2013 edition may reflect the 2012 data year. Per-point URLs for 2006-2012 are the same EIU data table used for the existing points.",
    "related_claims": []
  },
  "freedom-house": {
    "slug": "freedom-house",
    "name": "Freedom in the World",
    "publisher": "Freedom House",
    "url": "https://freedomhouse.org/country/india/freedom-world/2026",
    "higher_is_better": true,
    "metric": "Total score (0-100)",
    "out_of_label": "maximum score",
    "points": [
      {
        "year": 2014,
        "value": 77,
        "out_of": 100,
        "source_url": "https://web.archive.org/web/20170207002035/https://freedomhouse.org/report/freedom-world/2014/india",
        "status": "Free"
      },
      {
        "year": 2015,
        "value": 78,
        "out_of": 100,
        "source_url": "https://web.archive.org/web/20170224062249/https://freedomhouse.org/report/freedom-world/2015/india",
        "status": "Free"
      },
      {
        "year": 2016,
        "value": 77,
        "out_of": 100,
        "source_url": "https://web.archive.org/web/20190922063203/https://freedomhouse.org/report/freedom-world/2016/india",
        "status": "Free"
      },
      {
        "year": 2017,
        "value": 77,
        "out_of": 100,
        "source_url": "https://freedomhouse.org/country/india/freedom-world/2017",
        "status": "Free"
      },
      {
        "year": 2018,
        "value": 77,
        "out_of": 100,
        "source_url": "https://freedomhouse.org/country/india/freedom-world/2018",
        "status": "Free"
      },
      {
        "year": 2019,
        "value": 75,
        "out_of": 100,
        "source_url": "https://freedomhouse.org/country/india/freedom-world/2019",
        "status": "Free"
      },
      {
        "year": 2020,
        "value": 71,
        "out_of": 100,
        "source_url": "https://freedomhouse.org/country/india/freedom-world/2020",
        "status": "Free"
      },
      {
        "year": 2021,
        "value": 67,
        "out_of": 100,
        "source_url": "https://freedomhouse.org/country/india/freedom-world/2021",
        "status": "Partly Free"
      },
      {
        "year": 2022,
        "value": 66,
        "out_of": 100,
        "source_url": "https://freedomhouse.org/country/india/freedom-world/2022",
        "status": "Partly Free"
      },
      {
        "year": 2023,
        "value": 66,
        "out_of": 100,
        "source_url": "https://freedomhouse.org/country/india/freedom-world/2023",
        "status": "Partly Free"
      },
      {
        "year": 2024,
        "value": 66,
        "out_of": 100,
        "source_url": "https://freedomhouse.org/country/india/freedom-world/2024",
        "status": "Partly Free"
      },
      {
        "year": 2025,
        "value": 63,
        "out_of": 100,
        "source_url": "https://freedomhouse.org/country/india/freedom-world/2025",
        "status": "Partly Free"
      },
      {
        "year": 2026,
        "value": 62,
        "out_of": 100,
        "source_url": "https://freedomhouse.org/country/india/freedom-world/2026",
        "status": "Partly Free"
      }
    ],
    "govt_response": [
      {
        "title": "MEA/government reaction to Freedom House 'Partly Free' (2021)",
        "url": "https://fithindi.thequint.com/amp/story/news/hot-news/mea-mulls-over-releasing-world-new-democracy-report-press-freedom-index-by-think-tank",
        "summary": "Press reports on the government's response to 2021 downgrades; exact MEA wording not retrieved. Treat as unconfirmed."
      }
    ],
    "methodology_note": "'year' is the edition year (covers the prior calendar year). Status fell from Free to Partly Free in the 2021 edition. Freedom House introduced the 0-100 aggregate score with the 2006 edition; earlier editions used only the 1-7 Political Rights and Civil Liberties ratings, so pre-2006 editions are not on a comparable basis and are omitted. The 2014-2016 edition pages were recovered from Internet Archive captures of Freedom House's country pages: 2016 states an Aggregate Score of 77 directly, while for 2014 and 2015 the total is the sum of the published PR and CL sub-scores (2014: PR 34/40 + CL 43/60 = 77; 2015: PR 35/40 + CL 43/60 = 78). Aggregate scores for 2006-2013 could not be confirmed from a retrievable Freedom House page (the archived pre-2016 pages display only 1-7 ratings/status), so those years remain gaps; no value was guessed. Freedom House also revised some indicator rules in 2018 (outside the 2004-2014 window). Freedom House pages show a 'Global Freedom Score' of 62 in the sidebar for the latest edition (2026) and also 63 for 2025 in one extract; edition headline scores are used.",
    "related_claims": []
  },
  "global-hunger-index": {
    "slug": "global-hunger-index",
    "name": "Global Hunger Index",
    "publisher": "Concern Worldwide / Welthungerhilfe (earlier editions with IFPRI)",
    "url": "https://www.globalhungerindex.org/india.html",
    "higher_is_better": false,
    "metric": "Rank",
    "out_of_label": "countries ranked",
    "points": [
      {
        "year": 2008,
        "value": 66,
        "out_of": 88,
        "source_url": "https://www.thehindu.com/sci-tech/agriculture/India-ranked-dismal-66th-in-Global-Hunger-Index/article16875885.ece"
      },
      {
        "year": 2009,
        "value": 65,
        "out_of": 84,
        "source_url": "https://www.sansad.in/getFile/annex/221/Au509.pdf?source=pqars"
      },
      {
        "year": 2010,
        "value": 67,
        "out_of": 84,
        "source_url": "https://www.sansad.in/getFile/annex/221/Au509.pdf?source=pqars"
      },
      {
        "year": 2011,
        "value": 67,
        "out_of": 81,
        "source_url": "https://www.globalhungerindex.org/pdf/en/2011/synopsis.pdf"
      },
      {
        "year": 2012,
        "value": 65,
        "out_of": 79,
        "source_url": "https://www.governancenow.com/views/think-tanks/india-ranks-63rd-global-hunger-index"
      },
      {
        "year": 2013,
        "value": 63,
        "out_of": 78,
        "source_url": "https://www.downtoearth.org.in/environment/india-ranked-poorest-in-south-asia-on-hunger-index-42462"
      },
      {
        "year": 2014,
        "value": 55,
        "out_of": 76,
        "source_url": "https://www.altnews.in/has-indias-global-hunger-index-ranking-fallen-from-55-in-2014-to-102-in-2019-a-fact-check/"
      },
      {
        "year": 2015,
        "value": 80,
        "out_of": 104,
        "source_url": "https://www.altnews.in/has-indias-global-hunger-index-ranking-fallen-from-55-in-2014-to-102-in-2019-a-fact-check/"
      },
      {
        "year": 2016,
        "value": 97,
        "out_of": 118,
        "source_url": "https://www.altnews.in/has-indias-global-hunger-index-ranking-fallen-from-55-in-2014-to-102-in-2019-a-fact-check/"
      },
      {
        "year": 2017,
        "value": 100,
        "out_of": 119,
        "source_url": "https://www.altnews.in/has-indias-global-hunger-index-ranking-fallen-from-55-in-2014-to-102-in-2019-a-fact-check/"
      },
      {
        "year": 2018,
        "value": 103,
        "out_of": 119,
        "source_url": "https://www.altnews.in/has-indias-global-hunger-index-ranking-fallen-from-55-in-2014-to-102-in-2019-a-fact-check/"
      },
      {
        "year": 2019,
        "value": 102,
        "out_of": 117,
        "source_url": "https://www.altnews.in/has-indias-global-hunger-index-ranking-fallen-from-55-in-2014-to-102-in-2019-a-fact-check/"
      },
      {
        "year": 2020,
        "value": 94,
        "out_of": 107,
        "source_url": "https://sentinelassam.com/national-news/india-ranks-94-among-107-at-global-hunger-index-2020-507382"
      },
      {
        "year": 2021,
        "value": 101,
        "out_of": 116,
        "source_url": "https://news.careers360.com/global-hunger-index-2021-world-hunger-index-india-pakistan-nepal-bangladesh-china-brazil/amp"
      },
      {
        "year": 2022,
        "value": 107,
        "out_of": 121,
        "source_url": "https://www.deccanherald.com/india/ranked-107-india-slams-erroneous-global-hunger-index-citing-methodological-issues-1153889.html"
      },
      {
        "year": 2023,
        "value": 111,
        "out_of": 125,
        "source_url": "https://www.tribuneindia.com/news/india/india-ranks-111th-on-global-hunger-index-2023-govt-calls-it-flawed-measure-that-doesnt-reflect-true-position-552722"
      },
      {
        "year": 2024,
        "value": 105,
        "out_of": 127,
        "source_url": "https://catholicconnect.in/news/india-ranks-105th-in-global-hunger-index-classified-as-serious"
      },
      {
        "year": 2025,
        "value": 102,
        "out_of": 123,
        "source_url": "https://visionias.in/current-affairs/monthly-magazine/2025-11-12/society/global-hunger-index-1"
      },
      {
        "year": 2026,
        "value": 100,
        "out_of": 122,
        "source_url": "https://www.globalhungerindex.org/ranking.html"
      }
    ],
    "govt_response": [
      {
        "title": "Government questions methodology and data accuracy of Global Hunger Index (March 2021 report)",
        "url": "https://www.insightsonindia.com/2021/03/20/government-questions-methodology-and-data-accuracy-of-global-hunger-index/",
        "summary": "Secondary summary of the government's 2021 position questioning the GHI's methodology and data. Original official document not retrieved."
      },
      {
        "title": "Ministry of Women and Child Development on GHI 2022 (as reported by Deccan Herald)",
        "url": "https://www.deccanherald.com/india/ranked-107-india-slams-erroneous-global-hunger-index-citing-methodological-issues-1153889.html",
        "summary": "Ministry called the index an 'erroneous measure of hunger': three of four indicators relate to child health and cannot represent the whole population, and the undernourishment indicator is based on a small (3,000) opinion poll. Fact-checkers (FactChecker/Janata Weekly) found parts of this argument misleading or lacking context."
      },
      {
        "title": "Government rejects GHI 2023 as flawed (Tribune)",
        "url": "https://www.tribuneindia.com/news/india/india-ranks-111th-on-global-hunger-index-2023-govt-calls-it-flawed-measure-that-doesnt-reflect-true-position-552722",
        "summary": "Ministry said the index suffers from serious methodological issues and shows malafide intent. GHI publishers rejected the objections (The Wire: https://cms.thewire.in/world/india-ranks-111th-among-125-countries-in-global-hunger-index-report)."
      }
    ],
    "methodology_note": "GHI publishers state that ranks and scores are NOT comparable across editions: underlying UN data are revised each year, the number of ranked countries changes, and the method changed in 2015. Notably the 2014 edition (55 of 76) excluded 44 countries with scores below 5; reports say including them would have placed India near 99 (The Quint). Score (lower is better) is more informative than rank: 17.8 (2014 ed.), 29.0 (2015), 28.5 (2016), 31.4 (2017), 31.1 (2018), 30.3 (2019), 29.1 (2022), 27.3 (2024), 25.8 (2025), 24.1 (2026); GHI recommends comparing scores only via the revised time series in a single report. Scores for 2020, 2021, 2023 not captured here. Wikipedia lists a 2026 score of 24.8 and rank 103; the official site and Careers360 say 24.1 and rank 100 (tied with Ethiopia), which is used. Per-point sources are news reports quoting the GHI report; the official country page is the 'url'. Earlier editions added: 2008 (66 of 88), 2009 (65 of 84), 2010 (67 of 84), 2011 (67 of 81), 2012 (65 of 79, score 22.9) and 2013 (63 of 78, score 21.3). The 2006 edition's India rank could not be confirmed and is omitted; no separate 2007 edition was located. The 2009-2010 ranks come from an official Rajya Sabha reply, the 2011 rank from the GHI 2011 report, and 2008/2012/2013 from press reports. Methodology breaks: the GHI changed its formula in 2015 (after this window); the 2014 edition ranked only 76 countries because countries scoring below 5 were excluded, so the 2014 rank (55) is not comparable with 2013 or earlier; the publishers state ranks/scores are not comparable across editions in any case.",
    "related_claims": []
  },
  "global-innovation-index": {
    "slug": "global-innovation-index",
    "name": "Global Innovation Index",
    "publisher": "WIPO (with Cornell University and INSEAD in earlier editions)",
    "url": "https://www.wipo.int/en/web/global-innovation-index",
    "higher_is_better": false,
    "metric": "Rank",
    "out_of_label": "economies ranked",
    "points": [
      {
        "year": 2007,
        "value": 23,
        "out_of": 107,
        "source_url": "https://stats.areppim.com/listes/list_innovation_2007.htm"
      },
      {
        "year": 2009,
        "value": 41,
        "out_of": 130,
        "source_url": "https://stats.areppim.com/listes/list_innovation_2008_2009.htm"
      },
      {
        "year": 2010,
        "value": 56,
        "out_of": 132,
        "source_url": "https://stats.areppim.com/listes/list_innovation_2009_2010.htm"
      },
      {
        "year": 2011,
        "value": 62,
        "out_of": 125,
        "source_url": "https://spicyip.com/2012/07/india-64-in-global-innovation-index.html"
      },
      {
        "year": 2012,
        "value": 64,
        "out_of": 141,
        "source_url": "https://stats.areppim.com/listes/list_innovation_2012.htm"
      },
      {
        "year": 2013,
        "value": 66,
        "out_of": null,
        "source_url": "https://ssrana.in/?p=8955"
      },
      {
        "year": 2014,
        "value": 76,
        "out_of": 143,
        "source_url": "https://yourstory.com/2014/08/global-innovation-index-2014"
      },
      {
        "year": 2015,
        "value": 81,
        "out_of": null,
        "source_url": "https://www.qatar-tribune.com/article/198481/business/indias-journey-in-innovation-reaches-new-milestone"
      },
      {
        "year": 2016,
        "value": 66,
        "out_of": 128,
        "source_url": "https://biovoicenews.com/india-rises-to-66th-rank-on-global-innovation-index/"
      },
      {
        "year": 2017,
        "value": 60,
        "out_of": null,
        "source_url": "https://yourstory.com/2017/06/india-60th-global-innovation-index"
      },
      {
        "year": 2018,
        "value": 57,
        "out_of": null,
        "source_url": "https://www.wipo.int/edocs/gii-ranking/2018/in.pdf"
      },
      {
        "year": 2019,
        "value": 52,
        "out_of": 129,
        "source_url": "https://www.wipo.int/edocs/gii-ranking/2019/in.pdf"
      },
      {
        "year": 2020,
        "value": 48,
        "out_of": 131,
        "source_url": "https://www.wipo.int/edocs/gii-ranking/2020/in.pdf"
      },
      {
        "year": 2021,
        "value": 46,
        "out_of": 132,
        "source_url": "https://www.wipo.int/edocs/gii-ranking/2021/in.pdf"
      },
      {
        "year": 2022,
        "value": 40,
        "out_of": 132,
        "source_url": "https://www.wipo.int/edocs/gii-ranking/2022/in.pdf"
      },
      {
        "year": 2023,
        "value": 40,
        "out_of": 132,
        "source_url": "https://www.wipo.int/edocs/gii-ranking/2023/in.pdf"
      },
      {
        "year": 2024,
        "value": 39,
        "out_of": 133,
        "source_url": "https://www.wipo.int/edocs/gii-ranking/2024/in.pdf"
      },
      {
        "year": 2025,
        "value": 38,
        "out_of": 139,
        "source_url": "https://www.wipo.int/edocs/gii-ranking/2025/in.pdf"
      },
      {
        "year": 2026,
        "value": 38,
        "out_of": 139,
        "source_url": "https://www.wipo.int/edocs/gii-ranking/2026/in.pdf"
      }
    ],
    "govt_response": [
      {
        "title": "PIB: Economic Survey 2025-26 on GII rank improving to 38th in 2025 from 66th in 2019",
        "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2219992&reg=48&lang=2",
        "summary": "Government cites the rise as evidence of strengthening innovation performance; India is first among lower-middle-income economies and in Central and Southern Asia."
      },
      {
        "title": "Lok Sabha reply describing GII 2017 result",
        "url": "https://eparlib.nic.in/bitstream/123456789/768405/1/AU5626.pdf",
        "summary": "Parliamentary answer describing the 2017 result as a 21-place improvement from 81st in 2015 and 6 places from 66th in 2016."
      }
    ],
    "methodology_note": "WIPO states data availability and changes to the GII model framework influence year-on-year comparisons; the 2025 confidence interval for India's rank is 37-41 and for 2026 is 34-39. Out-of counts not confirmed (omitted) for 2013, 2015, 2017, 2018; sources conflict for 2017 (127 vs 130). 2013 (66) and 2014 (76, down ten) per press/secondary tables; 2018 WIPO brief says 57th, up three from 2017. WIPO country briefs 2019-2026 are primary sources. India's rise is real across the series but part of it reflects model changes. Earlier editions added: the GII began in 2007 (India 23rd of 107, on a 1-7 score); the 2008-2009 edition (recorded here as 2009) ranked India 41st of 130; the 2009-2010 edition (recorded as 2010) ranked India 56th of 132; 2011: 62nd of 125; 2012: 64th of 141. The 2007-2010 editions used a 1-7 score and different indicator sets, and the GII was substantially revamped for 2011 (0-100 score, new framework) and again in later years, so ranks across the 2007-2013 period are only loosely comparable. No 2004-2006 edition exists. Values for 2007-2010 and 2012 are from INSEAD/WIPO rankings compiled by areppim (each table cites INSEAD-WIPO); 2011 is from SpicyIP's report of the 2011 GII.",
    "related_claims": []
  },
  "rsf-press-freedom": {
    "slug": "rsf-press-freedom",
    "name": "World Press Freedom Index",
    "publisher": "Reporters Without Borders (RSF)",
    "url": "https://rsf.org/en/country/india",
    "higher_is_better": false,
    "metric": "Rank",
    "out_of_label": "countries and territories ranked",
    "points": [
      {
        "year": 2004,
        "value": 120,
        "out_of": 167,
        "source_url": "https://rsf.org/sites/default/files/import_classement/2004.csv"
      },
      {
        "year": 2005,
        "value": 106,
        "out_of": 167,
        "source_url": "https://rsf.org/sites/default/files/import_classement/2005.csv"
      },
      {
        "year": 2006,
        "value": 105,
        "out_of": 168,
        "source_url": "https://rsf.org/sites/default/files/import_classement/2006.csv"
      },
      {
        "year": 2007,
        "value": 120,
        "out_of": 169,
        "source_url": "https://rsf.org/sites/default/files/import_classement/2007.csv"
      },
      {
        "year": 2008,
        "value": 118,
        "out_of": 173,
        "source_url": "https://rsf.org/sites/default/files/import_classement/2008.csv"
      },
      {
        "year": 2009,
        "value": 105,
        "out_of": 175,
        "source_url": "https://rsf.org/sites/default/files/import_classement/2009.csv"
      },
      {
        "year": 2010,
        "value": 122,
        "out_of": 178,
        "source_url": "https://rsf.org/sites/default/files/import_classement/2010.csv"
      },
      {
        "year": 2012,
        "value": 131,
        "out_of": 179,
        "source_url": "https://rsf.org/sites/default/files/import_classement/2012.csv"
      },
      {
        "year": 2013,
        "value": 140,
        "out_of": 179,
        "source_url": "https://rsf.org/sites/default/files/import_classement/2013.csv"
      },
      {
        "year": 2014,
        "value": 140,
        "out_of": 180,
        "source_url": "https://rsf.org/sites/default/files/import_classement/2014.csv"
      },
      {
        "year": 2015,
        "value": 136,
        "out_of": 180,
        "source_url": "https://www.pressreader.com/india/the-free-press-journal/20160421/281870117616379"
      },
      {
        "year": 2016,
        "value": 133,
        "out_of": 180,
        "source_url": "https://www.pressreader.com/india/the-free-press-journal/20160421/281870117616379"
      },
      {
        "year": 2019,
        "value": 140,
        "out_of": 180,
        "source_url": "https://en.wikipedia.org/wiki/World_Press_Freedom_Index"
      },
      {
        "year": 2020,
        "value": 142,
        "out_of": 180,
        "source_url": "https://en.wikipedia.org/wiki/World_Press_Freedom_Index"
      },
      {
        "year": 2021,
        "value": 142,
        "out_of": 180,
        "source_url": "https://en.wikipedia.org/wiki/World_Press_Freedom_Index"
      },
      {
        "year": 2022,
        "value": 150,
        "out_of": 180,
        "source_url": "https://en.wikipedia.org/wiki/World_Press_Freedom_Index"
      },
      {
        "year": 2023,
        "value": 161,
        "out_of": 180,
        "source_url": "https://en.wikipedia.org/wiki/World_Press_Freedom_Index"
      },
      {
        "year": 2024,
        "value": 159,
        "out_of": 180,
        "source_url": "https://en.wikipedia.org/wiki/World_Press_Freedom_Index"
      },
      {
        "year": 2025,
        "value": 151,
        "out_of": 180,
        "source_url": "https://rsf.org/en/country/india"
      },
      {
        "year": 2026,
        "value": 157,
        "out_of": 180,
        "source_url": "https://rsf.org/en/country/india"
      }
    ],
    "govt_response": [],
    "methodology_note": "RSF changed its methodology in 2022 (five indicators: political, economic, legislative, social, security), so scores before and after 2022 are not strictly comparable; ranks are comparable only loosely. RSF also made a major methodology overhaul in 2013 (and the 2002-2012 methodology differed from 2013-2021), so the 2004-2012 ranks are not strictly comparable with 2013 onward. Scores (0-100, higher better): 2019 54.33, 2020 54.67, 2021 53.44, 2022 41, 2023 36.62, 2024 31.28, 2025 32.96, 2026 31.96. 2015 and 2016 ranks are from press coverage of the 2016 index (India 133rd, up three from 136th). Earlier ranks added from RSF's official per-year ranking downloads: 2004 120/167, 2005 106/167, 2006 105/168, 2007 120/169, 2008 118/173, 2009 105/175, 2010 122/178, 2012 131/179, 2013 140/179, 2014 140/180. RSF published a combined 2011-2012 edition (recorded under 2012); there is no separate 2011 edition in RSF's data. Gaps: 2011 (combined edition), 2017, 2018 not confirmed with a retrievable source (one report cited 138th in 2018, but unverified). No official Indian government response located; Indian government has generally not accepted RSF methodology but a specific statement was not retrieved.",
    "related_claims": []
  },
  "ti-corruption-perceptions": {
    "slug": "ti-corruption-perceptions",
    "name": "Corruption Perceptions Index",
    "publisher": "Transparency International",
    "url": "https://www.transparency.org/en/countries/india",
    "higher_is_better": true,
    "metric": "Score (0-100, higher = cleaner)",
    "out_of_label": "maximum score",
    "points": [
      {
        "year": 2004,
        "value": 2.8,
        "out_of": 10,
        "source_url": "https://images.transparencycdn.org/images/CPI-2004_200602_110140.csv"
      },
      {
        "year": 2005,
        "value": 2.9,
        "out_of": 10,
        "source_url": "https://images.transparencycdn.org/images/CPI-2005_200602_104136.csv"
      },
      {
        "year": 2006,
        "value": 3.3,
        "out_of": 10,
        "source_url": "https://images.transparencycdn.org/images/CPI-2006-new_200602_095933.csv"
      },
      {
        "year": 2007,
        "value": 3.5,
        "out_of": 10,
        "source_url": "https://images.transparencycdn.org/images/CPI-2007-new_200602_092501.csv"
      },
      {
        "year": 2008,
        "value": 3.4,
        "out_of": 10,
        "source_url": "https://images.transparencycdn.org/images/CPI-Archive-2008-2.csv"
      },
      {
        "year": 2009,
        "value": 3.4,
        "out_of": 10,
        "source_url": "https://images.transparencycdn.org/images/CPI-2009-new_200601_120052.csv"
      },
      {
        "year": 2010,
        "value": 3.3,
        "out_of": 10,
        "source_url": "https://images.transparencycdn.org/images/CPI-2010-new_200601_105629.csv"
      },
      {
        "year": 2011,
        "value": 3.1,
        "out_of": 10,
        "source_url": "https://images.transparencycdn.org/images/CPI-2011-new_200601_104308.csv"
      },
      {
        "year": 2012,
        "value": 36,
        "out_of": 100,
        "source_url": "https://www.transparency.org/en/cpi/2012"
      },
      {
        "year": 2013,
        "value": 36,
        "out_of": 100,
        "source_url": "https://www.transparency.org/en/cpi/2013"
      },
      {
        "year": 2014,
        "value": 38,
        "out_of": 100,
        "source_url": "https://www.transparency.org/en/cpi/2014"
      },
      {
        "year": 2015,
        "value": 38,
        "out_of": 100,
        "source_url": "https://www.transparency.org/en/cpi/2015"
      },
      {
        "year": 2016,
        "value": 40,
        "out_of": 100,
        "source_url": "https://www.transparency.org/en/cpi/2016"
      },
      {
        "year": 2017,
        "value": 40,
        "out_of": 100,
        "source_url": "https://www.transparency.org/en/cpi/2017"
      },
      {
        "year": 2018,
        "value": 41,
        "out_of": 100,
        "source_url": "https://www.transparency.org/en/cpi/2018"
      },
      {
        "year": 2019,
        "value": 41,
        "out_of": 100,
        "source_url": "https://www.transparency.org/en/cpi/2019"
      },
      {
        "year": 2020,
        "value": 40,
        "out_of": 100,
        "source_url": "https://www.transparency.org/en/cpi/2020"
      },
      {
        "year": 2021,
        "value": 40,
        "out_of": 100,
        "source_url": "https://www.transparency.org/en/cpi/2021"
      },
      {
        "year": 2022,
        "value": 40,
        "out_of": 100,
        "source_url": "https://www.transparency.org/en/cpi/2022"
      },
      {
        "year": 2023,
        "value": 39,
        "out_of": 100,
        "source_url": "https://www.transparency.org/en/cpi/2023"
      },
      {
        "year": 2024,
        "value": 38,
        "out_of": 100,
        "source_url": "https://www.transparency.org/en/cpi/2024"
      },
      {
        "year": 2025,
        "value": 39,
        "out_of": 100,
        "source_url": "https://www.transparency.org/en/cpi/2025"
      }
    ],
    "govt_response": [],
    "methodology_note": "Score (post-2012 scale) is comparable across years; rank is not, as country coverage changes. Ranks known from reports: 2024: 96th of 180; 2025: 91st of 182 (score 39). Scores 2013-2024 per Our World in Data's TI series (https://ourworldindata.org/grapher/ti-corruption-perception-index); 2025 per press coverage (Catholic Connect, Drishti IAS). Per-point links go to TI's edition pages. No specific government rebuttal located. Pre-2012 points (2004-2011) are TI's original 0-10 CPI scores (higher = cleaner) and are stored with out_of 10; they are not directly comparable with the post-2012 0-100 scores. TI changed the CPI scale and methodology in 2012 (0-100 scale; revised aggregation), so 2012 (36) is the first point on the current scale. The 2004-2011 values come from TI's official per-edition data CSV files (linked from each edition page); 2012 is from TI's 2012 results. Ranks in the pre-2012 editions: 2004 90th, 2005 88th, 2006 70th, 2007 72nd, 2008 85th, 2009 84th, 2010 91st, 2011 95th.",
    "related_claims": []
  }
}
```
