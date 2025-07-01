
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">University Library</h1>
          <p className="text-gray-600">Digital Collection Access Portal</p>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl font-semibold">Student Access</CardTitle>
            <CardDescription>
              Enter your student ID to access the digital library
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="userId" className="text-sm font-medium text-gray-700">
                  Student ID Number
                </label>
                <Input
                  id="userId"
                  type="text"
                  placeholder="e.g., 2024001234"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="h-12 text-lg"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700 transition-colors"
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

        <div className="text-center mt-6 text-sm text-gray-500">
          <p>© 2024 University Digital Library System</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
