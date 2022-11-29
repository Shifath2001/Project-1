<template>

  
  <div><Navbar />

       <div class="text-center"><h3>Contact Form</h3></div> 
    

       <div class="card col-sm-3 container d-flex justify-content-center" style="border-radius:1rem; border-color: black; padding: 10px; background-color:lightskyblue;" >



      
       

        <b-form @submit="onSubmit"  v-if="show">
  
        <b-form-group id="input-group-1" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-1"
            v-model="form.name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group><br>

        <b-form-group
          id="input-group-2"
          label="Email address:"
          label-for="input-2"
          description="We'll never share your email with anyone else.">
          <b-form-input
            id="input-2"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group><br>
  

        <b-form-group id="input-group-3" label="Phone Number:" label-for="input-2">
          <b-form-input
            id="input-3"
            v-model="form.phonenumber"
            type="number"
            placeholder="Enter Phonenumber"
            required
          ></b-form-input>
        </b-form-group><br>
  
  
        <b-form-group id="input-group-4" label="Gender:" label-for="input-3">
          <b-form-select
            id="input-4"
            v-model="form.gender"
            :options="gender"
            required
          ></b-form-select>
        </b-form-group><br>
  
        <b-form-group id="input-group-5" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-5"
            :aria-describedby="ariaDescribedby" >
          </b-form-checkbox-group>
        </b-form-group><br>
  
        <b-button type="submit" variant="primary">Submit</b-button>
      
      </b-form>
   </div>


<Footer/>
    </div>
  </template>
  
  <script>
  import swal from 'sweetalert'
  import Navbar from './Navbar.vue';
  import Footer from './Footer.vue';


    export default {
components:{
Navbar,
Footer,

},

      data() {
        return {
          form: {
            email: '',
            name: '',
            phonenumber: '',
            gender: null,
            checked: []
          },
        gender: [{ text: 'Select One', value: null }, 'Male', 'Female', 'Others'],
          show: true
        }
      },
      methods: {


        
        onSubmit(event) {
          event.preventDefault()
          swal(
  'Our Team Will Contact You',
  'Application Successful',
  'success'
) 
        },
        onReset(event) {
          event.preventDefault()

        this.form.email = ''
          this.form.name = ''
          this.form.gender = null
          this.form.checked = []

          this.show = false
          this.$nextTick(() => {
            this.show = true
          })
        }
       

      }
    }
  </script>