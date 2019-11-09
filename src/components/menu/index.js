import React from 'react';
import { Menu, Layout } from 'antd';


const NavBar = () => {
  return(
    <Layout>
      <Layout.Header>
        <Menu mode="horizontal">
          <Menu.Item>
            Connect 4
          </Menu.Item>
          <Menu.Item>
            New Game
          </Menu.Item>
          <Menu.Item>
            Play Again
          </Menu.Item>
          <Menu.Item>
            Score
          </Menu.Item>
        </Menu>
      </Layout.Header>
    </Layout>
 
  )
}

export default NavBar;