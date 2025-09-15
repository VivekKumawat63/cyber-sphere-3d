import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Students Trained', value: '10,000+' },
    { icon: Award, label: 'Certifications', value: '95%' },
    { icon: Target, label: 'Job Placement', value: '88%' },
    { icon: Shield, label: 'Success Rate', value: '97%' },
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Security Officer',
      bio: 'Former NSA cybersecurity analyst with 15+ years in ethical hacking and digital forensics.',
      specialties: ['Ethical Hacking', 'Digital Forensics', 'Incident Response'],
      avatar: '/avatars/sarah-chen.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead PenTest Instructor',
      bio: 'Certified Ethical Hacker (CEH) and penetration testing expert with extensive industry experience.',
      specialties: ['Penetration Testing', 'Vulnerability Assessment', 'Red Team Operations'],
      avatar: '/avatars/marcus-rodriguez.jpg'
    },
    {
      name: 'Emily Watson',
      role: 'Cloud Security Architect',
      bio: 'AWS and Azure security specialist focused on cloud infrastructure protection.',
      specialties: ['Cloud Security', 'AWS Security', 'Azure Security'],
      avatar: '/avatars/emily-watson.jpg'
    },
    {
      name: 'Dr. James Kim',
      role: 'Research Director',
      bio: 'PhD in Computer Science with focus on AI-driven cybersecurity and threat intelligence.',
      specialties: ['AI Security', 'Threat Intelligence', 'Malware Analysis'],
      avatar: '/avatars/james-kim.jpg'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-gradient mb-6">
              About CyberSecure Academy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-rajdhani">
              We're on a mission to defend the future by creating the next generation of cybersecurity experts. 
              Our cutting-edge training combines theoretical knowledge with hands-on practical experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-orbitron text-3xl font-bold text-gradient mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 font-rajdhani">
                To democratize cybersecurity education and empower individuals with the skills needed to protect 
                our digital world. We believe everyone should have access to world-class cybersecurity training.
              </p>
              <p className="text-lg text-muted-foreground font-rajdhani">
                Through immersive 3D learning experiences and hands-on labs, we prepare students for real-world 
                cybersecurity challenges they'll face in their careers.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="cyber-border rounded-lg p-8 bg-card"
            >
              <h3 className="font-orbitron text-2xl font-semibold text-primary mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3 font-rajdhani">
                <li className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Industry-leading instructors</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-secondary" />
                  <span>Hands-on practical labs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-tertiary" />
                  <span>Real-world simulations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <span>Career placement assistance</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-glow">
        <div className="container mx-auto px-4">
          <motion.h2
            className="font-orbitron text-3xl font-bold text-center text-gradient mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Impact
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center cyber-border cyber-glow">
                  <CardContent className="p-6">
                    <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="font-orbitron text-3xl font-bold text-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-rajdhani">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16" id="team">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron text-3xl font-bold text-gradient mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-rajdhani">
              Learn from industry veterans who have defended the world's most critical systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="cyber-border hover:cyber-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-gradient-cyber rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Shield className="h-12 w-12 text-background" />
                    </div>
                    <h3 className="font-orbitron text-xl font-semibold text-center mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary text-center mb-4 font-rajdhani">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4 font-rajdhani">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;