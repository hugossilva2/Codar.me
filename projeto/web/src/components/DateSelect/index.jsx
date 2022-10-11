import { useState } from "react"
import { addDays, subDays, format} from 'date-fns'
import { ptBR } from "date-fns/esm/locale"

import { Icon } from "../icons"


export const DateSelect = () => {
    const [currentDate, setCurrentDate] = useState(new Date('2022-11-20T00:00:00Z'))

    const prevDay = () => {
        const nextData = subDays(currentDate, 1)
        setCurrentDate(nextData)
    }

    const nextDay = () => {
        const nextData = addDays(currentDate, 1)
        setCurrentDate(nextData)
    }
return(
        <div className="p-4 flex space-x-4 items-center justify-center">
            <Icon name="back" className="w-6 text-red-500" onClick={prevDay}/>
            <span className="font-bold">{format(currentDate, "d 'de' MMMM", {locale: ptBR})}</span>
            <Icon name="arrowRight" className="w-6 text-red-500" onClick={nextDay} />
        </div>
    )
}