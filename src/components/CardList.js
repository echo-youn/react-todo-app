import CardItem from './Card';

let select = '';

function CardList(props) {
    let cardItems = props.cards ? props.cards.map((card, index) => {
        return <CardItem key={index} card={card}></CardItem>
    }) : null

    return <div>
        { props.type }
        { cardItems }
    </div>;
}

export default CardList;