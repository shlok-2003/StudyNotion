import { 
    Route,
    RouterProvider, 
    createBrowserRouter,
    createRoutesFromChildren
} from 'react-router-dom'
import './styles/App.css'

import Main from './layouts/Main.tsx'
import { Home, NotFound } from './pages'
import Error from './components/error/index.tsx'

const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route path='/' element={<Main/>} errorElement={<Error />} >
            <Route index element={<Home/>} />
            <Route path='*' element={<NotFound/>} />
        </Route>
    )
)

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}