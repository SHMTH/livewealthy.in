import { ContactSectionType } from '../types/sections';
import { calendly } from './company';

const contactSection: ContactSectionType = {
  title: '',
  subtitle: "What's next",
  description:
    'Book a Personalized Session to Discuss Your Specific Financial Goals with Our Investor Relations Manager',
  cta: {
    name: 'Schedule A Meeting',
    url: calendly.invest,
  },
};

export default contactSection;
