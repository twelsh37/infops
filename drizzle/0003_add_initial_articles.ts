import { Sql } from "drizzle-orm";
import { articles } from "../server/db/schema";
import { Article } from "../server/db/schema";

export async function up(sql: Sql) {
  const articlesData: Article[] = [
    {
      id: 1,
      title: "# The Evolution of Russian Cyber Warfare",
      description:
        "## From the 2007 Estonia Incidents to Modern Hybrid Conflict Strategies",
      content: `The 2007 cyberattacks against Estonia marked a watershed moment in modern warfare, demonstrating how digital tools could be weaponized to disrupt national infrastructure, destabilize societies, and project geopolitical influence. This incident, triggered by Estonia's relocation of a Soviet-era monument, revealed the Kremlin's willingness to leverage cyber operations as part of a broader hybrid warfare strategy. Since then, Russia has refined and replicated these tactics across multiple conflicts, from Georgia in 2008 to Ukraine's ongoing struggle against invasion. This report examines the 2007 Estonia cyber incidents, analyzes their implications for international security, and traces the evolution of Russian cyber strategies over the past two decades.  

    ---

    ## The 2007 Cyberattacks on Estonia: A Blueprint for Modern Hybrid Warfare  

    ### Context and Catalysts  
    The immediate catalyst for the 2007 attacks was Estonia's decision to relocate the Bronze Soldier of Tallinn, a Soviet World War II memorial, from the city center to a military cemetery. This move sparked protests among Estonia's ethnic Russian minority and triggered diplomatic tensions with Moscow[1][7]. While physical riots erupted in Tallinn, a far more insidious threat emerged in cyberspace. Between April 27 and May 18, 2007, coordinated distributed denial-of-service (DDoS) attacks overwhelmed Estonian government portals, financial institutions, media outlets, and critical services. At their peak, these attacks reached 4 million packets per second—an unprecedented scale at the time—rendering online banking, parliamentary communications, and news dissemination temporarily inoperable[1][12].  

    ### Nature and Impact of the Attacks  
    The attacks employed botnets—networks of hijacked computers—to flood Estonian servers with traffic. Notably, the campaign evolved in sophistication:  
    1. **Phase One**: Defacement of political websites, including a forged apology letter from Prime Minister Andrus Ansip on his party's website[2][7].  
    2. **Phase Two**: Sustained DDoS strikes targeting 58 domains simultaneously, including the Estonian Parliament, banks, and telecommunications providers[5][10].  

    While the economic impact was modest (estimated at $1.3 million), the psychological effect proved profound. As Liisa Past, a cybersecurity expert involved in Estonia's response, noted: "Cyber aggression creates confusion while staying below the threshold of armed conflict"[12]. The attacks exposed vulnerabilities in digital infrastructure and underscored the challenges of attributing cyber operations—Russian officials denied involvement despite clear technical evidence linking the attacks to Russian IP addresses and language[7][10].  

    ### Responses and Lessons Learned  
    Estonia's countermeasures set precedents for cyber defense:  
    - **Technical**: Blocking foreign IP addresses and collaborating with NATO's emerging cyber defense experts[12].  
    - **Institutional**: Establishing the NATO Cooperative Cyber Defence Centre of Excellence (CCDCOE) in Tallinn, which later produced the *Tallinn Manual* governing cyber conflict under international law[7][10].  
    - **Strategic**: Prioritizing digital resilience through nationwide e-governance reforms and public-private partnerships[3][12].  

    The incident demonstrated that even small states could develop robust cyber defenses, but it also revealed NATO's unpreparedness to classify cyberattacks as acts warranting collective defense under Article 5[12].  

    ---

    ## Evolution of Russian Cyber Warfare Tactics Post-2007  

    ### Georgia 2008: Cyber Operations as a Prelude to Invasion  
    Russia's invasion of Georgia in August 2008 featured synchronized cyber and kinetic strikes. Prior to tank movements, DDoS attacks crippled Georgian government websites, media, and financial systems. The hacker group "StopGeorgia.ru" publicly listed targets, including the National Bank of Georgia, while pro-Russian forums distributed attack tools to volunteers[2][8]. This marked the first documented instance of cyber operations directly supporting military objectives, blurring the lines between state and non-state actors[6][8].  

    ### Ukraine 2014–2022: Escalation and Integration with Kinetic Warfare  
    The annexation of Crimea and subsequent Donbas conflict saw Russia refine its hybrid tactics:  
    - **2015 Power Grid Attacks**: The BlackEnergy malware disrupted Ukraine's energy infrastructure, leaving 230,000 residents without electricity—a landmark in critical infrastructure targeting[8][9].  
    - **2017 NotPetya**: Masquerading as ransomware, this wiper malware caused $10 billion in global damages, though its primary target was Ukrainian businesses. NotPetya exemplified Russia's willingness to accept collateral damage for strategic gains[8][9].  
    - **2022 Full-Scale Invasion**: Cyberattacks preceded tank columns, with wiper malware (e.g., HermeticWiper) targeting government systems. However, Ukraine's improved defenses—bolstered by Western partnerships—limited the impact, underscoring the importance of preemptive cyber resilience[9][13].  

    ### Global Implications and Proxies  
    Russia has increasingly relied on quasi-independent groups like Killnet and Sandworm to maintain plausible deniability. For example, Killnet claimed responsibility for the 2022 DDoS attacks on Estonia—the largest since 2007—which coincided with the removal of Soviet monuments[4][5]. These groups operate within a "patriotic hacker" ecosystem, receiving tacit state approval while avoiding direct command links[6][9].  

    ---

    ## Broader Strategic Objectives and Methods  

    ### Hybrid Warfare and Information Confrontation  
    Russian doctrine views cyber operations as part of *informatsionnoye protivoborstvo* (information confrontation), which seeks to shape perceptions and erode adversaries' political will. This integrates:  
    - **Cyber Effects**: Disrupting infrastructure and sowing chaos.  
    - **Disinformation**: Amplifying societal divisions through state media (RT, Sputnik) and social media bots[3][6].  
    - **Economic Pressure**: As seen in Estonia's 1990s gas cutoff attempts and Ukraine's pre-2014 trade wars[3][8].  

    ### Coordination with Traditional Military Tools  
    The 2008 Georgia conflict established a template: cyber operations weaken command-and-control systems before conventional forces advance. In Ukraine, this evolved into "cyber reconnaissance," where hackers map critical infrastructure for subsequent physical strikes[8][9].  

    ---

    ## International Responses and Cyber Defense Developments  

    ### NATO and EU Initiatives  
    - **CCDCOE**: Developed the *Tallinn Manual 2.0*, extending international law to peacetime cyber operations[7][10].  
    - **EU Cyber Defence Policy Framework**: Promotes information-sharing and rapid response mechanisms among member states[3][10].  
    - **Joint Cyber Commands**: Nations like Estonia now integrate cyber units into military structures, enabling real-time coordination during attacks[12].  

    ### The Challenge of Attribution and Deterrence  
    Persistent attribution challenges—exemplified by Russia's use of proxies—have hindered NATO's ability to impose costs. However, improved forensic capabilities and frameworks like the EU's Cyber Diplomacy Toolbox enable targeted sanctions against hacker entities[6][9].  

    ---

    ## Analysis of Effectiveness and Consequences  

    ### Short-term Disruption vs. Long-term Resilience  
    While Russia's cyber campaigns inflict immediate harm, they often fail to achieve strategic objectives. The 2007 Estonia attacks backfired by spurring NATO cyber investments, much as Ukraine's defenses hardened post-2014[9][12]. Carnegie Endowment researchers note that "countervalue" cyber strikes frequently strengthen target resilience, creating a "digital rally-round-the-flag effect"[9].  

    ### Escalation Risks and Normative Shifts  
    Russia's actions have prompted debates about redefining armed attacks in the cyber realm. The 2022 UN resolution condemning Russia's aggression against Ukraine explicitly referenced cyber harm, signaling growing recognition of cyber operations as tools of warfare[9][13].  

    ---

    ## Conclusion and Future Outlook  

    The 2007 Estonia cyberattacks revealed the transformative potential of digital warfare, but they also exposed its limitations. Russia's repeated use of these tactics—from Georgia to Ukraine—demonstrates a consistent pattern of hybrid aggression, blending cyber, kinetic, and informational tools. However, the strategic outcomes have been mixed: while sowing temporary chaos, these operations often galvanize international opposition and accelerate defensive innovations.  

    Looking ahead, the proliferation of AI-driven cyber tools and 5G vulnerabilities will test existing frameworks. Yet, Estonia's journey from victim to cyber defense exemplar offers a roadmap: invest in resilience, foster alliances, and recognize that in the digital age, security begins not at the border but at the server. As the *Tallinn Manual* co-author Michael Schmitt asserts, "The law of armed conflict applies to cyberspace, but only through vigilance can we ensure it is respected"[7][10].  

    The lessons of 2007 remain urgent. In an era where a single line of code can paralyze a nation, the line between war and peace grows ever thinner—and the need for collective cyber defense ever clearer.

    `,
      citations: [
        {
          number: 1,
          url: "https://www.cfr.org/cyber-operations/estonian-denial-service-incident",
        },
        {
          number: 2,
          url: "https://www.armyupress.army.mil/Books/Browse-Books/iBooks-and-EPUBs/-Cyber_Crucible/",
        },
        {
          number: 3,
          url: "https://cepa.org/comprehensive-reports/the-evolution-of-russian-hybrid-warfare-estonia/",
        },
        {
          number: 4,
          url: "https://www.euronews.com/next/2022/08/18/estonia-hit-by-most-extensive-cyberattack-since-2007-amid-tensions-with-russia-over-ukrain",
        },
        {
          number: 5,
          url: "https://en.wikipedia.org/wiki/Cyberwarfare_by_Russia",
        },
        {
          number: 6,
          url: "https://stratcomcoe.org/cuploads/pfiles/Nato-Cyber-Report_11-06-2021-4f4ce.pdf",
        },
        {
          number: 7,
          url: "https://en.wikipedia.org/wiki/2007_cyberattacks_on_Estonia",
        },
        {
          number: 8,
          url: "https://www.csis.org/analysis/cyber-operations-during-russo-ukrainian-war",
        },
        {
          number: 9,
          url: "https://carnegieendowment.org/research/2024/02/russias-countervalue-cyber-approach-utility-or-futility",
        },
        {
          number: 10,
          url: "https://stratcomcoe.org/publications/hybrid-threats-2007-cyber-attacks-on-estonia/86",
        },
        {
          number: 11,
          url: "https://www.hybridcoe.fi/wp-content/uploads/2024/05/20240530-Hybrid-CoE-Working-Paper-32-Russias-hybrid-threat-tactics-WEB.pdf",
        },
        {
          number: 12,
          url: "https://www.bbc.co.uk/news/39655415",
        },
        {
          number: 13,
          url: "https://www.bbc.com/future/article/20220128-the-country-inoculating-against-disinformation",
        },
        {
          number: 14,
          url: "https://ccdcoe.org/uploads/2018/10/Ottis2008_AnalysisOf2007FromTheInformationWarfarePerspective.pdf",
        },
        {
          number: 15,
          url: "https://www.jstor.org/stable/26463926",
        },
        {
          number: 16,
          url: "https://ccdcoe.org/library/publications/analysis-of-the-2007-cyber-attacks-against-estonia-from-the-information-warfare-perspective/",
        },
        {
          number: 17,
          url: "http://www.jstor.org/stable/resrep16828.19",
        },
        {
          number: 18,
          url: "https://www.npr.org/2024/09/12/nx-s1-5105974/estonia-joins-9-other-nations-in-exposing-russias-cyber-tactics",
        },
        {
          number: 19,
          url: "https://www.euractiv.com/section/defence/news/estonia-says-russian-military-intelligence-behind-cyber-attacks/",
        },
        {
          number: 20,
          url: "https://www.ncsc.gov.uk/news/uk-allies-uncover-russian-military-carrying-out-cyber-attacks-digital-sabotage",
        },
        {
          number: 21,
          url: "https://www.jstor.org/stable/10.2307/resrep21140.9",
        },
        {
          number: 22,
          url: "https://vm.ee/en/news/estonia-names-russias-military-intelligence-first-ever-attribution-cyberattacks",
        },
      ],
    },
    {
      id: 2,
      title: "# The Evolution of Russian Cyber Warfare",
      description: "## From Chechnya and Georgia to Future Frontiers",
      content: `The use of cyber warfare by Russia has evolved significantly since its early applications in the Chechen and Georgian conflicts, reflecting broader shifts in military doctrine, technological adaptation, and geopolitical strategy. In the First and Second Chechen Wars (1994–1996, 1999–2009), Russia grappled with asymmetric information campaigns waged by Chechen separatists, prompting Moscow to develop nascent cyber capabilities to counter narrative and technical threats[1][5][13]. By the 2008 Russo-Georgian War, Russia had begun integrating cyber operations into hybrid warfare strategies, blending disinformation, distributed denial-of-service (DDoS) attacks, and electronic warfare to destabilize adversaries[2][6][10]. Today, as seen in Ukraine and beyond, Russian cyber operations have matured into a multifaceted instrument of state power, targeting civilian infrastructure, military systems, and democratic institutions[3][7][12]. Looking ahead, advancements in artificial intelligence (AI), "living off the land" techniques, and attacks on industrial control systems (ICS) suggest a future where cyber operations will play an increasingly decisive role in Russia's geopolitical ambitions[11][12][16].  

    ---

    ## The Chechen Wars: Information Asymmetry and Russia's Awakening  

    ### The First Chechen War and the Rise of Chechen Information Warfare  
    The First Chechen War (1994–1996) marked a turning point in modern conflict, as Chechen separatists leveraged emerging internet technologies to counter Russian military dominance. Lacking conventional resources, Chechen leaders prioritized information warfare, funding independent media outlets like *Radio Free Caucasus* and establishing information centers in Poland and Latvia to broadcast their narrative globally[1][5]. Chechen operatives facilitated international journalists' access to conflict zones, often paying their travel expenses to ensure coverage of Russian atrocities[1][13]. By 1999, Chechen websites like *Kavkaz-Center* disseminated graphic images of civilian casualties and battlefield victories, undermining Moscow's claims of a "counter-terrorist operation"[5][13]. These efforts exploited Russia's reluctance to engage in the information space, as Prime Minister Vladimir Putin later admitted: "We surrendered this terrain some time ago... but now we are entering the game again"[5][13].  

    ### The Second Chechen War: Russia's Counter-Information Strategy  
    The Second Chechen War (1999–2009) saw Russia adopt a more coordinated approach to information control. State-aligned media outlets like NTV and *Ekho Moskvy* were mobilized to reframe the conflict as a struggle against Islamic terrorism, while cyber operations targeted Chechen websites hosting anti-Russian propaganda[1][5]. Russian security services allegedly hacked *Kavkaz-Center* during the 2002 Moscow theater siege, temporarily silencing Chechen narratives during a critical moment[5][13]. Concurrently, Russia intensified censorship, restricting journalist access to conflict zones and prosecuting dissent under new anti-terrorism laws[1][5]. Despite these measures, Chechen groups adapted, using encrypted communications and diaspora networks to sustain their campaigns—a precursor to modern decentralized cyber resistance[1][13].  

    ---

    ## The 2008 Russo-Georgian War: Hybrid Warfare and Cyber Escalation  

    ### Cyber Operations as a Force Multiplier  
    The five-day Russo-Georgian War demonstrated Russia's growing sophistication in integrating cyber operations with conventional military tactics. Prior to the invasion of South Ossetia, Russian-aligned hackers launched DDoS attacks against Georgian government websites, disrupting communications between August 7–10, 2008[2][6][10]. Over 54 websites—including those of the presidency, parliament, and National Bank—were defaced or disabled, with hackers superimposing images comparing Georgian President Mikheil Saakashvili to Adolf Hitler[6][10]. These attacks coincided with kinetic strikes on Georgian infrastructure, creating confusion and delaying mobilization efforts[2][6]. Notably, Russian cyber operatives manipulated online polls on CNN and routed Georgian internet traffic through Russian servers, amplifying narratives of Georgian aggression[2][10].  

    ### Institutionalizing Cyber-Information Synergy  
    The Georgian conflict underscored Russia's recognition of cyberspace as a "continuation of politics by other means." Military theorists like Valery Gerasimov later codified these lessons into the *Gerasimov Doctrine*, which emphasized the blurred lines between war and peace and the primacy of non-military tools—including cyber and information operations—to achieve strategic aims[4][17]. Post-2008 reforms saw the creation of specialized cyber units within the GRU (Main Intelligence Directorate) and FSB (Federal Security Service), laying the groundwork for future campaigns in Ukraine and beyond[8][9][14].  

    ---

    ## Post-2014 Evolution: From Ukraine to Global Ambitions  

    ### Cyber-Physical Convergence in the Donbas and Crimea  
    Russia's 2014 annexation of Crimea and intervention in eastern Ukraine marked a qualitative leap in cyber warfare. Operations extended beyond DDoS attacks to include destructive malware like *BlackEnergy* (used against Ukraine's power grid in 2015) and *NotPetya* (a 2017 ransomware variant that caused $10 billion in global damages)[3][7][12]. These attacks targeted critical infrastructure, blending cyber and electronic warfare (EW) to degrade Ukraine's energy, transportation, and financial systems[3][7]. By 2022, Russian cyber units had adopted AI-driven tools to optimize targeting, while Ukrainian defenses—bolstered by Western partnerships—demonstrated unprecedented resilience, leading to a digital stalemate[7][12][16].  

    ### The Kremlin's Countervalue Doctrine  
    Russian cyber strategy has increasingly prioritized *countervalue* operations—attacks on civilian infrastructure to erode public morale—over *counterforce* military targets. In Ukraine, this has involved relentless assaults on power grids, hospitals, and media outlets, aiming to fracture societal cohesion[12][14]. However, as in Chechnya and Georgia, these efforts have often backfired, galvanizing Ukrainian resistance and international support[12][16]. Analysts note that Russia's fixation on psychological impact reflects a Soviet-era preference for coercion over precision, a legacy that limits its effectiveness in the cyber domain[12][14].  

    ---

    ## Future Trajectories: AI, Infrastructure Warfare, and Beyond  

    ### AI-Enabled Cyber Operations  
    By 2025, Russian cyber units are expected to deploy AI algorithms for autonomous target identification, malware optimization, and disinformation generation. Deepfake technology, already weaponized in limited social engineering attacks, could enable impersonation of military commanders or political leaders to sow confusion during crises[11][12]. AI-driven botnets may amplify propaganda campaigns, exploiting social media algorithms to polarize Western electorates[11][16].  

    ### Critical Infrastructure as a Battleground  
    Russia's *Integrated Cyber Command* (a speculated GRU-FSB joint entity) is likely refining techniques to disrupt industrial control systems (ICS) in NATO states. Recent incidents, such as the 2021 Colonial Pipeline ransomware attack, demonstrate the vulnerability of energy networks to cyber-physical sabotage[3][11]. Future campaigns could target water treatment plants, gas pipelines, or financial markets, leveraging ransomware-as-a-service (RaaS) models to maintain plausible deniability[11][12].  

    ### The "Living Off the Land" Paradigm  
    To evade detection, Russian hackers are shifting toward *living off the land* (LotL) tactics, which exploit legitimate software tools like PowerShell and Microsoft Office macros. This approach, observed in the 2019 Georgia cyberattacks attributed to GRU Unit 74455, allows attackers to blend into normal network activity while establishing persistent access[14][16]. Future LotL operations may target cloud environments and 5G networks, exploiting supply chain vulnerabilities in third-party vendors[11][12].  

    ---

    ## Conclusion: Adapting to the New Normal  

    Russia's cyber warfare trajectory—from Chechnya's ad-hoc information campaigns to Ukraine's AI-augmented hybrid conflicts—reveals a persistent pattern of innovation tempered by strategic overreach. While Moscow has mastered the *tactics* of cyber disruption, its *countervalue* fixation often neglects the operational synergies required for lasting success. For democracies, the lessons are clear: resilience requires proactive cyber defense, public-private collaboration, and international norms to deter escalation. As Russian cyber capabilities evolve, so too must global defenses, recognizing that the next major conflict may be decided not on battlefields, but in the invisible architecture of cyberspace.`,
      citations: [
        {
          number: 1,
          url: "https://irregularwarfare.org/articles/independence-through-information-war-chechnyas-story-and-ukraine-connection/",
        },
        {
          number: 2,
          url: "https://warroom.armywarcollege.edu/articles/enduring-impact/",
        },
        {
          number: 3,
          url: "https://www.cyber.gc.ca/sites/default/files/cyber-threat-activity-associated-russian-invasion-ukraine-e.pdf",
        },
        {
          number: 4,
          url: "https://stratcomcoe.org/cuploads/pfiles/Nato-Cyber-Report_11-06-2021-4f4ce.pdf",
        },
        {
          number: 5,
          url: "https://csl.armywarcollege.edu/SLET/mccd/CyberSpacePubs/Cyberspace%20and%20the%20Changing%20Nature%20of%20Warfare.pdf",
        },
        {
          number: 6,
          url: "https://mwi.westpoint.edu/understanding-cyberwarfare-lessons-russia-georgia-war/",
        },
        {
          number: 7,
          url: "https://www.csis.org/analysis/cyber-operations-during-russo-ukrainian-war",
        },
        {
          number: 8,
          url: "https://cepa.org/comprehensive-reports/russian-cyberwarfare-unpacking-the-kremlins-capabilities/",
        },
        {
          number: 9,
          url: "https://en.wikipedia.org/wiki/Cyberwarfare_by_Russia",
        },
        {
          number: 10,
          url: "https://en.wikipedia.org/wiki/Cyberattacks_during_the_Russo-Georgian_War",
        },
        {
          number: 11,
          url: "https://www.cyberdefensemagazine.com/the-future-of-cybersecurity-predictions-for-2025-and-beyond/",
        },
        {
          number: 12,
          url: "https://carnegieendowment.org/research/2024/02/russias-countervalue-cyber-approach-utility-or-futility",
        },
        {
          number: 13,
          url: "https://www.ccdcoe.org/uploads/2018/10/InformationTroopsARussianCyberCommand-Giles.pdf",
        },
        {
          number: 14,
          url: "https://www.justsecurity.org/69019/russian-cyber-attacks-against-georgia-public-attributions-and-sovereignty-in-cyberspace/",
        },
        {
          number: 15,
          url: "https://www.keyterraincyber.com/russian-information-warfare-in-chechnya/",
        },
        {
          number: 16,
          url: "https://irregularwarfarecenter.org/publications/perspectives/the-devil-went-down-to-georgia-executing-cyberspace-resistance-to-counter-russia/",
        },
        {
          number: 17,
          url: "https://warontherocks.com/2018/09/russian-performance-in-the-russo-georgian-war-revisited/",
        },
        {
          number: 18,
          url: "https://www.baks.bund.de/de/arbeitspapiere/2015/russias-hybrid-warfare-a-success-in-propaganda",
        },
        {
          number: 19,
          url: "https://www.rand.org/content/dam/rand/pubs/monograph_reports/MR1289/RAND_MR1289.pdf",
        },
        {
          number: 20,
          url: "https://cyberlaw.ccdcoe.org/wiki/Georgia-Russia_conflict_(2008)",
        },
        {
          number: 21,
          url: "https://www.jstor.org/stable/10.2307/resrep21140.9",
        },
        {
          number: 22,
          url: "https://www.researchgate.net/publication/230898147_The_2008_Russian_Cyber-Campaign_Against_Georgia",
        },
        {
          number: 23,
          url: "https://post.parliament.uk/war-and-the-future-of-war/",
        },
        {
          number: 24,
          url: "https://www.embroker.com/blog/cyber-attack-statistics/",
        },
        {
          number: 25,
          url: "https://www.dni.gov/index.php/gt2040-home/gt2040-deeper-looks/future-of-the-battlefield",
        },
        {
          number: 26,
          url: "https://www.rand.org/content/dam/rand/pubs/research_reports/RR2800/RR2849z1/RAND_RR2849z1.pdf",
        },
        {
          number: 27,
          url: "https://ccdcoe.org/uploads/2020/05/CyCon_2020_8_Lilly_Cheravitch.pdf",
        },
        {
          number: 28,
          url: "https://core.ac.uk/download/pdf/36699567.pdf",
        },
        {
          number: 29,
          url: "https://www.rferl.org/a/Georgian_Government_Accuses_Russia_Of_Cyberwar/1190477.html",
        },
        {
          number: 30,
          url: "https://cybermagazine.com/articles/top-10-cybersecurity-predictions-for-2025",
        },
        {
          number: 31,
          url: "https://cloud.google.com/security/resources/cybersecurity-forecast",
        },
        {
          number: 32,
          url: "https://crestresearch.ac.uk/download/2405/19-020-01.pdf",
        },
        {
          number: 33,
          url: "https://www.acigjournal.com/The-Use-of-Cyber-Tools-by-the-Russian-Military-Lessons-from-the-War-against-Ukraine,190142,0,2.html",
        },
      ],
    },
    {
      id: 3,
      title: "# Article 3",
      description: "*Brief description of article 3.*",
      content: "# Article 3\n\nThis is article 3's content in markdown...",
      citations: [],
    },
  ];

  try {
    // Insert the new articles
    await sql.insert(articles).values(articlesData as any); // Type assertion needed here

    console.log("Seeding complete!");
  } catch (error) {
    console.error("Error seeding:", error);
  }
}

export async function down(sql: Sql): Promise<void> {
  await sql.delete(articles);
} 
