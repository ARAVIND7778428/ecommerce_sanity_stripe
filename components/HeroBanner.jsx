// rafce
import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
        <div className=''>
            <p className='beats-solo'>{ heroBanner.smallText }</p>
            <h3>{ heroBanner.midText }</h3>
            <h1>{ heroBanner.largeText1 }</h1>
            <img src={urlFor(heroBanner.image[0])} alt='Boat Headphone'
            className='hero-banner-image' />

            <div>
                <Link href={`/product/boat-headphone`}>
                    <button type='button'>{heroBanner.buttonText}</button>
                </Link>
                <div className='desc'>
                    <h5>Description </h5>
                    <p>{ heroBanner.desc }</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner
