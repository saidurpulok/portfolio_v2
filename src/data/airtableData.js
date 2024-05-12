const AIRTABLE_DATA = {
  projects: [
    {
      id: 1,
      title: 'Animated Landing Page',
      stack: 'Others',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800477/yodkwtf.com/projects/Screenshot_4_-min_e9runx.jpg',
      url: 'https://landingpageanimations-dk.netlify.app/',
      github:
        'https://github.com/yodkwtf/random-cool-projects/tree/main/02-smooth-page-transiitons',
    }
  ],

  featuredProjects: [
    {
      id: 1,
      title: '2. Cinematica - MERN Application',
      desc: 'Cinematica is a feature-rich MERN (MongoDB, Express, React, Node.js) application that allows users to seamlessly track and manage the movies and shows they watch or plan to watch. With user account management, full CRUD (Create, Read, Update, Delete) functionality, and a user-friendly interface, Cinematica is your go-to tool for organizing your entertainment preferences.',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711799220/yodkwtf.com/recent-works/cinematica_h8vpjv.png',
      isClientWork: false,
      stack: ['ReactJS', 'nodejs', 'express', 'MongoDB', 'JWT', 'Swagger'],
      url: 'https://cinematica-mern.vercel.app/',
      github: 'https://github.com/yodkwtf/cinematica-mern',
    }
  ],

  resources: [
    {
      id: 1,
      text: 'resume/cv',
      order: 0,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798741/yodkwtf.com/resources/res_zmaixq.png',
      title: 'Download My Resume',
      url: 'https://rxresu.me/yodkwtf/full-stack-developer',
      isLatest: true,
      hideField: false,
    },
    {
      id: 3,
      text: 'Latest Project',
      order: 1,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798735/yodkwtf.com/resources/icons8-code-48_o0k76k.png',
      title: 'Latest Personal Project',
      url: 'https://cinematica-mern.vercel.app/',
      isLatest: true,
      hideField: false,
    },
    {
      id: 4,
      text: 'my website',
      order: 2,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798734/yodkwtf.com/resources/icons8-website-48_kpx5cc.png',
      title: 'yodkwtf.com | My Portfolio',
      url: 'https://drive.google.com/file/d/1FPYiX-m3Mq6FXva-M0LTAkjkb7biIoOc/view?usp=share_link',
      isLatest: false,
      hideField: true,
    }
  ],
};

export default AIRTABLE_DATA;
