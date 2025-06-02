import './App.css'
import {Navigate, Route, Routes} from "react-router";

import HomePage from "@pages/Home";
import MainLayout from "@layouts/MainLayout";
import ExchangePage from "@pages/Exchange";
import SettingsPage from "@pages/Settings";
import ReferralsPage from "@pages/Referrals";


function App() {

  return (

    <Routes>
      <Route element={<MainLayout/>}>
        <Route path={'/'}  element={<HomePage/>}/>
        <Route path={'/exchange'} element={<ExchangePage/>}/>
        <Route path={'/settings'} element={<SettingsPage/>}/>
        <Route path={'/referrals'} element={<ReferralsPage/>}/>
        <Route path={'*'} element={<Navigate to={'/'} />}/>
      </Route>

    </Routes>
  )
}

export default App
