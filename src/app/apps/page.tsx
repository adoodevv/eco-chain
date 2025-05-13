'use client';

import React, { useState, useMemo } from 'react';
import AppsSidebar from '@/components/AppsSidebar';
import AppsGrid from '@/components/AppsGrid';

const appsData = [
   { title: 'AIOW', description: 'Your all-in-one, no-code NFT launchpad on Apechain', tag: 'Collectibles', image: '/images/app1.jpg' },
   { title: 'Alchemy', description: 'Web3 infrastructure', tag: 'Infrastructure', image: '/images/app2.jpg' },
   { title: 'Ape Accelerator', description: 'Accelerate your project', tag: 'Finance', image: '/images/app3.jpg' },
   { title: 'Ape Builder / Sequence', description: 'Web3 game dev platform', tag: 'Infrastructure', image: '/images/app4.jpg' },
   { title: 'Ape Den', description: 'Event: Feb 27, 9:00 AM - Feb 28, 2:00 PM', tag: 'Events', image: '/images/app5.jpg' },
   { title: 'Ape Express', description: 'The ultimate memecoin toolkit', tag: 'Finance', image: '/images/app6.jpg' },
];

const categories = [
   'Events',
   'Finance',
   'Infrastructure',
   'Collectibles',
   'Games',
   'Intellectual Property',
   'News',
];

const AppsPage = () => {
   const [search, setSearch] = useState('');
   const [selectedCategory, setSelectedCategory] = useState('All');
   const [sort, setSort] = useState<'asc' | 'desc'>('asc');

   const filteredApps = useMemo(() => {
      let filtered = appsData.filter(app => {
         const matchesCategory = selectedCategory === 'All' || app.tag === selectedCategory;
         const matchesSearch =
            app.title.toLowerCase().includes(search.toLowerCase()) ||
            app.description.toLowerCase().includes(search.toLowerCase()) ||
            app.tag.toLowerCase().includes(search.toLowerCase());
         return matchesCategory && matchesSearch;
      });
      filtered = filtered.sort((a, b) => {
         if (sort === 'asc') return a.title.localeCompare(b.title);
         return b.title.localeCompare(a.title);
      });
      return filtered;
   }, [search, selectedCategory, sort]);

   return (
      <div className="min-h-screen bg-black flex flex-col md:flex-row gap-8 px-4 py-24">
         <div className="md:w-1/4 w-full max-w-xs">
            <AppsSidebar
               categories={categories}
               selectedCategory={selectedCategory}
               onCategoryChange={setSelectedCategory}
               search={search}
               onSearchChange={setSearch}
               sort={sort}
               onSortChange={setSort}
            />
         </div>
         <div className="flex-1 md:w-3/4 md:py-12 py-0">
            <AppsGrid apps={filteredApps} />
         </div>
      </div>
   );
};

export default AppsPage;
