import { Text } from "react-native"

export function H1({ children, className = '', ...props }) {
    return (
        <Text className={`font-lora-bold text-4xl text-gray-900 ${className}`} {...props}>
            {children}
        </Text>
    );
}

export function H2({ children, className = '', ...props }) {
    return (
        <Text className={`font-lora-semibold text-3xl text-gray-900 ${className}`} {...props}>
            {children}
        </Text>
    );
}

export function H3({ children, className = '', ...props }) {
    return (
        <Text className={`font-lora-medium text-2xl text-gray-800 ${className}`} {...props}>
            {children}
        </Text>
    );
}

export function H4({ children, className = '', ...props }) {
    return (
        <Text className={`font-lora-medium text-xl text-gray-800 ${className}`} {...props}>
            {children}
        </Text>
    );
}

// Body text (using Roboto)
export function Body({ children, className = '', ...props }) {
    return (
        <Text className={`font-roboto text-base text-gray-700 ${className}`} {...props}>
            {children}
        </Text>
    );
}

export function BodyBold({ children, className = '', ...props }) {
    return (
        <Text className={`font-roboto-bold text-base text-gray-900 ${className}`} {...props}>
            {children}
        </Text>
    );
}

export function Caption({ children, className = '', ...props }) {
    return (
        <Text className={`font-roboto text-sm text-gray-600 ${className}`} {...props}>
            {children}
        </Text>
    );
}

export function ButtonText({ children, className = '', ...props }) {
    return (
        <Text className={`font-roboto text-white ${className}`} {...props}>
            {
                children
            }
        </Text>

    )
}