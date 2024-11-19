import {useState} from 'react'

export function ShowImageAll({children}) {
    const [open, setOpen] = useState('')


    const OpenImage = (a) => {
        if (a.show) {
            setOpen(a.url)
        }
    }

    return (
        <div>
             
        </div>
        
    )
}