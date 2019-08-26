import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Layout, Menu, Row, Icon, Col } from 'antd'

interface Props {
  siteTitle: string
}

export class Header extends Component<Props> {
  render() {
    return (
      <Row>
        <Menu mode="horizontal">
          {/* <Menu.Item>
            <Link to="/docs/get-started/introduction/">{this.props.siteTitle}</Link>
          </Menu.Item> */}
          <Menu.Item>
            <a
              href="https://github.com/jannikbuschke/gatsby-antd-docs" target="_blank">
              <Icon type="home" theme="filled" />
              TCT Gaming
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="https://github.com/tct-gaming/tct-warframe-player-guide" target="_blank">
              <Icon type="github" theme="filled"/>
              Repo
            </a>
          </Menu.Item>
        </Menu>
      </Row>
    )
  }
}

