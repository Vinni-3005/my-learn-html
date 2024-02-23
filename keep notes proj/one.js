

    const addBox = document.querySelector(".add-box");
    const popupBox = document.querySelector(".popup-box");


    addBox.addEventListener( "click", () => {
        popupBox.classList.add("show");        // action can be performed when the element with id "addBox" is clicked
    });
    /*const header = popupBox.querySelector(".header");
    const closeIcon = popupBox.querySelector("span.uil uil-times");    //const closeIcon = document.querySelector(".popup-box");
    if(closeIcon) {
        closeIcon.addEventListener("click", () => {   /* caught an error i.e., uncoaught error
        popupBox.classList.remove("show");    
        });
    }
    else{
        console.error("close icon is not found")
    }*/
     document.addEventListener("click", (event) => {
        const closeIcon = event.target.closest(".popup-box .content header span.uil.uil-times");
        //console.log("close icon")
        if(closeIcon){      //event listener for close icon
            const popupBox = event.target.closest(".popup-box");
            if(closeIcon){
                popupBox.classList.remove("show");
            }  
        }
    }) 
    //input lines for title and desc
    const titleTag = document.querySelector("input");
    const descTag = document.querySelector("textarea");

    const addNoteBtn = document.querySelector("#addNoteBtn");
    if(addNoteBtn){
        addNoteBtn.addEventListener("click", () => {
            let noteTitle = titleTag.value;
            noteDesc = descTag.value;
            console.log(noteTitle,noteDesc);
        });
    }

    

   
    