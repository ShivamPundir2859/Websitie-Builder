import React, { forwardRef } from 'react'
import type { Project } from '../types';
import { iframeScript } from '../assets/assets';

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

      const iframeRef = useRef<HTMLFrameElement>(null)
      const injectPreview = (html: string) =>{
         if(!html)return '';
         if(!showEditorPanel) return html
         if(html.includes('</body>')){
            return html.replace('</body>', iframeScript + '</body>')
         }else{
            return html + iframeScript
         }
      }

  return (
    <div className='relative h-full bg-gray-900 flex-1 rounded-xl overflow-hidden max-sm:ml-2'>
      {project.current_code? (
         <>
         <iframe 
         ref={iframeRef}
         srcDoc={injectPreview(project.current_code)}/>
         </>
      ): isGenrating&& (
         <div>loading</div>
      )}
    </div>
  )
})

export default ProjectPreview
