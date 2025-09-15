import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  Shield, 
  Github, 
  Chrome,
  ArrowRight,
  UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Login Successful!",
      description: "Welcome back to CyberSecure Academy.",
    });
    
    // Redirect to dashboard or previous page
    setIsSubmitting(false);
  };

  const handleSocialLogin = (provider: string) => {
    toast({
      title: `${provider} Login`,
      description: `Redirecting to ${provider} authentication...`,
    });
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-glow flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
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
                Welcome Back
              </h1>
              <p className="text-muted-foreground font-rajdhani">
                Access your cybersecurity learning dashboard
              </p>
            </div>

            <Card className="cyber-border">
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-orbitron text-xl">
                  Sign In to Your Account
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Social Login Buttons */}
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full cyber-border hover:bg-muted/50"
                    onClick={() => handleSocialLogin('Google')}
                  >
                    <Chrome className="h-4 w-4 mr-2" />
                    Continue with Google
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full cyber-border hover:bg-muted/50"
                    onClick={() => handleSocialLogin('GitHub')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Continue with GitHub
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground font-rajdhani">
                      Or continue with email
                    </span>
                  </div>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-rajdhani">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="pl-10 cyber-border"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="font-rajdhani">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
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
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        id="remember"
                        type="checkbox"
                        checked={formData.rememberMe}
                        onChange={(e) => setFormData(prev => ({ ...prev, rememberMe: e.target.checked }))}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <Label htmlFor="remember" className="text-sm font-rajdhani">
                        Remember me
                      </Label>
                    </div>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-primary hover:text-primary-glow transition-colors font-rajdhani"
                    >
                      Forgot password?
                    </Link>
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
                        <UserCheck className="h-4 w-4 mr-2" />
                        Sign In
                      </>
                    )}
                  </Button>
                </form>

                <div className="text-center">
                  <span className="text-muted-foreground text-sm font-rajdhani">
                    Don't have an account?{' '}
                  </span>
                  <Link
                    to="/signup"
                    className="text-primary hover:text-primary-glow transition-colors text-sm font-rajdhani inline-flex items-center"
                  >
                    Create one now
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground font-rajdhani bg-muted/20 px-4 py-2 rounded-lg">
                <Shield className="h-4 w-4 text-primary" />
                <span>Your data is protected with enterprise-grade security</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;