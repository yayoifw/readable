import React from 'react'
import Header from './Header';
import Content from './Content'

const Page = (props) => {
  const { title, children } = props
  return (
    <div className="page">
      <Header title={title}/>
      <Content>{children}</Content>
    </div>
  )
}

export default Page