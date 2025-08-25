const regexPseudo = /^[a-zA-Z]+$/;

const formInit = document.getElementById('formInit');
const pseudoInput = document.getElementById('pseudo');
const sloganInput = document.getElementById('slogan');
const avatarGroup = document.getElementById('avatarGroup');
const sloganBtn = document.querySelector('[data-action="getSlogan"]');

// Select Layout
const selectLayout = (style) => {
        document.body.classList.toggle('light', style === 'light');
        document.body.classList.toggle('dark', style === 'dark');
};


//Add pseudo
//regex `regexPseudo`
const checkPseudo = (input) => {
        const valid = regexPseudo.test(input?.value.trim());
        input.classList.toggle('success', valid);
        input.classList.toggle('error', !valid && input?.value.trim() !== '');
        return valid;
}


// Select avatar
        //public //static
//- Le style de l’avatar sélectionné est visuellement identifiable (bordure, ombre, etc.).
const selectAvatar = () => {
        const avatar = avatarGroup.avatar.value;
        document.getElementById('avatar')?.classList.add(avatar);
}

// Add description
const getSlogan = () => {
        const slogans = [
                'Slogan 1',
                'Slogan 2',
                'Slogan 3',
        ];
        return slogans[Math.floor(Math.random() * slogans.length)];
}

//check cond button next
const checkCondButtonNext = () => {
        const pseudo = checkPseudo(pseudoInput);
        const avatar = !!avatarGroup.querySelector('img[type="radio"]:checked');
        const slogan = sloganInput.value.trim() !== '';

        const canSubmit = pseudo && avatar && slogan;
        const btn = formInit.querySelector('#nextBtn');

        btn.disabled = !canSubmit;
        btn.classList.toggle('enabled', canSubmit);
        btn.classList.toggle('disabled', !canSubmit);
}

//reset function
const reset = () => {
        formInit.reset();
        init();
}

const submitForm = () => {
        formInit.addEventListener('submit', (e) => {
                e.preventDefault();
                checkCondButtonNext(formInit);
                if (e.target.querySelector('#nextBtn').disabled) return;

                console.log('Profil soumis :', {
                        pseudo: formInit.pseudo.value.trim(),
                        avatar: formInit.avatar.value,
                        slogan: formInit.slogan.value.trim(),
                });
        });
}



// Init
const init = () => {

        selectLayout('light');
        sloganInput.value = '';
        sloganBtn.addEventListener('click', () => {
                sloganInput.value = getSlogan();
                checkCondButtonNext(form);
        })

        pseudoInput.addEventListener('input', () => {
                checkPseudo(pseudoInput);
                checkCondButtonNext(form);
        });

        avatarGroup.addEventListener('change', (e) => {
                if (e.target.name === 'avatar') {
                        checkCondButtonNext(form);
                }
        });


        submitForm();
}

document.addEventListener('DOMContentLoaded', init);
