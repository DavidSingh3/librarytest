import React, { Component } from 'react'
import '../styles/components/ProgressBar.scss'
import PropTypes from 'prop-types'

class ProgressBar extends Component {
  render () {
    const {progress} = this.props
    const limitedProgress = (typeof progress !== 'number' || progress < 0) ? 0 : (progress > 100) ? 100 : progress
    const progressPercentage = `${parseInt(limitedProgress, 10)}%`
    return (
      <div className='progress-bar-container'>
        <div className='progress-bar'>
          <div className='inner' style={{width: progressPercentage}}/>
        </div>
        <div className='text'>{progressPercentage}</div>
      </div>
    )
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
}

export default ProgressBar
