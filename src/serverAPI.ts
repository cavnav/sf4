import {store} from "./store";
import {User, UserId, SendRequest} from './interfaces';
import {UserSpace} from "./components";

interface RequestCompaniesList {
    query: string;
}

type Company = {
    id: string
};


export const serverAPI = {
    getCompaniesList: (request: RequestCompaniesList) => {
        return fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token 8255e2ab02c36fd603e2d72e78c768cdbcd697e2',
            },
            body: JSON.stringify(request)
        })
            .then((res) => res.json());
        // .then(res => console.table(res));
    },
    sendRequest(props: SendRequest): Promise<SendRequest> {
        return new Promise(resolve => {

            const {request} = props;
            store.addRequest({
                request,
            });

            setTimeout(() => resolve(props), 1000);
        });
    },
    auth(props: { userId: UserId }): Promise<UserId> {
        const {userId} = props;
        store.setUser({userId});
        return new Promise(resolve => setTimeout(resolve, 1000));
    },
    getRequests: () => {
    },
    getRequest: () => {
    },
};
