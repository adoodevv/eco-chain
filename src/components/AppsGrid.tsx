import React from 'react';
import AppCard from './AppCard';

interface App {
   title: string;
   description: string;
   tag: string;
   image: string;
}

interface AppsGridProps {
   apps: App[];
}

const AppsGrid: React.FC<AppsGridProps> = ({ apps }) => {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
         {apps.map((app, idx) => (
            <AppCard key={app.title + idx} app={app} />
         ))}
      </div>
   );
};

export default AppsGrid; 