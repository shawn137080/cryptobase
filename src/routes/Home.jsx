import React from 'react'
import CoinSearch from '../component/CoinSearch'
import Trending from '../component/Trending'

const Home = ({coins}) => {
  return (
    <div className='duration-300'>
        <CoinSearch coins={coins}/>
        <Trending />
    </div>
  )
}

export default Home