import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Topbar from "./components/Topbar";
import "./globals.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: "InteriorCafe - Home",
  description: "This is interiorcafe webpage. Its provide interior design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Topbar />
          <ResponsiveAppBar />
          {children}
          <Footer />
          <FloatingButtons />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
