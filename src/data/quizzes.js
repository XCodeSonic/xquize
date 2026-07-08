export const quizzes = [
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
      // --- MULTIPLE CHOICE ---
      {
        type: "multiple_choice",
        question: "What does Laravel Reverb let you avoid using?",
        options: [
          "A local database",
          "A third-party service like Pusher or Ably",
          "A queue worker",
          "An .env file"
        ],
        answer: 1,
        explanation: "Reverb runs inside your own app — no third-party service like Pusher or Ably required."
      },
      {
        type: "multiple_choice",
        question: "What protocol does Reverb speak, allowing Laravel Echo to work with zero rewrites?",
        options: [
          "WebSocket protocol only",
          "HTTP/2 protocol",
          "The Pusher protocol",
          "The MQTT protocol"
        ],
        answer: 2,
        explanation: "Reverb speaks the Pusher protocol, so Laravel Echo on the front end works with zero rewrites."
      },
      {
        type: "multiple_choice",
        question: "In the HTTP vs WebSocket comparison, what must happen before a traditional HTTP client gets anything back?",
        options: [
          "The client must ASK",
          "The server must push",
          "A handshake must stay open",
          "A queue worker must run"
        ],
        answer: 0,
        explanation: "Under Traditional HTTP, the client must ASK before it gets anything back — it's a request/response model."
      },
      {
        type: "multiple_choice",
        question: "According to the lecture, what does achieving real-time updates over HTTP require?",
        options: [
          "A single persistent connection",
          "Constant polling",
          "A WebSocket handshake",
          "Server-initiated pushes"
        ],
        answer: 1,
        explanation: "Real-time = constant polling → wasted requests & lag, since HTTP's server can't initiate, it can only reply."
      },
      {
        type: "multiple_choice",
        question: "What kind of connection does a WebSocket maintain after the initial handshake?",
        options: [
          "It closes and reopens for every message",
          "One handshake, then the connection stays open — persistent and full-duplex",
          "It becomes read-only",
          "It requires re-authentication per message"
        ],
        answer: 1,
        explanation: "WebSocket: one handshake, then the connection STAYS open, and either side can send a message at any moment."
      },
      {
        type: "multiple_choice",
        question: "Which artisan command starts the Reverb WebSocket server?",
        options: [
          "php artisan reverb:install",
          "php artisan queue:work",
          "php artisan reverb:start",
          "php artisan serve"
        ],
        answer: 2,
        explanation: "php artisan reverb:start boots the server, printing 'INFO Reverb server started on 0.0.0.0:8080'."
      },
      {
        type: "multiple_choice",
        question: "What default port does the Reverb server start on, per the lecture's terminal output?",
        options: ["3000", "6001", "8080", "9000"],
        answer: 2,
        explanation: "The terminal output shows: INFO Reverb server started on 0.0.0.0:8080."
      },
      {
        type: "multiple_choice",
        question: "On Laravel 11+, which single command scaffolds Reverb and Echo together?",
        options: [
          "php artisan reverb:install",
          "composer require laravel/reverb",
          "php artisan install:broadcasting",
          "npm install laravel-echo"
        ],
        answer: 2,
        explanation: "On Laravel 11+, php artisan install:broadcasting is the single command that scaffolds Reverb + Echo for you."
      },
      // --- TRUE/FALSE ---
      {
        type: "true_false",
        question: "A WebSocket connection requires a brand-new handshake for every message sent.",
        answer: false,
        explanation: "False. One handshake, then the connection STAYS open — either side can send a message at any moment."
      },
      {
        type: "true_false",
        question: "Laravel Reverb is described as a first-party, self-hosted WebSocket server built by the Laravel team.",
        answer: true,
        explanation: "True. Reverb is a fast, scalable WebSocket server built by the Laravel team, fully self-hosted."
      },
      {
        type: "true_false",
        question: "php artisan install:broadcasting installs the laravel/reverb package, publishes config/broadcasting.php, adds Reverb keys to .env, and installs Echo + pusher-js via npm.",
        answer: true,
        explanation: "True. This single command scaffolds everything: the package, the config, the .env keys, and the front-end packages."
      },
      {
        type: "true_false",
        question: "The manual install process for older apps is: composer require laravel/reverb, then php artisan reverb:install, then npm install --save-dev laravel-echo pusher-js.",
        answer: true,
        explanation: "True. This is the exact manual install sequence shown for older apps that don't have install:broadcasting."
      },
      {
        type: "true_false",
        question: "In the lecture's polling diagram, polling is described as efficient and always delivers updates instantly.",
        answer: false,
        explanation: "False. Polling involves repeated requests, mostly wasted — and the update still arrives late."
      },
      // --- IDENTIFICATION ---
      {
        type: "identification",
        question: "Name the fast, scalable, first-party WebSocket server built by the Laravel team.",
        answer: "Reverb",
        acceptedAnswers: ["reverb", "laravel reverb"],
        explanation: "Reverb is Laravel's official, Pusher-compatible WebSocket server."
      },
      {
        type: "identification",
        question: "Name the process manager mentioned as what runs Reverb in production, instead of running it by hand.",
        answer: "Supervisor",
        acceptedAnswers: ["supervisor"],
        explanation: "In production it runs under Supervisor, not by hand (covered in Lesson 9)."
      },
      {
        type: "identification",
        question: "Name the default port shown in the lecture's terminal output when Reverb starts.",
        answer: "8080",
        acceptedAnswers: ["8080", "port 8080", ":8080"],
        explanation: "INFO Reverb server started on 0.0.0.0:8080 — the default port is 8080."
      },
      {
        type: "identification",
        question: "Name the reverb:start flag that prints every connection and message in the console.",
        answer: "--debug",
        acceptedAnswers: ["--debug", "debug", "debug flag"],
        explanation: "--debug prints every connection and message: your best friend for Lessons 2–6."
      },
      // --- ENUMERATION ---
      {
        type: "enumeration",
        question: "List all 4 lesson objectives of Lesson 1: Foundations — WebSockets & Reverb.",
        answers: [
          "The real-time problem",
          "The WebSocket model",
          "What Reverb is",
          "Get it running"
        ],
        minRequired: 4,
        explanation: "The 4 objectives: the real-time problem, the WebSocket model, what Reverb is, and getting it running."
      },
      {
        type: "enumeration",
        question: "List the 4 steps in 'Where Reverb fits in,' in order.",
        answers: ["Event fired", "Queue", "Reverb", "Echo client"],
        minRequired: 4,
        explanation: "The path: Event fired → Queue → Reverb → Echo client, from app dispatch to the browser updating instantly."
      },
      {
        type: "enumeration",
        question: "List the 3 features of Laravel Reverb described on the 'What is Laravel Reverb?' slide.",
        answers: ["Built for speed", "Drop-in compatible", "Fully self-hosted"],
        minRequired: 3,
        explanation: "3 features: Built for speed (async event loop), Drop-in compatible (same protocol as Pusher), Fully self-hosted (no SaaS bills or rate limits)."
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
      // --- MULTIPLE CHOICE ---
      {
        type: "multiple_choice",
        question: "Which artisan command creates a broadcast event class?",
        options: ["make:model", "make:event", "make:controller", "make:listener"],
        answer: 1,
        explanation: "php artisan make:event MessageSent creates app/Events/MessageSent.php."
      },
      {
        type: "multiple_choice",
        question: "Which trait, used alongside Dispatchable, lets you safely pass Eloquent models in an event's constructor?",
        options: ["Dispatchable", "SerializesModels", "Broadcastable", "Queueable"],
        answer: 1,
        explanation: "SerializesModels lets you pass Eloquent models safely, and is used with the Dispatchable trait."
      },
      {
        type: "multiple_choice",
        question: "Which contract is described as the 'on-switch' that tells Laravel an event should go out over WebSockets?",
        options: ["ShouldQueue", "ShouldBroadcast", "Dispatchable", "Broadcastable"],
        answer: 1,
        explanation: "Implementing ShouldBroadcast is the on-switch: Laravel now sends this event to your broadcaster (Reverb) whenever it's dispatched."
      },
      {
        type: "multiple_choice",
        question: "Which variant broadcasts synchronously, bypassing the queue, blocking the request until sent?",
        options: ["ShouldBroadcast", "ShouldBroadcastNow", "ShouldQueue", "BroadcastNow"],
        answer: 1,
        explanation: "ShouldBroadcastNow is synchronous — it broadcasts immediately, bypassing the queue, and blocks the request until sent."
      },
      {
        type: "multiple_choice",
        question: "Which method returns the channel(s) an event is broadcast on?",
        options: ["broadcastAs()", "broadcastWith()", "broadcastOn()", "broadcastChannel()"],
        answer: 2,
        explanation: "broadcastOn() returns the channel(s) the event is broadcast on; clients listening on that channel receive it."
      },
      {
        type: "multiple_choice",
        question: "Which channel type is described as public — anyone can listen, no auth required?",
        options: ["Channel", "PrivateChannel", "PresenceChannel", "BroadcastChannel"],
        answer: 0,
        explanation: "Channel is public — anyone can listen, no auth. PrivateChannel requires authorization, PresenceChannel adds a who-is-here list."
      },
      {
        type: "multiple_choice",
        question: "Which method sets the name clients listen for, instead of the full namespaced event class name?",
        options: ["broadcastOn()", "broadcastAs()", "broadcastWith()", "broadcastName()"],
        answer: 1,
        explanation: "broadcastAs() sets the name clients listen for. Skip it and Laravel uses the full event class name."
      },
      {
        type: "multiple_choice",
        question: "Which method controls exactly what payload data is sent to clients?",
        options: ["broadcastOn()", "broadcastAs()", "broadcastWith()", "broadcastData()"],
        answer: 2,
        explanation: "broadcastWith() returns the payload sent to clients. Skip it and Laravel ships all public properties of the event."
      },
      // --- TRUE/FALSE ---
      {
        type: "true_false",
        question: "If broadcastWith() is not defined, Laravel ships all public properties of the event.",
        answer: true,
        explanation: "True. Skip broadcastWith() and Laravel ships all public properties — often too much."
      },
      {
        type: "true_false",
        question: "broadcast(new MessageSent($message)); dispatches the event into the broadcast pipeline.",
        answer: true,
        explanation: "True. broadcast() dispatches the event; event() also works as an alternative shown in the lecture."
      },
      {
        type: "true_false",
        question: "ShouldBroadcastNow queues the broadcast so it does not block the request.",
        answer: false,
        explanation: "False. ShouldBroadcastNow is synchronous and blocks the request until sent — it's ShouldBroadcast that queues it."
      },
      {
        type: "true_false",
        question: "A PrivateChannel requires authorization, while a public Channel does not.",
        answer: true,
        explanation: "True. Channel is public with no auth; PrivateChannel requires authorization (covered in Lesson 4)."
      },
      {
        type: "true_false",
        question: "When broadcastAs() is set, Echo listeners need a leading dot, like .listen('.message.sent').",
        answer: true,
        explanation: "True. This is called out as a reason to be careful when renaming: When set, Echo listeners need a leading dot."
      },
      // --- IDENTIFICATION ---
      {
        type: "identification",
        question: "Name the trait that lets you pass Eloquent models safely inside a broadcast event's constructor.",
        answer: "SerializesModels",
        acceptedAnswers: ["serializesmodels", "serializes models"],
        explanation: "SerializesModels lets you pass Eloquent models safely; it's used alongside the Dispatchable trait."
      },
      {
        type: "identification",
        question: "Name the contract that is Laravel's 'on-switch,' telling it to send an event to the broadcaster (Reverb) whenever it's dispatched.",
        answer: "ShouldBroadcast",
        acceptedAnswers: ["shouldbroadcast", "should broadcast"],
        explanation: "Implementing ShouldBroadcast is the on-switch for sending an event to Reverb whenever it's dispatched."
      },
      {
        type: "identification",
        question: "Name the channel type that is private and also maintains a who-is-here list.",
        answer: "PresenceChannel",
        acceptedAnswers: ["presencechannel", "presence channel"],
        explanation: "PresenceChannel is private, plus it maintains a who-is-here list (covered in Lesson 5)."
      },
      {
        type: "identification",
        question: "Name the artisan command that must be kept running so ShouldBroadcast events pushed onto the queue actually get sent.",
        answer: "queue:work",
        acceptedAnswers: ["queue:work", "php artisan queue:work"],
        explanation: "php artisan queue:work is kept running alongside reverb:start so queued broadcasts are serialized and sent."
      },
      // --- ENUMERATION ---
      {
        type: "enumeration",
        question: "List the 3 methods that shape a broadcast — covering channel, name, and payload.",
        answers: ["broadcastOn", "broadcastAs", "broadcastWith"],
        minRequired: 3,
        explanation: "broadcastOn (channel), broadcastAs (name), broadcastWith (payload) — the three methods that shape every broadcast."
      },
      {
        type: "enumeration",
        question: "List the 4 lesson objectives of Lesson 2: Broadcasting Basics.",
        answers: ["Create an event", "ShouldBroadcast", "Shape the broadcast", "Trace the flow"],
        minRequired: 4,
        explanation: "The 4 objectives: create an event, ShouldBroadcast, shape the broadcast, and trace the flow."
      },
      {
        type: "enumeration",
        question: "List the 4 stages of the broadcast pipeline traced in Lesson 2.",
        answers: ["Event", "Queue", "Reverb", "Client"],
        minRequired: 4,
        explanation: "Event (ShouldBroadcast marks it) → Queue (worker serializes & sends) → Reverb (pushes to the channel) → Client (Echo receives)."
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
      // --- MULTIPLE CHOICE ---
      {
        type: "multiple_choice",
        question: "What does useMemo return, compared to useCallback?",
        options: [
          "useMemo returns a function; useCallback returns a value",
          "useMemo returns a cached value; useCallback returns the function itself",
          "Both return the exact same thing",
          "Neither returns anything usable"
        ],
        answer: 1,
        explanation: "useMemo caches a VALUE, returning whatever the function computes. useCallback caches a FUNCTION, returning the function itself, identity intact."
      },
      {
        type: "multiple_choice",
        question: "Which hook keeps a function's identity stable between renders, until a dependency changes?",
        options: ["useMemo", "useCallback", "useRef", "useEffect"],
        answer: 1,
        explanation: "useCallback returns the same function instance between renders — until a dependency changes."
      },
      {
        type: "multiple_choice",
        question: "Which hook holds a mutable value that survives renders, without triggering a re-render when it changes?",
        options: ["useMemo", "useCallback", "useRef", "useState"],
        answer: 2,
        explanation: "useRef holds a mutable .current that survives renders. Changing it does NOT trigger a re-render."
      },
      {
        type: "multiple_choice",
        question: "According to the lecture, useCallback(fn, deps) is exactly equivalent to which expression?",
        options: [
          "useMemo(() => fn, deps)",
          "useMemo(fn, deps)",
          "useRef(fn)",
          "useEffect(fn, deps)"
        ],
        answer: 0,
        explanation: "In fact: useCallback(fn, deps) is exactly useMemo(() => fn, deps) — one memoizes the function instead of its result."
      },
      {
        type: "multiple_choice",
        question: "According to 'Why these hooks exist,' what happens on every render?",
        options: [
          "Nothing changes between renders",
          "The whole function body re-runs, recomputing values and recreating functions from scratch",
          "Only state updates run",
          "Only refs are updated"
        ],
        answer: 1,
        explanation: "Every render re-runs the whole function body — recomputing values and recreating functions from scratch."
      },
      {
        type: "multiple_choice",
        question: "What problem does combining React.memo with useCallback solve?",
        options: [
          "It prevents infinite loops in useEffect",
          "It stops a memoized child from re-rendering just because of a fresh function prop each render",
          "It caches network responses",
          "It removes the need for props entirely"
        ],
        answer: 1,
        explanation: "React.memo compares props by reference; useCallback keeps a function prop identical so the memo check passes and the child does not re-render."
      },
      {
        type: "multiple_choice",
        question: "What must you attach a ref to in order to get the real DOM node placed into .current?",
        options: ["A useState call", "A JSX element", "A useEffect hook", "A useMemo call"],
        answer: 1,
        explanation: "Attach a ref to a JSX element (e.g. <input ref={inputRef} />) and React puts the real DOM node in .current."
      },
      {
        type: "multiple_choice",
        question: "What rule of thumb closes the lecture regarding these three hooks?",
        options: [
          "Always use them by default in every component",
          "Don't optimize prematurely — reach for them when you have a real cost, not by default",
          "Only use them inside class components",
          "Avoid useRef entirely in modern React"
        ],
        answer: 1,
        explanation: "Rules of thumb: Don't optimize prematurely. Reach for these when you have a real cost — not by default."
      },
      // --- TRUE/FALSE ---
      {
        type: "true_false",
        question: "useMemo recomputes its value on every single render, regardless of its dependency array.",
        answer: false,
        explanation: "False. useMemo runs the function only when a dependency changes; otherwise it returns the cached result."
      },
      {
        type: "true_false",
        question: "Mutating a ref's .current property does NOT trigger a re-render.",
        answer: true,
        explanation: "True. Updating .current is silent — no re-render, unlike useState."
      },
      {
        type: "true_false",
        question: "useCallback returns the value a function computes, rather than the function itself.",
        answer: false,
        explanation: "False. useCallback returns the FUNCTION itself, with a stable identity — useMemo is the one that returns a computed value."
      },
      {
        type: "true_false",
        question: "The lecture advises against reading or writing a ref's .current during render.",
        answer: true,
        explanation: "True. One of the 'ref vs state' bullet points explicitly warns: Don't read/write .current during render."
      },
      {
        type: "true_false",
        question: "A new function prop passed to a React.memo'd child causes it to re-render even when nothing meaningful changed, unless the function is wrapped in useCallback.",
        answer: true,
        explanation: "True. Without useCallback, memo is defeated by the new function each render, per 'Where useCallback pays off.'"
      },
      // --- IDENTIFICATION ---
      {
        type: "identification",
        question: "Name the hook that caches an expensive computed value so it isn't recalculated every render.",
        answer: "useMemo",
        acceptedAnswers: ["usememo", "use memo"],
        explanation: "useMemo runs the function only when a dependency changes; otherwise it returns the cached result."
      },
      {
        type: "identification",
        question: "Name the hook used to reach the DOM by attaching a ref to a JSX element.",
        answer: "useRef",
        acceptedAnswers: ["useref", "use ref"],
        explanation: "useRef's 'other job' is reaching the DOM — attach ref={...} and React fills .current with the node."
      },
      {
        type: "identification",
        question: "Name the React API that skips a child's re-render when its props are unchanged, comparing them by reference.",
        answer: "React.memo",
        acceptedAnswers: ["react.memo", "reactmemo", "memo"],
        explanation: "React.memo skips a re-render when props are unchanged — but a fresh function prop looks changed every time without useCallback."
      },
      {
        type: "identification",
        question: "In the useRef timer example (Timer.jsx), name the function called on intervalRef.current to stop the timer.",
        answer: "clearInterval",
        acceptedAnswers: ["clearinterval", "clearinterval(intervalref.current)"],
        explanation: "const stop = () => { clearInterval(intervalRef.current); }; — clearInterval stops the timer stored in the ref."
      },
      // --- ENUMERATION ---
      {
        type: "enumeration",
        question: "List all 3 hooks covered in this lecture.",
        answers: ["useMemo", "useCallback", "useRef"],
        minRequired: 3,
        explanation: "The three hooks: useMemo (cache a value), useCallback (cache a function), useRef (persist, no render)."
      },
      {
        type: "enumeration",
        question: "List the 3 reasons re-renders 'redo everything,' as given in the lecture.",
        answers: ["Recomputation", "New references", "Cascading renders"],
        minRequired: 3,
        explanation: "Recomputation (expensive calculations re-run), New references (objects/functions recreated), Cascading renders (new function props defeat memoized children)."
      },
      {
        type: "enumeration",
        question: "List the 4 lesson objectives from this React Hooks lecture.",
        answers: ["useMemo", "useCallback", "useRef", "When to use them"],
        minRequired: 4,
        explanation: "The 4 objectives: useMemo, useCallback, useRef, and recognizing when to use them (avoiding premature optimization)."
      }
    ]
  }
];
