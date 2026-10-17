[0m
> build · deepseek-flash
I'll research this systematically. Let me start with several parallel searches on prominent INC infrastructure & energy claims from 2000-2014.
[0m◈ [0mWeb Search via Firecrawl "Jairam Ramesh India reduce emissions intensity 20-25 percent by 2020 Copenhagen 2009" 
[0m◈ [0mWeb Search via Firecrawl "Rajiv Gandhi Grameen Vidyutikaran Yojana 2005 Manmohan Singh electrify all villages 2009 target" 
[0m◈ [0mWeb Search via Firecrawl "Sheila Dikshit Delhi power surplus 24 hours electricity claim 2010" 
[0m◈ [0mWeb Search via Firecrawl "Jawaharlal Nehru National Solar Mission 2010 target 20000 MW by 2022 Manmohan Singh" 
[0m◈ [0mWeb Search via Firecrawl "Congress 2009 election manifesto infrastructure rural roads electricity promise" 
[0m◈ [0mWeb Search via Firecrawl "Kapil Sibal broadband all panchayats by 2012 National Broadband Plan 2010" 
> build · deepseek-flash
Search returned nothing. Let me retry with simpler queries.
[0m◈ [0mWeb Search via Firecrawl "Rajiv Gandhi Grameen Vidyutikaran Yojana launched 2005" 
[0m◈ [0mWeb Search via Firecrawl "National Solar Mission 20000 MW 2022" 
[0m◈ [0mWeb Search via Firecrawl "Jairam Ramesh emissions intensity India 2020" 
[0m◈ [0mWeb Search via Firecrawl "Kapil Sibal broadband panchayats 2012" 
> build · deepseek-flash
Let me test connectivity with a direct fetch.
[0m◈ [0mWeb Search via Firecrawl "India solar mission" 
[0m% [0mWebFetch https://en.wikipedia.org/wiki/Jawaharlal_Nehru_National_Solar_Mission 
> build · deepseek-flash
Websearch is down but webfetch works. Let me use search engine pages via webfetch.
[0m% [0mWebFetch https://www.bing.com/search?q=Jairam+Ramesh+emissions+intensity+20-25+percent+2020+Copenhagen 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=Rajiv+Gandhi+Grameen+Vidyutikaran+Yojana+2005+electrify+all+villages+2009 
> build · deepseek-flash
DDG HTML works well. Let me run a batch of targeted searches.
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=YSR+Reddy+Jalayagnam+irrigation+promise+Andhra+Pradesh 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=Bhupinder+Singh+Hooda+Haryana+power+surplus+claim 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=Kamal+Nath+20+km+per+day+highways+target+2010+National+Highways+Authority 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=Sheila+Dikshit+Delhi+power+surplus+state+electricity+claim 
> build · deepseek-flash
Good sources emerging. Let me fetch key primary pages and run more searches.
[0m✗ [0mWebFetch https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=14217 failed
[91m[1mError: [0mStatusCode: non 2xx status code (403 GET https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=14217)
[0m✗ [0mWebFetch https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=66832 failed
[91m[1mError: [0mStatusCode: non 2xx status code (403 GET https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=66832)
[0m% [0mWebFetch https://www.hindustantimes.com/india/delhi-to-be-power-surplus-by-2011-12-dikshit/story-sTg84tLm4ADFeTlxKfP5QK.html 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=Kapil+Sibal+broadband+100+million+connections+panchayats+2012+National+Broadband+Plan 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=Jairam+Ramesh+India+reduce+emissions+intensity+GDP+20-25+percent+2020 
> build · deepseek-flash
Good progress. Now let me get primary sources and more claims.
[0m% [0mWebFetch https://archive.pib.gov.in/newsite/PrintRelease.aspx?relid=90837 
[0m% [0mWebFetch https://archive.pib.gov.in/newsite/PrintRelease.aspx?relid=14217 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=11th+five+year+plan+power+capacity+addition+target+78700+MW+achieved 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=Rajiv+Gandhi+Grameen+Vidyutikaran+Yojana+CAG+report+bpl+households+electrified+target+missed 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=Congress+2009+Lok+Sabha+election+manifesto+pdf+electricity+infrastructure 
> build · deepseek-flash
Let me gather sources for attribution and outcomes.
[0m% [0mWebFetch https://archive.pib.gov.in/newsite/PrintRelease.aspx?relid=83765 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=Manmohan+Singh+National+Solar+Mission+launch+2010+20000+MW+solar+2022 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=Manmohan+Singh+electrify+all+villages+2009+rural+electrification+promise 
[0m% [0mWebFetch https://html.duckduckgo.com/html/?q=Jairam+Ramesh+India+forest+cover+increased+2011+statement+parliament 
[0m% [0mWebFetch https://cag.gov.in/en/audit-report/details/8728 
> build · deepseek-flash
DDG hit a bot check. Let me switch search engines (Mojeek, Bing).
[0m✗ [0mWebFetch https://www.mojeek.com/search?q=Manmohan+Singh+National+Solar+Mission+launch+2010+20000+MW failed
[91m[1mError: [0mStatusCode: non 2xx status code (403 GET https://www.mojeek.com/search?q=Manmohan+Singh+National+Solar+Mission+launch+2010+20000+MW)
[0m✗ [0mWebFetch https://www.mojeek.com/search?q=highway+construction+km+per+day+2013+2014+NHAI+actual+achievement failed
[91m[1mError: [0mStatusCode: non 2xx status code (403 GET https://www.mojeek.com/search?q=highway+construction+km+per+day+2013+2014+NHAI+actual+achievement)
[0m✗ [0mWebFetch https://www.mojeek.com/search?q=Jalayagnam+CAG+irrigation+acreage+achieved+Andhra+Pradesh failed
[91m[1mError: [0mStatusCode: non 2xx status code (403 GET https://www.mojeek.com/search?q=Jalayagnam+CAG+irrigation+acreage+achieved+Andhra+Pradesh)
[0m✗ [0mWebFetch https://www.mojeek.com/search?q=11th+plan+power+capacity+addition+achieved+54964+MW+CEA failed
[91m[1mError: [0mStatusCode: non 2xx status code (403 GET https://www.mojeek.com/search?q=11th+plan+power+capacity+addition+achieved+54964+MW+CEA)
[0m✗ [0mWebFetch https://www.mojeek.com/search?q=Delhi+power+surplus+2013+2014+peak+demand failed
[91m[1mError: [0mStatusCode: non 2xx status code (403 GET https://www.mojeek.com/search?q=Delhi+power+surplus+2013+2014+peak+demand)
> build · deepseek-flash
[0m% [0mWebFetch https://www.bing.com/search?q=Manmohan+Singh+launches+National+Solar+Mission+2010+20000+MW 
[0m✗ [0mWebFetch https://search.brave.com/search?q=11th+plan+power+capacity+addition+achieved+CEA+MW failed
[91m[1mError: [0mStatusCode: non 2xx status code (429 GET https://search.brave.com/search?q=11th+plan+power+capacity+addition+achieved+CEA+MW)
[0m% [0mWebFetch https://search.marginalia.nu/search?query=Jalayagnam+CAG+irrigation+acreage 
> build · deepseek-flash
[0m% [0mWebFetch https://archive.pib.gov.in/newsite/PrintRelease.aspx?relid=66832 
[0m% [0mWebFetch https://en.wikipedia.org/wiki/Rajiv_Gandhi_Grameen_Vidyutikaran_Yojana 
[0m% [0mWebFetch https://en.wikipedia.org/wiki/Jalayagnam 
[0m% [0mWebFetch https://web.archive.org/web/20100115080517/http://www.hindu.com/2010/01/12/stories/2010011260911100.htm 
[0m% [0mWebFetch https://www.constructionweekonline.in/business/power-ministry-achieves-21221-mw-capacity-addition 
> build · deepseek-flash
Let me fetch the 2009 INC manifesto and key outcome sources.
[0m% [0mWebFetch https://archive.pib.gov.in/newsite/PrintRelease.aspx?relid=94655 
[0m% [0mWebFetch https://www.livemint.com/Politics/r6pfNXjJMHYev5sh9R9awK/Sheila-Dikshit-on-Delhis-power-tariffs.html 
[0m% [0mWebFetch https://web.archive.org/web/20090412135212/http://www.hindu.com/2009/04/08/stories/2009040850061200.htm 
[0m% [0mWebFetch https://www.sai.uni-heidelberg.de/PDFs/wahlen/manifesto-inc.pdf 
> build · deepseek-flash
Let me fetch the 2009 INC manifesto and find the tiger census source.
[0m✗ [0mWebFetch https://im.rediff.com/news/2009/mar/24Manifesto_Loksabha_2009_INC.pdf failed
[91m[1mError: [0mUnsupported fetched file content type: application/pdf
[0m% [0mWebFetch https://www.bing.com/search?q=Jairam+Ramesh+tiger+population+1706+2011+census+PIB 
[0m% [0mWebFetch https://www.bing.com/search?q=Manmohan+Singh+Rajiv+Gandhi+Grameen+Vidyutikaran+Yojana+launch+2005+rural+electrification 
> build · deepseek-flash
Bing isn't giving useful results. Let me work from known pages and Wikipedia references.
[0m% [0mWebFetch https://archive.pib.gov.in/newsite/PrintRelease.aspx?relid=98536 
[0m% [0mWebFetch https://www.hindustantimes.com/india/nath-grilled-over-highway-target/story-uCRt2POzOdLfb2PyfxoSQI.html 
[0m% [0mWebFetch https://www.deccanherald.com/india/sheila-dikshit-raps-discoms-over-2262374 
[0m✗ [0mWebFetch https://en.wikipedia.org/wiki/Tiger_census_in_India failed
[91m[1mError: [0mStatusCode: non 2xx status code (404 GET https://en.wikipedia.org/wiki/Tiger_census_in_India)
[0m% [0mWebFetch https://en.wikipedia.org/wiki/National_Optical_Fibre_Network 
> build · deepseek-flash
[0m% [0mWebFetch https://archive.pib.gov.in/newsite/PrintRelease.aspx?relid=87247 
[0m% [0mWebFetch https://en.wikipedia.org/wiki/Project_Tiger 
[0m% [0mWebFetch https://en.wikipedia.org/wiki/Climate_change_in_India 
[0m% [0mWebFetch https://en.wikipedia.org/wiki/Eleventh_Five-Year_Plan_(India) 
> build · deepseek-flash
Let me try alternate search engines for the remaining media source.
[0m✗ [0mWebFetch https://www.ecosia.org/search?q=Jairam%20Ramesh%20tiger%20population%201706%202011%20census failed
[91m[1mError: [0mStatusCode: non 2xx status code (403 GET https://www.ecosia.org/search?q=Jairam%20Ramesh%20tiger%20population%201706%202011%20census)
[0m% [0mWebFetch https://www.startpage.com/sp/search?query=Jairam+Ramesh+tiger+population+1706 
[0m% [0mWebFetch https://search.disroot.org/search?q=Jairam+Ramesh+tiger+1706+2011 
> build · deepseek-flash
[0m✗ [0mWebFetch https://www.reuters.com/article/economy/india-targets-20-25-pct-cut-in-co2-intensity-by-2020-idUSDEB003098/ failed
[91m[1mError: [0mStatusCode: non 2xx status code (401 GET https://www.reuters.com/article/economy/india-targets-20-25-pct-cut-in-co2-intensity-by-2020-idUSDEB003098/)
[0m✗ [0mWebFetch https://www.firstpost.com/tech/centre-okays-100-mbps-broadband-speed-for-gram-panchayats-sibal-1073177.html failed
[91m[1mError: [0mStatusCode: non 2xx status code (403 GET https://www.firstpost.com/tech/centre-okays-100-mbps-broadband-speed-for-gram-panchayats-sibal-1073177.html)
[0m% [0mWebFetch https://web.archive.org/web/20110612082807/http://moef.nic.in/downloads/public-information/tiger-brochure.pdf 
[0m% [0mWebFetch https://indianexpress.com/article/news-archive/web/will-build-20-km-a-day-by-april-nath/ 
> build · deepseek-flash
I have enough verified sources. Here is the final result.

```json
[
  {
    "id": "inc-manmohan-2010-solar-20gw",
    "speaker": "Manmohan Singh",
    "party": "INC",
    "role": "Prime Minister",
    "level": "central",
    "state": null,
    "date": "2010-01-11",
    "venue": "Solar Energy Conclave 2010, New Delhi",
    "language": "en",
    "quote_original": "",
    "quote_english": "The mission planned to create an installed capacity of 20,000 MW by the end of the 13th Plan.",
    "quote_is_verbatim": false,
    "claim_type": "promise",
    "deadline": "2022-03-31",
    "verdict": "true",
    "summary": "The Jawaharlal Nehru National Solar Mission, launched by Prime Minister Manmohan Singh on 11 January 2010, set an initial grid-connected solar target of 20,000 MW by 2022; India crossed 20,000 MW of installed solar capacity in 2018 and had about 54,000 MW by March 2022.",
    "topics": ["energy", "environment"],
    "media": [],
    "transcript_sources": [
      { "title": "Manmohan Singh launches 'Solar India' - The Hindu (archived)", "url": "https://web.archive.org/web/20100115080517/http://www.hindu.com/2010/01/12/stories/2010011260911100.htm" },
      { "title": "National Solar Mission (overview and targets)", "url": "https://en.wikipedia.org/wiki/National_Solar_Mission" }
    ],
    "evidence": [
      { "type": "index", "publisher": "Wikipedia (compiling MNRE / CEA data)", "title": "National Solar Mission - installed capacity table", "url": "https://en.wikipedia.org/wiki/National_Solar_Mission", "date": "2022-03-31", "key_figure": "Installed solar capacity 53,996 MW as on 31 March 2022; 20 GW crossed in 2018" },
      { "type": "govt_data", "publisher": "Central Electricity Authority (CEA)", "title": "Installed Capacity Reports", "url": "https://cea.nic.in/installed-capacity-report/?lang=en", "date": "2022-03-31", "key_figure": "CEA installed-capacity series used for the solar capacity figures" }
    ],
    "govt_response": [
      { "title": "MNRE: Jawaharlal Nehru National Solar Mission", "url": "https://archive.pib.gov.in/newsite/PrintRelease.aspx?relid=90837", "summary": "PIB release (17 December 2012) stating the mission had set a target of 20,000 MW of grid-connected solar power by 2022." }
    ],
    "chart": null,
    "analysis": "The Hindu reported that, at the 11 January 2010 launch, Manmohan Singh said the mission planned to create 20,000 MW of installed capacity by the end of the 13th Plan (2022).\n\nInstalled solar capacity grew from about 11 MW in 2010 to 2,632 MW by March 2014 (end of the INC-led UPA period). It crossed 20 GW in 2018 and reached about 54,000 MW by March 2022, exceeding the original 20 GW target. The Phase-3 goal was later raised to 100 GW, and the 100 GW milestone was reached in January 2025.\n\nThe claim is therefore assessed against the original 20,000 MW target and the stated 2022 timeline; both were met.",
    "confidence": "medium",
    "review_status": "draft",
    "last_reviewed": "2026-10-17",
    "notes": "The launch date and wording are from The Hindu (archived). The 20,000 MW figure was the mission's initial Phase-3 target, later revised upward to 100 GW. The CEA installed-capacity URL was seen in the National Solar Mission reference list but was not fetched directly."
  },
  {
    "id": "inc-kamalnath-2010-20km-highways",
    "speaker": "Kamal Nath",
    "party": "INC",
    "role": "Union Minister of Road Transport and Highways",
    "level": "central",
    "state": null,
    "date": "2010-01-10",
    "venue": "Automobile dealers association conference, New Delhi",
    "language": "en",
    "quote_original": "",
    "quote_english": "We are currently doing 9 km a day and would be in a position to scale up to 20 km a day by April-May 2010.",
    "quote_is_verbatim": true,
    "claim_type": "promise",
    "deadline": "2010-04-30",
    "verdict": "missed-deadline",
    "summary": "Kamal Nath said in January 2010 that highway construction would rise from about 9 km a day to 20 km a day by April-May 2010; official figures for June 2009 to September 2010 show an average of 12.01 km a day, and the ministry was criticised in Parliament for not meeting the target.",
    "topics": ["infrastructure"],
    "media": [],
    "transcript_sources": [
      { "title": "Will build 20 km a day by April: Nath - The Indian Express", "url": "https://indianexpress.com/article/news-archive/web/will-build-20-km-a-day-by-april-nath/" },
      { "title": "We are hoping to build 20 km road per day starting April: Kamal Nath - Economic Times", "url": "https://economictimes.indiatimes.com/opinion/interviews/we-are-hoping-to-build-20-km-road-per-day-starting-april-kamal-nath/articleshow/5453175.cms" }
    ],
    "evidence": [
      { "type": "parliament", "publisher": "Press Information Bureau, Ministry of Road Transport & Highways", "title": "Construction of National Highways", "url": "https://archive.pib.gov.in/newsite/PrintRelease.aspx?relid=66832", "date": "2010-11-09", "key_figure": "Average 12.01 km of National Highways per day achieved from June 2009 to September 2010" },
      { "type": "news", "publisher": "Hindustan Times", "title": "Nath grilled over highway target", "url": "https://www.hindustantimes.com/india/nath-grilled-over-highway-target/story-uCRt2POzOdLfb2PyfxoSQI.html", "date": "2010-11-09", "key_figure": "Lok Sabha; ministry criticised for failing to reach 20 km a day" },
      { "type": "news", "publisher": "NDTV", "title": "Kamal Nath's ambitious target: 20 km of road per day", "url": "https://www.ndtv.com/india-news/kamal-naths-ambitious-target-20-km-of-road-per-day-408922", "date": "2010-01-01", "key_figure": "Target of 20 km a day" }
    ],
    "govt_response": [
      { "title": "Nath grilled over highway target - Hindustan Times", "url": "https://www.hindustantimes.com/india/nath-grilled-over-highway-target/story-uCRt2POzOdLfb2PyfxoSQI.html", "summary": "In the Lok Sabha Kamal Nath said he had only promised to initiate the process of reaching 20 km a day within a year, that 20 km a day was impossible in the current circumstances, and that 12.1 km a day had already been achieved." }
    ],
    "chart": null,
    "analysis": "The Indian Express (10 January 2010) quoted Kamal Nath saying highway construction was running at about 9 km a day and would be scaled to 20 km a day by April-May 2010. The Economic Times and NDTV carried the same target.\n\nA PIB release of 9 November 2010 recorded average construction of 12.01 km of National Highways per day over June 2009 to September 2010. The same week, Hindustan Times reported that Nath was questioned in the Lok Sabha over the failure to meet the 20 km a day goal; he replied that the target had been to initiate the process within a year, and described 20 km a day as impossible under then-current conditions.\n\nThe 20 km a day pace was therefore not reached by the stated April 2010 date.",
    "confidence": "high",
    "review_status": "draft",
    "last_reviewed": "2026-10-17",
    "notes": "The ET and NDTV URLs were seen in search results and were not fetched directly; the Indian Express article, the PIB release and the Hindustan Times article were read."
  },
  {
    "id": "inc-sibal-2013-panchayat-broadband",
    "speaker": "Kapil Sibal",
    "party": "INC",
    "role": "Union Minister of Communications and Information Technology",
    "level": "central",
    "state": null,
    "date": "2013-08-30",
    "venue": "Parliament (Rajya Sabha), New Delhi",
    "language": "en",
    "quote_original": "",
    "quote_english": "Gram Panchayats will get broadband speed of up to 100 Mbps under a government project that aims to connect all 2.5 lakh panchayats in the country over the next two years.",
    "quote_is_verbatim": false,
    "claim_type": "promise",
    "deadline": "2015-08-31",
    "verdict": "missed-deadline",
    "summary": "Kapil Sibal said in 2013 that the National Optical Fibre Network would connect all 2.5 lakh gram panchayats with up to 100 Mbps broadband within about two years; by 2014 only a few hundred kilometres of the planned 300,000 km of optical fibre had been laid, and the first phase was completed only in December 2017.",
    "topics": ["digital", "infrastructure"],
    "media": [],
    "transcript_sources": [
      { "title": "Shri Kapil Sibal presides over Signing of Tripartite MoU on ROW & NOFN between GOI, State Government and BBNL - PIB", "url": "https://archive.pib.gov.in/newsite/PrintRelease.aspx?relid=94655" },
      { "title": "Gram panchayats to get broadband speed of up to 100 mbps: Kapil Sibal - Economic Times", "url": "https://economictimes.indiatimes.com/tech/internet/gram-panchayats-to-get-broadband-speed-of-up-to-100-mbps-kapil-sibal/articleshow/22162512.cms" },
      { "title": "Panchayats to get 100mbps broadband speed: Sibal - Times of India", "url": "https://timesofindia.indiatimes.com/tech-news/Panchayats-to-get-100mbps-broadband-speed-Sibal/articleshow/22164030.cms" }
    ],
    "evidence": [
      { "type": "index", "publisher": "Wikipedia (compiling government/BBNL data)", "title": "Bharat Broadband Network - implementation history", "url": "https://en.wikipedia.org/wiki/Bharat_Broadband_Network", "date": "2017-12-01", "key_figure": "Between 2011 and 2014 only about 350 km of the 300,000 km Phase-I optical fibre was laid; Phase-I was completed in December 2017" },
      { "type": "govt_data", "publisher": "Press Information Bureau, Ministry of Communications", "title": "Shri Kapil Sibal presides over Signing of Tripartite MoU on ROW & NOFN", "url": "https://archive.pib.gov.in/newsite/PrintRelease.aspx?relid=94655", "date": "2013-04-12", "key_figure": "Project to connect all 250,000 gram panchayats with optical fibre" }
    ],
    "govt_response": [
      { "title": "PIB: Tripartite MoUs signed for National Optical Fibre Network", "url": "https://archive.pib.gov.in/newsite/PrintRelease.aspx?relid=94655", "summary": "The government described NOFN as a project to connect all 2.5 lakh gram panchayats with a minimum 100 Mbps, funded from the Universal Service Obligation Fund." }
    ],
    "chart": null,
    "analysis": "The PIB release of 12 April 2013 set out the National Optical Fibre Network plan to connect all 250,000 gram panchayats. In late August 2013, Sibal was reported in Parliament as saying the project would connect all 2.5 lakh panchayats at up to 100 Mbps over the next two years.\n\nProgress between 2011 and 2014 was limited: reports compiled from government data indicate that only a few hundred kilometres of the roughly 300,000 km of optical fibre required for Phase-I had been laid by 2014, and Phase-I was completed in December 2017.\n\nThe two-year connectivity target set in 2013 was not met within that period.",
    "confidence": "medium",
    "review_status": "draft",
    "last_reviewed": "2026-10-17",
    "notes": "The TOI and ET URLs were seen in search results; the PIB release and the Wikipedia Bharat Broadband Network article were read. The exact sitting date of Sibal's Rajya Sabha reply is reported as Friday 30 August 2013 by the news reports."
  },
  {
    "id": "inc-ysr-2004-jalayagnam-irrigation",
    "speaker": "Y. S. Rajasekhara Reddy",
    "party": "INC",
    "role": "Chief Minister, Andhra Pradesh",
    "level": "state",
    "state": "Andhra Pradesh",
    "date": "2004-05-01",
    "venue": "Andhra Pradesh (election promise and launch of Jalayagnam programme)",
    "language": "en",
    "quote_original": "",
    "quote_english": "Jalayagnam was an election promise to provide irrigation to 8.2 million acres in five years.",
    "quote_is_verbatim": false,
    "claim_type": "promise",
    "deadline": "2009-04-30",
    "verdict": "unachieved",
    "summary": "Y.S. Rajasekhara Reddy launched the Jalayagnam irrigation programme on a promise to bring 8.2 million acres under irrigation within five years; by 2009 around 12 projects had been completed and irrigation had been provided to about 18 lakh acres.",
    "topics": ["infrastructure"],
    "media": [],
    "transcript_sources": [
      { "title": "Jalayagnam (programme description and original promise)", "url": "https://en.wikipedia.org/wiki/Jalayagnam" },
      { "title": "Jalayagnam - YSR Congress Party", "url": "https://www.ysrcongress.com/jalayagnam-676" }
    ],
    "evidence": [
      { "type": "news", "publisher": "The Hindu", "title": "Jalayagnam, graft and polls (archived)", "url": "https://web.archive.org/web/20090412135212/http://www.hindu.com/2009/04/08/stories/2009040850061200.htm", "date": "2009-04-08", "key_figure": "About Rs 40,000 crore spent; 12 projects completed and irrigation provided to 18 lakh acres; target was to add about one crore acres" },
      { "type": "index", "publisher": "Wikipedia", "title": "Jalayagnam", "url": "https://en.wikipedia.org/wiki/Jalayagnam", "date": "2026-10-01", "key_figure": "Election promise to irrigate 8.2 million acres in five years" }
    ],
    "govt_response": [
      { "title": "Jalayagnam - YSR Congress Party", "url": "https://www.ysrcongress.com/jalayagnam-676", "summary": "The party presents Jalayagnam as a water-management programme implemented to bring 8.2 million acres under irrigation in five years." }
    ],
    "chart": null,
    "analysis": "Jalayagnam was described in opposition and media accounts as an election promise by Y.S. Rajasekhara Reddy to bring 8.2 million acres under irrigation within five years, launched after the Congress government took office in 2004.\n\nThe Hindu reported in April 2009 that about Rs 40,000 crore had been spent, 12 projects had been completed and irrigation had been provided to 18 lakh acres, against a target of adding roughly one crore acres. The programme was also the subject of corruption allegations from opposition parties, which the government rejected.\n\nAgainst the stated five-year, 8.2 million acre target, the acreage reported by 2009 was a small fraction.",
    "confidence": "medium",
    "review_status": "draft",
    "last_reviewed": "2026-10-17",
    "notes": "The exact date of the promise is uncertain; day is set to the first of May 2004 (when Reddy took office). The YSR Congress URL was seen in search results and was not fetched directly."
  },
  {
    "id": "inc-jairam-2009-emissions-intensity",
    "speaker": "Jairam Ramesh",
    "party": "INC",
    "role": "Union Minister of Environment and Forests",
    "level": "central",
    "state": null,
    "date": "2009-12-03",
    "venue": "Parliament, New Delhi (statement ahead of the Copenhagen summit)",
    "language": "en",
    "quote_original": "",
    "quote_english": "India would reduce its carbon intensity by a minimum of 20 per cent and most likely 25 per cent by the year 2020, on 2005 levels.",
    "quote_is_verbatim": false,
    "claim_type": "promise",
    "deadline": "2020-12-31",
    "verdict": "true",
    "summary": "In December 2009 Environment Minister Jairam Ramesh announced in Parliament that India would cut the emission intensity of its GDP by 20-25 per cent by 2020 from 2005 levels; India's official reporting states that emission intensity fell by 24 per cent between 2005 and 2016.",
    "topics": ["environment", "energy"],
    "media": [],
    "transcript_sources": [
      { "title": "Jairam Ramesh: 20-25 pc carbon emission intensity cut by 2020 - The Hindu", "url": "https://www.thehindu.com/news/national/Jairam-Ramesh-20-25-pc-carbon-emission-intensity-cut-by-2020/article16851626.ece" },
      { "title": "'India can cut emission intensity by 20-25%' - Business Standard", "url": "https://www.business-standard.com/article/economy-policy/-india-can-cut-emission-intensity-by-20-25-109120400064_1.html" },
      { "title": "India 2020: 20-25% cuts in carbon intensity - The Indian Express (via PressReader)", "url": "https://www.pressreader.com/india/the-indian-express/20091204/282209416951928" }
    ],
    "evidence": [
      { "type": "intl_org", "publisher": "Ministry of Environment, Forest and Climate Change (India's Biennial Update Report to the UNFCCC), summarised on Wikipedia", "title": "Climate change in India - mitigation", "url": "https://en.wikipedia.org/wiki/Climate_change_in_India", "date": "2018-02-01", "key_figure": "India's emission intensity of GDP reduced by 24 per cent between 2005 and 2016" },
      { "type": "news", "publisher": "The Indian Express", "title": "India will stand by its commitments on emission intensity cuts", "url": "https://indianexpress.com/article/india/india-others/india-will-stand-by-its-commitments-on-emission-intensity-cuts/", "date": "2010-02-02", "key_figure": "India's reduction in emission intensity of GDP will be higher than 20-25 per cent by 2020 from 2005 levels" }
    ],
    "govt_response": [
      { "title": "Climate change in India - mitigation (Biennial Update Report summary)", "url": "https://en.wikipedia.org/wiki/Climate_change_in_India", "summary": "India's Biennial Update Report states emission intensity of GDP fell 24 per cent between 2005 and 2016, putting India on track to meet its voluntary 20-25 per cent target." }
    ],
    "chart": null,
    "analysis": "Jairam Ramesh announced India's voluntary target in Parliament on 3 December 2009: a 20-25 per cent reduction in the emission intensity of GDP by 2020 relative to 2005, to be pursued without a legally binding cap.\n\nIndia's Biennial Update Report to the UNFCCC, released in 2018, reports a 24 per cent reduction in emission intensity of GDP between 2005 and 2016. Independent summaries describe India as on track for the 20-25 per cent target.\n\nThe announced target is assessed as met.",
    "confidence": "medium",
    "review_status": "draft",
    "last_reviewed": "2026-10-17",
    "notes": "The 24 per cent figure is taken from the summary of India's Biennial Update Report on the Wikipedia 'Climate change in India' page; the primary BUR PDF was not opened. The Hindu, Business Standard and Indian Express URLs were seen in search results; the Wikipedia page was read."
  },
  {
    "id": "inc-shinde-2010-62000mw-11th-plan",
    "speaker": "Sushilkumar Shinde",
    "party": "INC",
    "role": "Union Minister of Power",
    "level": "central",
    "state": null,
    "date": "2010-03-28",
    "venue": "Solapur, Maharashtra",
    "language": "en",
    "quote_original": "",
    "quote_english": "About 62,000 MW capacity addition would certainly be achieved out of the 78,700 MW target envisaged for the 11th Plan.",
    "quote_is_verbatim": false,
    "claim_type": "statistic",
    "deadline": null,
    "verdict": "misleading",
    "summary": "Power Minister Sushilkumar Shinde said in March 2010 that about 62,000 MW of the 78,700 MW 11th Plan capacity-addition target would certainly be achieved; official figures show 54,964 MW was actually added (88 per cent of the 62,374 MW revised target).",
    "topics": ["energy"],
    "media": [],
    "transcript_sources": [
      { "title": "Power Ministry achieves 21221 MW capacity addition - Construction Week India", "url": "https://www.constructionweekonline.in/business/power-ministry-achieves-21221-mw-capacity-addition" }
    ],
    "evidence": [
      { "type": "parliament", "publisher": "Press Information Bureau, Ministry of Power", "title": "Capacity Addition Target", "url": "https://archive.pib.gov.in/newsite/PrintRelease.aspx?relid=87247", "date": "2012-09-03", "key_figure": "11th Plan target 78,700 MW, revised to 62,374 MW; achieved 54,964 MW (88 per cent of the revised target)" },
      { "type": "parliament", "publisher": "Press Information Bureau, Ministry of Power", "title": "Capacity Addition of Power", "url": "https://archive.pib.gov.in/newsite/PrintRelease.aspx?relid=98536", "date": "2013-08-22", "key_figure": "Thermal capacity added in the 11th Plan was 48,540 MW; 20,832 MW of the original target could not be commissioned" }
    ],
    "govt_response": [
      { "title": "PIB: Capacity Addition Target (Rajya Sabha reply)", "url": "https://archive.pib.gov.in/newsite/PrintRelease.aspx?relid=87247", "summary": "The government stated the 11th Plan target was revised downward to 62,374 MW by the Planning Commission's mid-term appraisal and that 54,964 MW (88 per cent) was achieved." }
    ],
    "chart": null,
    "analysis": "Construction Week India reported on 28 March 2010 that, after 21,221 MW had been commissioned in the 11th Plan to that point, Power Minister Sushilkumar Shinde said about 62,000 MW would certainly be achieved. Central Electricity Authority projections at the time estimated 62,374 MW with a high degree of certainty.\n\nA PIB release of 3 September 2012 recorded that the original 78,700 MW target for the 11th Plan was revised to 62,374 MW and that 54,964 MW was achieved, which is 88 per cent of the revised target and about 70 per cent of the original target.\n\nThe 62,000 MW figure cited by the minister was not reached; actual addition was 54,964 MW.",
    "confidence": "high",
    "review_status": "draft",
    "last_reviewed": "2026-10-17",
    "notes": "The Construction Week article quotes Shinde; the two PIB releases (Rajya Sabha and Lok Sabha replies) provide the outcome figures and were read directly."
  },
  {
    "id": "inc-dikshit-2013-delhi-power-tariffs",
    "speaker": "Sheila Dikshit",
    "party": "INC",
    "role": "Chief Minister, Delhi",
    "level": "state",
    "state": "Delhi",
    "date": "2013-12-01",
    "venue": "Public rally in Delhi and other venues during 2013",
    "language": "en",
    "quote_original": "",
    "quote_english": "The power tariff in Delhi is much lower than that in other metropolitan cities and even other cities and towns in the National Capital Region.",
    "quote_is_verbatim": false,
    "claim_type": "statement",
    "deadline": null,
    "verdict": "misleading",
    "summary": "Chief Minister Sheila Dikshit said Delhi's power tariffs were the lowest among cities; a Mint claim check citing a Deloitte analysis found that in 2013 only Maharashtra, West Bengal and Madhya Pradesh had higher retail tariffs than Delhi.",
    "topics": ["energy"],
    "media": [],
    "transcript_sources": [
      { "title": "Claim Check: Sheila Dikshit on Delhi's power tariffs - Mint", "url": "https://www.livemint.com/Politics/r6pfNXjJMHYev5sh9R9awK/Sheila-Dikshit-on-Delhis-power-tariffs.html" }
    ],
    "evidence": [
      { "type": "fact_check", "publisher": "Mint (Livemint)", "title": "Claim Check: Sheila Dikshit on Delhi's power tariffs", "url": "https://www.livemint.com/Politics/r6pfNXjJMHYev5sh9R9awK/Sheila-Dikshit-on-Delhis-power-tariffs.html", "date": "2013-12-03", "key_figure": "Deloitte analysis: only Maharashtra, West Bengal and Madhya Pradesh had higher retail tariffs than Delhi in 2013; Mint verdict: 'She is wrong about the first but right about the second'" },
      { "type": "news", "publisher": "Daily Mail India", "title": "Sheila Dikshit claims hike in electricity tariff is due to 24-hour supply", "url": "https://www.dailymail.com/indiahome/indianews/article-2301351/Sheila-Dikshit-claims-hike-electricity-tariff-24-hour-supply.html", "date": "2013-03-01", "key_figure": "Dikshit defended tariff levels while linking bills to uninterrupted supply" }
    ],
    "govt_response": [
      { "title": "Claim Check: Sheila Dikshit on Delhi's power tariffs - Mint", "url": "https://www.livemint.com/Politics/r6pfNXjJMHYev5sh9R9awK/Sheila-Dikshit-on-Delhis-power-tariffs.html", "summary": "Mint found Dikshit was wrong that Delhi's tariffs were the lowest among cities, but right that the Delhi Electricity Regulatory Commission, not the government, decides tariffs." }
    ],
    "chart": null,
    "analysis": "Dikshit made the tariff claim at multiple venues in 2013, including a rally on 1 December, according to Mint's claim check. She also said tariffs could not be changed or amended by the government.\n\nMint's analysis, based on a Deloitte comparison of 2013 retail tariffs for a 300 kWh monthly consumption on a 4 kW connection, found that only Maharashtra, West Bengal and Madhya Pradesh had higher tariffs than Delhi. It concluded she was wrong on the 'lowest tariffs' point but right that the DERC sets tariffs.\n\nThe claim that Delhi's tariffs were the lowest among cities is not supported by the tariff comparison, though the procedural point about the regulator was correct.",
    "confidence": "medium",
    "review_status": "draft",
    "last_reviewed": "2026-10-17",
    "notes": "The Daily Mail article was seen in search results and was not fetched directly; its date is approximate (early 2013). The Mint claim check was read directly."
  },
  {
    "id": "inc-jairam-2011-tiger-census",
    "speaker": "Jairam Ramesh",
    "party": "INC",
    "role": "Union Minister of Environment and Forests",
    "level": "central",
    "state": null,
    "date": "2011-03-28",
    "venue": "New Delhi (release of the report 'Tiger Estimate in India')",
    "language": "en",
    "quote_original": "",
    "quote_english": "The 2010 National Tiger Assessment estimated the total population of wild tigers in India at 1,706.",
    "quote_is_verbatim": false,
    "claim_type": "statistic",
    "deadline": null,
    "verdict": "true",
    "summary": "The Ministry of Environment and Forests, under Jairam Ramesh, released the 2010 National Tiger Assessment which estimated 1,706 wild tigers; the 2014 assessment reported 2,226 tigers, an increase of about 30.5 per cent.",
    "topics": ["environment"],
    "media": [],
    "transcript_sources": [
      { "title": "Ministry of Environment and Forests, 'Tiger Estimate in India' 2010 (report released 28 March 2011, archived)", "url": "https://web.archive.org/web/20110612082807/http://moef.nic.in/downloads/public-information/tiger-brochure.pdf" }
    ],
    "evidence": [
      { "type": "govt_data", "publisher": "Ministry of Environment and Forests", "title": "Tiger Estimate in India (2010 National Tiger Assessment)", "url": "https://web.archive.org/web/20110612082807/http://moef.nic.in/downloads/public-information/tiger-brochure.pdf", "date": "2011-03-28", "key_figure": "1,706 wild tigers estimated in 2010" },
      { "type": "index", "publisher": "Wikipedia (compiling MoEF/NTCA/WII data)", "title": "Project Tiger - tiger population", "url": "https://en.wikipedia.org/wiki/Project_Tiger", "date": "2022-01-01", "key_figure": "1,706 in 2010; 2,226 in 2014 (+30.5 per cent); 2,967 (average) in 2018" }
    ],
    "govt_response": [
      { "title": "Project Tiger - tiger population", "url": "https://en.wikipedia.org/wiki/Project_Tiger", "summary": "The Ministry of Environment and Forests reported the wild tiger population at 2,226 in 2014, an increase of 30.5 per cent over the 2010 estimate." }
    ],
    "chart": null,
    "analysis": "The 2010 National Tiger Assessment, released by the Ministry of Environment and Forests on 28 March 2011, estimated India's wild tiger population at 1,706, using camera-trap and sign-survey methods introduced in 2006.\n\nThe subsequent 2014 assessment reported 2,226 tigers, an increase of about 30.5 per cent over the 2010 figure, and later cycles reported further increases.\n\nThe figure of 1,706 released in 2011 is consistent with the subsequent government estimates.",
    "confidence": "low",
    "review_status": "draft",
    "last_reviewed": "2026-10-17",
    "notes": "A direct news quote from Jairam Ramesh announcing the figure could not be confirmed with an openable URL, so the government report 'Tiger Estimate in India' is listed as the source; the archived PDF did not render in the fetcher (only the Wayback wrapper loaded), and the 1,706/2,226 figures were confirmed from the Wikipedia 'Project Tiger' page."
  }
]
```
