import React from 'react';
import { notFound } from 'next/navigation';
import CaseStudyDetailClient from '@/components/CaseStudyDetailClient';
import { getProjectBySlug, PROJECTS_DATA } from '@/data/projectsData';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    const fallback = PROJECTS_DATA[0];
    if (!fallback) notFound();
    return renderHelper(fallback);
  }

  return renderHelper(project);
}

function renderHelper(project: ReturnType<typeof getProjectBySlug> & {}) {
  if (!project) return null;

  const currentIndex = PROJECTS_DATA.findIndex((p) => p.slug === project.slug);
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];
  const prevProject = PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];

  return (
    <CaseStudyDetailClient
      project={project}
      nextProject={nextProject}
      prevProject={prevProject}
    />
  );
}
