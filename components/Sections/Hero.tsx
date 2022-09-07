const Hero: React.FC = () => {
  return (
    <div className='flex w-screen h-screen bg-black'>
      <video className=' w-screen h-screen object-cover' src={require('../../assets/videoBg.mp4')} autoPlay loop />
    </div>
  )
}

export default Hero
