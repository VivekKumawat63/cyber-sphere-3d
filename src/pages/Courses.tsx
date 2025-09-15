import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Shield, 
  Code, 
  Cloud, 
  Search, 
  Users, 
  Clock, 
  Award, 
  BookOpen,
  ChevronRight,
  Play,
  CheckCircle,
  Star,
  Calendar,
  Trophy,
  Target,
  Brain,
  Zap
} from 'lucide-react';

const Courses: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleEnrollment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Enrollment Successful!",
      description: `Welcome to ${formData.course}! Check your email for next steps.`,
    });
    
    setFormData({ name: '', email: '', phone: '', course: '' });
    setIsSubmitting(false);
  };

  const courses = [
    {
      id: 'ethical-hacking',
      title: 'Ethical Hacking',
      subtitle: 'Certified Ethical Hacker (CEH) Preparation',
      description: 'Master the art of ethical penetration testing and vulnerability assessment with hands-on labs and real-world scenarios.',
      duration: '12 weeks',
      level: 'Intermediate',
      students: '2,847',
      rating: 4.9,
      price: '$599',
      originalPrice: '$899',
      color: 'from-primary to-primary-glow',
      icon: Shield,
      features: [
        'Advanced penetration testing techniques',
        'Vulnerability assessment tools',
        'Network security analysis',
        'Web application security',
        'Social engineering awareness',
        'CEH certification preparation'
      ],
      curriculum: [
        { module: 'Introduction to Ethical Hacking', duration: '2 weeks' },
        { module: 'Reconnaissance and Footprinting', duration: '2 weeks' },
        { module: 'Scanning and Enumeration', duration: '2 weeks' },
        { module: 'System Hacking', duration: '2 weeks' },
        { module: 'Web Application Hacking', duration: '2 weeks' },
        { module: 'Wireless Network Hacking', duration: '1 week' },
        { module: 'Social Engineering', duration: '1 week' }
      ],
      instructor: {
        name: 'Dr. Marcus Chen',
        title: 'Senior Security Researcher',
        experience: '15+ years',
        certifications: ['CEH', 'CISSP', 'OSCP']
      }
    },
    {
      id: 'pentesting',
      title: 'PenTesting',
      subtitle: 'Advanced Penetration Testing',
      description: 'Real-world vulnerability assessment with industry-standard tools and methodologies used by professional security teams.',
      duration: '10 weeks',
      level: 'Advanced',
      students: '1,923',
      rating: 4.8,
      price: '$699',
      originalPrice: '$999',
      color: 'from-secondary to-secondary-glow',
      icon: Code,
      features: [
        'Advanced exploitation techniques',
        'Custom payload development',
        'Post-exploitation strategies',
        'Report writing and documentation',
        'OSCP preparation',
        'Red team methodologies'
      ],
      curriculum: [
        { module: 'PenTest Methodology', duration: '1 week' },
        { module: 'Information Gathering', duration: '1 week' },
        { module: 'Vulnerability Analysis', duration: '2 weeks' },
        { module: 'Exploitation Techniques', duration: '3 weeks' },
        { module: 'Post-Exploitation', duration: '2 weeks' },
        { module: 'Reporting and Documentation', duration: '1 week' }
      ],
      instructor: {
        name: 'Sarah Rodriguez',
        title: 'Lead Penetration Tester',
        experience: '12+ years',
        certifications: ['OSCP', 'OSCE', 'GPEN']
      }
    },
    {
      id: 'cloud-security',
      title: 'Cloud Security',
      subtitle: 'Multi-Cloud Security Architecture',
      description: 'Secure AWS, Azure, and GCP environments like a pro with comprehensive cloud security strategies and tools.',
      duration: '8 weeks',
      level: 'Intermediate',
      students: '1,654',
      rating: 4.7,
      price: '$549',
      originalPrice: '$799',
      color: 'from-tertiary to-tertiary-glow',
      icon: Cloud,
      features: [
        'Multi-cloud security strategies',
        'Identity and access management',
        'Data encryption and key management',
        'Compliance and governance',
        'Container security',
        'Serverless security'
      ],
      curriculum: [
        { module: 'Cloud Security Fundamentals', duration: '1 week' },
        { module: 'AWS Security', duration: '2 weeks' },
        { module: 'Azure Security', duration: '2 weeks' },
        { module: 'GCP Security', duration: '2 weeks' },
        { module: 'Container & Serverless Security', duration: '1 week' }
      ],
      instructor: {
        name: 'Alex Thompson',
        title: 'Cloud Security Architect',
        experience: '10+ years',
        certifications: ['AWS Security', 'Azure Security', 'CCSP']
      }
    },
    {
      id: 'digital-forensics',
      title: 'Digital Forensics',
      subtitle: 'Cybercrime Investigation & Analysis',
      description: 'Investigate cybercrimes and recover digital evidence using advanced forensic tools and methodologies.',
      duration: '14 weeks',
      level: 'Expert',
      students: '892',
      rating: 4.9,
      price: '$799',
      originalPrice: '$1199',
      color: 'from-accent to-pink-400',
      icon: Search,
      features: [
        'Digital evidence collection',
        'Malware analysis',
        'Network forensics',
        'Mobile device forensics',
        'Memory analysis',
        'Legal and ethical considerations'
      ],
      curriculum: [
        { module: 'Digital Forensics Fundamentals', duration: '2 weeks' },
        { module: 'File System Analysis', duration: '2 weeks' },
        { module: 'Network Forensics', duration: '3 weeks' },
        { module: 'Mobile Forensics', duration: '2 weeks' },
        { module: 'Malware Analysis', duration: '3 weeks' },
        { module: 'Legal Aspects', duration: '2 weeks' }
      ],
      instructor: {
        name: 'Dr. Emily Zhang',
        title: 'Digital Forensics Expert',
        experience: '18+ years',
        certifications: ['GCFA', 'GCFE', 'GNFA']
      }
    }
  ];

  const EnrollmentModal = ({ course }: { course: typeof courses[0] }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="cyber" 
          className="w-full"
          onClick={() => setFormData(prev => ({ ...prev, course: course.title }))}
        >
          <Trophy className="h-4 w-4 mr-2" />
          Join Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md cyber-border">
        <DialogHeader>
          <DialogTitle className="font-orbitron text-gradient">
            Enroll in {course.title}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleEnrollment} className="space-y-4">
          <div>
            <Label htmlFor="name" className="font-rajdhani">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
              className="cyber-border"
            />
          </div>
          <div>
            <Label htmlFor="email" className="font-rajdhani">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              className="cyber-border"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="font-rajdhani">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              required
              className="cyber-border"
            />
          </div>
          <Button type="submit" variant="cyber" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-background border-t-transparent" />
            ) : (
              'Complete Enrollment'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );

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
              Explore Our Courses
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-rajdhani">
              Master cybersecurity with hands-on training from industry experts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '10,000+', label: 'Students Enrolled' },
              { icon: Award, value: '95%', label: 'Certification Rate' },
              { icon: Clock, value: '24/7', label: 'Lab Access' },
              { icon: Trophy, value: '4.8/5', label: 'Average Rating' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-orbitron text-2xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-rajdhani">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="cyber-border hover:cyber-glow transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className={`h-24 bg-gradient-to-r ${course.color} rounded-lg flex items-center justify-center mb-4`}>
                      <course.icon className="h-12 w-12 text-white" />
                    </div>
                    
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <CardTitle className="font-orbitron text-xl mb-1">
                          {course.title}
                        </CardTitle>
                        <p className="text-primary font-rajdhani text-sm">
                          {course.subtitle}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-orbitron text-2xl font-bold text-gradient">
                          {course.price}
                        </div>
                        <div className="text-sm text-muted-foreground line-through">
                          {course.originalPrice}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm font-rajdhani">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{course.duration}</span>
                      </div>
                      <Badge variant="outline">{course.level}</Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground font-rajdhani">
                      {course.description}
                    </p>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-orbitron font-semibold mb-3 flex items-center">
                        <Target className="h-4 w-4 text-primary mr-2" />
                        What You'll Learn
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {course.features.slice(0, 4).map((feature) => (
                          <div key={feature} className="flex items-center space-x-2 text-sm font-rajdhani">
                            <CheckCircle className="h-3 w-3 text-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Instructor */}
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-orbitron font-semibold mb-2 flex items-center">
                        <Brain className="h-4 w-4 text-primary mr-2" />
                        Your Instructor
                      </h4>
                      <div className="text-sm font-rajdhani">
                        <div className="font-semibold">{course.instructor.name}</div>
                        <div className="text-primary">{course.instructor.title}</div>
                        <div className="text-muted-foreground">
                          {course.instructor.experience} • {course.instructor.certifications.join(', ')}
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <EnrollmentModal course={course} />
                      <Button variant="outline" className="w-full cyber-border">
                        <Play className="h-4 w-4 mr-2" />
                        View Curriculum
                      </Button>
                    </div>

                    <div className="text-center text-sm text-muted-foreground font-rajdhani">
                      <Users className="h-4 w-4 inline mr-1" />
                      {course.students} students enrolled
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
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-gradient mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-rajdhani">
              Join thousands of professionals who have advanced their cybersecurity careers with us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cyber" size="lg" className="font-rajdhani text-lg px-8 py-6">
                <Zap className="h-5 w-5 mr-2" />
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="cyber-border font-rajdhani text-lg px-8 py-6">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Courses;