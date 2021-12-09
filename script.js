// Ciao ragazzi,
// Esercizio di oggi: Vue Email List
// nome repo: vue-email-List
// Descrizione
// Attrvaerso l'apposita API di Boolean :api:
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati. (modificato) 

const app = new Vue({
    el: '#root',
    data: {
        mail: [],
    },
    methods:{

    },
    created(){
        for(let i=0; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) =>{
                // handle success
                // console.log(response.data.response);
                // this.mail = response.data.response;
                this.mail.push(response.data.response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        }
        console.log(this.mail);
        
    }
});