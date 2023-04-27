import {
    HomeIcon,
    HashtagIcon,
    InboxIcon,
    BookmarkIcon,
    ClipboardListIcon,
    BellIcon,
    UserIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon
} from '@heroicons/react/outline'
import Image from 'next/image'

export default function Sidebar() {
    return (
        <div className="hidden h-full sm:flex flex-col fixed xl:ml-24">
            <nav className='h-full relative xl:space-y-1.5'>
                <div className='flex justify-center xl:justify-start items-center  py-3 xl:p-3'>
                    <Image src={"/assets/twitter-logo.png"} width={34} height={34} />
                </div>
                <SidebarLink Icon={HomeIcon} text={"Home"} />
                <SidebarLink Icon={HashtagIcon} text={"Explore"} />
                <SidebarLink Icon={BellIcon} text={"Notifications"} />
                <SidebarLink Icon={InboxIcon} text={"Messages"} />
                <SidebarLink Icon={BookmarkIcon} text={"Bookmarks"} />
                <SidebarLink Icon={UserIcon} text={"Profile"} />
                <SidebarLink Icon={DotsCircleHorizontalIcon} text={"More"} />
                <button className='hidden xl:inline bg-[#1d9bf0]
                rounded-full h-[52px] mt-2 w-[200px] text-lg font-bold'>
                    Tweet!
                </button>

                <div className='hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer
                absolute xl:p-3 bottom-0 flex justify-center items-center space-x-3'>
                    <img className='w-10 h-10 rounded-full object-cover ml-3' src='/assets/kylie.png'/>
                    <div className='hidden xl:inline'>
                        <h1 className='
                        font-bold whitespace-nowrap'>Name</h1>
                        <h1 className='text-gray-500'>@username</h1>
                    </div>
                    <DotsHorizontalIcon className='w-5 h-5 hidden xl:inline' />
                </div>
            </nav>
        </div>
    )
}


function SidebarLink({ text, Icon }) {
    return (
        <li className='hoverAnimation flex mb-3 xl:justify-start justify-center items-center text-xl space-x-3'>
            <Icon className="h-7" />
            <span className='hidden xl:inline'>{text}</span>
        </li>
    )
}