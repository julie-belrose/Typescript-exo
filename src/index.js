const regexPseudo = /^[a-zA-Z]+$/;
const formInit = document.getElementById('formInit');

// Select Layout
const selectLayout = (style) => {
        switch (style) {
                case 'light':
                        document.body.classList.remove('dark');
                        document.body.classList.add('light');
                        break;
                case 'dark':
                        document.body.classList.remove('light');
                        document.body.classList.add('dark');
                        break;
                default:
                        break;
        }
};


//Add pseudo
//regex `regexPseudo`
const checkPseudo = () => {
        const pseudo = document.getElementById('pseudo')?.value;
        if (regexPseudo.test(pseudo)) {
                document.getElementById('pseudo')?.classList.remove('error');
                document.getElementById('pseudo')?.classList.add('success');
        } else {
                document.getElementById('pseudo')?.classList.remove('success');
                document.getElementById('pseudo')?.classList.add('error');
        }
}

const addFormPseudo = () => {
       const formPseudo = document.getElementById('formPseudo');
       formPseudo.addEventListener('submit', (e) => {
               e.preventDefault();
               checkPseudo();
       });
}


// Select avatar
        //public //static
//- Le style de l’avatar sélectionné est visuellement identifiable (bordure, ombre, etc.).
const selectAvatar = () => {
        const form = document.getElementById('formAvatar');
        const avatar = form.avatar.value;
        document.getElementById('avatar')?.classList.add(avatar);
}

// Add description
const displayOrswitchDescription = () => {
        const slogans = [
                'Slogan 1',
                'Slogan 2',
                'Slogan 3',
        ];
        const randomIndex = Math.floor(Math.random() * slogans.length);
        const randomSlogan = slogans[randomIndex];
        document.getElementById('slogan').textContent = randomSlogan;
}

//check cond button next
const checkCondButtonNext = () => {
        const pseudo = formInit?.pseudo.value;
        const avatar = formInit?.avatar.value;
        const slogan = formInit?.slogan.value;

        if (pseudo === '' || avatar === '' || slogan === '') {
                document.getElementById('buttonNext')?.classList.remove('enabled');
                document.getElementById('buttonNext')?.classList.add('disabled');
        } else {
                document.getElementById('buttonNext')?.classList.remove('disabled');
                document.getElementById('buttonNext')?.classList.add('enabled');
        }
}

//click buttonNext
//desactive form
const desactiveForm = () => {
        formInit?.classList.add('desactive');
}

//reset function
const reset = () => {

}


// Init
const init = () => {
        addFormPseudo();
        selectLayout('light');
        selectAvatar();
        checkCondButtonNext();
}


