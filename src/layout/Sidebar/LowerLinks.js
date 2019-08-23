import React from 'react'
import { Menu, Row, Icon } from 'antd'

export default () => (
  <Row>
    <Menu mode="vertical">
      <Menu.Item>
        <a href="https://warframe.fandom.com/wiki/WARFRAME_Wiki" target="_blank" rel="noopener noreferrer">
          <Icon type="home" theme="filled" />
          Warframe Wiki
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://github.com/jannikbuschke/gatsby-antd-docs" target="_blank" rel="noopener noreferrer">
          <Icon type="github" theme="filled" />
          Original Repo
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <Icon type="read" />
          Documentation
        </a>
      </Menu.Item>
    </Menu>
  </Row>
)