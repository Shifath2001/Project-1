<template>
<div >
<Navbar/>

<div>
  <b-card
    overlay
    
    img-src="http://localhost:8080/static/img/Get%20App.9e6399a.jpg"
    img-alt="Card Image"
    text-variant="white"
    
    
  >
    
  </b-card>
</div><br>



<h1 class="text-center">Start your preparation</h1><br>

<div class="row d-flex justify-content-center">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">ExamsDaily Courses</h5>
        <p class="card-text">Live video courses with study plan and tests.</p>
        <a href="#" class="btn btn-primary">Start your test</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">ExamsDaily Quizzes</h5>
        <p class="card-text">Lot of Quizzes to improve your skills and Knowledge.</p>
        <a href="#" class="btn btn-primary">Start your test</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Mock tests</h5>
        <p class="card-text">Take mock test to improve your accuracy.</p>
        <a href="#" class="btn btn-primary">Start your test</a>
      </div>
    </div>
  
  </div>

  <br><div class="row d-flex justify-content-center">
<div class="col-sm-3">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Test bytes
</h5>
      <p class="card-text">
Practice unlimited test bytes and get all your </p>
      <a href="#" class="btn btn-primary">Start your test</a>


    </div>


  </div>


</div>

<br><div class="col-sm-3">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Test Videos
      </h5>
      <p class="card-text">
Live interactive classes and doublt solved by expert faculty
      </p>
      <a href="#" class="btn btn-primary">Start your test</a>


    </div>


  </div>


</div>

<div class="col-sm-3">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Free videos
      </h5>
      <p class="card-text">
All exams  series videos will be added
       </p>
      <a href="#" class="btn btn-primary">Start your test</a>


    </div>


  </div>


</div>


</div>


</div>


<Footer/>
</div>


</template>

<script>
 import Navbar from './Navbar.vue';
  import Footer from './Footer.vue';


    export default {
components:{
Navbar,
Footer,

},

    }
</script>