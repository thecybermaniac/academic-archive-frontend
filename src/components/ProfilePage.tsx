
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Mail, Phone, MapPin, Calendar, BookOpen, FileText } from 'lucide-react';

interface ProfilePageProps {
  userId: string;
  totalUploads: number;
}

const ProfilePage = ({ userId, totalUploads }: ProfilePageProps) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Student Profile
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your personal information and account settings
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto bg-blue-100 dark:bg-blue-900 p-6 rounded-full w-24 h-24 flex items-center justify-center mb-4">
                <User className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-xl">Student {userId}</CardTitle>
              <CardDescription>University Library Member</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Total Uploads</span>
                  </div>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{totalUploads}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Member Since</span>
                  </div>
                  <span className="font-semibold">2024</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Information */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="studentId">Student ID</Label>
                  <Input id="studentId" value={userId} disabled className="bg-gray-50 dark:bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="Enter your full name" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="email" type="email" placeholder="student@university.edu" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="pl-10" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" placeholder="e.g., Computer Science" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input id="address" placeholder="Enter your address" className="pl-10" />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button>Save Changes</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Academic Information */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Academic Information
          </CardTitle>
          <CardDescription>Your academic details and preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="year">Academic Year</Label>
              <Input id="year" placeholder="e.g., 2024" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="semester">Current Semester</Label>
              <Input id="semester" placeholder="e.g., Fall 2024" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="major">Major</Label>
              <Input id="major" placeholder="e.g., Computer Science" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
