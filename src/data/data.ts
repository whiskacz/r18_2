import { IconType } from "react-icons";
import { AiFillFacebook, AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";

interface NavMenuIconInterface {
    id: number,
    link: string,
    Icon: IconType;
}


export const navMenuTitle: string[] = [
    "Home", "About", "Services", "Tours"
]


export const navMenuIcon: NavMenuIconInterface[] = [
    {
        id: 1,
        link: 'facebook.com',
        Icon: AiFillFacebook
    },
    {
        id: 2,
        link: 'twitter.com',
        Icon: AiFillTwitterCircle
    },
    {
        id: 3,
        link: 'github.com',
        Icon: AiFillGithub
    },
]