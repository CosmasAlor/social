'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from '@mui/material/styles';
import theme from '../app/them';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Toaster } from "react-hot-toast";
import Container from "@mui/material/Container";



// const inter = Inter({subsets: ["latin"]});



export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Provider store={store}>
              <AppRouterCacheProvider>
                <ThemeProvider theme={theme}>
                  <Navbar/>
                    {children}
                  <Toaster/>
                </ThemeProvider>
              </AppRouterCacheProvider>
          </Provider>

      </body>
    </html>
  );
}
