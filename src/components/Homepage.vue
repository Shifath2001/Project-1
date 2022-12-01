<template>
<div>
<Navbar/>


<div class="container">
<div class="row align-items-center">
  <div class="col-6" >
<img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" class="img-fluid animated" />

  </div>
  
  <div class="col-6">
    <h1 class="btd-title-tag">Kickstart Your Career Here...!</h1>
    <h2>We're the Team of talented person to achieve the careers of students</h2>
<p>ExamsDaily is your resource hub for Current Affairs, General Knowledge, Exam Notifications, Competitive Exam preparation, etc. We provide you with the latest notifications, study materials and results from the career industry.</p>
  </div>
</div>
</div><br>
  <h2 class="text-center">Our Best Features</h2>
<br>
  <div class="row d-flex justify-content-center">
  <div class="col-sm-3">
    <div class="card">
      <div class="shadow  bg-white rounded">
      <div class="card-body">
        <i class="fas fa-camera-retro"></i>
        <h5 class="card-title">Your Growth Our Priority</h5>
        <p class="card-text">Live video courses with study plan and tests.</p>
        
        
      </div>
      </div>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="shadow  bg-white rounded">

      <div class="card-body">
        <i class="fas fa-camera-retro"></i>
        <h5 class="card-title">Transparent Workflow</h5>
        <p class="card-text">Lot of Quizzes to improve your skills and Knowledge.</p>
      </div>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="shadow  bg-white rounded">

      <div class="card-body">
      <i class="far fa-clock"></i>
        <h5 class="card-title">24 * 7 Support</h5>
        <p class="card-text">Take mock test to improve your accuracy.</p>
      </div>
    </div>
  
  </div>
</div>

  
  <FooterVue/>
</div>

</template>

<script>

import FooterVue from './Footer.vue';
  import Navbar from './Navbar.vue';
  export default{
    components:{
      FooterVue,
      Navbar,
  },
    
  
  
  }

</script>