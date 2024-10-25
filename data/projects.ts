import { Technologies } from "./constants";

export interface projectsType {
  id: string;
  poster: string;
  images?: string[];
  link?: string;
  title: string;
  description: string;
  technologies: {
    name: string;
    logo: string;
  }[];
}

export const projects: projectsType[] = [
  {
    id: "nextjs-image-quickview",
    poster: "/nextjs-image-quickview-logo.jpg",
    title: "Nextjs Image Quickview",
    link: "https://marketplace.visualstudio.com/items?itemName=nelsokchhunly.next-image-quickview",
    description: `
Developed a VSCODE Extension that allows developers to quickly preview the src image of
the image tag in TSX files with the options to reveal the files in the explore helping the
developer by eliminating the time to go through file explorer to find the file`,
    technologies: [Technologies.typescript],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/vscode-ext%2Fnew-demo.gif?alt=media&token=27888cf5-680f-4f34-beb8-266f18726bbb",
    ],
  },
  {
    id: "kjeybook",
    poster: "/kjeybook-logo.png",
    title: "Kjeybook",
    description: `
      Kjeybook is a web application that I've built using NextJS, TailwindCSS and Typescript.
      This website is an application where the user can view a list of books of a specific library and make a request to borrow the book.
      It also has an admin page where the admin can manage the books and the users request.
      
      This web application is the result of my group for the bootcamp project. I am responsible for the leading the frontend team.
      I am very happy with the result as our application was voted to be Best Project by the bootcamp committee.
    `,
    technologies: [
      Technologies.nextjs,
      Technologies.tailwindcss,
      Technologies.typescript,
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/kjeybook%2FScreenshot%202023-07-29%20215454.png?alt=media&token=b7dfc6e2-a0f4-457e-a8e7-6249f2a0c5f5",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/kjeybook%2FScreenshot%202023-07-29%20215507.png?alt=media&token=aaf031aa-2671-46d0-bb8d-790b80df4970",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/kjeybook%2FScreenshot%202023-07-29%20215511.png?alt=media&token=84bf24f8-29cc-4af9-b939-544f7eef7fdf",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/kjeybook%2FScreenshot%202023-07-29%20215516.png?alt=media&token=5a0c3e95-b8f2-43f8-b0d3-7ad89c913dfa",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/kjeybook%2FScreenshot%202023-07-29%20220205.png?alt=media&token=f55e3c62-230d-4039-becc-8c41ced64644",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/kjeybook%2FScreenshot%202023-07-29%20220208.png?alt=media&token=289ca298-60b5-48c2-9e69-e68415a0ae74",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/kjeybook%2FScreenshot%202023-07-29%20220218.png?alt=media&token=918c3c18-b23e-4ab9-96b9-27caf36f7cf2",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/kjeybook%2FScreenshot%202023-07-29%20220223.png?alt=media&token=476f3b2d-e75d-44c6-b760-4f8044328f9d",
    ],
  },
  {
    id: "chat-web-app",
    poster:
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/Chat%20message%2FScreenshot%202023-06-09%20112915.png?alt=media&token=fa4a0576-e0ff-432e-975a-094b2cc3fef3&_gl=1*dwaz5*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjI4NDM1NC40LjEuMTY4NjI4NDk4MC4wLjAuMA..",
    title: "Chat message web",
    description: `
    This is a chat massage web application that I've built using VueJS, Pinia and Pocketbase as a backend service.<br/>
    I build this application to learn more about how the chat message web application works and how to build it from scratch.\n
    This chat message web application was also built to be able to use inside internal wifi network without internet connection.
    `,
    technologies: [
      Technologies.vuejs,
      Technologies.pinia,
      Technologies.pocketbase,
      Technologies.tailwindcss,
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/Chat%20message%2Fphoto1686284318.jpeg?alt=media&token=6e93a580-1d6f-4b0a-8f22-814269b2ac21&_gl=1*13fyr95*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjI4NDM1NC40LjEuMTY4NjI4NDQzOS4wLjAuMA..",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/Chat%20message%2Fphoto1686284318%20(1).jpeg?alt=media&token=3e765b93-d491-46ab-a1f7-63d2e29994e8&_gl=1*e9gwm1*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjI4NDM1NC40LjEuMTY4NjI4NDY3Ny4wLjAuMA..",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/Chat%20message%2Fphoto1686284318%20(2).jpeg?alt=media&token=70b024c4-16fb-4980-abb2-aa71a133af83&_gl=1*1d931j1*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjI4NDM1NC40LjEuMTY4NjI4NDY4OS4wLjAuMA..",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/Chat%20message%2Fphoto1686284318%20(3).jpeg?alt=media&token=807d0884-0baf-45b9-9855-8c9898804f05&_gl=1*1aakfe1*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjI4NDM1NC40LjEuMTY4NjI4NDY5OC4wLjAuMA..",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/Chat%20message%2Fphoto1686284318%20(4).jpeg?alt=media&token=08d20a17-422b-44da-b7e5-7e9acb9aa98f&_gl=1*t2f52*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjI4NDM1NC40LjEuMTY4NjI4NDcwOC4wLjAuMA..",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/Chat%20message%2Fphoto1686284318%20(5).jpeg?alt=media&token=98fcc085-c206-45df-a941-bd8a4660dd47&_gl=1*5luvih*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjI4NDM1NC40LjEuMTY4NjI4NDcyMC4wLjAuMA..",
    ],
  },
  {
    id: "smart-laundry-dashboard",
    poster:
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/Smart%20Laundry%2FScreenshot%202023-06-09%20113633.png?alt=media&token=5be39f7c-6675-4bc9-9ee4-6f6de112ed69&_gl=1*12oegvh*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjI4NDM1NC40LjEuMTY4NjI4NTY5MS4wLjAuMA..",
    title: "Smart Laundry Dashboard",
    description: `
    Participated in an internal internship project in building dashboard system that is being used by more than 100 students.
    
    This dashboard is build for the student usage to regarding Smart Laundry System and also comes with the Admin dashboard. 
    Admin Dashboard allows the admin of the system to manage the system including the machine status, user management, and more.`,
    // technologies: ['NextJS', 'TailwindCSS', 'Typescript'],
    technologies: [
      Technologies.nextjs,
      Technologies.tailwindcss,
      Technologies.typescript,
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/Smart%20Laundry%2FScreenshot%202023-06-09%20113633.png?alt=media&token=5be39f7c-6675-4bc9-9ee4-6f6de112ed69&_gl=1*u5scdm*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjI4NDM1NC40LjEuMTY4NjI4NTY5MS4wLjAuMA..",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/Smart%20Laundry%2FScreenshot%202023-06-09%20113656%20(1).png?alt=media&token=72097e7e-799c-43ce-9b6c-9ff67e6ac049&_gl=1*dfxmk5*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjI4NDM1NC40LjEuMTY4NjI4NjEyMC4wLjAuMA..",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/Smart%20Laundry%2FScreenshot%202023-06-09%20113752.png?alt=media&token=ebf9e777-c13d-41fa-8b1d-d9b0815e0393&_gl=1*1ehx60m*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjI4NDM1NC40LjEuMTY4NjI4NjI0Mi4wLjAuMA..",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/Smart%20Laundry%2FScreenshot%202023-06-09%20113810.png?alt=media&token=ece7dee5-22d1-4d72-a140-3256b7fefec9&_gl=1*14sewmp*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjI4NDM1NC40LjEuMTY4NjI4NjI0OS4wLjAuMA..",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/Smart%20Laundry%2FScreenshot%202023-06-09%20114041.png?alt=media&token=484a3b63-b093-4112-87d0-61a8061a7284&_gl=1*2a9s6p*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjI4NDM1NC40LjEuMTY4NjI4NjI3MC4wLjAuMA..",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/Smart%20Laundry%2FScreenshot%202023-06-09%20115409.png?alt=media&token=fba012df-c898-41b4-b0e7-b939a3e8fccf&_gl=1*56zjxx*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjI4NDM1NC40LjEuMTY4NjI4NjQ2Ny4wLjAuMA..",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/Smart%20Laundry%2FScreenshot%202023-06-09%20113846.png?alt=media&token=6fb7c0c6-3bca-438b-9131-8467abf1d559&_gl=1*1n5k66z*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjI4NDM1NC40LjEuMTY4NjI4NjI1NS4wLjAuMA..",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/Smart%20Laundry%2FScreenshot%202023-06-09%20113901.png?alt=media&token=a2c097ef-3234-4152-bc41-3e6db9efae47&_gl=1*1d9zs4n*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjI4NDM1NC40LjEuMTY4NjI4NjI2Mi4wLjAuMA..",
    ],
  },
  {
    id: "jart-jaeng",
    poster:
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/jart%20jaeng.png?alt=media&token=bc132790-4d27-468f-ad75-74d423c34ddb",
    title: "ចាត់ចែង - Jart Jaeng",
    description: `
      I've joined Flutter training bootcamp and after a month and a half this is the result. I've participated in a small group and built this flutter application.
      In this training program, We also came first as the best application that stands out the most by vote.\n
      The idea of this application is aiming to helps the online sellers on the social media platform \nto have a better experience in selling their products by provide an application that can helps manage their products, orders, and customers.
    `,
    technologies: [
      Technologies.flutter,
      Technologies.dart,
      Technologies.firebase,
      Technologies.figma,
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/jart%20jaeng%2Fphoto1686216922%20(1).jpeg?alt=media&token=33560b91-30fa-457e-b652-e8935501a1df&_gl=1*1xr01j9*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjIxMzUxNy4yLjEuMTY4NjIxNzEyNy4wLjAuMA..",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/jart%20jaeng%2Fphoto1686216922%20(2).jpeg?alt=media&token=a0ee54e6-3858-4394-bee9-00dbaa5c45b0&_gl=1*lilmno*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjIxMzUxNy4yLjEuMTY4NjIxNzE1OC4wLjAuMA..",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/jart%20jaeng%2Fphoto1686216922%20(3).jpeg?alt=media&token=8c5357a0-9ce2-457f-b1bd-b4de4b6621a4&_gl=1*xyy6l1*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjIxMzUxNy4yLjEuMTY4NjIxNzE5OS4wLjAuMA..",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/jart%20jaeng%2Fphoto1686216922%20(4).jpeg?alt=media&token=b4de5a9c-3ea4-4ba9-860c-1743f9644f7d&_gl=1*1xqprdm*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjIxMzUxNy4yLjEuMTY4NjIxNzIxNi4wLjAuMA..",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/jart%20jaeng%2Fphoto1686216922%20(5).jpeg?alt=media&token=bf901091-c47b-4c30-a4ab-ba213d3a3fff&_gl=1*11srmac*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjIxMzUxNy4yLjEuMTY4NjIxNzIyNy4wLjAuMA..",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/jart%20jaeng%2Fphoto1686216922.jpeg?alt=media&token=bf783270-78fb-4ca8-949a-3265ad9f1dc3&_gl=1*18ts29g*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjIxMzUxNy4yLjEuMTY4NjIxNzI0MS4wLjAuMA..",
    ],
  },
  {
    id: "odoo-application",
    poster:
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/odoo%20image.png?alt=media&token=19aaeadf-7400-4121-b441-7959b0625c2d",
    title: "Odoo application",
    description: `
      Working in a team and building more than 10 odoo application
      custom modules for Internal company usage and being used by
      more than 200 staff members
    `,
    technologies: [
      Technologies.odoo,
      Technologies.python,
      Technologies.xml,
      Technologies.postgresql,
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/odoo%2Fodoo-1.jpeg?alt=media&token=20bad9fa-cc36-4b79-9693-207bf17a4936",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/odoo%2Fodoo-2.jpeg?alt=media&token=ae8168ad-a828-4cde-b8fb-5df31eb2e39b",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/odoo%2Fodoo-3.jpeg?alt=media&token=3222956a-e2d4-413e-8b6f-a46b56322468",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/odoo%2Fodoo-4.jpeg?alt=media&token=5fd54041-3d70-4107-a842-2b24713a1785",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/odoo%2Fodoo-5.jpeg?alt=media&token=2941ecee-79c6-4319-83b2-8d2b2848e8a2",
    ],
  },
  {
    id: "penhwonder",
    poster:
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/penhwonders-08102022-0001.jpg?alt=media&token=74d3bb51-9bcb-4955-9f9f-7434b2c8b781",
    title: "Penhwonder",
    description:
      "A web application + Automation built by Cambodian college students to help your life easier in finding and promoting wonderful events in Phnom Penh! The events are automatically updated from a list of registered Facebook pages once everyday at 12:30am by our automated events-creating system.",
    technologies: [Technologies.vuejs, Technologies.vuex, Technologies.vuetify],

    images: [
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/penhwonder%2FScreenshot%202023-06-08%20165951.png?alt=media&token=d499f768-3ba4-4565-a4f5-b16d065a1cce&_gl=1*xvhw5p*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjIxMzUxNy4yLjEuMTY4NjIxODUyMy4wLjAuMA..",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/penhwonder%2FScreenshot%202023-06-08%20170037.png?alt=media&token=7f87c5d9-43a1-416f-bb41-47baeb849b1c&_gl=1*o8nkur*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjIxMzUxNy4yLjEuMTY4NjIxODU1MC4wLjAuMA..",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/penhwonder%2FScreenshot%202023-06-08%20170059.png?alt=media&token=d98d9421-d2b8-44cb-b6b5-e66d7ba61f0e&_gl=1*13ktgwe*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjIxMzUxNy4yLjEuMTY4NjIxODU2Mi4wLjAuMA..",
      "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-7cbca.appspot.com/o/penhwonder%2FScreenshot%202023-06-08%20170137.png?alt=media&token=de46a944-0cf3-440a-80c3-20269a5d80ac&_gl=1*16px6mr*_ga*MTE2MTM2NTU0Mi4xNjc5OTg5ODI5*_ga_CW55HF8NVT*MTY4NjIxMzUxNy4yLjEuMTY4NjIxODU3MS4wLjAuMA..",
    ],
  },
];
