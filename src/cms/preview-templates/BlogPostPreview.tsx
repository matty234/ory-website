import { Location } from '@reach/router'
import PropTypes from 'prop-types'
import React from 'react'

import { PlainBlogTemplate } from '../../templates/blog'
import '../previewGlobalDeps'

const BlogPostPreview = ({ entry, widgetFor }: any) => {
  const tags = entry.getIn(['data', 'tags'])
  const author = entry.getIn(['data', 'author'])
  const title = entry.getIn(['data', 'title'])
  const overline = entry.getIn(['data', 'overline'])
  const subtitle = entry.getIn(['data', 'subtitle'])
  const publishedAt = entry.getIn(['data', 'publishedAt'])
  const description = entry.getIn(['data', 'description'])
  return (
    <Location>
      {() => (
        <PlainBlogTemplate
          frontmatter={{
            description,
            title,
            overline,
            subtitle,
            publishedAt,
            author,
            seo: { title, keywords: (tags || []).join(', ') }
          }}
        >
          {widgetFor('body')}
        </PlainBlogTemplate>
      )}
    </Location>
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default BlogPostPreview
