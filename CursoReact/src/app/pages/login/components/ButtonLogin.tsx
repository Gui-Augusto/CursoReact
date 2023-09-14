
interface IBUttonLoginProps{
    type?: "button" | "submit" | "reset";
    onClick: () => void;
    children: React.ReactNode;
}
export const Buttonlogin: React.FC<IBUttonLoginProps> = ({type, onClick, children}) => {
    return(
        <button type={type} onClick={onClick}>
            {children}
        </button>
    )
}