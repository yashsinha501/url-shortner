import React from 'react'
import SideNavbar from './SideNavbar/SideNavbar'
import DashboardHome from './DashboardPages/DashboradHome/DashboardHome'
import Profile from './DashboardPages/Profile/Profile'
import MyTeam from './DashboardPages/MyTeam/MyTeam'
import MyURLs from './DashboardPages/MyURLs/MyURLs'
import CreateURL from './DashboardPages/CreateUrl/CreateURL'
import ViewURL from './DashboardPages/ViewURL/ViewURL'
import EditUrl from './DashboardPages/EditUrl/EditUrl'
import ContentLocked from './DashboardPages/ContentLocked/ContentLocked'
import './Dashboard.css'

const Dashboard = ({page}) => {
  return (
    <div className="dashboard">

      <section className='sideNavbar-section'>
        <SideNavbar />
      </section>

      <section className='mainContent-section'>
        {
          page==='dashboard-home' ? <DashboardHome /> :
          page==='profile' ? <Profile /> : 
          page==='my-team' ? <MyTeam /> :
          page==='myUrls' ? <MyURLs /> :
          page==='createUrl' ? <CreateURL /> :
          page==='viewUrl' ? <ViewURL /> :
          page==='editUrl' ? <EditUrl /> :
          page==='content-locked' ? <ContentLocked/> :
          <h1>404</h1>
        }
      </section>
    </div>
  )
}

export default Dashboard