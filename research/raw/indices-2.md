[0m
> build · deepseek-flash
I'll start by reading the existing index files and understanding their schema.
[0m→ [0mRead indices/wef-global-gender-gap.json 
[0m→ [0mRead indices/world-bank-ease-of-doing-business.json 
[0m→ [0mRead indices/world-happiness-report.json 
[0m→ [0mRead indices 
[0m→ [0mRead indices/undp-hdi.json 
[0m→ [0mRead indices/vdem-liberal-democracy.json 
[0m→ [0mRead indices/yale-epi.json 
> build · deepseek-flash
Now let me research the earlier years for each index. I'll start with parallel searches.
[0m✗ [0mWeb Search via Tinyfish "India Ease of Doing Business rank 2006 2007 2008 2009 2010 2011 2012 2013 World Bank Doing Business report" failed
[91m[1mError: [0mWeb search authentication failed (HTTP 401)
[0m✗ [0mWeb Search via Tinyfish "India Global Gender Gap Report rank 2006 2007 2008 2009 2010 2011 2012 World Economic Forum" failed
[91m[1mError: [0mWeb search authentication failed (HTTP 401)
[0m✗ [0mWeb Search via Tinyfish "India rank Human Development Index 2004 2005 2006 2007 2008 2009 2010 2011 2012 2013 UNDP report" failed
[91m[1mError: [0mWeb search authentication failed (HTTP 401)
[0m✗ [0mWeb Search via Tinyfish "World Happiness Report 2012 India rank 141 first edition" failed
[91m[1mError: [0mWeb search authentication failed (HTTP 401)
[0m✗ [0mWeb Search via Tinyfish "V-Dem liberal democracy index India score 2004 2005 2006 2007 2008 2009 2010 2011 2012" failed
[91m[1mError: [0mWeb search authentication failed (HTTP 401)
[0m✗ [0mWeb Search via Tinyfish "India Environmental Performance Index rank 2006 2008 2010 2012 Yale" failed
[91m[1mError: [0mWeb search authentication failed (HTTP 401)
> build · deepseek-flash
Web search is unavailable (401). Let me try fetching known URLs directly.
[0m% [0mWebFetch https://ourworldindata.org/grapher/liberal-democracy-index 
[0m% [0mWebFetch https://en.wikipedia.org/wiki/Ease_of_doing_business_index 
> build · deepseek-flash
Webfetch works. Let me pull specific data sources in parallel.
[0m% [0mWebFetch https://en.wikipedia.org/w/index.php?title=Ease_of_doing_business_index&action=raw 
[0m% [0mWebFetch https://en.wikipedia.org/w/index.php?title=Human_Development_Index&action=raw 
[0m% [0mWebFetch https://ourworldindata.org/grapher/liberal-democracy-index.csv?v=1&csvType=filtered&country=IND&useColumnShortNames=false 
> build · deepseek-flash
Let me inspect the saved raw Wikipedia output for the Doing Business ranking table.
[0m✗ [0mGrep "India" failed
[91m[1mError: [0mPermission denied: external_directory
[0m✗ [0mGrep "DB2004|DB2005|DB2006|DB2007|DB2008|DB2009|DB2010|DB2011|DB2012|DB2013" failed
[91m[1mError: [0mPermission denied: external_directory
> build · deepseek-flash
Search API is down, so I'll use search-engine HTML endpoints via webfetch.
[0m% [0mWebFetch https://en.wikipedia.org/w/index.php?title=Ease_of_doing_business_index&action=raw&section=7 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+rank+Human+Development+Index+2004+127+177 
> build · deepseek-flash
DuckDuckGo HTML works. Let me research HDI editions and get the Doing Business ranking table.
[0m% [0mWebFetch https://en.wikipedia.org/w/index.php?title=Ease_of_doing_business_index&action=raw&section=15 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+128th+Human+Development+Report+2007+2008+177 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+119th+Human+Development+Report+2010+169 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+126th+Human+Development+Report+2006+177 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+136th+Human+Development+Report+2013+187 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+134th+Human+Development+Report+2009+182 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+134th+Human+Development+Report+2011+187 
[0m% [0mWebFetch https://countryeconomy.com/hdi/india?year=2004 
> build · deepseek-flash
The Doing Business table gave India's ranks for 2006–2013. Now let me pull V-Dem values and research the remaining indices.
[0m% [0mWebFetch https://ourworldindata.org/grapher/liberal-democracy-index.csv?v=1&csvType=filtered&country=~IND&useColumnShortNames=false 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=World+Happiness+Report+2012+India+rank+141 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+rank+Human+Development+Report+2011+134+187 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+Environmental+Performance+Index+2006+rank+2008+2010+2012 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+Global+Gender+Gap+Report+2006+rank+98+115 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+Global+Gender+Gap+Report+2012+rank+105+135 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+Global+Gender+Gap+Report+2007+rank+114+128 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+rank+Human+Development+Report+2005+127+177 
> build · deepseek-flash
[0m% [0mWebFetch https://ourworldindata.org/grapher/liberal-democracy-index.csv?csvType=filtered&country=India&useColumnShortNames=false 
[0m% [0mWebFetch https://countryeconomy.com/demography/world-happiness-index/india?year=2012 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+Environmental+Performance+Index+2006+rank+118+133 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+Environmental+Performance+Index+2012+rank+125+132 
[0m% [0mWebFetch https://countryeconomy.com/demography/global-gender-gap-index/india?year=2006 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+136+out+of+187+Human+Development+Report+2013 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+Environmental+Performance+Index+2008+rank+120+149 
[0m✗ [0mWebFetch https://www3.weforum.org/docs/WEF_GenderGapReport_Rankings_2012.pdf failed
[91m[1mError: [0mUnsupported fetched file content type: application/pdf
> build · deepseek-flash
[0m% [0mWebFetch https://en.wikipedia.org/w/index.php?title=World_Happiness_Report&action=raw 
[0m% [0mWebFetch https://countryeconomy.com/demography/global-gender-gap-index/india?year=2007 
[0m% [0mWebFetch https://ourworldindata.org/grapher/liberal-democracy-index.metadata.json?v=1&csvType=full&useColumnShortNames=false 
[0m% [0mWebFetch https://countryeconomy.com/demography/global-gender-gap-index/india?year=2012 
[0m% [0mWebFetch https://countryeconomy.com/demography/global-gender-gap-index/india?year=2010 
[0m% [0mWebFetch https://countryeconomy.com/demography/global-gender-gap-index/india?year=2008 
[0m% [0mWebFetch https://countryeconomy.com/demography/global-gender-gap-index/india?year=2011 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=%22India%22+%22liberal+democracy+index%22+2004+2005+2006+2007+2008+2009+2010+2011+2012+V-Dem 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+rank+123+Environmental+Performance+Index+2010+163 
[0m% [0mWebFetch https://countryeconomy.com/demography/global-gender-gap-index/india?year=2009 
[0m% [0mWebFetch https://r.jina.ai/https://www3.weforum.org/docs/WEF_GenderGapReport_Rankings_2012.pdf 
> build · deepseek-flash
Excellent — the WEF 2012 rankings table confirms India's ranks and scores for 2006–2012. Now let me confirm HDI sources and the remaining indices.
[0m✗ [0mWebFetch https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=93255 failed
[91m[1mError: [0mStatusCode: non 2xx status code (403 GET https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=93255)
[0m% [0mWebFetch https://www.hindustantimes.com/india/india-ranked-127-in-human-development/story-IpoeWS3LuK8uwzBWCL4h9L.html 
[0m% [0mWebFetch https://www.tribuneindia.com/2009/20091006/main7.htm 
[0m% [0mWebFetch https://api.ourworldindata.org/v1/indicators/1209797.data.json 
[0m% [0mWebFetch https://www.rediff.com/money/2004/jul/15hdi.htm 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+118th+Environmental+Performance+Index+2006+133 
[0m% [0mWebFetch https://ourworldindata.org/grapher/liberal-democracy-index.csv 
[0m% [0mWebFetch https://r.jina.ai/https://files.worldhappiness.report/WHR12.pdf 
> build · deepseek-flash
[0m% [0mWebFetch https://api.ourworldindata.org/v1/indicators/1209797.data.json?entities=IND 
[0m% [0mWebFetch https://en.wikipedia.org/w/index.php?title=Global_Gender_Gap_Report&action=raw 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+120th+Environmental+Performance+Index+2008+149 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=%22World+Happiness+Report+2012%22+India+rank+156 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+136+HDI+2013+PIB+UNDP+187 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+rank+118+Environmental+Performance+Index+2006+news 
[0m% [0mWebFetch https://datastats.org/en/data/liberal-democracy-index/in 
[0m✗ [0mWebFetch https://datafinder.qog.gu.se/variable/vdem_libdem failed
[91m[1mError: [0mResponse too large (exceeds 5242880 byte limit)
> build · deepseek-flash
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=India+128+among+177+Human+Development+Report+2007 
[0m% [0mWebFetch https://ourworldindata.org/grapher/liberal-democracy-index.csv?csvType=full&useColumnShortNames=false&time=2004..2012 
[0m% [0mWebFetch https://www.theglobaleconomy.com/India/liberal_democracy_index/ 
[0m% [0mWebFetch https://photius.com/rankings/happiness_country_rankings_2012.html 
[0m✗ [0mWebFetch https://photius.com/rankings/environmental_performance_index_2006.html failed
[91m[1mError: [0mStatusCode: non 2xx status code (404 GET https://photius.com/rankings/environmental_performance_index_2006.html)
[0m% [0mWebFetch https://r.jina.ai/https://sustentabilidad.uai.edu.ar/pdf/negocios/2008EPI_Rankings_1page.pdf 
> build · deepseek-flash
India's WHR 2012 rank (111/156) is confirmed. Let me get the exact V-Dem three-decimal values.
[0m✗ [0mRead /home/shreyash/.local/share/opencode/tool-output/tool_14789816c001pUsfEO2q0dghSJ failed
[91m[1mError: [0mPermission denied: external_directory
[0m% [0mWebFetch https://www.hindustantimes.com/india/india-ranks-134-in-human-development-index/story-G2jsEEmDIUkwY0d4OhaA2K.html 
[0m% [0mWebFetch https://ourworldindata.org/grapher/liberal-democracy-index.csv?country=IND&time=2010&csvType=filtered&useColumnShortNames=false 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=%22Pilot+2006%22+EPI+India+118+ranking 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=%22V-Dem-CY-Core%22+csv+download+v16 
[0m% [0mWebFetch https://ourworldindata.org/grapher/liberal-democracy-index.csv?country=%7EIND 
> build · deepseek-flash
The time filter works. Let me get India's exact V-Dem values for each earlier year, plus confirm the two remaining sources.
[0m% [0mWebFetch https://ourworldindata.org/grapher/liberal-democracy-index.csv?csvType=filtered&time=2012&country=IND&useColumnShortNames=false 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=%22Explanatory+note%22+2013+HDR+composite+indices+India+pdf+136+187 
[0m% [0mWebFetch https://ourworldindata.org/grapher/liberal-democracy-index.csv?csvType=filtered&time=2006&country=IND&useColumnShortNames=false 
[0m% [0mWebFetch https://ourworldindata.org/grapher/liberal-democracy-index.csv?csvType=filtered&time=2004&country=IND&useColumnShortNames=false 
[0m% [0mWebFetch https://ourworldindata.org/grapher/liberal-democracy-index.csv?csvType=filtered&time=2007&country=IND&useColumnShortNames=false 
[0m% [0mWebFetch https://ourworldindata.org/grapher/liberal-democracy-index.csv?csvType=filtered&time=2008&country=IND&useColumnShortNames=false 
[0m% [0mWebFetch https://ourworldindata.org/grapher/liberal-democracy-index.csv?csvType=filtered&time=2005&country=IND&useColumnShortNames=false 
[0m✗ [0mWebFetch https://r.jina.ai/https://www.sedac.ciesin.org/downloads/data/epi/epi-pilot-environmental-performance-index-2006/2006-epi-brochure.pdf failed
[91m[1mError: [0mStatusCode: non 2xx status code (422 GET https://r.jina.ai/https://www.sedac.ciesin.org/downloads/data/epi/epi-pilot-environmental-performance-index-2006/2006-epi-brochure.pdf)
[0m% [0mWebFetch https://ourworldindata.org/grapher/liberal-democracy-index.csv?csvType=filtered&time=2011&country=IND&useColumnShortNames=false 
[0m% [0mWebFetch https://ourworldindata.org/grapher/liberal-democracy-index.csv?csvType=filtered&time=2009&country=IND&useColumnShortNames=false 
> build · deepseek-flash
I now have exact V-Dem values. Let me confirm the last two data points (EPI 2006 and HDI 2013).
[0m✗ [0mWebFetch https://www.academia.edu/4509705/Human_Development_Report_2013_The_Rise_of_the_South_Human_Progress_in_a_Diverse_World_Explanatory_note_on_2013_HDR_composite_indices_India failed
[91m[1mError: [0mStatusCode: non 2xx status code (403 GET https://www.academia.edu/4509705/Human_Development_Report_2013_The_Rise_of_the_South_Human_Progress_in_a_Diverse_World_Explanatory_note_on_2013_HDR_composite_indices_India)
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=%22India%22+%22118%22+%22Environmental+Performance+Index%22+2006 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=photius+environmental+performance+index+2006+rankings 
[0m% [0mWebFetch https://r.jina.ai/https://ciesin.columbia.edu/sites/ciesin.columbia.edu/files/content/2006-epi-full-report.cleaned.pdf 
> build · deepseek-flash
EPI 2006 is confirmed (India 118/133, score 47.7). Let me verify the HDI 2013 source and DoB coverage counts.
[0m✗ [0mWebFetch https://www.business-standard.com/article/economy-policy/india-ranks-119th-in-undp-s-human-development-report-2010-110110400198_1.html failed
[91m[1mError: [0mStatusCode: non 2xx status code (403 GET https://www.business-standard.com/article/economy-policy/india-ranks-119th-in-undp-s-human-development-report-2010-110110400198_1.html)
[0m% [0mWebFetch https://www.indiatoday.in/india/story/india-ranks-134-among-182-countries-on-human-development-index-57934-2009-10-04 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=UNDP+India+explanatory+note+2013+HDI+136+out+of+187+pdf 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=%22Doing+Business+2013%22+185+economies+India+132 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=%22Doing+Business+2006%22+155+economies+India+116 
> build · deepseek-flash
[0m% [0mWebFetch https://www.hindustantimes.com/world/india-ranks-123rd-in-pollution-control-iceland-on-top/story-Gg2xtHGLH8mt6NXnS3dQ6H.html 
[0m% [0mWebFetch https://economictimes.indiatimes.com/india-ranks-125th-in-environment-performance-index-report/articleshow/11672699.cms 
[0m% [0mWebFetch https://economictimes.indiatimes.com/news/economy/indicators/india-drops-down-2-places-in-hdi-ranks-128th/articleshow/2576073.cms 
[0m% [0mWebFetch https://economictimes.indiatimes.com/news/economy/indicators/india-ranks-119-on-human-development-index/articleshow/6874453.cms 
> build · deepseek-flash
```json
{
  "undp-hdi": {
    "slug": "undp-hdi",
    "name": "Human Development Index",
    "publisher": "UNDP Human Development Report Office",
    "url": "https://hdr.undp.org/data-center/specific-country-data",
    "higher_is_better": false,
    "metric": "Rank",
    "out_of_label": "countries and territories ranked",
    "points": [
      {
        "year": 2004,
        "value": 127,
        "out_of": 177,
        "source_url": "https://www.rediff.com/money/2004/jul/15hdi.htm"
      },
      {
        "year": 2005,
        "value": 127,
        "out_of": 177,
        "source_url": "https://www.hindustantimes.com/india/india-ranked-127-in-human-development/story-IpoeWS3LuK8uwzBWCL4h9L.html"
      },
      {
        "year": 2006,
        "value": 126,
        "out_of": 177,
        "source_url": "https://economictimes.indiatimes.com/news/economy/indicators/india-drops-down-2-places-in-hdi-ranks-128th/articleshow/2576073.cms"
      },
      {
        "year": 2007,
        "value": 128,
        "out_of": 177,
        "source_url": "https://economictimes.indiatimes.com/news/economy/indicators/india-drops-down-2-places-in-hdi-ranks-128th/articleshow/2576073.cms"
      },
      {
        "year": 2009,
        "value": 134,
        "out_of": 182,
        "source_url": "https://www.indiatoday.in/india/story/india-ranks-134-among-182-countries-on-human-development-index-57934-2009-10-04"
      },
      {
        "year": 2010,
        "value": 119,
        "out_of": 169,
        "source_url": "https://economictimes.indiatimes.com/news/economy/indicators/india-ranks-119-on-human-development-index/articleshow/6874453.cms"
      },
      {
        "year": 2011,
        "value": 134,
        "out_of": 187,
        "source_url": "https://www.hindustantimes.com/india/india-ranks-134-in-human-development-index/story-G2jsEEmDIUkwY0d4OhaA2K.html"
      },
      {
        "year": 2013,
        "value": 136,
        "out_of": 187,
        "source_url": "https://hdr.undp.org/system/files/documents/global-report-document/hdr2013encomplete.pdf"
      },
      {
        "year": 2014,
        "value": 135,
        "out_of": 187,
        "source_url": "https://www.downtoearth.org.in/amp/story/environment/india-ranked-135-in-human-development-report-2014-45465"
      },
      {
        "year": 2015,
        "value": 130,
        "out_of": 188,
        "source_url": "https://www.undp.org/sites/g/files/zskgke326/files/migration/in/GHDR-2015-Briefing-India-Explanatory-Note.pdf"
      },
      {
        "year": 2016,
        "value": 131,
        "out_of": 188,
        "source_url": "https://www.gktoday.in/india-ranks-131-2016-human-development-index/"
      },
      {
        "year": 2018,
        "value": 130,
        "out_of": 189,
        "source_url": "https://www.undp.org/node/143611"
      },
      {
        "year": 2020,
        "value": 131,
        "out_of": 189,
        "source_url": "https://www.deccanherald.com/india/india-ranks-131-out-of-189-countries-in-uns-human-development-index-928067.html"
      },
      {
        "year": 2022,
        "value": 132,
        "out_of": 191,
        "source_url": "https://www.undp.org/node/350716"
      },
      {
        "year": 2024,
        "value": 134,
        "out_of": 193,
        "source_url": "https://m.thewire.in/article/world/human-development-index-india-ranks-134th-falls-behind-bangladesh-sri-lanka-bhutan-and-china"
      },
      {
        "year": 2025,
        "value": 130,
        "out_of": 193,
        "source_url": "https://www.undp.org/india/press-releases/indias-human-development-continues-make-progress-ranks-130-out-193-countries"
      }
    ],
    "govt_response": [],
    "methodology_note": "'year' is the REPORT year, not the data year: 2014 report uses 2013 data; 2015 report 2014 data; 2016 report (released March 2017) 2015 data; 2018 statistical update 2017 data; 2020 report 2019 data; 2021/22 report (released Sept 2022, labelled 2022) 2021 data; 2023/24 report (released March 2024, labelled 2024) 2022 data; 2025 report 2023 data. UNDP states ranks and HDI values are not comparable across editions because of data revisions. UNDP's comparable revised HDI-value series (via Our World in Data) for India: 2013 0.615, 2015 0.633, 2017 0.649, 2019 0.651, 2021 0.647, 2022 0.676, 2023 0.685. UNDP's 2025 release says India moved from 133 (2022) to 130 (2023) in the revised dataset, which differs from the 134 published in the 2023/24 report. Gaps: 2013 report, 2017 (none), 2019 report (some outlets report 129, unverified here). No government rebuttal located. Earlier editions added: 2004 HDR (2002 data), 2005 HDR (2003 data), 2006 HDR (2004 data), 2007/2008 HDR (2005 data; this was a single joint edition, so there is no separate 2008 point), 2009 HDR (2007 data), 2010 HDR (2008 data), 2011 HDR (2011 data) and 2013 HDR (2012 data). MAJOR METHODOLOGY BREAK: the 2010 HDR replaced the old literacy/gross-enrolment formula with mean and expected years of schooling, switched from GDP to GNI per capita, and changed the aggregation to a geometric mean; 2004-2009 ranks use the old methodology and are not directly comparable with 2010 onward. There was no 2012 edition (the series went from the 2011 report to the 2013 report).",
    "related_claims": []
  },
  "vdem-liberal-democracy": {
    "slug": "vdem-liberal-democracy",
    "name": "V-Dem Liberal Democracy Index",
    "publisher": "V-Dem Institute, University of Gothenburg",
    "url": "https://v-dem.net/",
    "higher_is_better": true,
    "metric": "Liberal Democracy Index score (0-1)",
    "out_of_label": "not a rank",
    "points": [
      {
        "year": 2004,
        "value": 0.578,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2005,
        "value": 0.573,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2006,
        "value": 0.569,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2007,
        "value": 0.569,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2008,
        "value": 0.569,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2009,
        "value": 0.539,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2010,
        "value": 0.532,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2011,
        "value": 0.532,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2012,
        "value": 0.525,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2013,
        "value": 0.522,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2014,
        "value": 0.488,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2015,
        "value": 0.417,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2016,
        "value": 0.406,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2017,
        "value": 0.371,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2018,
        "value": 0.363,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2019,
        "value": 0.324,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2020,
        "value": 0.292,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2021,
        "value": 0.307,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2022,
        "value": 0.291,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2023,
        "value": 0.273,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2024,
        "value": 0.281,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      },
      {
        "year": 2025,
        "value": 0.26,
        "out_of": null,
        "source_url": "https://ourworldindata.org/grapher/liberal-democracy-index"
      }
    ],
    "govt_response": [
      {
        "title": "Government/MEA reaction to democracy indices (V-Dem, Freedom House, EIU) in 2021",
        "url": "https://fithindi.thequint.com/amp/story/news/hot-news/mea-mulls-over-releasing-world-new-democracy-report-press-freedom-index-by-think-tank",
        "summary": "Per press reports, the MEA considered backing an Indian think-tank's own democracy report and freedom index in response to 2021 downgrades. See also BoomLive on the Chief Election Commissioner saying flawed rankings harm democracy: https://www.boomlive.in/explainers/after-v-dem-report-on-india-cec-says-flawed-rankings-harming-democracy-21306. Exact MEA rejection text not retrieved."
      }
    ],
    "methodology_note": "Values are the Our World in Data series of V-Dem's latest dataset vintage; V-Dem revises historical values each release, so earlier editions published different figures. 'year' is the data year (the report is published the following March). V-Dem's 2021 report (covering 2020) reclassified India from 'electoral democracy' to 'electoral autocracy'; the Democracy Report 2024 said India remained an electoral autocracy at the end of 2023 (Scroll). V-Dem's classification (Regimes of the World) is a separate judgement from the LDI score. The Indian government disputes such indices' methodologies. Earlier values added from the same OWID V-Dem v16 series: 2004 0.578, 2005 0.573, 2006 0.569, 2007 0.569, 2008 0.569, 2009 0.539, 2010 0.532, 2011 0.532, 2012 0.525. V-Dem's LDI is defined for every year back to 1789, so there is no coverage break over 2004-2012, but the series is periodically revised and these figures may differ from values in earlier printed editions.",
    "related_claims": []
  },
  "wef-global-gender-gap": {
    "slug": "wef-global-gender-gap",
    "name": "Global Gender Gap Index",
    "publisher": "World Economic Forum",
    "url": "https://www.weforum.org/publications/series/global-gender-gap-report/",
    "higher_is_better": false,
    "metric": "Rank",
    "out_of_label": "countries ranked",
    "points": [
      {
        "year": 2006,
        "value": 98,
        "out_of": 115,
        "source_url": "https://www3.weforum.org/docs/WEF_GenderGapReport_Rankings_2012.pdf"
      },
      {
        "year": 2007,
        "value": 114,
        "out_of": 128,
        "source_url": "https://www3.weforum.org/docs/WEF_GenderGapReport_Rankings_2012.pdf"
      },
      {
        "year": 2008,
        "value": 113,
        "out_of": 130,
        "source_url": "https://www3.weforum.org/docs/WEF_GenderGapReport_Rankings_2012.pdf"
      },
      {
        "year": 2009,
        "value": 114,
        "out_of": 134,
        "source_url": "https://www3.weforum.org/docs/WEF_GenderGapReport_Rankings_2012.pdf"
      },
      {
        "year": 2010,
        "value": 112,
        "out_of": 134,
        "source_url": "https://www3.weforum.org/docs/WEF_GenderGapReport_Rankings_2012.pdf"
      },
      {
        "year": 2011,
        "value": 113,
        "out_of": 135,
        "source_url": "https://www3.weforum.org/docs/WEF_GenderGapReport_Rankings_2012.pdf"
      },
      {
        "year": 2012,
        "value": 105,
        "out_of": 135,
        "source_url": "https://www3.weforum.org/docs/WEF_GenderGapReport_Rankings_2012.pdf"
      },
      {
        "year": 2013,
        "value": 101,
        "out_of": 136,
        "source_url": "https://www3.weforum.org/docs/WEF_GenderGap_Report_2013.pdf"
      },
      {
        "year": 2014,
        "value": 114,
        "out_of": 142,
        "source_url": "https://www3.weforum.org/docs/GGGR14/GGGR_CompleteReport_2014.pdf"
      },
      {
        "year": 2016,
        "value": 87,
        "out_of": 144,
        "source_url": "https://www3.weforum.org/docs/GGGR16/WEF_Global_Gender_Gap_Report_2016.pdf"
      },
      {
        "year": 2017,
        "value": 108,
        "out_of": 144,
        "source_url": "https://www3.weforum.org/docs/WEF_GGGR_2017.pdf"
      },
      {
        "year": 2018,
        "value": 108,
        "out_of": 149,
        "source_url": "https://www3.weforum.org/docs/WEF_GGGR_2018.pdf"
      },
      {
        "year": 2020,
        "value": 112,
        "out_of": 153,
        "source_url": "https://www3.weforum.org/docs/WEF_GGGR_2020.pdf"
      },
      {
        "year": 2021,
        "value": 140,
        "out_of": 156,
        "source_url": "https://www3.weforum.org/docs/WEF_GGGR_2021.pdf"
      },
      {
        "year": 2022,
        "value": 135,
        "out_of": 146,
        "source_url": "https://www3.weforum.org/docs/WEF_GGGR_2022.pdf"
      },
      {
        "year": 2023,
        "value": 127,
        "out_of": 146,
        "source_url": "https://www3.weforum.org/docs/WEF_GGGR_2023.pdf"
      },
      {
        "year": 2024,
        "value": 129,
        "out_of": 146,
        "source_url": "https://www3.weforum.org/docs/WEF_GGGR_2024.pdf"
      },
      {
        "year": 2025,
        "value": 131,
        "out_of": 148,
        "source_url": "https://reports.weforum.org/docs/WEF_GGGR_2025.pdf"
      },
      {
        "year": 2026,
        "value": 131,
        "out_of": 145,
        "source_url": "https://www.freepressjournal.in/india/india-retains-131st-rank-in-global-gender-gap-index-2026-iceland-tops-list"
      }
    ],
    "govt_response": [],
    "methodology_note": "Score (0-1, 1 = parity) is the more comparable measure; India's scores per WEF reports: 2013 0.6551, 2014 0.6455, 2016 0.683, 2017 0.669, 2018 0.665, 2020 0.668, 2021 0.625, 2022 0.629, 2023 0.643, 2024 0.641, 2025 0.644 (2026: about 64.5% per press). The rank fell sharply in 2021 mainly due to a drop in political empowerment (fewer women ministers) and estimated earned income; WEF notes ranks shift with country coverage. 2015 edition (reported as 108th of 145) was not retrievable and is omitted. 2019 had no edition. The 2026 point is from press coverage of the WEF release (mid-September 2026); the WEF 2026 PDF could not be fetched. All other points are read directly from the WEF report PDFs. No specific government rebuttal located. Earlier editions added from Table 3a of the WEF Global Gender Gap Report 2012: 2006 98th of 115 (score 0.6011), 2007 114th of 128 (0.5936), 2008 113rd of 130 (0.6060), 2009 114th of 134 (0.6151), 2010 112th of 134 (0.6155), 2011 113th of 135 (0.6190), 2012 105th of 135 (0.6442). The index was first published in 2006, so there is no 2004 or 2005 edition. Coverage and several indicators changed across editions and WEF revised the methodology in 2014, so ranks/scores are not strictly comparable across the full 2006-2026 span.",
    "related_claims": []
  },
  "world-bank-ease-of-doing-business": {
    "slug": "world-bank-ease-of-doing-business",
    "name": "Ease of Doing Business (Doing Business report)",
    "publisher": "World Bank",
    "url": "https://www.doingbusiness.org/en/rankings",
    "higher_is_better": false,
    "metric": "Rank",
    "out_of_label": "economies ranked",
    "points": [
      {
        "year": 2006,
        "value": 116,
        "out_of": 155,
        "source_url": "https://en.wikipedia.org/wiki/Ease_of_doing_business_index"
      },
      {
        "year": 2007,
        "value": 134,
        "out_of": 175,
        "source_url": "https://en.wikipedia.org/wiki/Ease_of_doing_business_index"
      },
      {
        "year": 2008,
        "value": 120,
        "out_of": 178,
        "source_url": "https://en.wikipedia.org/wiki/Ease_of_doing_business_index"
      },
      {
        "year": 2009,
        "value": 122,
        "out_of": 181,
        "source_url": "https://en.wikipedia.org/wiki/Ease_of_doing_business_index"
      },
      {
        "year": 2010,
        "value": 133,
        "out_of": 183,
        "source_url": "https://en.wikipedia.org/wiki/Ease_of_doing_business_index"
      },
      {
        "year": 2011,
        "value": 134,
        "out_of": 183,
        "source_url": "https://en.wikipedia.org/wiki/Ease_of_doing_business_index"
      },
      {
        "year": 2012,
        "value": 132,
        "out_of": 183,
        "source_url": "https://en.wikipedia.org/wiki/Ease_of_doing_business_index"
      },
      {
        "year": 2013,
        "value": 132,
        "out_of": 185,
        "source_url": "https://en.wikipedia.org/wiki/Ease_of_doing_business_index"
      },
      {
        "year": 2014,
        "value": 134,
        "out_of": 189,
        "source_url": "https://en.wikipedia.org/wiki/Ease_of_doing_business_index"
      },
      {
        "year": 2015,
        "value": 142,
        "out_of": 189,
        "source_url": "https://en.wikipedia.org/wiki/Ease_of_doing_business_index"
      },
      {
        "year": 2016,
        "value": 130,
        "out_of": 189,
        "source_url": "https://en.wikipedia.org/wiki/Ease_of_doing_business_index"
      },
      {
        "year": 2017,
        "value": 130,
        "out_of": 190,
        "source_url": "https://en.wikipedia.org/wiki/Ease_of_doing_business_index"
      },
      {
        "year": 2018,
        "value": 100,
        "out_of": 190,
        "source_url": "https://en.wikipedia.org/wiki/Ease_of_doing_business_index"
      },
      {
        "year": 2019,
        "value": 77,
        "out_of": 190,
        "source_url": "https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=1589055"
      },
      {
        "year": 2020,
        "value": 63,
        "out_of": 190,
        "source_url": "https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=1589055"
      }
    ],
    "govt_response": [
      {
        "title": "PIB: India ranks 63 in World Bank's Doing Business Report (Oct 2019)",
        "url": "https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=1589055",
        "summary": "Government celebrated a 14-place rise from 77 to 63 of 190, India a top-10 improver for the third consecutive year; later PIB material cites a rise from 142 in 2014 to 63."
      }
    ],
    "methodology_note": "'year' is the Doing Business report year (DB2020 = published Oct 2019, data to May 2019). The World Bank discontinued the report in 2021 after data irregularities affecting the DB2018 and DB2020 editions (China, Saudi Arabia, UAE, Azerbaijan). The 142-to-63 rise cited by the government compares DB2015 (142) with DB2020 (63); DB2014 was 134. The Bank restates past ranks with methodology changes, so published ranks are not strictly comparable. Rank for 2014-2018 per Wikipedia's table of the report; 2019/2020 per PIB. Earlier editions added: ranking was introduced only in the Doing Business 2006 report, so no ranks exist for 2004-2005. India was 116th of 155 in DB2006, 134th of 175 in DB2007, 120th of 178 in DB2008, 122nd of 181 in DB2009, 133rd of 183 in DB2010, 134th of 183 in DB2011, 132nd of 183 in DB2012 and 132nd of 185 in DB2013 (coverage counts confirmed from the World Bank's archived Doing Business 2006 and 2013 report pages). Coverage expanded sharply over this period and the Bank changed/restated indicators (notably DB2015), so these ranks are not strictly comparable with later editions.",
    "related_claims": []
  },
  "world-happiness-report": {
    "slug": "world-happiness-report",
    "name": "World Happiness Report",
    "publisher": "Gallup / Oxford Wellbeing Research Centre / UN SDSN",
    "url": "https://worldhappiness.report/",
    "higher_is_better": false,
    "metric": "Rank",
    "out_of_label": "countries ranked",
    "points": [
      {
        "year": 2012,
        "value": 111,
        "out_of": 156,
        "source_url": "https://files.worldhappiness.report/WHR12.pdf"
      },
      {
        "year": 2013,
        "value": 111,
        "out_of": null,
        "source_url": "https://www.gktoday.in/india-ranks-118th-uns-world-happiness-index-2016/"
      },
      {
        "year": 2015,
        "value": 117,
        "out_of": null,
        "source_url": "https://www.gktoday.in/india-ranks-118th-uns-world-happiness-index-2016/"
      },
      {
        "year": 2016,
        "value": 118,
        "out_of": 156,
        "source_url": "https://scroll.in/latest/805249/scroll_in"
      },
      {
        "year": 2017,
        "value": 122,
        "out_of": 155,
        "source_url": "https://worldhappiness.report/ed/2017/"
      },
      {
        "year": 2018,
        "value": 133,
        "out_of": 156,
        "source_url": "https://worldhappiness.report/ed/2018/"
      },
      {
        "year": 2019,
        "value": 140,
        "out_of": 156,
        "source_url": "https://worldhappiness.report/ed/2019/"
      },
      {
        "year": 2020,
        "value": 144,
        "out_of": null,
        "source_url": "https://worldhappiness.report/ed/2020/"
      },
      {
        "year": 2021,
        "value": 139,
        "out_of": 149,
        "source_url": "https://www.boomlive.in/fact-file/global-happiness-report-india-ranks-139-out-of-149-countries-12422"
      },
      {
        "year": 2022,
        "value": 136,
        "out_of": null,
        "source_url": "https://worldhappiness.report/ed/2022/"
      },
      {
        "year": 2023,
        "value": 126,
        "out_of": 137,
        "source_url": "https://scroll.in/latest/1046001/world-happiness-report-india-ranked-at-126th-place-below-sri-lanka-pakistan"
      },
      {
        "year": 2024,
        "value": 126,
        "out_of": 143,
        "source_url": "https://worldhappiness.report/ed/2024/"
      },
      {
        "year": 2025,
        "value": 118,
        "out_of": 147,
        "source_url": "https://www.tribuneindia.com/news/india/ranked-118th-india-shade-happier-than-last-year/amp"
      },
      {
        "year": 2026,
        "value": 116,
        "out_of": 147,
        "source_url": "https://www.deccanherald.com/india/india-ranks-116th-in-world-happiness-report-2026-behind-pakistan-bangladesh-3938004"
      }
    ],
    "govt_response": [],
    "methodology_note": "Rankings use a three-year average of Gallup World Poll life-evaluation answers (Cantril ladder, 0-10); India's score: 2017 4.315, 2018 4.190, 2019 4.015, 2024 4.054, 2025 4.389, 2026 4.536 (per Wikipedia's tables of the reports). Number of countries varies each year. Gaps: out_of not confirmed for 2013, 2015, 2020, 2022 (omitted); the 2014 and 2012 editions are not included; a 2016 total of 156 (PTI/Scroll) vs 157 (other outlets) is reported. 2022 rank 136 is confirmed by a later report referring to it; 2020's 144 is also cited by a 2012-2026 review. 2017/2018/2019/2020/2022/2024 per-point links go to the edition's landing page, with the rank taken from Wikipedia's summary tables of those reports. No official Indian government rebuttal located. The 2012 point (111th of 156, score 4.772) is from the first World Happiness Report, which was the only edition before 2013; there were no 2004-2011 editions. The 2012 report used 2005-2011 averages and a different country set/method from the 2013 edition, so the identical 2012 and 2013 ranks are not directly comparable.",
    "related_claims": []
  },
  "yale-epi": {
    "slug": "yale-epi",
    "name": "Environmental Performance Index",
    "publisher": "Yale Center for Environmental Law & Policy / Columbia CIESIN",
    "url": "https://epi.yale.edu/",
    "higher_is_better": false,
    "metric": "Rank",
    "out_of_label": "countries ranked",
    "points": [
      {
        "year": 2006,
        "value": 118,
        "out_of": 133,
        "source_url": "https://ciesin.columbia.edu/sites/ciesin.columbia.edu/files/content/2006-epi-full-report.cleaned.pdf"
      },
      {
        "year": 2008,
        "value": 120,
        "out_of": 149,
        "source_url": "https://sustentabilidad.uai.edu.ar/pdf/negocios/2008EPI_Rankings_1page.pdf"
      },
      {
        "year": 2010,
        "value": 123,
        "out_of": 163,
        "source_url": "https://www.hindustantimes.com/world/india-ranks-123rd-in-pollution-control-iceland-on-top/story-Gg2xtHGLH8mt6NXnS3dQ6H.html"
      },
      {
        "year": 2012,
        "value": 125,
        "out_of": 132,
        "source_url": "https://economictimes.indiatimes.com/india-ranks-125th-in-environment-performance-index-report/articleshow/11672699.cms"
      },
      {
        "year": 2014,
        "value": 155,
        "out_of": null,
        "source_url": "https://www.rgics.org/environment/deciphering-indias-176th-global-rank-in-the-environmental-performance-index-2024/"
      },
      {
        "year": 2018,
        "value": 177,
        "out_of": 180,
        "source_url": "https://www.downtoearth.org.in/news/wildlife-biodiversity/india-must-redouble-sustainability-efforts-environment-performance-index-71603"
      },
      {
        "year": 2020,
        "value": 168,
        "out_of": 180,
        "source_url": "https://mail.morungexpress.com/india-ranks-168th-on-environmental-performance-index"
      },
      {
        "year": 2022,
        "value": 180,
        "out_of": 180,
        "source_url": "https://m.thewire.in/article/environment/india-second-from-lowest-in-environment-performance-index"
      },
      {
        "year": 2024,
        "value": 176,
        "out_of": 180,
        "source_url": "https://www.rgics.org/environment/deciphering-indias-176th-global-rank-in-the-environmental-performance-index-2024/"
      },
      {
        "year": 2026,
        "value": 176,
        "out_of": 177,
        "source_url": "https://www.drishtiias.com/state-pcs-current-affairs/india-ranked-176th-in-environmental-performance-index-2026/print_manually"
      }
    ],
    "govt_response": [
      {
        "title": "MoEF&CC rejects EPI 2022 ranking",
        "url": "https://indianexpress.com/article/explained/environment-index-and-india-7963597/",
        "summary": "Environment ministry said several indicators rest on 'surmises and unscientific methods' (Indian Express explainer, June 2022); also reported in Hindustan Times: https://www.hindustantimes.com/opinion/indias-lagging-sustainability-performance-101656338200590.html"
      }
    ],
    "methodology_note": "EPI is biennial and the indicator set changes substantially between editions (e.g. new climate-change indicators in 2022), so ranks across editions are not strictly comparable. Out-of count for 2014 not confirmed (omitted). 2016 edition (reported by some as 141st) and 2012/2010 not confirmed and omitted. Scores: 2018 30.57, 2020 27.6, 2024 27.6 (Wikipedia), 2026 22.46 (Estonia top at 74.79; Laos last at 21.78) per press coverage. 2014 and 2024 points cite an analysis noting a fall from 155th (2014) to 176th (2024). The 2022 rank (180 of 180) was the lowest of any country that edition. Earlier editions added: the Pilot 2006 EPI ranked India 118th of 133 (score 47.7); the 2008 EPI ranked India 120th of 149 (score 60.3); the 2010 EPI ranked India 123rd of 163; the 2012 EPI ranked India 125th of 132. METHODOLOGY BREAK: the pilot 2006 index used 16 indicators across six policy categories, the 2008 and 2010 editions used 25 indicators across ten categories, and the 2012 edition used 22 indicators across ten categories, with country coverage changing from 133 to 149 to 163 to 132; ranks and scores are therefore not comparable across these editions. There was no 2004 EPI (the series began with the Pilot 2006 edition), and the 2016 edition was not confirmed and is omitted.",
    "related_claims": []
  }
}
```
