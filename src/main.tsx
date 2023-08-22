import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles } from '@styles/GlobalStyle.ts'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RecoilRoot>
      <GlobalStyles />
      <App />
    </RecoilRoot>
)
