import { ReactComponent as arrowLeft } from './svgs/back.svg'

const icons = {
    arrowLeft
}

export const Icon = ({name, ...props}) => {
    const Element = icons[name]
    return<Element {...props}/>
} //inseri icons