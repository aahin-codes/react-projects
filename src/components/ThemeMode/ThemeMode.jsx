import './_themeMode.scss';
import Rendering from '../RenderingComponent/Rendering'
import data from './theme-data'
import useLocalStorage from './useLocalStorage';


export default function ThemeMode() {

  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  
  function handleTheme(){
   setTheme( theme === 'light' ? 'dark':'light')
  }

  const renderingContent = (
      <>
        <h2>Hello Ghost's</h2>
        <button onClick={()=> handleTheme()}>Change Theme</button>
      </>
    )
  
    return (
    <Rendering data={data} renderingComponent={renderingContent}  className={`theme-mode ${theme}`}/>
  )
}
