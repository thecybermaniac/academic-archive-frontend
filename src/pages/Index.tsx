
import { useState, useEffect } from 'react';
import LoginPage from '../components/LoginPage';
import Dashboard from '../components/Dashboard';
import LibraryPage from '../components/LibraryPage';
import ProfilePage from '../components/ProfilePage';
import UploadModal from '../components/UploadModal';
import Navigation from '../components/Navigation';

interface PDF {
  id: string;
  title: string;
  author: string;
  type: 'research' | 'textbook';
  department: string;
  uploadDate: string;
  fileName: string;
}

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'library' | 'upload' | 'profile'>('dashboard');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [pdfs, setPdfs] = useState<PDF[]>([
    {
      id: '1',
      title: 'Introduction to Computer Science',
      author: 'Dr. Smith',
      type: 'textbook',
      department: 'Computer Science',
      uploadDate: '2024-06-15',
      fileName: 'intro-cs.pdf'
    },
    {
      id: '2',
      title: 'Machine Learning Research Paper',
      author: 'Prof. Johnson',
      type: 'research',
      department: 'Computer Science',
      uploadDate: '2024-06-10',
      fileName: 'ml-research.pdf'
    },
    {
      id: '3',
      title: 'Organic Chemistry Fundamentals',
      author: 'Dr. Brown',
      type: 'textbook',
      department: 'Chemistry',
      uploadDate: '2024-06-08',
      fileName: 'organic-chem.pdf'
    }
  ]);

  useEffect(() => {
    const savedUserId = localStorage.getItem('universityLibraryUserId');
    if (savedUserId) {
      setUserId(savedUserId);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (id: string) => {
    setUserId(id);
    setIsLoggedIn(true);
    localStorage.setItem('universityLibraryUserId', id);
  };

  const handleLogout = () => {
    setUserId('');
    setIsLoggedIn(false);
    setCurrentPage('dashboard');
    localStorage.removeItem('universityLibraryUserId');
  };

  const handleUpload = (pdfData: Omit<PDF, 'id' | 'uploadDate'>) => {
    const newPdf: PDF = {
      ...pdfData,
      id: Date.now().toString(),
      uploadDate: new Date().toISOString().split('T')[0]
    };
    setPdfs([newPdf, ...pdfs]);
    setIsUploadModalOpen(false);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation 
        userId={userId} 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onLogout={handleLogout}
      />
      
      <main className="pt-16">
        {currentPage === 'dashboard' && (
          <Dashboard 
            userId={userId}
            recentPdfs={pdfs.slice(0, 3)}
            onNavigate={setCurrentPage}
            onOpenUpload={() => setIsUploadModalOpen(true)}
          />
        )}
        
        {currentPage === 'library' && (
          <LibraryPage pdfs={pdfs} />
        )}

        {currentPage === 'profile' && (
          <ProfilePage 
            userId={userId}
            totalUploads={pdfs.length}
          />
        )}
      </main>

      {isUploadModalOpen && (
        <UploadModal 
          onClose={() => setIsUploadModalOpen(false)}
          onUpload={handleUpload}
        />
      )}
    </div>
  );
};

export default Index;
