import React, { FC, ReactNode } from "react"
import { Helmet } from "react-helmet"

type Product = {
  title: string
  children: ReactNode
}

export const ProductLayout: FC<Product> = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  )
}
