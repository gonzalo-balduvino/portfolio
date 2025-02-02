import MenuIcon from '@mui/icons-material/Menu'
import DarkModeIcon from '@mui/icons-material/DarkMode'

interface HeaderProps {
  onChangeDarkMode: () => void
}

export default function Header({onChangeDarkMode}: HeaderProps) {  
  return <main className="flex items-center justify-between p-6 h-12 bg-white dark:bg-gray-800">
    <span>This is the header</span>
    <div className="flex gap-5">
      <DarkModeIcon onClick={(e) => onChangeDarkMode()}/>
      <MenuIcon />
    </div>
  </main>
}
