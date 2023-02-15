export default {
    template: `<h1>That page doesn't exist!</h1>`, 

    create() {
        console.log('hit the error route');

        // redirect back to safe route
        setTimeout(()=>{
        this.$router.push({ name: 'home'});
        }, 2500); // wait 2.5 seconds and execute the function
    }
}