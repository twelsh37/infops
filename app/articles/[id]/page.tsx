import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

// Define proper types for our articles
interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
  citations?: Array<{
    number: number;
    url: string;
  }>;
}

// Update the articles data
const articles: Article[] = [
  {
    id: 1,
    title: "# The Evolution of Russian Cyber Warfare",
    description: "*From the 2007 Estonia Incidents to Modern Hybrid Conflict Strategies*",
    content: `
## Introduction

The landscape of modern warfare has dramatically shifted in the 21st century, with cyber operations playing an increasingly central role. Russia's approach to cyber warfare has been particularly noteworthy, evolving from basic DDoS attacks to sophisticated hybrid warfare strategies.

## The Estonia Incident (2007)

The 2007 cyberattacks on Estonia marked a significant turning point in cyber warfare history. Following a dispute over the relocation of a Soviet-era war memorial, Estonia faced a massive wave of cyber attacks that targeted:

- Government websites
- Banking systems
- Media outlets
- Critical infrastructure

## Modern Developments

### Hybrid Warfare Strategy

Russia's current approach combines:

1. Traditional cyber attacks
2. Information warfare
3. Social media manipulation
4. Strategic messaging

### Key Components

- **Infrastructure Targeting**: Focus on critical systems
- **Information Operations**: Coordinated disinformation campaigns
- **Technical Sophistication**: Advanced persistent threats (APTs)

## Conclusion

The evolution of Russian cyber capabilities demonstrates the increasing complexity of modern warfare and the need for robust cyber defense strategies.

### The "Living Off the Land" Paradigm  
To evade detection, Russian hackers are shifting toward *living off the land* (LotL) tactics, which exploit legitimate software tools like PowerShell and Microsoft Office macros. This approach, observed in the 2019 Georgia cyberattacks attributed to GRU Unit 74455, allows attackers to blend into normal network activity while establishing persistent access[14][16]. Future LotL operations may target cloud environments and 5G networks, exploiting supply chain vulnerabilities in third-party vendors[11][12].`,
    citations: [
      {
        number: 1,
        url: "https://irregularwarfare.org/articles/independence-through-information-war-chechnyas-story-and-ukraine-connection/",
      },
      {
        number: 2,
        url: "https://warroom.armywarcollege.edu/articles/enduring-impact/",
      },
      // ... add all other citations
    ],
  },
  {
    id: 2,
    title: "# The Evolution of Russian Cyber Warfare:",
    description: "## From Chechnya and Georgia to Future Frontiers",
    content: `# The Evolution of Russian Cyber Warfare: From Chechnya and Georgia to Future Frontiers  

The use of cyber warfare by Russia has evolved significantly since its early applications in the Chechen and Georgian conflicts, reflecting broader shifts in military doctrine, technological adaptation, and geopolitical strategy. In the First and Second Chechen Wars (1994–1996, 1999–2009), Russia grappled with asymmetric information campaigns waged by Chechen separatists, prompting Moscow to develop nascent cyber capabilities to counter narrative and technical threats[1][5][13]. By the 2008 Russo-Georgian War, Russia had begun integrating cyber operations into hybrid warfare strategies, blending disinformation, distributed denial-of-service (DDoS) attacks, and electronic warfare to destabilize adversaries[2][6][10]. Today, as seen in Ukraine and beyond, Russian cyber operations have matured into a multifaceted instrument of state power, targeting civilian infrastructure, military systems, and democratic institutions[3][7][12]. Looking ahead, advancements in artificial intelligence (AI), "living off the land" techniques, and attacks on industrial control systems (ICS) suggest a future where cyber operations will play an increasingly decisive role in Russia's geopolitical ambitions[11][12][16].  

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

Russia's cyber warfare trajectory—from Chechnya's ad-hoc information campaigns to Ukraine's AI-augmented hybrid conflicts—reveals a persistent pattern of innovation tempered by strategic overreach. While Moscow has mastered the *tactics* of cyber disruption, its *countervalue* fixation often neglects the operational synergies required for lasting success. For democracies, the lessons are clear: resilience requires proactive cyber defense, public-private collaboration, and international norms to deter escalation. As Russian cyber capabilities evolve, so too must global defenses, recognizing that the next major conflict may be decided not on battlefields, but in the invisible architecture of cyberspace.

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

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find(
    (article) => article.id === parseInt(params.id)
  );

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div>
          <ReactMarkdown>{article.title}</ReactMarkdown>
        </div>
        <div className="text-gray-600 mb-8">
          <ReactMarkdown>{article.description}</ReactMarkdown>
        </div>
        <div>
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({node, ...props}) => <h1 className="text-4xl font-bold mb-4" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-3xl font-bold mt-8 mb-4" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-2xl font-bold mt-6 mb-3" {...props} />,
              p: ({node, ...props}) => <p className="mb-4" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc ml-6 mb-4" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal ml-6 mb-4" {...props} />,
              blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-gray-300 pl-4 italic" {...props} />,
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>

        {/* Citations Section */}
        {article.citations && article.citations.length > 0 && (
          <div className="mt-8 border-t pt-4">
            <h2 className="text-2xl font-bold mb-4">Citations</h2>
            <div className="space-y-2">
              {article.citations.map(({ number, url }) => (
                <div key={number} className="flex gap-4">
                  <span className="font-mono">[{number}]</span>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 break-all"
                  >
                    {url}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
