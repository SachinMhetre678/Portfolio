import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { ProjectItemProps } from '@/common/types/projects';
import Projects from '@/modules/projects';
import { PROJECTSLIST } from '@/common/constant/projects';

interface ProjectsPageProps {
  projects: ProjectItemProps[];
}

const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION =
  'Several projects that I have worked on, both private and open source.';

const ProjectsPage: NextPage<ProjectsPageProps> = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [category, setCategory] = useState<string>('All');
  const [isFilterAnimating, setIsFilterAnimating] = useState(false);
  const [isShowingMore, setIsShowingMore] = useState(false);

  // Filter projects by category
  const filteredProjects = category === 'All'
    ? PROJECTSLIST.projects
    : PROJECTSLIST.projects.filter(project => project.category === category);

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 2);
    setIsShowingMore(true);
  };

  const hasMore = visibleProjects < filteredProjects.length;

  useEffect(() => {
    setIsFilterAnimating(true);
    const timer = setTimeout(() => {
      setIsFilterAnimating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [category]);

  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Sachin Mhetre`} />
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />

        {/* Category Filter */}
        <div className={`flex items-center justify-between mb-6 ${isFilterAnimating ? 'animate-fade-in' : ''}`}>
          <label htmlFor="category" className="mr-4 text-lg font-medium">
            Filter by Category:
          </label>
          <div className="relative">
            <select
              id="category"
              className="p-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Web Development">Web Development</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Data Analysis">Data Analysis</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              {category === 'All' ? (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              )}
            </div>
          </div>
        </div>

        {/* Projects List */}
        <Projects
          projects={filteredProjects.slice(0, visibleProjects)}
          loadMore={loadMore}
          hasMore={hasMore}
        />

        {hasMore && (
          <div className="flex justify-center mt-6">
            <button
              className="px-4 py-2 font-medium text-blue-500 bg-blue-100 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={loadMore}
            >
              {isShowingMore ? 'Show More' : 'Load More'}
            </button>
          </div>
        )}
      </Container>
    </>
  );
};

export default ProjectsPage;