export default function TabButton({ children, onSelect }) {
    console.log("****************************TabButton component executed....");


    return (<li><button onClick={onSelect}>{children}</button></li>);
}