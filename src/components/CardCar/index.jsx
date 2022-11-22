import BtnLittle from '../BtnLittle';
import { CardDescriptionStyle, CardStyle, CategoryStyle, ContainerCardInfoStyle, ContainerImgStyle, ImgStyle, ProductNameStyle } from "./styles";

function CardCar({ name , category , img , fun , id }) {
    return (
        <CardStyle>
            <CardDescriptionStyle>
                <ContainerImgStyle>
                    <ImgStyle src={img} alt={name}/>
                </ContainerImgStyle>
                <ContainerCardInfoStyle>
                    <ProductNameStyle>{name}</ProductNameStyle>
                    <CategoryStyle>{category}</CategoryStyle>
                </ContainerCardInfoStyle>
            </CardDescriptionStyle>
            <BtnLittle classList='btnSmall' action={fun} dataAction={id}>Remover</BtnLittle>
        </CardStyle>
    );
};

export default CardCar;