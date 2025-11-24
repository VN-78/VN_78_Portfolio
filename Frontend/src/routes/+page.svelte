<script lang="ts">

import Button from "@/components/ui/button/button.svelte";

const name = "Vishwa"
let number = $state(0)

</script>

<div class="flex flex-col items-center justify-center  ">

<h1 class="text-7xl  p-4 m-4 " >
    Title of portfolio
</h1>

<h2>
    {name}
</h2>
<!-- so this is the syntax for comments this is very complex -->
<h4 class="text-xl items-center justify-center " >
    An Simple Counter Click on the button to increment the number 
</h4>

<Button 
onclick={()=>{number++}} 
class=" flex items-center justify-center cursor-pointer w-24 h-12 p-4 m-4 "
>
{number}
</Button>

</div>