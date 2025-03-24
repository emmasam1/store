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
  const [products, setProducts] = useState([]); // State to store fetched products
  const [category, setCategory] = useState(''); // State to manage selected category
  const [selectedKey, setSelectedKey] = useState('all-products'); // Track selected menu item
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Handle window resize to close sidebar on smaller screens
  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      setCollapsed(true); // Close sidebar if window width <= 1024px
    } else {
      setCollapsed(false); // Keep sidebar open if window width > 1024px
    }
  };

  useEffect(() => {
    // Listen for window resizing and update state accordingly
    window.addEventListener('resize', handleResize);

    // Call once to set initial state based on window width
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Fetch products from the backend based on category
  const fetchProducts = async (category = '') => {
    setLoading(true);
    try {
      const url = category
        ? `https://store-server-6lv5.onrender.com/api/product?category=${category}`
        : 'https://store-server-6lv5.onrender.com/api/product'; // If no category, get all products
      console.log('Fetching products from URL:', url); // Log the URL being hit

      const response = await axios.get(url);
      console.log('Response data:', response.data); // Log the response data

      if (response.data && response.data.length > 0) {
        setProducts(response.data); // Set products if data is present
      } else {
        console.log('No products found for this category.');
        // Show a message indicating category doesn't exist
        message.error('Category not found, displaying all products.');
        fetchProducts(); // Fallback to all products
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      message.error('Error fetching products.');
    } finally {
      setLoading(false);
    }
  };

  // Handle category selection and trigger fetch
  const handleCategoryChange = (category) => {
    setCategory(category); // Set the category in state
    setSelectedKey(category); // Update selected key for menu highlighting
  };

  // Handle "All Products" selection
  const handleAllProducts = () => {
    setCategory(''); // Clear category filter
    setSelectedKey('all-products'); // Update selected key for menu highlighting
  };

  // useEffect to call fetchProducts whenever category changes
  useEffect(() => {
    fetchProducts(category); // Fetch products when category changes
  }, [category]); // Runs every time category changes (including when it's an empty string for "All Products")

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
              <Cards products={products} /> // Pass the filtered products to Cards component
            )}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
