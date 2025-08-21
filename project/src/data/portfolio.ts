import { Skill, Experience, Project, Achievement, BlogPost, ChatMessage } from '../types';

export const skills: Skill[] = [
  { name: 'Python', percentage: 80 },
  { name: 'Bash/Shell', percentage: 75 },
  { name: 'AWS', percentage: 85 },
  { name: 'Kubernetes', percentage: 78 },
  { name: 'Terraform', percentage: 82 },
  { name: 'Azure', percentage: 70 },
  { name: 'SQL', percentage: 70 },
  { name: 'Web Development', percentage: 72 },
];

export const experiences: Experience[] = [
  {
    company: 'Rackspace Technology',
    position: 'DevOps Engineer',
    location: 'Remote, USA',
    duration: 'Jul 2024 – Present',
    description: [
      'Architected and deployed cloud-native applications on AWS and Azure using Kubernetes, reducing deployment time by 45%',
      'Implemented comprehensive monitoring and alerting with Datadog and ELK stack, achieving 40% reduction in MTTR',
      'Optimized cloud infrastructure costs by 25% through automated resource scaling and right-sizing strategies',
      'Led migration of legacy applications to containerized microservices architecture'
    ],
    technologies: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'Jenkins', 'Datadog', 'ELK Stack', 'Docker']
  },
  {
    company: 'Accenture',
    position: 'Cloud & DevOps Engineer',
    location: 'India',
    duration: 'Jun 2020 – Dec 2022',
    description: [
      'Standardized infrastructure deployment across 15+ projects using Terraform and Ansible',
      'Built end-to-end CI/CD pipelines with Jenkins, GitLab CI, and GitHub Actions for automated testing and deployment',
      'Managed multi-cloud environments ensuring 99.9% uptime and compliance with security standards',
      'Mentored junior engineers on DevOps best practices and cloud architecture patterns'
    ],
    technologies: ['AWS', 'Azure', 'Terraform', 'Ansible', 'Jenkins', 'GitLab CI', 'GitHub Actions', 'SonarQube']
  }
];

export const projects: Project[] = [
  {
    title: 'CI/CD Automation & Kubernetes Platform',
    description: 'Unified pipelines with Docker+Terraform deployment to EKS/AKS, comprehensive observability, and DevSecOps integration achieving 99% compliance.',
    technologies: ['Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'AWS EKS', 'Azure AKS', 'Prometheus', 'Grafana']
  },
  {
    title: 'Serverless Web Application',
    description: 'High-performance serverless architecture using AWS Lambda, API Gateway, and DynamoDB with optimized UX and low-latency CRUD operations.',
    technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'CloudFront', 'Python']
  },
  {
    title: 'Data Analytics Platform',
    description: 'Scalable data processing platform with Spark and Elasticsearch on AWS, featuring Terraform infrastructure and Grafana dashboards. Reduced processing time by 40%.',
    technologies: ['Apache Spark', 'Elasticsearch', 'AWS EMR', 'Terraform', 'Grafana', 'Python']
  },
  {
    title: 'Ride-Booking Database System',
    description: 'Comprehensive MySQL database design with normalized schema, ERD documentation, optimized indexes, and advanced analytics queries.',
    technologies: ['MySQL', 'Database Design', 'SQL', 'Analytics'],
    link: 'https://github.com/tejavardhann/DBMS-'
  },
  {
    title: 'End-to-End Azure Data Engineering',
    description: 'Complete data pipeline solution using Azure Data Factory for ingestion, Databricks for transformation, and Power BI for visualization.',
    technologies: ['Azure Data Factory', 'Databricks', 'Power BI', 'Azure Storage', 'Python'],
    link: 'https://github.com/tejavardhann/End-to-End-Azure-Data-Engineering'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Modern, responsive portfolio built with Next.js, Tailwind CSS, and Framer Motion animations, deployed on Vercel.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'TypeScript'],
    link: 'https://github.com/tejavardhann/tejavardhan-portfolio'
  }
];

export const achievements: Achievement[] = [
  {
    metric: '↓45%',
    description: 'deployment time with Jenkins/GitLab/GitHub Actions',
    icon: 'Clock'
  },
  {
    metric: '↓40%',
    description: 'MTTR with Datadog + ELK monitoring',
    icon: 'TrendingDown'
  },
  {
    metric: '↓25%',
    description: 'cloud cost through optimization',
    icon: 'DollarSign'
  },
  {
    metric: '15+',
    description: 'projects standardized with Terraform/Ansible',
    icon: 'CheckCircle'
  }
];

export const blogPosts: BlogPost[] = [
  {
    title: 'Optimizing Kubernetes Workloads for Cost and Performance',
    excerpt: 'Deep dive into resource optimization strategies for containerized applications in production environments.',
    date: '2024-11-15',
    url: 'https://medium.com/@reddytejvardhan'
  },
  {
    title: 'Multi-Cloud DevOps: Lessons from AWS and Azure',
    excerpt: 'Best practices and challenges when managing infrastructure across multiple cloud providers.',
    date: '2024-10-28',
    url: 'https://medium.com/@reddytejvardhan'
  },
  {
    title: 'Infrastructure as Code: Beyond the Basics',
    excerpt: 'Advanced Terraform patterns and strategies for scalable, maintainable infrastructure.',
    date: '2024-10-12',
    url: 'https://medium.com/@reddytejvardhan'
  }
];

export const chatbotQA: ChatMessage[] = [
  {
    question: 'Where did you study?',
    answer: 'M.S. in Computer Science at the University of Memphis (Jan 2023 – Dec 2024).'
  },
  {
    question: "What's your experience?",
    answer: '3+ years in DevOps at Rackspace Technology and Accenture, specializing in AWS, Azure, Kubernetes, and automation.'
  },
  {
    question: 'What skills do you have?',
    answer: 'AWS, Azure, Kubernetes, Terraform, Jenkins, GitHub Actions, Datadog, ELK Stack, Python, and comprehensive DevOps toolchain expertise.'
  },
  {
    question: 'How can I contact you?',
    answer: 'Email: reddytejavardhan@gmail.com, Phone: +1 (901) 645-2738, or connect on LinkedIn!'
  },
  {
    question: 'What certifications do you have?',
    answer: 'Microsoft Certified: Azure Data Engineer Associate and AWS Certified Solutions Architect.'
  },
  {
    question: 'What are your biggest achievements?',
    answer: 'Reduced deployment time by 45%, cut MTTR by 40%, optimized cloud costs by 25%, and standardized 15+ projects with IaC.'
  }
];

export const techBadges = [
  'AWS', 'Azure', 'Terraform', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Datadog', 'ELK Stack'
];

export const skillCategories = [
  {
    category: 'Cloud Platforms',
    skills: ['AWS', 'Azure']
  },
  {
    category: 'Infrastructure & Automation',
    skills: ['Terraform', 'CloudFormation', 'Ansible', 'Python', 'Bash']
  },
  {
    category: 'CI/CD & DevOps',
    skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'SonarQube', 'Argo CD']
  },
  {
    category: 'Containers & Orchestration',
    skills: ['Docker', 'Kubernetes', 'EKS', 'AKS']
  },
  {
    category: 'Databases & Storage',
    skills: ['RDS', 'MySQL', 'PostgreSQL', 'Elasticsearch', 'Redis']
  },
  {
    category: 'Monitoring & Observability',
    skills: ['Datadog', 'ELK Stack', 'Prometheus', 'Grafana', 'CloudWatch']
  },
  {
    category: 'Security & Compliance',
    skills: ['IAM', 'Secrets Management', 'Vulnerability Scanning', 'Compliance']
  }
];