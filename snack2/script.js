/*
Chiedere all'API 10 nomi da inserire in un array di invitati.
Una volta generata la lista chiedere all'utente di dire il proprio nome.
Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/

const { createApp } = Vue

createApp({
    data() {
        return {
            namesList: [],
            nameUser: '',
            isUserInvited: false,
        }
    },

    methods: {
        checkNameInvite(nameUser) {
            this.isUserInvited = this.namesList.includes(nameUser);
        },
    },
    
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/name')
            .then((response) => {
                console.log(response.data.response);
                this.namesList.push(response.data.response);
            });
        }
    },
}).mount('#app')