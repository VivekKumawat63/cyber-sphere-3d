import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Search,
  Mail,
  BookOpen,
  Shield,
  Code,
  Cloud,
  TrendingUp
} from 'lucide-react';

const Blog: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive our latest cybersecurity insights.",
    });
    
    setEmail('');
    setIsSubscribing(false);
  };

  const featuredPost = {
    id: 1,
    title: "The Future of AI in Cybersecurity: Opportunities and Threats",
    excerpt: "Explore how artificial intelligence is revolutionizing cybersecurity defense mechanisms while simultaneously creating new attack vectors that security professionals must understand.",
    content: "Artificial Intelligence has become the double-edged sword of cybersecurity...",
    author: "Dr. Sarah Chen",
    role: "Lead Security Researcher",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI Security",
    image: "/api/placeholder/800/400",
    tags: ["AI", "Machine Learning", "Threat Detection", "Future Tech"]
  };

  const blogPosts = [
    {
      id: 2,
      title: "Zero Trust Architecture: Implementation Strategies for 2024",
      excerpt: "Learn how to implement Zero Trust security model in your organization with practical steps and real-world examples.",
      author: "Michael Rodriguez",
      role: "Security Architect",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Security Architecture",
      image: "/api/placeholder/400/250",
      tags: ["Zero Trust", "Network Security", "Implementation"]
    },
    {
      id: 3,
      title: "Cloud Security Misconfigurations: Top 10 Risks and Solutions",
      excerpt: "Discover the most common cloud security mistakes and how to avoid them in AWS, Azure, and GCP environments.",
      author: "Emily Zhang",
      role: "Cloud Security Expert",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Cloud Security",
      image: "/api/placeholder/400/250",
      tags: ["Cloud", "AWS", "Azure", "GCP", "Misconfiguration"]
    },
    {
      id: 4,
      title: "Ethical Hacking Career Path: From Beginner to Expert",
      excerpt: "Complete guide to building a successful career in ethical hacking with certification roadmaps and skill requirements.",
      author: "David Kim",
      role: "Senior Penetration Tester",
      date: "2024-01-08",
      readTime: "5 min read",
      category: "Career Development",
      image: "/api/placeholder/400/250",
      tags: ["Ethical Hacking", "Career", "Certification", "Skills"]
    },
    {
      id: 5,
      title: "Ransomware Trends 2024: Evolution of Attack Vectors",
      excerpt: "Analyze the latest ransomware attack patterns and learn advanced prevention and response strategies.",
      author: "Lisa Thompson",
      role: "Malware Analyst",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Threat Intelligence",
      image: "/api/placeholder/400/250",
      tags: ["Ransomware", "Malware", "Threat Analysis", "Incident Response"]
    },
    {
      id: 6,
      title: "DevSecOps Integration: Security in CI/CD Pipelines",
      excerpt: "Best practices for integrating security testing and monitoring into your development workflow.",
      author: "Alex Chen",
      role: "DevSecOps Engineer",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "DevSecOps",
      image: "/api/placeholder/400/250",
      tags: ["DevSecOps", "CI/CD", "Security Testing", "Automation"]
    }
  ];

  const categories = [
    { name: "All Posts", count: 25, icon: BookOpen },
    { name: "AI Security", count: 8, icon: TrendingUp },
    { name: "Cloud Security", count: 12, icon: Cloud },
    { name: "Ethical Hacking", count: 15, icon: Shield },
    { name: "DevSecOps", count: 6, icon: Code }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-glow">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-gradient mb-6">
              Cybersecurity Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-rajdhani">
              Stay ahead of cyber threats with expert analysis, tutorials, and industry insights
            </p>
            
            {/* Newsletter Subscription */}
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="cyber-border"
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="cyber" 
                  disabled={isSubscribing}
                  className="px-6"
                >
                  {isSubscribing ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-background border-t-transparent" />
                  ) : (
                    <>
                      <Mail className="h-4 w-4 mr-2" />
                      Subscribe
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Search */}
              <Card className="cyber-border">
                <CardHeader>
                  <h3 className="font-orbitron font-semibold">Search Articles</h3>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search..." 
                      className="pl-10 cyber-border"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="cyber-border">
                <CardHeader>
                  <h3 className="font-orbitron font-semibold">Categories</h3>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 cursor-pointer transition-colors">
                      <div className="flex items-center space-x-2">
                        <category.icon className="h-4 w-4 text-primary" />
                        <span className="font-rajdhani">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Card className="cyber-border hover:cyber-glow transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-r from-primary to-primary-glow relative">
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="mb-2">
                      Featured Article
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4 font-rajdhani">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="font-orbitron text-2xl font-bold mb-4 hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 font-rajdhani leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="cyber" className="group">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="cyber-border hover:cyber-glow transition-all duration-300 h-full group cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <Badge className="absolute top-3 left-3 text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3 font-rajdhani">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="font-orbitron text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4 font-rajdhani line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button variant="ghost" className="p-0 h-auto font-rajdhani text-primary hover:text-primary-glow group">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="cyber-border font-rajdhani">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;