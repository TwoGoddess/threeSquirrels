<template>
    <div>
		list
		{{id}}
		{{$route.params.id}}
       	11111111111111	
    </div>
		
</template>

<script>
export default {
	name: 'List',
	data(){
		return {
			id:this.$route.params.id
		}
	},
	created(){
		

	}

}
</script>

<style>


</style>
