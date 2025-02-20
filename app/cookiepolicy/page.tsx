"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

// Define the type for each section of the privacy content
interface CookieSection {
  title: string;
  content: string;
}

const CookiePolicy = () => {
  // Define the state type
  const [openSection, setOpenSection] = useState<number | null>(null);

  // Add the toggleSection function
  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  // Define the privacy content with the correct type
  const cookieContent: CookieSection[] = [
    {
      title: "What Are Cookies?",
      content: `Cookies are small text files that are placed on your device when you visit our website. They are widely used to make websites work more efficiently and provide valuable information to website owners.`,
    },
    {
      title: "How we use Cookies",
      content: `We use different types of cookies for various purposes:

      1. Essential Cookies (Strictly Necessary)
      • Purpose: These cookies are critical for the basic functionality of our website;
      • What they do:
          • Enable secure login and authentication;
          • Maintain your session security;
          • Remember your privacy preferences;
          • Enable basic website navigation;
      • Duration: Up to 1 year;
      • Can you disable them? No, these cookies are necessary for the website to function properly;
      
      2. Functional Cookies
      • Purpose: These cookies are critical for the basic functionality of our website;
      • What they do:
          • Remember your language preferences;
          • Store your light/dark mode settings;
          • Save customization preferences;
          • Remember form field entries;
      • Duration: Up to 1 year;
      • Can you disable them? Yes,but some features may not work as expected;
      
      3. Analytics Cookies
      • Purpose: Help us understand website usage patterns;
      • What they do:
          • Track pages visited;
          • Measure time spent on pages;
          • Record interaction with site elements;
          • Analyze user journeys through our site;
      • Duration: Up to 1 year;
      • Can you disable them? Yes;
      • Third-party services: Currently we do not use any third party services;

      4. Marketing Cookies
      • Purpose: Enable targeted advertising and campaign tracking;
      • What they do:
          • Track across websites;
          • Build user profiles;
          • Measure advertisement effectiveness;
          • Analyze user journeys through our site;
      • Duration: Up to 1 year;
      • Can you disable them? Yes;
      • Third-party services: Currently we do not use any third party services;`,
    },
    {
      title: "Your Cookie Choices - Managing Your Preferences",
      content: `You can manage your cookie preferences in several ways:

      •	 Cookie Banner: Use our cookie consent banner to set your preferences when you first visit our website
      •	 Browser Settings: Configure your browser to block or alert you about cookies
      • Cookie Settings Panel: Access our cookie settings panel [link] to update your preferences at any time`,
    },
    {
      title: "Your Cookie Choices - Browser-Level Control",
      content: `You can control cookies through your browser settings. Here's how to do it in common browsers:

      •	Chrome: Settings → Privacy and Security → Cookies and other site data
      •	Firefox: Options → Privacy & Security → Enhanced Tracking Protection
      •	Safari: Preferences → Privacy → Cookies and website data
      •	Edge: Settings → Privacy, search, and services → Cookies
      `,
    },
    {
      title: "Data Collection and Usage - Information We Collect",
      content: `Through cookies, we may collect:

      •	IP addresses
      •	Browser type and version
      •	Operating system
      •	Device information
      •	Referring website
      •	Pages visited
      •	Time and date of visits
      •	Click patterns`,
    },
    {
      title: "Data Collection and Usage - How We Use This Data",
      content: `We use this information to:
      
      •	Improve website functionality
      •	Analyze user behavior
      •	Enhance user experience
      •	Personalize content
      •	Optimize marketing efforts`,
    },
    {
      title: "Privacy Rights - Under GDPR (EU Users)",
      content: `You have the right to:
      
      •	Access your personal data
      •	Request data deletion
      •	Object to processing
      •	Withdraw consent
      •	Lodge complaints with supervisory authorities`,
    },
    {
      title: "Privacy Rights - Under CCPA (California Users)",
      content: `You have the right to:

      •	Know what personal information is collected
      •	Access your personal information
      •	Request deletion
      •	Opt-out of the sale of personal information
      •	Non-discrimination for exercising these rights
      `,
    },
    {
      title: "Contact Us",
      content: `If you have questions about our Cookie Policy or your privacy rights:

      •	Email: privacy@COMPANY.COM
      •	Phone: +44 (0)123-456-7890
      •	Address: THE Company, Some Street, London, EC1 1EC
      
      `,
    },
    {
      title: "Changes and updatesto our Cookie Policy",
      content: `We may update this Cookie Policy periodically. The date at the top of this policy indicates when it was last revised. When such a change is made, we will post a revised version online. Changes will be effective from the point at which they are posted. It is your responsibility to review this Cookie Policy periodically, so you are aware of any changes. By using our services, you agree to this Cookie Policy.`,
    },
    {
      title: "Additional Information",
      content: `For more information about how we protect your privacy, please review our:
      
      •	[Privacy Policy]
      •	[Terms of Service]`,
    },
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Cookie Policy</h1>
        <p className="mb-6">
          This Cookie Policy explains how The COMPANY (“we,” “us,” or “our”)
          uses cookies and similar technologies on our website. This policy
          provides detailed information about how and why we use these
          technologies and the choices you have regarding their use.
        </p>
        <p className="mb-6">
          <strong>Last Updated: 12-01-2025</strong>
        </p>
        {cookieContent.map((section, index) => (
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
          If you have any questions about our cookie policy, please contact us
          at contact.us@COMPANY.com
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
