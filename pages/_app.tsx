import { EmptyLayout } from '@/component/layout';
import { createEmotionCache, theme } from '@/utils/index';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppPropsWithLayout } from '../models';
import '../styles/index.css';
// import '../component/common/styles/index.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const Layout = Component.Layout ?? EmptyLayout

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>

  )
}



export default MyApp
