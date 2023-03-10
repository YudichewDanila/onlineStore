import '../styles/globals.css'
import { Provider } from 'react-redux'
import { setupStore } from '../store/store';
import { Suspense } from 'react';
import '../ultils/i18next'

const store = setupStore();

const app = ({Component, pageProps})=>(
    
        <Provider store={store}>
            <Suspense fallback={<div>Loading...</div>}>
            <Component {...pageProps}/>
            </Suspense>
        </Provider>
    
)

export default app;