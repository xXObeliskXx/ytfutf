<script setup lang="ts">
import { RouterLink } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>


<template>
  <aside id="listaadmin">
    <div>
      <ul>
        <li>
          <RouterLink to="/home/usuarios">
            <div className="icono">
              <font-awesome-icon icon="home" />
            </div>
            <label>Inicio</label>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home/reportes">
            <div className="icono">
              <font-awesome-icon icon="fa-solid fa-newspaper" />
            </div>
            <label>Reportes</label>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home/reportes">
            <div className="icono">
              <font-awesome-icon icon="fa-solid fa-users" />
            </div>
            <label>Personal</label>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home/personal">
            <div className="icono">
              <font-awesome-icon icon="fa-solid fa-receipt" />
            </div>
            <label>Auditoria</label>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/">
            <div className="icono">
              <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
            </div>
            <label>Cerrar sesión</label>
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>


<style>
/*---------- ------------------------------- Menu DashBoard ----------------------------------------*/
#listaadmin {
  width: 100%;
  height: 100vh;
  top: 0;
  position: sticky;
  grid-column: 1/2;
  grid-row: 1/3;
  padding: 0px 15px 0px 15px;
  background-color: #0056b3;;
  margin: 0 auto auto 0px;
  box-shadow: 0px 0px 10px -6px rgba(0, 0, 0, 0.75);
  text-align: center;
  z-index: 10;
  overflow: auto;
  transition: ease 0.5s;
}

#listaadmin .LogImg {
  width: 50%;
  height: 10px;
  object-fit: contain;
  margin: 0 auto;
}

#listaadmin > div {
  overflow: auto;
  height: calc(100% - 150px);
}

#listaadmin ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 80px;
}

#listaadmin ul li {
  margin: 35px auto;
}

#listaadmin ul li a {
  color: #ffffff;
  font-size: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
}

#listaadmin ul li a:hover {
  background-color: #f7f5f5;
  color: black;
}

#listaadmin ul li .icono {
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: none;
  fill: #828f9c;
  border-radius: 15px;
  margin-right: 10px;
}

#listaadmin ul li .icono svg {
  line-height: 40px;
}

.icono svg {
  margin: 12px auto;
}

#listaadmin ul li .selected {
  background-color: #e2e2ff;
  color: rgb(24, 28, 255);
}
font-size: 16px;

#listaadmin ul li .selected svg {
  fill: rgb(24, 28, 255);
}

#listaadmin label {
  font-weight: 4S00;
  cursor: pointer;
}

#listaadmin div ul li:last-child {
    position: absolute;
    bottom: 40px;
}
</style>