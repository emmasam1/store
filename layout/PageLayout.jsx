import React, { useState, useEffect } from 'react';
import { Layout, Menu, Spin, theme, message } from 'antd'; // Import message for error alert
import { ManOutlined, WomanOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import axios from 'axios';
import Navbar from '../src/components/Navbar';
import Cards from '../src/components/Cards';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

const PageLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]); 
  const [category, setCategory] = useState(''); 
  const [selectedKey, setSelectedKey] = useState('all-products'); 
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      setCollapsed(true); 
    } else {
      setCollapsed(false); 
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const fetchProducts = async (category = '') => {
    setLoading(true);
    try {
      const url = category
        ? `https://store-server-6lv5.onrender.com/api/product?category=${category}`
        : 'https://store-server-6lv5.onrender.com/api/product';

      const response = await axios.get(url);
      if (response.data && response.data.length > 0) {
        setProducts(response.data);
      } else {
        if (category) {
          console.log('No products found for this category.');
          message.error('Category not found, displaying all products.');
          fetchProducts();
        } else {
          setProducts([]); 
        }
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      message.error('Error fetching products.');
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setCategory(category); 
    setSelectedKey(category); 
  };

  const handleAllProducts = () => {
    setCategory('');
    setSelectedKey('all-products');
    fetchProducts(); 
    console.log('Fetching all products...');
  };

  useEffect(() => {
    fetchProducts(category);
  }, [category]); 

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <Layout
        style={{
          padding: '24px 0',
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        {/* Sider with responsive collapsible functionality */}
        <Sider
          width={200}
          collapsible
          collapsed={collapsed}
          onCollapse={(collapsed) => setCollapsed(collapsed)}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            selectedKeys={[selectedKey]} // Dynamically highlight selected category
            style={{
              height: '100%',
              borderRight: 0,
              paddingTop: '45px',
            }}
          >
            {/* All Products Category */}
            <Menu.Item key="all-products" icon={<AppstoreAddOutlined />} onClick={handleAllProducts}>
              All Products
            </Menu.Item>

            {/* Male Category with ManOutlined icon */}
            <SubMenu key="male" icon={<ManOutlined />} title="Male">
              <Menu.Item key="male-adult" onClick={() => handleCategoryChange('Male Adult')}>
                Adult
              </Menu.Item>
              <Menu.Item key="male-children" onClick={() => handleCategoryChange('Male Children')}>
                Children
              </Menu.Item>
            </SubMenu>

            {/* Female Category with WomanOutlined icon */}
            <SubMenu key="female" icon={<WomanOutlined />} title="Female">
              <Menu.Item key="female-adult" onClick={() => handleCategoryChange('Female Adult')}>
                Adult
              </Menu.Item>
              <Menu.Item key="female-children" onClick={() => handleCategoryChange('Female Children')}>
                Children
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        {/* Content Section */}
        <Layout>
          <Content
            style={{
              padding: '24px',
              background: 'white',
            }}
          >
            {loading ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <Spin size="large" tip="Loading..." />
              </div>
            ) : (
              <Cards products={products} /> 
            )}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
