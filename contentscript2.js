const titles = {
    frontend: ["JavaScript Crash Course for Beginners",
        "React.js: Building Your First App",
        "CSS Grid vs. Flexbox: Which One to Use?",
        "Bootstrap 5: Responsive Web Design Tutorial",
        "Creating a Single-Page Application with Vue.js",
        "TypeScript for JavaScript Developers: A Beginner's Guide",
        "Web Accessibility Best Practices",
        "CSS Animations: A Complete Guide",
        "Top 10 Modern JavaScript Features You Should Know",
        "Building Progressive Web Apps with React",
        "Responsive Design Techniques: Mobile-First Approach",
        "RESTful APIs in Frontend Development: A Tutorial",
        "Understanding Jamstack: The Future of Web Development",
        "SEO Basics for Frontend Developers",
        "Webpack Tutorial: Setting Up for Beginners",
        "Introduction to Git and GitHub for Developers",
        "Creating Custom Hooks in React: Best Practices",
        "Motion UI: Enhancing User Experience with Animation",
        "Designing Voice User Interfaces for Web Applications",
        "Web Performance Optimization: Speeding Up Your Site"],
    backend: ["Serverless Architecture Explained",
        "How to Build RESTful APIs with Node.js",
        "Introduction to Microservices Architecture",
        "Understanding Docker and Containerization",
        "Getting Started with GraphQL",
        "Building Scalable Applications with Go",
        "Node.js vs Python: Which One to Choose for Backend?",
        "Best Practices for API Security",
        "Learning Ruby on Rails for Backend Development",
        "Implementing Authentication in Web Applications",
        "Top PHP Frameworks for 2024",
        "Using AI and Machine Learning in Backend Systems",
        "Understanding Event-Driven Architecture",
        "Introduction to Firebase for Backend Development",
        "Working with SQL vs NoSQL Databases",
        "Best Practices for Version Control in Backend Development",
        "How to Deploy Your Backend Application on AWS",
        "Optimizing Database Performance for Web Applications",
        "Understanding Web Security Fundamentals",
        "Creating a REST API with Express.js"],
    fullstack: ["Full Stack Development for Beginners: Build a Complete Web Application",
        "Top 10 Full Stack Development Frameworks to Learn in 2024",
        "How to Become a Full Stack Developer: A Step-by-Step Guide",
        "Building a REST API with Node.js and Express: Full Stack Tutorial",
        "MERN Stack Tutorial: Build a Full Stack App with MongoDB, Express, React, and Node",
        "Django Full Stack Web Development: A Complete Course for Beginners",
        "Introduction to GraphQL for Full Stack Developers",
        "Understanding JWT Authentication in Full Stack Applications",
        "Building Real-Time Applications with Socket.IO and Node.js",
        "Deploying Your Full Stack App to AWS: Step-by-Step Guide",
        "Building a Full Stack E-commerce Application from Scratch",
        "How to Use Docker for Full Stack Development",
        "Creating a Personal Blog with Next.js and Contentful",
        "Full Stack Development Trends to Watch in 2024",
        "Building a Chat Application with React and Firebase: Full Stack Tutorial",
        "Full Stack JavaScript Development: From Zero to Hero",
        "Using TypeScript in Full Stack Development: Best Practices",
        "Building a Portfolio Website as a Full Stack Developer",
        "Mastering API Development for Full Stack Applications",
        "How to Build a Mobile App with React Native: Full Stack Approach",
        "Best Practices for Full Stack Development: Tips for Success"],
    devsops: ["DevOps Fundamentals for Beginners",
        "Continuous Integration and Continuous Deployment (CI/CD)",
        "Understanding Docker and Containerization",
        "DevOps Best Practices for 2024",
        "Implementing Infrastructure as Code (IaC)",
        "Monitoring and Logging in DevOps",
        "GitOps: Git-based Continuous Deployment",
        "Building a CI/CD Pipeline with Jenkins",
        "Kubernetes: Orchestrating Containerized Applications",
        "DevSecOps: Integrating Security into DevOps",
        "Introduction to Serverless Computing",
        "Chaos Engineering: Ensuring Resiliency",
        "Site Reliability Engineering (SRE) Explained",
        "Automating DevOps with Artificial Intelligence",
        "MLOps: Machine Learning Operations in DevOps",
        "FinOps: Optimizing Cloud Costs in DevOps",
        "NoOps: The Future of Automated Operations",
        "DataOps: Enhancing Data Management in DevOps",
        "Using Terraform for Infrastructure Automation",
        "Top DevOps Tools for 2024"],
    flutter: ["Mastering Flutter & Dart in 2024: Your Ultimate Introduction to Cross-Platform App Development",
        "Flutter Roadmap 2024: Become a Flutter Developer!",
        "Flutter Tutorial In 2 Hours by a REAL Project - 2024",
        "Why You Should Learn Flutter in 2024: Top Reasons to Master Flutter",
        "Top 10 Flutter App Development Trends to Watch Out for in 2024",
        "Building Your First Flutter App: A Step-by-Step Guide",
        "Flutter State Management: Which Approach to Choose?",
        "Integrating Firebase with Flutter: A Complete Tutorial",
        "Creating Responsive UI with Flutter: Best Practices",
        "Dart vs. JavaScript: Which Language is Better for Flutter Development?",
        "Building Beautiful UIs with Flutter: Tips and Tricks",
        "Testing Flutter Apps: A Comprehensive Guide",
        "Deploying Flutter Apps: How to Launch Your App on App Stores",
        "Top 5 Flutter Packages You Must Know in 2024",
        "Using Flutter for Web Development: What You Need to Know",
        "Flutter for Desktop: Building Cross-Platform Applications",
        "Real-Time Chat App with Flutter and Firebase: Complete Tutorial",
        "Implementing Animations in Flutter: Enhance Your Apps",
        "Creating Custom Widgets in Flutter: A Deep Dive",
        "Flutter vs. React Native: Which Framework Should You Choose?",
        "The Future of Flutter Development: Trends and Predictions"],
    design: [
        "Web & UI Design Trends for 2024",
        "Design a Professional Website UI Using Figma: Complete Tutorial",
        "Figma Tutorial for Beginners: Website Design Essentials",
        "FREE Figma Web Design Course: Design a Website from Scratch",
        "How to Create Responsive Designs in Figma",
        "Mastering Auto Layout in Figma for Web Design",
        "Creating Stunning Prototypes with Figma",
        "Best Figma Plugins for UI/UX Design in 2024",
        "Designing Effective User Interfaces: Tips and Tricks in Figma",
        "Building Interactive User Flows in Figma",
        "Using Figma for Mobile and Web Design: A Comprehensive Guide",
        "Figma vs. Adobe XD: Which is Better for Web Design?",
        "Creating Accessible Designs with Figma",
        "Top 10 Figma Features Every Designer Should Know",
        "Web Design Fundamentals: Applying Design Principles in Figma",
        "How to Use Components and Assets in Figma",
        "Collaborating in Figma: Best Practices for Design Teams",
        "How to Conduct User Testing with Figma Prototypes",
        "Creating a Design System in Figma: Step-by-Step",
        "Exploring Figma's New Features for 2024"
    ],
    database: ["Top 5 Databases to Learn in 2024",
        "PostgreSQL vs MySQL: Which is Better?",
        "Getting Started with MongoDB",
        "How to Optimize SQL Queries",
        "Understanding NoSQL vs SQL Databases",
        "Database Design Principles for Beginners",
        "How to Migrate from MySQL to PostgreSQL",
        "Using SQLite in Mobile Apps",
        "Database Indexing Explained",
        "How to Create a REST API with Node.js and MongoDB",
        "SQL vs NoSQL: When to Use Each",
        "The Future of Database Management Systems",
        "Introduction to Graph Databases",
        "Setting Up a Database in the Cloud",
        "Top 10 Tips for Database Security",
        "How to Use Redis for Caching",
        "Data Modeling for Relational Databases",
        "Best Practices for Database Backup and Recovery",
        "Exploring NewSQL Databases",
        "How to Use SQLAlchemy with Python"],
};// Select the elements
const searchInput = document.querySelector("#search-input #search");
const searchButton = document.querySelector("#search-icon-legacy");
const clearButton = document.querySelector("#search-clear-button button");
const searchForm = document.querySelector("#search-form");

// Function to perform search and clear in sequence
async function performSearchAndClear(queryArray, index = 0) {
    if (!queryArray || index >= queryArray.length) return; // Stop if no more queries
  
    console.log("Performing search and clear...");
  
    try {
      // Set the current query in the search input
      searchInput.click()
      searchInput.value = queryArray[index];
  
      // Trigger the search
      searchForm.submit();
    // searchButton.click();
      console.log("try to submit")
  
      // Wait for the search results to load (adjust the delay as needed)
      await new Promise((resolve) => setTimeout(resolve, 5000));
  
      // Clear the search input
      clearButton.click();
  
      // Wait for the clear action to complete (adjust the delay as needed)
      await new Promise((resolve) => setTimeout(resolve, 3000));
  
      // Recursive call to process the next query
      await performSearchAndClear(queryArray, index + 1);
    } catch (error) {
      console.error('Error during search and clear:', error);
    }
  }
// Start the search and clear process with the data array



chrome.storage.sync.get(["TriggerTopic"], (result) => {
  if (result.TriggerTopic) {
    const topic = result.TriggerTopic;
    console.log("Triggering search with topic:", topic);
    const data = titles[topic];
    performSearchAndClear(data);
  } else{
    console.log("No topic selected");
  }
});