import profile from '../assets/images/profile.png'

export default function Header() {
  return (
    <div className='flex items-center justify-between max-w-7xl mx-auto py-2 border-b'>
      <h2 className="text-3xl font-bold">Khowledge Cafe</h2>
      <img src={profile} alt="" />
    </div>
  )
}
