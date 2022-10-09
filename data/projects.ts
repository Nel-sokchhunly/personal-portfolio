export interface projectsType {
  poster: string;
  title: string;
  description: string;
  technologies: string[];
}

export const projects: projectsType[] = [
  {
    poster:
      'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/jart%20jaeng.png?alt=media&token=bc132790-4d27-468f-ad75-74d423c34ddb',
    title: 'ចាត់ចែង - Jart Jaeng',
    description:
      "I've joined Flutter training bootcamp and after a month and a half this is the result. I've participated in a small group and built this flutter application.\n\nIn this training program, We also came first as the best application that stands out the most by vote.",
    technologies: ['Flutter', 'Dart', 'Firebase', 'Figma']
  },
  {
    poster:
      'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/penhwonders-08102022-0001.jpg?alt=media&token=74d3bb51-9bcb-4955-9f9f-7434b2c8b781',
    title: 'Penhwonder',
    description:
      'A web application + Automation built by Cambodian college students to help your life easier in finding and promoting wonderful events in Phnom Penh! The events are automatically updated from a list of registered Facebook pages once everyday at 12:30am by our automated events-creating system.',
    technologies: ['VueJS', 'Vuex', 'Vuetify']
  },
  {
    poster:
      'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/odoo%20image.png?alt=media&token=19aaeadf-7400-4121-b441-7959b0625c2d',
    title: 'Odoo application',
    description:
      'Participate in building an odoo enterprise application for internal use that is more that 500 users.',
    technologies: ['Odoo', 'Python', 'XML', 'Postgres']
  }
];
