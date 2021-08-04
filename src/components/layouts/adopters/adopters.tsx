import cn from 'classnames'
import React from 'react'

import Button from '../../freestanding/button/button'
import Container from '../../freestanding/containers/container'

import AdoptersLogo from './adopters-logo'

import * as styles from './adopters.module.css'

interface Adopter {
  title: string
  image: string
  url: string
  featured?: boolean
}

interface PropTypes {
  adopters: Array<Adopter>
}

const Adopters = ({ adopters }: PropTypes & { featured?: boolean }) => (
  <div className={cn(styles.adopters, 'background-is-dark')}>
    <Container fluid={true} justify={'center'}>
      {adopters.map((adopter, index) => {
        return (
          <Container
            key={adopter.title}
            className={cn(styles.adoptersContainer)}
            justify={'center'}
            xsHidden={index > 3}
            smHidden={index > 5}
            mdHidden={index > 7}
          >
            <AdoptersLogo>
              <Button
                to={adopter.url}
                style={'none'}
                openInNewWindow={true}
                className={cn(styles.adoptersLink)}
              >
                <img
                  width={'100%'}
                  height={'100%'}
                  loading="lazy"
                  src={adopter.image}
                  alt={adopter.title}
                />
              </Button>
            </AdoptersLogo>
          </Container>
        )
      })}
    </Container>
  </div>
)

export default Adopters
