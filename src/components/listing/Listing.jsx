import ListItem from "./listitem/ListItems.jsx";
export function Listing(props){
    const { items } = props

    return (
        <ul className='item-list'>
            {items.map((item) => <ListItem key={item.listing_id} item={item} />)}
        </ul>
    )

}