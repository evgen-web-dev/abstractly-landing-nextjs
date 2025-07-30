import Header from "@/app/components/ui/Header/Header";
import { type NavLink } from "./components/ui/NavLink/types";
import Footer from "./components/ui/Footer/Footer";
import { type IconNavLink } from "./components/ui/Footer/types";
import { sectionsDummyDataItems } from "./components/sections/constants";
import { type SectionData } from "./components/sections/types";
import BaseSection from "./components/sections/BaseSection/BaseSection";


export default function Home() {

  const navItems: NavLink[] = [
    { href: '#home', title: 'Home' },
    { href: '#features', title: 'Features' },
    { href: '#pricing', title: 'Pricing' },
    { href: '#about-us', title: 'About us' },
    { href: '#contact', title: 'Contact' },
  ];

  const footerNavItems = navItems.slice(1);

  const socialLinks: IconNavLink[] = [
    { linkHref: '#youtube', iconUrl: '/socials/youtube.svg' },
    { linkHref: '#instagram', iconUrl: '/socials/instagram.svg' },
    { linkHref: '#facebook', iconUrl: '/socials/facebook.svg' },
    { linkHref: '#github', iconUrl: '/socials/github.svg' },
    { linkHref: '#twitter', iconUrl: '/socials/twitter.svg' },
  ]

  return (
    <>
      <Header navItems={navItems} className="sticky top-0 left-0 backdrop-blur-2xl z-[100]" />

      <div className="bg-white mx-4 mb-4 shadow-lg rounded-md grow flex flex-col">
        <main>

          {sectionsDummyDataItems && sectionsDummyDataItems.map((sectionDataItem: SectionData, index: number) => (
            <BaseSection key={index} cssClasses={sectionDataItem.sectionCssClasses} sectionId={sectionDataItem.sectionId} as={sectionDataItem.elementType} {...sectionDataItem.sectionData} />
          ))}

        </main>

        <Footer className="mt-auto" navItems={footerNavItems} socialLinks={socialLinks} bottomElement={<p className="text-center mt-20">{"© " + ((new Date).getFullYear()) + " Abstractly, Inc. All rights reserved."}</p>} />
      </div>

    </>
  );
}




