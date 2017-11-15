import React from 'react'
import Header from './Header';
import Content from './Content'

const Page = (props) => {
  const { title, showBackButton, children } = props
  return (
    <div className="page">
      <Header title={title} showBackButton={showBackButton}/>
      <Content>{children}</Content>
    </div>
  )
}

export default Page