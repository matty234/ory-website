import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import BlogPreview from './preview-templates/BlogPreview'
import NavigationPreview from './preview-templates/NavigationPreview'

CMS.registerMediaLibrary(uploadcare)

CMS.registerPreviewTemplate('blogpost', BlogPostPreview)
CMS.registerPreviewTemplate('blog', BlogPreview)
CMS.registerPreviewTemplate('navigation', NavigationPreview)
