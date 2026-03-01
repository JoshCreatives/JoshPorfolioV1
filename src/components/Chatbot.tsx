import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Code, Palette, Video, Globe, Calendar, Mail, ExternalLink, Heart } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hi! I'm the Josh Creatives AI assistant. I can tell you all about our web development, WordPress, graphic design, and motion video editing services. Would you like to know more or commission a project?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for off-topic questions (love, life, philosophy, etc.)
    const offTopicKeywords = [
      'love', 'life', 'meaning', 'philosophy', 'universe', 'god', 'religion',
      'politics', 'weather', 'sports', 'game', 'movie', 'song', 'music',
      'food', 'recipe', 'travel', 'vacation', 'pet', 'animal', 'friend',
      'family', 'relationship', 'emotion', 'feeling', 'happiness', 'sad',
      'joke', 'funny', 'dance', 'party', 'sleep', 'dream', 'death'
    ];
    
    const isOffTopic = offTopicKeywords.some(keyword => lowerMessage.includes(keyword)) && 
                      !lowerMessage.includes('website') && 
                      !lowerMessage.includes('design') && 
                      !lowerMessage.includes('video') &&
                      !lowerMessage.includes('wordpress') &&
                      !lowerMessage.includes('project') &&
                      !lowerMessage.includes('price') &&
                      !lowerMessage.includes('cost');
    
    // Specific check for "what is love"
    if (lowerMessage.includes('what is love') || lowerMessage.includes('love')) {
      return "🥹 Aww that's a beautiful question! While I'd love to chat about life's mysteries, I'm actually here to tell you all about Josh Creatives! I can help with information about web development, design, video editing, or commissioning a project. Is there something creative I can help you with today? 💙";
    }

    // Off-topic response
    if (isOffTopic) {
      const offTopicResponses = [
        "😊 That's an interesting question! But I'm just a simple AI assistant here to talk about Josh Creatives. I can tell you about web development, design, video editing, or how to commission a project. What creative service are you interested in?",
        
        "🤗 I wish I could chat about everything, but my expertise is all about Josh Creatives! I can help with questions about websites, branding, video editing, or starting a project. What brings you here today?",
        
        "💭 Deep thoughts! While I enjoy them, I'm actually programmed to help with Josh Creatives info. Want to know about our web development, design services, or how to work together?",
        
        "✨ That's a great question for a philosopher! Me? I'm just here to talk about Josh Creatives and all things creative. Need help with a website, design project, or video?",
        
        "😂 You're funny! I wish I could answer that, but I'm a focused AI assistant for Josh Creatives. I can tell you about web development, WordPress, design, or video editing though!",
        
        "🥰 That's sweet! But let's get back to creativity - I can help with questions about Josh Creatives' services, pricing, or portfolio. What would you like to know?"
      ];
      
      return offTopicResponses[Math.floor(Math.random() * offTopicResponses.length)];
    }

    // Greetings
    if (lowerMessage.match(/^(hello|hi|hey|greetings|good morning|good afternoon|good evening)/)) {
      return "Hello there! 👋 I'm here to help you learn about Josh Creatives. We specialize in web development, WordPress, graphic design, and motion video editing. What creative project are you working on?";
    }

    // Commission / Hire / Work Together
    if (lowerMessage.includes('commission') || lowerMessage.includes('hire') || lowerMessage.includes('work together') || lowerMessage.includes('project') || lowerMessage.includes('collaborate') || lowerMessage.includes('quote') || lowerMessage.includes('estimate')) {
      return "🎨 **Ready to start a project?**\n\nI'd love to help! Here's how you can commission Josh Creatives:\n\n📧 **Email:** josh@joshcreatives.com\n📞 **Schedule a Call:** Click the button below\n💬 **Tell me about your project:** What do you need help with?\n\nI typically respond within 24 hours. Let's create something amazing together! ✨";
    }

    // Contact Information
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach') || lowerMessage.includes('message') || lowerMessage.includes('get in touch') || lowerMessage.includes('phone') || lowerMessage.includes('call')) {
      return "📬 **Contact Information**\n\nYou can reach Josh Creatives through:\n\n✉️ **Email:** josh@joshcreatives.com\n📅 **Schedule a Call:** Use the 'Commission Now' button below\n📍 **Location:** Pilaring, Pilar Surigao Del Norte\n🌍 **Available:** Worldwide remote\n\nI aim to respond to all inquiries within 24 hours. Looking forward to connecting with you!";
    }

    // Web Development
    if (lowerMessage.includes('web') || lowerMessage.includes('website') || lowerMessage.includes('development') || lowerMessage.includes('coding') || lowerMessage.includes('frontend') || lowerMessage.includes('backend')) {
      return "🌐 **Web Development Services**\n\nJosh Creatives builds modern, responsive websites using:\n• HTML5, CSS3, JavaScript\n• React and modern frameworks\n• Custom WordPress themes\n• E-commerce solutions\n• SEO optimization\n\nWe create fast, mobile-friendly websites that help businesses establish a strong online presence. Interested in a new website or revamping an existing one?";
    }

    // WordPress
    if (lowerMessage.includes('wordpress') || lowerMessage.includes('wp') || lowerMessage.includes('woocommerce') || lowerMessage.includes('elementor')) {
      return "🔷 **WordPress Expertise**\n\nJosh Creatives offers comprehensive WordPress services:\n• Custom theme development\n• Plugin customization\n• WooCommerce stores\n• Website maintenance\n• Speed optimization\n• Security updates\n\nWhether you need a blog, business site, or online store, we create powerful, easy-to-manage WordPress solutions. Have a WordPress project in mind?";
    }

    // Graphic Design
    if (lowerMessage.includes('graphic') || lowerMessage.includes('design') || lowerMessage.includes('logo') || lowerMessage.includes('branding') || lowerMessage.includes('illustration') || lowerMessage.includes('photoshop') || lowerMessage.includes('illustrator')) {
      return "🎨 **Graphic Design Services**\n\nJosh Creatives brings ideas to life through:\n• Logo design & brand identity\n• Business cards & stationery\n• Social media graphics\n• Marketing materials\n• Packaging design\n• Print collateral\n\nEvery design tells your brand's unique story. Need a new logo or complete branding package? Let's create something memorable!";
    }

    // Motion Video Editing
    if (lowerMessage.includes('video') || lowerMessage.includes('motion') || lowerMessage.includes('editor') || lowerMessage.includes('animation') || lowerMessage.includes('after effects') || lowerMessage.includes('premiere') || lowerMessage.includes('videography')) {
      return "🎬 **Motion Video Editing**\n\nProfessional video services include:\n• Promotional videos\n• Social media content\n• Motion graphics\n• 2D animation\n• Video post-production\n• Color grading\n• Sound design\n\nWe create engaging video content that captures attention and delivers your message effectively. Have footage that needs editing or want to create something from scratch?";
    }

    // Portfolio/Projects
    if (lowerMessage.includes('portfolio') || lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('sample') || lowerMessage.includes('example') || lowerMessage.includes('past work')) {
      return "📂 **Portfolio Highlights**\n\nJosh Creatives has worked on diverse projects including:\n• ArkDesign.nl - WordPress development\n• CODECHUM - Front-end development\n• SIIT Branding - Complete brand identity\n• SUYO Youth Organization - Event materials\n• Pilar Esports - Esports branding\n\nI'd be happy to discuss specific examples based on your needs! What type of project are you interested in?";
    }

    // Pricing/Cost
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rate') || lowerMessage.includes('how much') || lowerMessage.includes('pricing') || lowerMessage.includes('budget')) {
      return "💰 **Pricing Information**\n\nProject costs vary based on scope and requirements:\n• Websites: Custom quote based on features\n• Logo design: Starts at ₱3,000\n• Branding packages: Custom quote\n• Video editing: Starts at ₱2,000 per video\n• Maintenance plans: Monthly retainers available\n\nFor an accurate quote, please click the 'Commission Now' button below or send an email with your project details. Every project is unique!";
    }

    // Availability/Freelance
    if (lowerMessage.includes('available') || lowerMessage.includes('freelance') || lowerMessage.includes('book') || lowerMessage.includes('schedule')) {
      return "✅ **Yes, Available for Freelance!**\n\nJosh Creatives is currently accepting new projects. You can:\n• Click the 'Commission Now' button below\n• Send an email: josh@joshcreatives.com\n• View the portfolio for work samples\n\nI typically respond within 24 hours. What type of project would you like to discuss?";
    }

    // Turnaround Time
    if (lowerMessage.includes('how long') || lowerMessage.includes('timeline') || lowerMessage.includes('turnaround') || lowerMessage.includes('deadline') || lowerMessage.includes('when')) {
      return "⏱️ **Project Timelines**\n\nTypical turnaround times:\n• Logo design: 3-5 days\n• Website development: 2-4 weeks\n• Video editing: 3-7 days\n• Branding package: 1-2 weeks\n• WordPress setup: 1-2 weeks\n\nTimelines depend on project complexity and current workload. Rush projects may be available – just ask!";
    }

    // Services Overview
    if (lowerMessage.includes('service') || lowerMessage.includes('offer') || lowerMessage.includes('what do you do') || lowerMessage.includes('capabilities')) {
      return "✨ **Services Overview**\n\nJosh Creatives offers four main services:\n\n🌐 **Web Development** – Custom websites, responsive design\n🔷 **WordPress** – Themes, plugins, WooCommerce\n🎨 **Graphic Design** – Logos, branding, marketing materials\n🎬 **Motion Video** – Editing, animation, motion graphics\n\nAll services can be combined for complete brand solutions. Ready to start a project? Click 'Commission Now' below!";
    }

    // Location
    if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('based') || lowerMessage.includes('office') || lowerMessage.includes('surigao')) {
      return "📍 **Location**\n\nJosh Creatives is based in Pilaring, Pilar Surigao Del Norte, Philippines, but serves clients worldwide! We work remotely with clients from:\n• Philippines\n• United States\n• Australia\n• Singapore\n• Europe\n• And more!\n\nAll communication and project delivery is handled online, making it easy to collaborate regardless of location.";
    }

    // Payment Methods
    if (lowerMessage.includes('payment') || lowerMessage.includes('pay') || lowerMessage.includes('method') || lowerMessage.includes('bank') || lowerMessage.includes('gcash') || lowerMessage.includes('paypal')) {
      return "💳 **Payment Methods**\n\nWe accept various payment options:\n• Bank transfer (Philippines)\n• GCash\n• PayPal (international)\n• Credit/Debit cards\n\nTypically, projects require a 50% deposit to start, with the balance due upon completion. Payment plans may be available for larger projects.";
    }

    // Default response for other queries
    return "Thanks for your interest in Josh Creatives! 🤝\n\nI'm here to help with information about:\n• Web Development\n• WordPress Services\n• Graphic Design\n• Motion Video Editing\n• Pricing & Availability\n• Portfolio Examples\n\nWant to start a project? Click the 'Commission Now' button below! What creative service are you interested in?";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay based on response length
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    "What services do you offer?",
    "How much for a logo design?",
    "I want to commission a project",
    "Show me your portfolio",
    "Contact information",
    "How long does a website take?",
  ];

  // Function to handle commission button click
  const handleCommissionClick = () => {
    // You can customize this to open email, calendar, or both
    window.location.href = 'mailto:josh@joshcreatives.com?subject=Project%20Inquiry%20-%20Commission%20Request';
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-900 transition-all hover:scale-110 z-50 group border border-gray-800"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-x-4 bottom-4 md:inset-auto md:bottom-6 md:right-6 md:w-96 bg-black rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-800 overflow-hidden max-h-[85vh] md:max-h-[600px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-900 to-black text-white p-4 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Josh Creatives AI</h3>
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Online • Here to help!
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-gray-800 p-2 rounded-full transition-colors text-gray-400 hover:text-white z-20"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Service Tags */}
            <div className="flex flex-wrap gap-1 mt-3">
              <span className="bg-gray-800 text-xs px-2 py-1 rounded-full flex items-center gap-1 text-gray-300">
                <Code className="w-3 h-3" /> Web
              </span>
              <span className="bg-gray-800 text-xs px-2 py-1 rounded-full flex items-center gap-1 text-gray-300">
                <Globe className="w-3 h-3" /> WordPress
              </span>
              <span className="bg-gray-800 text-xs px-2 py-1 rounded-full flex items-center gap-1 text-gray-300">
                <Palette className="w-3 h-3" /> Design
              </span>
              <span className="bg-gray-800 text-xs px-2 py-1 rounded-full flex items-center gap-1 text-gray-300">
                <Video className="w-3 h-3" /> Video
              </span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-950 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0 shadow-md border border-gray-700">
                    JC
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.sender === 'user'
                      ? 'bg-gray-800 text-white rounded-br-none border border-gray-700'
                      : 'bg-gray-900 text-gray-200 shadow-sm rounded-bl-none border border-gray-800'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
                  <span
                    className={`text-xs mt-1.5 block ${
                      message.sender === 'user' ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center text-white text-xs font-bold mr-2 shadow-md border border-gray-700">
                  JC
                </div>
                <div className="bg-gray-900 text-gray-200 rounded-2xl rounded-bl-none p-4 shadow-sm border border-gray-800">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions - Shows when conversation is new */}
          {messages.length < 3 && (
            <div className="px-4 py-3 border-t border-gray-800 bg-black">
              <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Suggested questions:
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInputValue(question);
                      handleSend();
                    }}
                    className="text-xs bg-gray-900 hover:bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full transition-colors border border-gray-700"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Commission Button */}
          <div className="px-4 pt-2 bg-black">
            <button
              onClick={handleCommissionClick}
              className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 rounded-lg text-sm font-medium hover:from-gray-700 hover:to-gray-800 transition-all flex items-center justify-center gap-2 border border-gray-700 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              Commission Now - Let's Work Together!
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-800 bg-black">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about services, pricing, portfolio..."
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent text-sm text-white placeholder-gray-500"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 border border-gray-700"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-600 text-center mt-2">
              💬 Ask me anything about Josh Creatives!
            </p>
          </div>
        </div>
      )}
    </>
  );
}