import React from 'react';

const JobPreview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Job Details */}
      <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm">
        {/* Job Header */}
        <div className="flex justify-between items-start mb-6 pb-6 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <h1 className="text-2xl font-semibold text-gray-900 mr-3">
                Senior Product Designer
              </h1>
              <span className="text-sm text-gray-600">posted 2 days ago</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                Open
              </span>
            </div>
            <div className="flex gap-6 text-sm text-gray-600">
              <span>📍 Delaware, USA</span>
              <span>💰 $300k-$400k</span>
            </div>
          </div>
        </div>

        {/* Job Requirements */}
        <div className="grid grid-cols-4 gap-6 mb-8 pb-6 border-b border-gray-200">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
              Skills required
            </h3>
            <div className="flex flex-col gap-2">
              <span className="border border-black px-2 py-1 text-xs font-medium w-fit">
                Figma
              </span>
              <span className="border border-black px-2 py-1 text-xs font-medium w-fit">
                Adobe Illustrator
              </span>
              <span className="border border-black px-2 py-1 text-xs font-medium w-fit">
                Adobe XD
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
              Preferred language
            </h3>
            <p className="text-gray-900 font-medium whitespace-nowrap">English</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
              Type
            </h3>
            <p className="text-gray-900 font-medium">Full time</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
              Years of experience
            </h3>
            <p className="text-gray-900 font-medium whitespace-nowrap">3+ Years of Experience</p>
          </div>
        </div>

        {/* Job Description */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">About the job</h3>
          <ol className="list-decimal list-inside mb-4 space-y-1 text-gray-700">
            <li>Handle the UI/UX research design</li>
            <li>Work on researching on latest web applications designs & trends</li>
            <li>Work on conceptualizing and visualizing</li>
            <li>Work on creating graphics content and other graphic related works</li>
          </ol>

          <h4 className="font-semibold mt-4 mb-2 text-gray-900">Benefits:</h4>
          <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700">
            <li>Health Insurance</li>
            <li>Provident Fund</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2 text-gray-900">Schedule:</h4>
          <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700">
            <li>Day shift</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2 text-gray-900">Supplemental pay types:</h4>
          <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700">
            <li>Performance bonus</li>
            <li>Yearly bonus</li>
          </ul>

          <p className="text-gray-700">
            <strong>Work Location:</strong> In person
          </p>
        </div>

        {/* Company Info */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-blue-600 text-white rounded flex items-center justify-center font-semibold text-lg">
              A
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Atlassian</h3>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                  Company size
                </h4>
                <p className="text-gray-900 font-medium">1k - 2k Employees</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                  Type
                </h4>
                <p className="text-gray-900 font-medium">Private</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                  Sector
                </h4>
                <p className="text-gray-900 font-medium">Information Technology, Infrastructure</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                  Funding
                </h4>
                <p className="text-gray-900 font-medium">Bootstrapped</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                  Founded in
                </h4>
                <p className="text-gray-900 font-medium">2019</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                  Founded By
                </h4>
                <p className="text-gray-900 font-medium">Scott Farquhar, Mike Cannon-Brookes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Stats Sidebar */}
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-5 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl">👥</div>
            <span className="text-sm text-gray-600">Applicants</span>
          </div>
          <span className="text-2xl font-semibold text-gray-900">400</span>
        </div>

        <div className="bg-white rounded-lg p-5 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl">🎯</div>
            <span className="text-sm text-gray-600">Matches</span>
          </div>
          <span className="text-2xl font-semibold text-gray-900">100</span>
        </div>

        <div className="bg-white rounded-lg p-5 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl">💬</div>
            <span className="text-sm text-gray-600">Messages</span>
          </div>
          <span className="text-2xl font-semibold text-gray-900">147</span>
        </div>

        <div className="bg-white rounded-lg p-5 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl">👁️</div>
            <span className="text-sm text-gray-600">Views</span>
          </div>
          <span className="text-2xl font-semibold text-gray-900">800</span>
        </div>
      </div>
    </div>
  );
};

export default JobPreview;