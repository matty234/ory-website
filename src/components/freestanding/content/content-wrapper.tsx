import cn from 'classnames'
import React from 'react'

import * as styles from './content-wrapper.module.css'

export interface PropTypes {
  children: React.ReactNode
  className?: string
}

const ContentWrapper = ({ children, className }: PropTypes) => (
  <div className={cn(styles.contentWrapper, className && className)}>
    {children}
  </div>
)

export default ContentWrapper
