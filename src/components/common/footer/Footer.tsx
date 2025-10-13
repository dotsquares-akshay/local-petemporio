"use client";
import React from "react";
import Link from "next/link";
import { CtaPawIcon, MailIcon,RightArrow } from "@/assets/Svgicons";

interface FooterSection {
  id: string; // added id
  title: string;
  type?: "text" | "menu";
  text?: string;
  email?: string;
  menuItems?: { label: string; href: string }[];
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
}

interface Newsletter {
  title: string;
  description: string;
  placeholder: string;
  buttonIcon?: React.ReactNode;
  socialTitle?: string;
  socials?: SocialLink[];
}

const Footer: React.FC = () => {
  // 🔹 Dynamic Data Only
  const footerSections: FooterSection[] = [
    {
      id: "about-us",  // unique id added here
      title: "About Us",
      type: "text",
      text: "Your trusted partner for complete pet care. From premium food to expert veterinary services, we're here to keep your furry friends happy and healthy.",
      email: "support@petemporio.com",
    },
    {
      id: "customer-service",
      title: "Customer Service",
      type: "menu",
      menuItems: [
        { label: "Shipping Policy", href: "#" },
        { label: "Returns & Refunds", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
      ],
    },
    {
      id: "quick-links",
      title: "Quick Links",
      type: "menu",
      menuItems: [
        { label: "Home", href: "/" },
        { label: "Shop", href: "/shop" },
        { label: "Contact Us", href: "/contact" },
        { label: "FAQ", href: "/faq" },
      ],
    },
  ];

  const newsletter: Newsletter = {
    title: "JOIN OUR MAILING LIST",
    description:
      "Join our monthly mailing list to hear about all our latest offers as soon as they land!!",
    placeholder: "Enter your email address",
    buttonIcon: RightArrow,
    socialTitle: "Follow our journey",
    socials: [
      { icon: CtaPawIcon, href: "#" },
      { icon: CtaPawIcon, href: "#" },
    ],
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          {/* 🔹 Use a common classname "menus" for all sections */}
          {footerSections.map((section) => (
            <div key={section.id} id={section.id} className="menus">
              <div className="menu-title">{section.title}</div>

              {/* About Us */}
              {section.type === "text" && (
                <>
                  <div className="menu-item-list">
                    <div className="about-text">{section.text}</div>
                  </div>
                  {section.email && (
                    <div className="mail">
                      <div className="icon-bg">{MailIcon}</div>
                      <div>{section.email}</div>
                    </div>
                  )}
                </>
              )}

              {/* Menu Lists */}
              {section.type === "menu" && section.menuItems && (
                <ul className="menu-item-list">
                  {section.menuItems.map((item, j) => (
                    <li key={j}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="menus" id="newsletter">
            <div className="menu-title">{newsletter.title}</div>
            <div className="description">{newsletter.description}</div>

            <div className="newsletter-email">
              <input
                type="text"
                placeholder={`  ${newsletter.placeholder}`}
              />
              <button className="input-action">{newsletter.buttonIcon}</button>
            </div>

            <div className="socials">
              <div className="socials-title">{newsletter.socialTitle}</div>
              <div className="social-icons-container">
                {newsletter.socials?.map((social, idx) => (
                  <Link key={idx} href={social.href}>
                    <div className="iconbg">{social.icon}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          © 2025 Pet Emporio. All rights reserved. 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
