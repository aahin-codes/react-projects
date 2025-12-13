
import Rendering from '../rendering-component/rendering'
import data from './theme-data'
import useLocalStorage from './useLocalStorage';
export default function Theme() {

  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  console.log(theme);
  
  
  function handleTheme(){
    
   setTheme( theme === 'light' ? 'dark':'light')

  }

  function renderingBox() {
    return (
      <div className='demo-box theme-mode' id={theme}>
        <h2>Hello Ghost's</h2>
        <useLocalStorage/>
        <button onClick={()=> handleTheme()}>Change Theme</button>
      </div>
    )
  }
  return (
    <Rendering data={data} demoBox={renderingBox()} />
  )
}
