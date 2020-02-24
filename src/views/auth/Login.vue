<template >
    <div class="col-4 offset-4 mt-5 pt-5 text-center" id="login">
    <form class="form-signin" @submit.prevent="login">

        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" v-model="email" class="form-control" placeholder="Email address" required="" autofocus="">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" v-model="password" class="form-control" minlength="6" placeholder="Password" required="">
        <div class="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"> Remember me
            </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

    </form>
    <div v-if="err" class="alert alert-danger mt-3">Giriş yapılamadı. Lütfen bilgilerinizi kontrol ediniz..</div>

    </div>

</template>

<script>
import firebase from 'firebase'
    export default {
        name: "Login",
        data(){
            return {
            email: '',
            password: '',
            err:false
        }
        },

        methods:{
            login(){
                if(this.email.length>3 && this.password.length>5)
                firebase.auth().signInWithEmailAndPassword(this.email,this.password)
                    .then(()=>{
                        this.$store.state.currentUser={
                           email: firebase.auth().currentUser.email
                        };
                        this.$router.replace('/');

                    })
                    .catch(error=>{
                        this.err=true;
                        setTimeout(()=>{
                            this.err=false;
                        },3000);
                    })
            }
        }
    }
</script>

<style scoped lang="scss">


</style>