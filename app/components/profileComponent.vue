<template>
  <div class="grid lg:grid-cols-3 gap-4 py-12 animate-slideUp opacity-0">
    <div class="flex flex-col justify-center max-lg:order-2">
      <h1 class="uppercase text-lg font-bold underline text-custom-200"><strong>Charles Brouillier</strong></h1> 
      <h2 class="text-lg font-medium">Ingénieur développeur Java </h2>
      <div class="flex mx-auto mt-1">
        <NuxtImg src="/images/pin.svg" alt="Pin" width="20" height="20" draggable="false" />
        <p class="flex flex-col text-sm ml-2">France, Lille</p>
      </div>
    </div>
    
    <div class="flex mx-auto">
      <NuxtImg src="/images/Profile.webp" class="size-52 rounded-full border-double border-4 border-black" alt="Profile" format="webp" sizes="(max-width: 600px) 224px" draggable="false"/>
    </div>

    <ProfileSocialsComponent/>
  </div>
  
  <hr class="h-0.5 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25" >
</template>