import { useState } from "react"

export const theme = () =>{
   const[mode, setMode] = useState()
    const listener = Appearance.addChangeListener(colorTheme=>{
        // console.log(colorTheme,"useEffect")
        store.dispatch(themeAction(colorTheme.colorScheme=== 'light'? 'light': 'dark'))
        setMode(colorTheme.colorScheme)
    })
    return()=>{
        listener;
}
}