<template>
	<div>
		<router-view></router-view>
	    <ul>
	        <li>
	          <router-link to="/">Home</router-link>
	        </li>
	        <li>
	          <router-link to="/class">Class</router-link>
	        </li>
	        <li>
	          <router-link to="/market">Market</router-link>
	        </li>
	        <li>
	          <router-link to="/cart">Cart</router-link>
	        </li>
	        <li>
	          <router-link to="/mine">Mine</router-link>
	        </li>
	    </ul>
	</div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>
*{
  padding:0;
  margin:0
}
ul{
	z-index: 100;
	list-style: none;
	display: flex;
	align-items: center;
	position: fixed;
	line-height: 4.083333rem;
	height: 4.083333rem;
	bottom:0;
	left:0;
	right:0;
    background-color: #ffffff;
}
ul li{
	font-size: 100%;
	width:25%;
	text-align: center;
}
a{
	text-decoration: none;
	color: black;
}
</style>
