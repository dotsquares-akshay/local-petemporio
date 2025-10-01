import React from 'react'
import SectionTitleCta from '../SectionTitleCta'
import ProductCard from '../ProductCard'
import ProductImage1 from '@/assets/images/prod1.png'  // imported image

function PopularProducts() {
  return (
    <section className='popular-products'>
      <div className="container">
        <SectionTitleCta title="Popular Products" cta="View More" href='/' />

        <ProductCard
          image={ProductImage1}
          title="Bowlers Nutrimax Chicken and Vegetables Adult Dog Dry Food"
          price=" 2,499"
          oldPrice=" 3,499"
          rating={4.5}
          className={'product-card'}
        />

        <ProductCard
          image={ProductImage1}  // path as string works too
          title="Smart Watch"
          price="₹1,999"
          rating={4}
          className={'product-card'}
        />

      </div>
    </section>
  )
}

export default PopularProducts
