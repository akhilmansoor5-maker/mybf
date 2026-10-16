import {
  Banknote,
  Briefcase,
  Bus,
  Compass,
  Crown,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Megaphone,
  MessagesSquare,
  Network,
  Newspaper,
  Rocket,
  ShieldCheck,
  Sparkles,
  Store,
  Trophy,
  TrendingUp,
  UserRound,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "MYBF",
  fullName: "Malappuram Youth Business Forum",
  url: "https://www.mybf.in",
  tagline: "Empowering the Next Generation of Entrepreneurs in Malappuram",
  description:
    "MYBF is a thriving entrepreneurial community in Malappuram that connects founders, business owners, professionals and mentors through networking, mentorship, learning and business opportunities.",
  email: "mybfcommunity@gmail.com",
  phoneDisplay: "+91 85929 56370",
  phoneHref: "+918592956370",
  instagram: "https://www.instagram.com/mybf.community",
  facebook: "https://www.facebook.com/mybf.community",
  instagramHandle: "@mybf.community",
  facebookHandle: "@mybf.community",
  location: "Malappuram, Kerala, India",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Values", href: "#values" },
  { label: "What We Offer", href: "#offer" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#join" },
] as const;

export const heroHighlights = [
  "Supported by Mission Malappuram 2050",
  "Mentorship & business consultation",
  "Networking, conclaves & investor meetups",
] as const;

type Item = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const coreValues: Item[] = [
  {
    title: "Collaboration",
    description: "We grow stronger together, sharing opportunities instead of competing for them.",
    icon: Handshake,
  },
  {
    title: "Integrity",
    description: "Building trust through ethical entrepreneurship and honest business practice.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    description: "Encouraging new ideas, creative thinking and bold experimentation.",
    icon: Lightbulb,
  },
  {
    title: "Leadership",
    description: "Inspiring entrepreneurs to lead with purpose, clarity and responsibility.",
    icon: Compass,
  },
  {
    title: "Community Impact",
    description: "Creating businesses that benefit society and strengthen the district.",
    icon: HeartHandshake,
  },
];

export const offerings: Item[] = [
  {
    title: "Mentorship",
    description:
      "Receive practical guidance from experienced entrepreneurs, mentors and business leaders.",
    icon: Users,
  },
  {
    title: "Learning & Development",
    description:
      "Participate in workshops, masterclasses and business-focused learning experiences.",
    icon: GraduationCap,
  },
  {
    title: "Networking",
    description:
      "Expand your professional network through community meetups and industry events.",
    icon: Network,
  },
  {
    title: "Business Consultation",
    description:
      "Access expert advice on branding, marketing, finance, business strategy and growth.",
    icon: Briefcase,
  },
  {
    title: "Collaboration & Partnerships",
    description:
      "Connect with entrepreneurs and organisations for partnerships, referrals and joint ventures.",
    icon: Handshake,
  },
  {
    title: "Business Growth Opportunities",
    description:
      "Discover funding, market expansion, investor connections and business development.",
    icon: TrendingUp,
  },
];

export const initiatives: Item[] = [
  {
    title: "MYBF Conclaves",
    description:
      "Large-scale entrepreneurship events featuring business leaders, innovators and industry experts.",
    icon: Megaphone,
  },
  {
    title: "MYBF Club",
    description:
      "An exclusive community designed for continuous networking, collaboration and business growth.",
    icon: Crown,
  },
  {
    title: "Business Tours",
    description:
      "Visits to successful companies, startups and industries to gain practical business insights.",
    icon: Bus,
  },
  {
    title: "Social Commitment",
    description:
      "Community initiatives promoting entrepreneurship, youth empowerment and social development.",
    icon: HeartHandshake,
  },
  {
    title: "MYBF Gatherings",
    description:
      "Regular networking meetups for entrepreneurs to exchange ideas and build relationships.",
    icon: Users,
  },
  {
    title: "Panel Discussions",
    description:
      "Interactive sessions with experts on business trends, innovation and entrepreneurship.",
    icon: MessagesSquare,
  },
  {
    title: "Webinars",
    description:
      "Online learning sessions covering business strategy, leadership, technology and more.",
    icon: Video,
  },
  {
    title: "Investor Meetups",
    description: "Connecting entrepreneurs with investors, mentors and funding opportunities.",
    icon: Banknote,
  },
  {
    title: "MYBF Awards",
    description:
      "Recognising entrepreneurs, startups and business leaders making an impact in Malappuram.",
    icon: Trophy,
  },
  {
    title: "Blog & Articles",
    description:
      "Entrepreneurial insights, success stories, business strategies and industry updates.",
    icon: Newspaper,
  },
];

export const audience: Item[] = [
  {
    title: "Startup Founders",
    description: "Early-stage founders building and validating a new venture.",
    icon: Rocket,
  },
  {
    title: "Business Owners",
    description: "Established owners looking to scale, systemise and expand.",
    icon: Store,
  },
  {
    title: "Students with Business Ideas",
    description: "Aspiring entrepreneurs who want mentorship and direction.",
    icon: GraduationCap,
  },
  {
    title: "Professionals & Mentors",
    description: "Experts who want to guide founders and build industry links.",
    icon: UserRound,
  },
];

export const benefits: Item[] = [
  {
    title: "Business Referrals",
    description:
      "Trusted referrals and warm introductions from within the MYBF member network.",
    icon: Handshake,
  },
  {
    title: "Expert Mentorship",
    description:
      "One-to-one and group guidance from entrepreneurs who have solved the problem before.",
    icon: Users,
  },
  {
    title: "Community Access",
    description:
      "An active forum of founders, owners and professionals across Malappuram district.",
    icon: MessagesSquare,
  },
  {
    title: "Strategic Partnerships",
    description:
      "Joint ventures, supplier links and collaborations with aligned businesses.",
    icon: Network,
  },
  {
    title: "Recognition & Visibility",
    description:
      "Awards, speaking slots and member spotlights that build your business profile.",
    icon: Trophy,
  },
  {
    title: "Exclusive Events",
    description:
      "Member-first access to conclaves, business tours, webinars and investor meetups.",
    icon: Sparkles,
  },
];

export const growthPoints = [
  "Connect with ambitious entrepreneurs and business leaders.",
  "Learn from experienced mentors and industry experts.",
  "Access exclusive workshops, networking events and business opportunities.",
  "Collaborate on innovative ideas and strategic partnerships.",
  "Grow your business while contributing to Malappuram's entrepreneurial ecosystem.",
] as const;
