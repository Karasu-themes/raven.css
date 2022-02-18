
/*!
* RavenCSS -  v1.2.0
* Copyright 2020 © Karasu themes
* Developed by Marcelo (github.com/MarceloTLD)
* MIT License (//github.com/Karasu-themes/karasu/blob/master/LICENSE)
*/
    
var raven = (function () {
	'use strict';

	const each = (array, callback)=>{
		for (var i = 0; i < array.length; i++) {
			callback.call(array[i], i, array[i]);
		}
	};

	const checkType = (el) => {
	  let type = el.getAttribute('data-type');
	  return type ? type : "default";
	};

	const template = {
	  image: (source) => {
	    let img = document.createElement('img');
	    img.src=source;
	    return img;
	  },
	  iframe: (source) => {
	    let iframe = document.createElement('iframe');
	    iframe.src=source;
	    iframe.setAttribute('allowfullscreen', '');
	    return iframe
	  },
	  video: (source) => {
	    let video = document.createElement('video');
	    video.src=source;
	    video.setAttribute('controls', '');
	    return video;
	  }
	};

	const htmlModal = (node, trigger, type) => {
	  let outerModal = document.createElement('div'),
	    modal = document.createElement('div');
	    
	  outerModal.classList.add('cv-modal');
	  modal.classList.add('cv-modal-container');

	  // Modo compacto
	  if (type == "compact") {
	    let getContent = node.getAttribute('data-modal-txt');
	    modal.classList.add('is-compact');
	    modal.innerHTML=getContent;

	  // Modo multimedia (video, imagenes, iframes)
	  } else if (type == "media") {
	    let url = node.getAttribute('data-url'),
	      media = node.getAttribute('data-media');
	      modal.classList.add('is-media');
	      modal.appendChild(template[media ? media : "image"](url));

	  // Modo por defecto
	  } else {
	    let body = document.getElementById(node.getAttribute('data-modal-bind'));
	    modal.innerHTML=body.innerHTML;
	  }

	  outerModal.appendChild(modal);

	  outerModal.addEventListener('click', (e)=>{
	    let target = e.target;
	    if ( target.classList.contains('cv-modal') ) {
	      outerModal.remove();
	      each(trigger, (i, el) => el.classList.remove('is-visible'));
	    }
	  });
	  
	  return outerModal;

	};

	const modal = () => {
	  let trigger = document.querySelectorAll('.cv-modal-trigger'),
	    body = document.body;
	  each(trigger, (i, modal) => {
	    let type = checkType(modal);
	    modal.addEventListener('click', (e) => {
	      e.preventDefault();
	      let html = htmlModal(modal, trigger, type);
	      if ( !modal.classList.contains('is-visible') ) {
	        modal.classList.add('is-visible');
	        body.appendChild(html);
	      }
	    });
	  });
	};

	const toArray = (arr) => {
	  let temp = [];
	  for (let i = 0; i < arr.length; i++) {
	    temp[i] = arr[i];
	  }
	  return temp;
	};

	const tabs = () => {
	  let trigger = document.querySelectorAll('.cv-tabs');


	  each(trigger, (i, item) => {
	    let tab = toArray(item.querySelectorAll('button')),
	      contents = item.querySelectorAll('.cv-tabs-item');
	      
	    each(tab, (i, el) => {
	      let index = tab.indexOf(el);
	      el.addEventListener('click', () => {
	        // Ocultamos todos contenedores
	        each(contents, (i, el) => el.classList.remove('is-selected'));
	        each(tab, (i, el) => el.classList.remove('is-selected'));

	        // Mostramos el tab actual
	        contents[index].classList.add('is-selected');
	      
	        el.classList.add('is-selected');

	      });

	    });

	  });
	};

	var raven_core = (() => {
	  modal();
	  tabs();
	})();

	return raven_core;

})();
