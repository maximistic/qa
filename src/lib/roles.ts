export type RoleSlug = 'system-integrator' | 'business-analyst' | 'data-analyst' | 'data-engineer';

export interface Role {
  name: string;
  description: string;
  slug: RoleSlug;
  roleQs: string[];
  roleQSdesc: string[];
  questions: string[];
}

export const roles: Role[] = [
  {
    name: "System Integrator",
    description: "Connect and coordinate different systems and applications to work seamlessly together.",
    slug: "system-integrator",
    roleQs:["Data Source Integration", "Data Mapping & Transformation", "Metadata & Schema Management", "Data Quality & Validation"],
    roleQSdesc:["Connect and integrate various data sources into a unified system.",
      "Map and transform data between different systems and formats.",
      "Manage metadata and schema definitions across integrated systems.",
      "Ensure data quality and validate data across integrated systems."
    ],
    questions: [
      "What systems do you need to integrate?",
      "Do you require real-time sync?",
      "What are your data security concerns?",
      "Any legacy systems involved?",
    ],
  },
  {
    name: "Business Analyst",
    description: "Analyze business processes and requirements to build data-backed insights.",
    slug: "business-analyst",
    roleQs:["Data Source Integration", "Data Mapping & Transformation", "Metadata & Schema Management", "Data Quality & Validation"],
    roleQSdesc:["Connect and integrate various data sources into a unified system.",
      "Map and transform data between different systems and formats.",
      "Manage metadata and schema definitions across integrated systems.",
      "Ensure data quality and validate data across integrated systems."
    ],
    questions: [
      "What is the primary business goal?",
      "Who are the stakeholders?",
      "What tools are in use?",
      "Key KPIs to track?",
    ],
  },
  {
    name: "Data Analyst",
    description: "Extract insights from data to inform business decisions and strategy.",
    slug: "data-analyst",
    roleQs:["Data Source Integration", "Data Mapping & Transformation", "Metadata & Schema Management", "Data Quality & Validation"],
    roleQSdesc:["Connect and integrate various data sources into a unified system.",
      "Map and transform data between different systems and formats.",
      "Manage metadata and schema definitions across integrated systems.",
      "Ensure data quality and validate data across integrated systems."
    ],
    questions: [
      "What data sources do you use?",
      "What dashboards are needed?",
      "Preferred BI tools?",
      "How frequent is reporting?",
    ],
  },
  {
    name: "Data Engineer",
    description: "Build and maintain data pipelines to ensure efficient data processing and storage.",
    slug: "data-engineer",
    roleQs:["Data Source Integration", "Data Mapping & Transformation", "Metadata & Schema Management", "Data Quality & Validation"],
    roleQSdesc:["Connect and integrate various data sources into a unified system.",
      "Map and transform data between different systems and formats.",
      "Manage metadata and schema definitions across integrated systems.",
      "Ensure data quality and validate data across integrated systems."
    ],
    questions: [
      "What is the data volume?",
      "Preferred cloud platform?",
      "Latency requirements?",
      "Any stream processing needed?",
    ],
  },
];