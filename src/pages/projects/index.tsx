import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { Filter, X, Plus, Laptop, Brain, ChartBar } from 'lucide-react';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { ProjectItemProps } from '@/common/types/projects';
import Projects from '@/modules/projects';
import { PROJECTSLIST } from '@/common/constant/projects';

interface ProjectsPageProps {
  projects: ProjectItemProps[];
}

const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION = 'Several projects that I have worked on, both private and open source.';

const CATEGORIES = [
  { id: 'all', label: 'All Categories', icon: Filter },
  { id: 'web', label: 'Web Development', icon: Laptop },
  { id: 'ml', label: 'Machine Learning', icon: Brain },
  { id: 'data', label: 'Data Analysis', icon: ChartBar },
];

const ProjectsPage: NextPage<ProjectsPageProps> = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isShowingMore, setIsShowingMore] = useState(false);

  // Filter projects by category
  const filteredProjects = selectedCategory === 'all'
    ? PROJECTSLIST.projects
    : PROJECTSLIST.projects.filter(project => {
        const categoryMap: { [key: string]: string } = {
          'web': 'Web Development',
          'ml': 'Machine Learning',
          'data': 'Data Analysis'
        };
        return project.category === categoryMap[selectedCategory];
      });

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 2);
    setIsShowingMore(true);
  };

  const hasMore = visibleProjects < filteredProjects.length;

  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Sachin Mhetre`} />
      <Container>
        <div className="space-y-8">
          <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />

          {/* Category Filter */}
          <div className="relative">
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setSelectedCategory(id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-xl
                    transition-all duration-300 ease-out
                    ${selectedCategory === id 
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105 font-medium' 
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'}
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6">
            <Projects
              projects={filteredProjects.slice(0, visibleProjects)}
              loadMore={loadMore}
              hasMore={hasMore}
            />

            {hasMore && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={loadMore}
                  className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 
                    text-white rounded-xl font-medium shadow-lg shadow-blue-500/30
                    hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
                >
                  <Plus className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
                  <span>{isShowingMore ? 'Show More' : 'Load More'}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProjectsPage;