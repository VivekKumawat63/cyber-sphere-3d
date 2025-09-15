import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Shield, 
  Github, 
  Chrome,
  ArrowRight,
  UserPlus,
  CheckCircle,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    agreeNewsletter: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Please ensure both passwords match.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.agreeTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the Terms of Service to continue.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Account Created Successfully!",
      description: "Welcome to CyberSecure Academy! Please check your email to verify your account.",
    });
    
    setIsSubmitting(false);
  };

  const handleSocialSignup = (provider: string) => {
    toast({
      title: `${provider} Signup`,
      description: `Redirecting to ${provider} authentication...`,
    });
  };

  const passwordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const getStrengthText = (strength: number) => {
    switch (strength) {
      case 0:
      case 1:
        return { text: 'Weak', color: 'text-red-500' };
      case 2:
        return { text: 'Fair', color: 'text-yellow-500' };
      case 3:
        return { text: 'Good', color: 'text-blue-500' };
      case 4:
      case 5:
        return { text: 'Strong', color: 'text-green-500' };
      default:
        return { text: '', color: '' };
    }
  };

  const strength = passwordStrength(formData.password);
  const strengthInfo = getStrengthText(strength);

  return (
    <div className="min-h-screen pt-16 bg-gradient-glow flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo and Title */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Shield className="h-10 w-10 text-primary animate-glow" />
                <span className="font-orbitron text-2xl font-bold text-gradient">
                  CyberSecure Academy
                </span>
              </div>
              <h1 className="font-orbitron text-3xl font-bold text-gradient mb-2">
                Join the Academy
              </h1>
              <p className="text-muted-foreground font-rajdhani">
                Start your cybersecurity journey today
              </p>
            </div>

            <Card className="cyber-border">
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-orbitron text-xl">
                  Create Your Account
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Social Signup Buttons */}
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full cyber-border hover:bg-muted/50"
                    onClick={() => handleSocialSignup('Google')}
                  >
                    <Chrome className="h-4 w-4 mr-2" />
                    Sign up with Google
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full cyber-border hover:bg-muted/50"
                    onClick={() => handleSocialSignup('GitHub')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Sign up with GitHub
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground font-rajdhani">
                      Or sign up with email
                    </span>
                  </div>
                </div>

                {/* Signup Form */}
                <form onSubmit={handleSignup} className="space-y-4">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="font-rajdhani">
                        First Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                          className="pl-10 cyber-border"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="font-rajdhani">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        className="cyber-border"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-rajdhani">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="pl-10 cyber-border"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-rajdhani">
                      Phone Number (Optional)
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="pl-10 cyber-border"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="password" className="font-rajdhani">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                        className="pl-10 pr-10 cyber-border"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                    {formData.password && (
                      <div className="text-xs font-rajdhani">
                        Password strength: <span className={strengthInfo.color}>{strengthInfo.text}</span>
                      </div>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="font-rajdhani">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        className="pl-10 pr-10 cyber-border"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                    {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                      <div className="text-xs text-red-500 font-rajdhani">
                        Passwords do not match
                      </div>
                    )}
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, agreeTerms: checked as boolean }))
                        }
                      />
                      <Label htmlFor="terms" className="text-sm font-rajdhani leading-5">
                        I agree to the{' '}
                        <Link to="/terms" className="text-primary hover:text-primary-glow">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link to="/privacy" className="text-primary hover:text-primary-glow">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.agreeNewsletter}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, agreeNewsletter: checked as boolean }))
                        }
                      />
                      <Label htmlFor="newsletter" className="text-sm font-rajdhani leading-5">
                        Subscribe to our newsletter for cybersecurity tips and course updates
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="cyber"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-background border-t-transparent" />
                    ) : (
                      <>
                        <UserPlus className="h-4 w-4 mr-2" />
                        Create Account
                      </>
                    )}
                  </Button>
                </form>

                <div className="text-center">
                  <span className="text-muted-foreground text-sm font-rajdhani">
                    Already have an account?{' '}
                  </span>
                  <Link
                    to="/login"
                    className="text-primary hover:text-primary-glow transition-colors text-sm font-rajdhani inline-flex items-center"
                  >
                    Sign in
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <motion.div
              className="mt-6 space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {[
                'Access to all courses and learning materials',
                '24/7 hands-on lab environment',
                'Industry-recognized certifications',
                'Community access and networking'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground font-rajdhani">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Signup;