import MenuIcon from '@mui/icons-material/Menu'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode';

interface HeaderProps {
  themeMode: string
  onChangeDarkMode: () => void
}

export default function Header({themeMode, onChangeDarkMode}: HeaderProps) {  
  return <main className="flex items-center justify-between p-6 h-12 bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
    <span>Gonzalo Balduvino</span>
    <div className="flex gap-5">
      { themeMode === "light"
          ? <LightModeIcon className="cursor-pointer" onClick={(e) => onChangeDarkMode()}/>
          : <DarkModeIcon className="cursor-pointer" onClick={(e) => onChangeDarkMode()}/>
      }
      <MenuIcon />
    </div>
  </main>
}
