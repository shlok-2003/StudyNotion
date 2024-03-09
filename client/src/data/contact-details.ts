import { IconType } from 'react-icons/lib';
import { HiChatBubbleLeftRight, BiWorld, IoCall } from '@/icons';

export interface ContactData {
    icon: IconType;
    heading: string;
    description: string;
    details: string;
}

const contactData: Array<ContactData> = [
    {
        icon: HiChatBubbleLeftRight,
        heading: 'Chat on us',
        description: 'Our friendly team is here to help.',
        details: 'info@studynotion.com',
    },
    {
        icon: BiWorld,
        heading: 'Visit us',
        description: 'Come and say hello at our office HQ.',
        details: 'Horror colony, Borivali Mumbai ',
    },
    {
        icon: IoCall,
        heading: 'Call us',
        description: 'Mon - Fri From 9am to 6pm',
        details: '+91 9823130670',
    },
];

export default contactData;
