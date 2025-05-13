import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@styles/globals.scss";
import App from './App.tsx'
import {init} from "@telegram-apps/sdk-react";
import {BrowserRouter} from "react-router";
import ThemeProvider from "@components/ThemeProvider";
init();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme={"system"}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
