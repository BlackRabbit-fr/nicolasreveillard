import React from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated, config } from 'react-spring'

const FadeIn = ({ children }) => {
  const props = useSpring(() => ({
    config: config.slow,
    to: [{ opacity: 0.8 }],
    from: { opacity: 0 },
  }))

  return <animated.div style={props}>{children}</animated.div>
}

export default FadeIn

FadeIn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}
