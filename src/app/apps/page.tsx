'use client';

import React, { useState, useMemo } from 'react';
import AppsSidebar from '@/components/AppsSidebar';
import AppsGrid from '@/components/AppsGrid';
import { apps } from '@/constants/apps';

const categories = [
   'Events',
   'Finance',
   'Infrastructure',
   'Collectibles',
   'Intellectual Property',
   'News',
];

const AppsPage = () => {
   const appsData = apps;
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
