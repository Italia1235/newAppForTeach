import axios from "axios"
import MockAdapter  from "axios-mock-adapter";

let mock = new MockAdapter(axios)

mock.onGet('/pupils').reply(200,{
    pupils: [ {name:"Гриша", id:1,soname:"Фетисов",sex:"male",startDate:22052007,subject:"История"},
{name:"Оля", id:2,soname:"Мамедова",sex:"female",startDate:22022022,subject:"Общество"} ]
})


const pupilsAPi = {
    getPupils(){
    axios.get('/pupils')
    }
}