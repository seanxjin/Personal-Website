import { useRef, useImperativeHandle } from "react";
import "./ProjectModule.css";

export default function ProjectModule({ref, image, title, description, date}) {

    const dialogue = useRef();

    useImperativeHandle(ref, () =>{
        return {
            open() {
                dialogue.current.showModal();
            }
        }
    });

    return(
        <dialog ref={dialogue} className='project-dialogue'>
            <h1></h1>
        </dialog>
    );
}