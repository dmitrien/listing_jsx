import data from '../data/etsy.json'
import { Listing } from "./components/listing/Listing.jsx";
import './App.css'
function App() {
    return (
        <Listing items={data}></Listing>
    );
}
export default App