document.addEventListener('DOMContentLoaded', function () {
  const imageUpload                 = document.getElementById('imageUpload');
  // get he input value 
  const imageurl                    = document.getElementById('imageurl');
  const imagealt                    = document.getElementById('imagealt');
  const imagenameinput              = document.getElementById('Imagename');
  // get the insert button value 
  const insertButton                = document.getElementById('insert');
  // get the container 
  const imageContainer              = document.getElementById('slidenewimage');
  // slider control
  const Imagewidth                  = document.getElementById('Imagewidth');
  const checkboxwidth               = document.getElementById('checkboxwidth');
  const ImageHeight                 = document.getElementById('ImageHeight');
  const checkboxheight              = document.getElementById('checkboxheight');
  // animation effect 
  const slideranimation             =document.getElementById('slideranimation');
  const animationeffect             = document.getElementById('csef') ;
  const animatedElement             = document.querySelector('.animated');
  // with control of the slider image 
  const sliderimagewidth            = document.querySelector('.slider');
  // autoplay 
  const autoplay                    = document.getElementById("autoplay"); 
  // slide number 
  const slidenumber                 = document.querySelector('.numbertext');
  const showslidenumber             = document.getElementById("showslidenumber"); 
  // slider speed
  const Autoplayspeed               = document.getElementById('Autoplayspeed'); 
  // show slider name 
  const slidename                   = document.querySelector('.slidename');
  const showslidername              = document.getElementById('showslidername');
  // dot control 
  const dotcontrol                  = document.getElementById('dotcontrol');
  const showdotcontrol              = document.getElementById('showdotcontrol');
  // get the image from the input to the slider 
  const  slidecontainer             = document.querySelector('.hcg-slider-body');
  const sliderimages                = document.querySelectorAll('.sliderimages');
  const image                       = document.querySelector('.image');
  const tabcontainer                = document.querySelector('.tab-container');
  // button to genrate the html css js 
  const generateCodeButton          = document.getElementById('generateCodeButton');
  // html  code genrator  
  const htmlcodegenerator           = document.querySelector('.htmlcodegenerator');
  //  css genrator  
  const csscodegenerator            = document.querySelector('.csscodegenerator');
  // js genrator  
  const jscodegenerator             = document.querySelector('.jscodegenerator');
  let draggedItem = null;
   // on page relode 
  const imageUrls = [
  'https://images.unsplash.com/photo-1682687220777-2c60708d6889?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1682685797498-3bad2c6e161a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1693920182708-63c55d252260?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1687889310587-0f007306256b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  ];
 const altTexts = [
   'Alt Text 1',
   'Alt Text 2',
   'Alt Text 3',
   'Alt Text 4',
   'Alt Text 5',
   // Add more alt text here
 ];
 const imageNames = [
   'Image 1',
   'Image 2',
   'Image 3',
   'Image 4',
   'Image 5',
   // Add more image names here
 ];
 const sliderimagelink = [
    '',
    '',
    '',
    '',
    '',
    // Add more image names here
  ];
for (let i = 0; i < imageUrls.length; i++) {
  const newDiv = document.createElement('div');
   newDiv.classList.add('image-container');
   const editimage = document.createElement('div');
   editimage.className = 'editimage';
   const inputElement = document.createElement('input');
   inputElement.type = 'button'; 
   inputElement.className = 'edit-image';
   inputElement.id = 'edit-image';
   inputElement.value = 'Edit';
   const imagename = document.createElement('p');
   imagename.className = 'imagename';
   imagename.textContent = imageNames[i];
   imagename.setAttribute('imagelink',sliderimagelink[i]);
   const deleteInputElement = document.createElement('div');
   deleteInputElement.type = 'button';
   deleteInputElement.className = 'delete-input';
   deleteInputElement.id = 'delete-input';
   deleteInputElement.value = 'Delete';
  //  icon in delte 
   const icon =document.createElement('i');
   icon.className='fa-solid fa-x';
   deleteInputElement.addEventListener('click', () => {
   imageContainer.removeChild(newDiv);
   loadSliderImages();
   });
   const newImage = document.createElement('img');
   newImage.src = imageUrls[i];
   newImage.className = 'sliderimages';
   newImage.alt = altTexts[i]; 
   imageContainer.appendChild(newDiv);
   newDiv.appendChild(editimage);
  //editimage.appendChild(inputElement);
   editimage.appendChild(imagename);
   editimage.appendChild(deleteInputElement);
   deleteInputElement.appendChild (icon);
   newDiv.appendChild(newImage);
   imageurl.value = '';
   imagealt.value = '';
   imagenameinput.value = '';
   linkurl.value='';
   imageUpload.value='';
 }
 const updateGradient = (imagePath, imageAlt) => {
   const newDiv = document.createElement('div');
   newDiv.classList.add('image-container');
   const editimage = document.createElement('div');
   editimage.className = 'editimage';
   const inputElement = document.createElement('input');
   inputElement.type = 'button'; 
   inputElement.className = 'edit-image';
   inputElement.id = 'edit-image';
   inputElement.value = 'Edit';
   const imagename = document.createElement('p');
    imagename.className = 'imagename';
    const words = (imagenameinput.value !== '') ? imagenameinput.value.split(' ') : imageAlt.split(' ');
    const limitedText = words.slice(0,2).join('');
    const maxCharacterLimit = 10; 
    if (limitedText.length <= maxCharacterLimit) {
    imagename.textContent = limitedText;
    } else {
    imagename.textContent = limitedText.slice(0, maxCharacterLimit);
    }
    const imagelink=linkurl.value;
    imagename.setAttribute('imagelinke',imagelink);
    const deleteInputElement = document.createElement('div');
    deleteInputElement.type = 'button';
    deleteInputElement.className = 'delete-input';
    deleteInputElement.id = 'delete-input';
    deleteInputElement.value = 'Delete';
    const icon =document.createElement('i');
    icon.className='fa-solid fa-x';
   deleteInputElement.addEventListener('click', () => {
   imageContainer.removeChild(newDiv); 
   loadSliderImages();
   });
   const newImage = document.createElement('img');
   newImage.src = imagePath;
   newImage.className = 'sliderimages';
   newImage.alt = imageAlt; // Fixed typo: imagalturl -> imageAlt
   loadSliderImages();
   imageContainer.appendChild(newDiv);
   newDiv.appendChild(editimage);
   // editimage.appendChild(inputElement);
   editimage.appendChild(imagename);
   editimage.appendChild(deleteInputElement);
   deleteInputElement.appendChild(icon);
   newDiv.appendChild(newImage);
    imageurl.value = '';
    imagealt.value = '';
    imagenameinput.value = '';
    linkurl.value='';
    imageUpload.value='';
    newDiv.addEventListener('dragstart', (e) => {
    draggedItem = e.target;
    });
    newDiv.addEventListener('dragend', () => {
    draggedItem = null;
    });
    };
    imageContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
    });
    imageContainer.addEventListener('dragstart', (e) => {
    draggedItem = e.target;
    });
    imageContainer.addEventListener('dragend', () => {
    draggedItem = null;
    });
    imageContainer.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedItem) {
    const draggedDiv = draggedItem.classList.contains('image-container')? draggedItem: draggedItem.parentElement;
    imageContainer.insertBefore(draggedDiv, e.target.nextSibling);
    loadSliderImages();
    }
 });
    imageUpload.addEventListener('change', (event) => {
    const uploadedImage = event.target.files[0];
    if(uploadedImage){
    const imagePath = URL.createObjectURL(uploadedImage);
    const temporaryName = uploadedImage.name; // Get the filename of the uploaded image
    updateGradient(imagePath, temporaryName);
   }
  });
 insertButton.addEventListener('click', (event) => {
   event.preventDefault();
   const imagepath    = imageurl.value;
   const imagealttext = imagealt.value;
   const imagename    = imagenameinput.value;
   if (imagepath.trim() !== '') {
      updateGradient(imagepath, imagealttext);
    };
    });
 // get the image to the slider 
//  lode slider function 
 const loadSliderImages = () => {
   // slidecontainer.innerHTML = '';
   setTimeout( () => {
     document.querySelectorAll(".mySlides").forEach(img => img.remove());
     let sliderimages  = document.querySelectorAll('.sliderimages'); 
     let imagenames    = document.querySelectorAll(".imagename");
      //  link in imag  
      const linkurl      = document.getElementById('linkurl');
     sliderimages.forEach((imgElement, index) => {
     const srcValue = imgElement.getAttribute('src');
     const content = imagenames[index].textContent;
     const mySlidesdiv = document.createElement('div');
     mySlidesdiv.className = 'mySlides animated';
     const slidenumber = document.createElement('div');
     slidenumber.className = 'numbertext';

      if (showslidenumber.checked) {
          slidenumber.innerText = (index + 1) + ' / ' + sliderimages.length;
      } else {
          // If you want to remove the slide number when the checkbox is unchecked
          slidenumber.innerText = ''; // Clear the slide number text
      }
    const imagelink =document.createElement('a');
    imagelink.href=linkurl.value?imgelink:'';
    const newImg = document.createElement('img');
    newImg.className = 'image';
    newImg.setAttribute('src', srcValue);
    const showSliderNameHandler = (event) => {
    if (event.target.checked) {
        const slideimagep = document.createElement('p');
        slideimagep.className = 'captionp';
        slideimagep.textContent = content; 
        mySlidesdiv.appendChild(slideimagep);
    } 
    else {
        document.querySelectorAll('.captionp').forEach((caption) => {
        caption.remove();
        });
      }
    };
    const showslidername = document.getElementById('showslidername'); 
    showslidername.addEventListener('change', showSliderNameHandler);
    if (showslidername.checked) {
      showSliderNameHandler({ target: showslidername });
    }
    // append class   
    slidecontainer.appendChild(mySlidesdiv);
    mySlidesdiv.appendChild(slidenumber);
    mySlidesdiv.appendChild(newImg);
    // imagelink.appendChild(newImg);
    const firstSlide = document.querySelector('.mySlides');
    if (firstSlide) {
      firstSlide.style.display = 'block';
    }  
    }); 
    // show dot control 
    const initializeDotControls = () => {
    const imageContainers = document.querySelectorAll('.image-container');
    const dotcontrol = document.getElementById('dotcontrol');  
    if (showdotcontrol.checked) {
      dotcontrol.innerHTML = ''; // Clear existing dots
      imageContainers.forEach((container, index) => { 
      console.log('output',index);
      const span = document.createElement('span');
      span.className = 'dot';
      span.setAttribute('onclick', `currentSlide(${index + 1})`);
      dotcontrol.appendChild(span);   
    });
    } 
    else{
        dotcontrol.innerHTML = ''; // Clear all dots when unchecked
        }
    };
    showdotcontrol.addEventListener('change', initializeDotControls) 
    if(showdotcontrol.checked)
    {
    initializeDotControls();
    }
    // start animation 
    const animationcontrol = () => {
        if(slideranimation.checked){
          animationeffect.removeAttribute('disabled');
          animationeffect.style.backgroundColor='#fff'; 
        }
        else{
        animationeffect.setAttribute('disabled','true');
        animationeffect.style.backgroundColor='#ebebe4';
        const animatedElements = document.querySelectorAll(".animated");
        animatedElements.forEach((element) => {
          element.style.animationName ='fadeIn';
        });
        }
      }
     const  animationvalue = () => {
        const animationname = animationeffect.value;
        const animatedElements = document.querySelectorAll(".animated");  
        animatedElements.forEach((element) => {
          element.style.animationName = animationname;
        });
      }
      slideranimation.addEventListener('change', animationcontrol)
      if(slideranimation.checked){
        animationcontrol();
      }
      animationeffect.addEventListener('change', animationvalue)   
      if(animationeffect){
        animationvalue();
      }
  }, 1000);
};
 loadSliderImages();
//  show slider number 
 showslidenumber.addEventListener('change', (event) => {
    if (showslidenumber.checked) {
      let sliderimages = document.querySelectorAll('.sliderimages');
      let numbertextElements = document.querySelectorAll('.numbertext');
  
      sliderimages.forEach((imgElement, index) => {
        numbertextElements[index].innerText = (index + 1) + ' / ' + sliderimages.length;
      });
    } else {
      //  remove the slide number when the checkbox is unchecked
      let numbertextElements = document.querySelectorAll('.numbertext');
      numbertextElements.forEach((numbertextElement) => {
        numbertextElement.innerText = ''; 
      });
    }
  });
  // slider control 
  // image width 
  Imagewidth.addEventListener('input', (event) => {
  const newWidth = event.target.value + 'px'; 
  sliderimagewidth.style.width = newWidth;
  });
  checkboxwidth.addEventListener('change', (event) => {
  if (checkboxwidth.checked) {
    Imagewidth.setAttribute('readonly','');
    Imagewidth.style.backgroundColor= "#ebebe4";
    const newWidth = '100%'; // Set the new width value
    sliderimagewidth.style.maxWidth = newWidth;
  }
  else{
     Imagewidth.removeAttribute('readonly');
     Imagewidth.style.backgroundColor= "#fff";
  }
  });
  // image height
  ImageHeight.addEventListener('input', (event) => {
    const newheight = event.target.value + 'px'; 
    sliderimagewidth.style.height = newheight;
  });
  checkboxheight.addEventListener('change', (event) => {
    if (checkboxheight.checked) {
      ImageHeight.setAttribute('readonly','');
      ImageHeight.style.backgroundColor= "#ebebe4";
      const newheight = '100%'; // Set the new height value
      sliderimagewidth.style.height = newheight;
    }
    else{
      ImageHeight.removeAttribute('readonly');
      ImageHeight.style.backgroundColor= "#fff";
    }
  });
  // autoplay  slider
  autoplay.addEventListener('change', (event) => {
  if (event.target.checked) {
    const sliderspeedInSeconds = parseFloat(Autoplayspeed.value) || 3; // Default value in seconds
    const sliderspeedInMilliseconds = sliderspeedInSeconds * 1000; // Convert to milliseconds  
    intervalId = setInterval(autoPlay, sliderspeedInMilliseconds);
    Autoplayspeed.removeAttribute('readonly');
    Autoplayspeed.style.backgroundColor='#fff';
  } else {
    clearInterval(intervalId);
    Autoplayspeed.setAttribute('readonly','');
    Autoplayspeed.style.backgroundColor='#ebebe4';
  }
  });
  Autoplayspeed.addEventListener('input', (event) => {
  const sliderspeed = parseFloat(event.target.value);
  setAutoplayDelay(sliderspeed);
  });
    // Function to set the autoplay delay speed 
    function setAutoplayDelay(delay) {
    clearInterval(intervalId); // Clear any existing interval
    if (autoplay.checked) {
      const delayInMilliseconds = delay * 1000; // Convert to milliseconds
      intervalId = setInterval(autoPlay, delayInMilliseconds);
    }
    }
   // show the slider number 
   showslidenumber.addEventListener('change', (event) => {
     if (event.target.checked) {
       slidenumber.classList.remove('hidden');
     }
   else{
     slidenumber.classList.add('hidden');
   }
     })
  });
    //   code genrator 
    const htmlcodegen=document.getElementById('htmlcodegen');
    const csscodegen =document.getElementById('csscodegen');
    const jscodegen =document.getElementById('js');
    generateCodeButton.addEventListener('click',(event)=>{
    htmlcodegen.classList.remove('hidden');
    csscodegen.classList.remove('hidden');
    jscodegen.classList.remove('hidden');        
    });
  generateCodeButton.addEventListener('click',(event)=>{
        clearGeneratedCode();
        const generatedHtml = generateHTMLCode();
        const generatedCss  = generateCssCode();
        const generatedJss  = generatejsCode();
        const generatedCodeHtmlContainer = document.createElement('div');  // Create a container for HTML code
        const generatedCodeHtml = document.createElement('textarea');  
        generatedCodeHtml.className="codegenpre";
        generatedCodeHtml.id="htmlcodegenpre";
        generatedCodeHtml.textContent = generatedHtml;  // Set HTML code
        // generatedCodeHtmlContainer.appendChild(generatedCodeHtml);  // Append pre block to container
        htmlcodegenerator.appendChild(generatedCodeHtml);    
        // genrate css 
        const generatedCodeCssContainer =document.createElement('div');
        const generatedCodeCss = document.createElement('textarea');  
        generatedCodeCss.textContent = generatedCss; 
        generatedCodeCss.className="codegenpre";
        generatedCodeCss.id="csscodegenpre";
        // generatedCodeCssContainer.appendChild(generatedCodeCss);
        csscodegenerator.appendChild(generatedCodeCss);
        // genrate js code 
        const generatedCodejsContainer =document.createElement('div');
        const generatedCodeJss = document.createElement('textarea');  
        generatedCodeJss.textContent = generatedJss; 
        generatedCodeJss.className="codegenpre";
        generatedCodeJss.id="jscodegenpre";
        jscodegenerator.appendChild(generatedCodeJss);
        // jscodegenerator.appendChild(generatedCodejsContainer);
  })
  // function to clear the previous genrated code 
  function clearGeneratedCode() {
      while (htmlcodegenerator.firstChild) {
        htmlcodegenerator.removeChild(htmlcodegenerator.firstChild);
      }
      while (csscodegenerator.firstChild) {
        csscodegenerator.removeChild(csscodegenerator.firstChild);
      }
      while (jscodegenerator.firstChild) {
        jscodegenerator.removeChild(jscodegenerator.firstChild);

        }
    }
  // genrate html code
  function generateHTMLCode() {
  let newId           = 'slidecontainer1'; 
  let sliderWidth     = '1000px'; // Default width
  let sliderHeight    = '500px'; // Default height
  const dummyname     = document.getElementById('dummyname');
  const Imagewidth    = document.getElementById('Imagewidth');
  const ImageHeight   = document.getElementById('ImageHeight');
  if (dummyname) {
    newId = dummyname.value;  
  }
  if(Imagewidth){
    sliderwidth = Imagewidth.value + 'px';
  }
  if(ImageHeight){
    sliderHeight =ImageHeight.value + 'px';
  }
  const imageContainers = document.querySelectorAll('.image-container');
 
  const imageCount = imageContainers.length;
 
  const imagesHTML = Array.from(imageContainers)
    .map((container, index) => {
      return `<span class="dot" onclick="currentSlide(${index + 1})"></span>`;
    })
    .join('\n');
  const generatedHtml = `
    <div class="boxLayout" id="${newId?newId:'slidecontainer1'}">
      <div class="box" id="box">
        <div class="slider"style="max-width:${Imagewidth.value.length > 0 ?sliderwidth:'1000px'};height:${ImageHeight.value.length > 0 ?sliderHeight:'500px'};">
          <div class="hcg-slider-body">
            <a class="prev" onclick="plusSlides(-1)"><</a>
            <a class="next" onclick="plusSlides(1)">></a>
          </div>
        </div>
      </div>
    </div>
  <div class="dotcontrol ${showdotcontrol.checked?'':'hidden'}" id="dotcontrol" style="text-align:center">
    ${imagesHTML}
</div>`;
    return generatedHtml;
  }
    // genrate css 
    function generateCssCode(){
      let newId = 'slidecontainer1'; 
      Imagewidth='';
     const dummyname    = document.getElementById('dummyname');
      if (dummyname) {
        newId = dummyname.value;
      }
    const slideranimation= document.getElementById('slideranimation');
    const animationname =document.getElementById('csef');
    const nameanimation= animationname;
    const generatedcss = `
    #${dummyname.value.length>0?newId:'slidecontainer1'} {
    padding: 30px;
    width: auto;
    margin-left: 20%;
    margin-right: 20%;
    }
    .slider {
      max-width: 100%;
      position: relative;
      overflow: hidden;
      max-height: 500px;
    }
    .slider {
    max-width: 
    728px;position: 
    relative;margin: auto;
  }
  .hidden{
    display:none;
  }
    .hcg-slider-body {
      height: 100%;
      width: 100%;
    }
    .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 57%;
      width: auto;
      padding: 16px;
      margin-top: -22px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      transition: 0.6s ease;
      border-radius: 0 3px 3px 0;
      user-select: none;
    }
    .next {
      right: 0px;
      border-radius: 8px 0 0 3px;
      top: 57%;
    }
    .prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
    }
    .mySlides {
      width: 100%;
      height: 100%;
    }
    .numbertext {
      color: black;
      font-size: 12px;
      padding: 8px 12px;
      position: absolute;
      top: 0;
      font-size: 12px;
      padding: 4px 7px;
      position: absolute;
      border-radius: 5px;
      top: 5px;
      left: 5px;
      background-color: rgba(255,255,255,0.30);
    }
    .captionp {
      color: #fff;
      font-size: 14px;
      padding: 3px 5px;
      position: absolute;
      bottom: 0;
      border-radius: 5px;
      left: 50%;
      text-align: center;
      text-shadow: 0 0 2px #000;
      background-color: rgba(255,255,255,0.30);
      display: inline-block;
      transform: translate(-50%,-5px);
    }
    .dot.active {
      background-color: #717171;
    }
  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }
  .image {
  width: 100%;
  height: 100%;
  }
  @keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
  transform: translateY(0);
  }
  40% {
  transform: translateY(-30px);
  }
  60% {
  transform: translateY(-15px);
  }
  }
  @keyframes bounceInDown {
  from {
  transform: translateY(-1000px);
  }
  to {
  transform: translateY(0);
  }
  }
  @keyframes bounceInLeft {
  from {
  transform: translateX(-1000px);
  }
  to {
  transform: translateX(0);
  }
  }
  @keyframes bounceInRight {
  from {
  transform: translateX(1000px);
  }
  to {
  transform: translateX(0);
  }
  }

  @keyframes bounceInUp {
  from {
  transform: translateY(1000px);
  }
  to {
  transform: translateY(0);
  }
  }

  @keyframes fadeIn {
  from {
  opacity: 0;
  }
  to {
  opacity: 1;
  }
  }
  .animated {
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  /* animation-fill-mode: both; */
  animation-name: ${slideranimation.checked ? nameanimation.value : 'fadeIn'};
    }`;
 return generatedcss;
    }
    // genrate javascript 
    
  function generatejsCode() {
  const showslidername = document.getElementById('showslidername');
  const imageContainers = document.querySelectorAll('.image-container');
  
  const extractedImageUrls   = [];
  const extractedAltTexts    = [];
  const extendimagename      = [];
  const alink                = [];
  imageContainers.forEach((container, index) => {
    
  const imageElement  = container.querySelector('.sliderimages');
  const name          = container.querySelector('.imagename');
  const imagelink     = name.getAttribute('imagelinke');
  console.log('linkeimage-',imagelink);
  
  const imagenamep    = name.textContent;
  const imageUrl      = imageElement.src;
  const altText       = imageElement.alt;
  
  extractedImageUrls.push(imageUrl);
  extractedAltTexts.push(altText);
  extendimagename.push(imagenamep);
  alink.push(imagelink);
  });
  const imageUrls  = extractedImageUrls;
  const altTexts   = extractedAltTexts;
  const imagename  = extendimagename;
  const Autoplayspeed =document.getElementById('Autoplayspeed');
  const speedspeed =Autoplayspeed.value*1000; 
  // console.log('IMAGEURL ---', imageUrls);
  console.log('IMAGEALT --', altTexts);
  console.log('imagename',imagename);
  console.log('imagelink',)
  const generatedjs = `
  const imageUrls =[
  ${imageUrls.map(url => `'${url}'`).join(',\n  ')}
  ];
  const altTexts =[
  ${altTexts.map(text => `'${text}'`).join(',\n ')}
  ];
  const imageNames = [
  ${imagename.map(name => `'${name}'`).join(',\n  ')}  
  ];
  const alink=[
      ${alink.map(link => `'${link}'`).join(',\n   ')}
  ];
  const sliderbody = document.querySelector('.hcg-slider-body');
  for (let i = 0; i < imageUrls.length; i++) {
  const newdivimage = document.createElement('div');
  newdivimage.className = 'mySlides animated';
  const slidernumber = document.createElement('div');
  slidernumber.className = 'numbertext';
  slidernumber.innerText = (i + 1) + ' / ' + imageUrls.length;
  const atag =document.createElement('a');
  atag.setAttribute('href',alink[i]);
  const sliderimage = document.createElement('img');
  sliderimage.className = 'image';
  sliderimage.setAttribute('src', imageUrls[i]);
  sliderimage.setAttribute('alt', altTexts[i]);
  const slidername = document.createElement('div');
  slidername.className ='${showslidername.checked?'captionp':'hidden'}';
  slidername.textContent = imageNames[i];
  sliderbody.appendChild(newdivimage);
  ${showslidenumber.checked?'newdivimage.appendChild(slidernumber);':''};
  if(alink[i]!='null'){
    newdivimage.appendChild(atag);
    atag.appendChild(sliderimage);
  }
  if(alink[i]=='null' ||alink[i]==''){
   newdivimage.appendChild(sliderimage);
  }
   newdivimage.appendChild(slidername);
  }
  let slideIndex = 1;
  showSlides(slideIndex);
  // Function to increase or decrease slide index by n
  function plusSlides(n) {
  showSlides(slideIndex += n);
  }
  // Function to set current slide index to n
  function currentSlide(n) {
  showSlides(slideIndex = n);
  }
  // Function to display the slides and update the active dot
  function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  // Wrap around to the first slide if going beyond the last slide
  if (n > slides.length) {
    slideIndex = 1;
  }    
  // Wrap around to the last slide if going before the first slide
  if (n < 1) {
    slideIndex = slides.length;
  }
  // Hide all slides and remove active class from dots
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  } 
  // Display the current slide and set active class to the corresponding dot
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  // add animation in the slide 
  }
  // Function to automatically play the slides
    ${autoplay.checked? `setInterval(autoPlay,${speedspeed})`:''}; 
  function autoPlay() {
  plusSlides(1); // Increment slide index by 1
  };
  `;
      return generatedjs;
    };
  
  // Function to copy code to clipboard
    function copyCodeToClipboard(buttonId, codeBlockId) {
      const generatedCodePre = document.getElementById(codeBlockId);
      const codeToCopy = generatedCodePre.textContent;

      const tempTextarea = document.createElement("textarea");
      tempTextarea.value = codeToCopy;
      document.body.appendChild(tempTextarea);
      tempTextarea.select();
      document.execCommand("copy");
      document.body.removeChild(tempTextarea);

      const copyCodeButton = document.getElementById(buttonId);
      copyCodeButton.innerHTML = '<i class="fas fa-clipboard"></i> Copied';
      generatedCodePre.classList.add("fade-out");

      setTimeout(function () {
        copyCodeButton.innerHTML = '<i class="fas fa-clone"></i> Copy Code';
        generatedCodePre.classList.remove("fade-out");
      }, 500);
    }

    // Add event listeners for different buttons
    document.getElementById("htmlcopyCodeButton").addEventListener("click", function () {
      copyCodeToClipboard("htmlcopyCodeButton", "htmlcodegenpre");
    });

    document.getElementById("csscopyCodeButton").addEventListener("click", function () {
      copyCodeToClipboard("csscopyCodeButton", "csscodegenpre");
    });

    document.getElementById("jscopyCodeButton").addEventListener("click", function () {
      copyCodeToClipboard("jscopyCodeButton", "jscodegenpre");
    });

    //  run the code 

    document.getElementById("runCodeButton").addEventListener("click", function () {
      const generatedHTMLCode = generateHTMLCode();
      const generatedCssCode = generateCssCode();
      const generatedJsCode = generatejsCode();

      const newTab = window.open('about:blank');
      const combinedCode = ` <style>${generatedCssCode}</style><body>
      ${generatedHTMLCode} 
      
      </body>
      `;

      newTab.document.write(combinedCode);
      newTab.document.close();
      const scriptElement = newTab.document.createElement('script');
      scriptElement.textContent = generatedJsCode;
      newTab.document.body.appendChild(scriptElement);

    })

  //  create a slider 
  let slideIndex = 1;
  showSlides(slideIndex);

  // Function to increase or decrease slide index by n
  function plusSlides(n) {
  showSlides(slideIndex += n);
  }

  // Function to set current slide index to n
  function currentSlide(n) {
  showSlides(slideIndex = n);
  }

  
  // Function to display the slides and update the active dot
  function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Wrap around to the first slide if going beyond the last slide
  if (n > slides.length) {
    slideIndex = 1;
  }    
  // Wrap around to the last slide if going before the first slide
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  // Hide all slides and remove active class from dots
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Display the current slide and set active class to the corresponding dot
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  // add animation in the slide 

  }

  // Function to automatically play the slides
  function autoPlay() {
  plusSlides(1); 
  }