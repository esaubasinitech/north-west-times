// ─── TYPES ──────────────────────────────────────────────────────────────────

export type Category =
  | 'Politics'
  | 'Community'
  | 'Business'
  | 'Education'
  | 'Events'

export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  body: string
  category: Category
  author: string
  publishDate: string
  imageUrl: string
  imageAlt: string
  featured?: boolean
}

export interface Job {
  id: string
  title: string
  company: string
  location: string
  industry: string
  closingDate: string
  applyLink: string
  description: string
}

export interface Application {
  id: string
  institution: string
  openDate: string
  closeDate: string
  applyLink: string
  description: string
}

export interface Bursary {
  id: string
  title: string
  sponsor: string
  fieldOfStudy: string
  deadline: string
  applyLink: string
  description: string
}

// ─── ARTICLES ────────────────────────────────────────────────────────────────

export const articles: Article[] = [
  {
    id: '1',
    slug: 'mahikeng-road-upgrades',
    title: 'Road Upgrades Announced in Mahikeng to Improve Transport Routes',
    excerpt:
      'The North West Department of Public Works has confirmed a R240-million investment in road infrastructure across Mahikeng, targeting key arterial roads that connect the city centre to outlying townships.',
    body: `The North West Department of Public Works has confirmed a R240-million investment in road infrastructure across Mahikeng, targeting key arterial roads that connect the city centre to outlying townships.

The project will span 18 months and cover the rehabilitation of Mmabatho Drive, Station Road, and the Ga-Rankuwa Interchange. Officials say the upgrades will reduce travel time by up to 30% and create approximately 1 200 short-term construction jobs for local residents.

"We are committed to improving the quality of life for all residents of the North West Province," said MEC for Public Works, Nthabi Mokgosi. "Good roads mean better access to schools, clinics, and economic opportunities."

Community leaders in Mahikeng welcomed the announcement but called for transparency in the tendering process. Ward councillor Tshegofatso Diale urged the department to prioritise local contractors and workers from the surrounding communities.

Construction is expected to commence in May 2026, with completion scheduled for November 2027. Residents are advised to expect temporary traffic diversions during the construction period.`,
    category: 'Community',
    author: 'Lebo Motsepe',
    publishDate: '2026-03-10',
    imageUrl: '/images/mahikeng-road.jpg',
    imageAlt: 'Road construction work in Mahikeng',
    featured: true,
  },
  {
    id: '2',
    slug: 'nwu-2027-applications',
    title: 'North-West University Opens 2027 Applications - Deadline Extended',
    excerpt:
      'NWU has announced that applications for the 2027 academic year are now open across all three campuses, with the deadline extended to 30 September 2026.',
    body: `North-West University (NWU) has officially opened applications for the 2027 academic year across its Mahikeng, Potchefstroom, and Vanderbijlpark campuses.

The university announced a deadline extension to 30 September 2026, citing high demand and the need to accommodate students from rural areas who may face connectivity challenges.

Prospective students can apply online through the NWU application portal at www.nwu.ac.za. The university offers programmes in Law, Commerce, Engineering, Health Sciences, Education, and Humanities.

First-generation students are encouraged to visit the NWU Financial Aid Office to explore bursary and NSFAS funding options. The university has committed R50 million in institutional bursaries for the 2027 intake.`,
    category: 'Education',
    author: 'Palesa Dlamini',
    publishDate: '2026-03-08',
    imageUrl: '/images/nwu-campus.jpg',
    imageAlt: 'North-West University Mahikeng campus',
    featured: true,
  },
  {
    id: '3',
    slug: 'rustenburg-mining-jobs',
    title: 'Platinum Mines Near Rustenburg to Create 3 000 New Jobs',
    excerpt:
      'Following improved platinum group metals prices, mining houses in the Bojanala District have announced a hiring drive targeting local youth.',
    body: `Leading platinum group metals (PGM) producers operating in the Bojanala District have announced a joint hiring initiative that will create approximately 3 000 new jobs over the next 18 months.

The announcement follows a sustained recovery in PGM prices, driven by increasing global demand for clean energy technologies. Implats, Anglo American Platinum, and Northam Platinum are among the companies participating in the drive.

Priority will be given to candidates from communities within a 50km radius of the mines. A free skills development programme, running from April to June 2026, will prepare candidates for entry-level positions.

Interested candidates can register at the Rustenburg Local Municipality offices on Fatima Bhayat Street or via the Provincial Department of Labour's online portal.`,
    category: 'Business',
    author: 'Sifiso Nkosi',
    publishDate: '2026-03-07',
    imageUrl: '/images/rustenburg-mine.jpg',
    imageAlt: 'Platinum mine headgear near Rustenburg',
  },
  {
    id: '4',
    slug: 'klerksdorp-community-clinic',
    title: 'New Community Clinic Opens in Jouberton to Ease Healthcare Burden',
    excerpt:
      'Residents of Jouberton no longer need to travel to Tshepong Hospital for primary healthcare services following the opening of a new satellite clinic.',
    body: `A new community health clinic has opened in Jouberton, Klerksdorp, providing primary healthcare services to approximately 45 000 residents who previously had to travel to Tshepong Hospital.

The facility, funded by the Dr Kenneth Kaunda District Municipality with support from the National Health Insurance pilot programme, offers general outpatient consultations, maternal health services, childhood immunisation, and chronic disease management.

"This clinic represents our commitment to bringing healthcare closer to the people," said District Mayor Mosa Nkosi at the opening ceremony.

The clinic will operate Monday to Friday from 07:00 to 17:00, with emergency services on weekends. A team of four nurses and one medical officer will be permanently stationed at the facility.`,
    category: 'Community',
    author: 'Thandi Khumalo',
    publishDate: '2026-03-05',
    imageUrl: '/images/clinic.jpg',
    imageAlt: 'New community clinic in Jouberton',
  },
  {
    id: '5',
    slug: 'potchefstroom-arts-festival',
    title: 'Aardklop National Arts Festival Returns to Potchefstroom in September',
    excerpt:
      'The beloved Aardklop Arts Festival will again transform Potchefstroom into a cultural hub, with over 200 productions spanning theatre, music, cabaret, and visual arts.',
    body: `The Aardklop National Arts Festival has confirmed its return to Potchefstroom from 24 to 28 September 2026, with an exciting programme of over 200 productions.

This year's theme, "Wortels / Roots", will celebrate the cultural heritage of the North West Province, with special spotlight programmes featuring Setswana storytelling traditions, indigenous music, and contemporary visual art from local artists.

Early bird tickets go on sale from 1 May 2026 on the Computicket platform. The festival offers student discounts and free community events throughout the week.

"Aardklop is not just a festival - it is a celebration of who we are," said festival director Anél van Heerden.`,
    category: 'Events',
    author: 'Corné van der Berg',
    publishDate: '2026-03-03',
    imageUrl: '/images/arts-festival.jpg',
    imageAlt: 'Performers at the Aardklop Arts Festival',
  },
  {
    id: '6',
    slug: 'northwest-budget-education',
    title: 'North West Provincial Budget Allocates R12bn to Education Sector',
    excerpt:
      'The 2026/27 provincial budget sees education receive the largest single allocation, with funds earmarked for school infrastructure and teacher recruitment.',
    body: `The North West Province's 2026/27 budget has allocated R12 billion to the education sector, representing a 9% increase from the previous financial year.

MEC for Education Mompati Gaolaolwe tabled the education vote in the provincial legislature, highlighting key priorities: building 14 new primary schools, repairing 67 flood-damaged classrooms, and recruiting 1 800 new teachers by December 2026.

An additional R450 million has been set aside for school nutrition programmes, benefiting approximately 340 000 learners across the province.

Opposition parties in the legislature welcomed the increased allocation but questioned the department's track record on infrastructure delivery, calling for independent project monitoring.`,
    category: 'Politics',
    author: 'Kagiso Modise',
    publishDate: '2026-03-01',
    imageUrl: '/images/education-budget.jpg',
    imageAlt: 'Classroom in a North West school',
  },
]

// ─── JOBS ────────────────────────────────────────────────────────────────────

export const jobs: Job[] = [
  {
    id: 'j1',
    title: 'Retail Assistant',
    company: 'Shoprite Group',
    location: 'Klerksdorp',
    industry: 'Retail',
    closingDate: '2026-04-15',
    applyLink: '#',
    description:
      'Shoprite Klerksdorp Shopping Centre is looking for enthusiastic and customer-focused Retail Assistants to join our team. Responsibilities include stock management, cashiering, and assisting customers. Matric required. Previous retail experience advantageous.',
  },
  {
    id: 'j2',
    title: 'Underground Miner (Rock Drill Operator)',
    company: 'Impala Platinum',
    location: 'Rustenburg',
    industry: 'Mining',
    closingDate: '2026-04-20',
    applyLink: '#',
    description:
      'Impala Platinum is recruiting experienced Rock Drill Operators for underground operations at our Rustenburg lease area. COMSOC Level 1 certificate required. Candidates must reside within the Bojanala District and hold a valid blasting certificate.',
  },
  {
    id: 'j3',
    title: 'Administration Officer',
    company: 'North West Department of Health',
    location: 'Mahikeng',
    industry: 'Government',
    closingDate: '2026-04-30',
    applyLink: '#',
    description:
      'The North West Department of Health seeks an Administration Officer for the Head Office in Mahikeng. Responsibilities include records management, correspondence, and logistical support. A degree or diploma in Public Administration is required. Salary: R241 485 per annum.',
  },
  {
    id: 'j4',
    title: 'Civil Engineer (Junior)',
    company: 'Bigen Africa',
    location: 'Potchefstroom',
    industry: 'Engineering',
    closingDate: '2026-05-01',
    applyLink: '#',
    description:
      'Bigen Africa is seeking a Junior Civil Engineer to join our Potchefstroom office. The successful candidate will assist in the design and supervision of infrastructure projects including roads, stormwater, and water reticulation. BEng Civil required. Registration with ECSA advantageous.',
  },
  {
    id: 'j5',
    title: 'Primary School Teacher (Mathematics & Science)',
    company: 'Eikenhof Primary School',
    location: 'Klerksdorp',
    industry: 'Education',
    closingDate: '2026-04-25',
    applyLink: '#',
    description:
      'Eikenhof Primary School seeks a dedicated Mathematics and Science teacher for Grades 4–7. SACE registration required. The candidate should be passionate about STEM education and community development. Salary aligned with ELRC collective agreement.',
  },
  {
    id: 'j6',
    title: 'Community Health Worker',
    company: 'Thusanang Trust',
    location: 'Mahikeng',
    industry: 'Healthcare',
    closingDate: '2026-04-18',
    applyLink: '#',
    description:
      'Thusanang Trust is recruiting Community Health Workers for a Department of Health-funded programme in Mahikeng. Duties include household visits, health education, and referral of patients. Fluency in Setswana essential. Stipend: R3 500/month.',
  },
  {
    id: 'j7',
    title: 'Store Manager',
    company: 'Spar Group',
    location: 'Potchefstroom',
    industry: 'Retail',
    closingDate: '2026-05-05',
    applyLink: '#',
    description:
      'Spar Potchefstroom is seeking an experienced Store Manager to oversee daily operations, staff management, and customer service. A relevant tertiary qualification and minimum 5 years retail management experience required.',
  },
  {
    id: 'j8',
    title: 'Accountant',
    company: 'Bojanala Platinum District Municipality',
    location: 'Rustenburg',
    industry: 'Government',
    closingDate: '2026-04-28',
    applyLink: '#',
    description:
      'The Bojanala Platinum District Municipality invites applications for an Accountant position. BCom Accounting or equivalent qualification required. The successful candidate will assist with budget compilation, financial reporting, and MFMA compliance.',
  },
]

// ─── APPLICATIONS ────────────────────────────────────────────────────────────

export const applications: Application[] = [
  {
    id: 'a1',
    institution: 'North-West University (NWU)',
    openDate: '2026-03-01',
    closeDate: '2026-09-30',
    applyLink: 'https://www.nwu.ac.za',
    description:
      'NWU offers degrees across three campuses: Mahikeng, Potchefstroom, and Vanderbijlpark. Programmes available in Law, Commerce, Engineering, Health Sciences, Education, and Humanities. NSFAS-eligible students are encouraged to apply.',
  },
  {
    id: 'a2',
    institution: 'Vaal University of Technology (VUT)',
    openDate: '2026-04-01',
    closeDate: '2026-10-31',
    applyLink: 'https://www.vut.ac.za',
    description:
      'VUT offers diplomas and degrees in engineering, management sciences, human sciences, and applied and computer sciences. Students from the North West Province qualify for provincial bursaries.',
  },
  {
    id: 'a3',
    institution: 'Sol Plaatje University (SPU)',
    openDate: '2026-04-15',
    closeDate: '2026-11-15',
    applyLink: 'https://www.spu.ac.za',
    description:
      'SPU in Kimberley is a neighbouring institution accessible to North West students. Programmes include Education, Humanities, Natural and Applied Sciences, and Economic and Management Sciences.',
  },
  {
    id: 'a4',
    institution: 'Orbit TVET College',
    openDate: '2026-01-15',
    closeDate: '2026-12-01',
    applyLink: 'https://www.orbit.edu.za',
    description:
      'Orbit TVET College offers National Certificate (Vocational) and NATED programmes across campuses in Rustenburg, Brits, and Mankwe. Affordable skills development for North West youth.',
  },
  {
    id: 'a5',
    institution: 'Taletso TVET College',
    openDate: '2026-01-15',
    closeDate: '2026-12-01',
    applyLink: 'https://www.taletso.edu.za',
    description:
      'Taletso TVET College serves the greater Mahikeng area with campuses in Mmabatho, Zeerust, and Delareyville. Offers NCV and NATED programmes in engineering and business studies.',
  },
]

// ─── BURSARIES ────────────────────────────────────────────────────────────────

export const bursaries: Bursary[] = [
  {
    id: 'b1',
    title: 'Engineering Bursary for North West Students',
    sponsor: 'Impala Platinum Holdings',
    fieldOfStudy: 'Engineering (Mining, Mechanical, Electrical, Chemical)',
    deadline: '2026-05-31',
    applyLink: '#',
    description:
      'Impala Platinum offers full bursaries to North West Province students pursuing engineering degrees at accredited South African universities. Covers tuition, accommodation, and a monthly allowance. Recipients are required to complete 12 months of vacation work at Impala operations.',
  },
  {
    id: 'b2',
    title: 'NSFAS Bursary (National Student Financial Aid Scheme)',
    sponsor: 'National Student Financial Aid Scheme',
    fieldOfStudy: 'All fields of study',
    deadline: '2026-11-30',
    applyLink: 'https://www.nsfas.org.za',
    description:
      'NSFAS provides funding to eligible South African students at public universities and TVET colleges. Students from households earning R350 000 or less per annum may qualify. Applications are made online through the myNSFAS portal.',
  },
  {
    id: 'b3',
    title: 'Anglo American Bursary Programme',
    sponsor: 'Anglo American Platinum',
    fieldOfStudy: 'Engineering, Mining, Environmental Science, Finance',
    deadline: '2026-06-30',
    applyLink: '#',
    description:
      "Anglo American Platinum's bursary programme supports talented students from mining communities in the North West Province. Preference is given to students residing within Anglo's operational areas in the Bojanala and Rustenburg regions.",
  },
  {
    id: 'b4',
    title: 'North West Provincial Government Bursary',
    sponsor: 'North West Department of Education',
    fieldOfStudy: 'Teaching, Nursing, Social Work, Public Administration',
    deadline: '2026-09-30',
    applyLink: '#',
    description:
      'The North West Provincial Government awards bursaries to students pursuing critical skills needed in the province. Recipients are required to work in the public sector upon graduation for a period equal to the duration of the bursary.',
  },
  {
    id: 'b5',
    title: 'Absa Foundation Bursary',
    sponsor: 'Absa Foundation',
    fieldOfStudy: 'Commerce, Accounting, Finance, Economics, Law',
    deadline: '2026-07-31',
    applyLink: '#',
    description:
      'The Absa Foundation bursary programme targets academically deserving students from disadvantaged backgrounds. Applicants must hold a National Senior Certificate with at least 70% average in Mathematics and English.',
  },
  {
    id: 'b6',
    title: 'Sanlam Foundation Bursary',
    sponsor: 'Sanlam Foundation',
    fieldOfStudy: 'Actuarial Science, Finance, Mathematics, Statistics',
    deadline: '2026-08-15',
    applyLink: '#',
    description:
      'Sanlam Foundation supports the development of financial literacy and quantitative skills in South Africa through targeted bursaries. North West students studying at any accredited university may apply.',
  },
]

// ─── TRENDING ────────────────────────────────────────────────────────────────

export const trendingArticles = articles.slice(0, 5)
