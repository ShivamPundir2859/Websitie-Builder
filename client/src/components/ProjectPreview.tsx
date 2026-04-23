import React, { forwardRef } from 'react'
import type { Project } from '../types';

interface ProjectPreviewProps{
   project: Project;
   isGenrating: boolean;
   device?: 'phone' | 'tablet' | 'desktop';
   showEditorPanel?: boolean;
}

export interface ProjectPreviewRef{
   getCode:()=> string | undefined;
}

const ProjectPreview = forwardRef<ProjectPreviewRef, ProjectPreviewProps>(
   ({project, isGenrating, device = 'desktop', showEditorPanel = true}, ref) => {
  return (
    <div className='relative h-full bg-gray-900 flex-1 rounded-xl overflow-hidden max-sm:ml-2'>
      {project.current_code? (
         <>
         </>
      )}
    </div>
  )
})

export default ProjectPreview
