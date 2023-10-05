import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/get/index'
import HomePost from './pages/Home/post'
import HomeDelete from './pages/Home/Delete'
import HomePut from './pages/Home/Put'
import HomeImg from './pages/Home/GetImg'
import Error from './pages/Error'


export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/homeImg' element={<HomeImg />} />
                <Route path='/homeput' element={<HomePut />} />
                <Route path='/homedelete' element={<HomeDelete />} />
                <Route path='/homepost' element={<HomePost />} />
                <Route path='/home' element={<Home />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}