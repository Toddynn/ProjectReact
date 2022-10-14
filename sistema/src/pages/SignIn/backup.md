.container-center{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
}

.login{
    z-index: 1001 !important;
    color: white;
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 20px;
    position: absolute;
    margin-bottom: 15em;
}
/*
.login .nav{
    padding: 15px;
    margin-right: 15em;
    height: 10em;
    width: 75vw;
    display: flex;
    flex-direction: row;
    position: absolute;
    color: white;
    bottom: 39.5em;
}

.login .nav h1{
    font-size: 45px;
}
.login .nav h3{
    font-size: 30px;
    font-weight: 600;
    position: relative;
    top: 1.5em;
    right: 4.5em;
}

.login .nav img{
    position: relative;
    bottom: 0.5em;
    right: 1.9em;
}*/
 
.login-logo img{
    width: 100%;
    padding: 5px;
    padding-bottom: 0%;
}

.login input{
    margin-bottom: 1em;
    height: 50px;
    border: 0;
    border-radius: 15px;
    padding: 10px;
    font-size: 20px;
    background-color: white;
}

form{
    z-index: 1001 !important;
    margin-top: 1em;
    width: 100%;
    display: flex;
    flex-direction: column;
}

form h1{
    text-align: center;
    margin-bottom: 0.5em;
    color: white;
}

form .input{
    display: flex;
    flex-direction: row;
    align-items: baseline;
}
form .input a{
    z-index: 1001 !important;
    border: 0;
    background-color: #222;
    width: 0;
}
form .input .icon{
    position: relative;
    right: 2em;
    font-size: 25px;
    top: 5px;
    color: white;
    cursor: pointer;
}
form .input .icon :nth-child(1):hover{
    color: #3cb62c;
}

form .email-label{
    padding: 10px;
    font-size: 20px;
    transition: color 0.4s linear;
}

form .inputEmail {
    box-shadow: 0px 0px 25px 1px transparent;
    transition:  box-shadow 0.4s linear, border-color 0.4s linear;
    outline: none;
    padding: 15px;
    color: white;
    border: 2px solid #3cb62c;
    background-color : #222;
    width: 100%;
}

form .inputEmail:focus {
    box-shadow: 0px 0px 25px 1px #3cb62c;
    color: #3cb62c;
}

form .password-label {
    padding: 10px;
    font-size: 20px;
    transition: color 0.4s linear;
}

form .inputPassword {
    box-shadow: 0px 0px 25px 1px transparent;
    transition:  box-shadow 0.4s linear, border-color 0.4s linear;
    outline: none;
    padding: 15px;
    color: white;
    border: 2px solid #3cb62c;
    background-color : #222;
    width: 100%;
}
form .inputPassword::placeholder{
    position: relative;
    top: 3px;
}

form .inputPassword:focus {
    box-shadow: 0px 0px 25px 1px #3cb62c;
    color: #3cb62c;
}

form .viewPassword-Container{
    position: relative;
    align-self: end;
    bottom: 5em;
}

form .viewPassword-Container .viewPassword{
    border: 0;
    color: white;
    background-color: transparent;
}

form button{
    margin-top: 0.5em;
    justify-content: center;
    text-align: center;
    height: 50px;
    width: 100%;
    border: 0;
    border-radius: 15px;
    background-color: #3cb62c;
    color: white;
    font-size: 30px;
    transition: 0.2s ease-in-out;
}

form button:hover{
    transform: scale(102%);
    background-color: #3cb62c;
    box-shadow: 0px 0px 25px 1px #3cb62c;
}

.container-waves .waves {
    position: relative;
    min-width: 100vw;
    top: 30.8vh;
    bottom: 0%;
    }
    
    .parallax > use {
    animation: move-forever 25s cubic-bezier(.45,.5,.45,.5) infinite;
    }
    .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
    }
    .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
    }
    .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
    }
    .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 16s;
    }


@keyframes move-forever {
    0% {
    transform: translate3d(-90px,0,0);
    }
    100% {
    transform: translate3d(85px,0,0);
    }
}



---------------actual use-------------------------

.container-waves .waves {
    position: relative;
    min-width: 100vw;
    top: 30.8vh;
    bottom: 0%;
    }
    
    .parallax > use {
    animation: move-forever 25s cubic-bezier(.45,.5,.45,.5) infinite;
    }
    .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
    }
    .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
    }
    .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
    }
    .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 16s;
    }


@keyframes move-forever {
    0% {
    transform: translate3d(-90px,0,0);
    }
    100% {
    transform: translate3d(85px,0,0);
    }
}

/*4k*/
@media (max-width: 2560px) and (max-height: 1396px) {
    .container-center{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
    }
    
    .login{
        z-index: 1001 !important;
        color: white;
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 20px;
        position: absolute;
        margin-bottom: 15em;
    }
    
    .login-logo img{
        width: 100%;
        padding: 0%;
    }
    
    .login input{
        margin-bottom: 1em;
        height: 3em;
        border: 0;
        border-radius: 8px;
        padding: 10px;
        font-size: 20px;
        background-color: white;
    }
    
    form{
        z-index: 1001 !important;
        margin-top: 1em;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    
    form h1{
        font-size: 85px;
        text-align: center;
        margin-bottom: 0.5em;
        color: white;
    }
    
    form .input{
        display: flex;
        flex-direction: row;
        align-items: baseline;
    }
    form .input a{
        z-index: 1001 !important;
        border: 0;
        background-color: #222;
        width: 0;
    }
    form .input .icon{
        position: relative;
        right: 2em;
        font-size: 25px;
        top: 5px;
        color: white;
        cursor: pointer;
    }
    form .input .icon :nth-child(1):hover{
        color: #3cb62c;
    }
    
    form .email-label{
        padding: 10px;
        font-size: 35px;
        transition: color 0.4s linear;
    }
    
    form .inputEmail {
        box-shadow: 0px 0px 25px 1px transparent;
        transition:  box-shadow 0.4s linear, border-color 0.4s linear;
        outline: none;
        padding: 15px;
        color: white;
        border: 2px solid #3cb62c;
        background-color : #222;
        width: 100%;
    }
    
    form .inputEmail:focus {
        box-shadow: 0px 0px 25px 1px #3cb62c;
        color: #3cb62c;
    }
    
    form .password-label {
        padding: 10px;
        font-size: 35px;
        transition: color 0.4s linear;
    }
    
    form .inputPassword {
        box-shadow: 0px 0px 25px 1px transparent;
        transition:  box-shadow 0.4s linear, border-color 0.4s linear;
        outline: none;
        padding: 15px;
        color: white;
        border: 2px solid #3cb62c;
        background-color : #222;
        width: 100%;
    }
    form .inputEmail::placeholder{
        font-size: 25px;
    }
    form .inputPassword::placeholder{
        font-size: 25px;
        position: relative;
        top: 5px;
    }
    
    form .inputPassword:focus {
        box-shadow: 0px 0px 25px 1px #3cb62c;
        color: #3cb62c;
    }
    
    form .viewPassword-Container{
        position: relative;
        align-self: end;
        bottom: 5em;
    }
    
    form .viewPassword-Container .viewPassword{
        border: 0;
        color: white;
        background-color: transparent;
    }
    
    form button{
        margin-top: 0.5em;
        justify-content: center;
        text-align: center;
        height: 3em;
        width: 100%;
        border: 0;
        border-radius: 8px;
        background-color: #3cb62c;
        color: white;
        font-size: 30px;
        transition: 0.2s ease-in-out;
    }
    
    form button:hover{
        transform: scale(102%);
        background-color: #3cb62c;
        box-shadow: 0px 0px 25px 1px #3cb62c;
    }
    
    .container-waves .waves {
        position: relative;
        min-width: 100vw;
        top: 33vh;
        bottom: 0%;
    }
}

/*monitor principal*/
@media (max-width: 1920px) and (max-height: 1080px) {
    #root{
        background-color: black;
    }
    .container-center{
        height: 500px;
        width: 100%;
    }
    .login {
        z-index: 1001 !important;
        color: white;
        width: 25%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        position: absolute;
        margin-top: 30em;
    }
    form h1{
        font-size: 30px;
    }
    form .email-label, form .password-label{
        font-size: 20px;
    } 
    form button{
        height: 2em;
    }
    .container-waves .waves{
        top: 53.8vh;
    }
}

/*laptop L*/
@media (max-width: 1440px) and (max-height: 931px){
    .container-center{
        height: 100vh;
    }
    .login{
        width: 30%;
        margin: 0%;
        margin-bottom: 10em;
    }
    form .email-label, form .password-label{
        font-size: 20px;
    }
    form .inputEmail::placeholder{
        font-size: 20px;
        padding: 5px;
    }
    form .inputPassword::placeholder{
        position: relative;
        top: 0px;
    }
    form h1{
        font-size: 45px;
    }
    form button{
        height: 2em;
    }
    .container-waves .waves{
        min-width: 100vw;
        top: 34.2vh;
    }
}

/*nest hub max*/
@media (max-width: 1280px) and (max-height: 800px){
    .login{
        width: 30%;
        margin-top: 2em;
    }
    form h1{
        font-size: 50px;
    }
    .container-waves .waves{
        min-width: 100vw;
        top: 35.4vh;
    }
}

/*laptop*/
@media (max-width: 1024px) and (max-height: 838px) {
    .login{
        width: 40%;
    }
    .login input{
        height: 2.5em;
    }
    form button{
        height: 2em;
    }
    form .email-label, form .password-label{
        font-size: 20px;
    }
    form .inputEmail::placeholder, form .inputPassword::placeholder{
        font-size: 20px;
    }
    .container-waves .waves{
        min-width: 100vw;
        top: 38.8vh;
    }
}

/*nest hub*/
@media (max-width: 1024px) and (max-height: 600px) {
    html{
        background-color: black;
    }
    .container-center{
        height: 100vh;
    }
    .login{
        width: 35%;
        margin-top: 150px;
    }
    form .email-label, form .password-label{
        font-size: 20px;
    }
    form .inputEmail::placeholder, form .inputPassword::placeholder{
        font-size: 20px;
    }
    .container-waves{
        display: none;
    }
}

/*Surface PRO 7*/
@media (max-width: 912px) and (max-height: 1368px) {
    html{
        background-color: black;
    }
    .login{
        width: 75%;
    }
    .login label{
        font-size: 35px;
    }
    .login input::placeholder{
        font-size: 25px;
    }
    .container-waves .waves{
        top: 44vh;
    }
}

/*ipad Air*/
@media (max-width: 820px) and (max-height: 1180px) {
    .login{
        margin-bottom: 5em;
        width: 75%;
    }
    .container-waves .waves{
        top: 43.7vh;
    }
}

/*Ipad Mini*/
@media (max-width: 768px) and (max-height: 1024px){
    .login{
        width: 75%;
        height: 90vh;
    }
    form h1{
        font-size: 50px;
    }
    form button{
        height: 3em;
    }
    .container-waves .waves{
        top: 68.8vh;
    }
}

/*Tablet*/
@media (max-width: 768px) and (max-height: 838px){
    .login{
        width: 55%;
    }
    form .email-label, form .password-label{
        font-size: 20px;
    }
    form .inputEmail::placeholder, form .inputPassword::placeholder{
        font-size: 15px;
        bottom: 2px;
    }
    form button{
        height: 2em;
    }
    .container-waves .waves{
        min-width: 100vw;
        top: 41.7vh;
    }
}

/*Surface Duo*/
@media (max-width: 540px) and (max-height: 720px){
    .login{
        width: 60%;
        margin-top: 3em;
        height: 90vh;
    }
    .login-logo img{
        padding: 0%;
    }
    form h1{
        font-size: 35px;
    }
    form .email-label, form .password-label{
        font-size: 17px;
    }
    form .inputEmail::placeholder, form .inputPassword::placeholder{
        font-size: 17px;
    }
    form button{
        height: 2em;
    }
    .container-waves .waves{
        top: 43.3vh;
    }
}

/*Mobile L*/
@media (max-width: 425px) and (max-height: 838px){
    .login{
        width: 75%;
    }
    form .email-label, form .password-label{
        font-size: 20px;
    }
    form .inputEmail::placeholder, form .inputPassword::placeholder{
        font-size: 20px;
    }
    .container-waves{
        display: none;
    }
}

/*Iphone XR*/
@media (max-width: 414px ) and (max-height: 896px){
    .login-logo img{
        padding: 0;
        margin-bottom: 1em;
    }
    .login{
        margin-top: 6em;
        height: 80vh;
    }
    form .email-label, form .password-label{
        font-size: 20px;
    }
    form .inputEmail::placeholder, form .inputPassword::placeholder{
        font-size: 20px;
    }
    form h1{
        font-size: 35px;
    }
    form button{
        height: 2em;
    }
    .container-waves{
        display: none;
    }
}

/*galaxy s20 ultra*/
@media (max-width: 412px) and (max-height: 915px) {
    form .email-label, form .password-label{
        font-size: 20px;
    }
    form .inputEmail::placeholder, form .inputPassword::placeholder{
        font-size: 20px;
    }
    form h1{
        font-size: 30px;
    }
    form button{
        height: 2em;
    }
    .container-waves{
        display: none;
    }
}

/*Pixel 5*/
@media (max-width: 393px ) and (max-height: 851px){
    form .email-label, form .password-label{
        font-size: 17px;
    }
    form .inputEmail::placeholder, form .inputPassword::placeholder{
        font-size: 17px;
        padding: 2px;
    }
}

/*iphone 12 pro*/
@media (max-width: 390px ) and (max-height: 844px){
    form .email-label, form .password-label{
        font-size: 15px;
    }
    form .inputEmail::placeholder, form .inputPassword::placeholder{
        font-size: 15px;
    }
}

/*galaxy fold*/
@media (max-width: 280px ) and (max-height: 653px){
    form .email-label, form .password-label{
        font-size: 15px;
    }
    form .inputEmail::placeholder{
        position: relative;
        bottom: 3px;
        font-size: 12px;
    }
    form .inputPassword::placeholder{
        font-size: 12px;
    }
}