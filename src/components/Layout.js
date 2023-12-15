import React, { useState, useEffect } from 'react'

import { Navigation } from './Navigation'


export const Layout = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const onUpdateTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    window.localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')

    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  return (
    <div>
      <div id="layout" className="layout">
        <Navigation onUpdateTheme={onUpdateTheme} theme={theme} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
