
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Library, FileText, Calendar, User } from 'lucide-react';

interface PDF {
  id: string;
  title: string;
  author: string;
  type: 'research' | 'textbook';
  department: string;
  uploadDate: string;
  fileName: string;
}

interface DashboardProps {
  userId: string;
  recentPdfs: PDF[];
  onNavigate: (page: 'dashboard' | 'library' | 'upload') => void;
  onOpenUpload: () => void;
}

const Dashboard = ({ userId, recentPdfs, onNavigate, onOpenUpload }: DashboardProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Welcome back, Student {userId}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Access your digital library resources and manage your academic documents
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer dark:bg-gray-800 dark:border-gray-700" onClick={onOpenUpload}>
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                <Upload className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <CardTitle className="text-xl">Upload Document</CardTitle>
                <CardDescription>Add new PDFs to the library</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button className="w-full" onClick={(e) => { e.stopPropagation(); onOpenUpload(); }}>
              Upload New PDF
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer dark:bg-gray-800 dark:border-gray-700" onClick={() => onNavigate('library')}>
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                <Library className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-xl">Browse Library</CardTitle>
                <CardDescription>Explore available documents</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full" onClick={(e) => { e.stopPropagation(); onNavigate('library'); }}>
              View All Documents
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Uploads */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Recent Documents</h2>
          <Button variant="ghost" onClick={() => onNavigate('library')}>
            View All
          </Button>
        </div>

        {recentPdfs.length > 0 ? (
          <div className="grid gap-4">
            {recentPdfs.map((pdf) => (
              <Card key={pdf.id} className="hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 dark:bg-red-900 p-3 rounded-lg">
                        <FileText className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                          {pdf.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {pdf.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(pdf.uploadDate).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            pdf.type === 'research' 
                              ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                          }`}>
                            {pdf.type === 'research' ? 'Research' : 'Textbook'}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{pdf.department}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-8 text-center">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileText className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">No documents yet</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Start by uploading your first document to the library</p>
              <Button onClick={onOpenUpload}>
                Upload Document
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
