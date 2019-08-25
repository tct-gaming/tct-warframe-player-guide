import React from 'react'
import 'antd/lib/button/style/css'
import { Link } from 'gatsby'
import { Button, PageHeader, Icon } from 'antd'
import { Header } from '../Header'
import logo from '../images/TCT-logo.png'

const headingStyle = {
  color: 'cornflowerblue',
  fontSize: 50,
  fontWeight: 'bold',
}

const IndexPage = () => (
  <div align="center" style={{ padding: 80 }}>
    <Link to="/docs/new-player/introduction">
      <p style={headingStyle}>
        TCT Warframe Player Powered Wiki
      </p>
    </Link>
    
    {/* <Button.Group size="large"> */}
      {/* <Button type="primary" >
        <Link to="/docs/new-player/introduction">Checkout Wiki</Link>
      </Button> */}
      {/* <Button
        href="https://github.com/jannikbuschke/gatsby-antd-docs"
        target="_blank"
      >
        Github
        <Icon type="github" />
      </Button> */}
      {/* <Button type="primary" >
        <a href="http://tctgaming.com">Blog</a>
      </Button> */}
    {/* </Button.Group> */}

    <div style={{ marginTop: '20px' }}>
      <Link to="/docs">
        <img src={logo} />
      </Link>      
    </div>
  </div>
)

export default IndexPage
