interface ProjectItems {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  demoLink: string;
  codeLink: string;
}

export const projects: ProjectItems[] = [
  {
    id: "1",
    title: "Coffee House",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos repellat distinctio eius reiciendis aliquid cumque temporibus magni.",
    imgUrl: "/projects/coffeehouse.png",
    demoLink: "https://coffeehouse-three.vercel.app/",
    codeLink: "https://github.com/behnamhamidi1991/coffeehouse",
  },
  {
    id: "2",
    title: "Course Selling React Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos repellat distinctio eius reiciendis aliquid cumque temporibus magni.",
    imgUrl: "/projects/travel.png",
    demoLink: "",
    codeLink: "",
  },
  {
    id: "3",
    title: "Smarter Dev",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos repellat distinctio eius reiciendis aliquid cumque temporibus magni.",
    imgUrl: "/projects/smarterdev.png",
    demoLink: "",
    codeLink: "",
  },
  {
    id: "4",
    title: "Fitness App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos repellat distinctio eius reiciendis aliquid cumque temporibus magni.",
    imgUrl: "/projects/fitness.png",
    demoLink: "",
    codeLink: "",
  },
  {
    id: "5",
    title: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos repellat distinctio eius reiciendis aliquid cumque temporibus magni.",
    imgUrl: "/projects/portfolio.png",
    demoLink: "",
    codeLink: "",
  },
];

interface postItems {
  id: string;
  title: string;
  content: string;
  imgUrl: string;
  hashtags: string[];
}

export const posts: postItems[] = [
  {
    id: "1",
    title: "JavaScript Tricky Questions",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quibusdam officia natus eligendi in illum dicta unde inventore odit porro reprehenderit sapiente optio quam aliquid amet sit consectetur repellat modi perferendis mollitia est asperiores deleniti, magni veritatis? Quidem adipisci recusandae nesciunt cupiditate ex earum vitae minima aliquid dignissimos neque enim sunt, assumenda id repudiandae non iste sed magnam quod magni accusantium totam sequi autem placeat. Natus ad repudiandae amet ullam doloremque corporis aliquid ut, expedita voluptatibus magni labore at tempora.recusandae nesciunt cupiditate ex earum vitae minima aliquid dignissimos neque enim sunt, assumenda id repudiandae non iste sed magnam quod magni accusantium totam sequi autem placeat. Natus ad repudiandae amet ullam doloremque corporis aliquid ut, expedita voluptatibus magni labore at tempora. recusandae nesciunt cupiditate ex earum vitae minima aliquid dignissimos neque enim sunt, assumenda id repudiandae non iste sed magnam quod magni accusantium totam sequi autem placeat. Natus ad repudiandae amet ullam doloremque corporis aliquid ut, expedita voluptatibus magni labore at tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quibusdam officia natus eligendi in illum dicta unde inventore odit porro reprehenderit sapiente optio quam aliquid amet sit consectetur repellat modi perferendis mollitia est asperiores deleniti, magni veritatis? Quidem adipisci recusandae nesciunt cupiditate ex earum vitae minima aliquid dignissimos neque enim sunt, assumenda id repudiandae non iste sed magnam quod magni accusantium totam sequi autem placeat. Natus ad repudiandae amet ullam doloremque corporis aliquid ut, expedita voluptatibus magni labore at tempora.recusandae nesciunt cupiditate ex earum vitae minima aliquid dignissimos neque enim sunt, assumenda id repudiandae non iste sed magnam quod magni accusantium totam sequi autem placeat. Natus ad repudiandae amet ullam doloremque corporis aliquid ut, expedita voluptatibus magni labore at tempora. recusandae nesciunt cupiditate ex earum vitae minima aliquid dignissimos neque enim sunt, assumenda id repudiandae non iste sed magnam quod magni accusantium totam sequi autem placeat. Natus ad repudiandae amet ullam doloremque corporis aliquid ut, expedita voluptatibus magni labore at tempora.",
    imgUrl: "/blog/js.jpg",
    hashtags: [
      "javascript",
      "frontend",
      "typescript",
      "programming",
      "web-development",
      "web-design",
    ],
  },
  {
    id: "2",
    title: "MongoDB Superpowers",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quibusdam officia natus eligendi in illum dicta unde inventore odit porro reprehenderit sapiente optio quam aliquid amet sit consectetur repellat modi perferendis mollitia est asperiores deleniti, magni veritatis? Quidem adipisci recusandae nesciunt cupiditate ex earum vitae minima aliquid dignissimos neque enim sunt, assumenda id repudiandae non iste sed magnam quod magni accusantium totam sequi autem placeat. Natus ad repudiandae amet ullam doloremque corporis aliquid ut, expedita voluptatibus magni labore at tempora.",
    imgUrl: "/blog/mongodb.jpg",
    hashtags: [
      "database",
      "backend",
      "mongodb",
      "programming",
      "web-development",
      "web-design",
    ],
  },
  {
    id: "3",
    title: "PHP Most Popular Frameworks",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quibusdam officia natus eligendi in illum dicta unde inventore odit porro reprehenderit sapiente optio quam aliquid amet sit consectetur repellat modi perferendis mollitia est asperiores deleniti, magni veritatis? Quidem adipisci recusandae nesciunt cupiditate ex earum vitae minima aliquid dignissimos neque enim sunt, assumenda id repudiandae non iste sed magnam quod magni accusantium totam sequi autem placeat. Natus ad repudiandae amet ullam doloremque corporis aliquid ut, expedita voluptatibus magni labore at tempora.",
    imgUrl: "/blog/php.jpg",
    hashtags: [
      "php",
      "backend",
      "object-oriented",
      "programming",
      "web-development",
      "server",
    ],
  },
  {
    id: "4",
    title: "Python Crash Course",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quibusdam officia natus eligendi in illum dicta unde inventore odit porro reprehenderit sapiente optio quam aliquid amet sit consectetur repellat modi perferendis mollitia est asperiores deleniti, magni veritatis? Quidem adipisci recusandae nesciunt cupiditate ex earum vitae minima aliquid dignissimos neque enim sunt, assumenda id repudiandae non iste sed magnam quod magni accusantium totam sequi autem placeat. Natus ad repudiandae amet ullam doloremque corporis aliquid ut, expedita voluptatibus magni labore at tempora.",
    imgUrl: "/blog/py.jpg",
    hashtags: [
      "python",
      "backend",
      "functional",
      "programming",
      "web-development",
      "django",
    ],
  },
  {
    id: "5",
    title: "Wordpress New Version",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quibusdam officia natus eligendi in illum dicta unde inventore odit porro reprehenderit sapiente optio quam aliquid amet sit consectetur repellat modi perferendis mollitia est asperiores deleniti, magni veritatis? Quidem adipisci recusandae nesciunt cupiditate ex earum vitae minima aliquid dignissimos neque enim sunt, assumenda id repudiandae non iste sed magnam quod magni accusantium totam sequi autem placeat. Natus ad repudiandae amet ullam doloremque corporis aliquid ut, expedita voluptatibus magni labore at tempora.",
    imgUrl: "/blog/wp.jpg",
    hashtags: [
      "wordpress",
      "website",
      "gadgets",
      "wp-development",
      "web-development",
      "web-design",
    ],
  },
  {
    id: "6",
    title: "Begin With Node.js",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quibusdam officia natus eligendi in illum dicta unde inventore odit porro reprehenderit sapiente optio quam aliquid amet sit consectetur repellat modi perferendis mollitia est asperiores deleniti, magni veritatis? Quidem adipisci recusandae nesciunt cupiditate ex earum vitae minima aliquid dignissimos neque enim sunt, assumenda id repudiandae non iste sed magnam quod magni accusantium totam sequi autem placeat. Natus ad repudiandae amet ullam doloremque corporis aliquid ut, expedita voluptatibus magni labore at tempora.",
    imgUrl: "/blog/node.jpg",
    hashtags: ["nodejs", "backend", "mern", "programming", "express", "server"],
  },
];
