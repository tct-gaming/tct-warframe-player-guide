import React, { Component } from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Menu from 'antd/lib/menu'
import 'antd/lib/menu/style/css'
import { pathPrefix } from '../gatsby-config'
import LowerLinks from 'layout/Sidebar/LowerLinks'
import { orderComparator, sortTree, convertToTree } from 'utils'

const SubMenu = Menu.SubMenu

interface Props {
  root: any
}

export const SidebarContents = ({ root }: Props) => {
  return (
    <StaticQuery
      query={graphql`
        query sidebarContentQuery {
          allMdx(sort: { order: ASC, fields: [fields___slug] }) {
            edges {
              node {
                fields {
                  slug
                }
                id
                frontmatter {
                  title
                  parents
                  order
                }
              }
            }
          }
        }
      `}
      render={data => {
        const [tree, dir] = convertToTree(
          data.allMdx.edges.filter(node =>
            node.node.fields.slug.startsWith(root)
          )
        )
        sortTree(tree)
        const loop = data =>
          data.map(item => {
            if (item.children) {
              item.children.sort(orderComparator)

              return (
                <SubMenu
                  key={item.key}
                  title={<span style={{ fontWeight: 900 }}>{item.title}</span>}
                >
                  {loop(item.children)}
                </SubMenu>
              )
            }
            return (
              <Menu.Item key={item.path}>
                <Link to={item.path}>
                  <div>{item.title}</div>
                </Link>
              </Menu.Item>
            )
          })
        const keys =
          typeof window !== 'undefined'
            ? [pathPrefix + window.location.pathname]
            : undefined
        const defaultOpenKeys = dir.map(item => item.key)
        
        return (
          <div>
            <Menu
              mode="inline"
              style={{ minWidth: 180, height: '100%', borderRight: 0 }}
              defaultOpenKeys={defaultOpenKeys}
              selectedKeys={keys}
            >
              {loop(tree)}
            </Menu>
            <LowerLinks />
          </div>
        )
      }}
    />
  )
}
