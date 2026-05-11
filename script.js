// ========================================
// AI Tools Navigator - Data & Logic
// ========================================

// AI Tools Database
const toolsData = [
    // Writing Tools
    {
        id: 1,
        name: "ChatGPT",
        icon: "💬",
        category: "writing",
        categoryName: "Writing",
        description: "OpenAI's powerful language model for conversations, writing, and problem solving.",
        tags: ["Chat", "Writing", "Coding"],
        price: "Free tier available",
        badge: "freemium",
        featured: true,
        isNew: false,
        link: "https://chat.openai.com"
    },
    {
        id: 2,
        name: "Claude",
        icon: "🤖",
        category: "writing",
        categoryName: "Writing",
        description: "Anthropic's AI assistant focused on being helpful, harmless, and honest.",
        tags: ["Chat", "Writing", "Analysis"],
        price: "Free tier available",
        badge: "freemium",
        featured: true,
        isNew: false,
        link: "https://claude.ai"
    },
    {
        id: 3,
        name: "Gemini",
        icon: "✨",
        category: "writing",
        categoryName: "Writing",
        description: "Google's AI model with multimodal capabilities and deep Google integration.",
        tags: ["Chat", "Multimodal", "Research"],
        price: "Free",
        badge: "free",
        featured: false,
        isNew: true,
        link: "https://gemini.google.com"
    },
    {
        id: 4,
        name: "Perplexity",
        icon: "🔍",
        category: "writing",
        categoryName: "Writing",
        description: "AI-powered search engine with real-time web access and citations.",
        tags: ["Search", "Research", "Chat"],
        price: "Free tier available",
        badge: "freemium",
        featured: false,
        isNew: false,
        link: "https://perplexity.ai"
    },
    {
        id: 5,
        name: "Jasper",
        icon: "✍️",
        category: "writing",
        categoryName: "Writing",
        description: "AI writing assistant specialized in marketing copy and content creation.",
        tags: ["Writing", "Marketing", "SEO"],
        price: "Free trial",
        badge: "freemium",
        featured: false,
        isNew: false,
        link: "https://jasper.ai"
    },

    // Image Tools
    {
        id: 6,
        name: "DALL-E 3",
        icon: "🎨",
        category: "image",
        categoryName: "Image Generation",
        description: "OpenAI's latest image generation model with improved accuracy and detail.",
        tags: ["Image", "Art", "Design"],
        price: "Pay per use",
        badge: "freemium",
        featured: true,
        isNew: false,
        link: "https://openai.com/dall-e-3"
    },
    {
        id: 7,
        name: "Midjourney",
        icon: "🖼️",
        category: "image",
        categoryName: "Image Generation",
        description: "Create stunning artwork from text prompts with Discord-based interface.",
        tags: ["Image", "Art", "Design"],
        price: "Free tier available",
        badge: "freemium",
        featured: true,
        isNew: false,
        link: "https://midjourney.com"
    },
    {
        id: 8,
        name: "Stable Diffusion",
        icon: "🌌",
        category: "image",
        categoryName: "Image Generation",
        description: "Open-source image generation model that runs locally or on cloud.",
        tags: ["Image", "Open Source", "Local"],
        price: "Free",
        badge: "free",
        featured: false,
        isNew: false,
        link: "https://stability.ai"
    },
    {
        id: 9,
        name: "Adobe Firefly",
        icon: "🔥",
        category: "image",
        categoryName: "Image Generation",
        description: "Adobe's generative AI tools integrated with Photoshop and Creative Suite.",
        tags: ["Image", "Adobe", "Design"],
        price: "Free tier available",
        badge: "freemium",
        featured: false,
        isNew: true,
        link: "https://adobe.com/firefly"
    },
    {
        id: 10,
        name: "Canva AI",
        icon: "🎯",
        category: "image",
        categoryName: "Image Generation",
        description: "AI-powered design tools including image generation and background removal.",
        tags: ["Design", "Image", "Templates"],
        price: "Free tier available",
        badge: "freemium",
        featured: false,
        isNew: false,
        link: "https://canva.com"
    },

    // Video Tools
    {
        id: 11,
        name: "Runway",
        icon: "🎬",
        category: "video",
        categoryName: "Video Generation",
        description: "AI-powered video editing and generation platform with creative tools.",
        tags: ["Video", "Editing", "Generation"],
        price: "Free tier available",
        badge: "freemium",
        featured: true,
        isNew: false,
        link: "https://runwayml.com"
    },
    {
        id: 12,
        name: "Pika Labs",
        icon: "📽️",
        category: "video",
        categoryName: "Video Generation",
        description: "Text-to-video AI that creates engaging videos from text descriptions.",
        tags: ["Video", "Generation", "AI"],
        price: "Free tier available",
        badge: "freemium",
        featured: false,
        isNew: true,
        link: "https://pika.art"
    },
    {
        id: 13,
        name: "HeyGen",
        icon: "👤",
        category: "video",
        categoryName: "Video Generation",
        description: "Create AI-powered videos with virtual avatars and voiceovers.",
        tags: ["Video", "Avatar", "Marketing"],
        price: "Free tier available",
        badge: "freemium",
        featured: false,
        isNew: false,
        link: "https://heygen.com"
    },
    {
        id: 14,
        name: "Opus Clip",
        icon: "✂️",
        category: "video",
        categoryName: "Video Editing",
        description: "Transform long videos into viral shorts with AI-powered clipping.",
        tags: ["Video", "Shorts", "Social Media"],
        price: "Free tier available",
        badge: "freemium",
        featured: false,
        isNew: false,
        link: "https://opus.pro"
    },

    // Coding Tools
    {
        id: 15,
        name: "GitHub Copilot",
        icon: "💻",
        category: "coding",
        categoryName: "Coding Assistant",
        description: "AI pair programmer that suggests code completions and entire functions.",
        tags: ["Coding", "GitHub", "Productivity"],
        price: "Free for students",
        badge: "freemium",
        featured: true,
        isNew: false,
        link: "https://github.com/features/copilot"
    },
    {
        id: 16,
        name: "Cursor",
        icon: "📝",
        category: "coding",
        categoryName: "Coding Assistant",
        description: "AI-first code editor built for pair programming with LLMs.",
        tags: ["Coding", "Editor", "AI"],
        price: "Free tier available",
        badge: "freemium",
        featured: true,
        isNew: false,
        link: "https://cursor.sh"
    },
    {
        id: 17,
        name: "Replit Agent",
        icon: "🤖",
        category: "coding",
        categoryName: "Coding Assistant",
        description: "AI agent that builds full apps from descriptions - your mobile app builder.",
        tags: ["Coding", "Agent", "No-Code"],
        price: "Free tier available",
        badge: "freemium",
        featured: false,
        isNew: true,
        link: "https://replit.com"
    },
    {
        id: 18,
        name: "Codeium",
        icon: "⚡",
        category: "coding",
        categoryName: "Coding Assistant",
        description: "Free AI-powered code acceleration toolkit for developers.",
        tags: ["Coding", "Autocomplete", "Free"],
        price: "Free",
        badge: "free",
        featured: false,
        isNew: false,
        link: "https://codeium.com"
    },
    {
        id: 19,
        name: "Windsurf",
        icon: "🌊",
        category: "coding",
        categoryName: "Coding Assistant",
        description: "AI-first code editor with unique flow-based navigation.",
        tags: ["Coding", "Editor", "Productivity"],
        price: "Free tier available",
        badge: "freemium",
        featured: false,
        isNew: true,
        link: "https://windsurf.ai"
    },

    // Audio Tools
    {
        id: 20,
        name: "ElevenLabs",
        icon: "🎙️",
        category: "audio",
        categoryName: "Audio & Voice",
        description: "AI voice generation with realistic text-to-speech in 128 languages.",
        tags: ["Audio", "Voice", "TTS"],
        price: "Free tier available",
        badge: "freemium",
        featured: true,
        isNew: false,
        link: "https://elevenlabs.io"
    },
    {
        id: 21,
        name: "Murf AI",
        icon: "🎵",
        category: "audio",
        categoryName: "Audio & Voice",
        description: "Professional AI voice generator for videos, presentations, and e-learning.",
        tags: ["Audio", "Voice", "Professional"],
        price: "Free tier available",
        badge: "freemium",
        featured: false,
        isNew: false,
        link: "https://murf.ai"
    },
    {
        id: 22,
        name: "Suno",
        icon: "🎶",
        category: "audio",
        categoryName: "Audio & Music",
        description: "Create original songs with AI - just describe the music you want.",
        tags: ["Music", "Generation", "Creative"],
        price: "Free tier available",
        badge: "freemium",
        featured: true,
        isNew: false,
        link: "https://suno.ai"
    },

    // Productivity Tools
    {
        id: 23,
        name: "Notion AI",
        icon: "📓",
        category: "productivity",
        categoryName: "Productivity",
        description: "AI writing assistant integrated into Notion workspace.",
        tags: ["Productivity", "Notes", "Writing"],
        price: "Included in Notion",
        badge: "freemium",
        featured: false,
        isNew: false,
        link: "https://notion.so"
    },
    {
        id: 24,
        name: "Otter AI",
        icon: "🦦",
        category: "productivity",
        categoryName: "Productivity",
        description: "AI meeting assistant that transcribes, summarizes, and action items.",
        tags: ["Transcription", "Meetings", "Notes"],
        price: "Free tier available",
        badge: "freemium",
        featured: false,
        isNew: false,
        link: "https://otter.ai"
    },
    {
        id: 25,
        name: "Gamma",
        icon: "📊",
        category: "productivity",
        categoryName: "Productivity",
        description: "AI-powered presentation software - create decks from prompts.",
        tags: ["Presentation", "Slides", "AI"],
        price: "Free tier available",
        badge: "freemium",
        featured: true,
        isNew: false,
        link: "https://gamma.app"
    },
    {
        id: 26,
        name: "Napkin",
        icon: "💡",
        category: "productivity",
        categoryName: "Productivity",
        description: "Turn text into visual content - infographics from descriptions.",
        tags: ["Visual", "Infographic", "Content"],
        price: "Free",
        badge: "free",
        featured: false,
        isNew: true,
        link: "https://napkin.ai"
    }
];

// Categories with icons
const categories = [
    { name: "Writing", icon: "✍️", count: 5 },
    { name: "Image Generation", icon: "🎨", count: 5 },
    { name: "Video", icon: "🎬", count: 4 },
    { name: "Coding", icon: "💻", count: 5 },
    { name: "Audio & Music", icon: "🎵", count: 3 },
    { name: "Productivity", icon: "⚡", count: 4 }
];

// DOM Elements
const categoryGrid = document.getElementById('categoryGrid');
const featuredGrid = document.getElementById('featuredGrid');
const allToolsGrid = document.getElementById('allToolsGrid');
const newGrid = document.getElementById('newGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

// Render Categories
function renderCategories() {
    categoryGrid.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="scrollToSection('all-tools')">
            <div class="category-icon">${cat.icon}</div>
            <div class="category-name">${cat.name}</div>
            <div class="category-count">${cat.count} tools</div>
        </div>
    `).join('');
}

// Render Tool Card
function renderToolCard(tool) {
    const badgeClass = tool.badge === 'new' ? 'new' : (tool.badge === 'free' ? 'free' : 'freemium');
    const badgeText = tool.badge === 'freemium' ? 'Freemium' : (tool.badge === 'new' ? 'NEW' : 'Free');
    
    return `
        <div class="tool-card" data-category="${tool.category}">
            <div class="tool-image">
                ${tool.icon}
                <span class="tool-badge ${badgeClass}">${badgeText}</span>
            </div>
            <div class="tool-content">
                <div class="tool-category">${tool.categoryName}</div>
                <div class="tool-name">${tool.name}</div>
                <div class="tool-description">${tool.description}</div>
                <div class="tool-tags">
                    ${tool.tags.map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
                </div>
                <div class="tool-footer">
                    <span class="tool-price">${tool.price}</span>
                    <a href="${tool.link}" target="_blank" class="tool-link">Visit →</a>
                </div>
            </div>
        </div>
    `;
}

// Render Featured Tools
function renderFeaturedTools() {
    const featured = toolsData.filter(tool => tool.featured);
    featuredGrid.innerHTML = featured.map(renderToolCard).join('');
}

// Render All Tools
function renderAllTools(filter = 'all') {
    let tools = toolsData;
    
    if (filter !== 'all') {
        tools = toolsData.filter(tool => tool.category === filter);
    }
    
    allToolsGrid.innerHTML = tools.map(renderToolCard).join('');
}

// Render New Tools
function renderNewTools() {
    const newTools = toolsData.filter(tool => tool.isNew);
    newGrid.innerHTML = newTools.map(renderToolCard).join('');
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm.length < 2) {
        renderAllTools();
        return;
    }
    
    const filtered = toolsData.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm) ||
        tool.description.toLowerCase().includes(searchTerm) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    
    allToolsGrid.innerHTML = filtered.map(renderToolCard).join('');
});

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        renderAllTools(filter);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderFeaturedTools();
    renderAllTools();
    renderNewTools();
});
