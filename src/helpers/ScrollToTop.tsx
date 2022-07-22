import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IChildren } from "../interfaces/IChildren";

export const ScrollToTop = (props: IChildren) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>
};