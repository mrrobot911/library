import Image from "next/image";
import { FunctionComponent } from "react";

interface ProfileDataProps {
    booksize:number
    fontsize:string
}
 
const ProfileData: FunctionComponent<ProfileDataProps> = ({booksize, fontsize}) => {
    const profileData = [
        {name:'visits',
        picture:'/images/Union.png',
        data:23
        },
        {name:'bonuses',
        picture: '/images/Star.png',
        data: 1240
        },
        {name:'Books',
        picture: '/images/book.png',
        data: booksize
        }
    ]
    return ( 
        <div className="flex gap-[20px]">
            {profileData.map(item =>{return(
                <div key={item.name} className="flex flex-col gap-[10px] items-center capitalize">
                    <p className={`text-[${fontsize}] tracking-[0.4px]`}>{item.name}</p>
                    <Image src={item.picture} width={20} height={21} alt={item.name}/>
                    <p className="text-[10px] tracking-[0.2px]">{item.data}</p>
                </div>
            )})}
        </div>
     );
}
 
export default ProfileData;