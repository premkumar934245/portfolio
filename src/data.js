export const profile = {
  name: 'Prem Kumar S',
  email: 'premkumar2005msp@gmail.com',
  phone: '9342459906',
  location: 'Chennai, India',
  linkedin: 'https://www.linkedin.com/in/prem-kumar-790b137b1',
  github: 'https://github.com/',
  resume: '/resume_final.pdf',
}

export const skills = {
  Languages: ['Python', 'C', 'Java', 'JavaScript', 'HTML/CSS'],
  'AI / ML': ['Machine Learning', 'Deep Learning', 'PyTorch', 'CLIP', 'RAG', 'LLMs', 'Prompt Engineering', 'Semantic Search', 'Vector Databases', 'Ollama'],
  'Cloud & Tools': ['AWS Cloud Fundamentals', 'Git & GitHub', 'SQL'],
}

export const projects = [
  { title: 'Research Paper Analysis System using RAG', category: 'GenAI/LLM', description: 'An intelligent document retrieval and analysis system that extracts, summarizes, and contextualizes insights from research papers.', details: 'Semantic search and vector-based indexing let users query multi-document sources in natural language. The system turns a slow literature review into a focused conversation with source material.', features: ['Multi-document ingestion', 'Vector-based semantic search', 'Context-aware summaries'], challenge: 'Balancing retrieval relevance with concise answers across long, technical documents.', impact: '60% less manual review time', stack: ['Python', 'RAG', 'Vector DB', 'LLM', 'Embeddings'] },
  { title: 'Universal LLM-Powered Chatbot Integration Platform', category: 'GenAI/LLM', description: 'A multi-application chatbot framework integrating Slack, Teams, Discord, web, and mobile through a single backend.', details: 'Intelligent context-switching and platform-specific prompt engineering keep the experience natural across each channel while the backend stays consistent.', features: ['Five platform integrations', 'Shared backend architecture', 'Platform-aware prompting'], challenge: 'Preserving intent and tone while translating one conversation model across very different interfaces.', impact: '45% better accuracy · 70% faster integrations', stack: ['Python', 'LLM APIs', 'REST APIs', 'Prompt Engineering'] },
  { title: 'Integrated Medical Image Diagnostics & Chatbot', category: 'Computer Vision', description: 'Deep learning analysis of X-ray, CT, and MRI images paired with a healthcare chatbot and automated PDF clinical reports.', details: 'An end-to-end pipeline handles image processing, finding extraction, real-time patient Q&A, and downloadable clinical reports in one workflow.', features: ['Multi-modal image analysis', 'Patient Q&A chatbot', 'Automated PDF reports'], challenge: 'Designing a trustworthy user flow for complex predictions and keeping reporting fast.', impact: '92% accuracy · 70% faster reporting', stack: ['Python', 'Deep Learning', 'CNN', 'Chatbot', 'PDF Generation'] },
  { title: 'Privacy-First Local AI Text-to-SQL Pipeline', category: 'GenAI/LLM', description: 'Converts natural language questions into SQL using a local Ollama LLM, with no external cloud dependency.', details: 'The air-gapped, on-premise design supports data residency compliance and gives teams control over their most sensitive analytical workflows.', features: ['Local LLM inference', 'Natural language SQL', 'Air-gapped operation'], challenge: 'Improving query reliability with constrained local models and ambiguous user language.', impact: '100% data sovereignty · zero cloud cost', stack: ['Python', 'Ollama', 'SQL', 'Local LLM'] },
  { title: 'Satellite Image Detection Using CLIP Model', category: 'Computer Vision', description: 'Automatically detects and classifies objects and land areas in satellite images by converting images into feature vectors with CLIP.', details: 'A computer vision exploration using CLIP embeddings and PyTorch to understand how foundation models can transfer to geographic imagery.', features: ['CLIP feature vectors', 'Land-area classification', 'PyTorch experimentation'], challenge: 'Working with visual domain differences between general image pretraining and satellite imagery.', impact: 'Aug–Oct 2025 research project', stack: ['Python', 'CLIP', 'PyTorch', 'Computer Vision'] },
  { title: 'Creative Web Poster Showcase', category: 'Web', description: 'Responsive digital posters built with HTML and CSS, improving frontend and UI/UX skills.', details: 'A visual playground for building responsive compositions, practicing hierarchy, spacing, and interaction with lightweight frontend tools.', features: ['Responsive layouts', 'Visual hierarchy', 'Accessible HTML'], challenge: 'Keeping expressive poster layouts usable across small screens.', impact: 'Responsive frontend practice', stack: ['HTML', 'CSS', 'JavaScript'] },
]

export const certifications = [
  ['AWS Academy Graduate – Cloud Foundations', 'Aug 2025'], ['AWS Cloud Practitioner Essentials', 'Nov 2025'], ['Foundations and Core Concepts of PyTorch', 'Sep 2025'], ['LinkedIn Learning – Learning Frontend Development', 'Dec 2025'],
]

export const faqs = [
  ['Are you open to internships?', 'Yes. I am open to AI/ML, GenAI, computer vision, and cloud-focused internships and entry-level opportunities.'],
  ['What tech do you work with?', 'Python is my primary language. I also work with PyTorch, RAG, LLM APIs, Ollama, vector databases, SQL, AWS, and modern web fundamentals.'],
  ['Can you work remotely?', 'Yes. I am comfortable collaborating remotely and documenting work clearly across distributed teams.'],
]

export const testimonials = [
  ['Project collaborator', 'Prem brings a calm, structured approach to complex AI problems and stays curious until the system works end to end.', 'Collaborator'],
  ['Academic mentor', 'His strongest quality is turning a broad idea into a working prototype with a clear path toward production.', 'Mentor'],
  ['Team placeholder', 'A thoughtful builder who cares about both model performance and the person using the result.', 'Team member'],
]
