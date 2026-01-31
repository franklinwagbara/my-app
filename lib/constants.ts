export interface Event {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: Event[] = [
  {
    title: "React Summit 2026",
    image: "/images/events/event1.png",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "June 14-18, 2026",
    time: "9:00 AM - 6:00 PM CEST",
  },
  {
    title: "AI DevWorld Conference",
    image: "/images/events/event2.png",
    slug: "ai-devworld-conference",
    location: "San Francisco, CA",
    date: "March 20-22, 2026",
    time: "10:00 AM - 7:00 PM PST",
  },
  {
    title: "Next.js Conf 2026",
    image: "/images/events/event3.png",
    slug: "nextjs-conf-2026",
    location: "San Francisco, CA",
    date: "October 24-25, 2026",
    time: "8:00 AM - 5:00 PM PDT",
  },
  {
    title: "Global Hackathon Week",
    image: "/images/events/event4.png",
    slug: "global-hackathon-week",
    location: "Online & Hybrid",
    date: "April 10-17, 2026",
    time: "24/7 - All Time Zones",
  },
  {
    title: "TypeScript Congress",
    image: "/images/events/event1.png",
    slug: "typescript-congress",
    location: "New York, NY",
    date: "September 5-7, 2026",
    time: "9:00 AM - 6:00 PM EST",
  },
  {
    title: "DevOps Summit Asia",
    image: "/images/events/event2.png",
    slug: "devops-summit-asia",
    location: "Singapore",
    date: "May 12-14, 2026",
    time: "9:00 AM - 5:00 PM SGT",
  },
  {
    title: "Web3 Developers Conference",
    image: "/images/events/event3.png",
    slug: "web3-developers-conference",
    location: "Dubai, UAE",
    date: "November 8-10, 2026",
    time: "10:00 AM - 8:00 PM GST",
  },
  {
    title: "Mobile Dev Meetup NYC",
    image: "/images/events/event4.png",
    slug: "mobile-dev-meetup-nyc",
    location: "Brooklyn, NY",
    date: "February 15, 2026",
    time: "6:00 PM - 9:00 PM EST",
  },
];
