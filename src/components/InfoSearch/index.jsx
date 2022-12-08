import { InfoStyle } from "./style";
import BtnDefaultMainColor from "../BtnDefaultMainColor";
import { useContext } from "react";
import { BaseContext } from "../../contexts/Base";

function InfoSearch({ many , name , action }) {
    const { 
        stopSearch,
        currentInfoSearch,
     } = useContext(BaseContext);
    return (
    <InfoStyle className="container">
        <h2><span>{currentInfoSearch[0].many}</span> {currentInfoSearch[0].many === 1? 'resultado' : 'resultados'} para: <span>{currentInfoSearch[0].name}</span></h2>
        <BtnDefaultMainColor classList='btnBig' action={stopSearch}>Limpar busca</BtnDefaultMainColor>
    </InfoStyle>
    );
};

export default InfoSearch;