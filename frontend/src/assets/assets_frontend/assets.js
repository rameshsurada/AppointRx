import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rajeev Menon',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Rajeev Menon is dedicated to providing personalized and preventive care. He specializes in general medicine and focuses on early diagnosis and effective treatment for all age groups.',
        fees: 500,
        address: {
            line1: '17th Cross, Indiranagar',
            line2: 'Bengaluru, Karnataka'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Anjali Sharma',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS, DGO',
        experience: '3 Years',
        about: 'Dr. Anjali Sharma offers compassionate care in women’s health. She specializes in prenatal care, menstrual disorders, and fertility consultation.',
        fees: 600,
        address: {
            line1: 'Plot No 45, Sector 15',
            line2: 'Navi Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sneha Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '1 Year',
        about: 'Dr. Sneha Patel is a skilled dermatologist treating a wide range of skin, hair, and nail conditions. She emphasizes aesthetic as well as clinical dermatology.',
        fees: 400,
        address: {
            line1: 'Gulbai Tekra, CG Road',
            line2: 'Ahmedabad, Gujarat'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Arvind Rao',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS, DCH',
        experience: '2 Years',
        about: 'Dr. Arvind Rao provides holistic pediatric care, from vaccinations to childhood illnesses. Known for his gentle approach with children and families.',
        fees: 450,
        address: {
            line1: 'Banjara Hills Road No. 10',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Neha Verma',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS, MD, DM (Neurology)',
        experience: '4 Years',
        about: 'Dr. Neha Verma specializes in treating neurological disorders such as epilepsy, stroke, and migraines with a patient-centric approach.',
        fees: 700,
        address: {
            line1: 'South City-2',
            line2: 'Gurugram, Haryana'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Ashwin Kulkarni',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS, MD, DM (Neurology)',
        experience: '4 Years',
        about: 'Dr. Ashwin Kulkarni offers expert care in neuro disorders and is known for a research-based approach to complex neurological conditions.',
        fees: 700,
        address: {
            line1: 'Koregaon Park',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Rajesh Iyer',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Ramesh Iyer is committed to delivering preventive and family care. He believes in patient education and wellness-oriented practices.',
        fees: 500,
        address: {
            line1: 'Anna Nagar',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Priya Nambiar',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS, MS (OBG)',
        experience: '3 Years',
        about: 'Dr. Priya Nambiar brings deep expertise in maternal care, infertility treatment, and hormonal balance. She is known for her empathetic approach.',
        fees: 600,
        address: {
            line1: 'MG Road',
            line2: 'Kochi, Kerala'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ritu Deshmukh',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '1 Year',
        about: 'Dr. Ritu Deshmukh focuses on cosmetic dermatology, acne care, and skin rejuvenation. She is passionate about helping patients feel confident.',
        fees: 400,
        address: {
            line1: 'Satellite Road',
            line2: 'Ahmedabad, Gujarat'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Karthik Menon',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS, DNB (Pediatrics)',
        experience: '2 Years',
        about: 'Dr. Karthik Menon is dedicated to children’s health and wellness. He specializes in developmental monitoring and common pediatric conditions.',
        fees: 450,
        address: {
            line1: 'DLF Phase-3',
            line2: 'Gurugram, Haryana'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoya Khan',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '4 Years',
        about: 'Dr. Zoya Khan treats neurodegenerative conditions and chronic headaches. She follows a patient-first treatment approach with modern diagnostics.',
        fees: 700,
        address: {
            line1: 'BTM Layout',
            line2: 'Bengaluru, Karnataka'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Pankaj Sinha',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS, MD, DM (Neurology)',
        experience: '4 Years',
        about: 'Dr. Pankaj Sinha provides advanced care for epilepsy, dementia, and movement disorders with clinical precision and empathy.',
        fees: 700,
        address: {
            line1: 'Park Street',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Kavita Reddy',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Kavita Reddy is known for comprehensive primary care, chronic disease management, and health screenings across all age groups.',
        fees: 500,
        address: {
            line1: 'JP Nagar',
            line2: 'Bengaluru, Karnataka'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Rahul Nair',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS, MS (OBG)',
        experience: '3 Years',
        about: 'Dr. Rahul Nair offers expertise in high-risk pregnancies and reproductive health. His calm demeanor makes patients feel at ease.',
        fees: 600,
        address: {
            line1: 'Marine Drive',
            line2: 'Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Ayesha Bansal',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '1 Year',
        about: 'Dr. Ayesha Bansal treats dermatological issues with a modern and evidence-based approach. She is particularly experienced in cosmetic treatments.',
        fees: 400,
        address: {
            line1: 'Hazratganj',
            line2: 'Lucknow, Uttar Pradesh'
        }
    },
];
