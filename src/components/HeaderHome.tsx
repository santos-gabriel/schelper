import { useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContext";


export function HeaderHome () {
    const { userName } = useContext(ProfileContext);
    return (
        <h1>{`Hello world, welcome ${userName}`}</h1>
    );

}