<script lang="ts">
import { defineComponent } from 'vue'
import { SearchService } from '../services/Reportes';

export default defineComponent ({
    methods: {
        Get(e: Event) {
            SearchService(e)
        }
    }
})

</script>



<template>
    <h1>Reportes</h1>
    <main id="reportes">
        <form @submit.prevent="Get">
            <h1>Ingrese número de cédula: </h1>
            <input id="busqueda" type="search" name="busqueda" placeholder="Ingrese la cedula"> 
            <div id="globo">
                <ul>
                    <li>No escribas</li>
                    <li>Sin letras</li>
                    <li>No escribas</li>
                    <li>Sin letras</li>
                </ul>
            </div>
            <input type="submit" value="Buscar">
        </form>
    </main>
</template>


<style>
    #reportes{
        display: grid;
        border: solid red 1px;
        height: 90vh;
        align-content: center;
    }

    #reportes form{
        width: 50%;
        margin: 0 auto;
        position: relative;
    }


    #reportes form #busqueda{
        border: solid 1px gray;
        border-radius: 20px;
        padding: 30px;
        width: 80%;
        font-size: 20px;
    }

    #globo{
      position: absolute;
      top: -80px;
      opacity: 0;
      right: 20%;
      transition: .5s ease;
      border: 1px solid rgb(196, 196, 196);
    }

    #busqueda:hover ~ #globo{
      opacity: 1;
    }
</style>