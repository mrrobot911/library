import Header_h2 from "./Header_h2";
import LibraryCard from "./LibraryCard";
import { store } from "@/store";

const DigitalLibraryCards = () => {
    return ( 
        <section className="mx-[20px] mb-[41px]">
            <Header_h2 letter="Digital Library Cards" id="4"/>
            <LibraryCard auth={store.getState().user.auth}/>
        </section>
     );
}
 
export default DigitalLibraryCards;