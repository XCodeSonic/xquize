export const quizzes = [
  {
    id: "unit1",
    title: "Distributed Database System",
    subtitle: "Module 3, Unit 1",
    emoji: "🌐",
    color: "#0A84FF",
    week: "Week 10",
    description: "Test your knowledge on distributed databases, replication, fragmentation, and concurrency.",
    questions: [
      // MULTIPLE CHOICE
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
        question: "Which type of distributed database uses the SAME DBMS at all sites?",
        options: ["Heterogeneous", "Federated", "Homogeneous", "Unfederated"],
        answer: 2,
        explanation: "Homogeneous distributed databases use the same DBMS at all sites, while heterogeneous ones use different DBMS at different sites."
      },
      {
        type: "multiple_choice",
        question: "Which of the following is a real-world use case of distributed databases?",
        options: [
          "A single-user desktop application",
          "PayPal's global payment processing",
          "A local library catalog",
          "A personal diary application"
        ],
        answer: 1,
        explanation: "PayPal is a global payment platform requiring real-time transaction processing and data synchronization across multiple systems."
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
        question: "Which company uses distributed databases to handle massive real-time data for streaming?",
        options: ["Microsoft Word", "Netflix", "Adobe Photoshop", "Oracle Forms"],
        answer: 1,
        explanation: "Netflix uses distributed databases to handle massive real-time data storage and retrieval, ensuring smooth viewing experiences worldwide."
      },
      // IDENTIFICATION
      {
        type: "identification",
        question: "This type of distributed database allows different DBMS at different sites.",
        answer: "Heterogeneous",
        acceptedAnswers: ["heterogeneous", "heterogeneous distributed database"],
        explanation: "Heterogeneous distributed databases allow different DBMS software to be used at different physical locations."
      },
      {
        type: "identification",
        question: "Name the process of copying data to multiple sites in a distributed database.",
        answer: "Replication",
        acceptedAnswers: ["replication", "data replication"],
        explanation: "Replication is the process of storing copies of data at multiple sites to improve availability and performance."
      },
      {
        type: "identification",
        question: "What is the term for splitting a relation/table into pieces stored at different sites?",
        answer: "Fragmentation",
        acceptedAnswers: ["fragmentation", "data fragmentation"],
        explanation: "Fragmentation involves splitting a relation into fragments stored at different sites, either horizontally or vertically."
      },
      {
        type: "identification",
        question: "This cloud provider offers distributed database services across multiple global regions.",
        answer: "Google Cloud",
        acceptedAnswers: ["google cloud", "google cloud platform", "gcp"],
        explanation: "Google Cloud offers distributed databases for data storage and management across multiple regions globally."
      },
      // ENUMERATION
      {
        type: "enumeration",
        question: "List the 4 types of distributed databases mentioned in the lecture.",
        answers: ["Homogeneous", "Autonomous", "Non-autonomous", "Heterogeneous", "Federated", "Unfederated"],
        minRequired: 4,
        explanation: "The types include: Homogeneous, Autonomous, Non-autonomous (under Homogeneous), Heterogeneous, Federated, and Unfederated (under Heterogeneous)."
      },
      {
        type: "enumeration",
        question: "Name 3 real-world companies from the lecture that use distributed databases for global operations.",
        answers: ["McDonald's", "Coca-Cola", "Amazon Web Services", "AWS", "Google Cloud", "PayPal", "Netflix"],
        minRequired: 3,
        explanation: "Companies include McDonald's, Coca-Cola, Amazon Web Services (AWS), Google Cloud, PayPal, and Netflix."
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
    description: "Explore network database models, temporal, spatial, and multimedia databases.",
    questions: [
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
        question: "What type of relationships does the Network Database Model support?",
        options: [
          "Only one-to-one relationships",
          "Only one-to-many relationships",
          "Many-to-many relationships",
          "Only hierarchical relationships"
        ],
        answer: 2,
        explanation: "The Network Database Model supports many-to-many relationships, which is one of its key advantages over hierarchical models."
      },
      {
        type: "multiple_choice",
        question: "In the Network Model, if a Student has TWO parents (CSE Department and Library), what does this represent?",
        options: [
          "An error in the database design",
          "A one-to-one relationship",
          "A many-to-many relationship where an entity can have multiple parent owners",
          "A hierarchical structure"
        ],
        answer: 2,
        explanation: "This demonstrates the network model's ability to support multiple parent-child relationships, allowing an entity like Student to belong to multiple parent entities."
      },
      {
        type: "multiple_choice",
        question: "Which is a DISADVANTAGE of the Network Database Model?",
        options: [
          "It doesn't support many-to-many relationships",
          "No scope for automated query optimization",
          "It cannot avoid data redundancy",
          "Data retrieval is very slow"
        ],
        answer: 1,
        explanation: "There is no scope for any automated query optimization in the network database model, and navigation requires using pointers."
      },
      {
        type: "multiple_choice",
        question: "Which enhanced database model is best suited for GPS and location-based applications?",
        options: ["Temporal Database", "Network Database", "Spatial Database", "Multimedia Database"],
        answer: 2,
        explanation: "Spatial Databases are designed to store and query data related to objects defined in a geometric space, making them ideal for GPS and GIS applications."
      },
      {
        type: "identification",
        question: "What is the name for the structure in the Network Model where one entity is the prime owner and others are dependent?",
        answer: "Network Model",
        acceptedAnswers: ["network model", "network database model", "graph structure"],
        explanation: "In the network model, ONE is the prime owner and the rest of the members (like FIVE having two owners TWO and THREE) are dependent on it."
      },
      {
        type: "identification",
        question: "This enhanced relational model stores data that changes over time, tracking historical versions.",
        answer: "Temporal Database",
        acceptedAnswers: ["temporal database", "temporal databases", "temporal"],
        explanation: "Temporal Databases store time-varying data and maintain historical records, allowing queries about past states."
      },
      {
        type: "identification",
        question: "This database type is designed to handle images, audio, and video data.",
        answer: "Multimedia Database",
        acceptedAnswers: ["multimedia database", "multimedia databases", "multimedia"],
        explanation: "Multimedia Databases are designed to store, manage, and retrieve complex data types like images, audio, video, and animations."
      },
      {
        type: "enumeration",
        question: "List 4 advantages of the Network Database Model.",
        answers: [
          "Simple and easy-to-construct hierarchical model",
          "Supports 1:1, 1:M, M:N relationships",
          "Multiple paths to the same record",
          "Data integrity",
          "Faster data retrieval",
          "Changes in parent reflected in children"
        ],
        minRequired: 4,
        explanation: "Advantages: simple construction, supports multiple relationship types, multiple paths reduce redundancy, data integrity, fast retrieval, and parent-child cascading."
      },
      {
        type: "enumeration",
        question: "Name the 3 enhanced relational database models discussed (besides the network model).",
        answers: ["Temporal Database", "Spatial Database", "Multimedia Database"],
        minRequired: 3,
        explanation: "The three enhanced relational models are Temporal Databases, Spatial Databases, and Multimedia Databases."
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
    description: "Learn about OODBs, encapsulation, inheritance, polymorphism, and OQL.",
    questions: [
      {
        type: "multiple_choice",
        question: "What does an Object-Oriented Database store instead of relational data?",
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
        question: "Which query language is used in Object-Oriented Databases?",
        options: ["SQL", "XQuery", "OQL (Object Query Language)", "SPARQL"],
        answer: 2,
        explanation: "OQL (Object Query Language) is used to query Object-Oriented Databases, enabling complex queries on object attributes and methods."
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
        question: "Which of the following is a popular ORM framework?",
        options: ["Apache Kafka", "Hibernate", "Redis", "Elasticsearch"],
        answer: 1,
        explanation: "Hibernate is one of the popular ORM frameworks, along with Django ORM and Entity Framework."
      },
      {
        type: "identification",
        question: "This OOP concept combines data and methods into a single unit in an OODB.",
        answer: "Encapsulation",
        acceptedAnswers: ["encapsulation"],
        explanation: "Encapsulation combines data and methods into a single unit (object), hiding internal implementation details."
      },
      {
        type: "identification",
        question: "This OODB feature gives each object a unique identifier.",
        answer: "Object Identity",
        acceptedAnswers: ["object identity", "object identifier", "oid"],
        explanation: "Object Identity ensures each object has a unique identifier (OID), independent of its attribute values."
      },
      {
        type: "identification",
        question: "This OOP principle enables reusability and hierarchical relationships in OODBs.",
        answer: "Inheritance",
        acceptedAnswers: ["inheritance"],
        explanation: "Inheritance enables reusability by allowing classes to derive properties and methods from parent classes, forming hierarchical relationships."
      },
      {
        type: "enumeration",
        question: "List 3 real-world applications of Object-Oriented Databases from the lecture.",
        answers: [
          "Computer-Aided Design (CAD)",
          "CAD systems",
          "Geographic Information Systems (GIS)",
          "GIS",
          "Multimedia data management",
          "Scientific data management"
        ],
        minRequired: 3,
        explanation: "Applications include CAD systems, Geographic Information Systems (GIS), and Multimedia/Scientific data management."
      },
      {
        type: "enumeration",
        question: "Name 3 disadvantages of Object-Oriented Databases.",
        answers: [
          "Complexity in design and implementation",
          "Limited standardization",
          "Requires specialized skills",
          "Higher learning curve",
          "Performance overhead",
          "Compatibility issues with relational systems"
        ],
        minRequired: 3,
        explanation: "Disadvantages: complexity in design, limited standardization vs relational DBs, requires specialized OOP skills, higher learning curve, performance overhead, and compatibility issues."
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
    description: "Understand XML structure, XPath, XQuery, and XML integration with databases.",
    questions: [
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
        question: "What is XPath used for in XML databases?",
        options: [
          "Creating XML schemas",
          "Locating and retrieving parts of an XML document",
          "Transforming XML to HTML",
          "Encrypting XML data"
        ],
        answer: 1,
        explanation: "XPath navigates XML documents using paths and supports predicates for filtering data. Example: /bookstore/book[price>30]"
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
        question: "What is a key DISADVANTAGE of XML in databases?",
        options: [
          "Not human-readable",
          "Inefficient for large datasets compared to relational tables",
          "Cannot represent hierarchical data",
          "Not widely used in web services"
        ],
        answer: 1,
        explanation: "XML is inefficient for large datasets compared to relational tables, and parsing/querying XML documents can be resource-intensive."
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
        explanation: "JSON is lightweight and faster for simple data exchange, while XML is more suitable for complex, hierarchical data."
      },
      {
        type: "identification",
        question: "This XML standard defines the structure and rules for XML documents, ensuring data consistency.",
        answer: "XML Schema",
        acceptedAnswers: ["xml schema", "xml schema definition", "xsd"],
        explanation: "XML Schema defines the structure and rules for XML documents and validates XML documents to ensure data consistency."
      },
      {
        type: "identification",
        question: "This language is the standard for querying and transforming XML documents.",
        answer: "XQuery",
        acceptedAnswers: ["xquery", "x query"],
        explanation: "XQuery is a powerful language for querying and transforming XML data, supporting FLWOR expressions."
      },
      {
        type: "identification",
        question: "Name the emerging alternative to XML for lightweight data exchange mentioned in the lecture.",
        answer: "JSON",
        acceptedAnswers: ["json", "javascript object notation"],
        explanation: "JSON (JavaScript Object Notation) is being used as a lightweight alternative to XML for data exchange, especially in APIs."
      },
      {
        type: "enumeration",
        question: "List 3 applications of XML in databases mentioned in the lecture.",
        answers: [
          "Web services and APIs",
          "Configuration files",
          "Metadata storage",
          "Content management systems",
          "Data exchange"
        ],
        minRequired: 3,
        explanation: "XML applications include: web services/APIs for data exchange, configuration files for software applications, and metadata storage in content management systems."
      },
      {
        type: "enumeration",
        question: "Name the 3 ways to query XML data discussed in the lecture.",
        answers: ["XQuery", "XPath", "SQL/XML"],
        minRequired: 3,
        explanation: "The three XML query methods are: XQuery (standard XML query language), XPath (path navigation), and SQL/XML (SQL extension for XML)."
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
    description: "Discover data warehousing fundamentals, ETL process, schemas, and OLAP.",
    questions: [
      {
        type: "multiple_choice",
        question: "What is the primary purpose of a Data Warehouse?",
        options: [
          "To process real-time transactions",
          "Reporting and analyzing data to support decision-making",
          "To store backup copies of operational databases",
          "To run web applications"
        ],
        answer: 1,
        explanation: "A Data Warehouse is a system for reporting and analyzing data that integrates data from multiple sources to support decision-making processes."
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
        explanation: "ETL stands for Extract, Transform, and Load — the process of moving data from source systems into a data warehouse."
      },
      {
        type: "multiple_choice",
        question: "In a Star Schema, what is the CENTRAL table called?",
        options: ["Dimension Table", "Snowflake Table", "Fact Table", "Aggregate Table"],
        answer: 2,
        explanation: "In a Star Schema, the Fact Table is the central table containing measures, surrounded by Dimension Tables with descriptive attributes."
      },
      {
        type: "multiple_choice",
        question: "What is the Snowflake Schema?",
        options: [
          "A schema used only for cloud databases",
          "A normalized version of the star schema with further normalized dimension tables",
          "A schema for time-series data",
          "A schema that stores only aggregated data"
        ],
        answer: 1,
        explanation: "The Snowflake Schema is a normalized version of the Star Schema where dimension tables are further normalized, reducing redundancy but adding complexity."
      },
      {
        type: "multiple_choice",
        question: "Which layer in a Data Warehouse handles reporting and visualization?",
        options: [
          "ETL Process",
          "Data Sources",
          "Data Storage",
          "Presentation Layer (OLAP)"
        ],
        answer: 3,
        explanation: "The Presentation Layer uses OLAP (Online Analytical Processing) tools for reporting and visualization of warehouse data."
      },
      {
        type: "multiple_choice",
        question: "Which emerging trend in data warehousing uses AI for analysis and prediction?",
        options: [
          "Manual data entry automation",
          "AI-driven analytics and predictive modeling",
          "Paper-based reporting",
          "Single-server consolidation"
        ],
        answer: 1,
        explanation: "AI-driven analytics and predictive modeling is an emerging trend, along with cloud-based warehousing and big data platform integration."
      },
      {
        type: "identification",
        question: "This big data platform is mentioned as integrating with modern data warehouses.",
        answer: "Hadoop",
        acceptedAnswers: ["hadoop", "apache hadoop"],
        explanation: "Hadoop is mentioned as a big data platform that integrates with modern data warehouses for handling large-scale data processing."
      },
      {
        type: "identification",
        question: "What is a Data Mart in the context of data warehousing?",
        answer: "Data Mart",
        acceptedAnswers: ["data mart", "a subset of a data warehouse", "subset of data warehouse"],
        explanation: "A Data Mart is a subset of a data warehouse focused on a specific business function or department."
      },
      {
        type: "identification",
        question: "This component of the data warehouse consists of operational systems and external sources.",
        answer: "Data Sources",
        acceptedAnswers: ["data sources", "data source"],
        explanation: "Data Sources are the operational systems and external sources from which data is extracted during the ETL process."
      },
      {
        type: "enumeration",
        question: "Name all 4 components of a Data Warehouse mentioned in the lecture.",
        answers: ["Data Sources", "ETL Process", "Data Storage", "Presentation Layer", "OLAP"],
        minRequired: 4,
        explanation: "The 4 components are: Data Sources (operational/external), ETL Process (extract/transform/load), Data Storage (central repository), and Presentation Layer (OLAP tools)."
      },
      {
        type: "enumeration",
        question: "List 3 emerging trends in Data Warehousing from the lecture.",
        answers: [
          "Cloud-based data warehousing",
          "Integration with big data platforms",
          "Hadoop integration",
          "AI-driven analytics",
          "Predictive modeling"
        ],
        minRequired: 3,
        explanation: "Emerging trends: cloud-based data warehousing for scalability, integration with big data platforms like Hadoop, and AI-driven analytics and predictive modeling."
      }
    ]
  }
];
