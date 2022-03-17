import {PupilsType} from "../../../Bll/Reducer/ReducersType";
import s from './Pupils.module.css'
import {Button, Card, CloseButton} from "react-bootstrap";
import boy from '../../../Picture/child1.jpg'
import girl from '../../../Picture/child3.jpg'
import {NavLink} from "react-router-dom";
import {STUDENT_ROUTE} from "../../../Utils";


type propsType = {
    pupils:PupilsType
}
export const Pupils = ({pupils}:propsType) => {


    return (
        <div className={s.container}>
            <h1>Cтраница учеников</h1>
            <div  className={s.pupilsArea}>
            {pupils.map(({name,soname,id,startDate
                             ,subject,sex,})=>
                <Card style={{ width:"15rem"}} border="dark" >
                    <Card.Header className={s.headerStudent} >{name} {soname} <CloseButton  /></Card.Header>
                    {sex==="male"? <Card.Img className={s.img} src={boy}/>:
                        <Card.Img className={s.img} src={girl}/>}
                    <Card.Body>
                        <Card.Title>Изучает: { subject}</Card.Title>
                        <Card.Text>
                          Старт занятий: {startDate}
                        </Card.Text>
                       <NavLink  to={STUDENT_ROUTE+`/${id}`}>
                           <Button variant="outline-dark">В профиль ученика</Button></NavLink>

                    </Card.Body>
                </Card>
            )
            }
            </div>
        </div>
    );
};

