// events.ts

// Custom type for event; location is optional string or React node if needed
export type EventType = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  location?: string; // added as optional string (adjust as needed)
};

export const events: EventType[] = [
  {
    id: 1,
    title: 'Dubai Business Summit 2024',
    description: 'International business conference bringing together industry leaders.',
    image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-03-15',
    category: 'corporate',
    location: 'Dubai',
  },
  {
    id: 2,
    title: 'Royal Wedding Celebration',
    description: 'Elegant wedding ceremony with luxury Arabian touches.',
    image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-02-20',
    category: 'wedding',
    location: 'Abu Dhabi',
  },
  {
    id: 3,
    title: "Charity Gala Night",
    description: "Exclusive fundraising gala supporting children's education.",
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-10',
    category: 'social',
    location: 'Sharjah',
  },
  {
    id: 4,
    title: 'Product Launch Event',
    description: 'High-tech product reveal with innovative presentation design.',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-04-05',
    category: 'corporate',
    location: 'Dubai',
  },
  {
    id: 5,
    title: 'Anniversary Celebration',
    description: 'Golden anniversary party with vintage elegance theme.',
    image: 'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-02-14',
    category: 'social',
    location: 'Fujairah',
  },
  {
    id: 6,
    title: 'Fashion Show Extravaganza',
    description: 'Haute couture fashion show with international designers.',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-03-28',
    category: 'social',
    location: 'Dubai',
  },
];
