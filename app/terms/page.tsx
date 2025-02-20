"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

// Define the type for each section
interface TermsSection {
  title: string;
  content: React.ReactNode;
}

const Terms = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  // Define the terms content
  const termsContent: TermsSection[] = [
    {
      title: "1. Definitions and Interpretation",
      content: (
        <div>
          <p>
            <strong>1.1</strong> In these Terms and Conditions, unless the
            context otherwise requires, the following expressions have the
            following meanings:
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border p-2 w-1/4">Expression</th>
                  <th className="border p-2">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Applicable Laws</td>
                  <td className="border p-2">
                    means all laws, statutes, regulations, and similar
                    instruments from time to time in force applicable to the
                    Parties, the Services, and to the Contract;
                  </td>
                </tr>
                {/* Add all other definitions here */}
                <tr>
                  <td className="border p-2">Business Day</td>
                  <td className="border p-2">
                    means, any day (other than Saturday or Sunday) on which
                    ordinary banks are open for their full range of normal
                    business in The United Kingdom;
                  </td>
                </tr>
                {/* Continue with all other definitions... */}
              </tbody>
            </table>
          </div>
          <div className="mt-4 space-y-2">
            <p>
              <strong>1.2</strong> Any reference to &quot;writing&quot;, and any
              similar expression, includes a reference to any communication sent
              by email.
            </p>
            <p>
              <strong>1.3</strong> Unless expressly stated otherwise,
              legislation or a provision thereof is a reference to that
              legislation or provision as amended or re-enacted from time to
              time.
            </p>
            {/* Add all other interpretation clauses */}
          </div>
        </div>
      ),
    },
    {
      title: "2. Basis of Contract",
      content: (
        <div className="space-y-2">
          <p>
            <strong>2.1</strong> An Order shall constitute a contractual offer
            by the Client to procure Services from the Service Provider in
            accordance with and on the basis of these Terms and Conditions.
          </p>
          <p>
            <strong>2.2</strong> An Order shall be deemed to be accepted by the
            Service Provider upon the Service Provider&apos;s issuing its
            acceptance of that Order in writing.
          </p>
          {/* Add all other contract basis clauses */}
        </div>
      ),
    },
    {
      title:
        "3. Provision of the Services and Service Provider&apos;s Obligations",
      content: (
        <div className="space-y-2">
          <p>
            <strong>3.1</strong> With effect from the Commencement Date, the
            Service Provider shall, throughout the term of the Contract, provide
            the Services to the Client.
          </p>
          <p>
            <strong>3.2</strong> The Service Provider shall ensure that the
            Services conform at all times with the Specification in all material
            respects.
          </p>
          <p>
            <strong>3.3</strong> The Service Provider shall provide the Services
            with the best skill and care, commensurate with prevailing standards
            in the IT sector in the United Kingdom.
          </p>
          <p>
            <strong>3.4</strong> The Service Provider shall use reasonable
            endeavours to meet any performance dates set out in the Order or as
            the Client may notify to the Service Provider from time to time.
            Such dates shall be estimates only, however, and time shall not be
            of the essence in the provision of the Services.
          </p>
          <p>
            <strong>3.5</strong> The Service Provider shall act in accordance
            with all reasonable instructions issued by the Client provided that
            such instructions are compatible with the Specification.
          </p>
          <p>
            <strong>3.6</strong> The Service Provider shall ensure that any and
            all of its personnel involved in the provision of the Services are
            suitably skilled, qualified, and experienced to perform the part(s)
            of the Services to which they are assigned.
          </p>
          <p>
            <strong>3.7</strong> The Service Provider shall provide the Service
            Provider Equipment, which shall include all equipment required for
            the provision of the Services.
          </p>
          <p>
            <strong>3.8</strong> In the event that any licences or consents are
            required to enable the Service Provider to provide the Services and
            use any required Service Provider Equipment, the Service Provider
            shall obtain the same before the date on which the provision of the
            Services is due to begin, and shall maintain the same throughout the
            term of the Contract.
          </p>
          <p>
            <strong>3.9</strong> The Service Provider shall use any Client
            Materials provided by the Client from time to time only to the
            extent reasonably necessary for and only for the purposes of the
            provision of the Services.
          </p>
          <p>
            <strong>3.10</strong> The Service Provider shall use any Client
            Equipment provided (or made available) by the Client from time to
            time only to the extent reasonably necessary for and only for the
            purposes of the provision of the Services.
          </p>
          <p>
            <strong>3.11</strong> In the event that the Client provides access
            to the Client&apos;s premises and any other facilities, the Service
            Provider shall use the same only to the extent reasonably necessary
            for and only for the purposes of the provision of the Services.
          </p>
        </div>
      ),
    },
    {
      title: "4. Client's Obligations",
      content: (
        <div className="space-y-2">
          <p>
            <strong>4.1</strong> The Client shall ensure that all information
            that it provides in the Order shall be complete and accurate.
          </p>
          <p>
            <strong>4.2</strong> The Client shall provide:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mt-2">
            <li>
              all co-operation that is reasonably required by the Service
              Provider to enable the Service Provider to provide the Services;
            </li>
            <li>
              any and all Client Materials that are agreed upon by the Parties
              or as otherwise reasonably required from time to time by the
              Service Provider;
            </li>
            <li>
              any and all Client Equipment (or access thereto) that is agreed
              upon by the Parties or as otherwise reasonably required;
            </li>
            <li>
              where required, access to and availability and use of the
              Client&apos;s premises and any other facilities.
            </li>
          </ol>
          <p>
            <strong>4.3</strong> The Client may from time to time issue
            reasonable instructions to the Service Provider in relation to the
            Service Provider&apos;s provision of the Services.
          </p>
          <p>
            <strong>4.4</strong> In the event that the Service Provider requires
            the decision, approval, consent, authorisation, or any other
            communication from the Client in order to continue with the
            provision of the Services, the Client shall provide the same in a
            reasonable and timely manner.
          </p>
          <p>
            <strong>4.5</strong> Any failure or delay in the provision of the
            Services by the Service Provider which results from the
            Client&apos;s failure or delay in complying with any of its
            obligations shall not be the responsibility or fault of the Service
            Provider.
          </p>
        </div>
      ),
    },
    {
      title: "5. Fees, Payment, and Records",
      content: (
        <div className="space-y-2">
          <p>
            <strong>5.1</strong> The Fees shall be set out in the Order. The
            Fees shall be the full and only consideration payable to the Service
            Provider with respect to its provision of the Services.
          </p>
          <p>
            <strong>5.2</strong> Unless the Parties agree otherwise in writing,
            the Fees shall include all costs and expenses incurred by the
            Service Provider.
          </p>
          <p>
            <strong>5.3</strong> The Service Provider shall invoice the Client
            upon the completion of the Services.
          </p>
          <p>
            <strong>5.4</strong> All payments required shall be made within 30
            Days of receipt of the relevant invoice by the Client.
          </p>
          <p>
            <strong>5.5</strong> All payments shall be made in UK Sterling in
            cleared funds to such bank in United Kingdom as the Service Provider
            may nominate in writing.
          </p>
          <p>
            <strong>5.6</strong> All sums payable by the Client under the
            Contract shall be exclusive of VAT.
          </p>
          <p>
            <strong>5.7</strong> The Service Provider shall maintain accurate
            records of all Fees charged to the Client.
          </p>
        </div>
      ),
    },
    {
      title: "6. Intellectual Property Rights",
      content: (
        <div className="space-y-2">
          <p>
            <strong>6.1</strong> The Client (and, where applicable, its
            licensors) shall retain ownership of the Intellectual Property
            Rights subsisting in any and all Client Materials.
          </p>
          <p>
            <strong>6.2</strong> The Client shall grant to the Service Provider
            a non-exclusive, fully paid-up, royalty-free, non-transferrable,
            non-sublicensable licence to use, copy, and modify the Client
            Materials for the term of the Contract only to the extent reasonably
            necessary for and only for the purposes of the provision of the
            Services.
          </p>
        </div>
      ),
    },
    {
      title: "7. Confidentiality",
      content: (
        <div className="space-y-2">
          <p>
            <strong>7.1</strong> Each Party undertakes that, except as provided
            by sub-Clause 7.2 or as authorised in writing by the other Party, it
            shall, at all times during the continuance of the Contract and for 5
            years after its termination:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mt-2">
            <li>keep confidential all Confidential Information;</li>
            <li>
              not disclose any Confidential Information to any other party;
            </li>
            <li>
              not use any Confidential Information for any purpose other than as
              contemplated by and subject to the terms of the Contract;
            </li>
            <li>
              not make any copies of, record in any way or part with possession
              of any Confidential Information; and
            </li>
            <li>
              ensure that none of its directors, officers, employees, agents,
              sub-contractors or advisers does any act which, if done by that
              Party, would be a breach of the provisions of sub-Clauses 7.1.1 to
              7.1.4 above.
            </li>
          </ol>
          <p>
            <strong>7.2</strong> Either Party may:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mt-2">
            <li>
              disclose any Confidential Information to any sub-contractor or
              supplier of that Party, any governmental or other authority or
              regulatory body, or any employee or officer of that Party or of
              any of the aforementioned persons, parties or bodies;
            </li>
            <li>
              use any Confidential Information for any purpose, or disclose it
              to any other person, to the extent only that it is at the date of
              the Contract, or at any time after that date becomes, public
              knowledge through no fault of that Party.
            </li>
          </ol>
        </div>
      ),
    },
    {
      title: "8. Health and Safety",
      content: (
        <div className="space-y-2">
          <p>
            <strong>8.1</strong> The Service Provider shall:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mt-2">
            <li>comply with all applicable health and safety regulations;</li>
            <li>
              comply with all applicable safety requirements relating to the
              Services;
            </li>
            <li>
              comply with any health and safety rules and regulations and any
              security requirements that apply at any of the Client&apos;s
              premises.
            </li>
          </ol>
        </div>
      ),
    },
    {
      title: "9. Limitation of Liability",
      content: (
        <div className="space-y-2">
          <p>
            <strong>9.1</strong> Subject to sub-Clause 9.2, neither Party shall
            be liable to the other, whether in contract, tort (including
            negligence), breach of statutory duty, or otherwise, for any loss of
            profit, or for any indirect or consequential loss arising under or
            in connection with the Contract.
          </p>
          <p>
            <strong>9.2</strong> Nothing in these Terms and Conditions excludes
            or limits the liability of either Party for death or personal injury
            caused by that Party&apos;s negligence, fraud or fraudulent
            misrepresentation, or any other matter for which it would be
            unlawful to exclude or limit liability.
          </p>
        </div>
      ),
    },
    {
      title: "10. Data Protection",
      content: (
        <div className="space-y-2">
          <p>
            <strong>10.1</strong> Both Parties shall comply with all applicable
            data protection requirements set out in the Data Protection
            Legislation. This Clause 10 shall not relieve either Party of any
            obligations set out in the Data Protection Legislation and does not
            remove or replace any of those obligations.
          </p>
          <p>
            <strong>10.2</strong> For the purposes of the Data Protection
            Legislation and for this Clause 10, the Client is the data
            controller and the Service Provider is the data processor.
          </p>
          <p>
            <strong>10.3</strong> The Service Provider shall only process the
            personal data to the extent, and in such a manner, as is necessary
            for the provision of the Services and in accordance with the
            Client&apos;s written instructions. The Service Provider shall not
            process the personal data for any other purpose.
          </p>
        </div>
      ),
    },
    {
      title: "11. Force Majeure",
      content: (
        <div className="space-y-2">
          <p>
            <strong>11.1</strong> Neither Party shall be liable for any failure
            or delay in performing their obligations under the Contract where
            such failure or delay results from any cause that is beyond the
            reasonable control of that Party.
          </p>
          <p>
            <strong>11.2</strong> In the event that either Party to the Contract
            cannot perform their obligations thereunder as a result of force
            majeure for a continuous period of 30 days, the other Party may at
            its discretion terminate the Contract by written notice at the end
            of that period.
          </p>
        </div>
      ),
    },
    {
      title: "12. Term and Termination",
      content: (
        <div className="space-y-2">
          <p>
            <strong>12.1</strong> The Contract shall come into force on the
            Commencement Date and shall continue until either Party terminates
            the Contract by giving to the other Party 30 days prior written
            notice.
          </p>
          <p>
            <strong>12.2</strong> Without prejudice to any other rights or
            remedies which may be available to it, either Party may terminate
            the Contract immediately by written notice to the other Party if:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mt-2">
            <li>
              any sum owing to that Party by the other Party under any of the
              provisions of the Contract is not paid within 30 Business Days of
              the due date for payment;
            </li>
            <li>
              the other Party commits any other material breach of any of the
              provisions of the Contract and, if the breach is capable of
              remedy, fails to remedy it within 30 Business Days after being
              given written notice giving full particulars of the breach and
              requiring it to be remedied;
            </li>
            <li>
              the other Party ceases, or threatens to cease, to carry on
              business.
            </li>
          </ol>
        </div>
      ),
    },
    {
      title: "13. Effects of Termination",
      content: (
        <div className="space-y-2">
          <p>Upon the termination of the Contract for any reason:</p>
          <ol className="list-decimal pl-6 space-y-2 mt-2">
            <li>
              any sum owing by either Party to the other under any of the
              provisions of the Contract shall become immediately due and
              payable;
            </li>
            <li>
              all Clauses which, either expressly or by their nature, relate to
              the period after the expiry or termination of the Contract shall
              remain in full force and effect;
            </li>
            <li>
              termination shall not affect or prejudice any right to damages or
              other remedy which the terminating Party may have in respect of
              the event giving rise to the termination or any other right to
              damages or other remedy which any Party may have in respect of any
              breach of the Contract which existed at or before the date of
              termination;
            </li>
            <li>
              subject as provided in this Clause 13 and except in respect of any
              accrued rights neither Party shall be under any further obligation
              to the other; and
            </li>
            <li>
              each Party shall (except to the extent referred to in Clause 7
              (Confidentiality)) immediately cease to use, either directly or
              indirectly, any Confidential Information, and shall immediately
              return to the other Party any documents in its possession or
              control which contain or record any Confidential Information.
            </li>
          </ol>
        </div>
      ),
    },
    {
      title: "14. No Waiver",
      content: (
        <div className="space-y-2">
          <p>
            No failure or delay by either Party in exercising any of its rights
            under the Contract shall be deemed to be a waiver of that right, and
            no waiver by either Party of a breach of any provision of the
            Contract shall be deemed to be a waiver of any subsequent breach of
            the same or any other provision.
          </p>
        </div>
      ),
    },
    {
      title: "15. Further Assurance",
      content: (
        <div className="space-y-2">
          <p>
            Each Party shall execute and do all such further deeds, documents
            and things as may be necessary to carry the provisions of the
            Contract into full force and effect.
          </p>
        </div>
      ),
    },
    {
      title: "16. Costs",
      content: (
        <div className="space-y-2">
          <p>
            Subject to any provisions to the contrary each Party shall pay its
            own costs of and incidental to the negotiation, preparation,
            execution and carrying into effect of the Contract.
          </p>
        </div>
      ),
    },
    {
      title: "17. Set-Off",
      content: (
        <div className="space-y-2">
          <p>
            Neither Party shall be entitled to set-off any sums in any manner
            from payments due or sums received in respect of any claim under the
            Contract or any other agreement at any time.
          </p>
        </div>
      ),
    },
    {
      title: "18. Assignment and Sub-Contracting",
      content: (
        <div className="space-y-2">
          <p>
            <strong>18.1</strong> Subject to sub-Clause 18.2, the Contract shall
            be personal to the Parties. Neither Party may assign, mortgage,
            charge (otherwise than by floating charge) or sub-licence or
            otherwise delegate any of its rights thereunder, or sub-contract or
            otherwise delegate any of its obligations thereunder without the
            written consent of the other Party, such consent not to be
            unreasonably withheld.
          </p>
          <p>
            <strong>18.2</strong> Subject to the provisions of Clause 10 (Data
            Processing), the Service Provider shall be entitled to perform any
            of the obligations undertaken by it through any other member of its
            group or through suitably qualified and skilled sub-contractors. Any
            act or omission of such other member or sub-contractor shall, for
            the purposes of the Contract, be deemed to be an act or omission of
            the Party in question.
          </p>
        </div>
      ),
    },
    {
      title: "19. Time",
      content: (
        <div className="space-y-2">
          <p>
            The times and dates referred to in the Contract shall be for
            guidance only and shall not be of the essence of the Contract and
            may be varied by mutual agreement between the Parties.
          </p>
        </div>
      ),
    },
    {
      title: "20. Relationship of the Parties",
      content: (
        <div className="space-y-2">
          <p>
            Nothing in the Contract shall constitute or be deemed to constitute
            a partnership, joint venture, agency, or other fiduciary
            relationship between the Parties other than the contractual
            relationship expressly provided for in the Contract.
          </p>
        </div>
      ),
    },
    {
      title: "21. Non-Solicitation",
      content: (
        <div className="space-y-2">
          <p>
            Neither Party shall, for the term of the Contract and for a period
            of 12 months after its termination or expiry, employ or contract the
            services of any person who is or was employed or otherwise engaged
            by the other Party at any time in relation to the Contract without
            the express written consent of that Party.
          </p>
        </div>
      ),
    },
    {
      title: "22. Third Party Rights",
      content: (
        <div className="space-y-2">
          <p>
            <strong>22.1</strong> No part of the Contract shall confer rights on
            any third parties and accordingly the Contracts (Rights of Third
            Parties) Act 1999 shall not apply to the Contract.
          </p>
          <p>
            <strong>22.2</strong> Subject to this Clause 22, the Contract shall
            continue and be binding on the transferee, successors and assigns of
            either Party as required.
          </p>
        </div>
      ),
    },
    {
      title: "23. Notices",
      content: (
        <div className="space-y-2">
          <p>
            <strong>23.1</strong> All notices under the Contract shall be in
            writing and be deemed duly given if signed by, or on behalf of, a
            duly authorised officer of the Party giving the notice.
          </p>
          <p>
            <strong>23.2</strong> Notices shall be deemed to have been duly
            given:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mt-2">
            <li>
              when delivered, if delivered by courier or other messenger
              (including registered mail) during normal business hours of the
              recipient;
            </li>
            <li>
              when sent, if transmitted by email and a successful transmission
              report or return receipt is generated;
            </li>
            <li>
              on the fifth business day following mailing, if mailed by national
              ordinary mail, postage prepaid; or
            </li>
            <li>
              on the tenth business day following mailing, if mailed by airmail,
              postage prepaid.
            </li>
          </ol>
          <p>
            <strong>23.3</strong> All notices under the Contract shall be
            addressed to the most recent address or email address notified to
            the other Party.
          </p>
        </div>
      ),
    },
    {
      title: "24. Entire Agreement",
      content: (
        <div className="space-y-2">
          <p>
            <strong>24.1</strong> The Contract constitutes the entire agreement
            between the Parties with respect to its subject matter and may not
            be modified except by an instrument in writing signed by the duly
            authorised representatives of the Parties.
          </p>
          <p>
            <strong>24.2</strong> Each Party acknowledges that, in entering into
            the Contract, it does not rely on any representation, warranty or
            other provision except as expressly provided in the Contract, and
            all conditions, warranties or other terms implied by statute or
            common law are excluded to the fullest extent permitted by law.
          </p>
        </div>
      ),
    },
    {
      title: "25. Law and Jurisdiction",
      content: (
        <div className="space-y-2">
          <p>
            <strong>25.1</strong> The Contract (including any non-contractual
            matters and obligations arising therefrom or associated therewith)
            shall be governed by, and construed in accordance with, the laws of
            England and Wales.
          </p>
          <p>
            <strong>25.2</strong> Any dispute, controversy, proceedings or claim
            between the Parties relating to the Contract (including any
            non-contractual matters and obligations arising therefrom or
            associated therewith) shall fall within the jurisdiction of the
            courts of England and Wales.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          Terms and Conditions
        </h1>
        <p className="mb-6">
          <strong>Last Updated: 12-01-2025</strong>
        </p>
        <h3 className="mb-4">BACKGROUND:</h3>
        <p className="mb-8">
          The COMPANYLtd (the &quot;Service Provider&quot;) provides guided
          touring services. The Service Provider has reasonable skill,
          knowledge, and experience in that field. These Terms and Conditions
          shall form the basis of contracts for the provision of services by the
          Service Provider to its clients.
        </p>
        {termsContent.map((section, index) => (
          <div
            key={index}
            className="mb-4 border rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-[#FFB800]/90 bg-[#FFB800]"
          >
            <button
              className="flex justify-between items-center w-full py-4 px-6 text-left font-bold focus:outline-none bg-primary/50 hover:bg-blue-50 transition-colors duration-300"
              onClick={() => toggleSection(index)}
            >
              {section.title}
              {openSection === index ? (
                <Minus className="h-5 w-5 text-blue-500 flex-shrink-0" />
              ) : (
                <Plus className="h-5 w-5 text-blue-500 flex-shrink-0" />
              )}
            </button>
            {openSection === index && (
              <div className="px-6 pb-4 bg-white">{section.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terms;
