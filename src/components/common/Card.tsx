import React from 'react'
import CardImage from "../../assets/image/Cardimage.jpeg"
import { Link } from 'react-router-dom';
interface Props {
    data: any;
    id: number
}
const Card = ({ data, id }: Props) => {
    const getType = data?.url.split("/");
    const slug = getType[getType.length - 3]
    return (
        <>
            <div className='category_card'>
                <Link to={`/details/${slug}/${id}`}>
                    <div className='category_card_img'>
                        <img src={CardImage} alt='Card image' />
                    </div>
                    <div className='category_card_text'>
                        <h1>{data?.name}</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ipsa a, ea animi,
                        </p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Card