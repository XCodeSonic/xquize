export const quizzes = [
  // ============================================================
// Add these two quiz objects into the `quizzes` array in
// src/data/quizzes.js. Sourced strictly from:
//   Week-1-Introduction-to-Cloud-Computing.pdf
//   2-CLOUD-CHARACTERISTICS-AND-SERVICE-MODELS.pdf
// No outside information included.
// ============================================================

{
  id: "week1-cloud-intro",
  title: "Week 1",
  subtitle: "Introduction to Cloud Computing",
  emoji: "☁️",
  color: "#0A84FF",
  week: "1st week",
  description: "Definition of cloud computing, why it emerged, its benefits and challenges, hyperscalers, and everyday cloud applications.",
  questions: [
    // ---------------------------
    // MULTIPLE CHOICE
    // ---------------------------
    {
      type: "multiple_choice",
      question: "What is cloud computing, as defined in the lesson?",
      options: [
        "A model where computing resources are pooled together and shared across many users, allocated instantly over the internet when needed",
        "A physical data center owned by a single company",
        "A type of computer hardware used only by large enterprises",
        "A programming language for building web applications"
      ],
      answer: 0,
      explanation: "Cloud computing is a model where computing resources—such as servers, storage, databases, and software—are pooled together and shared across many users, allocated instantly over the internet, exactly when needed."
    },
    {
      type: "multiple_choice",
      question: "Instead of owning physical data centers, organizations do what according to the lesson?",
      options: [
        "Build their own smaller data centers",
        "Access technology services from a cloud provider like AWS, Azure, or Google Cloud",
        "Rent office space with built-in servers",
        "Hire a private IT contractor"
      ],
      answer: 1,
      explanation: "Instead of owning physical data centers, organizations access technology services from a cloud provider like AWS, Azure, or Google Cloud."
    },
    {
      type: "multiple_choice",
      question: "The lesson compares cloud computing to which everyday utility?",
      options: ["Water", "Electricity", "Gas", "Internet cable"],
      answer: 1,
      explanation: "The lesson says: think of it like electricity — you don't build your own power plant, you just plug into the grid and pay for what you use."
    },
    {
      type: "multiple_choice",
      question: "Which of the following is NOT one of the four reasons cloud computing emerged?",
      options: ["Cost Efficiency", "Scalability", "Global Reach", "Data Ownership"],
      answer: 3,
      explanation: "The four reasons are Cost Efficiency, Scalability, Global Reach, and Agility. Data Ownership is not one of them."
    },
    {
      type: "multiple_choice",
      question: "Which reason for cloud computing's emergence eliminated massive upfront capital investment in hardware and data centers?",
      options: ["Cost Efficiency", "Scalability", "Global Reach", "Agility"],
      answer: 0,
      explanation: "Cost Efficiency eliminated massive upfront capital investment in hardware and data centers."
    },
    {
      type: "multiple_choice",
      question: "Which reason allows resources to scale up or down instantly to match demand with no over-provisioning?",
      options: ["Cost Efficiency", "Scalability", "Global Reach", "Agility"],
      answer: 1,
      explanation: "Scalability: resources can scale up or down instantly to match demand — no over-provisioning."
    },
    {
      type: "multiple_choice",
      question: "Which reason lets applications deploy to users worldwide in minutes using regional data centers?",
      options: ["Cost Efficiency", "Scalability", "Global Reach", "Agility"],
      answer: 2,
      explanation: "Global Reach: deploy applications to users worldwide in minutes using regional data centers."
    },
    {
      type: "multiple_choice",
      question: "Which reason lets developers provision resources in minutes, accelerating innovation cycles?",
      options: ["Cost Efficiency", "Scalability", "Global Reach", "Agility"],
      answer: 3,
      explanation: "Agility: developers can provision resources in minutes, accelerating innovation cycles."
    },
    {
      type: "multiple_choice",
      question: "Who defines the five essential characteristics of cloud computing mentioned in the lesson?",
      options: ["ISO", "NIST", "IEEE", "W3C"],
      answer: 1,
      explanation: "NIST (National Institute of Standards and Technology) defines the five essential characteristics of cloud computing."
    },
    {
      type: "multiple_choice",
      question: "What does NIST stand for?",
      options: [
        "National Institute of Standards and Technology",
        "National Institute of Software Technology",
        "New International Standards Taskforce",
        "National Internet Security Team"
      ],
      answer: 0,
      explanation: "NIST stands for National Institute of Standards and Technology, which provides the globally accepted standard definition, framework, and taxonomy for cloud computing."
    },
    {
      type: "multiple_choice",
      question: "Which of the following is a benefit of cloud computing FOR BUSINESSES?",
      options: [
        "Access to cutting-edge AI and ML tools",
        "Reduced IT infrastructure costs",
        "Remote access to labs and resources",
        "Automated provisioning and DevOps pipelines"
      ],
      answer: 1,
      explanation: "For Businesses, benefits include reduced IT infrastructure costs, faster time-to-market for products, pay only for what you use, and business continuity and disaster recovery."
    },
    {
      type: "multiple_choice",
      question: "Which of the following is a benefit of cloud computing FOR TECHNICAL TEAMS?",
      options: [
        "Reduced IT infrastructure costs",
        "Low-cost access to enterprise-grade platforms",
        "Containerization and microservices support",
        "Business continuity and disaster recovery"
      ],
      answer: 2,
      explanation: "For Technical Teams, benefits include automated provisioning and DevOps pipelines, access to cutting-edge AI and ML tools, global deployment with minimal latency, and containerization and microservices support."
    },
    {
      type: "multiple_choice",
      question: "Which of the following is a benefit of cloud computing FOR EDUCATION?",
      options: [
        "Faster time-to-market for products",
        "Hands-on experience with real cloud environments",
        "Global deployment with minimal latency",
        "Pay only for what you use"
      ],
      answer: 1,
      explanation: "For Education, benefits include remote access to labs and resources, collaborative tools for distributed teams, low-cost access to enterprise-grade platforms, and hands-on experience with real cloud environments."
    },
    {
      type: "multiple_choice",
      question: "Which challenge category includes 'data breaches and unauthorized access' and 'weak identity and access management'?",
      options: ["Security Concerns", "Business Challenges", "Configuration Issues", "Global Reach"],
      answer: 0,
      explanation: "Security Concerns include data breaches and unauthorized access, compliance with regulations, shared responsibility model confusion, insider threats, weak IAM, and data loss/inadequate backup."
    },
    {
      type: "multiple_choice",
      question: "Which challenge category includes 'vendor lock-in and migration complexity' and 'skill gaps in cloud talent'?",
      options: ["Security Concerns", "Business Challenges", "Configuration Issues", "Global Reach"],
      answer: 1,
      explanation: "Business Challenges include vendor lock-in and migration complexity, unpredictable costs at scale, downtime and service dependency risks, and skill gaps in cloud talent."
    },
    {
      type: "multiple_choice",
      question: "Which challenge category includes 'publicly accessible storage' and 'excessive permissions'?",
      options: ["Security Concerns", "Business Challenges", "Configuration Issues", "Global Reach"],
      answer: 2,
      explanation: "Configuration Issues include publicly accessible storage, excessive permissions, and missing or weak authentication controls."
    },
    {
      type: "multiple_choice",
      question: "Which two specific regulations are named as compliance examples under Security Concerns?",
      options: ["GDPR and HIPAA", "SOX and PCI-DSS", "ISO 27001 and FISMA", "COPPA and FERPA"],
      answer: 0,
      explanation: "Security Concerns mention compliance with regulations such as GDPR and HIPAA."
    },
    {
      type: "multiple_choice",
      question: "What is a hyperscaler?",
      options: [
        "A small startup offering local hosting services",
        "A cloud provider that operates at a truly massive, global scale with millions of servers for millions of customers",
        "A device used to speed up internet connections",
        "A type of database used for scaling applications"
      ],
      answer: 1,
      explanation: "A hyperscaler is a cloud provider that operates at a truly massive, global scale, with millions of servers across data centers on every continent, serving millions of customers at once."
    },
    {
      type: "multiple_choice",
      question: "According to the lesson, how many companies command the majority of the world's cloud infrastructure market?",
      options: ["Two", "Three", "Five", "Ten"],
      answer: 1,
      explanation: "The lesson states that 3 companies command the majority of the world's cloud infrastructure market."
    },
    {
      type: "multiple_choice",
      question: "Which hyperscaler is described as having deep integration with Microsoft 365 and Active Directory, and strong hybrid-cloud capabilities?",
      options: ["AWS", "Microsoft Azure", "Google Cloud Platform", "IBM Cloud"],
      answer: 1,
      explanation: "Microsoft Azure is an enterprise-focused platform with deep integration into Microsoft 365, Active Directory, and hybrid cloud, strong in government and regulated industries."
    },
    {
      type: "multiple_choice",
      question: "Which hyperscaler is described as the cloud pioneer and market leader with the broadest portfolio of services?",
      options: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Oracle Cloud"],
      answer: 0,
      explanation: "AWS is the cloud pioneer and market leader, offering the broadest portfolio of services with the largest global footprint and mature ecosystem."
    },
    {
      type: "multiple_choice",
      question: "Which hyperscaler is known for data analytics, AI/ML capabilities, and open-source leadership (Kubernetes)?",
      options: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Alibaba Cloud"],
      answer: 2,
      explanation: "Google Cloud Platform is known for data analytics, AI/ML capabilities, and open-source leadership (Kubernetes), strong in data-driven and developer-centric organizations."
    },
    {
      type: "multiple_choice",
      question: "According to the lesson, what is a limitation of AWS?",
      options: [
        "It has a smaller cloud presence than Microsoft and Amazon",
        "Its architecture often requires considerable knowledge of networking, security, and billing",
        "It lacks support for enterprise applications",
        "It has no hybrid-cloud capabilities"
      ],
      answer: 1,
      explanation: "A limitation of AWS is that its architecture often requires considerable knowledge of networking, security, and billing, and the sheer number of services can overwhelm beginners."
    },
    {
      type: "multiple_choice",
      question: "According to the lesson, what is a limitation of Google Cloud Platform (GCP)?",
      options: [
        "Pricing can be complicated because costs depend on multiple dimensions of usage",
        "The sheer number of services can overwhelm beginners",
        "Google had a smaller cloud presence than Microsoft and Amazon",
        "It requires considerable knowledge of networking and billing"
      ],
      answer: 2,
      explanation: "A limitation of GCP is that Google had a smaller cloud presence than Microsoft and Amazon, with a smaller overall enterprise ecosystem and fewer third-party integrations."
    },
    {
      type: "multiple_choice",
      question: "Which cloud-based examples are listed under 'Email & Storage' in Cloud Computing in Everyday Life?",
      options: [
        "Netflix, Spotify, YouTube",
        "Gmail, Google Drive, OneDrive",
        "Siri, Alexa, ChatGPT",
        "Mobile banking apps"
      ],
      answer: 1,
      explanation: "Under Email & Storage: Gmail, Google Drive, OneDrive — all cloud-powered."
    },
    {
      type: "multiple_choice",
      question: "Which examples are listed under 'Streaming' in Cloud Computing in Everyday Life?",
      options: [
        "Gmail, Google Drive, OneDrive",
        "Netflix, Spotify, and YouTube",
        "Siri, Alexa, and ChatGPT",
        "Mobile banking apps"
      ],
      answer: 1,
      explanation: "Under Streaming: Netflix, Spotify, and YouTube run entirely on cloud infrastructure."
    },
    {
      type: "multiple_choice",
      question: "Which examples are listed under 'AI Assistants' in Cloud Computing in Everyday Life?",
      options: [
        "Gmail, Google Drive, OneDrive",
        "Netflix, Spotify, and YouTube",
        "Siri, Alexa, and ChatGPT",
        "Mobile banking apps"
      ],
      answer: 2,
      explanation: "Under AI Assistants: Siri, Alexa, and ChatGPT are cloud-based AI services."
    },
    {
      type: "multiple_choice",
      question: "According to the lesson, what does the Banking category illustrate about cloud computing?",
      options: [
        "Mobile banking apps rely on cloud for security and availability",
        "Banks avoid cloud computing due to regulations",
        "Cloud computing is only used for entertainment apps",
        "Banking apps do not use the internet"
      ],
      answer: 0,
      explanation: "Banking: Mobile banking apps rely on cloud for security and availability."
    },
    {
      type: "multiple_choice",
      question: "What is the Key Takeaway of the Week 1 lesson?",
      options: [
        "Cloud computing is too expensive for small businesses",
        "Cloud computing is the invisible backbone of the digital economy, and understanding it is a competitive advantage for IT professionals",
        "Only large enterprises benefit from cloud computing",
        "Cloud computing will replace all IT jobs"
      ],
      answer: 1,
      explanation: "Key Takeaway: Cloud computing is the invisible backbone of the digital economy. Understanding it is your competitive advantage as an IT professional."
    },
    {
      type: "multiple_choice",
      question: "In the 'Picture This' scenario, how many users did the startup app have yesterday versus today?",
      options: [
        "10 users, then 1,000 users",
        "100 users, then 10 million users",
        "1,000 users, then 100,000 users",
        "100 users, then 1 million users"
      ],
      answer: 1,
      explanation: "Yesterday: 100 users. Today: 10 million users — illustrating why a single laptop cannot serve everyone."
    },
    // ---------------------------
    // TRUE / FALSE
    // ---------------------------
    {
      type: "true_false",
      question: "According to the lesson, over 90% of enterprises use cloud services.",
      answer: true,
      explanation: "The lesson states that over 90% of enterprises use cloud services and employers expect cloud literacy from graduates."
    },
    {
      type: "true_false",
      question: "Cloud computing requires organizations to own and build their own physical data centers.",
      answer: false,
      explanation: "Instead of owning physical data centers, organizations access technology services from a cloud provider like AWS, Azure, or Google Cloud."
    },
    {
      type: "true_false",
      question: "Cost Efficiency, Scalability, Global Reach, and Agility are the four reasons cloud computing emerged.",
      answer: true,
      explanation: "The lesson lists these as the four reasons why cloud computing emerged."
    },
    {
      type: "true_false",
      question: "NIST provides the globally accepted standard definition, framework, and taxonomy for cloud computing.",
      answer: true,
      explanation: "NIST (National Institute of Standards and Technology) provides the globally accepted standard definition, framework, and taxonomy for cloud computing."
    },
    {
      type: "true_false",
      question: "'Business continuity and disaster recovery' is listed as a benefit for Technical Teams.",
      answer: false,
      explanation: "'Business continuity and disaster recovery' is listed under benefits For Businesses, not For Technical Teams."
    },
    {
      type: "true_false",
      question: "'Containerization and microservices support' is listed as a benefit for Technical Teams.",
      answer: true,
      explanation: "For Technical Teams includes containerization and microservices support."
    },
    {
      type: "true_false",
      question: "Shared responsibility model confusion is listed under Security Concerns.",
      answer: true,
      explanation: "Security Concerns include shared responsibility model confusion, along with data breaches, compliance issues, insider threats, weak IAM, and data loss."
    },
    {
      type: "true_false",
      question: "A hyperscaler is defined as a small local hosting provider.",
      answer: false,
      explanation: "A hyperscaler is a cloud provider that operates at truly massive, global scale, with millions of servers across data centers on every continent."
    },
    {
      type: "true_false",
      question: "According to the lesson, three companies command the majority of the world's cloud infrastructure market.",
      answer: true,
      explanation: "3 companies command the majority of the world's cloud infrastructure market."
    },
    {
      type: "true_false",
      question: "AWS is described as strong in government and regulated industries due to Active Directory integration.",
      answer: false,
      explanation: "That description applies to Microsoft Azure, not AWS. AWS is described as the cloud pioneer and market leader."
    },
    {
      type: "true_false",
      question: "Google Cloud Platform is known for open-source leadership including Kubernetes.",
      answer: true,
      explanation: "GCP is known for data analytics, AI/ML capabilities, and open-source leadership (Kubernetes)."
    },
    {
      type: "true_false",
      question: "According to the lesson, mobile banking apps rely on the cloud for security and availability.",
      answer: true,
      explanation: "Banking: Mobile banking apps rely on cloud for security and availability."
    },
    {
      type: "true_false",
      question: "Siri, Alexa, and ChatGPT are given as examples of cloud-based AI services.",
      answer: true,
      explanation: "AI Assistants: Siri, Alexa, and ChatGPT are cloud-based AI services."
    },
    {
      type: "true_false",
      question: "The lesson states that cloud computing is the invisible backbone of the digital economy.",
      answer: true,
      explanation: "Key Takeaway: Cloud computing is the invisible backbone of the digital economy."
    },
    {
      type: "true_false",
      question: "According to Activity 1, the debate topic is 'Every Filipino SME Should Move to the Cloud.'",
      answer: true,
      explanation: "Activity 1's debate topic is: 'Every Filipino SME Should Move to the Cloud' — Agree or Disagree."
    },
    // ---------------------------
    // IDENTIFICATION
    // ---------------------------
    {
      type: "identification",
      question: "This term refers to a model where computing resources are pooled together and shared across many users, allocated instantly over the internet when needed.",
      answer: "Cloud Computing",
      acceptedAnswers: ["cloud computing"],
      explanation: "This is the definition of Cloud Computing."
    },
    {
      type: "identification",
      question: "This organization provides the globally accepted standard definition, framework, and taxonomy for cloud computing.",
      answer: "NIST",
      acceptedAnswers: ["nist", "national institute of standards and technology"],
      explanation: "NIST (National Institute of Standards and Technology) provides the globally accepted standard definition for cloud computing."
    },
    {
      type: "identification",
      question: "This reason cloud computing emerged eliminated massive upfront capital investment in hardware and data centers.",
      answer: "Cost Efficiency",
      acceptedAnswers: ["cost efficiency"],
      explanation: "Cost Efficiency eliminated massive upfront capital investment in hardware and data centers."
    },
    {
      type: "identification",
      question: "This reason cloud computing emerged lets resources scale up or down instantly to match demand.",
      answer: "Scalability",
      acceptedAnswers: ["scalability"],
      explanation: "Scalability: resources can scale up or down instantly to match demand."
    },
    {
      type: "identification",
      question: "This reason cloud computing emerged lets applications deploy to users worldwide in minutes using regional data centers.",
      answer: "Global Reach",
      acceptedAnswers: ["global reach"],
      explanation: "Global Reach: deploy applications to users worldwide in minutes using regional data centers."
    },
    {
      type: "identification",
      question: "This reason cloud computing emerged lets developers provision resources in minutes, accelerating innovation cycles.",
      answer: "Agility",
      acceptedAnswers: ["agility"],
      explanation: "Agility: developers can provision resources in minutes, accelerating innovation cycles."
    },
    {
      type: "identification",
      question: "This cloud provider is described as the cloud pioneer and market leader with the broadest portfolio of services.",
      answer: "AWS",
      acceptedAnswers: ["aws", "amazon web services"],
      explanation: "AWS is the cloud pioneer and market leader."
    },
    {
      type: "identification",
      question: "This cloud provider has deep integration with Microsoft 365 and Active Directory, and strong hybrid-cloud capabilities.",
      answer: "Microsoft Azure",
      acceptedAnswers: ["microsoft azure", "azure"],
      explanation: "Microsoft Azure has deep integration into Microsoft 365, Active Directory, and hybrid cloud."
    },
    {
      type: "identification",
      question: "This cloud provider is known for data analytics, AI/ML capabilities, and open-source leadership (Kubernetes).",
      answer: "Google Cloud Platform",
      acceptedAnswers: ["google cloud platform", "gcp"],
      explanation: "Google Cloud Platform is known for data analytics, AI/ML capabilities, and open-source leadership."
    },
    {
      type: "identification",
      question: "This term describes a cloud provider that operates at truly massive, global scale, serving millions of customers at once.",
      answer: "Hyperscaler",
      acceptedAnswers: ["hyperscaler"],
      explanation: "This is the definition of a Hyperscaler."
    },
    {
      type: "identification",
      question: "This challenge category includes data breaches, compliance with GDPR/HIPAA, shared responsibility confusion, insider threats, and weak IAM.",
      answer: "Security Concerns",
      acceptedAnswers: ["security concerns"],
      explanation: "Security Concerns cover data breaches, regulatory compliance, insider threats, and weak IAM, among others."
    },
    {
      type: "identification",
      question: "This challenge category includes vendor lock-in, unpredictable costs at scale, downtime risks, and skill gaps.",
      answer: "Business Challenges",
      acceptedAnswers: ["business challenges"],
      explanation: "Business Challenges include vendor lock-in and migration complexity, unpredictable costs, downtime risks, and skill gaps in cloud talent."
    },
    {
      type: "identification",
      question: "This challenge category includes publicly accessible storage, excessive permissions, and weak authentication controls.",
      answer: "Configuration Issues",
      acceptedAnswers: ["configuration issues"],
      explanation: "Configuration Issues include publicly accessible storage, excessive permissions, and missing or weak authentication controls."
    },
    {
      type: "identification",
      question: "This cloud-based email and storage example, along with Google Drive and OneDrive, is given as an everyday cloud application.",
      answer: "Gmail",
      acceptedAnswers: ["gmail"],
      explanation: "Gmail, Google Drive, and OneDrive are given as Email & Storage examples."
    }
  ]
},

{
  id: "week2-cloud-characteristics",
  title: "Week 2",
  subtitle: "Cloud Characteristics and Service Models",
  emoji: "🛠️",
  color: "#30D158",
  week: "2nd week",
  description: "The five essential characteristics of cloud computing, IaaS/PaaS/SaaS service models, the shared responsibility model, and cloud IT career opportunities.",
  questions: [
    // ---------------------------
    // MULTIPLE CHOICE
    // ---------------------------
    {
      type: "multiple_choice",
      question: "What do cloud characteristics describe, according to the lesson?",
      options: [
        "The pricing plans of a cloud provider",
        "The essential features that make cloud computing different from traditional IT infrastructure",
        "The programming languages used in the cloud",
        "The physical location of data centers"
      ],
      answer: 1,
      explanation: "Cloud characteristics describe the essential features that make cloud computing different from traditional IT infrastructure."
    },
    {
      type: "multiple_choice",
      question: "Which of the following is NOT something cloud computing allows users and organizations to do, per the lesson?",
      options: [
        "Access computing resources through a network",
        "Increase or decrease resources based on demand",
        "Own the physical servers hosting their data",
        "Pay based on the resources they use"
      ],
      answer: 2,
      explanation: "Cloud computing allows users to access resources through a network, obtain them when needed, scale based on demand, share resources efficiently, and pay based on usage — not to own the physical servers."
    },
    {
      type: "multiple_choice",
      question: "According to the Key Idea slide, cloud computing is a way of delivering computing resources that is flexible, scalable, accessible, and what else?",
      options: ["Free", "Measurable", "Offline", "Static"],
      answer: 1,
      explanation: "Key Idea: Cloud computing is a way of delivering computing resources that is flexible, scalable, accessible, and measurable."
    },
    {
      type: "multiple_choice",
      question: "Understanding cloud characteristics helps IT professionals do what, according to the lesson?",
      options: [
        "Determine whether a technology or service is truly taking advantage of cloud computing",
        "Write better application code",
        "Reduce their own salaries",
        "Avoid using cloud providers"
      ],
      answer: 0,
      explanation: "Understanding cloud characteristics helps IT professionals determine whether a technology or service is truly taking advantage of cloud computing."
    },
    {
      type: "multiple_choice",
      question: "Which characteristic lets users get computer power, storage, or network space instantly by themselves, without calling a tech person?",
      options: ["Broad Network Access", "On-Demand Self-Service", "Resource Pooling", "Measured Service"],
      answer: 1,
      explanation: "On-Demand Self-Service: users get resources instantly by themselves through an online control panel or web tool."
    },
    {
      type: "multiple_choice",
      question: "What is the example given for On-Demand Self-Service?",
      options: [
        "An online store increases resources during a sale",
        "A developer creates a cloud server through an online dashboard instead of waiting for a physical server",
        "A provider shares resources among customers",
        "A user pays only for what they consume"
      ],
      answer: 1,
      explanation: "A developer can create a cloud server through an online dashboard instead of waiting for a physical server to be purchased and installed."
    },
    {
      type: "multiple_choice",
      question: "Which of these is NOT listed as a Main Benefit of On-Demand Self-Service?",
      options: ["Speed", "No Middleman", "Easy Sharing", "Save Money"],
      answer: 2,
      explanation: "On-Demand Self-Service's main benefits are Speed, No Middleman, Easy Scaling, and Save Money. 'Easy Sharing' is a benefit of Broad Network Access instead."
    },
    {
      type: "multiple_choice",
      question: "Which characteristic allows cloud services to be reached from any place using web browsers on phones, tablets, laptops, or desktops?",
      options: ["On-Demand Self-Service", "Broad Network Access", "Resource Pooling", "Rapid Elasticity"],
      answer: 1,
      explanation: "Broad Network Access: cloud services are available over the internet and reachable from any place using standard tools."
    },
    {
      type: "multiple_choice",
      question: "What is a key drawback of Broad Network Access mentioned in the lesson?",
      options: [
        "Requires technical knowledge",
        "If your internet connection drops, you lose access to your work",
        "Poor resource management increases costs",
        "Applications may need modification when moving providers"
      ],
      answer: 1,
      explanation: "Key Drawbacks of Broad Network Access: Internet Need (losing access if internet drops) and Security Risks (more entry points)."
    },
    {
      type: "multiple_choice",
      question: "Which characteristic describes providers aggregating physical hardware into a shared pool using a multi-tenant model?",
      options: ["Broad Network Access", "Resource Pooling", "Rapid Elasticity", "Measured Service"],
      answer: 1,
      explanation: "Resource Pooling: providers aggregate physical hardware into a shared pool, dynamically assigned to multiple tenants."
    },
    {
      type: "multiple_choice",
      question: "What is the Key Idea of Resource Pooling?",
      options: [
        "A provider shares computing resources among multiple customers",
        "Users pay only for what they consume",
        "Resources increase automatically during traffic spikes",
        "Applications are delivered as complete software"
      ],
      answer: 0,
      explanation: "Key Idea of Resource Pooling: A provider shares computing resources among multiple customers."
    },
    {
      type: "multiple_choice",
      question: "Which characteristic is the ability to quickly and automatically increase or decrease computing resources in real time to match shifting demand?",
      options: ["Resource Pooling", "Rapid Elasticity", "Measured Service", "On-Demand Self-Service"],
      answer: 1,
      explanation: "Rapid Elasticity: the ability to quickly and automatically increase or decrease computing resources in real time."
    },
    {
      type: "multiple_choice",
      question: "What example is given for Rapid Elasticity?",
      options: [
        "A developer creates a cloud server through a dashboard",
        "An online store can increase computing resources during a major sale and reduce them when traffic returns to normal",
        "A provider shares resources among tenants",
        "Users pay strictly for exact consumption"
      ],
      answer: 1,
      explanation: "Example: An online store can increase computing resources during a major sale and reduce them when traffic returns to normal."
    },
    {
      type: "multiple_choice",
      question: "Which of these is NOT part of 'How it Works' for Rapid Elasticity?",
      options: ["Real-time tracking", "Automatic growth", "Automatic Metering", "Shrinking down"],
      answer: 2,
      explanation: "Rapid Elasticity's 'How it Works' includes Real-time tracking, Automatic growth, Shrinking down, and No human help. 'Automatic Metering' belongs to Measured Service."
    },
    {
      type: "multiple_choice",
      question: "Which characteristic automatically tracks, monitors, and meters resource usage so providers can charge users only for what they consume?",
      options: ["Rapid Elasticity", "Resource Pooling", "Measured Service", "Broad Network Access"],
      answer: 2,
      explanation: "Measured Service: cloud systems automatically track, monitor, and meter resource usage, charging users only for what they consume."
    },
    {
      type: "multiple_choice",
      question: "What is the Key Idea of Measured Service?",
      options: [
        "Use more → resources increase/cost may increase; Use less → resources can decrease/cost may decrease",
        "A provider shares resources among multiple customers",
        "Applications scale automatically during high traffic",
        "Users manage their own physical servers"
      ],
      answer: 0,
      explanation: "Key Idea: Use more → resources increase/cost may increase. Use less → resources can decrease/cost may decrease."
    },
    {
      type: "multiple_choice",
      question: "Which of these is NOT part of 'How it Works' for Measured Service?",
      options: ["Automatic Metering", "Pay-As-You-Go Pricing", "Transparency", "Device Freedom"],
      answer: 3,
      explanation: "Measured Service's 'How it Works' includes Automatic Metering, Pay-As-You-Go Pricing, Transparency, and Resource Optimization. 'Device Freedom' is a benefit of Broad Network Access."
    },
    {
      type: "multiple_choice",
      question: "What does a cloud service model describe?",
      options: [
        "The physical location of a data center",
        "What level of computing service the cloud provider delivers to the customer",
        "The pricing of internet service providers",
        "The programming language used by the provider"
      ],
      answer: 1,
      explanation: "A cloud service model describes what level of computing service the cloud provider delivers to the customer."
    },
    {
      type: "multiple_choice",
      question: "What does IaaS stand for?",
      options: ["Internet as a Service", "Infrastructure as a Service", "Integration as a Service", "Information as a Service"],
      answer: 1,
      explanation: "IaaS → Infrastructure as a Service."
    },
    {
      type: "multiple_choice",
      question: "What does PaaS stand for?",
      options: ["Platform as a Service", "Product as a Service", "Process as a Service", "Provider as a Service"],
      answer: 0,
      explanation: "PaaS → Platform as a Service."
    },
    {
      type: "multiple_choice",
      question: "What does SaaS stand for?",
      options: ["Server as a Service", "Storage as a Service", "Software as a Service", "System as a Service"],
      answer: 2,
      explanation: "SaaS → Software as a Service."
    },
    {
      type: "multiple_choice",
      question: "IaaS provides what over the Internet, instead of organizations purchasing physical servers?",
      options: [
        "Complete software applications",
        "Virtualized computing infrastructure",
        "A development environment for coding",
        "Customer relationship management tools"
      ],
      answer: 1,
      explanation: "IaaS provides virtualized computing infrastructure over the Internet, instead of purchasing physical servers."
    },
    {
      type: "multiple_choice",
      question: "Which of these is NOT listed as a Common IaaS Resource?",
      options: ["Virtual machines", "Storage", "Development Tools", "Firewalls"],
      answer: 2,
      explanation: "Common IaaS Resources: virtual machines, storage, networking, virtual networks, firewalls, computing resources. 'Development Tools' is a PaaS key feature."
    },
    {
      type: "multiple_choice",
      question: "What is the Key Idea of IaaS?",
      options: [
        "Users focus on the application; the provider manages the platform",
        "Consumers rent the infrastructure and manage much of the software environment",
        "Use the software; the provider manages the underlying technology",
        "The provider manages almost the entire technology stack"
      ],
      answer: 1,
      explanation: "Key idea: IaaS = consumer rents the infrastructure and manages much of the software environment."
    },
    {
      type: "multiple_choice",
      question: "In IaaS, who is responsible for choosing, installing, patching, and updating the OS on virtual machines?",
      options: ["The customer", "The provider", "A third-party vendor", "No one — it is automatic"],
      answer: 0,
      explanation: "In IaaS, the customer controls Operating Systems: they choose, install, patch, and update the OS on their virtual machines."
    },
    {
      type: "multiple_choice",
      question: "In IaaS, which of these is controlled by the CUSTOMER, not the provider?",
      options: [
        "Physical Facilities",
        "Network Configuration (virtual routers, firewalls, IP addresses)",
        "Global Infrastructure (underwater cables, fiber networks)",
        "Virtualization Layer (hypervisor)"
      ],
      answer: 1,
      explanation: "In IaaS, customers control Network Configuration — setting up virtual routers, firewalls, IP addresses, subnets, and routing rules."
    },
    {
      type: "multiple_choice",
      question: "In IaaS, which of these is controlled by the PROVIDER, not the customer?",
      options: [
        "Operating Systems",
        "Data and Storage",
        "Physical Hardware (buying, racking, replacing servers)",
        "Applications"
      ],
      answer: 2,
      explanation: "In IaaS, the provider controls Physical Hardware — buying, racking, and replacing physical servers, storage drives, and network routers."
    },
    {
      type: "multiple_choice",
      question: "In the IaaS house analogy, what does the Provider do?",
      options: [
        "Brings the furniture and chooses decorations",
        "Lays the foundation, sets up electricity, and builds the physical walls",
        "Locks the front door with a password",
        "Pays monthly rent"
      ],
      answer: 1,
      explanation: "The Provider builds the house: lays the foundation, sets up the electricity, and builds the physical walls."
    },
    {
      type: "multiple_choice",
      question: "In the Netflix and AWS IaaS example, what does AWS handle?",
      options: [
        "Netflix's recommendation algorithm",
        "Ensuring physical servers stay powered on, cooled down, and physically protected",
        "Customer usernames and passwords",
        "The streaming app's user interface"
      ],
      answer: 1,
      explanation: "AWS ensures the physical servers stay powered on, cooled down, and physically protected in their data centers."
    },
    {
      type: "multiple_choice",
      question: "In the Netflix and AWS IaaS example, what does Netflix handle?",
      options: [
        "The physical data center security",
        "Global fiber network infrastructure",
        "Its own streaming app, customer data, and recommendation code",
        "HVAC systems in AWS data centers"
      ],
      answer: 2,
      explanation: "Netflix builds its own streaming app, manages its own customer data, and controls the code that recommends movies."
    },
    {
      type: "multiple_choice",
      question: "Which of these is an Advantage of IaaS?",
      options: [
        "No need to purchase physical servers",
        "Less control than PaaS",
        "Requires technical knowledge",
        "Vendor lock-in"
      ],
      answer: 0,
      explanation: "IaaS Advantages include: high level of control, flexible configuration, scalable resources, no need to purchase physical servers, and suitability for many types of applications."
    },
    {
      type: "multiple_choice",
      question: "Which of these is a Limitation of IaaS?",
      options: [
        "Automatic updates",
        "Customer has more responsibilities",
        "Minimal installation and maintenance",
        "Easy to access"
      ],
      answer: 1,
      explanation: "IaaS Limitations include: requires technical knowledge, customer has more responsibilities, security configuration must be managed properly, and poor resource management can increase costs."
    },
    {
      type: "multiple_choice",
      question: "Which of these is a Common Use Case of IaaS?",
      options: ["Online accounting", "Hosting websites", "API development", "Customer relationship management"],
      answer: 1,
      explanation: "Common IaaS Use Cases: hosting websites, running virtual servers, development and testing, data processing, backup and disaster recovery."
    },
    {
      type: "multiple_choice",
      question: "PaaS provides developers with what?",
      options: [
        "A complete finished application to use immediately",
        "A ready-to-use environment for developing, testing, and deploying applications",
        "Physical servers they must configure from scratch",
        "A pool of shared virtual machines only"
      ],
      answer: 1,
      explanation: "PaaS provides developers with a ready-to-use environment for developing, testing, and deploying applications."
    },
    {
      type: "multiple_choice",
      question: "What is the Key Idea of PaaS?",
      options: [
        "Consumers rent infrastructure and manage the software environment",
        "Users focus on the application; the provider manages the platform",
        "Use the software; the provider manages the underlying technology",
        "The provider manages only the physical hardware"
      ],
      answer: 1,
      explanation: "Key idea: PaaS = Users focus on the application; the provider manages the platform."
    },
    {
      type: "multiple_choice",
      question: "Which of these is a Key Feature of PaaS?",
      options: ["Multi-Tenant Architecture", "Managed Databases", "Physical Hardware Maintenance", "Global Infrastructure"],
      answer: 1,
      explanation: "PaaS Key Features: Development Tools, Runtime Environments, and Managed Databases."
    },
    {
      type: "multiple_choice",
      question: "In PaaS, who controls the Application Code and Logic?",
      options: ["The provider", "The customer", "A third-party auditor", "No one; it is auto-generated"],
      answer: 1,
      explanation: "In PaaS, the customer controls Application Code and Logic — writing, deploying, updating, and managing the source code and business logic."
    },
    {
      type: "multiple_choice",
      question: "In PaaS, who controls the Physical Infrastructure, Operating Systems, and Runtime/Middleware?",
      options: ["The customer", "The provider", "Both equally with no distinction", "A regulatory agency"],
      answer: 1,
      explanation: "In PaaS, the provider controls Physical Infrastructure, Operating Systems, and Runtime and Middleware."
    },
    {
      type: "multiple_choice",
      question: "In the FoodPanda PaaS example, what happens automatically at 12:00 PM during the lunch rush?",
      options: [
        "The app shuts down for maintenance",
        "The PaaS system automatically detects the traffic jump and spins up more computer power",
        "Developers manually add more servers",
        "The database is deleted and recreated"
      ],
      answer: 1,
      explanation: "At 12:00 PM, the PaaS system automatically detects the traffic jump and instantly spins up more computer power to handle orders (auto-scaling)."
    },
    {
      type: "multiple_choice",
      question: "In the FoodPanda PaaS example, what happens by 2:00 PM after the lunch rush ends?",
      options: [
        "The PaaS system automatically scales down server usage to save money",
        "The app is taken offline",
        "The developers write new Python installations manually",
        "The database backups are cancelled"
      ],
      answer: 0,
      explanation: "By 2:00 PM, the PaaS system automatically scales down the server usage, saving the startup money since they only pay for the exact computer power used."
    },
    {
      type: "multiple_choice",
      question: "Which of these is a Limitation of PaaS?",
      options: [
        "Faster application development",
        "Possible vendor lock-in",
        "Easier deployment",
        "Supports rapid application development"
      ],
      answer: 1,
      explanation: "PaaS Limitations: less control than IaaS, possible vendor lock-in, platform restrictions may exist, applications may need modification when moving providers."
    },
    {
      type: "multiple_choice",
      question: "Which of these is a Common Use Case of PaaS?",
      options: ["Backup and disaster recovery", "Web application development", "Online accounting", "File storage"],
      answer: 1,
      explanation: "Common PaaS Use Cases: web application development, mobile application backends, API development, software testing, rapid application deployment."
    },
    {
      type: "multiple_choice",
      question: "SaaS provides what to users through the Internet?",
      options: [
        "Virtualized computing infrastructure only",
        "Complete software applications",
        "A development environment for writing code",
        "Physical data center access"
      ],
      answer: 1,
      explanation: "SaaS provides complete software applications through the Internet, and users generally do not need to install, maintain, or manage the underlying infrastructure."
    },
    {
      type: "multiple_choice",
      question: "What is the Key Idea of SaaS?",
      options: [
        "Consumers rent infrastructure and manage the software environment",
        "Users focus on the application; the provider manages the platform",
        "Use the software; the provider manages the underlying technology",
        "Providers only manage physical hardware"
      ],
      answer: 2,
      explanation: "Key idea: SaaS = Use the software; the provider manages the underlying technology."
    },
    {
      type: "multiple_choice",
      question: "Which of these is a Key Feature of SaaS?",
      options: ["Development Tools", "Multi-Tenant Architecture", "Physical Hardware Maintenance", "Network Configuration"],
      answer: 1,
      explanation: "SaaS Key Features: Cloud Delivery, Subscription Model, Automatic Updates, Multi-Tenant Architecture."
    },
    {
      type: "multiple_choice",
      question: "In SaaS, what does the customer manage?",
      options: [
        "Almost the entire technology stack",
        "User accounts, data, access permissions, application settings",
        "Physical servers and networking cables",
        "The operating system and runtime environment"
      ],
      answer: 1,
      explanation: "In SaaS, the Customer manages user accounts, data, access permissions, and application settings."
    },
    {
      type: "multiple_choice",
      question: "In SaaS, what does the provider manage?",
      options: [
        "Only user accounts and data",
        "Almost the entire technology stack: infrastructure, servers, OS, platform, application, updates, and maintenance",
        "Nothing — SaaS has no provider responsibilities",
        "Only application settings"
      ],
      answer: 1,
      explanation: "In SaaS, the Provider manages almost the entire technology stack: infrastructure, servers, operating system, platform, application, updates, and maintenance."
    },
    {
      type: "multiple_choice",
      question: "What example is given for SaaS in the lesson?",
      options: [
        "A university student group using Google Docs for a research project, with live shared edits",
        "A startup renting virtual machines from AWS",
        "A developer writing Python code on a PaaS platform",
        "A company managing its own physical data center"
      ],
      answer: 0,
      explanation: "Example: A university student and their group use Google Docs, where each member can work on their own but see each other's edits live."
    },
    {
      type: "multiple_choice",
      question: "Which of these is an Advantage of SaaS?",
      options: ["High level of control", "Minimal installation and maintenance", "Requires technical knowledge", "Vendor lock-in"],
      answer: 1,
      explanation: "SaaS Advantages: easy to access, minimal installation and maintenance, automatic updates, accessible from different devices, reduces infrastructure management."
    },
    {
      type: "multiple_choice",
      question: "Which of these is a Limitation of SaaS?",
      options: ["Faster application development", "Less control over the software", "No need to purchase physical servers", "Scalable resources"],
      answer: 1,
      explanation: "SaaS Limitations: less control over the software, dependence on the service provider, internet connectivity may be required, data privacy and security must be considered."
    },
    {
      type: "multiple_choice",
      question: "Which of these is a Common Use Case of SaaS?",
      options: ["Hosting websites", "Customer relationship management", "Backup and disaster recovery", "Running virtual servers"],
      answer: 1,
      explanation: "Common SaaS Use Cases: email, online collaboration, customer relationship management, online accounting, file storage, project management."
    },
    {
      type: "multiple_choice",
      question: "In the Comparing Service Models table, which service model has HIGH user control?",
      options: ["IaaS", "PaaS", "SaaS", "None of them"],
      answer: 0,
      explanation: "IaaS has High user control, PaaS has Moderate, and SaaS has Low."
    },
    {
      type: "multiple_choice",
      question: "In the Comparing Service Models table, which service model has HIGH provider management?",
      options: ["IaaS", "PaaS", "SaaS", "None of them"],
      answer: 2,
      explanation: "SaaS has High provider management, PaaS has Moderate, and IaaS has Low."
    },
    {
      type: "multiple_choice",
      question: "In the Comparing Service Models table, who are the Main Users of IaaS?",
      options: ["End Users", "Developers", "Sys/Net Admins", "Marketing Teams"],
      answer: 2,
      explanation: "Main Users: IaaS → Sys/Net Admin, PaaS → Developers, SaaS → End Users."
    },
    {
      type: "multiple_choice",
      question: "In the Comparing Service Models table, which service model requires the LOW-est technical skills?",
      options: ["IaaS", "PaaS", "SaaS", "They are all equal"],
      answer: 2,
      explanation: "Technical Skills: IaaS → High, PaaS → Moderate, SaaS → Low."
    },
    {
      type: "multiple_choice",
      question: "What does the Shared Responsibility Model state?",
      options: [
        "The cloud provider is responsible for everything once you move to the cloud",
        "Cloud security and management are shared responsibilities between the cloud provider and the customer",
        "Only the customer is responsible for cloud security",
        "Cloud providers are not responsible for any part of security"
      ],
      answer: 1,
      explanation: "Cloud security and management are shared responsibilities between the cloud provider and the customer; moving to the cloud does not mean the provider is responsible for everything."
    },
    {
      type: "multiple_choice",
      question: "In the Shared Responsibility Model, which of these is the Cloud Provider responsible for?",
      options: ["Passwords", "Physical data centers", "Applications", "Access permissions"],
      answer: 1,
      explanation: "The Cloud Provider is responsible for protecting the underlying infrastructure: physical data centers, physical servers, physical network, hardware, and core infrastructure."
    },
    {
      type: "multiple_choice",
      question: "In the Shared Responsibility Model, which of these is the Customer responsible for?",
      options: ["Physical servers", "Core infrastructure", "Data and user accounts", "Physical network"],
      answer: 2,
      explanation: "The Customer is responsible for what they place and configure in the cloud: data, user accounts, passwords, access permissions, applications, and security configurations."
    },
    {
      type: "multiple_choice",
      question: "What is the Important Principle of the Shared Responsibility Model?",
      options: [
        "The provider secures everything, including customer data",
        "The customer secures everything, including physical hardware",
        "The provider secures the cloud infrastructure; the customer is also responsible for securing what they use and configure",
        "Security responsibilities do not exist in cloud computing"
      ],
      answer: 2,
      explanation: "Important Principle: the cloud provider secures the cloud infrastructure; the customer is also responsible for securing what they use and configure in the cloud."
    },
    {
      type: "multiple_choice",
      question: "Which career opportunity 'designs and manages cloud environments'?",
      options: ["Cloud Architect", "Cloud Engineer", "DevOps Engineer", "Network Engineer"],
      answer: 1,
      explanation: "Cloud Engineer — designs and manages cloud environments."
    },
    {
      type: "multiple_choice",
      question: "Which career opportunity 'designs large-scale cloud solutions'?",
      options: ["Cloud Architect", "Cloud Engineer", "Cloud Developer", "System Administrator"],
      answer: 0,
      explanation: "Cloud Architect — designs large-scale cloud solutions."
    },
    {
      type: "multiple_choice",
      question: "Which career opportunity 'automates development and deployment'?",
      options: ["Cloud Developer", "DevOps Engineer", "Cybersecurity Professional", "Network Engineer"],
      answer: 1,
      explanation: "DevOps Engineer — automates development and deployment."
    },
    {
      type: "multiple_choice",
      question: "According to the Career Insight, what does cloud computing do to the need for IT professionals?",
      options: [
        "It eliminates the need for IT professionals entirely",
        "It replaces IT professionals with automated systems",
        "It increases the need for professionals who can design, deploy, secure, and manage cloud-based systems",
        "It has no impact on IT job roles"
      ],
      answer: 2,
      explanation: "Career Insight: Cloud computing is not a replacement for IT professionals — it increases the need for professionals who understand how to design, deploy, secure, and manage cloud-based systems."
    },
    // ---------------------------
    // TRUE / FALSE
    // ---------------------------
    {
      type: "true_false",
      question: "Cloud characteristics describe the essential features that make cloud computing different from traditional IT infrastructure.",
      answer: true,
      explanation: "This is the definition given at the start of the lesson."
    },
    {
      type: "true_false",
      question: "On-Demand Self-Service requires users to call a tech person and wait days for hardware setup.",
      answer: false,
      explanation: "On-Demand Self-Service means NO need to call a tech person or wait days — everything is done through an online control panel or web tool."
    },
    {
      type: "true_false",
      question: "Broad Network Access means cloud services can be reached using standard tools like web browsers on multiple device types.",
      answer: true,
      explanation: "Broad Network Access: cloud services are available over the internet and reachable via web browsers on phones, tablets, laptops, or desktops."
    },
    {
      type: "true_false",
      question: "Resource Pooling uses a multi-tenant model where resources are dynamically assigned to multiple users based on real-time demand.",
      answer: true,
      explanation: "Resource Pooling: using a multi-tenant model, resources are dynamically assigned and reassigned to multiple tenants based on real-time demand."
    },
    {
      type: "true_false",
      question: "Rapid Elasticity requires manual work and causes service downtime when scaling.",
      answer: false,
      explanation: "Rapid Elasticity ensures optimal performance WITHOUT manual work or service downtime."
    },
    {
      type: "true_false",
      question: "Measured Service means providers charge users only for what they consume.",
      answer: true,
      explanation: "Measured Service: cloud systems track, monitor, and meter usage so providers can charge users only for what they consume."
    },
    {
      type: "true_false",
      question: "A cloud service model describes what level of computing service the provider delivers to the customer.",
      answer: true,
      explanation: "This is the definition of a cloud service model."
    },
    {
      type: "true_false",
      question: "In IaaS, the customer manages Operating Systems, Data and Storage, and Applications.",
      answer: true,
      explanation: "In IaaS, the customer controls Operating Systems, Data and Storage, and Applications, among other things."
    },
    {
      type: "true_false",
      question: "In IaaS, the provider is responsible for Physical Facilities, Infrastructure Utilities, and Physical Hardware.",
      answer: true,
      explanation: "In IaaS, the provider controls Physical Facilities, Infrastructure Utilities, Physical Hardware, Virtualization Layer, and Global Infrastructure."
    },
    {
      type: "true_false",
      question: "In the Netflix/AWS example, Netflix manages the physical servers that host its streaming service.",
      answer: false,
      explanation: "AWS handles the physical servers; Netflix manages its own app, customer data, and recommendation code."
    },
    {
      type: "true_false",
      question: "PaaS lets developers focus primarily on writing and managing application code instead of managing servers and operating systems.",
      answer: true,
      explanation: "PaaS provides a ready-to-use environment so developers can focus on code instead of managing servers and OS."
    },
    {
      type: "true_false",
      question: "In PaaS, the provider manages the Physical Infrastructure, Operating Systems, and Runtime/Middleware.",
      answer: true,
      explanation: "In PaaS, the provider controls Physical Infrastructure, Operating Systems, and Runtime and Middleware."
    },
    {
      type: "true_false",
      question: "In the FoodPanda example, developers had to install Python on the servers themselves before deploying their code.",
      answer: false,
      explanation: "They did NOT have to install Python on any servers — the PaaS provider already had the environment set up and ready to go."
    },
    {
      type: "true_false",
      question: "SaaS requires users to install, maintain, and manage the underlying infrastructure themselves.",
      answer: false,
      explanation: "Users generally do NOT need to install, maintain, or manage the underlying infrastructure in SaaS."
    },
    {
      type: "true_false",
      question: "In SaaS, the provider manages almost the entire technology stack.",
      answer: true,
      explanation: "In SaaS, the Provider manages almost the entire technology stack: infrastructure, servers, OS, platform, application, updates, and maintenance."
    },
    {
      type: "true_false",
      question: "In the Comparing Service Models table, SaaS has the lowest user control among the three models.",
      answer: true,
      explanation: "User Control: IaaS = High, PaaS = Moderate, SaaS = Low."
    },
    {
      type: "true_false",
      question: "The Shared Responsibility Model means the cloud provider is responsible for everything once a company moves to the cloud.",
      answer: false,
      explanation: "Moving to the cloud does NOT mean that the provider is responsible for everything — security and management are shared responsibilities."
    },
    {
      type: "true_false",
      question: "In the Shared Responsibility Model, the customer is responsible for data, user accounts, passwords, and access permissions.",
      answer: true,
      explanation: "The Customer is responsible for data, user accounts, passwords, access permissions, applications, and security configurations."
    },
    {
      type: "true_false",
      question: "Cloud computing is described as a replacement for IT professionals, eliminating the need for their jobs.",
      answer: false,
      explanation: "The lesson states cloud computing is NOT a replacement for IT professionals — it increases the need for professionals who can design, deploy, secure, and manage cloud-based systems."
    },
    {
      type: "true_false",
      question: "Cloud Architect is a career opportunity that designs large-scale cloud solutions.",
      answer: true,
      explanation: "Cloud Architect — designs large-scale cloud solutions."
    },
    // ---------------------------
    // IDENTIFICATION
    // ---------------------------
    {
      type: "identification",
      question: "This cloud characteristic lets users get computer power, storage, or network space instantly by themselves through an online control panel.",
      answer: "On-Demand Self-Service",
      acceptedAnswers: ["on-demand self-service", "on demand self service"],
      explanation: "On-Demand Self-Service lets users get resources instantly by themselves, without calling a tech person."
    },
    {
      type: "identification",
      question: "This cloud characteristic makes services available over the internet, reachable from phones, tablets, laptops, or desktops.",
      answer: "Broad Network Access",
      acceptedAnswers: ["broad network access"],
      explanation: "Broad Network Access: cloud services are reachable via standard tools like web browsers on any device."
    },
    {
      type: "identification",
      question: "This cloud characteristic aggregates physical hardware into a shared pool using a multi-tenant model.",
      answer: "Resource Pooling",
      acceptedAnswers: ["resource pooling"],
      explanation: "Resource Pooling: providers aggregate hardware into a shared pool, dynamically assigned to multiple tenants."
    },
    {
      type: "identification",
      question: "This cloud characteristic is the ability to quickly and automatically increase or decrease computing resources to match demand.",
      answer: "Rapid Elasticity",
      acceptedAnswers: ["rapid elasticity"],
      explanation: "Rapid Elasticity: automatically increases or decreases resources in real time without manual work or downtime."
    },
    {
      type: "identification",
      question: "This cloud characteristic automatically tracks, monitors, and meters resource usage for billing purposes.",
      answer: "Measured Service",
      acceptedAnswers: ["measured service"],
      explanation: "Measured Service: automatic tracking and metering so users are charged only for what they consume."
    },
    {
      type: "identification",
      question: "This cloud service model provides virtualized computing infrastructure — virtual machines, storage, and networking — over the Internet.",
      answer: "Infrastructure as a Service (IaaS)",
      acceptedAnswers: ["iaas", "infrastructure as a service"],
      explanation: "IaaS provides virtualized computing infrastructure over the Internet."
    },
    {
      type: "identification",
      question: "This cloud service model gives developers a ready-to-use environment for developing, testing, and deploying applications.",
      answer: "Platform as a Service (PaaS)",
      acceptedAnswers: ["paas", "platform as a service"],
      explanation: "PaaS provides developers with a ready-to-use environment for developing, testing, and deploying applications."
    },
    {
      type: "identification",
      question: "This cloud service model provides complete software applications through the Internet.",
      answer: "Software as a Service (SaaS)",
      acceptedAnswers: ["saas", "software as a service"],
      explanation: "SaaS provides complete software applications through the Internet."
    },
    {
      type: "identification",
      question: "In IaaS, this refers to the software (hypervisor) that splits physical server power into virtual machines, controlled by the provider.",
      answer: "Virtualization Layer",
      acceptedAnswers: ["virtualization layer", "hypervisor"],
      explanation: "Virtualization Layer: the provider runs the hypervisor that splits physical server power into virtual machines."
    },
    {
      type: "identification",
      question: "In IaaS, this refers to managing user permissions and encryption keys, controlled by the customer (abbreviated IAM).",
      answer: "Security & Access (Identity and Access Management)",
      acceptedAnswers: ["security & access", "iam", "identity and access management", "security and access"],
      explanation: "Security & Access (IAM): the customer decides who gets access by managing permissions and encryption keys."
    },
    {
      type: "identification",
      question: "This app example illustrates PaaS, where developers upload Python code without installing it on servers, and traffic auto-scales during the lunch rush.",
      answer: "FoodPanda",
      acceptedAnswers: ["foodpanda", "food panda"],
      explanation: "The FoodPanda Delivery App scenario illustrates PaaS auto-scaling and managed environments."
    },
    {
      type: "identification",
      question: "This SaaS example lets a university student group write a research project together with live shared edits.",
      answer: "Google Docs",
      acceptedAnswers: ["google docs"],
      explanation: "Example: A university student group uses Google Docs, seeing each other's edits live on screen."
    },
    {
      type: "identification",
      question: "This model states that cloud security and management are shared between the cloud provider and the customer.",
      answer: "Shared Responsibility Model",
      acceptedAnswers: ["shared responsibility model", "shared responsibility"],
      explanation: "The Shared Responsibility Model states security is shared between provider and customer."
    },
    {
      type: "identification",
      question: "In the shared responsibility model, this party is responsible for physical data centers, servers, network, hardware, and core infrastructure.",
      answer: "Cloud Provider",
      acceptedAnswers: ["cloud provider", "provider"],
      explanation: "The Cloud Provider protects the underlying cloud infrastructure."
    },
    {
      type: "identification",
      question: "In the shared responsibility model, this party is responsible for data, user accounts, passwords, access permissions, applications, and security configurations.",
      answer: "Customer",
      acceptedAnswers: ["customer"],
      explanation: "The Customer is responsible for what they place and configure in the cloud."
    },
    {
      type: "identification",
      question: "This career opportunity builds applications for cloud platforms.",
      answer: "Cloud Developer",
      acceptedAnswers: ["cloud developer"],
      explanation: "Cloud Developer — builds applications for cloud platforms."
    },
    {
      type: "identification",
      question: "This career opportunity protects cloud systems and data.",
      answer: "Cybersecurity Professional",
      acceptedAnswers: ["cybersecurity professional", "cybersecurity"],
      explanation: "Cybersecurity Professional — protects cloud systems and data."
    },
    // ---------------------------
    // ENUMERATION
    // ---------------------------
    {
      type: "enumeration",
      question: "List the five essential characteristics of cloud computing.",
      answers: [
        "On-Demand Self-Service",
        "Broad Network Access",
        "Resource Pooling",
        "Rapid Elasticity",
        "Measured Service"
      ],
      minRequired: 5,
      explanation: "The five essential characteristics are On-Demand Self-Service, Broad Network Access, Resource Pooling, Rapid Elasticity, and Measured Service."
    },
    {
      type: "enumeration",
      question: "List the five things cloud computing allows users and organizations to do.",
      answers: [
        "Access computing resources through a network",
        "Obtain resources when they are needed",
        "Increase or decrease resources based on demand",
        "Share computing resources efficiently",
        "Pay based on the resources they use"
      ],
      minRequired: 5,
      explanation: "Cloud computing allows users to access resources through a network, obtain them when needed, scale on demand, share efficiently, and pay based on usage."
    },
    {
      type: "enumeration",
      question: "List the four Main Benefits of On-Demand Self-Service.",
      answers: ["Speed", "No Middleman", "Easy Scaling", "Save Money"],
      minRequired: 4,
      explanation: "Main Benefits of On-Demand Self-Service: Speed, No Middleman, Easy Scaling, Save Money."
    },
    {
      type: "enumeration",
      question: "List the three major cloud service models and their complete names.",
      answers: [
        "IaaS — Infrastructure as a Service",
        "PaaS — Platform as a Service",
        "SaaS — Software as a Service"
      ],
      minRequired: 3,
      explanation: "The three major service models are IaaS, PaaS, and SaaS."
    },
    {
      type: "enumeration",
      question: "List the common IaaS resources presented in the lesson.",
      answers: ["Virtual machines", "Storage", "Networking", "Virtual networks", "Firewalls", "Computing resources"],
      minRequired: 6,
      explanation: "Common IaaS Resources: virtual machines, storage, networking, virtual networks, firewalls, computing resources."
    },
    {
      type: "enumeration",
      question: "List what the customer controls in IaaS.",
      answers: [
        "Operating Systems (OS)",
        "Data and Storage",
        "Applications",
        "Network Configuration",
        "Security & Access (IAM)",
        "Runtime & Middleware"
      ],
      minRequired: 6,
      explanation: "Customer-controlled items in IaaS: OS, Data and Storage, Applications, Network Configuration, Security & Access (IAM), and Runtime & Middleware."
    },
    {
      type: "enumeration",
      question: "List what the provider controls in IaaS.",
      answers: [
        "Physical Facilities",
        "Infrastructure Utilities",
        "Physical Hardware",
        "Virtualization Layer",
        "Global Infrastructure"
      ],
      minRequired: 5,
      explanation: "Provider-controlled items in IaaS: Physical Facilities, Infrastructure Utilities, Physical Hardware, Virtualization Layer, and Global Infrastructure."
    },
    {
      type: "enumeration",
      question: "List the Advantages of IaaS.",
      answers: [
        "High level of control",
        "Flexible configuration",
        "Scalable resources",
        "No need to purchase physical servers",
        "Suitable for many types of applications"
      ],
      minRequired: 5,
      explanation: "IaaS Advantages: high control, flexible configuration, scalable resources, no need to purchase servers, suitable for many applications."
    },
    {
      type: "enumeration",
      question: "List the Limitations of IaaS.",
      answers: [
        "Requires technical knowledge",
        "Customer has more responsibilities",
        "Security configuration must be managed properly",
        "Poor resource management can increase costs"
      ],
      minRequired: 4,
      explanation: "IaaS Limitations: requires technical knowledge, more customer responsibility, proper security configuration needed, poor resource management increases costs."
    },
    {
      type: "enumeration",
      question: "List the Common Use Cases of IaaS.",
      answers: ["Hosting websites", "Running virtual servers", "Development and testing", "Data processing", "Backup and disaster recovery"],
      minRequired: 5,
      explanation: "IaaS Use Cases: hosting websites, running virtual servers, development and testing, data processing, backup and disaster recovery."
    },
    {
      type: "enumeration",
      question: "List the Key Features of PaaS.",
      answers: ["Development Tools", "Runtime Environments", "Managed Databases"],
      minRequired: 3,
      explanation: "PaaS Key Features: Development Tools, Runtime Environments, Managed Databases."
    },
    {
      type: "enumeration",
      question: "List what the customer controls in PaaS.",
      answers: [
        "Application Code and Logic",
        "Data and Databases",
        "Access Control and Identities"
      ],
      minRequired: 3,
      explanation: "Customer-controlled items in PaaS: Application Code and Logic, Data and Databases, and Access Control and Identities."
    },
    {
      type: "enumeration",
      question: "List what the provider controls in PaaS.",
      answers: [
        "Physical Infrastructure",
        "Operating Systems (OS)",
        "Runtime and Middleware",
        "Virtualization and Hypervisors",
        "Network Infrastructure",
        "Hardware Maintenance"
      ],
      minRequired: 6,
      explanation: "Provider-controlled items in PaaS: Physical Infrastructure, OS, Runtime and Middleware, Virtualization and Hypervisors, Network Infrastructure, and Hardware Maintenance."
    },
    {
      type: "enumeration",
      question: "List the Advantages of PaaS.",
      answers: [
        "Faster application development",
        "Less infrastructure management",
        "Easier deployment",
        "Development teams can focus on programming",
        "Supports rapid application development"
      ],
      minRequired: 5,
      explanation: "PaaS Advantages: faster development, less infrastructure management, easier deployment, teams focus on programming, supports rapid development."
    },
    {
      type: "enumeration",
      question: "List the Limitations of PaaS.",
      answers: [
        "Less control than IaaS",
        "Possible vendor lock-in",
        "Platform restrictions may exist",
        "Applications may need modification when moving to another provider"
      ],
      minRequired: 4,
      explanation: "PaaS Limitations: less control than IaaS, possible vendor lock-in, platform restrictions, apps may need modification when switching providers."
    },
    {
      type: "enumeration",
      question: "List the Common Use Cases of PaaS.",
      answers: ["Web application development", "Mobile application backends", "API development", "Software testing", "Rapid application deployment"],
      minRequired: 5,
      explanation: "PaaS Use Cases: web application development, mobile app backends, API development, software testing, rapid deployment."
    },
    {
      type: "enumeration",
      question: "List the Key Features of SaaS.",
      answers: ["Cloud Delivery", "Subscription Model", "Automatic Updates", "Multi-Tenant Architecture"],
      minRequired: 4,
      explanation: "SaaS Key Features: Cloud Delivery, Subscription Model, Automatic Updates, Multi-Tenant Architecture."
    },
    {
      type: "enumeration",
      question: "List what the customer manages in SaaS.",
      answers: ["User accounts", "Data", "Access permissions", "Application settings"],
      minRequired: 4,
      explanation: "In SaaS, the customer manages user accounts, data, access permissions, and application settings."
    },
    {
      type: "enumeration",
      question: "List what the provider manages in SaaS.",
      answers: ["Infrastructure", "Servers", "Operating system", "Platform", "Application", "Updates", "Maintenance"],
      minRequired: 7,
      explanation: "In SaaS, the provider manages almost the entire technology stack: infrastructure, servers, OS, platform, application, updates, and maintenance."
    },
    {
      type: "enumeration",
      question: "List the Advantages of SaaS.",
      answers: [
        "Easy to access",
        "Minimal installation and maintenance",
        "Automatic updates",
        "Accessible from different devices",
        "Reduces infrastructure management"
      ],
      minRequired: 5,
      explanation: "SaaS Advantages: easy access, minimal installation/maintenance, automatic updates, multi-device access, reduced infrastructure management."
    },
    {
      type: "enumeration",
      question: "List the Limitations of SaaS.",
      answers: [
        "Less control over the software",
        "Dependence on the service provider",
        "Internet connectivity may be required",
        "Data privacy and security must be considered"
      ],
      minRequired: 4,
      explanation: "SaaS Limitations: less software control, dependence on provider, needs internet connectivity, data privacy/security considerations."
    },
    {
      type: "enumeration",
      question: "List the Common Use Cases of SaaS.",
      answers: ["Email", "Online collaboration", "Customer relationship management", "Online accounting", "File storage", "Project management"],
      minRequired: 6,
      explanation: "SaaS Use Cases: email, online collaboration, CRM, online accounting, file storage, project management."
    },
    {
      type: "enumeration",
      question: "List what the Cloud Provider is responsible for in the Shared Responsibility Model.",
      answers: ["Physical data centers", "Physical servers", "Physical network", "Hardware", "Core infrastructure"],
      minRequired: 5,
      explanation: "The Cloud Provider is responsible for physical data centers, physical servers, physical network, hardware, and core infrastructure."
    },
    {
      type: "enumeration",
      question: "List what the Customer is responsible for in the Shared Responsibility Model.",
      answers: ["Data", "User accounts", "Passwords", "Access permissions", "Applications", "Security configurations"],
      minRequired: 6,
      explanation: "The Customer is responsible for data, user accounts, passwords, access permissions, applications, and security configurations."
    },
    {
      type: "enumeration",
      question: "List the career opportunities related to cloud computing presented in the lesson.",
      answers: [
        "Cloud Engineer",
        "Cloud Architect",
        "DevOps Engineer",
        "Cloud Developer",
        "Cybersecurity Professional",
        "System Administrator",
        "Network Engineer"
      ],
      minRequired: 7,
      explanation: "Career Opportunities: Cloud Engineer, Cloud Architect, DevOps Engineer, Cloud Developer, Cybersecurity Professional, System Administrator, Network Engineer."
    }
  ]
},

  {
    id: "unit9",
    title: "Unit 1 IoT",
    subtitle: "Introduction to Electronic Components and Breadboarding",
    emoji: "⚛️",
    color: "#FF9F0A",
    week: "3rd week",
    description: "Building the foundation: where electronic components come together to create functional circuits.",
    questions: [
      // --- UNIT 1 QUIZ ---
      {
        type: "multiple_choice",
        question: "What is a resistor?",
        options: [
          "An electronic component that limits or controls the flow of electric current in a circuit.",
          "A component that temporarily stores electrical energy.",
          "A board used to create circuits.",
          "A flexible wire used to connect electronic components."
        ],
        answer: 0,
        explanation: "A resistor is an electronic component that limits or controls the flow of electric current in a circuit."
      },

      {
        type: "multiple_choice",
        question: "What is the unit of resistance?",
        options: ["Volt (V)", "Ampere (A)", "Ohm (Ω)", "Watt (W)"],
        answer: 2,
        explanation: "Ω (ohm) is the unit of resistance."
      },

      {
        type: "multiple_choice",
        question: "What is the main purpose of a resistor?",
        options: [
          "To provide easy access to voltage and ground",
          "To protect components, such as LEDs, from receiving too much current",
          "To temporarily store electrical energy",
          "To control the flow of current by using a switch"
        ],
        answer: 1,
        explanation: "The main purpose of a resistor is to protect components, such as LEDs, from receiving too much current."
      },

      {
        type: "multiple_choice",
        question: "Which resistor has a fixed resistance value that cannot be adjusted?",
        options: [
          "Variable resistor",
          "Thermistor",
          "Fixed resistor",
          "Carbon composition resistor"
        ],
        answer: 2,
        explanation: "A fixed resistor has a fixed resistance value that cannot be adjusted."
      },

      {
        type: "multiple_choice",
        question: "Which resistor has an adjustable resistance value?",
        options: [
          "Fixed resistor",
          "Variable resistor",
          "Carbon composition resistor",
          "Thermistor"
        ],
        answer: 1,
        explanation: "A variable resistor has an adjustable resistance value."
      },

      {
        type: "multiple_choice",
        question: "What is a thermistor?",
        options: [
          "A type of resistor whose resistance is dependent on temperature",
          "A type of fixed resistor whose resistance cannot be adjusted",
          "A component that stores electrical energy in a static electric field",
          "A flexible wire used without soldering"
        ],
        answer: 0,
        explanation: "A thermistor is a type of resistor whose resistance is dependent on temperature."
      },

      {
        type: "multiple_choice",
        question: "Why is color-coding used on carbon resistors?",
        options: [
          "Carbon resistors are small, so their R value in ohms is marked using a color-coding system.",
          "Colors are used to indicate the type of breadboard.",
          "Colors are used to identify jumper wire types.",
          "Colors are used to show the power source."
        ],
        answer: 0,
        explanation: "Carbon resistors are small, so their R value in ohms is marked using a color-coding system."
      },

      {
        type: "multiple_choice",
        question: "What do the colors represent in the resistor color-coding system?",
        options: [
          "Voltage levels",
          "Numerical values",
          "Breadboard connections",
          "Types of capacitors"
        ],
        answer: 1,
        explanation: "The colors represent numerical values."
      },

      {
        type: "multiple_choice",
        question: "What do capacitors temporarily store?",
        options: [
          "Electrical energy in the form of a static electric field",
          "Current in the form of a power rail",
          "Voltage in the form of a jumper wire",
          "Resistance in the form of a color code"
        ],
        answer: 0,
        explanation: "Capacitors temporarily store electrical energy in the form of a static electric field."
      },

      {
        type: "multiple_choice",
        question: "What is a breadboard used to create?",
        options: [
          "Color resistor codes",
          "Circuits and connections between different sensors and actuators",
          "Static electric fields",
          "Only series circuits"
        ],
        answer: 1,
        explanation: "A breadboard is used to create circuits and connections between different sensors and actuators."
      },

      {
        type: "multiple_choice",
        question: "What is a breadboard also referred to as?",
        options: [
          "Soldered breadboard",
          "Solderless breadboard",
          "Variable breadboard",
          "Power breadboard"
        ],
        answer: 1,
        explanation: "A breadboard is also referred to as a solderless breadboard."
      },

      {
        type: "multiple_choice",
        question: "Each set of how many vertically connected holes lets you plug in component leads?",
        options: ["Three", "Four", "Five", "Ten"],
        answer: 2,
        explanation: "Each set of five vertically connected holes lets you plug in component leads."
      },

      {
        type: "multiple_choice",
        question: "What do the power rails on a breadboard provide easy access to?",
        options: [
          "Only current",
          "Voltage and ground",
          "Only resistance",
          "Only component leads"
        ],
        answer: 1,
        explanation: "Power rails provide easy access to voltage and ground."
      },

      {
        type: "multiple_choice",
        question: "What is an electric circuit?",
        options: [
          "A flexible wire used to connect components",
          "A complete path through which electric current flows from a power source through electrical components and back to the source",
          "A component that stores electrical energy",
          "A resistor color-coding system"
        ],
        answer: 1,
        explanation: "An electric circuit is a complete path through which electric current flows from a power source through electrical components and back to the source."
      },

      {
        type: "multiple_choice",
        question: "Which basic part of a circuit provides electrical energy?",
        options: [
          "Switch",
          "Load/Component",
          "Power Source",
          "Conductors/Wires"
        ],
        answer: 2,
        explanation: "The Power Source provides electrical energy."
      },

      {
        type: "multiple_choice",
        question: "Which basic part of a circuit provides a path for current?",
        options: [
          "Conductors/Wires",
          "Switch",
          "Load/Component",
          "Power Source"
        ],
        answer: 0,
        explanation: "Conductors/Wires provide a path for current."
      },

      {
        type: "multiple_choice",
        question: "Which basic part of a circuit uses electrical energy?",
        options: [
          "Power Source",
          "Load/Component",
          "Conductors/Wires",
          "Switch"
        ],
        answer: 1,
        explanation: "The Load/Component uses electrical energy."
      },

      {
        type: "multiple_choice",
        question: "Which basic part of a circuit controls the flow of current?",
        options: [
          "Power Source",
          "Load/Component",
          "Switch",
          "Conductors/Wires"
        ],
        answer: 2,
        explanation: "The Switch controls the flow of current."
      },

      {
        type: "multiple_choice",
        question: "What is a series circuit?",
        options: [
          "A circuit with two or more paths for current to flow through",
          "A circuit that contains only one current path",
          "A circuit with no power source",
          "A circuit made only from capacitors"
        ],
        answer: 1,
        explanation: "A series circuit contains only one current path."
      },

      {
        type: "multiple_choice",
        question: "What happens in a series circuit if one bulb blows?",
        options: [
          "The other bulbs stay lit.",
          "The voltage becomes the same across every component.",
          "It breaks the whole circuit, and all the bulbs go out.",
          "Only the power rail is affected."
        ],
        answer: 2,
        explanation: "If one bulb blows in a series circuit, it breaks the whole circuit, and all the bulbs go out."
      },

      {
        type: "multiple_choice",
        question: "What is a parallel circuit?",
        options: [
          "A circuit with only one current path",
          "A circuit with two or more paths for current to flow through",
          "A circuit with no complete path",
          "A circuit that uses only fixed resistors"
        ],
        answer: 1,
        explanation: "A parallel circuit has two or more paths for current to flow through."
      },

      {
        type: "multiple_choice",
        question: "What is the voltage across each component of a parallel circuit?",
        options: [
          "The voltage is different across each component.",
          "There is no voltage.",
          "The voltage is the same across each component.",
          "The voltage is controlled only by a switch."
        ],
        answer: 2,
        explanation: "Voltage is the same across each component of the parallel circuit."
      },

      {
        type: "multiple_choice",
        question: "If one bulb blows in a parallel circuit, what happens to the other bulb?",
        options: [
          "It stays lit because there is still a complete circuit to the other bulb.",
          "It also goes out because the whole circuit breaks.",
          "It becomes a series circuit.",
          "It has no voltage."
        ],
        answer: 0,
        explanation: "There would still be a complete circuit to the other bulb, so it stays lit."
      },

      {
        type: "multiple_choice",
        question: "What is the main purpose of jumper wires?",
        options: [
          "To temporarily store electrical energy",
          "To provide electrical connections between components",
          "To control the flow of current as a switch",
          "To mark resistor numerical values"
        ],
        answer: 1,
        explanation: "The main purpose of jumper wires is to provide electrical connections between components."
      },

      {
        type: "multiple_choice",
        question: "Which set lists the jumper wire types commonly available?",
        options: [
          "M-M, M-F, and F-F",
          "M-M, M-M, and F-F",
          "F-F, F-F, and M-F",
          "Red, blue, and green"
        ],
        answer: 0,
        explanation: "The jumper wire types are Male-to-Male (M-M), Male-to-Female (M-F), and Female-to-Female (F-F)."
      },

      {
        type: "true_false",
        question: "A resistor limits or controls the flow of electric current in a circuit.",
        answer: true,
        explanation: "A resistor limits or controls the flow of electric current in a circuit."
      },

      {
        type: "true_false",
        question: "The unit of resistance is the ohm (Ω).",
        answer: true,
        explanation: "Ω (ohm) is the unit of resistance."
      },

      {
        type: "true_false",
        question: "A fixed resistor has an adjustable resistance value.",
        answer: false,
        explanation: "A fixed resistor has a fixed resistance value that cannot be adjusted."
      },

      {
        type: "true_false",
        question: "A variable resistor allows you to increase or decrease the flow of current in a circuit.",
        answer: true,
        explanation: "A variable resistor has an adjustable resistance value, allowing you to increase or decrease the flow of current in a circuit."
      },

      {
        type: "true_false",
        question: "A thermistor is a type of resistor whose resistance is dependent on temperature.",
        answer: true,
        explanation: "A thermistor is a type of resistor whose resistance is dependent on temperature."
      },

      {
        type: "true_false",
        question: "Colors in the resistor color-coding system represent numerical values.",
        answer: true,
        explanation: "The colors represent numerical values."
      },

      {
        type: "true_false",
        question: "Capacitors temporarily store electrical energy in the form of a static electric field.",
        answer: true,
        explanation: "Capacitors temporarily store electrical energy in the form of a static electric field."
      },

      {
        type: "true_false",
        question: "A breadboard is also referred to as a solderless breadboard.",
        answer: true,
        explanation: "A breadboard is also referred to as a solderless breadboard."
      },

      {
        type: "true_false",
        question: "A series circuit contains two or more paths for current to flow through.",
        answer: false,
        explanation: "A series circuit contains only one current path."
      },

      {
        type: "true_false",
        question: "If one bulb blows in a series circuit, all the bulbs go out.",
        answer: true,
        explanation: "If one bulb blows, it breaks the whole circuit, and all the bulbs go out."
      },

      {
        type: "true_false",
        question: "A parallel circuit has two or more paths for current to flow through.",
        answer: true,
        explanation: "A parallel circuit has two or more paths for current to flow through."
      },

      {
        type: "true_false",
        question: "The voltage is the same across each component of a parallel circuit.",
        answer: true,
        explanation: "Voltage is the same across each component of the parallel circuit."
      },

      {
        type: "true_false",
        question: "If one bulb blows in a parallel circuit, the other bulb must also go out.",
        answer: false,
        explanation: "There would still be a complete circuit to the other bulb, so it stays lit."
      },

      {
        type: "true_false",
        question: "Jumper wires are flexible wires used to connect electronic components together on a breadboard.",
        answer: true,
        explanation: "Jumper wires are flexible wires used to connect electronic components together on a breadboard."
      },

      {
        type: "true_false",
        question: "Jumper wires can connect components and a microcontroller such as an ESP32 or Arduino.",
        answer: true,
        explanation: "Jumper wires can connect components and a microcontroller such as an ESP32 or Arduino."
      },

      // --- IDENTIFICATION ---

      {
        type: "identification",
        question: "This is the unit of resistance.",
        answer: "Ohm",
        acceptedAnswers: ["ohm", "ohms", "Ω", "ohm (Ω)"],
        explanation: "Ω (ohm) is the unit of resistance."
      },

      {
        type: "identification",
        question: "This type of resistor has a fixed resistance value that cannot be adjusted.",
        answer: "Fixed Resistor",
        acceptedAnswers: ["fixed resistor", "fixed"],
        explanation: "A fixed resistor has a fixed resistance value that cannot be adjusted."
      },

      {
        type: "identification",
        question: "This type of resistor has an adjustable resistance value, allowing you to increase or decrease the flow of current in a circuit.",
        answer: "Variable Resistor",
        acceptedAnswers: ["variable resistor", "variable"],
        explanation: "A variable resistor has an adjustable resistance value, allowing you to increase or decrease the flow of current in a circuit."
      },

      {
        type: "identification",
        question: "This type of resistor's resistance is dependent on temperature, more so than in standard resistors.",
        answer: "Thermistor",
        acceptedAnswers: ["thermistor"],
        explanation: "A thermistor is a type of resistor whose resistance is dependent on temperature."
      },

      {
        type: "identification",
        question: "This type of fixed resistor reduces or restricts the electric current flow to a certain level, and is made of carbon.",
        answer: "Carbon Composition Resistor",
        acceptedAnswers: ["carbon composition resistor", "carbon composite resistor"],
        explanation: "The carbon composition resistor is a type of fixed resistor that reduces or restricts the electric current flow to a certain level."
      },

      {
        type: "identification",
        question: "This organization standardizes the resistor color-coding system.",
        answer: "Electronic Industries Alliance (EIA)",
        acceptedAnswers: ["eia", "electronic industries alliance", "electronic industries alliance (eia)"],
        explanation: "Coding is standardized by the Electronic Industries Alliance (EIA)."
      },

      {
        type: "identification",
        question: "This electronic component temporarily stores electrical energy in the form of a static electric field.",
        answer: "Capacitor",
        acceptedAnswers: ["capacitor", "capacitors"],
        explanation: "Capacitors temporarily store the electrical energy in the form of a static electric field."
      },

      {
        type: "identification",
        question: "This board is used to create circuits and connect different sensors and actuators to the Arduino/ESP32 board, and is also referred to as a solderless breadboard.",
        answer: "Breadboard",
        acceptedAnswers: ["breadboard", "solderless breadboard"],
        explanation: "A breadboard is used to create circuits and connect different sensors and actuators to the Arduino/ESP32 board; it also refers to a solderless breadboard."
      },

      {
        type: "identification",
        question: "This part of the breadboard is made up of long horizontal rows on the edges, marked (+) and (–) with red/blue lines, providing easy access to voltage and ground.",
        answer: "Power Rails",
        acceptedAnswers: ["power rails", "power rail"],
        explanation: "Power rails are long horizontal rows on the edges, marked (+) and (–) with red/blue lines, providing easy access to voltage and ground."
      },

      {
        type: "identification",
        question: "This part of the breadboard is usually arranged in two central banks, where each set of five vertically connected holes lets you plug in component leads.",
        answer: "Terminal Strips",
        acceptedAnswers: ["terminal strips", "terminal strip"],
        explanation: "Terminal strips are usually arranged in two central banks. Each set of five vertically connected holes lets you plug in component leads."
      },

      {
        type: "identification",
        question: "This type of circuit contains only one current path; if one bulb blows, it breaks the whole circuit and all the bulbs go out.",
        answer: "Series Circuit",
        acceptedAnswers: ["series circuit", "series"],
        explanation: "A series circuit contains only one current path. If one bulb blows, it breaks the whole circuit, and all the bulbs go out."
      },

      {
        type: "identification",
        question: "This type of circuit has two or more paths for current to flow through, with the same voltage across each component.",
        answer: "Parallel Circuit",
        acceptedAnswers: ["parallel circuit", "parallel"],
        explanation: "A parallel circuit has two or more paths for current to flow through, and voltage is the same across each component."
      },

      {
        type: "identification",
        question: "These flexible wires are used to connect electronic components together on a breadboard or between components and a microcontroller such as an ESP32 or Arduino.",
        answer: "Jumper Wires",
        acceptedAnswers: ["jumper wires", "jumper wire", "jumpers wires", "jumpers"],
        explanation: "Jumper wires are flexible wires used to connect electronic components together on a breadboard or between components and a microcontroller such as an ESP32 or Arduino."
      },

      {
        type: "identification",
        question: "This basic part of a circuit provides electrical energy.",
        answer: "Power Source",
        acceptedAnswers: ["power source"],
        explanation: "The Power Source provides electrical energy."
      },

      {
        type: "identification",
        question: "This basic part of a circuit controls the flow of current.",
        answer: "Switch",
        acceptedAnswers: ["switch"],
        explanation: "The Switch controls the flow of current."
      },

      {
        type: "enumeration",
        question: "List the 5 basic electronic components identified in Unit 1.",
        answers: [
          "Resistors",
          "Capacitors",
          "LEDs",
          "Breadboards",
          "Jumper wires"
        ],
        minRequired: 5,
        explanation: "The five components are resistors, capacitors, LEDs, breadboards, and jumper wires."
      },

      {
        type: "enumeration",
        question: "List the 2 types of resistors presented in Unit 1.",
        answers: [
          "Fixed Resistor",
          "Variable Resistor"
        ],
        minRequired: 2,
        explanation: "The two types are Fixed Resistor and Variable Resistor."
      },

      {
        type: "enumeration",
        question: "List the 4 basic parts of an electric circuit.",
        answers: [
          "Power Source",
          "Conductors/Wires",
          "Load/Component",
          "Switch"
        ],
        minRequired: 4,
        explanation: "The four basic parts are Power Source, Conductors/Wires, Load/Component, and Switch."
      },

      {
        type: "enumeration",
        question: "List the 2 main sections of a breadboard.",
        answers: [
          "Terminal strips",
          "Power rails"
        ],
        minRequired: 2,
        explanation: "The two main sections are Terminal strips and Power rails."
      },

      {
        type: "enumeration",
        question: "List the 3 common types of jumper wires.",
        answers: [
          "Male-to-Male (M-M)",
          "Male-to-Female (M-F)",
          "Female-to-Female (F-F)"
        ],
        minRequired: 3,
        explanation: "The three common types are Male-to-Male, Male-to-Female, and Female-to-Female."
      },

      {
        type: "enumeration",
        question: "List the functions of the 4 basic parts of an electric circuit.",
        answers: [
          "Power Source – provides electrical energy",
          "Conductors/Wires – provide a path for current",
          "Load/Component – uses electrical energy",
          "Switch – controls the flow of current"
        ],
        minRequired: 4,
        explanation: "These are the functions of the four basic parts of an electric circuit."
      }
    ]
  },
  {
    id: "unit10",
    title: "Introduction to IoT & ESP32",
    subtitle: "Module 3, Unit 2",
    emoji: "🌐",
    color: "#0A84FF",
    week: "Week 11",
    description: "Test your knowledge on the Internet of Things, IoT system elements, everyday IoT usage examples, ESP32 microcontroller, and Arduino IDE.",

    questions: [

      // --- MULTIPLE CHOICE ---

      {
        type: "multiple_choice",
        question: "What is the Internet of Things (IoT)?",
        options: [
          "A vast network of physical objects embedded with sensors, software, and network connectivity",
          "A powerful microcontroller developed by Espressif",
          "A text editor for writing code",
          "A mobile app or dashboard"
        ],
        answer: 0,
        explanation: "The Internet of Things (IoT) is a vast network of physical objects—such as appliances, vehicles, and industrial machinery—embedded with sensors, software, and network connectivity."
      },

      {
        type: "multiple_choice",
        question: "What can IoT objects do over the internet?",
        options: [
          "Only display status updates",
          "Collect and share data",
          "Only control motors",
          "Only write code"
        ],
        answer: 1,
        explanation: "IoT objects can collect and share data over the internet without needing human help."
      },

      {
        type: "multiple_choice",
        question: "Which of the following is an example of a physical object in the definition of IoT?",
        options: [
          "Text console",
          "Toolbar",
          "Appliances",
          "Sketch"
        ],
        answer: 2,
        explanation: "Appliances, vehicles, and industrial machinery are examples of physical objects in the definition of IoT."
      },

      {
        type: "multiple_choice",
        question: "Which IoT element collects data from the environment?",
        options: [
          "Sensors/Devices",
          "Connectivity",
          "Data Processing",
          "User Interface"
        ],
        answer: 0,
        explanation: "Sensors/Devices collect data from the environment."
      },

      {
        type: "multiple_choice",
        question: "Which of the following is an example of Sensors/Devices?",
        options: [
          "Wi-Fi",
          "Mobile app",
          "Temperature sensor",
          "Cloud software"
        ],
        answer: 2,
        explanation: "Temperature sensor, motion detector, and GPS are examples of Sensors/Devices."
      },

      {
        type: "multiple_choice",
        question: "What is Connectivity in an IoT system?",
        options: [
          "The mobile app or dashboard where users view status updates",
          "The pathway for data to reach the cloud",
          "The software that analyzes data",
          "The device that collects data"
        ],
        answer: 1,
        explanation: "Connectivity is the pathway for data to reach the cloud."
      },

      {
        type: "multiple_choice",
        question: "Which of the following can be used for Connectivity?",
        options: [
          "Wi-Fi, Bluetooth, or cellular networks",
          "Temperature sensor, motion detector, or GPS",
          "Mobile app or dashboard",
          "Cloud software only"
        ],
        answer: 0,
        explanation: "Connectivity uses Wi-Fi, Bluetooth, or cellular networks."
      },

      {
        type: "multiple_choice",
        question: "What does Data Processing do in an IoT system?",
        options: [
          "Collects data from the environment",
          "Provides the pathway for data to reach the cloud",
          "Analyzes the data to determine what action to take",
          "Displays the sketch name"
        ],
        answer: 2,
        explanation: "Cloud software analyzes the data to determine what action to take."
      },

      {
        type: "multiple_choice",
        question: "What is the User Interface in an IoT system?",
        options: [
          "The mobile app or dashboard where users can view status updates or send commands",
          "The pathway for data to reach the cloud",
          "The device that collects data",
          "The cloud software that analyzes data"
        ],
        answer: 0,
        explanation: "The User Interface is the mobile app or dashboard where users can view status updates or send commands."
      },

      {
        type: "multiple_choice",
        question: "Which category includes Smart Thermostat / Aircon?",
        options: [
          "Healthcare",
          "Agriculture",
          "Transportation",
          "Smart Home"
        ],
        answer: 3,
        explanation: "Smart Thermostat / Aircon is listed under Smart Home."
      },

      {
        type: "multiple_choice",
        question: "What does Smart Thermostat / Aircon do?",
        options: [
          "Tracks the location and fuel levels of delivery trucks",
          "Adjusts cooling automatically based on room occupancy or weather",
          "Monitors heart rate",
          "Waters crops when soil sensors detect dry conditions"
        ],
        answer: 1,
        explanation: "Smart Thermostat / Aircon adjusts cooling automatically based on room occupancy or weather."
      },

      {
        type: "multiple_choice",
        question: "Which category includes Wearable Fitness Tracker?",
        options: [
          "Healthcare",
          "Smart Home",
          "Transportation",
          "Agriculture"
        ],
        answer: 0,
        explanation: "Wearable Fitness Tracker is listed under Healthcare."
      },

      {
        type: "multiple_choice",
        question: "What does a Wearable Fitness Tracker do?",
        options: [
          "Tracks delivery trucks",
          "Adjusts cooling",
          "Monitors heart rate and alerts you if there are abnormalities",
          "Waters crops"
        ],
        answer: 2,
        explanation: "A Wearable Fitness Tracker monitors heart rate and alerts you if there are abnormalities."
      },

      {
        type: "multiple_choice",
        question: "Which category includes Fleet Tracking Systems?",
        options: [
          "Agriculture",
          "Transportation",
          "Healthcare",
          "Smart Home"
        ],
        answer: 1,
        explanation: "Fleet Tracking Systems are listed under Transportation."
      },

      {
        type: "multiple_choice",
        question: "What does Fleet Tracking Systems do?",
        options: [
          "Tracks the location and fuel levels of delivery trucks in real time",
          "Monitors heart rate",
          "Adjusts cooling automatically",
          "Waters crops automatically"
        ],
        answer: 0,
        explanation: "Fleet Tracking Systems track the location and fuel levels of delivery trucks in real time."
      },

      {
        type: "multiple_choice",
        question: "Which category includes Automated Irrigation?",
        options: [
          "Healthcare",
          "Smart Home",
          "Agriculture",
          "Transportation"
        ],
        answer: 2,
        explanation: "Automated Irrigation is listed under Agriculture."
      },

      {
        type: "multiple_choice",
        question: "What does Automated Irrigation do?",
        options: [
          "Monitors heart rate",
          "Tracks delivery trucks",
          "Adjusts cooling",
          "Waters crops automatically when soil sensors detect dry conditions"
        ],
        answer: 3,
        explanation: "Automated Irrigation waters crops automatically when soil sensors detect dry conditions."
      },

      {
        type: "multiple_choice",
        question: "Who developed the ESP32?",
        options: [
          "Arduino",
          "Espressif",
          "Genuino",
          "Electronic Industries Alliance"
        ],
        answer: 1,
        explanation: "ESP32 is a powerful microcontroller developed by Espressif."
      },

      {
        type: "multiple_choice",
        question: "What is ESP32?",
        options: [
          "A powerful microcontroller",
          "A mobile app",
          "A cloud software",
          "A text console"
        ],
        answer: 0,
        explanation: "ESP32 is a powerful microcontroller developed by Espressif."
      },

      {
        type: "multiple_choice",
        question: "Which combination is built into the ESP32 in a single chip?",
        options: [
          "Text editor, message area, and text console",
          "Processor, memory, input/output (I/O) peripherals, Wi-Fi, and Bluetooth",
          "Mobile app, dashboard, and cloud software",
          "Sensors, actuators, and delivery trucks"
        ],
        answer: 1,
        explanation: "ESP32 combines a processor, memory, input/output (I/O) peripherals, and built-in Wi-Fi and Bluetooth in a single chip."
      },

      {
        type: "multiple_choice",
        question: "What does the ESP32 serve as in IoT projects?",
        options: [
          "The message area",
          "The brain of IoT projects",
          "The User Interface",
          "The text console"
        ],
        answer: 1,
        explanation: "The ESP32 serves as the brain of IoT projects."
      },

      {
        type: "multiple_choice",
        question: "What does the ESP32 process?",
        options: [
          "Programmed instructions",
          "Only serial information",
          "Only status updates",
          "Only error messages"
        ],
        answer: 0,
        explanation: "The ESP32 processes programmed instructions."
      },

      {
        type: "multiple_choice",
        question: "Which devices can the ESP32 control?",
        options: [
          "Sensors, LEDs, motors, and other connected devices",
          "Only sensors",
          "Only LEDs",
          "Only motors"
        ],
        answer: 0,
        explanation: "The ESP32 controls sensors, LEDs, motors, and other connected devices."
      },

      {
        type: "multiple_choice",
        question: "What does Arduino IDE stand for?",
        options: [
          "Arduino Integrated Development Environment",
          "Arduino Internet Development Environment",
          "Arduino Integrated Device Electronics",
          "Arduino Internet Device Environment"
        ],
        answer: 0,
        explanation: "Arduino IDE means Arduino Integrated Development Environment."
      },

      {
        type: "multiple_choice",
        question: "What is the Arduino IDE also called?",
        options: [
          "Arduino Software (IDE)",
          "Arduino Cloud Software",
          "Arduino User Interface",
          "Arduino Text Console"
        ],
        answer: 0,
        explanation: "The presentation refers to the Arduino Integrated Development Environment as Arduino Software (IDE)."
      },

      {
        type: "multiple_choice",
        question: "Which part of the Arduino IDE is used for writing code?",
        options: [
          "Message area",
          "Text editor",
          "Text console",
          "Serial Monitor"
        ],
        answer: 1,
        explanation: "The Arduino IDE contains a text editor for writing code."
      },

      {
        type: "multiple_choice",
        question: "What does the Arduino IDE contain besides a text editor?",
        options: [
          "A message area, text console, toolbar, and menus",
          "Only a Serial Monitor",
          "Only a sketch folder",
          "Only a code area"
        ],
        answer: 0,
        explanation: "The Arduino IDE contains a text editor, message area, text console, toolbar with buttons for common functions, and a series of menus."
      },

      {
        type: "multiple_choice",
        question: "What hardware does the Arduino IDE connect to?",
        options: [
          "Arduino and Genuino hardware",
          "Only ESP32 hardware",
          "Only sensors",
          "Only motors"
        ],
        answer: 0,
        explanation: "The Arduino IDE connects to Arduino and Genuino hardware to upload programs and communicate with them."
      },

      {
        type: "multiple_choice",
        question: "What is the Edit section used for?",
        options: [
          "Copying and pasting the code with further modification for font",
          "Opening the current sketch folder",
          "Uploading the binary file",
          "Burning the bootloader"
        ],
        answer: 0,
        explanation: "The Edit section is used for copying and pasting the code with further modification for font."
      },

      {
        type: "multiple_choice",
        question: "What does Verify / Compile do?",
        options: [
          "Opens the current sketch folder",
          "Checks the sketch for errors while compiling it",
          "Adds a source file to the sketch",
          "Opens the Serial Monitor"
        ],
        answer: 1,
        explanation: "Verify / Compile checks your sketch for errors while compiling it."
      },

      {
        type: "multiple_choice",
        question: "What does Verify / Compile report in the console area?",
        options: [
          "Memory usage for code and variables",
          "Only the sketch name",
          "Only the board name",
          "Only the Port"
        ],
        answer: 0,
        explanation: "Verify / Compile also reports memory usage for code and variables in the console area."
      },

      {
        type: "multiple_choice",
        question: "What does Upload do?",
        options: [
          "Compiles and loads the binary file onto the configured board through the configured Port",
          "Opens an existing sketch",
          "Adds a source file",
          "Shows complete error messages"
        ],
        answer: 0,
        explanation: "Upload compiles and loads the binary file onto the configured board through the configured Port."
      },

      {
        type: "multiple_choice",
        question: "What happens when Upload is clicked?",
        options: [
          "The lights on the board should blink rapidly.",
          "The sketch folder closes.",
          "The bootloader is overwritten.",
          "The text editor closes."
        ],
        answer: 0,
        explanation: "When Upload is clicked, the lights on the board should blink rapidly."
      },

      {
        type: "multiple_choice",
        question: "What does Upload Using Programmer do?",
        options: [
          "Opens a new code window tab",
          "Overwrites the bootloader on the board",
          "Displays serial information",
          "Checks syntax errors"
        ],
        answer: 1,
        explanation: "Upload Using Programmer overwrites the bootloader on the board."
      },

      {
        type: "multiple_choice",
        question: "What is needed to restore the bootloader after using Upload Using Programmer?",
        options: [
          "Tools > Burn Bootloader",
          "File > Open",
          "Edit > Copy",
          "Help > Troubleshooting"
        ],
        answer: 0,
        explanation: "Tools > Burn Bootloader is needed to restore the bootloader and be able to Upload to USB serial port again."
      },

      {
        type: "multiple_choice",
        question: "What does Export Compiled Binary do?",
        options: [
          "Saves a hex file that may be kept as archive or sent to the board using other tools",
          "Opens a new code window tab",
          "Shows complete error messages",
          "Adds a library"
        ],
        answer: 0,
        explanation: "Export Compiled Binary saves a hex file that may be kept as archive or sent to the board using other tools."
      },

      {
        type: "multiple_choice",
        question: "What does Show Sketch Folder do?",
        options: [
          "Opens the current sketch folder",
          "Uploads the sketch",
          "Checks the sketch for errors",
          "Opens the Serial Monitor"
        ],
        answer: 0,
        explanation: "Show Sketch Folder opens the current sketch folder."
      },

      {
        type: "multiple_choice",
        question: "What does Include Library do?",
        options: [
          "Adds a library to your sketch by inserting #include statements at the start of your code",
          "Overwrites the bootloader",
          "Opens the current sketch folder",
          "Saves a hex file"
        ],
        answer: 0,
        explanation: "Include Library adds a library to your sketch by inserting #include statements at the start of your code."
      },

      {
        type: "multiple_choice",
        question: "What does Add File do?",
        options: [
          "Adds a source file to the sketch",
          "Checks the sketch for errors",
          "Opens the Serial Monitor",
          "Burns the bootloader"
        ],
        answer: 0,
        explanation: "Add File adds a source file to the sketch, and it will be copied from its current location."
      },

      {
        type: "multiple_choice",
        question: "What is the Tools section mainly used for?",
        options: [
          "Testing projects",
          "Writing code",
          "Copying and pasting code",
          "Displaying serial information"
        ],
        answer: 0,
        explanation: "The Tools section is mainly used for testing projects."
      },

      {
        type: "multiple_choice",
        question: "What is the Programmer section in the Tools panel used for?",
        options: [
          "Burning a bootloader to the new microcontroller",
          "Opening a new code window",
          "Viewing status updates",
          "Writing code"
        ],
        answer: 0,
        explanation: "The Programmer section is used for burning a bootloader to the new microcontroller."
      },

      {
        type: "multiple_choice",
        question: "What is the Help section used for?",
        options: [
          "Getting started to troubleshooting",
          "Uploading the binary file",
          "Adding a source file",
          "Opening the sketch folder"
        ],
        answer: 0,
        explanation: "The Help section provides complete help from getting started to troubleshooting."
      },

      {
        type: "multiple_choice",
        question: "What does the Verify button do?",
        options: [
          "Compiles and checks your code",
          "Sends your code to the board",
          "Opens an existing sketch",
          "Opens a new code window"
        ],
        answer: 0,
        explanation: "Verify compiles and checks your code."
      },

      {
        type: "multiple_choice",
        question: "What kind of errors can Verify catch?",
        options: [
          "Errors in syntax like missing semi-colons or parenthesis",
          "Only network errors",
          "Only hardware errors",
          "Only serial information"
        ],
        answer: 0,
        explanation: "Verify catches errors in syntax, such as missing semi-colons or parenthesis."
      },

      {
        type: "multiple_choice",
        question: "What does the New button do?",
        options: [
          "Opens a new code window tab",
          "Opens an existing sketch",
          "Uploads code to the board",
          "Displays serial information"
        ],
        answer: 0,
        explanation: "The New button opens a new code window tab."
      },

      {
        type: "multiple_choice",
        question: "What does the Open button do?",
        options: [
          "Opens an existing sketch",
          "Creates a new code window",
          "Uploads code",
          "Checks code for errors"
        ],
        answer: 0,
        explanation: "The Open button lets you open an existing sketch."
      },

      {
        type: "multiple_choice",
        question: "What does the Serial Monitor display?",
        options: [
          "Any serial information the Arduino or ESP32 board is transmitting",
          "Only complete error messages",
          "Only the sketch name",
          "Only memory usage"
        ],
        answer: 0,
        explanation: "The Serial Monitor opens a window that displays any serial information your Arduino or ESP32 board is transmitting."
      },

      {
        type: "multiple_choice",
        question: "What is the Serial Monitor useful for?",
        options: [
          "Debugging",
          "Burning the bootloader",
          "Creating a new sketch",
          "Copying code"
        ],
        answer: 0,
        explanation: "The Serial Monitor is very useful for debugging."
      },

      {
        type: "multiple_choice",
        question: "What does the Sketch Name show?",
        options: [
          "The name of the sketch you are currently working on",
          "The name of the configured Port",
          "The complete error message",
          "The memory usage"
        ],
        answer: 0,
        explanation: "Sketch Name shows the name of the sketch you are currently working on."
      },

      {
        type: "multiple_choice",
        question: "Where do you write your codes?",
        options: [
          "Code Area",
          "Message Area",
          "Text Console",
          "Serial Monitor"
        ],
        answer: 0,
        explanation: "The Code Area is where you write your codes."
      },

      {
        type: "multiple_choice",
        question: "Where does the IDE tell you if there were any errors in your code?",
        options: [
          "Code Area",
          "Message Area / Status Bar",
          "Sketch Name",
          "Menu Bar"
        ],
        answer: 1,
        explanation: "The Message Area / Status Bar is where the IDE tells you if there were any errors in your code."
      },

      {
        type: "multiple_choice",
        question: "What does the Text Console show?",
        options: [
          "Complete error messages",
          "Only the sketch name",
          "Only the code",
          "Only status updates"
        ],
        answer: 0,
        explanation: "The text console shows complete error messages."
      },

      {
        type: "multiple_choice",
        question: "What is the Text Console useful for?",
        options: [
          "Debugging",
          "Opening sketches",
          "Creating IoT objects",
          "Sending commands through the User Interface"
        ],
        answer: 0,
        explanation: "When debugging, the text console is very useful."
      },

      // --- TRUE/FALSE ---

      {
        type: "true_false",
        question: "The Internet of Things is a vast network of physical objects embedded with sensors, software, and network connectivity.",
        answer: true,
        explanation: "The presentation defines IoT as a vast network of physical objects embedded with sensors, software, and network connectivity."
      },

      {
        type: "true_false",
        question: "IoT objects can collect and share data over the internet without needing human help.",
        answer: true,
        explanation: "The presentation states that IoT allows objects to collect and share data over the internet without needing human help."
      },

      {
        type: "true_false",
        question: "Sensors/Devices provide the pathway for data to reach the cloud.",
        answer: false,
        explanation: "Connectivity provides the pathway for data to reach the cloud."
      },

      {
        type: "true_false",
        question: "Connectivity can use Wi-Fi, Bluetooth, or cellular networks.",
        answer: true,
        explanation: "The presentation lists Wi-Fi, Bluetooth, and cellular networks for Connectivity."
      },

      {
        type: "true_false",
        question: "Cloud software analyzes data to determine what action to take.",
        answer: true,
        explanation: "Data Processing uses cloud software to analyze the data and determine what action to take."
      },

      {
        type: "true_false",
        question: "The User Interface is the mobile app or dashboard where users can view status updates or send commands.",
        answer: true,
        explanation: "This is the definition of the User Interface in an IoT system."
      },

      {
        type: "true_false",
        question: "A Smart Thermostat / Aircon tracks the location and fuel levels of delivery trucks in real time.",
        answer: false,
        explanation: "Fleet Tracking Systems track the location and fuel levels of delivery trucks in real time."
      },

      {
        type: "true_false",
        question: "A Wearable Fitness Tracker monitors heart rate and alerts you if there are abnormalities.",
        answer: true,
        explanation: "This is the function given for the Wearable Fitness Tracker."
      },

      {
        type: "true_false",
        question: "Automated Irrigation waters crops automatically when soil sensors detect dry conditions.",
        answer: true,
        explanation: "This is the function given for Automated Irrigation."
      },

      {
        type: "true_false",
        question: "ESP32 was developed by Espressif.",
        answer: true,
        explanation: "ESP32 is a powerful microcontroller developed by Espressif."
      },

      {
        type: "true_false",
        question: "ESP32 has built-in Wi-Fi and Bluetooth in a single chip.",
        answer: true,
        explanation: "The ESP32 combines built-in Wi-Fi and Bluetooth in a single chip."
      },

      {
        type: "true_false",
        question: "ESP32 serves as the brain of IoT projects.",
        answer: true,
        explanation: "The presentation states that ESP32 serves as the brain of IoT projects."
      },

      {
        type: "true_false",
        question: "The Arduino IDE contains only a text editor for writing code.",
        answer: false,
        explanation: "The Arduino IDE contains a text editor, message area, text console, toolbar, and a series of menus."
      },

      {
        type: "true_false",
        question: "The Arduino IDE connects to Arduino and Genuino hardware to upload programs and communicate with them.",
        answer: true,
        explanation: "The presentation states that the Arduino IDE connects to Arduino and Genuino hardware to upload programs and communicate with them."
      },

      {
        type: "true_false",
        question: "Verify / Compile checks the sketch for errors while compiling it.",
        answer: true,
        explanation: "Verify / Compile checks the sketch for errors while compiling it."
      },

      {
        type: "true_false",
        question: "Upload opens the current sketch folder.",
        answer: false,
        explanation: "Show Sketch Folder opens the current sketch folder. Upload compiles and loads the binary file onto the configured board."
      },

      {
        type: "true_false",
        question: "Upload Using Programmer overwrites the bootloader on the board.",
        answer: true,
        explanation: "Upload Using Programmer overwrites the bootloader on the board."
      },

      {
        type: "true_false",
        question: "Tools > Burn Bootloader can restore the bootloader after using Upload Using Programmer.",
        answer: true,
        explanation: "The presentation states that Tools > Burn Bootloader is needed to restore the bootloader."
      },

      {
        type: "true_false",
        question: "Export Compiled Binary saves a hex file.",
        answer: true,
        explanation: "Export Compiled Binary saves a hex file that may be kept as an archive or sent to the board using other tools."
      },

      {
        type: "true_false",
        question: "Include Library adds a library to the sketch by inserting #include statements at the start of the code.",
        answer: true,
        explanation: "This is the function of Include Library."
      },

      {
        type: "true_false",
        question: "Add File adds a source file to the sketch.",
        answer: true,
        explanation: "Add File adds a source file to the sketch, copied from its current location."
      },

      {
        type: "true_false",
        question: "The Tools section is mainly used for testing projects.",
        answer: true,
        explanation: "The Tools section is mainly used for testing projects."
      },

      {
        type: "true_false",
        question: "The Help section provides complete help from getting started to troubleshooting.",
        answer: true,
        explanation: "The Help section provides complete help from getting started to troubleshooting."
      },

      {
        type: "true_false",
        question: "The Serial Monitor displays serial information transmitted by the Arduino or ESP32 board.",
        answer: true,
        explanation: "The Serial Monitor displays serial information transmitted by the Arduino or ESP32 board."
      },

      {
        type: "true_false",
        question: "The Code Area is where complete error messages are displayed.",
        answer: false,
        explanation: "The Code Area is where codes are written. The Text Console shows complete error messages."
      },

      // --- IDENTIFICATION ---

      {
        type: "identification",
        question: "This vast network of physical objects is embedded with sensors, software, and network connectivity, letting them collect and share data over the internet without needing human help.",
        answer: "Internet of Things (IoT)",
        acceptedAnswers: ["iot", "internet of things", "internet of things (iot)"],
        explanation: "The Internet of Things (IoT) is a vast network of physical objects embedded with sensors, software, and network connectivity."
      },

      {
        type: "identification",
        question: "This IoT element collects data from the environment (e.g., temperature sensor, motion detector, GPS).",
        answer: "Sensors/Devices",
        acceptedAnswers: ["sensors/devices", "sensors", "devices", "sensors and devices"],
        explanation: "Sensors/Devices collect data from the environment, such as a temperature sensor, motion detector, or GPS."
      },

      {
        type: "identification",
        question: "This IoT element is the pathway for data to reach the cloud using Wi-Fi, Bluetooth, or cellular networks.",
        answer: "Connectivity",
        acceptedAnswers: ["connectivity"],
        explanation: "Connectivity is the pathway for data to reach the cloud using Wi-Fi, Bluetooth, or cellular networks."
      },

      {
        type: "identification",
        question: "This IoT element uses cloud software to analyze the data and determine what action to take.",
        answer: "Data Processing",
        acceptedAnswers: ["data processing"],
        explanation: "Data Processing uses cloud software to analyze the data to determine what action to take."
      },

      {
        type: "identification",
        question: "This IoT element is the mobile app or dashboard where users can view status updates or send commands.",
        answer: "User Interface",
        acceptedAnswers: ["user interface", "ui"],
        explanation: "The User Interface is the mobile app or dashboard where users can view status updates or send commands."
      },

      {
        type: "identification",
        question: "This company developed the ESP32 microcontroller.",
        answer: "Espressif",
        acceptedAnswers: ["espressif"],
        explanation: "ESP32 is a powerful microcontroller developed by Espressif."
      },

      {
        type: "identification",
        question: "This powerful microcontroller combines a processor, memory, I/O peripherals, and built-in Wi-Fi and Bluetooth in a single chip, serving as the brain of IoT projects.",
        answer: "ESP32",
        acceptedAnswers: ["esp32", "esp 32"],
        explanation: "ESP32 combines a processor, memory, I/O peripherals, and built-in Wi-Fi and Bluetooth in a single chip, and serves as the brain of IoT projects."
      },

      {
        type: "identification",
        question: "This software, also called Arduino Software (IDE), contains a text editor, message area, text console, toolbar, and menus, and connects to Arduino and Genuino hardware.",
        answer: "Arduino IDE",
        acceptedAnswers: ["arduino ide", "arduino integrated development environment", "arduino software (ide)", "arduino software"],
        explanation: "The Arduino Integrated Development Environment (Arduino Software / IDE) contains a text editor, message area, text console, toolbar, and menus, and connects to Arduino and Genuino hardware."
      },

      {
        type: "identification",
        question: "This Arduino IDE function checks your sketch for errors while compiling it, and reports memory usage for code and variables.",
        answer: "Verify / Compile",
        acceptedAnswers: ["verify/compile", "verify / compile", "verify", "compile"],
        explanation: "Verify / Compile checks your sketch for errors while compiling it and reports memory usage for code and variables in the console area."
      },

      {
        type: "identification",
        question: "This Arduino IDE function compiles and loads the binary file onto the configured board through the configured Port.",
        answer: "Upload",
        acceptedAnswers: ["upload"],
        explanation: "Upload compiles and loads the binary file onto the configured board through the configured Port."
      },

      {
        type: "identification",
        question: "This Arduino IDE function overwrites the bootloader on the board.",
        answer: "Upload Using Programmer",
        acceptedAnswers: ["upload using programmer"],
        explanation: "Upload Using Programmer overwrites the bootloader on the board."
      },

      {
        type: "identification",
        question: "This Arduino IDE function saves a hex file that may be kept as an archive or sent to the board using other tools.",
        answer: "Export Compiled Binary",
        acceptedAnswers: ["export compiled binary"],
        explanation: "Export Compiled Binary saves a hex file that may be kept as an archive or sent to the board using other tools."
      },

      {
        type: "identification",
        question: "This Arduino IDE function opens the current sketch folder.",
        answer: "Show Sketch Folder",
        acceptedAnswers: ["show sketch folder"],
        explanation: "Show Sketch Folder opens the current sketch folder."
      },

      {
        type: "identification",
        question: "This Arduino IDE function adds a library to your sketch by inserting #include statements at the start of your code.",
        answer: "Include Library",
        acceptedAnswers: ["include library"],
        explanation: "Include Library adds a library to your sketch by inserting #include statements at the start of your code."
      },

      {
        type: "identification",
        question: "This part of the Arduino IDE displays any serial information your Arduino/ESP32 board is transmitting, and is very useful for debugging.",
        answer: "Serial Monitor",
        acceptedAnswers: ["serial monitor"],
        explanation: "The Serial Monitor opens a window that displays any serial information your Arduino/ESP32 board is transmitting; it is very useful for debugging."
      },

      {
        type: "identification",
        question: "This part of the Arduino IDE is where you write your codes.",
        answer: "Code Area",
        acceptedAnswers: ["code area"],
        explanation: "The Code Area is where you write your codes."
      },

      {
        type: "identification",
        question: "This part of the Arduino IDE tells you if there were any errors in your code.",
        answer: "Message Area / Status Bar",
        acceptedAnswers: ["message area/status bar", "message area / status bar", "message area", "status bar"],
        explanation: "The Message Area / Status Bar is where the IDE tells you if there were any errors in your code."
      },

      {
        type: "enumeration",
        question: "List the 4 key elements of an IoT system.",
        answers: [
          "Sensors/Devices",
          "Connectivity",
          "Data Processing",
          "User Interface"
        ],
        minRequired: 4,
        explanation: "The four key elements are Sensors/Devices, Connectivity, Data Processing, and User Interface."
      },

      {
        type: "enumeration",
        question: "List the 4 everyday IoT usage examples presented in Unit 2.",
        answers: [
          "Smart Thermostat / Aircon",
          "Wearable Fitness Tracker",
          "Fleet Tracking Systems",
          "Automated Irrigation"
        ],
        minRequired: 4,
        explanation: "The four everyday usage examples are Smart Thermostat / Aircon, Wearable Fitness Tracker, Fleet Tracking Systems, and Automated Irrigation."
      },

      {
        type: "enumeration",
        question: "List the 4 categories of the everyday IoT usage examples.",
        answers: [
          "Smart Home",
          "Healthcare",
          "Transportation",
          "Agriculture"
        ],
        minRequired: 4,
        explanation: "The four categories are Smart Home, Healthcare, Transportation, and Agriculture."
      },

      {
        type: "enumeration",
        question: "List the 5 things combined in the ESP32 single chip.",
        answers: [
          "Processor",
          "Memory",
          "Input/output (I/O) peripherals",
          "Wi-Fi",
          "Bluetooth"
        ],
        minRequired: 5,
        explanation: "ESP32 combines a processor, memory, input/output (I/O) peripherals, built-in Wi-Fi, and Bluetooth in a single chip."
      },

      {
        type: "enumeration",
        question: "List the 4 things the ESP32 can control according to the presentation.",
        answers: [
          "Sensors",
          "LEDs",
          "Motors",
          "Other connected devices"
        ],
        minRequired: 4,
        explanation: "The ESP32 processes programmed instructions and controls sensors, LEDs, motors, and other connected devices."
      },

      {
        type: "enumeration",
        question: "List the 5 components of the Arduino IDE mentioned in the presentation.",
        answers: [
          "Text editor",
          "Message area",
          "Text console",
          "Toolbar with buttons for common functions",
          "Series of menus"
        ],
        minRequired: 5,
        explanation: "The Arduino IDE contains a text editor, message area, text console, toolbar with buttons for common functions, and a series of menus."
      },

      {
        type: "enumeration",
        question: "List the 7 functions under the Arduino IDE sections presented in Unit 2.",
        answers: [
          "Verify / Compile",
          "Upload",
          "Upload Using Programmer",
          "Export Compiled Binary",
          "Show Sketch Folder",
          "Include Library",
          "Add File"
        ],
        minRequired: 7,
        explanation: "The presentation discusses Verify / Compile, Upload, Upload Using Programmer, Export Compiled Binary, Show Sketch Folder, Include Library, and Add File."
      },

      {
        type: "enumeration",
        question: "List the 10 Arduino IDE interface parts/functions presented in Unit 2.",
        answers: [
          "Verify",
          "Upload",
          "New",
          "Open",
          "Serial Monitor",
          "Sketch Name",
          "Code Area",
          "Message Area / Status Bar",
          "Text Console"
        ],
        minRequired: 9,
        explanation: "The presentation numbers the Arduino IDE interface as Verify, Upload, New, Open, Serial Monitor, Sketch Name, Code Area, Message Area / Status Bar, and Text Console."
      },

      {
        type: "enumeration",
        question: "List the 3 learning objectives of Unit 2.",
        answers: [
          "Explain the basic concepts and applications of the Internet of Things (IoT).",
          "Identify the features, components, and functions of the ESP32 microcontroller.",
          "Demonstrate basic ESP32 programming and connect simple electronic components to create an IoT-based system."
        ],
        minRequired: 3,
        explanation: "These are the three learning objectives presented in Unit 2."
      }

    ]
  },

  {
    id: "unit1",
    title: "Distributed Database System",
    subtitle: "Module 3, Unit 1",
    emoji: "🌐",
    color: "#0A84FF",
    week: "Week 10",
    description: "Test your knowledge on distributed databases, replication, fragmentation, concurrency, and query processing.",
    questions: [
      // --- MULTIPLE CHOICE ---
      {
        type: "multiple_choice",
        question: "What is a Distributed Database System?",
        options: [
          "A database stored in a single server with multiple backups",
          "Data stored across multiple physical locations connected via a network",
          "A cloud-only database management system",
          "A database that distributes queries across multiple users"
        ],
        answer: 1,
        explanation: "A Distributed Database System stores data across multiple physical locations connected via a network, providing transparent data access and management."
      },
      {
        type: "multiple_choice",
        question: "Which of the following is a key characteristic of a Distributed Database System?",
        options: [
          "Data is stored in a single physical location",
          "It provides transparent data access and management",
          "It requires no network connection between sites",
          "It only supports one DBMS type"
        ],
        answer: 1,
        explanation: "A distributed database provides transparent data access and management even though data is spread across multiple physical locations connected via a network."
      },
      {
        type: "multiple_choice",
        question: "Which type of distributed database uses the SAME DBMS at all sites?",
        options: ["Heterogeneous", "Federated", "Homogeneous", "Unfederated"],
        answer: 2,
        explanation: "Homogeneous distributed databases use the same DBMS software at all sites, while heterogeneous ones use different DBMS at different sites."
      },
      {
        type: "multiple_choice",
        question: "Which type of distributed database allows DIFFERENT DBMS at different sites?",
        options: ["Homogeneous", "Autonomous", "Non-autonomous", "Heterogeneous"],
        answer: 3,
        explanation: "Heterogeneous distributed databases allow different DBMS software to be used at different physical sites."
      },
      {
        type: "multiple_choice",
        question: "Under Homogeneous distributed databases, which two sub-types exist?",
        options: [
          "Federated and Unfederated",
          "Autonomous and Non-autonomous",
          "Temporal and Spatial",
          "Replication and Fragmentation"
        ],
        answer: 1,
        explanation: "Homogeneous distributed databases are subdivided into Autonomous and Non-autonomous types."
      },
      {
        type: "multiple_choice",
        question: "Under Heterogeneous distributed databases, which two sub-types exist?",
        options: [
          "Autonomous and Non-autonomous",
          "Replication and Fragmentation",
          "Federated and Unfederated",
          "Temporal and Spatial"
        ],
        answer: 2,
        explanation: "Heterogeneous distributed databases are subdivided into Federated and Unfederated types."
      },
      {
        type: "multiple_choice",
        question: "What are the TWO main ways data can be kept in a distributed database?",
        options: [
          "Backup and Recovery",
          "Replication and Fragmentation",
          "Indexing and Partitioning",
          "Encryption and Compression"
        ],
        answer: 1,
        explanation: "Data in distributed databases can be kept via Replication (copying data to multiple sites) and Fragmentation (splitting data across sites)."
      },
      {
        type: "multiple_choice",
        question: "What is Data Replication in a distributed database?",
        options: [
          "Splitting a relation into pieces stored at different sites",
          "Encrypting data before transmitting to remote sites",
          "Storing copies of data at multiple sites",
          "Compressing data to reduce storage costs"
        ],
        answer: 2,
        explanation: "Data Replication is the process of storing copies of data at multiple sites to improve availability and performance."
      },
      {
        type: "multiple_choice",
        question: "What is Data Fragmentation in a distributed database?",
        options: [
          "Storing the same copy of data at every site",
          "Splitting a relation/table into pieces stored at different sites",
          "Encrypting data across all sites",
          "Merging multiple databases into one"
        ],
        answer: 1,
        explanation: "Fragmentation involves splitting a relation into fragments stored at different sites, either horizontally or vertically."
      },
      {
        type: "multiple_choice",
        question: "In how many ways can a relation be fragmented in a distributed database?",
        options: ["One", "Two", "Three", "Four"],
        answer: 1,
        explanation: "Relationships can be fragmented in two ways: horizontally (splitting rows) and vertically (splitting columns)."
      },
      {
        type: "multiple_choice",
        question: "Which company uses a distributed database to manage data across over 100 countries?",
        options: ["Netflix", "PayPal", "McDonald's", "Google Cloud"],
        answer: 2,
        explanation: "McDonald's operates in over 100 countries, managing vast amounts of transactional and operational data across various locations using distributed databases."
      },
      {
        type: "multiple_choice",
        question: "Which company is described as using distributed databases for real-time transaction processing and data synchronization?",
        options: ["McDonald's", "Coca-Cola", "PayPal", "Amazon Web Services"],
        answer: 2,
        explanation: "PayPal is a global payment platform that requires real-time transaction processing and data synchronization across multiple systems."
      },
      {
        type: "multiple_choice",
        question: "Which streaming service uses distributed databases to ensure smooth viewing experiences worldwide?",
        options: ["McDonald's", "Netflix", "Adobe Photoshop", "Oracle Forms"],
        answer: 1,
        explanation: "Netflix uses distributed databases to handle massive real-time data storage and retrieval, ensuring smooth viewing experiences worldwide."
      },
      {
        type: "multiple_choice",
        question: "Which cloud provider offers distributed databases for data storage and management across multiple global regions?",
        options: ["PayPal", "Netflix", "Google Cloud", "McDonald's"],
        answer: 2,
        explanation: "Google Cloud offers cloud services including distributed databases for data storage and management across multiple regions globally."
      },
      {
        type: "multiple_choice",
        question: "Which company provides cloud-based infrastructure including distributed databases for businesses to store and process data at scale?",
        options: ["Coca-Cola", "Netflix", "PayPal", "Amazon Web Services (AWS)"],
        answer: 3,
        explanation: "Amazon Web Services (AWS) provides cloud-based infrastructure and services, including distributed databases for businesses to store and process data at scale."
      },
      // --- TRUE/FALSE ---
      {
        type: "true_false",
        question: "A Distributed Database System stores data across multiple physical locations connected via a network.",
        answer: true,
        explanation: "True. A Distributed Database System stores data across multiple physical locations connected via a network, providing transparent data access and management."
      },
      {
        type: "true_false",
        question: "A Homogeneous distributed database allows different DBMS software at different sites.",
        answer: false,
        explanation: "False. A Homogeneous distributed database uses the SAME DBMS at all sites. It is the Heterogeneous type that allows different DBMS at different sites."
      },
      {
        type: "true_false",
        question: "Data Replication involves splitting a relation into pieces stored at different sites.",
        answer: false,
        explanation: "False. Data Replication is the process of storing COPIES of data at multiple sites. Splitting a relation into pieces at different sites is called Fragmentation."
      },
      {
        type: "true_false",
        question: "Fragmentation in a distributed database can be done in two ways: horizontally and vertically.",
        answer: true,
        explanation: "True. Relationships can be fragmented in two ways: horizontally (splitting rows) and vertically (splitting columns)."
      },
      {
        type: "true_false",
        question: "PayPal uses distributed databases to handle real-time transaction processing and data synchronization globally.",
        answer: true,
        explanation: "True. PayPal is a global payment platform that requires real-time transaction processing and data synchronization across multiple systems."
      },
      {
        type: "true_false",
        question: "Federated and Unfederated are sub-types of Homogeneous distributed databases.",
        answer: false,
        explanation: "False. Federated and Unfederated are sub-types of HETEROGENEOUS distributed databases. Homogeneous is subdivided into Autonomous and Non-autonomous."
      },
      // --- IDENTIFICATION ---
      {
        answer: "Homogeneous",
        acceptedAnswers: ["homogeneous", "homogeneous distributed database"],
        explanation: "Homogeneous distributed databases use the same DBMS software at all physical sites."
      },
      {
        type: "identification",
        question: "This type of distributed database allows different DBMS at different sites.",
        answer: "Heterogeneous",
        acceptedAnswers: ["heterogeneous", "heterogeneous distributed database"],
        explanation: "Heterogeneous distributed databases allow different DBMS software to be used at different physical locations."
      },
      {
        type: "identification",
        question: "Name the process of storing copies of data at multiple sites in a distributed database.",
        answer: "Replication",
        acceptedAnswers: ["replication", "data replication"],
        explanation: "Replication is the process of storing copies of data at multiple sites to improve availability and performance."
      },
      {
        type: "identification",
        question: "Name the process of splitting a relation into pieces stored at different sites.",
        answer: "Fragmentation",
        acceptedAnswers: ["fragmentation", "data fragmentation"],
        explanation: "Fragmentation involves splitting a relation into fragments stored at different sites, either horizontally or vertically."
      },
      {
        type: "identification",
        question: "This multinational corporation with a widespread distribution network uses distributed databases to handle data from different regions.",
        answer: "Coca-Cola",
        acceptedAnswers: ["coca-cola", "coca cola", "cocacola"],
        explanation: "Coca-Cola is a multinational corporation with a widespread distribution network, requiring a distributed database to handle data from different regions."
      },
      // --- ENUMERATION ---
      {
        type: "enumeration",
        question: "List all 6 types of distributed databases mentioned in the lecture.",
        answers: ["Homogeneous", "Autonomous", "Non-autonomous", "Heterogeneous", "Federated", "Unfederated"],
        minRequired: 6,
        explanation: "The 6 types: Homogeneous (subdivided into Autonomous and Non-autonomous) and Heterogeneous (subdivided into Federated and Unfederated)."
      },
      {
        type: "enumeration",
        question: "Name all 6 real-world companies from the lecture that use distributed databases.",
        answers: ["McDonald's", "Coca-Cola", "Amazon Web Services", "AWS", "Google Cloud", "PayPal", "Netflix"],
        minRequired: 6,
        explanation: "The 6 companies: McDonald's, Coca-Cola, Amazon Web Services (AWS), Google Cloud, PayPal, and Netflix."
      },
      {
        type: "enumeration",
        question: "List the 3 objectives of the Distributed Database System lecture.",
        answers: [
          "Understand distributed database concepts",
          "Explore types of distributed databases",
          "Learn about advantages and challenges of distributed systems"
        ],
        minRequired: 3,
        explanation: "Objectives: (1) Understand distributed database concepts, (2) Explore types of distributed databases, (3) Learn about advantages and challenges."
      }
    ]
  },
  {
    id: "unit2",
    title: "Enhanced Database Models",
    subtitle: "Module 3, Unit 2",
    emoji: "🕸️",
    color: "#FF9F0A",
    week: "Week 11",
    description: "Explore network database models, temporal, spatial, multimedia databases, their advantages, and disadvantages.",
    questions: [
      // --- MULTIPLE CHOICE ---
      {
        type: "multiple_choice",
        question: "How does the Network Database Model organize data?",
        options: [
          "Using tables with rows and columns",
          "Using a graph structure with nodes and edges",
          "Using XML documents",
          "Using key-value pairs"
        ],
        answer: 1,
        explanation: "The Network Database Model organizes data using a graph structure where nodes represent records and edges represent relationships."
      },
      {
        type: "multiple_choice",
        question: "In the Network Database Model, what do NODES represent?",
        options: ["Relationships between records", "Records", "Attributes only", "Indexes"],
        answer: 1,
        explanation: "In the Network Database Model, nodes represent records while edges represent the relationships between those records."
      },
      {
        type: "multiple_choice",
        question: "In the Network Database Model, what do EDGES represent?",
        options: ["Records", "Attributes", "Relationships", "Indexes"],
        answer: 2,
        explanation: "Edges in the Network Database Model represent the relationships between records (nodes)."
      },
      {
        type: "multiple_choice",
        question: "What type of relationships does the Network Database Model support?",
        options: [
          "Only one-to-one relationships",
          "Only one-to-many relationships",
          "1:1, 1:M, and M:N relationships",
          "Only hierarchical relationships"
        ],
        answer: 2,
        explanation: "The Network Database Model supports 1:1 (one-to-one), 1:M (many-to-one), and M:N (many-to-many) relationships among entities."
      },
      {
        type: "multiple_choice",
        question: "In the Student-Department-Library example, the Student entity has TWO parents. What does this demonstrate?",
        options: [
          "An error in the database design",
          "A one-to-one relationship",
          "The network model's ability to support multiple parent-child relationships",
          "A hierarchical structure with a single parent"
        ],
        answer: 2,
        explanation: "This demonstrates the network model's ability to support multiple parent-child relationships — Student belongs to both CSE Department and Library as parents."
      },
      {
        type: "multiple_choice",
        question: "In the network model structure, who is considered the prime owner?",
        options: ["FIVE", "TWO", "THREE", "ONE"],
        answer: 3,
        explanation: "In the network model structure described in the lecture, ONE is the prime owner of the model; the rest of the members are dependent on ONE."
      },
      {
        type: "multiple_choice",
        question: "In the network model, how many owners does member FIVE have?",
        options: ["None", "One", "Two", "Three"],
        answer: 2,
        explanation: "Member FIVE has two owners: TWO and THREE, demonstrating the network model's many-to-many relationship capability."
      },
      {
        type: "multiple_choice",
        question: "What helps avoid data redundancy problems in the Network Database Model?",
        options: [
          "Single path to each record",
          "Multiple paths to the same record",
          "Pointer-free navigation",
          "Automated query optimization"
        ],
        answer: 1,
        explanation: "In the Network Database Model, multiple paths to the same record help avoid data redundancy problems."
      },
      {
        type: "multiple_choice",
        question: "Which is a DISADVANTAGE of the Network Database Model?",
        options: [
          "It doesn't support many-to-many relationships",
          "There is no scope for any automated query optimization",
          "It cannot avoid data redundancy",
          "Data retrieval is always very slow"
        ],
        answer: 1,
        explanation: "There is no scope for any automated query optimization in the network database model, and navigation requires using pointers."
      },
      {
        type: "multiple_choice",
        question: "Why is addition, update, and deletion difficult in the Network Database Model?",
        options: [
          "Because it uses XML format",
          "Because of the complex inter-related structure",
          "Because there is only one path to each record",
          "Because it only supports one-to-one relationships"
        ],
        answer: 1,
        explanation: "Due to the complex inter-related structure, addition, update, and deletion operations are very difficult in the Network Database Model."
      },
      {
        type: "multiple_choice",
        question: "What navigation mechanism is used in the Network Database Model?",
        options: ["SQL queries", "XPath navigation", "Pointers", "Indexes only"],
        answer: 2,
        explanation: "Pointers are used for navigation in the Network Database Model, which is one of its operational constraints."
      },
      {
        type: "multiple_choice",
        question: "Which enhanced relational database model stores time-varying data and maintains historical records?",
        options: ["Multimedia Database", "Network Database", "Spatial Database", "Temporal Database"],
        answer: 3,
        explanation: "Temporal Databases store time-varying data and maintain historical records, allowing queries about past states."
      },
      {
        type: "multiple_choice",
        question: "Which enhanced database model is best suited for GPS and location-based applications?",
        options: ["Temporal Database", "Network Database", "Spatial Database", "Multimedia Database"],
        answer: 2,
        explanation: "Spatial Databases are designed to store and query data related to objects defined in a geometric space, making them ideal for GPS and GIS applications."
      },
      {
        type: "multiple_choice",
        question: "Which enhanced database model is designed to handle images, audio, and video data?",
        options: ["Temporal Database", "Spatial Database", "Multimedia Database", "Network Database"],
        answer: 2,
        explanation: "Multimedia Databases are designed to store, manage, and retrieve complex data types like images, audio, video, and animations."
      },
      {
        type: "multiple_choice",
        question: "What is a key advantage of the Network Database Model regarding parent-child relationships?",
        options: [
          "Changes in child are never reflected in parents",
          "If a parent entity changes, it is reflected in the children's entity as well",
          "Parent entities cannot have multiple children",
          "Children must be manually updated every time"
        ],
        answer: 1,
        explanation: "Due to the parent-child relationship, if there is a change in the parent entity, it is reflected in the children's entity as well, saving update time."
      },
      {
        type: "multiple_choice",
        question: "Why is managing the Network Database Model considered difficult?",
        options: [
          "Because it only uses one type of relationship",
          "Because it is very complicated due to several inter-related entities",
          "Because it does not allow multiple paths",
          "Because it cannot store complex data"
        ],
        answer: 1,
        explanation: "The network database model is very complicated due to several entities inter-related with each other, making management quite difficult."
      },
      // --- TRUE/FALSE ---
      {
        type: "true_false",
        question: "The Network Database Model organizes data using a graph structure where nodes represent records and edges represent relationships.",
        answer: true,
        explanation: "True. The Network Database Model uses a graph structure where nodes represent records and edges represent the relationships between those records."
      },
      {
        type: "true_false",
        question: "The Network Database Model only supports one-to-one (1:1) relationships.",
        answer: false,
        explanation: "False. The Network Database Model supports 1:1, 1:M (many-to-one), and M:N (many-to-many) relationships among entities."
      },
      {
        type: "true_false",
        question: "In the Student-Department-Library example, the Student entity has ONE parent.",
        answer: false,
        explanation: "False. In the example, the Student entity has TWO parents: CSE Department and Library. This demonstrates the network model's ability to support multiple parent-child relationships."
      },
      {
        type: "true_false",
        question: "The Network Database Model has no scope for automated query optimization.",
        answer: true,
        explanation: "True. There is no scope for any automated query optimization in the Network Database Model, and navigation requires using pointers."
      },
      {
        type: "true_false",
        question: "Temporal Databases store data related to geometric space and are ideal for GPS applications.",
        answer: false,
        explanation: "False. Temporal Databases store time-varying data and historical records. It is SPATIAL Databases that store geometric/location data and are ideal for GPS applications."
      },
      {
        type: "true_false",
        question: "Multimedia Databases are designed to store, manage, and retrieve complex data types like images, audio, and video.",
        answer: true,
        explanation: "True. Multimedia Databases are specifically designed to handle complex data types including images, audio, video, and animations."
      },
      {
        type: "true_false",
        question: "Multiple paths to the same record in the Network Database Model help avoid data redundancy problems.",
        answer: true,
        explanation: "True. The modeled hierarchical structure with multiple paths to the same record helps in avoiding data redundancy problems."
      },
      // --- IDENTIFICATION ---
      {
        type: "identification",
        question: "This enhanced relational model stores time-varying data and tracks historical versions.",
        answer: "Temporal Database",
        acceptedAnswers: ["temporal database", "temporal databases", "temporal"],
        explanation: "Temporal Databases store time-varying data and maintain historical records, allowing queries about past states."
      },
      {
        type: "identification",
        question: "This database type stores and queries data related to geometric space, ideal for maps and GPS.",
        answer: "Spatial Database",
        acceptedAnswers: ["spatial database", "spatial databases", "spatial"],
        explanation: "Spatial Databases store and query data related to objects defined in a geometric space, making them ideal for GPS and GIS applications."
      },
      {
        type: "identification",
        question: "This database type is designed to handle images, audio, and video data.",
        answer: "Multimedia Database",
        acceptedAnswers: ["multimedia database", "multimedia databases", "multimedia"],
        explanation: "Multimedia Databases are designed to store, manage, and retrieve complex data types like images, audio, video, and animations."
      },
      {
        type: "identification",
        question: "In the Network Database Model, what do nodes represent?",
        answer: "Records",
        acceptedAnswers: ["records", "record"],
        explanation: "In the Network Database Model, nodes represent records while edges represent relationships."
      },
      {
        type: "identification",
        question: "In the student-department example, the Student entity's two parents are CSE Department and this.",
        answer: "Library",
        acceptedAnswers: ["library"],
        explanation: "In the example, the Student entity has two parents: CSE Department and Library. Both have the same parent: College."
      },
      // --- ENUMERATION ---
      {
        type: "enumeration",
        question: "List all 6 advantages of the Network Database Model from the lecture.",
        answers: [
          "Simple and easy-to-construct hierarchical model",
          "Supports 1:1, 1:M, M:N relationships",
          "Multiple paths to the same record",
          "Data integrity",
          "Faster data retrieval",
          "Changes in parent reflected in children"
        ],
        minRequired: 6,
        explanation: "6 Advantages: simple construction, supports multiple relationship types, multiple paths reduce redundancy, data integrity, fast retrieval, and parent-child cascading."
      },
      {
        type: "enumeration",
        question: "List all 5 disadvantages of the Network Database Model from the lecture.",
        answers: [
          "Very complicated due to several inter-related entities",
          "Understanding whole structure needed when adding new entities",
          "Addition, update, and deletion are very difficult",
          "No scope for automated query optimization",
          "Need to use pointers for navigation"
        ],
        minRequired: 5,
        explanation: "5 Disadvantages: complexity, need to understand full structure for new entities, difficult CRUD operations, no automated query optimization, and pointer-based navigation."
      },
      {
        type: "enumeration",
        question: "Name the 3 enhanced relational database models discussed in the lecture (besides the network model).",
        answers: ["Temporal Database", "Spatial Database", "Multimedia Database"],
        minRequired: 3,
        explanation: "The three enhanced relational models are: Temporal Databases, Spatial Databases, and Multimedia Databases."
      },
      {
        type: "enumeration",
        question: "List the 3 objectives of the Enhanced Database Models lecture.",
        answers: [
          "Understand the concepts of enhanced database models",
          "Learn about network data model",
          "Explore the advantages and applications of enhanced models"
        ],
        minRequired: 3,
        explanation: "Objectives: (1) Understand enhanced database model concepts, (2) Learn about the network data model, (3) Explore advantages and applications."
      }
    ]
  },
  {
    id: "unit3",
    title: "Object-Oriented Database",
    subtitle: "Module 3, Unit 3",
    emoji: "🧩",
    color: "#30D158",
    week: "Week 12",
    description: "Learn about OODBs, encapsulation, inheritance, polymorphism, OQL, ORM, and real-world applications.",
    questions: [
      // --- MULTIPLE CHOICE ---
      {
        type: "multiple_choice",
        question: "What do Object-Oriented Databases store instead of relational data?",
        options: ["Tables and rows", "XML documents", "Objects", "Key-value pairs"],
        answer: 2,
        explanation: "Object-Oriented Databases store objects — entities that contain both data and associated methods."
      },
      {
        type: "multiple_choice",
        question: "What are the THREE core OOP concepts supported by Object-Oriented Databases?",
        options: [
          "Indexing, Partitioning, and Replication",
          "Encapsulation, Inheritance, and Polymorphism",
          "ACID, BASE, and CAP",
          "Select, Project, and Join"
        ],
        answer: 1,
        explanation: "Object-Oriented Databases support Encapsulation (combining data and methods), Inheritance (hierarchical reuse), and Polymorphism (multiple forms)."
      },
      {
        type: "multiple_choice",
        question: "What is an 'Object' in the context of Object-Oriented Databases?",
        options: [
          "A blueprint for creating records",
          "A real-world entity represented in the database",
          "A method for querying data",
          "A type of index structure"
        ],
        answer: 1,
        explanation: "In OODBs, Objects are real-world entities represented in the database containing both data and associated methods."
      },
      {
        type: "multiple_choice",
        question: "What is a 'Class' in the context of Object-Oriented Databases?",
        options: [
          "A real-world entity stored in the database",
          "A blueprint for creating objects",
          "A method for querying data",
          "A type of index structure"
        ],
        answer: 1,
        explanation: "A Class is a blueprint or template for creating objects with defined attributes and methods."
      },
      {
        type: "multiple_choice",
        question: "What OOP concept enables reusability and hierarchical relationships in OODBs?",
        options: ["Encapsulation", "Polymorphism", "Inheritance", "Object Identity"],
        answer: 2,
        explanation: "Inheritance enables reusability by allowing classes to derive properties and methods from parent classes, forming hierarchical relationships."
      },
      {
        type: "multiple_choice",
        question: "What does Encapsulation mean in Object-Oriented Databases?",
        options: [
          "Each object has a unique identifier",
          "Combines data and methods into a single unit",
          "Allows objects to take multiple forms",
          "Enables hierarchical reuse"
        ],
        answer: 1,
        explanation: "Encapsulation combines data and methods into a single unit (object), hiding internal implementation details."
      },
      {
        type: "multiple_choice",
        question: "What does Polymorphism allow in Object-Oriented Databases?",
        options: [
          "Objects to have a unique identifier",
          "Data and methods to be combined",
          "Objects to take multiple forms",
          "Classes to inherit from each other"
        ],
        answer: 2,
        explanation: "Polymorphism allows objects to take multiple forms, supporting flexible and reusable code and data structures."
      },
      {
        type: "multiple_choice",
        question: "What is Object Identity in OODBs?",
        options: [
          "Combining data and methods into a single unit",
          "Each object has a unique identifier",
          "Allowing objects to take multiple forms",
          "Enabling hierarchical class relationships"
        ],
        answer: 1,
        explanation: "Object Identity ensures each object has a unique identifier (OID), independent of its attribute values."
      },
      {
        type: "multiple_choice",
        question: "Which query language is used in Object-Oriented Databases?",
        options: ["SQL", "XQuery", "OQL (Object Query Language)", "SPARQL"],
        answer: 2,
        explanation: "OQL (Object Query Language) is used to query Object-Oriented Databases, enabling complex queries on object attributes and methods."
      },
      {
        type: "multiple_choice",
        question: "Which of the following is a correct example of an OQL query from the lecture?",
        options: [
          "SELECT * FROM Order WHERE amount > 1000",
          "SELECT o.name FROM Order o WHERE o.amount > 1000;",
          "GET o.name FROM Order o WHERE o.amount > 1000",
          "FIND o.name IN Order WHERE o.amount > 1000"
        ],
        answer: 1,
        explanation: "The lecture example is: SELECT o.name FROM Order o WHERE o.amount > 1000; — this is an OQL query on object attributes."
      },
      {
        type: "multiple_choice",
        question: "What does ORM (Object-Relational Mapping) do?",
        options: [
          "Converts XML to JSON",
          "Bridges relational databases and object-oriented programming",
          "Creates new object-oriented schemas",
          "Encrypts database objects"
        ],
        answer: 1,
        explanation: "ORM bridges the gap between relational databases and object-oriented programming by mapping objects to database tables."
      },
      {
        type: "multiple_choice",
        question: "How does ORM map objects to databases?",
        options: [
          "Maps objects to XML files and methods to tags",
          "Maps objects to database tables and attributes to columns",
          "Maps objects to query strings",
          "Maps objects to stored procedures only"
        ],
        answer: 1,
        explanation: "ORM maps objects to database tables and attributes to columns, bridging the gap between object-oriented code and relational databases."
      },
      {
        type: "multiple_choice",
        question: "Which of the following is a popular ORM framework mentioned in the lecture?",
        options: ["Apache Kafka", "Hibernate", "Redis", "Elasticsearch"],
        answer: 1,
        explanation: "Hibernate is one of the popular ORM frameworks mentioned in the lecture, along with Django ORM and Entity Framework."
      },
      {
        type: "multiple_choice",
        question: "Which of the following correctly lists all three ORM frameworks from the lecture?",
        options: [
          "Hibernate, Spring Boot, and Laravel",
          "Django ORM, Rails, and Hibernate",
          "Hibernate, Django ORM, and Entity Framework",
          "Entity Framework, MyBatis, and Spring"
        ],
        answer: 2,
        explanation: "The three ORM frameworks mentioned in the lecture are: Hibernate, Django ORM, and Entity Framework."
      },
      {
        type: "multiple_choice",
        question: "Which of the following is an ADVANTAGE of Object-Oriented Databases?",
        options: [
          "Simple standardization compared to relational databases",
          "Efficient for multimedia and scientific data",
          "No specialized programming skills required",
          "Lower complexity in design and implementation"
        ],
        answer: 1,
        explanation: "OODBs are efficient for multimedia and scientific data, and offer seamless integration with object-oriented applications."
      },
      {
        type: "multiple_choice",
        question: "Which is a DISADVANTAGE of Object-Oriented Databases?",
        options: [
          "Cannot support complex data relationships",
          "Incompatible with all object-oriented languages",
          "Limited standardization compared to relational databases",
          "Does not support inheritance"
        ],
        answer: 2,
        explanation: "OODBs have limited standardization compared to relational databases, which is one of their key disadvantages."
      },
      {
        type: "multiple_choice",
        question: "What type of data relationships does OODB Object-Oriented Data Modeling support?",
        options: [
          "Only flat table relationships",
          "Associations, aggregations, and hierarchies",
          "Only XML-based relationships",
          "Key-value pair relationships only"
        ],
        answer: 1,
        explanation: "Object-Oriented Data Modeling defines relationships using associations, aggregations, and hierarchies, and supports advanced data types like arrays and lists."
      },
      {
        type: "multiple_choice",
        question: "Which of the following is a real-world application of Object-Oriented Databases from the lecture?",
        options: [
          "Simple spreadsheet management",
          "Computer-Aided Design (CAD) systems",
          "Basic email management",
          "Web browsing history"
        ],
        answer: 1,
        explanation: "Computer-Aided Design (CAD) systems are one of the real-world applications of Object-Oriented Databases mentioned in the lecture."
      },
      {
        type: "multiple_choice",
        question: "How does Object-Oriented Database compare to Relational Databases?",
        options: [
          "Relational DBs are object-based and OODBs are table-based",
          "Relational DBs are table-based and widely standardized; OODBs are object-based and flexible",
          "Both are equally standardized",
          "OODBs are more suitable for simple flat data than relational DBs"
        ],
        answer: 1,
        explanation: "Relational Databases are table-based and widely standardized; Object-Oriented Databases are object-based and flexible for complex data."
      },
      {
        type: "multiple_choice",
        question: "Which of the following is a challenge in Object-Oriented Databases?",
        options: [
          "Too simple to use for modern applications",
          "Performance overhead for object storage and retrieval",
          "Cannot support arrays and lists",
          "Does not support polymorphism"
        ],
        answer: 1,
        explanation: "OODBs face performance overhead for object storage and retrieval, which is one of their major challenges."
      },
      // --- TRUE/FALSE ---
      {
        type: "true_false",
        question: "Object-Oriented Databases store tables and rows just like relational databases.",
        answer: false,
        explanation: "False. Object-Oriented Databases store OBJECTS — entities that contain both data and associated methods — not tables and rows."
      },
      {
        type: "true_false",
        question: "Encapsulation in OODBs combines data and methods into a single unit.",
        answer: true,
        explanation: "True. Encapsulation combines data and methods into a single unit (object), hiding internal implementation details."
      },
      {
        type: "true_false",
        question: "Object Identity ensures each object has a unique identifier (OID) independent of its attribute values.",
        answer: true,
        explanation: "True. Object Identity ensures each object has a unique identifier (OID), independent of its attribute values."
      },
      {
        type: "true_false",
        question: "OQL (Object Query Language) is used to query Relational Databases.",
        answer: false,
        explanation: "False. OQL is used to query OBJECT-ORIENTED Databases, not relational databases. Relational databases use SQL."
      },
      {
        type: "true_false",
        question: "Hibernate, Django ORM, and Entity Framework are popular ORM frameworks.",
        answer: true,
        explanation: "True. The lecture lists Hibernate, Django ORM, and Entity Framework as the three popular ORM frameworks."
      },
      {
        type: "true_false",
        question: "Object-Oriented Databases are more standardized than Relational Databases.",
        answer: false,
        explanation: "False. Object-Oriented Databases have LIMITED standardization compared to Relational Databases, which are widely standardized."
      },
      {
        type: "true_false",
        question: "ORM maps objects to database tables and attributes to columns.",
        answer: true,
        explanation: "True. Object-Relational Mapping (ORM) maps objects to database tables and attributes to columns, bridging the gap between OOP and relational databases."
      },
      // --- IDENTIFICATION ---
      {
        type: "identification",
        question: "This OOP concept combines data and methods into a single unit in an OODB.",
        answer: "Encapsulation",
        acceptedAnswers: ["encapsulation"],
        explanation: "Encapsulation combines data and methods into a single unit (object), hiding internal implementation details."
      },
      {
        type: "identification",
        question: "This OODB feature gives each object a unique identifier (OID).",
        answer: "Object Identity",
        acceptedAnswers: ["object identity", "object identifier", "oid"],
        explanation: "Object Identity ensures each object has a unique identifier (OID), independent of its attribute values."
      },
      {
        type: "identification",
        question: "This OOP principle enables reusability and hierarchical relationships in OODBs.",
        answer: "Inheritance",
        acceptedAnswers: ["inheritance"],
        explanation: "Inheritance enables reusability by allowing classes to derive properties and methods from parent classes."
      },
      {
        type: "identification",
        question: "This OOP principle allows objects to take multiple forms in OODBs.",
        answer: "Polymorphism",
        acceptedAnswers: ["polymorphism"],
        explanation: "Polymorphism allows objects to take multiple forms, supporting flexible and reusable structures."
      },
      {
        type: "identification",
        question: "This is the query language used to query Object-Oriented Databases.",
        answer: "OQL",
        acceptedAnswers: ["oql", "object query language"],
        explanation: "OQL (Object Query Language) is used to query Object-Oriented Databases."
      },
      {
        type: "identification",
        question: "This technology bridges the gap between relational databases and object-oriented programming.",
        answer: "ORM",
        acceptedAnswers: ["orm", "object-relational mapping", "object relational mapping"],
        explanation: "ORM (Object-Relational Mapping) bridges the gap between relational databases and object-oriented programming."
      },
      // --- ENUMERATION ---
      {
        type: "enumeration",
        question: "List the 3 key concepts (objects, classes, inheritance) of Object-Oriented Databases from the lecture.",
        answers: ["Objects", "Classes", "Inheritance"],
        minRequired: 3,
        explanation: "The 3 key concepts: Objects (real-world entities), Classes (blueprints for creating objects), and Inheritance (enables reusability)."
      },
      {
        type: "enumeration",
        question: "List the 3 features of Object-Oriented Databases from Slide 8 of the lecture.",
        answers: ["Object Identity", "Encapsulation", "Polymorphism"],
        minRequired: 3,
        explanation: "The 3 features: Object Identity (unique identifier), Encapsulation (combines data and methods), Polymorphism (multiple forms)."
      },
      {
        type: "enumeration",
        question: "List 3 advantages of Object-Oriented Databases from the lecture.",
        answers: [
          "Seamless integration with object-oriented applications",
          "Supports complex data and relationships",
          "Efficient for multimedia and scientific data"
        ],
        minRequired: 3,
        explanation: "3 Advantages: seamless OOP integration, supports complex data/relationships, and efficient for multimedia and scientific data."
      },
      {
        type: "enumeration",
        question: "List all 3 disadvantages of Object-Oriented Databases from the lecture.",
        answers: [
          "Complexity in design and implementation",
          "Limited standardization compared to relational databases",
          "Requires specialized skills in object-oriented programming"
        ],
        minRequired: 3,
        explanation: "3 Disadvantages: complexity in design, limited standardization, and requires specialized OOP skills."
      },
      {
        type: "enumeration",
        question: "List all 3 challenges in Object-Oriented Databases from Slide 14.",
        answers: [
          "Higher learning curve for developers",
          "Performance overhead for object storage and retrieval",
          "Compatibility issues with existing relational systems"
        ],
        minRequired: 3,
        explanation: "3 Challenges: higher learning curve, performance overhead, and compatibility issues with relational systems."
      },
      {
        type: "enumeration",
        question: "Name all 3 real-world applications of Object-Oriented Databases from the lecture.",
        answers: [
          "Computer-Aided Design (CAD) systems",
          "CAD",
          "Geographic Information Systems (GIS)",
          "GIS",
          "Multimedia and scientific data management"
        ],
        minRequired: 3,
        explanation: "3 Applications: Computer-Aided Design (CAD), Geographic Information Systems (GIS), and Multimedia and scientific data management."
      },
      {
        type: "enumeration",
        question: "Name all 3 ORM frameworks mentioned in the lecture.",
        answers: ["Hibernate", "Django ORM", "Entity Framework"],
        minRequired: 3,
        explanation: "The 3 ORM frameworks: Hibernate, Django ORM, and Entity Framework."
      }
    ]
  },
  {
    id: "unit4",
    title: "Database and XML",
    subtitle: "Module 3, Unit 4",
    emoji: "📄",
    color: "#0A84FF",
    week: "Week 13",
    description: "Understand XML structure, XPath, XQuery, SQL/XML, XML integration with databases, and JSON comparison.",
    questions: [
      // --- MULTIPLE CHOICE ---
      {
        type: "multiple_choice",
        question: "What does XML stand for?",
        options: [
          "Extensible Markup Language",
          "External Markup Language",
          "Extended Module Language",
          "Extensible Model Language"
        ],
        answer: 0,
        explanation: "XML stands for eXtensible Markup Language — a standard for storing and transporting data."
      },
      {
        type: "multiple_choice",
        question: "What is the primary purpose of XML?",
        options: [
          "Designing web page layouts",
          "Storing and transporting data",
          "Running database queries",
          "Encrypting files"
        ],
        answer: 1,
        explanation: "XML (eXtensible Markup Language) is a standard for storing and transporting data, widely used for data exchange between systems and databases."
      },
      {
        type: "multiple_choice",
        question: "Which of the following is a key feature of XML?",
        options: [
          "Platform-dependent and language-specific",
          "Platform-independent and language-neutral",
          "Supports only flat data structures",
          "Cannot use user-defined tags"
        ],
        answer: 1,
        explanation: "XML is platform-independent and language-neutral, supports nested elements and attributes, and is extensible with user-defined tags."
      },
      {
        type: "multiple_choice",
        question: "What does XML structure consist of?",
        options: [
          "Tables, rows, and columns",
          "Elements, attributes, and text",
          "Nodes, edges, and paths",
          "Objects, classes, and methods"
        ],
        answer: 1,
        explanation: "XML structure consists of elements, attributes, and text. Elements are defined using start and end tags, and attributes provide additional information."
      },
      {
        type: "multiple_choice",
        question: "What is the role of XML Schema?",
        options: [
          "It transforms XML to HTML format",
          "It defines the structure and rules for XML documents and validates them",
          "It queries XML documents using paths",
          "It compresses XML for faster transmission"
        ],
        answer: 1,
        explanation: "XML Schema defines the structure and rules for XML documents, ensures data consistency and integrity, and validates XML documents against the schema."
      },
      {
        type: "multiple_choice",
        question: "Which of the following describes how XML can be stored in databases?",
        options: [
          "Only as a flat text file",
          "Only in native XML databases",
          "As a data type in relational DBs, native XML databases, or hybrid approaches",
          "Only in NoSQL databases"
        ],
        answer: 2,
        explanation: "XML can be stored as a data type in relational databases, in native XML databases for optimized storage, or using hybrid approaches combining both."
      },
      {
        type: "multiple_choice",
        question: "What is XPath used for?",
        options: [
          "Creating XML schemas",
          "Locating and retrieving parts of an XML document using paths",
          "Transforming XML to HTML",
          "Encrypting XML data"
        ],
        answer: 1,
        explanation: "XPath navigates XML documents using paths and supports predicates for filtering data. Example: /bookstore/book[price>30]"
      },
      {
        type: "multiple_choice",
        question: "Which of the following is the correct XPath example from the lecture?",
        options: [
          "/book/bookstore[price>30]",
          "/bookstore/book[price>30]",
          "bookstore/book/price > 30",
          "SELECT book FROM bookstore WHERE price > 30"
        ],
        answer: 1,
        explanation: "The XPath example given in the lecture is: /bookstore/book[price>30] — navigating to books in a bookstore with price greater than 30."
      },
      {
        type: "multiple_choice",
        question: "What is XQuery used for?",
        options: [
          "Defining XML schemas only",
          "Querying and transforming XML data",
          "Converting XML to relational tables",
          "Encrypting XML documents"
        ],
        answer: 1,
        explanation: "XQuery is a powerful language for querying and transforming XML data, supporting FLWOR (For-Let-Where-Order-Return) expressions."
      },
      {
        type: "multiple_choice",
        question: "What does FLWOR stand for in XQuery?",
        options: [
          "Find, Load, Write, Output, Return",
          "For-Let-Where-Order-Return",
          "Filter-List-Where-Order-Result",
          "For-Loop-With-Output-Result"
        ],
        answer: 1,
        explanation: "FLWOR stands for For-Let-Where-Order-Return — the core expression syntax of XQuery for querying and transforming XML data."
      },
      {
        type: "multiple_choice",
        question: "Which extends SQL specifically for querying XML data?",
        options: ["XQuery", "XPath", "SQL/XML", "XSLT"],
        answer: 2,
        explanation: "SQL/XML extends SQL for querying XML data, allowing XML to be used within traditional relational database queries."
      },
      {
        type: "multiple_choice",
        question: "Which of the following is an ADVANTAGE of XML in databases?",
        options: [
          "Efficient for large datasets",
          "Flexible and self-descriptive data format",
          "Faster than JSON for all use cases",
          "Requires no additional validation tools"
        ],
        answer: 1,
        explanation: "XML provides a flexible and self-descriptive data format that supports hierarchical and semi-structured data and is widely used for data interchange."
      },
      {
        type: "multiple_choice",
        question: "What is a key DISADVANTAGE of XML in databases?",
        options: [
          "Not human-readable",
          "Cannot represent hierarchical data",
          "Inefficient for large datasets compared to relational tables",
          "Not widely used in web services"
        ],
        answer: 2,
        explanation: "XML is inefficient for large datasets compared to relational tables, and parsing/querying XML documents can be resource-intensive."
      },
      {
        type: "multiple_choice",
        question: "Which of the following is a best practice for using XML in databases mentioned in the lecture?",
        options: [
          "Use XML for flat tabular data only",
          "Validate XML documents to ensure data consistency",
          "Avoid using XPath for queries",
          "Never use XML in native databases"
        ],
        answer: 1,
        explanation: "Best practices include: using XML for hierarchical/semi-structured data, optimizing queries with XPath and XQuery, and validating XML documents."
      },
      {
        type: "multiple_choice",
        question: "Compared to XML, JSON is described as:",
        options: [
          "More complex and suitable for hierarchical data",
          "Lightweight and faster for simple data exchange",
          "Better for nested elements and attributes",
          "Slower but more secure"
        ],
        answer: 1,
        explanation: "JSON is lightweight and faster for simple data exchange, while XML is more suitable for complex, hierarchical data. Both are used for APIs."
      },
      {
        type: "multiple_choice",
        question: "What is an emerging trend in XML databases mentioned in the lecture?",
        options: [
          "Use of SQL for XML storage",
          "Integration with NoSQL databases for unstructured data",
          "Removal of XML Schema validation",
          "Replacing relational databases entirely with XML"
        ],
        answer: 1,
        explanation: "Emerging trends include: integration with NoSQL databases for unstructured data, use of JSON as a lightweight alternative, and advancements in XML compression and indexing."
      },
      {
        type: "multiple_choice",
        question: "Which of the following is an application of XML in databases from the lecture?",
        options: [
          "Processing binary image files",
          "Web services and APIs for data exchange",
          "Running OLAP queries",
          "Managing distributed query processing"
        ],
        answer: 1,
        explanation: "XML applications include web services and APIs for data exchange, configuration files for software applications, and metadata storage in content management systems."
      },
      // --- TRUE/FALSE ---
      {
        type: "true_false",
        question: "XML stands for eXtensible Markup Language.",
        answer: true,
        explanation: "True. XML stands for eXtensible Markup Language — a standard for storing and transporting data."
      },
      {
        type: "true_false",
        question: "XML is platform-dependent and language-specific.",
        answer: false,
        explanation: "False. XML is platform-INDEPENDENT and language-NEUTRAL, which is one of its key features."
      },
      {
        type: "true_false",
        question: "XPath is used to query and transform XML data using FLWOR expressions.",
        answer: false,
        explanation: "False. FLWOR expressions (For-Let-Where-Order-Return) are used by XQUERY, not XPath. XPath is used to locate and retrieve parts of an XML document using paths."
      },
      {
        type: "true_false",
        question: "XML Schema validates XML documents to ensure data consistency.",
        answer: true,
        explanation: "True. XML Schema defines the structure and rules for XML documents and validates them to ensure data consistency and integrity."
      },
      {
        type: "true_false",
        question: "JSON is described as lightweight and faster than XML for simple data exchange.",
        answer: true,
        explanation: "True. JSON is lightweight and faster for simple data exchange, while XML is more suitable for complex, hierarchical data."
      },
      {
        type: "true_false",
        question: "SQL/XML is a language used to create XML schemas only.",
        answer: false,
        explanation: "False. SQL/XML EXTENDS SQL for querying XML data within relational databases. Creating XML schemas is the job of XML Schema."
      },
      {
        type: "true_false",
        question: "XML can be stored as a data type in relational databases.",
        answer: true,
        explanation: "True. XML can be stored as a data type in relational databases, in native XML databases, or using hybrid approaches."
      },
      // --- IDENTIFICATION ---
      {
        type: "identification",
        question: "This XML standard defines the structure and rules for XML documents, ensuring data consistency.",
        answer: "XML Schema",
        acceptedAnswers: ["xml schema", "xml schema definition", "xsd"],
        explanation: "XML Schema defines the structure and rules for XML documents and validates them to ensure data consistency."
      },
      {
        type: "identification",
        question: "This language navigates XML documents using paths and supports predicates for filtering data.",
        answer: "XPath",
        acceptedAnswers: ["xpath", "x path"],
        explanation: "XPath navigates XML documents using paths and supports predicates for filtering. Example: /bookstore/book[price>30]"
      },
      {
        type: "identification",
        question: "This is the standard language for querying and transforming XML documents, supporting FLWOR expressions.",
        answer: "XQuery",
        acceptedAnswers: ["xquery", "x query"],
        explanation: "XQuery is a powerful language for querying and transforming XML data, supporting FLWOR expressions."
      },
      {
        type: "identification",
        question: "This extends SQL for querying XML data within relational databases.",
        answer: "SQL/XML",
        acceptedAnswers: ["sql/xml", "sql xml", "sqlxml"],
        explanation: "SQL/XML extends SQL to enable querying XML data within relational databases."
      },
      {
        type: "identification",
        question: "This is the emerging lightweight alternative to XML for data exchange mentioned in the lecture.",
        answer: "JSON",
        acceptedAnswers: ["json", "javascript object notation"],
        explanation: "JSON (JavaScript Object Notation) is an emerging lightweight alternative to XML for data exchange, especially in APIs."
      },
      {
        type: "identification",
        question: "In XQuery, FLWOR stands for For-Let-Where-Order and this final word.",
        answer: "Return",
        acceptedAnswers: ["return"],
        explanation: "FLWOR = For-Let-Where-Order-Return. Return is the final component of the FLWOR expression in XQuery."
      },
      // --- ENUMERATION ---
      {
        type: "enumeration",
        question: "Name the 3 ways to query XML data discussed in the lecture.",
        answers: ["XQuery", "XPath", "SQL/XML"],
        minRequired: 3,
        explanation: "The 3 XML query methods: XQuery (standard XML query language), XPath (path navigation), and SQL/XML (SQL extension for XML)."
      },
      {
        type: "enumeration",
        question: "List 3 key features of XML from the lecture.",
        answers: [
          "Platform-independent and language-neutral",
          "Supports nested elements and attributes",
          "Extensible with user-defined tags"
        ],
        minRequired: 3,
        explanation: "3 Key features: platform-independent/language-neutral, supports nested elements and attributes, and extensible with user-defined tags."
      },
      {
        type: "enumeration",
        question: "List 3 applications of XML in databases from the lecture.",
        answers: [
          "Web services and APIs for data exchange",
          "Configuration files for software applications",
          "Metadata storage in content management systems"
        ],
        minRequired: 3,
        explanation: "3 XML applications: web services/APIs, configuration files for software applications, and metadata storage in content management systems."
      },
      {
        type: "enumeration",
        question: "List 3 advantages of XML in databases from the lecture.",
        answers: [
          "Flexible and self-descriptive data format",
          "Supports hierarchical and semi-structured data",
          "Widely used for data interchange in web services"
        ],
        minRequired: 3,
        explanation: "3 Advantages: flexible/self-descriptive format, supports hierarchical/semi-structured data, and widely used for web service interchange."
      },
      {
        type: "enumeration",
        question: "List 3 challenges of XML in databases from the lecture.",
        answers: [
          "Inefficient for large datasets compared to relational tables",
          "Parsing and querying XML documents can be resource-intensive",
          "Requires additional tools and standards for validation"
        ],
        minRequired: 3,
        explanation: "3 Challenges: inefficient for large datasets, parsing/querying is resource-intensive, and requires additional validation tools."
      },
      {
        type: "enumeration",
        question: "List 3 emerging trends in XML databases from the lecture.",
        answers: [
          "Integration with NoSQL databases for unstructured data",
          "Use of JSON as an alternative for lightweight data exchange",
          "Advancements in XML compression and indexing techniques"
        ],
        minRequired: 3,
        explanation: "3 Trends: NoSQL integration, JSON as lightweight alternative, and advancements in XML compression and indexing."
      }
    ]
  },
  {
    id: "unit5",
    title: "Introduction to Data Warehousing",
    subtitle: "Module 3, Unit 5",
    emoji: "🏭",
    color: "#FF9F0A",
    week: "Week 14",
    description: "Discover data warehousing fundamentals, ETL process, schemas, OLAP, data marts, and emerging trends.",
    questions: [
      // --- MULTIPLE CHOICE ---
      {
        type: "multiple_choice",
        question: "What is data warehousing primarily used for?",
        options: [
          "Processing real-time transactions only",
          "Reporting and analyzing data to support decision-making",
          "Storing backup copies of operational databases",
          "Running web applications"
        ],
        answer: 1,
        explanation: "A Data Warehouse is a system for reporting and analyzing data that integrates data from multiple sources to support decision-making processes."
      },
      {
        type: "multiple_choice",
        question: "What does a Data Warehouse integrate into a central repository?",
        options: [
          "Data from a single source only",
          "Data from multiple sources",
          "Only real-time streaming data",
          "Only external data sources"
        ],
        answer: 1,
        explanation: "A Data Warehouse integrates data from multiple sources into a central repository to support decision-making processes in organizations."
      },
      {
        type: "multiple_choice",
        question: "What does ETL stand for in data warehousing?",
        options: [
          "Extract, Transfer, Load",
          "Export, Transform, Link",
          "Extract, Transform, Load",
          "Evaluate, Test, Launch"
        ],
        answer: 2,
        explanation: "ETL stands for Extract, Transform, and Load — the process of moving and preparing data from source systems into a data warehouse."
      },
      {
        type: "multiple_choice",
        question: "Which component of the Data Warehouse consists of operational systems and external sources?",
        options: ["ETL Process", "Data Storage", "Presentation Layer", "Data Sources"],
        answer: 3,
        explanation: "Data Sources are the operational systems and external sources from which data is extracted during the ETL process."
      },
      {
        type: "multiple_choice",
        question: "Which component of the Data Warehouse is the centralized repository for storing data?",
        options: ["Data Sources", "ETL Process", "Data Storage", "Presentation Layer"],
        answer: 2,
        explanation: "Data Storage is the centralized repository for storing all the data that has been extracted and transformed."
      },
      {
        type: "multiple_choice",
        question: "Which component of the Data Warehouse handles reporting and visualization (OLAP)?",
        options: ["Data Sources", "ETL Process", "Data Storage", "Presentation Layer"],
        answer: 3,
        explanation: "The Presentation Layer uses OLAP (Online Analytical Processing) tools for reporting and visualization of warehouse data."
      },
      {
        type: "multiple_choice",
        question: "In a Star Schema, what is the CENTRAL table called?",
        options: ["Dimension Table", "Snowflake Table", "Fact Table", "Aggregate Table"],
        answer: 2,
        explanation: "In a Star Schema, the Fact Table is the central table containing measures (numerical data), surrounded by Dimension Tables with descriptive attributes."
      },
      {
        type: "multiple_choice",
        question: "In a Star Schema, what do the surrounding tables contain?",
        options: [
          "Numerical measures and facts",
          "ETL process logs",
          "Descriptive attributes",
          "Only primary key columns"
        ],
        answer: 2,
        explanation: "In a Star Schema, Dimension Tables are the surrounding tables that contain descriptive attributes related to the facts."
      },
      {
        type: "multiple_choice",
        question: "What is the Snowflake Schema?",
        options: [
          "A schema used only for cloud databases",
          "A normalized version of the star schema with further normalized dimension tables",
          "A schema for time-series data only",
          "A schema that stores only aggregated data"
        ],
        answer: 1,
        explanation: "The Snowflake Schema is a normalized version of the Star Schema where dimension tables are further normalized, reducing redundancy but adding complexity."
      },
      {
        type: "multiple_choice",
        question: "What is the result of normalizing the Snowflake Schema compared to the Star Schema?",
        options: [
          "Reduces complexity but adds redundancy",
          "Reduces redundancy but adds complexity",
          "Both schemas have the same complexity",
          "Increases both redundancy and complexity"
        ],
        answer: 1,
        explanation: "The Snowflake Schema reduces redundancy through further normalization of dimension tables, but this adds additional complexity."
      },
      {
        type: "multiple_choice",
        question: "What does OLAP stand for in data warehousing?",
        options: [
          "Online Load and Process",
          "Online Analytical Processing",
          "Offline Load and Partition",
          "Online Analysis and Planning"
        ],
        answer: 1,
        explanation: "OLAP stands for Online Analytical Processing — tools used in the Presentation Layer for reporting and analysis of data warehouse data."
      },
      {
        type: "multiple_choice",
        question: "What is a Data Mart?",
        options: [
          "A full data warehouse for the entire enterprise",
          "A subset of a data warehouse focused on a specific business function",
          "A tool for ETL processing",
          "A type of OLAP query"
        ],
        answer: 1,
        explanation: "A Data Mart is a subset of a data warehouse focused on a specific business function or department, serving a smaller user group."
      },
      {
        type: "multiple_choice",
        question: "Which emerging trend in data warehousing offers scalability through cloud infrastructure?",
        options: [
          "Manual data entry automation",
          "Cloud-based data warehousing",
          "Paper-based reporting",
          "Single-server consolidation"
        ],
        answer: 1,
        explanation: "Cloud-based data warehousing is an emerging trend that provides scalability, flexibility, and reduced infrastructure management."
      },
      {
        type: "multiple_choice",
        question: "Which big data platform is mentioned as integrating with modern data warehouses?",
        options: ["Redis", "Elasticsearch", "Hadoop", "MongoDB"],
        answer: 2,
        explanation: "Hadoop is mentioned as a big data platform that integrates with modern data warehouses for handling large-scale data processing."
      },
      {
        type: "multiple_choice",
        question: "Which emerging trend uses AI for analysis and prediction in data warehousing?",
        options: [
          "Manual data entry automation",
          "Cloud-based data warehousing for scalability",
          "AI-driven analytics and predictive modeling",
          "Single-server consolidation"
        ],
        answer: 2,
        explanation: "AI-driven analytics and predictive modeling is an emerging trend in data warehousing, alongside cloud-based warehousing and Hadoop integration."
      },
      {
        type: "multiple_choice",
        question: "According to the lecture, how many components does a Data Warehouse have?",
        options: ["Two", "Three", "Four", "Five"],
        answer: 2,
        explanation: "A Data Warehouse has 4 components: Data Sources, ETL Process, Data Storage, and Presentation Layer (OLAP)."
      },
      {
        type: "multiple_choice",
        question: "Which of the following is a warehouse schema type discussed in the lecture?",
        options: [
          "Temporal Schema",
          "Network Schema",
          "Star Schema",
          "Object Schema"
        ],
        answer: 2,
        explanation: "The two warehouse schema types discussed are the Star Schema and the Snowflake Schema."
      },
      // --- TRUE/FALSE ---
      {
        type: "true_false",
        question: "A Data Warehouse integrates data from multiple sources into a central repository.",
        answer: true,
        explanation: "True. A Data Warehouse integrates data from multiple sources into a central repository to support decision-making processes."
      },
      {
        type: "true_false",
        question: "ETL stands for Extract, Transfer, Load.",
        answer: false,
        explanation: "False. ETL stands for Extract, TRANSFORM, Load — not Transfer. The Transform step cleans and restructures data before loading."
      },
      {
        type: "true_false",
        question: "In a Star Schema, the Fact Table is the central table surrounded by Dimension Tables.",
        answer: true,
        explanation: "True. In a Star Schema, the Fact Table is the central table containing measures, and Dimension Tables with descriptive attributes surround it."
      },
      {
        type: "true_false",
        question: "The Snowflake Schema reduces complexity but adds redundancy compared to the Star Schema.",
        answer: false,
        explanation: "False. The Snowflake Schema reduces REDUNDANCY but adds COMPLEXITY through further normalization of dimension tables."
      },
      {
        type: "true_false",
        question: "OLAP stands for Online Analytical Processing.",
        answer: true,
        explanation: "True. OLAP stands for Online Analytical Processing — the tools used in the Presentation Layer for reporting and analysis."
      },
      {
        type: "true_false",
        question: "A Data Mart is a full data warehouse serving the entire enterprise.",
        answer: false,
        explanation: "False. A Data Mart is a SUBSET of a data warehouse, focused on a specific business function or department — not the entire enterprise."
      },
      {
        type: "true_false",
        question: "Hadoop is a big data platform mentioned as integrating with modern data warehouses.",
        answer: true,
        explanation: "True. Hadoop is mentioned in the lecture as a big data platform that integrates with modern data warehouses for large-scale data processing."
      },
      // --- IDENTIFICATION ---
      {
        type: "identification",
        question: "This process extracts, transforms, and loads data from source systems into a data warehouse.",
        answer: "ETL",
        acceptedAnswers: ["etl", "extract transform load", "extract, transform, load"],
        explanation: "ETL (Extract, Transform, Load) is the process of moving data from source systems into a data warehouse."
      },
      {
        type: "identification",
        question: "This data warehouse schema has a central Fact Table surrounded by Dimension Tables.",
        answer: "Star Schema",
        acceptedAnswers: ["star schema", "star"],
        explanation: "The Star Schema has a Fact Table at the center surrounded by Dimension Tables, resembling a star shape."
      },
      {
        type: "identification",
        question: "This is a normalized version of the Star Schema, reducing redundancy but adding complexity.",
        answer: "Snowflake Schema",
        acceptedAnswers: ["snowflake schema", "snowflake"],
        explanation: "The Snowflake Schema is a normalized version of the Star Schema where dimension tables are further normalized."
      },
      {
        type: "identification",
        question: "This is a subset of a data warehouse focused on a specific business function or department.",
        answer: "Data Mart",
        acceptedAnswers: ["data mart", "datamart"],
        explanation: "A Data Mart is a subset of a data warehouse focused on a specific business function or department."
      },
      {
        type: "identification",
        question: "This big data platform is mentioned in the lecture as integrating with modern data warehouses.",
        answer: "Hadoop",
        acceptedAnswers: ["hadoop", "apache hadoop"],
        explanation: "Hadoop is mentioned as a big data platform that integrates with modern data warehouses for large-scale data processing."
      },
      {
        type: "identification",
        question: "This layer in a Data Warehouse uses OLAP tools for reporting and visualization.",
        answer: "Presentation Layer",
        acceptedAnswers: ["presentation layer"],
        explanation: "The Presentation Layer uses OLAP (Online Analytical Processing) tools for reporting and visualization of warehouse data."
      },
      {
        type: "identification",
        question: "In a Star Schema, this is the central table containing measures.",
        answer: "Fact Table",
        acceptedAnswers: ["fact table"],
        explanation: "The Fact Table is the central table in a Star Schema containing numerical measures, surrounded by Dimension Tables."
      },
      // --- ENUMERATION ---
      {
        type: "enumeration",
        question: "Name all 4 components of a Data Warehouse from the lecture.",
        answers: ["Data Sources", "ETL Process", "Data Storage", "Presentation Layer"],
        minRequired: 4,
        explanation: "The 4 components: Data Sources, ETL Process, Data Storage, and Presentation Layer (OLAP)."
      },
      {
        type: "enumeration",
        question: "List the 3 emerging trends in Data Warehousing from the lecture.",
        answers: [
          "Cloud-based data warehousing",
          "Integration with big data platforms like Hadoop",
          "AI-driven analytics and predictive modeling"
        ],
        minRequired: 3,
        explanation: "3 Emerging trends: cloud-based warehousing for scalability, integration with big data platforms like Hadoop, and AI-driven analytics/predictive modeling."
      },
      {
        type: "enumeration",
        question: "Name the 2 types of warehouse schemas discussed in the lecture.",
        answers: ["Star Schema", "Snowflake Schema"],
        minRequired: 2,
        explanation: "The 2 warehouse schema types: Star Schema (Fact Table at center with surrounding Dimension Tables) and Snowflake Schema (normalized Star Schema)."
      },
      {
        type: "enumeration",
        question: "List the 3 objectives of the Data Warehousing lecture.",
        answers: [
          "Understand the fundamentals of data warehousing",
          "Explore the components and architecture of a data warehouse",
          "Learn about data extraction, transformation, and loading (ETL)"
        ],
        minRequired: 3,
        explanation: "3 Objectives: understand fundamentals, explore components and architecture, and learn about ETL."
      },
      {
        type: "enumeration",
        question: "List the 3 steps of the ETL process in order.",
        answers: ["Extract", "Transform", "Load"],
        minRequired: 3,
        explanation: "ETL: Extract (pull data from sources), Transform (clean and restructure), Load (push into data warehouse)."
      }
    ]
  },
  {
    id: "unit6",
    title: "WebSockets & Reverb — Foundations",
    subtitle: "Laravel Real-Time Series · Lesson 1",
    emoji: "📡",
    color: "#30D158",
    week: "Lesson 1",
    description: "Understand the real-time problem, the WebSocket model, what Laravel Reverb is, and how to get it running.",
    questions: [
  {
    type: "multiple_choice",
    question: "According to the lesson objectives, what problem explains why request/response HTTP can't push?",
    options: [
      "The real-time problem",
      "The WebSocket model",
      "What Reverb is",
      "Get it running"
    ],
    answer: 0,
    explanation: "The lesson objective states: 'The real-time problem — Why request/response HTTP can't push, and what polling costs you.'"
  },
  {
    type: "multiple_choice",
    question: "According to the HTTP vs WebSocket comparison, what must the client do before it gets anything back in traditional HTTP?",
    options: [
      "Stay connected",
      "Ask",
      "Push updates",
      "Authenticate"
    ],
    answer: 1,
    explanation: "Traditional HTTP: 'Client must ASK before it gets anything back.'"
  },
  {
    type: "multiple_choice",
    question: "After the initial handshake, what happens to a WebSocket connection?",
    options: [
      "It closes immediately.",
      "It stays open.",
      "It restarts every request.",
      "It becomes read-only."
    ],
    answer: 1,
    explanation: "The slide states: 'One handshake, then the connection STAYS open.'"
  },
  {
    type: "multiple_choice",
    question: "According to the lesson, who built Laravel Reverb?",
    options: [
      "The PHP Foundation",
      "The Laravel team",
      "The Pusher team",
      "The React team"
    ],
    answer: 1,
    explanation: "The slide says Reverb is 'built by the Laravel team.'"
  },
  {
    type: "multiple_choice",
    question: "Which protocol does Reverb speak?",
    options: [
      "HTTP",
      "MQTT",
      "The Pusher protocol",
      "FTP"
    ],
    answer: 2,
    explanation: "The slide states that Reverb 'speaks the Pusher protocol.'"
  },
  {
    type: "multiple_choice",
    question: "Which Artisan command scaffolds Reverb and Echo on Laravel 11+?",
    options: [
      "php artisan reverb:start",
      "php artisan install:broadcasting",
      "php artisan queue:work",
      "php artisan reverb:install"
    ],
    answer: 1,
    explanation: "The lesson shows 'php artisan install:broadcasting' for Laravel 11+."
  },
  {
    type: "multiple_choice",
    question: "What is the default Reverb port shown in the .env example?",
    options: [
      "3000",
      "6001",
      "8080",
      "9000"
    ],
    answer: 2,
    explanation: "The .env example shows REVERB_PORT=8080."
  },
  {
    type: "multiple_choice",
    question: "Which Artisan command starts the Reverb server?",
    options: [
      "php artisan reverb:install",
      "php artisan install:broadcasting",
      "php artisan reverb:start",
      "php artisan serve"
    ],
    answer: 2,
    explanation: "The lesson shows 'php artisan reverb:start'."
  },

  // ---------------------------
  // TRUE / FALSE
  // ---------------------------
  {
    type: "true_false",
    question: "Traditional HTTP uses a request/response model.",
    answer: true,
    explanation: "The slide labels Traditional HTTP as 'Request / response.'"
  },
  {
    type: "true_false",
    question: "A WebSocket connection opens and closes for every message.",
    answer: false,
    explanation: "The slide says the connection stays open after one handshake."
  },
  {
    type: "true_false",
    question: "Reverb runs inside your own app.",
    answer: true,
    explanation: "The slide states that Reverb runs inside your own app."
  },
  {
    type: "true_false",
    question: "Polling is described as repeated requests, mostly wasted, and the update still arrives late.",
    answer: true,
    explanation: "This wording comes directly from the Polling vs. Live Push slide."
  },
  {
    type: "true_false",
    question: "The --debug flag prints every connection and message.",
    answer: true,
    explanation: "The lesson states: '--debug prints every connection and message.'"
  }
]
  },
  {
    id: "unit7",
    title: "Broadcasting Basics",
    subtitle: "Laravel Real-Time Series · Lesson 2",
    emoji: "📢",
    color: "#0A84FF",
    week: "Lesson 2",
    description: "Fire your first event into the pipeline — the ShouldBroadcast contract and the three methods that shape every broadcast.",
    questions: [
  // ---------------------------
  // MULTIPLE CHOICE
  // ---------------------------
  {
    type: "multiple_choice",
    question: "Which Artisan command creates a new event class?",
    options: [
      "php artisan make:model",
      "php artisan make:event",
      "php artisan make:listener",
      "php artisan make:controller"
    ],
    answer: 1,
    explanation: "The lesson uses 'php artisan make:event MessageSent'."
  },
  {
    type: "multiple_choice",
    question: "Which contract tells Laravel an event should go out over WebSockets?",
    options: [
      "ShouldQueue",
      "ShouldBroadcast",
      "Dispatchable",
      "SerializesModels"
    ],
    answer: 1,
    explanation: "The lesson states that ShouldBroadcast is the contract that tells Laravel an event should go out over WebSockets."
  },
  {
    type: "multiple_choice",
    question: "Which method returns the channel(s) the event is broadcast on?",
    options: [
      "broadcastAs()",
      "broadcastWith()",
      "broadcastOn()",
      "broadcastTo()"
    ],
    answer: 2,
    explanation: "broadcastOn() returns the channel(s) the event is broadcast on."
  },
  {
    type: "multiple_choice",
    question: "Which channel type is public and requires no authorization?",
    options: [
      "Channel",
      "PrivateChannel",
      "PresenceChannel",
      "BroadcastChannel"
    ],
    answer: 0,
    explanation: "Channel is public—anyone can listen. No auth."
  },
  {
    type: "multiple_choice",
    question: "Which method sets the name clients listen for?",
    options: [
      "broadcastOn()",
      "broadcastAs()",
      "broadcastWith()",
      "broadcastName()"
    ],
    answer: 1,
    explanation: "broadcastAs() sets the name clients listen for."
  },
  {
    type: "multiple_choice",
    question: "Which method returns the payload sent to clients?",
    options: [
      "broadcastOn()",
      "broadcastAs()",
      "broadcastWith()",
      "broadcastPayload()"
    ],
    answer: 2,
    explanation: "broadcastWith() returns the payload sent to clients."
  },
  {
    type: "multiple_choice",
    question: "Which interface broadcasts immediately by bypassing the queue?",
    options: [
      "ShouldBroadcast",
      "ShouldBroadcastNow",
      "Dispatchable",
      "Queueable"
    ],
    answer: 1,
    explanation: "ShouldBroadcastNow broadcasts immediately, bypassing the queue."
  },
  {
    type: "multiple_choice",
    question: "According to the lesson, what command should remain running to send queued broadcasts?",
    options: [
      "php artisan serve",
      "php artisan queue:work",
      "php artisan migrate",
      "php artisan cache:clear"
    ],
    answer: 1,
    explanation: "The lesson shows 'php artisan queue:work' running together with Reverb."
  },

  // ---------------------------
  // TRUE / FALSE
  // ---------------------------
  {
    type: "true_false",
    question: "An event is a plain PHP class that carries data until you make it broadcastable.",
    answer: true,
    explanation: "This sentence appears on the 'Create an event' slide."
  },
  {
    type: "true_false",
    question: "SerializesModels lets you pass Eloquent models safely.",
    answer: true,
    explanation: "The lesson states that SerializesModels lets you pass Eloquent models safely."
  },
  {
    type: "true_false",
    question: "ShouldBroadcast pushes the broadcast onto the queue and sends it by a worker.",
    answer: true,
    explanation: "The lesson describes ShouldBroadcast as queued and sent by a worker."
  },
  {
    type: "true_false",
    question: "PrivateChannel is public and requires no authorization.",
    answer: false,
    explanation: "PrivateChannel requires authorization."
  },
  {
    type: "true_false",
    question: "If broadcastWith() is omitted, Laravel ships all public properties of the event.",
    answer: true,
    explanation: "The lesson states that skipping broadcastWith() broadcasts all public properties."
  },

  // ---------------------------
  // IDENTIFICATION
  // ---------------------------
  {
    type: "identification",
    question: "Name the contract that tells Laravel an event should go out over WebSockets.",
    answer: "ShouldBroadcast",
    acceptedAnswers: [
      "ShouldBroadcast",
      "shouldbroadcast"
    ],
    explanation: "ShouldBroadcast is the contract that tells Laravel an event should go out over WebSockets."
  },
  {
    type: "identification",
    question: "Name the trait that lets you pass Eloquent models safely.",
    answer: "SerializesModels",
    acceptedAnswers: [
      "SerializesModels",
      "serializesmodels"
    ],
    explanation: "SerializesModels lets you pass Eloquent models safely."
  },
  {
    type: "identification",
    question: "Name the method that sets the name clients listen for.",
    answer: "broadcastAs",
    acceptedAnswers: [
      "broadcastAs",
      "broadcastAs()"
    ],
    explanation: "broadcastAs() sets the name clients listen for."
  },
  {
    type: "identification",
    question: "Name the command that starts the queue worker.",
    answer: "php artisan queue:work",
    acceptedAnswers: [
      "php artisan queue:work",
      "queue:work"
    ],
    explanation: "The lesson keeps 'php artisan queue:work' running."
  },

  // ---------------------------
  // ENUMERATION
  // ---------------------------
  {
    type: "enumeration",
    question: "List the four lesson objectives.",
    answers: [
      "Create an event",
      "ShouldBroadcast",
      "Shape the broadcast",
      "Trace the flow"
    ],
    minRequired: 4,
    explanation: "These are the four lesson objectives shown on the lesson objectives slide."
  },
  {
    type: "enumeration",
    question: "List the four stages of the broadcast pipeline.",
    answers: [
      "Event",
      "Queue",
      "Reverb",
      "Client"
    ],
    minRequired: 4,
    explanation: "The broadcast pipeline is Event → Queue → Reverb → Client."
  },
  {
    type: "enumeration",
    question: "List the three broadcast methods discussed in the lesson.",
    answers: [
      "broadcastOn",
      "broadcastAs",
      "broadcastWith"
    ],
    minRequired: 3,
    explanation: "The lesson covers broadcastOn(), broadcastAs(), and broadcastWith()."
  }
]
  },
  {
    id: "unit8",
    title: "useMemo · useCallback · useRef",
    subtitle: "React Hooks · Performance & References",
    emoji: "⚛️",
    color: "#FF9F0A",
    week: "React Hooks",
    description: "Three hooks for remembering things between renders — cache a value, keep a function stable, and hold onto data without re-rendering.",
    questions: [
  // ---------------------------
  // MULTIPLE CHOICE
  // ---------------------------
  {
    type: "multiple_choice",
    question: "According to the lesson, what does useMemo cache?",
    options: [
      "A function",
      "A DOM node",
      "A value",
      "A component"
    ],
    answer: 2,
    explanation: "The lesson states that useMemo caches a VALUE."
  },
  {
    type: "multiple_choice",
    question: "Which hook keeps a function's identity stable between renders?",
    options: [
      "useMemo",
      "useRef",
      "useCallback",
      "useState"
    ],
    answer: 2,
    explanation: "The lesson states that useCallback keeps a function's identity stable between renders."
  },
  {
    type: "multiple_choice",
    question: "Which hook holds a mutable value without triggering a re-render?",
    options: [
      "useEffect",
      "useRef",
      "useMemo",
      "useState"
    ],
    answer: 1,
    explanation: "useRef holds a mutable .current that survives renders without triggering a re-render."
  },
  {
    type: "multiple_choice",
    question: "According to the lesson, what happens on every render?",
    options: [
      "Only state updates run.",
      "The whole function body re-runs.",
      "Only refs are recreated.",
      "Nothing changes."
    ],
    answer: 1,
    explanation: "Every render re-runs the whole function body."
  },
  {
    type: "multiple_choice",
    question: "What does useCallback return?",
    options: [
      "A cached value",
      "A JSX element",
      "The function itself",
      "A ref object"
    ],
    answer: 2,
    explanation: "useCallback returns the FUNCTION itself."
  },
  {
    type: "multiple_choice",
    question: "According to the lesson, React.memo compares props by what?",
    options: [
      "Value",
      "Reference",
      "Length",
      "Order"
    ],
    answer: 1,
    explanation: "The lesson states that React.memo compares props by reference."
  },
  {
    type: "multiple_choice",
    question: "Where does React place the real DOM node when using useRef?",
    options: [
      ".value",
      ".current",
      ".element",
      ".node"
    ],
    answer: 1,
    explanation: "React puts the real DOM node in .current."
  },
  {
    type: "multiple_choice",
    question: "According to the rules of thumb, when should you use these hooks?",
    options: [
      "In every component",
      "Only in class components",
      "When you have a real cost",
      "Only with React.memo"
    ],
    answer: 2,
    explanation: "Reach for these when you have a real cost—not by default."
  },

  // ---------------------------
  // TRUE / FALSE
  // ---------------------------
  {
    type: "true_false",
    question: "useMemo recomputes only when a dependency changes.",
    answer: true,
    explanation: "The lesson states this directly."
  },
  {
    type: "true_false",
    question: "Changing ref.current triggers a re-render.",
    answer: false,
    explanation: "Changing .current does NOT trigger a re-render."
  },
  {
    type: "true_false",
    question: "useCallback returns the function itself.",
    answer: true,
    explanation: "The lesson states that useCallback returns the function itself."
  },
  {
    type: "true_false",
    question: "React fills .current with the DOM node after attaching a ref to a JSX element.",
    answer: true,
    explanation: "This is stated on the 'Reaching the DOM' slide."
  },
  {
    type: "true_false",
    question: "The lesson recommends optimizing prematurely.",
    answer: false,
    explanation: "The rules of thumb say: Don't optimize prematurely."
  },

  // ---------------------------
  // IDENTIFICATION
  // ---------------------------
  {
    type: "identification",
    question: "Name the hook that caches a value.",
    answer: "useMemo",
    acceptedAnswers: [
      "useMemo",
      "usememo"
    ],
    explanation: "useMemo caches a value."
  },
  {
    type: "identification",
    question: "Name the hook that caches a function.",
    answer: "useCallback",
    acceptedAnswers: [
      "useCallback",
      "usecallback"
    ],
    explanation: "useCallback caches a function."
  },
  {
    type: "identification",
    question: "Name the hook that stores a mutable .current value.",
    answer: "useRef",
    acceptedAnswers: [
      "useRef",
      "useref"
    ],
    explanation: "useRef stores a mutable .current value."
  },
  {
    type: "identification",
    question: "Name the React API that skips a re-render when props are unchanged.",
    answer: "React.memo",
    acceptedAnswers: [
      "React.memo",
      "react.memo",
      "memo"
    ],
    explanation: "React.memo skips a re-render when props are unchanged."
  },

  // ---------------------------
  // ENUMERATION
  // ---------------------------
  {
    type: "enumeration",
    question: "List the four lesson objectives.",
    answers: [
      "useMemo",
      "useCallback",
      "useRef",
      "When to use them"
    ],
    minRequired: 4,
    explanation: "These are the lesson objectives shown in the PDF."
  },
  {
    type: "enumeration",
    question: "List the three reasons re-renders redo everything.",
    answers: [
      "Recomputation",
      "New references",
      "Cascading renders"
    ],
    minRequired: 3,
    explanation: "These are listed on the 'Re-renders redo everything' slide."
  },
  {
    type: "enumeration",
    question: "List the three hooks covered in the lesson.",
    answers: [
      "useMemo",
      "useCallback",
      "useRef"
    ],
    minRequired: 3,
    explanation: "These are the three hooks covered in the lesson."
  }
]
  }
];