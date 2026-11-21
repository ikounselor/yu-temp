export interface Service {
  id: string;
  number: string;
  name: string;
  title: string;
  image: string;
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
    name: "Research Programs",
    title: "Where curiosity meets real research.",
    image: "/services/research.jpeg",
    description:
      "Explore academic research with experienced PhD mentors and academic networks linked to globally recognised universities. Build research-oriented thinking, ask sharper questions and see how scholarship works in practice. These are mentorship-led research experiences, not university internships, and they do not imply direct university affiliation.",
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
    title: "Clarity about strengths, before the big decisions.",
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
    title: "Learn inside a global classroom.",
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
    title: "Step into the workplace, with purpose.",
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
    visual: "amber",
    background: "white",
  },
  {
    id: "certifications",
    number: "05",
    name: "Certifications",
    image: "/services/cert.jpeg",
    title: "Skills with real-world relevance. Coming soon.",
    description:
      "Certifications will help you develop practical knowledge, strengthen professional capabilities and build skills for evolving industries, with flexible learning built around you. This service is being prepared for launch.",
    chips: [
      "Skill-based learning",
      "Professional development",
      "Industry-relevant knowledge",
      "Flexible learning",
    ],
    visual: "cyan",
    background: "soft",
    comingSoon: true,
  },
  {
    id: "ebooks",
    number: "06",
    name: "eBooks & Learning Resources",
    image: "/services/ebooks.jpeg",
    title: "Curated reading for independent learners.",
    description:
      "Digital learning resources chosen to support independent study, academic exploration and professional development. Learn at your own pace with material that complements your academic and career journey.",
    chips: [
      "Subject-specific resources",
      "Educational eBooks",
      "Self-paced learning material",
      "Complements academic & professional journeys",
    ],
    visual: "white",
    background: "white",
  },
  {
    id: "counselling",
    number: "07",
    name: "Counselling & Guidance",
    image: "/services/ecat.jpeg",
    title: "Direction shaped around your goals.",
    description:
      "Make more informed academic and career decisions with personalised support. Explore education pathways, weigh your options and move forward with a plan that reflects your individual goals.",
    chips: [
      "Academic counselling",
      "Career guidance",
      "Education pathway exploration",
      "Personalised direction",
    ],
    visual: "teal",
    background: "soft",
  },
  {
    id: "masterclasses",
    number: "08",
    name: "Masterclasses & Expert Sessions",
    image: "/services/ecat.jpeg",
    title: "Learn directly from people who do the work.",
    description:
      "Expert-led sessions with experienced professionals, educators and subject-matter experts. Gain industry insight, take part in interactive learning and discover subjects and career possibilities you may not have considered.",
    chips: [
      "Expert-led masterclasses",
      "Interactive learning sessions",
      "Industry insights",
      "New subjects & career possibilities",
    ],
    visual: "amber",
    background: "dark",
  },
  {
    id: "quizzes",
    number: "09",
    name: "Quizzes & Knowledge Exploration",
    title: "Curiosity, made interactive.",
    image: "/services/ecat.jpeg",
    description:
      "Engaging learning experiences that encourage you to explore subjects, test what you know and keep discovering. A lighter way to build knowledge and reflect on where your interests lie.",
    chips: [
      "Knowledge-based quizzes",
      "Subject exploration",
      "Interactive learning",
      "Self-assessment",
    ],
    visual: "cyan",
    background: "soft",
  },
];
