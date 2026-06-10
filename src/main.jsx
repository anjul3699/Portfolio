import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Portfolio from './Components/Portfolio/Portfolio.jsx'
import About from './Components/About/About.jsx'


let myRouteApp = createBrowserRouter([
  {
    path:"/",
    element: (
      <Suspense fallback={<h1>Loading Layout....</h1>}>
        <App/>
      </Suspense>
    ),
    errorElement:<Error/>,
    children:[
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading About....</h1>}>
            <About/>
          </Suspense>
        )
      },
      {
        path: "/Portfolio",
        element:(
          <Suspense fallback={<h1>Loading Portfolio...</h1>}>
            <Portfolio/>
          </Suspense>
        )
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={myRouteApp}></RouterProvider>
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
