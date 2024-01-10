import React from 'react'
import ReactDOM from 'react-dom/client'
import css from './index.module.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className={css.test}>Hello world</div>
  </React.StrictMode>
)
