
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface LoginPageProps {
  onLogin: (userId: string) => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [userId, setUserId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId.trim()) return;
    
    setIsLoading(true);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    onLogin(userId.trim());
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 flex items-center justify-center p-4">
      {/* Theme Toggle - positioned absolutely */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 dark:bg-blue-700 p-3 rounded-full">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">University Library</h1>
          <p className="text-gray-600 dark:text-gray-400">Digital Collection Access Portal</p>
        </div>

        <Card className="shadow-lg border-0 dark:bg-gray-800 dark:border-gray-700">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">Student Access</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Enter your student ID to access the digital library
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="userId" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Student ID Number
                </label>
                <Input
                  id="userId"
                  type="text"
                  placeholder="e.g., 2024001234"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="h-12 text-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
                disabled={isLoading || !userId.trim()}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Accessing Library...
                  </div>
                ) : (
                  'Access Library'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
          <p>© 2024 University Digital Library System</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
