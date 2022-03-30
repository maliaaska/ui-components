import React from 'react'
import ContentLoader from 'react-content-loader'

export const ProductsLoader = () => (
  <ContentLoader
    speed={3}
    width={1000}
    height={700}
    viewBox="0 0 300 300"
    backgroundColor="#f3f3f5"
    foregroundColor="#ecebeb"
  >
    <rect x="100" y="50" rx="3" ry="3" width="100%" height="160" />
    <rect x="130" y="220" rx="3" ry="3" width="50%" height="40" />
    <rect x="160" y="270" rx="3" ry="3" width="30%" height="30" />
  </ContentLoader>
)
