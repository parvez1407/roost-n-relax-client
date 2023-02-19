import React, { useEffect, useState } from 'react'
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

      <div>
        <SearchForm />
      </div>

      <div>
        <div>Home Cares</div>
        <div>Experience Cards</div>
      </div>

    </div>
  )
}

export default Home
