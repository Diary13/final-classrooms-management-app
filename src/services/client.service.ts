import axios from 'axios';
import { LoginDto } from '../dto/login.dto';
import { environment } from '../environment/environment';
import jwt from 'jwt-decode';

export class ClientService {

    login(data: LoginDto) {
        axios({
            method: 'post',
            url: environment.URL + 'api/personals/login',
            data: data
        }).then((res) => {
            if (res) {
                let decode_token: any = jwt(res.data.token);
                sessionStorage.setItem('token', res.data.token);
                sessionStorage.setItem('access', decode_token.access);
                if (decode_token.access == 'admin')
                    window.location.assign('/admin/home');
                else
                    window.location.assign('/client/home');
            }
        })
    }
    logout() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('access');
        window.location.reload();
    }
}