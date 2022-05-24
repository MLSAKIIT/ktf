import ReactDOM from 'react-dom/client'
import App from './App'
import '@styles/global.css'
import { Main as MainLayout } from '@layouts/Main'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <MainLayout>
        <App />
    </MainLayout>
)
