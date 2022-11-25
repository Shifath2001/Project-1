<template>
    <section class="vh-100" style="background-color: lightcoral;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 3rem;">
          <div class="card-body p-5 text-center">
            <div class="logo"/>

            <img src="../assets/logo.png" alt="logo" style=  "width: 25%;">


            <h3 class="mb-5">ExamsDaily</h3>

            <div class="form-outline mb-4">
              <input type="username" placeholder="Username" id="typeEmailX-2" class="form-control form-control-lg" />
              
            </div>

            <div class="form-outline mb-4">
              <input type="password"  placeholder="Password" id="typePasswordX-2" class="form-control form-control-lg" />
             
            </div>

           
            <div class="form-check d-flex justify-content-start mb-4">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button class="btn btn-outline-primary" type="submit" @click="login">Login</button>

            
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import swal from 'sweetalert';
export default {
    data() {
        return {
            username: "shifath",
            password: "shifath",
            
        }
    },
    methods:{
        reset: function(){
            this.username = "shifath";
            this.password = "shifath";
        },
        login: function(){
          console.log(this.username="shifath","==================", this.password="shifath")
            if(this.username == 'shifath' && this.password == 'shifath'){
              swal(
  'Welcomes to Examsdaily!',
'Shifath',
  'success'
)  }
{this.emptyfields =true;
}       }
    }
}        

</script>
