import Header from "@/app/components/ui/Header/Header";
import { type NavLink } from "./components/ui/NavLink/types";
import Footer from "./components/ui/Footer/Footer";
import { IconNavLink } from "./components/ui/Footer/types";



export default function Home() {

  const navItems: NavLink[] = [
    {href: '#', title: 'Home'},
    {href: '#', title: 'Features'},
    {href: '#', title: 'Pricing'},
    {href: '#', title: 'About us'},
    {href: '#', title: 'Contact'},
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
      <Header navItems={navItems} />

      <main className="">
          
      </main>

      <Footer navItems={footerNavItems} socialLinks={socialLinks} bottomElement={<p>© 2024 Abstractly, Inc. All rights reserved.</p>} />

    </>
  );
}




