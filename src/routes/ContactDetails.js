import React from "react";
import { useParams , useNavigate } from "react-router";

export default function ContactDetails(){
    const {id} = useParams();
    //permite a navegação 

    const navigate = useNavigate();

    const handleClick = (event) => {
        console.log('contato enviado');
        return navigate('/Home');
    };
    return (
        <>
            <div>Contact {id} Details</div>
            <button onClick={handleClick}>Enviar Mensagem</button>
        </>
    );
}