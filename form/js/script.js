let Validator = {
    handleSubmit: (event) =>{
        event.preventDefault();
        let send = true;
        
        let inputs = form.querySelectorAll('input');

        Validator.clearErrors();

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = Validator.checkInput(input);
            if(check !== true){
                send = false;
                Validator.showError(input, check);
            }   
        }

        if(send) {
            form.submit();
        }
    },
    checkInput: (input) => {
        let rules = input.getAttribute('data-rules');
        if(rules !== null){
            rules = rules.split('|');
            
            for (const k in rules) {
                let rDetails = rules[k].split('=');
                
                switch(rDetails[0]) {
                    case 'required':
                        if(input.value == '') {
                            return 'Campo não pode ser vazio.';    
                        }
                        break;
                    case 'min':
                        if(input.value.length < rDetails[1]){
                            return 'Campo tem que ter pelo menos ' + rDetails[1] + ' caracteres.';
                        }
                        break;
                    case 'email':
                        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if(!re.test(input.value.toLowerCase())){
                            return 'E-mail digitado não é válido.';
                        }
                        break;
                    case 'confirmPass':
                        let pass = form.querySelector('input[name = "password"]');
                        console.log("P: " + pass.value + " I: " + input.value);
                        if(input.value !== pass.value){
                            return 'As senhas não estão iguais.';
                        }
                        break;
                }
            }
        }
        
        return true; 
    },
    showError: (input, error) => {
        input.style.borderColor = '#E1474D';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },
    clearErrors: () => {
        let inputs = form.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style = '';
            
        }
        
        let errorElements = document.querySelectorAll('.error');
        for (let e = 0; e < errorElements.length; e++) {
            errorElements[e].remove();
        }        
    }
};

let form = document.querySelector('.validator');
form.addEventListener('submit', Validator.handleSubmit);