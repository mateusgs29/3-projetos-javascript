let Validator = {
    handleSubmit: (event) =>{
        event.preventDefault();
        let send = false;
        
        let inputs = form.querySelectorAll('input');

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = Validator.checkInput(input);
            console.log(check);
            if(check !== true){
                send = false;
                console.log(check);
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
                        break;
                }
            }
        }
        
        return true; 
    }
};

let form = document.querySelector('.validator');
form.addEventListener('submit', Validator.handleSubmit);