import axios from 'axios';
import { LoginDto } from '../dto/login.dto';
import { environment } from '../environment/environment';

export class ClienService {

    login(data: LoginDto) {
        axios({
            method: 'post',
            url: environment.URL + 'personals/login',
            data: data
        }).then((res) => {
            if (res) {
                window.location.assign('/client/home');
                sessionStorage.setItem('token', res.data.token);
            }
        })
    }
    divertissement() {
        window.location.assign('/client/divertissement');
    }
}