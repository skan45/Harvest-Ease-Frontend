import { ChatBubbleBottomCenterIcon, Cog6ToothIcon, StarIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/outline'
import { CameraIcon } from '@heroicons/react/24/outline'
import { PencilIcon } from '@heroicons/react/24/outline'
import { CalendarIcon } from '@heroicons/react/24/outline'
import { Square2StackIcon } from '@heroicons/react/24/solid'


export const SideBarData=[
    {
        title:"Home",
        link:"/",
        icon:<HomeIcon className='size-4'/>
    },
    { 
        title:"Forum",
        link:"/Forum",
        icon:<Square2StackIcon className="size-4 " />
    },
    {
        title:"Chatbot",
        link:"/Chatbot",
        icon:<ChatBubbleBottomCenterIcon className="size-4 " />
    },
    {
        title:"Resources Tracker",
        link:"/Resources-tracker",
        icon:<PencilIcon className="size-4 "/>
    },
    {
        title:"Plant Health Scanner",
        link:"Plant-health-scanner",
        icon:<CameraIcon className="size-4 "/>
    },
    {
        title:"Farm Scheduler",
        link:"/Farm-scheduler",
        icon:<CalendarIcon className="size-4 " />
    },
    {
        title:"Settings",
        link:"/Settings",
        icon:<Cog6ToothIcon className="size-4 "/>
    }
]