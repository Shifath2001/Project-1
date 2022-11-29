<template>
<div>
<Navbar/>


<div class="container" style="background-color: ;">
<div class="row align-items-center">
  <div class="col-6">
<img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" class="img-fluid animated" />

  </div>
  <div class="col-6 justify">
    <h1>Kickstart Your Career Here...!</h1>
    <h2>We're the Team of talented person to achieve the careers of students</h2>
  </div>

<div>
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