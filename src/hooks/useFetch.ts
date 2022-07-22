import Swal from "sweetalert2";
import { useEffect, useState } from "react";

export const useFetch = (id: number) => {
    const [personajes, setPersonajes]: any = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        obtenerCharacter(id);
    }, [id]);

    const obtenerCharacter = async (id: number) => {
        setLoading(true);
        try {
            const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${id}`
            );

            if (!res.ok) {
                console.log(res);
                return Swal.fire({
                    title: "Error!",
                    text: `no existe ${id}`,
                    icon: "error",
                });
            }

            const data: any = await res.json();
            console.log([...data.results]);
            setPersonajes([...data.results]);
        } catch (error) {
            console.log(error);
            return Swal.fire({
                title: "Error!",
                text: `Error de servidor`,
                icon: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    return [personajes, loading];
};