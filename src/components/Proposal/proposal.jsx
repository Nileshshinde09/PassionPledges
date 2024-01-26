import React,{useEffect,useState} from 'react'
import ConfettiExplosion from 'react-confetti-explosion';
import useSound from 'use-sound';
const proposal = () => {
  const [playSound, { stop }] = useSound('Janam Janam.mp3');
  const [playSongFlag, setPlaySongFlag] = useState(true)
  const [expload, setExpload] = useState(false)
  const playSong=()=>{
    if(playSongFlag){
      playSound()
      setPlaySongFlag(!playSongFlag)
    }
  }
  const stopSong=()=>{
    stop()
    setPlaySongFlag(!playSongFlag)
  }
  const exploadPoper=()=>{
    setExpload(!expload)
    

  }
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className='no-scrollbar overflow-hidden'>

        <div>
          <div className='absolute top-1/3 left-10 text-center'>
            <h1 className={`text-wrap text-6xl text-white ${!playSongFlag?"":"hidden"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, repellat.
            </h1>
            <text className={`text-center text-xl text-wrap text-slate-100 bg-red-700 bg-opacity-45 ${!playSongFlag?"":"hidden"}`}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vitae facere esse ipsum, veniam laborum distinctio inventore, consequuntur placeat consequatur soluta rem earum, sapiente eligendi asperiores! Ex dolorem debitis beatae sequi? Consequatur exercitationem harum doloremque tempora eum magnam quia. Soluta, deleniti beatae doloremque ipsam eaque possimus corrupti, voluptatem neque optio nobis cumque consequuntur rerum laboriosam natus veritatis minus modi quas voluptates voluptate unde saepe magnam! Harum beatae quod esse quibusdam nesciunt culpa temporibus unde, ipsa sed facere provident deserunt odit error velit voluptatum voluptas atque itaque minima quisquam, perferendis eligendi recusandae vero earum eveniet? Perferendis id sed incidunt minima blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reiciendis dolores ad laudantium, officiis numquam sit et, dolor eum praesentium quaerat nemo minima repudiandae est. Dicta optio consequuntur assumenda? Similique.
            </text>

            
          <button onClick={()=>{handleClickScroll('second-page')}}  className={`${!playSongFlag?"":"hidden"} bg-blue-300 border-2  border-fuchsia-900 sm:py-3 py-2 sm:px-14 px-10 rounded-xl hover:scale-110 shadow-lg w-[10rem] m-10`}>Next</button>
          </div>
          <img src='proposalDefaultImage.jpg' className='bg-cover h-screen w-full object-cover'/>
          <div className='absolute top-7 sm:left-1/2 max-sm:right-1/2'>
            <button onClick={()=>playSong()} className={`bg-cyan-200 py-3 px-14 rounded-xl hover:scale-110 shadow-lg shadow-red-300 ${!playSongFlag? "hidden":""}`}>Start</button>
            
            <button onClick={()=>stopSong()} className={`bg-orange-200 py-3 px-14 rounded-xl hover:scale-110 shadow-lg shadow-green-300 ${playSongFlag? "hidden":""}`}>Stop</button>
          
          </div>
        </div>

        <div className="area" id='second-page'>
          
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
          <img src='proposalDefaultImageFemale.jpg' className='w-[20rem] mx-auto mt-10 shadow-2xl shadow-purple-500'/>
          <h1 className='text-3xl text-yellow-100 font-bold text-center pt-5 text-wrap px-3'>will you accept the proposal ?</h1>
          <div className='mx-auto w-[20rem] sm:w-[24rem] space-x-2 mt-[3rem] px-3'>
          <div></div>
          {expload?
          <>
          <ConfettiExplosion/>
          <ConfettiExplosion/>
          <ConfettiExplosion/>
          <ConfettiExplosion/>
          <ConfettiExplosion/>

          </>:<></>}
          <button onClick={()=>{exploadPoper()}}  className="bg-pink-300 border-2  border-fuchsia-900 sm:py-3 py-2 sm:px-14 px-10 rounded-xl hover:scale-110 shadow-lg ">Accepte</button>
          <button onClick={()=>{console.log("second");}}  className="bg-rose-300 border-2  border-fuchsia-900 sm:py-3 py-2 sm:px-14 px-10 rounded-xl hover:scale-110 shadow-lg ">Reject</button>
          </div>
          <div className='mx-auto w-[20rem] mt-4'>

          <textarea placeholder='Enter message' className='p-3 rounded-xl border-2 border-black w-full'/>
          <button onClick={()=>{console.log("second");}}  className="bg-blue-300 border-2  border-fuchsia-900 sm:py-3 py-2 sm:px-14 px-10 rounded-xl hover:scale-110 shadow-lg mx-auto">Send</button>
          
          </div>
      </div>
    </>
  )
}

export default proposal



