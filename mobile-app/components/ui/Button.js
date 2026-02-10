import { TouchableOpacity } from "react-native"

export const DarkButton = ({ className='', children }) => {
    return (
        <TouchableOpacity
        className={`bg-darkBlue shadow-sm shadow-darkBlue px-3 py-3 rounded-xl mx-auto w-[80%] ${className}`}
        >
            {
                children
            }
        </TouchableOpacity>
    )
}