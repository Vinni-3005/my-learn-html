const showHiddenInput = (inputoverlay,inputpass,inputicon)=>{
    const overlay = document.getElementById(inputoverlay)
           input = document.getElementById(inputpass)
           iconeye = document.getElementById(inputicon)
           
    iconeye.addeventlistener('click',()=>{
        //change password to text
        if(input.type==='password'){
            //switch to text
            input.type='text'

            //change icon
            iconeye.classlist.ass('bx-show')
        }
        else{
            input.type='password'

            iconeye.classlist.toggle('overlay-content')
        }

    })

}

showHiddenInput('input-overlay','input-pass','input-icon')