"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

// Define the type for each section of the privacy content
interface PrivacySection {
  title: string;
  content: string;
}

const Privacy = () => {
  // Define the state type
  const [openSection, setOpenSection] = useState<number | null>(null);

  // Add the toggleSection function
  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  // Define the privacy content with the correct type
  const privacyContent: PrivacySection[] = [
    {
      title: "What information are we collecting and how are we collecting it?",
      content: `We will collect and process the following personal information about you:

      Information you provide to us:
      You provide us with personal information by filling in the contact form or other forms on our website, or by corresponding with us by phone, email or otherwise. The information you provide us may include your name, email address, physical address, home and mobile phone numbers, contact details, IP address, device ID, MAC address, and other analogous personal information.

      Information we collect about you:
      We will also collect information about you through your use of this website. This information may include site areas visited, pages viewed, frequency and duration of visits.

      Information we receive from other sources:
      We may also collect your personal information from third parties, including, for example, business partners, analytics providers, search information providers, and third-party marketing companies or through publicly available sources.`,
    },
    {
      title: "How we use your information",
      content: `We may use your personal information for one or more of the following purposes:

      - To provide the services to you that you have requested including customer support;
      - To maintain your personal profile and manage your account;
      - To contact you when necessary or appropriate in relation to the services being provided to you;
      - To manage and administer the products and services provided to you;
      - To provide you with information regarding the products and services offered by us;
      - To offer you additional services such as discord communities;
      - To develop an understanding of the products and services that you may be interested in obtaining from us;
      - To provide you with information or opportunities that we believe may be relevant to you;
      - To create anonymised statistical data - we may share anonymised data with other companies; however, this data will not include any information that personally identifies you;
      - We may also use your personal information, including market research, analysis and developing statistics across the site, to develop an understanding of the products and services that you may be interested in obtaining from us, and to market such products and services to you.

      When we collect and use your personal information, we will make sure this is only done in accordance with at least one of the legal grounds available to us under Data Protection law.`,
    },
    {
      title: "Who may we disclose your information to?",
      content: `We may share your personal information with:

      - Any court or tribunal;
      - Fraud prevention and law enforcement agencies if false or inaccurate information is provided and fraud is identified;
      - Anyone else where we have your consent or where we have another lawful basis for doing so;
      - Any organisation at your request or any persons acting on your behalf, including your solicitor or accountant;
      - Any third-party service providers where this is necessary to process a transaction or provide services which you have requested (e.g. software providers);
      - Any authority to whom we are required to disclose such information by law;

      Please note that we do not sell your personal information to third parties for marketing purposes.`,
    },
    {
      title: "What rights do you have?",
      content: `Your rights are as follows in respect of the personal information we hold about you:

      - The right to be informed about processing of your personal data;
      - The right to have your personal data corrected if it's inaccurate and to have incomplete personal data completed;
      - The right to object to processing of your personal data;
      - The right to restrict processing of your personal data;
      - The right to have your personal data erased (the "right to be forgotten");
      - The right to request access to a copy of your personal data and information about how we process it;
      - The right to move, copy or transfer your personal data ("data portability");
      - Rights in relation to automated decision-making, including profiling.

      Please note, some of these rights only apply in certain circumstances, and we may not be able to fulfil every request.`,
    },
    {
      title: "How we protect your information",
      content: `We are committed to protecting the privacy of all personal information that we obtain from you. We continue to adopt industry and information security best practices to protect your personal information and ensure that unauthorised persons do not access it. Measures include encryption of data during transmission, strong authentication mechanisms, cybersecurity processes and secure access to machines and data.

      We train our employees who handle personal information to respect the confidentiality of customer data and the privacy of individuals.`,
    },
    {
      title: "Why we collect your information",
      content: `We collect your personal information in order to provide you with our products and services. By collecting your information, we are able to monitor and improve the services we offer to our existing and potential clients.`,
    },
    {
      title: "How we protect your information in data transfers",
      content: `We may transfer personal information to other countries outside of the European Economic Area, such as the US. In such circumstances, we will ensure the transfer is lawful and that there are appropriate security arrangements in place.`,
    },
    {
      title: "How you can protect your information",
      content: `Just like us, you should care about the security of your personal data. Do not give your security details such as passwords or passcodes, to anyone else.

      Additionally, we recommend securing your devices with a password or passcode. If you use our mobile app, we recommend that you enable the use of Touch ID or Face ID.`,
    },
    {
      title: "How long we hold your information",
      content: `We will remove any personal information that will identify you, or we will securely destroy the records when we consider that personal information is no longer required. This could be a period of seven years after our business relationship with you has ended.

      However, we may need to maintain certain records for a longer period, for example, where we are required to hold your personal information for regulatory or legal purposes, to provide you with the services you have requested or to maintain adequate business records.`,
    },
    {
      title: "Cookies and our cookie policy",
      content: `We use cookies to gather information about your access to this website. Cookies are small files stored on your device after you access this website. Some of the information gathered does not contain any personal details about you but is still protected by this Privacy policy.

      They enhance your browsing experience in various ways, which include remembering your preference settings, displaying relevant content and ensuring web pages function as intended. For detailed information on the cookies we use and the purposes for which we use them, see our cookie policy.

      When you use this website, you may be able to link to other websites. This Privacy Policy does not apply to those sites. We encourage you to read the privacy policies on such sites.`,
    },
    {
      title: "What to do if you have a complaint",
      content: `If you have any questions or complaints about the way we handle your information, please contact us. If we do not resolve a complaint to your satisfaction, you have the right to lodge a complaint with your local Data Protection Authority. You may contact the Information Commissioner's Office if you are in the UK.`,
    },
    {
      title: "Changes to our Privacy Policy",
      content: `We may change this Privacy Policy from time to time. When such a change is made, we will post a revised version online. Changes will be effective from the point at which they are posted. It is your responsibility to review this Privacy Policy periodically, so you are aware of any changes. By using our services, you agree to this Privacy Policy.`,
    },
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>
        <p className="mb-6">
          At The COMPANY Limited, we take your privacy seriously. This policy
          describes how we collect, use, and protect your personal information.
        </p>
        <p className="mb-6">
          <strong>Last Updated: 12-01-2025</strong>
        </p>
        {privacyContent.map((section, index) => (
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
              <div className="px-6 pb-4 bg-white">
                <p className="whitespace-pre-wrap">{section.content}</p>
              </div>
            )}
          </div>
        ))}
        <p className="mt-6">
          If you have any questions about our privacy policy, please contact us
          at contact@COMPANY.com
        </p>
      </div>
    </div>
  );
};

export default Privacy;
