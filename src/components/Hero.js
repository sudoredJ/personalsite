import React from 'react'

const capitalizeWords = (str) => {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

export const Hero = ({ highlight, subTitle, title, children, index }) => {
  return (
    <header className={`hero ${index ? 'index' : ''}`} style={{ color: '#FFFFFF' }}>
      {subTitle && (
        <div className="sub-title">
          {highlight && <span className="highlight">{highlight}</span>}
          {subTitle}
        </div>
      )}
      {title && <h1 style={{ textTransform: 'none' }}>{capitalizeWords(title)}</h1>}
      {children && children}
    </header>
  )
}