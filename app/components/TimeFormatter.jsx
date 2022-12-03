import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const TimeFormatter = ({ date }) => {
  const formatter = new Intl.RelativeTimeFormat('en')
  const diff = new Date() - new Date(date).valueOf()
  let time = Math.floor(diff / (1000 * 60 * 60 * 24))
  let timeUnit = 'days'

  if (time < 1) {
    time = Math.floor(diff / (1000 * 60 * 60))
    timeUnit = 'hours'

    if (time < 1) {
      time = Math.floor(diff / (1000 * 60))
      timeUnit = 'minutes'
    }
  }

  return <p>📅 {formatter.format(-time, timeUnit)}</p>
}

TimeFormatter.propTypes = {
  date: PropTypes.string.isRequired,
}

export default TimeFormatter
