import React from 'react'
import './TitleBar.css'

export const TitleBar = ({title, subtitle}) => {
  return (
    <div className='titlebar'>
        <p className='titlebar__subtitle'>{subtitle}</p>
        <h2 className='titlebar__title'>{title}</h2>
    </div>
  )
}

