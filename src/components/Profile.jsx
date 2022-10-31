import profile from '../assets/profile.jpg'
import { FaTwitter } from 'react-icons/fa'
import camera from '../assets/camera.png'
import mshare from '../assets/msharebutton.png'
import dshare from '../assets/dsharebutton.png'

const Profile = () => {
  return (
    
    <div className='flex flex-col w-full h-[80px] items-center text-[black] mb-36 mt-5 px-4 md:px-20 sm:px-10'>
      <div className='mb-1 hover:cursor-pointer flex self-end '>
       
          <img src={mshare} alt="" className='md:hidden' />
          <img src={dshare} alt="" className='hidden md:flex mr-60'/>
        
      </div>
        
        <div className='py-4 flex justify-between hover:opacity-20 group '>
            <img id='profile__img'
            src={profile} alt="profile" className='' style={{width : '90px',height: '90px', borderRadius: '50%' }} />
            <div className='pt-10 text-center opacity-0 group-hover:opacity-100'>
              <img src={camera} alt="" style={{marginLeft: '-60px'}} className='bg-[black] absolute'/>
            </div>                
            
            
        </div>
        <div>
            <p className='font-bold text-xl mb-2 '>Favour Enwonwu</p>

            <p id='twitter' className='flex justify-between w-full items-center font-bold italic  '> 
            <FaTwitter size={20}/>
            @Tech__Goddess
            </p>
            {/* <p id='slack'>
                Favour Lissa
            </p> */}
        </div>
    </div>
  )
}

export default Profile