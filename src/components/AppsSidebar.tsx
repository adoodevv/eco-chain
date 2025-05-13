import React from 'react';
import { CiSearch } from "react-icons/ci";

interface AppsSidebarProps {
   categories: string[];
   selectedCategory: string;
   onCategoryChange: (cat: string) => void;
   search: string;
   onSearchChange: (val: string) => void;
   sort: 'asc' | 'desc';
   onSortChange: (val: 'asc' | 'desc') => void;
}

const AppsSidebar: React.FC<AppsSidebarProps> = ({
   categories,
   selectedCategory,
   onCategoryChange,
   search,
   onSearchChange,
   sort,
   onSortChange,
}) => {
   return (
      <aside className="w-full sm:w-64 bg-black/80 p-4 rounded-xl flex flex-col gap-6 text-white">
         <div className="relative">
            <input
               type="text"
               placeholder="Search"
               value={search}
               onChange={e => onSearchChange(e.target.value)}
               className="w-full px-4 py-2 rounded-lg bg-none border border-white/30 text-white placeholder-gray-400 focus:outline-none mb-4 text-lg"
            />
            <CiSearch className="absolute right-3 top-[calc(50%-8px)] -translate-y-1/2 text-white text-xl" />
         </div>
         <div>
            <ul className="flex flex-col text-2xl md:text-3xl">
               <li>
                  <button
                     className={`uppercase text-left w-full px-2 py-1 rounded-lg transition-all ${selectedCategory === 'All' ? 'text-white manuka-bold' : 'hover:bg-[#222] text-white/30'} manuka-bold`}
                     onClick={() => onCategoryChange('All')}
                  >
                     All
                  </button>
               </li>
               {categories.map(cat => (
                  <li key={cat}>
                     <button
                        className={`uppercase text-left w-full px-2 py-1 rounded-lg transition-all ${selectedCategory === cat ? 'manuka-bold text-white' : 'hover:bg-[#222] text-white/30'} manuka-bold`}
                        onClick={() => onCategoryChange(cat)}
                     >
                        {cat}
                     </button>
                  </li>
               ))}
            </ul>
         </div>
         <div>
            <h3 className="uppercase text-white text-xs mb-2">Sort by:</h3>
            <select
               value={sort}
               onChange={e => onSortChange(e.target.value as 'asc' | 'desc')}
               className="w-full px-3 py-2 rounded-lg bg-[#181818] text-white manuka-bold text-2xl md:text-3xl"
            >
               <option value="asc">Alphabetical Asc</option>
               <option value="desc">Alphabetical Desc</option>
            </select>
         </div>
      </aside>
   );
};

export default AppsSidebar; 