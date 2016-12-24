
export default {
  'sharEat': {
    title : 'sharEat',
    description:'<p><strong> Find ‘live’ gourmet dishes made by local Chefs </strong>. SharEat helps create an environment for aspiring chefs. These aspiring chef can join our app and host home-cooked meals for anyone interested in attending.</p>',
    role:' I architected back-end server structure using efficient and asynchronous RESTful APIs, modeled, developed and organized a hosted mySQL database through phpMyAdmin. I utilized AWS S3 to store users’ files, thus reducing workload on the database server by over 20%. I strengthened the user interaction capabilities by designing and implementing a chat feature. Finally, I enabled continuous application deployment by launching an instance of AWS EC2.',
    img:'../assets/work_img/share-eat.png',
    link:'http://www.shareat-us.com/',
    techStack:'React, Redux, Sass, Node.js, Socket.io, MySQL, AWS.'
  },
  'Book Report': {
    title : 'BookReport',
    description:'Book Report is a SaaS platform for Kindle Direct Publishing users that scrapes self-published author’s sales data and builds a useful reporting interface.',
    role:'I reconfigured the web scraper by moving data scraping logic to server-side, creating a MongoDB database and parsing data from a spreadsheet using node-xlsx, resulting in doubled data processing efficiency. I refactored current code base by adding more modularity and separation of concerns for better readability and maintainability. I enabled user authentication to store user information and check subscription as well as payment status, thus enhancing user experience. Finally I optimized code base sustainability by implementing unit-testing and end-to-end testing.',
    img:'../assets/work_img/br.png',
    link:'http://ec2-54-161-213-215.compute-1.amazonaws.com:3000/',
    techStack:'React, Node.js, MongoDB, SendGrid, Google-charts, Bootstrap, AWS, Mocha, Chai, Enzyme, Selenium WebDriver.'
  },
  'Say Partie': {
    title : 'Say Partie',
    description:'SayPartie is a responsive web application allowing users to create, organize and manage their parties and celebrations through personalized landing pages. Users can email and text invites, manage RSVPs, update guests via notifications, and more.',
    role:'I built all the responsive views respecting the design board on Zeplin.com. I enabled user to create an account. I implemented Log In / Log Out functionality and forgot password flow.',
    img:'../assets/work_img/sp.png',
    link:'https://sp-mvp.herokuapp.com/',
    techStack:'React, Redux, Relay, GraphQL, Radium, Node.js, MySQL, Heroku.'
  },
  'PickUp': {
    title : 'PickUp',
    description:'Host or join a sport game in your area using PickUps.',
    role:'I built a stateless backend with RESTful APIs, consumed by multiple React components through action creators. I devised an algorithm that limits search radius, resulting in improved database efficiency. Fianlly I condensed the codebase, simplified database interaction and optimized table schema by refactoring raw SQL queries with Sequelize.',
    img:'../assets/work_img/pickup.png',
    link:'http://ec2-54-161-213-215.compute-1.amazonaws.com:3000/',
    techStack:'React, Redux, Node.js, Material-UI, MySQL, Google-map.'
  },
  'Toiletz': {
    title : 'Toiletz',
    description:'App designed to allow users to quickly locate clean toilets around their current location.',
    role:' I constructed 90% of front-end view and features using React, formulated data flow architecture with Redux and structured the application views using React-router. I utilized Google Map API to display data with customized icons and information box, enhancing data visualization. I implemented authentication system using JWT strategies, allowing signed-in users’ access to protected features, such as adding and reviewing toilets.',
    link:'http://ec2-54-204-215-124.compute-1.amazonaws.com:3000/',
    img:'../assets/work_img/toiletz.png',
    techStack:'React, Redux, Node.js, Google-map, JWT, MySQL.'
  },
  'My WebSite': {
    title : 'My website',
    description:'Responsive personnal website that anyone can use for their own portfolio to showcase their work on a dekstop or on a mobile phone.',
    role:'I designed and built the responsive single page views and animations using custom Sass styling to enable any developer or designer to promote their work through an engaging and persuasive UI.',
    link:'http://nizarayari.com/',
    img:'../assets/work_img/mw.png',
    techStack:'React, Sass, Bourbon, Node.js'
  }

}