import { useState } from 'react'
import { ThemeProvider } from 'next-themes'
import { ModeContext } from '../contexts/ModeContext'
import { SideBarContext } from '../contexts/SideBarContext'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState()
  const [toggle, setToggle] = useState()

  return (
    <ThemeProvider attribute="class">
      <ModeContext.Provider value={[mode, setMode]}>
        <SideBarContext.Provider value={[toggle, setToggle]}>
          <Component {...pageProps} />
        </SideBarContext.Provider>
      </ModeContext.Provider>
    </ThemeProvider>
  )
}
