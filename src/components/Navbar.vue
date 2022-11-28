<template>
<div>

    <nav class="navbar navbar-expand-lg bg-info">
  <div class="container-fluid">
    <img src="../assets/logo.png" alt="logo" width="25" height="25"/>
    <a class="navbar-brand" href="#">ExamsDaily</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" @click="navTo('home')" >
          <a class="nav-link" aria-current="page">Home</a>
        </li>
        <li class="nav-item" @click="navTo('services')">
          <a class="nav-link">Services</a>
        </li>

        <li class="nav-item" @click="navTo('contact')">
          <a class="nav-link">Contact</a>
        </li>
        <b-nav-item-dropdown
      id="my-nav-dropdown"
      text="Branches"
      toggle-class="nav-link-custom"
      right
    >
      <b-dropdown-item>Kalavasal</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>K.K.Nagar</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Thirunagar</b-dropdown-item>
    </b-nav-item-dropdown>
  
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

</div>

</template>

<script>
export default{

    methods: {
    navTo:function(samp){
        if(samp == "contact")  {
          console.log(samp = "contact" ,'===============');

            this.$router.push('/contact')
        }

        else if(samp == "services"){
          console.log(samp  ,'===============');
            this.$router.push('/services')


        }


        


    //   this.$router.push('/contact')
    //   this.$router.push('/services')
      
  

    }

  },
}

</script>