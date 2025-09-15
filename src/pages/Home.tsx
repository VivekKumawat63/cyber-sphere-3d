import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Code, 
  Cloud, 
  Search, 
  Users, 
  Award, 
  BookOpen, 
  CheckCircle,
  ArrowRight,
  Play
} from 'lucide-react';
import Hero3D from '@/components/Hero3D';

const Home: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Hands-On Labs',
      description: 'Practice on real-world scenarios in our secure virtual environments.'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry veterans with decades of cybersecurity experience.'
    },
    {
      icon: Award,
      title: 'Certification Ready',
      description: 'Prepare for top industry certifications like CEH, CISSP, and more.'
    },
    {
      icon: BookOpen,
      title: 'Interactive Learning',
      description: 'Engage with 3D simulations and immersive cybersecurity scenarios.'
    }
  ];

  const courses = [
    {
      title: 'Ethical Hacking',
      description: 'Master the art of ethical penetration testing and vulnerability assessment.',
      duration: '12 weeks',
      level: 'Intermediate',
      students: '2,847',
      color: 'from-primary to-primary-glow',
      icon: Shield
    },
    {
      title: 'PenTesting',
      description: 'Real-world vulnerability assessment with industry-standard tools.',
      duration: '10 weeks',
      level: 'Advanced',
      students: '1,923',
      color: 'from-secondary to-secondary-glow',
      icon: Code
    },
    {
      title: 'Cloud Security',
      description: 'Secure AWS, Azure, and GCP environments like a pro.',
      duration: '8 weeks',
      level: 'Intermediate',
      students: '1,654',
      color: 'from-tertiary to-tertiary-glow',
      icon: Cloud
    },
    {
      title: 'Digital Forensics',
      description: 'Investigate cybercrimes and recover digital evidence.',
      duration: '14 weeks',
      level: 'Expert',
      students: '892',
      color: 'from-accent to-pink-400',
      icon: Search
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Cybersecurity Analyst',
      company: 'TechCorp',
      quote: 'The hands-on approach at CyberSecure Academy transformed my career. I went from beginner to landing my dream job in just 6 months.',
      rating: 5
    },
    {
      name: 'Sarah Martinez',
      role: 'Penetration Tester',
      company: 'SecureNet',
      quote: 'The 3D learning environment made complex concepts easy to understand. The instructors are world-class.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Cloud Security Engineer',
      company: 'CloudFirst',
      quote: 'Best investment I ever made. The practical labs prepared me for real-world scenarios I face daily.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 3D Hero Section */}
      <Hero3D />

      {/* Features Section */}
      <section className="py-20 bg-gradient-glow">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-gradient mb-4">
              Why Choose CyberSecure Academy?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-rajdhani">
              Experience the future of cybersecurity education with our innovative approach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center cyber-border hover:cyber-glow transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-orbitron text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground font-rajdhani">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-gradient mb-4">
              Master Cybersecurity
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-rajdhani">
              Choose your path to becoming a cybersecurity expert
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="cyber-border hover:cyber-glow transition-all duration-300 h-full group">
                  <CardContent className="p-0">
                    <div className={`h-32 bg-gradient-to-r ${course.color} rounded-t-lg flex items-center justify-center`}>
                      <course.icon className="h-16 w-16 text-white" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-orbitron text-lg font-semibold group-hover:text-primary transition-colors">
                          {course.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {course.level}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 font-rajdhani">
                        {course.description}
                      </p>
                      <div className="space-y-2 mb-4 text-sm font-rajdhani">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="text-foreground">{course.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Students:</span>
                          <span className="text-foreground">{course.students}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cyber" size="lg" className="font-rajdhani text-lg px-8 py-6">
              <Play className="h-5 w-5 mr-2" />
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-gradient mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-rajdhani">
              Hear from our graduates who are now defending the digital world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="cyber-border hover:cyber-glow transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <CheckCircle key={i} className="h-5 w-5 text-primary" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-6 font-rajdhani italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-orbitron font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-primary font-rajdhani">
                        {testimonial.role}
                      </div>
                      <div className="text-muted-foreground text-sm font-rajdhani">
                        {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-glow">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-gradient mb-6">
              Ready to Defend the Future?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 font-rajdhani">
              Join thousands of students who have transformed their careers with our immersive cybersecurity training.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="cyber" size="lg" className="font-rajdhani text-lg px-8 py-6">
                <Shield className="h-5 w-5 mr-2" />
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="font-rajdhani text-lg px-8 py-6">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;