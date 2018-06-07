<body>
    <div onClick={onClick}>
        {count}
    </div>
</body>


<script>
    export default Comp extends ViewComponent{
        state = {
            name:'',
            familyName:''
        }

        computedProperties:{
            fullname: () => this.state.name + ' ' + this.state.familyName
        }

        render(){
            
            return <div>{fullname}</div>
        }

    }
</script>

<style>
</style>