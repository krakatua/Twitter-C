import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import PostFeed from '@/components/Postfeed'
import Trending from '@/components/Trending'
import Banner from '@/components/Banner'
import { useSelector } from 'react-redux'
import CommentModal from '@/components/modals/CommentModal'

export default function Home() {


  const username = useSelector(state => state.user.username)

  return (



    <div>
      <div className='bg-black min-h-screen text-[#e7e9ea] 
    max-w-[1400] mx-auto
    flex '>
        <Sidebar />
        <PostFeed />
        <Trending />
        {/*
      
       */}
      </div>

      <CommentModal/>
      

       {!username && <Banner/> }
      
    </div>


  )
}
