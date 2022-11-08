const DragArea = document.querySelector(".drag_androp_file_container"),
        DragText = DragArea.querySelector(".drag_nd_drop_title"),
        drag_and_drop_browse_file_btn = DragArea.querySelector(".drag_and_drop_browse_file_btn"),
        drag_and_drop_brows_file_input  = DragArea.querySelector(".drag_and_drop_brows_file_input");
        let Myfile ; 



        drag_and_drop_browse_file_btn.onclick  = () => {
            drag_and_drop_brows_file_input.click()
        }

        drag_and_drop_brows_file_input.addEventListener("change" ,function(){
            Myfile = this.files[0];
            DragArea.classList.add("active");   
            ShowMe()
            
        })

        DragArea.addEventListener("dragover", (event)=> {
        event.preventDefault(); 
        DragArea.classList.add("active"); 

        DragText.textContent = "Release to Upload File";

        } ) 

        DragArea.addEventListener("dragleave",  ()=> {
            DragArea.classList.remove("active"); 
            DragText.textContent = "Drag and drop The Doctor Prescription";
        }); 


        DragArea.addEventListener("drop", (event)=>{ 
            event.preventDefault();
            Myfile = event.dataTransfer.files[0];

            ShowMe()
        })

        function ShowMe(){
            let filetype = Myfile.type; 
            let VaildEx =  ["image/jpeg", "image/jpg", "image/png"];

            if(VaildEx.includes(filetype)){
                
            let fileReader  = new FileReader(); 

            fileReader.onload = () => {
                let imgUrl = fileReader.result; 
                let prescription  = `
                <div class="justify-content-center d-flex">
                    <img class="d-block" src="${imgUrl}" alt="">
                </div>
                
                `
                let PrescriptionsubmitBTN = `
                <hr>
                <div class="justify-content-center d-flex mt-1">
                    <button class="d-block PrescriptionsubmitBTN motserrat_font py-2 px-4"><i class="bi bi-upload"></i></button>
                </div>`
                
                //`<button class="btn btn-primary">submit</button>`
                DragArea.innerHTML = prescription + PrescriptionsubmitBTN
                
            }
            fileReader.readAsDataURL(Myfile); 
            }
            else  {
                alert("Please choose image file"); 
                DragArea.classList.remove("active"); 
                DragText.textContent = "Drag and drop The Doctor Prescription";
            }
        }