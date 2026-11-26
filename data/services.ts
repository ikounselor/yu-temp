export interface Service {
  id: string;
  number: string;
  name: string;
  title: string;
  image: string;
  href: string;
  description: string;
  chips: string[];
  visual: "cyan" | "white" | "teal" | "amber";
  background: "soft" | "white" | "dark";
  comingSoon?: boolean;
}

export const services: Service[] = [
  {
    id: "research",
    number: "01",
    name: "Academic Research",
    title: "Where curiosity evolves into academic discovery",
    image: "/services/research.jpeg",
    href: "https://app.yungunitee.com/f2/lp-research-jD5lo",
    description:
      "Explore structured, mentor-led academic research experiences with experienced PhD scholars and researchers connected to global academic networks, including Oxford, Cambridge, Harvard, Princeton and Yale. From developing research questions and exploring subject areas to understanding research methodologies and academic writing, gain practical exposure to the research process while building critical thinking, analytical and scholarly skills.",
    chips: [
      "Research exposure & mentorship",
      "Academic exploration",
      "Research-oriented thinking",
      "Academic network connections",
    ],
    visual: "cyan",
    background: "soft",
  },
  {
    id: "assessments",
    number: "02",
    name: "Assessments & Psychometrics",
    image: "/services/psychometric.jpeg",
    href: "https://app.yungunitee.com/f2/lp-assessments-cIa2H",
    title: "Clarity about strengths, before the big decisions",
    description:
      "Assessment solutions for students, educators and institutional teams. Understand aptitude, interests and working styles through structured academic and psychometric tools, and turn the insights into more confident academic and career choices.",
    chips: [
      "Academic & aptitude assessments",
      "Psychometric assessments",
      "Career exploration & self-discovery",
      "For students, teachers & institutions",
    ],
    visual: "white",
    background: "white",
  },
  {
    id: "international",
    number: "03",
    name: "International Programs & Summer Courses",
    image: "/services/summercourse.jpeg",
    href: "https://app.yungunitee.com/f2/lp-research-copy-9dugo",
    title: "Learn inside a global classroom",
    description:
      "Immersive international programs that combine academic and experiential learning. Experience global academic environments through summer courses, including Oxford campus programs and TEDx-related summer learning experiences, where applicable.",
    chips: [
      "International summer programs",
      "Academic & experiential learning",
      "Global academic environments",
      "Oxford & TEDx-related experiences, where applicable",
    ],
    visual: "teal",
    background: "dark",
  },
  {
    id: "internships",
    number: "04",
    name: "Internships & Professional Exposure",
    image: "/services/internship.jpg",
    href: "https://app.yungunitee.com/f2/lp-summer-courses-copy-ja7vc",
    title: "Step into the workplace, with purpose",
    description:
      "Practical exposure designed to help you explore professional environments and build relevant experience. Opportunities may be virtual or on-site, depending on the program.",
    chips: [
      "Hospitality",
      "Digital Marketing",
      "International Business",
      "Sustainability",
      "Artificial Intelligence",
      "Data Analytics",
    ],
    visual: "cyan",
    background: "soft",
  },
  {
    id: "certifications",
    number: "05",
    name: "Certifications",
    image: "/services/cert.jpeg",
    href: "https://app.yungunitee.com/f2/lp-internships-copy-xkrvx",
    title: "Skills with real-world relevance. Coming soon",
    description:
      "Certifications will help you develop practical knowledge, strengthen professional capabilities and build skills for evolving industries, with flexible learning built around you. This service is being prepared for launch.",
    chips: [
      "Skill-based learning",
      "Professional development",
      "Industry-relevant knowledge",
      "Flexible learning",
    ],
     visual: "white",
    background: "white",
    comingSoon: true,
  },
   {
    id: "counselling",
    number: "06",
    name: "Counselling & career Guidance",
    image: "/services/counselling.jpeg",
    href: "https://app.yungunitee.com/f2/lp-internships-copy-zdn2y",
    title: "Direction shaped around your goals",
    description:
      "Make more informed academic and career decisions with personalised support. Explore education pathways, weigh your options and move forward with a plan that reflects your individual goals.",
    chips: [
      "Academic counselling",
      "Career guidance",
      "Education pathway exploration",
      "Personalised direction",
    ],
   visual: "teal",
    background: "dark",
  },
  {
    id: "ebooks",
    number: "07",
    name: "eBooks & Learning Resources",
    image: "/services/ebooks.jpeg",
    href: "https://app.yungunitee.com/f2/lp-certification-copy-exhmn",
    title: "Curated reading for independent learners",
    description:
      "Digital learning resources chosen to support independent study, academic exploration and professional development. Learn at your own pace with material that complements your academic and career journey.",
    chips: [
      "Subject-specific resources",
      "Educational eBooks",
      "Self-paced learning material",
      "Complements academic & professional journeys",
      
    ],
    visual: "cyan",
    background: "soft",
     comingSoon: true,
  },
  
  {
    id: "masterclasses",
    number: "08",
    name: "Workshops & Expert Sessions",
    image: "/services/workshop.jpeg",
    href: "https://app.yungunitee.com/f2/lp-career-guidance-copy-s4pe2",
    title: "Learn directly from people who do the work",
    description:
      "Expert-led sessions with experienced professionals, educators and subject-matter experts. Gain industry insight, take part in interactive learning and discover subjects and career possibilities you may not have considered.",
    chips: [
      "Leather Crafting",
      "Sound Healing",
      "Hands-on Workshops",
      "Creative Exploration",
    ],
    visual: "white",
    background: "white",
  },
  {
    id: "quizzes",
    number: "09",
    name: "Adventure training",
    title: "Step beyond learning, Discover through experience",
    image: "/services/ecat.jpeg",
    href: "https://app.yungunitee.com/f2/lp-workshop-copy-pfog9",
    description:
      "Engage in experiential learning and adventure-based training programmes designed to build confidence, teamwork, leadership and problem-solving skills. Explore new challenges, develop practical abilities and learn through experiences that go beyond the classroom.",
    chips: [
  "Outdoor adventure activities",
  "Team-building challenges",
  "Leadership development",
  "Problem-solving skills",
    ],
   visual: "teal",
    background: "dark",
  },
];
