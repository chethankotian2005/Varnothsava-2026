// Team Data for Varnothsava 2026
export interface TeamMember {
  id: string
  name: string
  role: string
  department: string
  image?: string
  email?: string
  phone?: string
  linkedin?: string
  instagram?: string
}

export interface TeamCategory {
  id: string
  title: string
  description: string
  members: TeamMember[]
}

export const teamData: TeamCategory[] = [
  {
    id: 'faculty',
    title: 'Faculty Coordinators',
    description: 'Guiding the fest with wisdom and experience',
    members: [
      {
        id: 'principal',
        name: 'Dr. Thirumaleshwara Bhat',
        role: 'Principal & Chief Patron',
        department: 'Administration',
        email: 'principal@smvitm.edu.in',
      },
      {
        id: 'dean',
        name: 'Dr. Raghavendra Prabhu',
        role: 'Dean - Student Affairs',
        department: 'Administration',
        email: 'dean.sa@smvitm.edu.in',
      },
      {
        id: 'faculty-coord-1',
        name: 'Prof. Suresh Rao',
        role: 'Faculty Coordinator',
        department: 'Computer Science',
        email: 'suresh.rao@smvitm.edu.in',
      },
      {
        id: 'faculty-coord-2',
        name: 'Prof. Lakshmi Sharma',
        role: 'Faculty Coordinator',
        department: 'Electronics & Communication',
        email: 'lakshmi.s@smvitm.edu.in',
      },
    ],
  },
  {
    id: 'core',
    title: 'Core Committee',
    description: 'The backbone of Varnothsava 2026',
    members: [
      {
        id: 'president',
        name: 'Aditya Rao',
        role: 'President',
        department: 'CSE - 4th Year',
        email: 'president@varnothsava.in',
        linkedin: 'adityarao',
        instagram: 'aditya_rao',
      },
      {
        id: 'vice-president',
        name: 'Priya Shenoy',
        role: 'Vice President',
        department: 'ECE - 4th Year',
        email: 'vp@varnothsava.in',
        linkedin: 'priyashenoy',
      },
      {
        id: 'general-secretary',
        name: 'Rahul Menon',
        role: 'General Secretary',
        department: 'ISE - 4th Year',
        email: 'secretary@varnothsava.in',
      },
      {
        id: 'treasurer',
        name: 'Kavya Nayak',
        role: 'Treasurer',
        department: 'CSE - 3rd Year',
        email: 'treasurer@varnothsava.in',
      },
      {
        id: 'joint-secretary',
        name: 'Vikram Shetty',
        role: 'Joint Secretary',
        department: 'ME - 3rd Year',
        email: 'jointsec@varnothsava.in',
      },
    ],
  },
  {
    id: 'technical',
    title: 'Technical Team',
    description: 'Building the digital experience',
    members: [
      {
        id: 'tech-head',
        name: 'Arjun Kumar',
        role: 'Technical Head',
        department: 'CSE - 4th Year',
        email: 'tech@varnothsava.in',
      },
      {
        id: 'web-lead',
        name: 'Sneha Pai',
        role: 'Web Development Lead',
        department: 'ISE - 3rd Year',
      },
      {
        id: 'app-lead',
        name: 'Karthik Bhat',
        role: 'App Development Lead',
        department: 'CSE - 3rd Year',
      },
      {
        id: 'infra-lead',
        name: 'Rohan Desai',
        role: 'Infrastructure Lead',
        department: 'ECE - 3rd Year',
      },
    ],
  },
  {
    id: 'cultural',
    title: 'Cultural Team',
    description: 'Curating the cultural extravaganza',
    members: [
      {
        id: 'cultural-head',
        name: 'Meera Krishnan',
        role: 'Cultural Secretary',
        department: 'CSE - 4th Year',
        email: 'cultural@varnothsava.in',
      },
      {
        id: 'dance-coord',
        name: 'Divya Shetty',
        role: 'Dance Coordinator',
        department: 'ECE - 3rd Year',
      },
      {
        id: 'music-coord',
        name: 'Pranav Gowda',
        role: 'Music Coordinator',
        department: 'ME - 3rd Year',
      },
      {
        id: 'dramatics-coord',
        name: 'Ananya Rao',
        role: 'Dramatics Coordinator',
        department: 'CSE - 2nd Year',
      },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing & PR',
    description: 'Spreading the word across campuses',
    members: [
      {
        id: 'marketing-head',
        name: 'Sameer Khan',
        role: 'Marketing Head',
        department: 'MBA - 2nd Year',
        email: 'marketing@varnothsava.in',
      },
      {
        id: 'social-media',
        name: 'Nisha Shetty',
        role: 'Social Media Manager',
        department: 'CSE - 3rd Year',
      },
      {
        id: 'pr-lead',
        name: 'Akshay Bhat',
        role: 'Public Relations Lead',
        department: 'ECE - 3rd Year',
      },
      {
        id: 'outreach',
        name: 'Rashmi Rao',
        role: 'Outreach Coordinator',
        department: 'ISE - 2nd Year',
      },
    ],
  },
  {
    id: 'design',
    title: 'Design Team',
    description: 'Crafting the visual identity',
    members: [
      {
        id: 'design-head',
        name: 'Akash Prabhu',
        role: 'Design Head',
        department: 'CSE - 4th Year',
        email: 'design@varnothsava.in',
      },
      {
        id: 'graphics-lead',
        name: 'Pooja Nayak',
        role: 'Graphics Lead',
        department: 'ISE - 3rd Year',
      },
      {
        id: 'video-lead',
        name: 'Sanjay Kulkarni',
        role: 'Video Production Lead',
        department: 'ECE - 3rd Year',
      },
    ],
  },
  {
    id: 'logistics',
    title: 'Logistics & Operations',
    description: 'Making everything run smoothly',
    members: [
      {
        id: 'logistics-head',
        name: 'Ganesh Shetty',
        role: 'Logistics Head',
        department: 'ME - 4th Year',
        email: 'logistics@varnothsava.in',
      },
      {
        id: 'venue-coord',
        name: 'Suresh Kumar',
        role: 'Venue Coordinator',
        department: 'Civil - 3rd Year',
      },
      {
        id: 'hospitality',
        name: 'Lakshmi Iyer',
        role: 'Hospitality Lead',
        department: 'MBA - 1st Year',
      },
      {
        id: 'transport',
        name: 'Harish Rao',
        role: 'Transport Coordinator',
        department: 'ME - 3rd Year',
      },
    ],
  },
  {
    id: 'sponsorship',
    title: 'Sponsorship Team',
    description: 'Partnering with the best',
    members: [
      {
        id: 'sponsor-head',
        name: 'Nikhil Shenoy',
        role: 'Sponsorship Head',
        department: 'MBA - 2nd Year',
        email: 'sponsors@varnothsava.in',
      },
      {
        id: 'sponsor-exec-1',
        name: 'Ramya Bhat',
        role: 'Sponsorship Executive',
        department: 'CSE - 3rd Year',
      },
      {
        id: 'sponsor-exec-2',
        name: 'Varun Pai',
        role: 'Sponsorship Executive',
        department: 'ECE - 3rd Year',
      },
    ],
  },
]

// Get all team members flat
export const getAllMembers = () => teamData.flatMap(category => category.members)

// Get team by category
export const getTeamByCategory = (categoryId: string) => 
  teamData.find(category => category.id === categoryId)
