import React, { useEffect, useState } from 'react'
import ExpCard from '../Components/Card/ExpCard';
import HomeCard from '../Components/Card/HomeCard';
import SearchForm from '../Components/Form/SearchForm';
import Spinner from '../Components/Spinner/Spinner'
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allExp, setAllExp] = useState([]);

  useEffect(() => {
    fetch('expdata.json')
      .then(res => res.json())
      .then(data => {
        setAllExp(data)
      })
  }, [])

  return (
    <div className='md:flex justify-center gap-10 px-6 md:px-10 lg:px-20'>

      <div className='mt-4'>
        <SearchForm />
      </div>

      <div className='flex-1'>
        <div>
          <HomeCard />
        </div>
        <div>
          <ExpCard />
        </div>
      </div>

    </div>
  )
}

export default Home
